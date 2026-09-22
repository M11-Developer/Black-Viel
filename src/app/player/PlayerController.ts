import * as THREE from 'three';
import { InputManager } from '../input/InputManager';
import { audioManager } from '../audio/AudioManager';

export type PlayerStance = 'stand' | 'crouch' | 'prone' | 'slide';
export type PlayerMoveState = 'idle' | 'walk' | 'jog' | 'sprint' | 'crouch_walk' | 'prone_crawl' | 'slide' | 'jump' | 'fall' | 'vault' | 'mantle' | 'climb' | 'land';

export interface PlayerStats {
  health: number;
  maxHealth: number;
  armor: number;
  stamina: number;
  maxStamina: number;
}

/**
 * BLACK VEIL v1.4.0 FINAL - Realistic Player Controller
 * Physics: momentum, friction curves, air control, inertia
 * Movement: vault, mantle, slide, prone, lean, variable jump, step smoothing
 * Realism: stamina delay, weight, head bob procedural, footstep based on surface
 */

export class PlayerController {
  position = new THREE.Vector3(0, 1.8, 0);
  velocity = new THREE.Vector3();
  rotation = new THREE.Euler(0, 0, 0, 'YXZ');
  yaw = 0;
  pitch = 0;
  lean = 0; // -1 left, 1 right

  stance: PlayerStance = 'stand';
  moveState: PlayerMoveState = 'idle';
  isGrounded = true;
  isAiming = false;
  isSprinting = false;
  isCrouching = false;
  isProne = false;
  isSliding = false;

  stats: PlayerStats = {
    health: 100,
    maxHealth: 100,
    armor: 50,
    stamina: 100,
    maxStamina: 100,
  };

  // Realistic movement values - tuned for AAA feel
  private walkSpeed = 2.6;
  private jogSpeed = 4.8;
  private sprintSpeed = 7.4;
  private crouchSpeed = 1.9;
  private proneSpeed = 0.95;
  private slideSpeed = 9.2;
  private jumpForce = 5.6;
  private gravity = -18.5; // slightly heavier for realistic fall
  private coyoteTime = 0.22;
  private coyoteTimer = 0;
  private jumpBufferTime = 0.18;
  private jumpBufferTimer = 0;
  private footstepTimer = 0;
  private slideTimer = 0;
  private vaultCooldown = 0;
  private staminaRegenDelay = 0;
  private landTimer = 0;
  private vaultProgress = 0;
  private isVaulting = false;
  private vaultStart = new THREE.Vector3();
  private vaultEnd = new THREE.Vector3();

  // Advanced physics
  private groundFriction = 12.0;
  private airFriction = 1.2;
  private airControl = 0.45;
  private momentum = new THREE.Vector3();
  private lastGroundNormal = new THREE.Vector3(0,1,0);
  private stepHeight = 0.45;
  private stepSmooth = 0;

  private colliders: THREE.Box3[] = [];
  private radius = 0.42;
  private heightStand = 1.8;
  private heightCrouch = 1.05;
  private heightProne = 0.45;
  private heightSlide = 0.65;

  mesh: THREE.Group;
  private cameraTarget = new THREE.Vector3();
  private wasGrounded = true;
  private time = 0;

  constructor(private input: InputManager) {
    this.mesh = new THREE.Group();
  }

  setColliders(boxes: THREE.Box3[]) {
    this.colliders = boxes;
  }

  private checkCollision(pos: THREE.Vector3, height: number, radiusOverride?: number): THREE.Box3 | null {
    const r = radiusOverride ?? this.radius;
    const box = new THREE.Box3(
      new THREE.Vector3(pos.x - r, pos.y, pos.z - r),
      new THREE.Vector3(pos.x + r, pos.y + height, pos.z + r)
    );
    for (const c of this.colliders) {
      if (box.intersectsBox(c)) return c;
    }
    return null;
  }

  private checkCollisionBox(testBox: THREE.Box3): THREE.Box3 | null {
    for (const c of this.colliders) {
      if (testBox.intersectsBox(c)) return c;
    }
    return null;
  }

  private canVault(): { can: boolean; height: number; depth: number; box?: THREE.Box3; topY: number } {
    const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.yaw);
    const checkPos = this.position.clone().add(forward.clone().multiplyScalar(0.85));
    checkPos.y += 0.3;
    const box = this.checkCollision(checkPos, 1.2);
    if (box) {
      const height = box.max.y - this.position.y;
      const depth = box.max.z - box.min.z;
      if (height > 0.25 && height < 1.75) {
        // Check if space above is clear for mantle
        const abovePos = this.position.clone().add(forward.clone().multiplyScalar(1.2));
        abovePos.y = box.max.y + 0.35;
        if (!this.checkCollision(abovePos, 0.9, 0.38)) {
          // Check landing spot beyond obstacle
          const landingPos = this.position.clone().add(forward.clone().multiplyScalar(1.6));
          landingPos.y = box.max.y + 0.1;
          if (!this.checkCollision(landingPos, 0.6, 0.35)) {
            return { can: true, height, depth, box, topY: box.max.y };
          }
        }
      }
    }
    return { can: false, height: 0, depth: 0, topY: 0 };
  }

  private moveWithCollision(delta: THREE.Vector3, dt: number) {
    const currentHeight = this.isSliding ? this.heightSlide : this.isProne ? this.heightProne : this.stance === 'crouch' ? this.heightCrouch : this.heightStand;
    
    // X movement with step smoothing
    let next = this.position.clone().add(new THREE.Vector3(delta.x, 0, 0));
    let coll = this.checkCollision(next, currentHeight);
    if (!coll) {
      this.position.x = next.x;
    } else {
      // Try step up
      const stepPos = next.clone();
      stepPos.y += this.stepHeight;
      if (!this.checkCollision(stepPos, currentHeight - this.stepHeight + 0.1)) {
        this.position.x = next.x;
        this.position.y = THREE.MathUtils.lerp(this.position.y, stepPos.y, dt * 12);
        this.stepSmooth = 0.15;
      } else {
        // Slide along wall - reduce velocity but keep momentum along wall
        this.velocity.x *= 0.25;
        this.momentum.x *= 0.5;
        // Try to slide
        const slideDelta = new THREE.Vector3(delta.x * 0.5, 0, 0);
        const slidePos = this.position.clone().add(slideDelta);
        if (!this.checkCollision(slidePos, currentHeight)) {
          this.position.x = slidePos.x;
        }
      }
    }
    
    // Z movement
    next = this.position.clone().add(new THREE.Vector3(0, 0, delta.z));
    coll = this.checkCollision(next, currentHeight);
    if (!coll) {
      this.position.z = next.z;
    } else {
      const stepPos = next.clone();
      stepPos.y += this.stepHeight;
      if (!this.checkCollision(stepPos, currentHeight - this.stepHeight + 0.1)) {
        this.position.z = next.z;
        this.position.y = THREE.MathUtils.lerp(this.position.y, stepPos.y, dt * 12);
        this.stepSmooth = 0.15;
      } else {
        this.velocity.z *= 0.25;
        this.momentum.z *= 0.5;
        const slideDelta = new THREE.Vector3(0, 0, delta.z * 0.5);
        const slidePos = this.position.clone().add(slideDelta);
        if (!this.checkCollision(slidePos, currentHeight)) {
          this.position.z = slidePos.z;
        }
      }
    }
    
    // Y movement
    next = this.position.clone().add(new THREE.Vector3(0, delta.y, 0));
    const collY = this.checkCollision(next, currentHeight);
    if (!collY) {
      this.position.y = next.y;
    } else {
      if (delta.y < 0) {
        this.isGrounded = true;
        this.position.y = collY.max.y + 0.06;
        this.velocity.y = Math.max(0, this.velocity.y);
        this.lastGroundNormal.set(0,1,0); // could compute from box
      } else {
        this.velocity.y = Math.min(0, this.velocity.y);
        // Hit ceiling - push down slightly
        this.position.y = collY.min.y - currentHeight - 0.05;
      }
    }
    
    // Ground clamp - prevent sinking
    if (this.position.y < 0.06) {
      this.position.y = 0.06;
      this.isGrounded = true;
      this.velocity.y = 0;
    }
  }

  update(dt: number, camera: THREE.Camera) {
    this.time += dt;
    this.input.update();
    this.vaultCooldown = Math.max(0, this.vaultCooldown - dt);
    this.staminaRegenDelay = Math.max(0, this.staminaRegenDelay - dt);
    this.landTimer = Math.max(0, this.landTimer - dt);
    this.stepSmooth = Math.max(0, this.stepSmooth - dt);

    // Vaulting interpolation
    if (this.isVaulting) {
      this.vaultProgress += dt * 2.2;
      if (this.vaultProgress >= 1) {
        this.isVaulting = false;
        this.vaultProgress = 0;
        this.position.copy(this.vaultEnd);
        this.velocity.y = 1.5;
        this.moveState = this.vaultEnd.y - this.vaultStart.y > 1.0 ? 'mantle' : 'vault';
      } else {
        // Bezier curve for vault
        const t = this.vaultProgress;
        const ease = t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t; // easeInOutQuad
        this.position.lerpVectors(this.vaultStart, this.vaultEnd, ease);
        // Arc height
        const arc = Math.sin(t * Math.PI) * 0.6;
        this.position.y += arc;
        return; // skip normal movement during vault
      }
    }

    const look = this.input.consumeLook();
    const sens = this.isAiming ? 0.42 : this.isProne ? 0.65 : 1.0;
    this.yaw -= look.x * sens;
    this.pitch += look.y * sens;
    this.pitch = THREE.MathUtils.clamp(this.pitch, -1.48, 1.48);

    // Lean input Q/E
    const leanInput = (this.input as any).state?.lean ?? 0;
    if (leanInput !== 0) {
      this.lean = THREE.MathUtils.lerp(this.lean, leanInput, dt * 6);
    } else {
      this.lean = THREE.MathUtils.lerp(this.lean, 0, dt * 8);
    }

    const wantCrouch = this.input.state.crouch;
    const wantProne = (this.input as any).state?.prone ?? false;
    const wantSlide = wantCrouch && this.isSprinting && this.isGrounded && this.velocity.length() > 4.2 && !this.isProne;

    // Stance handling with smooth transitions
    if (wantProne && this.isGrounded && !this.isVaulting) {
      this.isProne = true;
      this.stance = 'prone';
      this.isCrouching = false;
      this.isSliding = false;
    } else if (wantSlide && !this.isSliding && this.slideTimer <= 0 && !this.isProne) {
      this.isSliding = true;
      this.isProne = false;
      this.slideTimer = 0.95;
      this.moveState = 'slide';
      audioManager.playProceduralSound('footstep');
      // Add momentum boost
      const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.yaw);
      this.velocity.add(forward.multiplyScalar(2.5));
    } else if (!wantProne) {
      if (this.isSliding) {
        this.slideTimer -= dt;
        this.stance = 'slide';
        this.isCrouching = true;
        if (this.slideTimer <= 0 || this.velocity.length() < 1.2) {
          this.isSliding = false;
          this.stance = wantCrouch ? 'crouch' : 'stand';
          this.isCrouching = wantCrouch;
          this.isProne = false;
        }
      } else {
        if (this.isProne && !wantProne) {
          // Check if can stand from prone
          const standCheck = this.position.clone();
          standCheck.y += 0.2;
          if (!this.checkCollision(standCheck, this.heightStand - 0.2)) {
            this.isProne = false;
            this.stance = wantCrouch ? 'crouch' : 'stand';
            this.isCrouching = wantCrouch;
          } else if (!this.checkCollision(standCheck, this.heightCrouch - 0.2)) {
            this.isProne = false;
            this.stance = 'crouch';
            this.isCrouching = true;
          }
        } else if (!this.isProne) {
          this.stance = wantCrouch ? 'crouch' : 'stand';
          this.isCrouching = wantCrouch;
        }
      }
    }

    this.isSprinting = this.input.state.sprint && this.input.state.move.length() > 0.5 && !this.isCrouching && !this.isProne && !this.isSliding && this.stats.stamina > 6 && !this.isAiming;
    this.isAiming = this.input.state.aim;

    const moveInput = this.input.state.move;
    const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.yaw);
    const right = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.yaw);
    const moveDir = new THREE.Vector3();
    moveDir.addScaledVector(forward, moveInput.y);
    moveDir.addScaledVector(right, moveInput.x);
    if (moveDir.lengthSq() > 0) moveDir.normalize();

    let targetSpeed = 0;
    if (this.isSliding) {
      targetSpeed = this.slideSpeed * (this.slideTimer / 0.95);
      moveDir.copy(forward);
    } else if (moveInput.lengthSq() > 0.01) {
      if (this.isProne) targetSpeed = this.proneSpeed;
      else if (this.isSprinting) targetSpeed = this.sprintSpeed;
      else if (this.isCrouching) targetSpeed = this.crouchSpeed;
      else if (moveInput.length() > 0.9) targetSpeed = this.jogSpeed;
      else targetSpeed = this.walkSpeed;
      if (this.isAiming) targetSpeed *= 0.48;
    }

    // Advanced acceleration with momentum
    const isGroundedNow = this.isGrounded;
    const accel = isGroundedNow ? (this.isSliding ? 2.2 : this.isProne ? 6 : 18) : this.airControl * 16;
    const friction = isGroundedNow ? this.groundFriction : this.airFriction;
    
    // Apply friction to momentum
    this.momentum.multiplyScalar(1 - friction * dt * 0.15);
    
    const desiredVel = moveDir.multiplyScalar(targetSpeed);
    
    if (!this.isSliding) {
      // Realistic lerp with momentum preservation
      this.velocity.x = THREE.MathUtils.lerp(this.velocity.x, desiredVel.x + this.momentum.x, accel * dt);
      this.velocity.z = THREE.MathUtils.lerp(this.velocity.z, desiredVel.z + this.momentum.z, accel * dt);
    } else {
      this.velocity.x = THREE.MathUtils.lerp(this.velocity.x, desiredVel.x * 1.15, accel * dt);
      this.velocity.z = THREE.MathUtils.lerp(this.velocity.z, desiredVel.z * 1.15, accel * dt);
    }

    if (!isGroundedNow) {
      this.velocity.y += this.gravity * dt;
      // Air drag
      this.velocity.x *= 1 - 0.08 * dt;
      this.velocity.z *= 1 - 0.08 * dt;
    }

    // Jump buffering
    if (this.input.state.jump) {
      this.jumpBufferTimer = this.jumpBufferTime;
    } else {
      this.jumpBufferTimer = Math.max(0, this.jumpBufferTimer - dt);
    }

    if (this.jumpBufferTimer > 0) {
      if (this.isSliding) {
        this.isSliding = false;
        this.velocity.y = this.jumpForce * 0.92;
        this.velocity.x *= 1.18;
        this.velocity.z *= 1.18;
        this.isGrounded = false;
        this.moveState = 'jump';
        this.jumpBufferTimer = 0;
        audioManager.playProceduralSound('footstep');
      } else if ((this.isGrounded || this.coyoteTimer > 0) && this.vaultCooldown <= 0 && !this.isProne) {
        const vault = this.canVault();
        if (vault.can && moveInput.length() > 0.25 && vault.height > 0.4) {
          // Start vault animation
          this.isVaulting = true;
          this.vaultProgress = 0;
          this.vaultStart.copy(this.position);
          this.vaultEnd.copy(this.position).add(forward.clone().multiplyScalar(1.55));
          this.vaultEnd.y = vault.topY + 0.12;
          this.vaultCooldown = 0.7;
          this.jumpBufferTimer = 0;
          audioManager.playProceduralSound('footstep');
          console.log('[Player] Vault start', vault.height.toFixed(2));
        } else {
          // Normal jump with variable height - hold jump for higher
          this.velocity.y = this.jumpForce * (this.isSprinting ? 1.08 : 1.0);
          this.isGrounded = false;
          this.coyoteTimer = 0;
          this.jumpBufferTimer = 0;
          this.moveState = 'jump';
          this.staminaRegenDelay = 0.4;
          audioManager.playProceduralSound('footstep');
          // Add jump momentum
          this.momentum.add(forward.clone().multiplyScalar(this.isSprinting ? 1.5 : 0.5));
        }
      } else if (this.isProne) {
        // Get up from prone with jump
        this.isProne = false;
        this.stance = 'crouch';
        this.isCrouching = true;
        this.jumpBufferTimer = 0;
      }
    }

    // Variable jump height - cut jump short if released early
    if (!this.input.state.jump && this.velocity.y > 2.5) {
      this.velocity.y *= 0.55;
    }

    if (isGroundedNow) this.coyoteTimer = this.coyoteTime;
    else this.coyoteTimer -= dt;

    // Ground check with better box
    let grounded = false;
    const currentHeight = this.isProne ? this.heightProne : this.isCrouching ? this.heightCrouch : this.heightStand;
    const checkBox = new THREE.Box3(
      new THREE.Vector3(this.position.x - this.radius * 0.85, this.position.y - 0.3, this.position.z - this.radius * 0.85),
      new THREE.Vector3(this.position.x + this.radius * 0.85, this.position.y + 0.18, this.position.z + this.radius * 0.85)
    );
    for (const c of this.colliders) {
      if (checkBox.intersectsBox(c) && this.velocity.y <= 0.3) { 
        grounded = true; 
        // Get ground normal (simplified)
        break; 
      }
    }
    if (this.position.y <= 0.07) { grounded = true; }
    
    if (!this.wasGrounded && grounded) {
      const fallSpeed = Math.abs(this.velocity.y);
      if (fallSpeed > 7.5) {
        audioManager.playProceduralSound('hit');
        if (fallSpeed > 11.5) this.takeDamage((fallSpeed - 11.5) * 4.5);
        // Hard landing - camera shake, slowdown
        this.landTimer = Math.min(0.6, fallSpeed * 0.06);
        this.momentum.set(0,0,0);
        this.velocity.x *= 0.3;
        this.velocity.z *= 0.3;
      } else if (fallSpeed > 2) {
        audioManager.playProceduralSound('footstep');
      }
      if (fallSpeed > 2.5) {
        this.moveState = 'land' as any;
      }
    }
    
    this.wasGrounded = this.isGrounded;
    this.isGrounded = grounded;
    if (grounded && this.velocity.y < 0) this.velocity.y = 0;

    const delta = this.velocity.clone().multiplyScalar(dt);
    // Add step smoothing offset
    if (this.stepSmooth > 0) {
      delta.y += Math.sin(this.stepSmooth * 20) * 0.02;
    }
    this.moveWithCollision(delta, dt);

    // Stamina system with delay
    if (this.isSprinting) {
      this.stats.stamina = Math.max(0, this.stats.stamina - 26 * dt);
      this.staminaRegenDelay = 0.8;
      if (this.stats.stamina === 0) this.isSprinting = false;
    } else {
      if (this.staminaRegenDelay <= 0) {
        const regenRate = this.isProne ? 28 : this.isCrouching ? 22 : 18;
        this.stats.stamina = Math.min(this.stats.maxStamina, this.stats.stamina + regenRate * dt);
      }
    }

    const horizSpeed = Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.z * this.velocity.z);
    
    // Move state with landing priority
    if (this.landTimer > 0) this.moveState = 'land' as any;
    else if (!this.isGrounded) this.moveState = this.velocity.y > 0.6 ? 'jump' : 'fall';
    else if (this.isSliding) this.moveState = 'slide';
    else if (this.isProne) this.moveState = horizSpeed < 0.12 ? 'idle' : 'prone_crawl';
    else if (horizSpeed < 0.14) this.moveState = 'idle';
    else if (this.isSprinting) this.moveState = 'sprint';
    else if (this.isCrouching) this.moveState = 'crouch_walk';
    else if (horizSpeed > 4.0) this.moveState = 'jog';
    else this.moveState = 'walk';

    // Footsteps with surface awareness
    if (horizSpeed > 0.5 && this.isGrounded && !this.isSliding && this.landTimer <= 0) {
      this.footstepTimer -= dt * horizSpeed * (this.isProne ? 0.5 : 1);
      if (this.footstepTimer <= 0) {
        this.footstepTimer = this.isSprinting ? 0.28 : this.isProne ? 0.85 : this.isCrouching ? 0.62 : 0.38;
        if (!this.isCrouching || Math.random() > 0.42) {
          audioManager.playProceduralSound('footstep');
          // Emit event for AI to hear
          window.dispatchEvent(new CustomEvent('bv:footstep', { detail: { pos: this.position.clone(), loud: this.isSprinting } }));
        }
      }
    }

    this.mesh.position.copy(this.position);
    this.mesh.rotation.y = this.yaw;

    const h = this.isProne ? 0.35 : this.isSliding ? 0.55 : this.stance === 'crouch' ? 0.92 : 1.68;
    // Add lean to camera target
    const leanOffset = right.clone().multiplyScalar(this.lean * 0.45);
    this.cameraTarget.set(this.position.x, this.position.y + h, this.position.z).add(leanOffset);
    
    // Landing bob
    if (this.landTimer > 0) {
      this.cameraTarget.y -= Math.sin(this.landTimer * 12) * 0.08;
    }
  }

  getCameraTarget(): THREE.Vector3 { return this.cameraTarget.clone(); }

  takeDamage(amount: number) {
    let remaining = amount;
    if (this.stats.armor > 0) {
      const absorbed = Math.min(this.stats.armor, remaining * 0.65);
      this.stats.armor -= absorbed;
      remaining -= absorbed;
    }
    this.stats.health = Math.max(0, this.stats.health - remaining);
    audioManager.playProceduralSound('hit');
    // Add screen shake event
    window.dispatchEvent(new CustomEvent('bv:damage', { detail: { amount } }));
    return this.stats.health <= 0;
  }

  heal(amount: number) {
    this.stats.health = Math.min(this.stats.maxHealth, this.stats.health + amount);
  }

  addArmor(amount: number) {
    this.stats.armor = Math.min(100, this.stats.armor + amount);
  }

  getPosition() { return this.position.clone(); }
  getVelocity() { return this.velocity.clone(); }
  getLean() { return this.lean; }
}
