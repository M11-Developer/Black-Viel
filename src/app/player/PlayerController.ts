import * as THREE from 'three';
import { InputManager } from '../input/InputManager';
import { audioManager } from '../audio/AudioManager';

export type PlayerStance = 'stand' | 'crouch' | 'prone';
export type PlayerMoveState = 'idle' | 'walk' | 'jog' | 'sprint' | 'crouch_walk' | 'slide' | 'jump' | 'fall' | 'vault' | 'mantle' | 'climb';

export interface PlayerStats {
  health: number;
  maxHealth: number;
  armor: number;
  stamina: number;
  maxStamina: number;
}

export class PlayerController {
  position = new THREE.Vector3(0, 1.8, 0);
  velocity = new THREE.Vector3();
  rotation = new THREE.Euler(0, 0, 0, 'YXZ');
  yaw = 0;
  pitch = 0;

  stance: PlayerStance = 'stand';
  moveState: PlayerMoveState = 'idle';
  isGrounded = true;
  isAiming = false;
  isSprinting = false;
  isCrouching = false;
  isSliding = false;

  stats: PlayerStats = {
    health: 100,
    maxHealth: 100,
    armor: 50,
    stamina: 100,
    maxStamina: 100,
  };

  private walkSpeed = 2.4;
  private jogSpeed = 4.5;
  private sprintSpeed = 7.0;
  private crouchSpeed = 1.8;
  private slideSpeed = 8.5;
  private jumpForce = 5.8;
  private gravity = -15;
  private coyoteTime = 0.18;
  private coyoteTimer = 0;
  private footstepTimer = 0;
  private slideTimer = 0;
  private vaultCooldown = 0;

  private colliders: THREE.Box3[] = [];
  private radius = 0.45;
  private heightStand = 1.8;
  private heightCrouch = 1.1;
  private heightSlide = 0.7;

  mesh: THREE.Group;
  private cameraTarget = new THREE.Vector3();
  private wasGrounded = true;

  constructor(private input: InputManager) {
    this.mesh = new THREE.Group();
  }

  setColliders(boxes: THREE.Box3[]) {
    this.colliders = boxes;
  }

  private checkCollision(pos: THREE.Vector3, height: number): THREE.Box3 | null {
    const box = new THREE.Box3(
      new THREE.Vector3(pos.x - this.radius, pos.y, pos.z - this.radius),
      new THREE.Vector3(pos.x + this.radius, pos.y + height, pos.z + this.radius)
    );
    for (const c of this.colliders) {
      if (box.intersectsBox(c)) return c;
    }
    return null;
  }

  private canVault(): { can: boolean; height: number; box?: THREE.Box3 } {
    // Check for low obstacle in front that can be vaulted
    const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.yaw);
    const checkPos = this.position.clone().add(forward.clone().multiplyScalar(0.9));
    checkPos.y += 0.5;
    const box = this.checkCollision(checkPos, 1.0);
    if (box) {
      const height = box.max.y - this.position.y;
      if (height > 0.3 && height < 1.6) {
        // Check if space above is clear
        const abovePos = checkPos.clone();
        abovePos.y += height + 0.3;
        if (!this.checkCollision(abovePos, 0.8)) {
          return { can: true, height, box };
        }
      }
    }
    return { can: false, height: 0 };
  }

  private moveWithCollision(delta: THREE.Vector3, dt: number) {
    const currentHeight = this.isSliding ? this.heightSlide : this.stance === 'crouch' ? this.heightCrouch : this.heightStand;
    
    let next = this.position.clone().add(new THREE.Vector3(delta.x, 0, 0));
    if (!this.checkCollision(next, currentHeight)) {
      this.position.x = next.x;
    } else {
      this.velocity.x *= 0.3;
    }
    next = this.position.clone().add(new THREE.Vector3(0, 0, delta.z));
    if (!this.checkCollision(next, currentHeight)) {
      this.position.z = next.z;
    } else {
      this.velocity.z *= 0.3;
    }
    next = this.position.clone().add(new THREE.Vector3(0, delta.y, 0));
    const coll = this.checkCollision(next, currentHeight);
    if (!coll) {
      this.position.y = next.y;
    } else {
      if (delta.y < 0) {
        this.isGrounded = true;
        this.position.y = coll.max.y + 0.05;
        this.velocity.y = 0;
      } else {
        this.velocity.y = 0;
      }
    }
  }

  update(dt: number, camera: THREE.Camera) {
    this.input.update();
    this.vaultCooldown = Math.max(0, this.vaultCooldown - dt);

    const look = this.input.consumeLook();
    const sens = this.isAiming ? 0.5 : 1.0;
    this.yaw -= look.x * sens;
    this.pitch += look.y * sens;
    this.pitch = THREE.MathUtils.clamp(this.pitch, -1.45, 1.45);

    const wantCrouch = this.input.state.crouch;
    const wantSlide = wantCrouch && this.isSprinting && this.isGrounded && this.velocity.length() > 3.5;

    if (wantSlide && !this.isSliding && this.slideTimer <= 0) {
      this.isSliding = true;
      this.slideTimer = 0.8;
      this.moveState = 'slide';
      audioManager.playProceduralSound('footstep');
    }

    if (this.isSliding) {
      this.slideTimer -= dt;
      this.stance = 'crouch';
      this.isCrouching = true;
      if (this.slideTimer <= 0 || this.velocity.length() < 1.5) {
        this.isSliding = false;
        this.stance = wantCrouch ? 'crouch' : 'stand';
        this.isCrouching = wantCrouch;
      }
    } else {
      this.stance = wantCrouch ? 'crouch' : 'stand';
      this.isCrouching = wantCrouch;
    }

    this.isSprinting = this.input.state.sprint && this.input.state.move.length() > 0.5 && !this.isCrouching && !this.isSliding && this.stats.stamina > 5;
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
      targetSpeed = this.slideSpeed * (this.slideTimer / 0.8);
      moveDir.copy(forward);
    } else if (moveInput.lengthSq() > 0.01) {
      if (this.isSprinting) targetSpeed = this.sprintSpeed;
      else if (this.isCrouching) targetSpeed = this.crouchSpeed;
      else if (moveInput.length() > 0.9) targetSpeed = this.jogSpeed;
      else targetSpeed = this.walkSpeed;
      if (this.isAiming) targetSpeed *= 0.52;
    }

    const accel = this.isGrounded ? (this.isSliding ? 2 : 20) : 7;
    const desiredVel = moveDir.multiplyScalar(targetSpeed);
    if (!this.isSliding) {
      this.velocity.x = THREE.MathUtils.lerp(this.velocity.x, desiredVel.x, accel * dt);
      this.velocity.z = THREE.MathUtils.lerp(this.velocity.z, desiredVel.z, accel * dt);
    } else {
      this.velocity.x = THREE.MathUtils.lerp(this.velocity.x, desiredVel.x * 1.2, accel * dt);
      this.velocity.z = THREE.MathUtils.lerp(this.velocity.z, desiredVel.z * 1.2, accel * dt);
    }

    if (!this.isGrounded) {
      this.velocity.y += this.gravity * dt;
    }

    if (this.input.state.jump) {
      if (this.isSliding) {
        // Slide jump
        this.isSliding = false;
        this.velocity.y = this.jumpForce * 0.9;
        this.velocity.x *= 1.15;
        this.velocity.z *= 1.15;
        this.isGrounded = false;
        this.moveState = 'jump';
        audioManager.playProceduralSound('footstep');
      } else if (this.isGrounded || this.coyoteTimer > 0) {
        // Check vault first
        const vault = this.canVault();
        if (vault.can && this.vaultCooldown <= 0 && moveInput.length() > 0.3) {
          // Vault
          this.position.y += vault.height + 0.2;
          this.velocity.y = 2.5;
          this.velocity.x += forward.x * 2.5;
          this.velocity.z += forward.z * 2.5;
          this.moveState = vault.height > 1.0 ? 'mantle' : 'vault';
          this.vaultCooldown = 0.6;
          audioManager.playProceduralSound('footstep');
          console.log('[Player] Vault', vault.height.toFixed(2));
        } else {
          this.velocity.y = this.jumpForce;
          this.isGrounded = false;
          this.coyoteTimer = 0;
          this.moveState = 'jump';
          audioManager.playProceduralSound('footstep');
        }
      }
    }

    if (this.isGrounded) this.coyoteTimer = this.coyoteTime;
    else this.coyoteTimer -= dt;

    let grounded = false;
    const checkBox = new THREE.Box3(
      new THREE.Vector3(this.position.x - this.radius * 0.8, this.position.y - 0.25, this.position.z - this.radius * 0.8),
      new THREE.Vector3(this.position.x + this.radius * 0.8, this.position.y + 0.15, this.position.z + this.radius * 0.8)
    );
    for (const c of this.colliders) {
      if (checkBox.intersectsBox(c) && this.velocity.y <= 0.2) { grounded = true; break; }
    }
    if (this.position.y <= 0.06) { grounded = true; this.position.y = 0.06; }
    
    if (!this.wasGrounded && grounded) {
      // Landing
      const fallSpeed = Math.abs(this.velocity.y);
      if (fallSpeed > 8) {
        audioManager.playProceduralSound('hit');
        // Fall damage
        if (fallSpeed > 12) this.takeDamage((fallSpeed - 12) * 4);
      } else {
        audioManager.playProceduralSound('footstep');
      }
      if (fallSpeed > 3) {
        this.moveState = 'landing' as any;
      }
    }
    
    this.wasGrounded = this.isGrounded;
    this.isGrounded = grounded;
    if (grounded && this.velocity.y < 0) this.velocity.y = 0;

    const delta = this.velocity.clone().multiplyScalar(dt);
    this.moveWithCollision(delta, dt);

    if (this.isSprinting) {
      this.stats.stamina = Math.max(0, this.stats.stamina - 24 * dt);
      if (this.stats.stamina === 0) this.isSprinting = false;
    } else {
      this.stats.stamina = Math.min(this.stats.maxStamina, this.stats.stamina + 20 * dt);
    }

    const horizSpeed = Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.z * this.velocity.z);
    if (!this.isGrounded) this.moveState = this.velocity.y > 0.5 ? 'jump' : 'fall';
    else if (this.isSliding) this.moveState = 'slide';
    else if (horizSpeed < 0.15) this.moveState = 'idle';
    else if (this.isSprinting) this.moveState = 'sprint';
    else if (this.isCrouching) this.moveState = 'crouch_walk';
    else if (horizSpeed > 3.8) this.moveState = 'jog';
    else this.moveState = 'walk';

    if (horizSpeed > 0.5 && this.isGrounded && !this.isSliding) {
      this.footstepTimer -= dt * horizSpeed;
      if (this.footstepTimer <= 0) {
        this.footstepTimer = this.isSprinting ? 0.30 : this.isCrouching ? 0.68 : 0.42;
        if (!this.isCrouching || Math.random() > 0.45) audioManager.playProceduralSound('footstep');
      }
    }

    this.mesh.position.copy(this.position);
    this.mesh.rotation.y = this.yaw;

    const h = this.isSliding ? 0.5 : this.stance === 'crouch' ? 0.95 : 1.68;
    this.cameraTarget.set(this.position.x, this.position.y + h, this.position.z);
  }

  getCameraTarget(): THREE.Vector3 { return this.cameraTarget.clone(); }

  takeDamage(amount: number) {
    let remaining = amount;
    if (this.stats.armor > 0) {
      const absorbed = Math.min(this.stats.armor, remaining * 0.62);
      this.stats.armor -= absorbed;
      remaining -= absorbed;
    }
    this.stats.health = Math.max(0, this.stats.health - remaining);
    audioManager.playProceduralSound('hit');
    return this.stats.health <= 0;
  }

  heal(amount: number) {
    this.stats.health = Math.min(this.stats.maxHealth, this.stats.health + amount);
  }

  addArmor(amount: number) {
    this.stats.armor = Math.min(100, this.stats.armor + amount);
  }

  getPosition() { return this.position.clone(); }
}
