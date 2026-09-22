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

  stats: PlayerStats = {
    health: 100,
    maxHealth: 100,
    armor: 50,
    stamina: 100,
    maxStamina: 100,
  };

  // movement params
  private walkSpeed = 2.2;
  private jogSpeed = 4.2;
  private sprintSpeed = 6.5;
  private crouchSpeed = 1.6;
  private jumpForce = 5.5;
  private gravity = -14;
  private coyoteTime = 0.15;
  private coyoteTimer = 0;
  private footstepTimer = 0;

  // collision
  private colliders: THREE.Box3[] = [];
  private playerBox = new THREE.Box3();
  private radius = 0.45;
  private heightStand = 1.8;
  private heightCrouch = 1.1;

  // refs
  mesh: THREE.Group;
  private cameraTarget = new THREE.Vector3();

  constructor(private input: InputManager) {
    this.mesh = new THREE.Group();
  }

  setColliders(boxes: THREE.Box3[]) {
    this.colliders = boxes;
  }

  private checkCollision(pos: THREE.Vector3, height: number): boolean {
    const box = new THREE.Box3(
      new THREE.Vector3(pos.x - this.radius, pos.y, pos.z - this.radius),
      new THREE.Vector3(pos.x + this.radius, pos.y + height, pos.z + this.radius)
    );
    for (const c of this.colliders) {
      if (box.intersectsBox(c)) return true;
    }
    return false;
  }

  private moveWithCollision(delta: THREE.Vector3, dt: number) {
    // X
    let next = this.position.clone().add(new THREE.Vector3(delta.x, 0, 0));
    if (!this.checkCollision(next, this.stance === 'crouch' ? this.heightCrouch : this.heightStand)) {
      this.position.x = next.x;
    } else {
      this.velocity.x = 0;
    }
    // Z
    next = this.position.clone().add(new THREE.Vector3(0, 0, delta.z));
    if (!this.checkCollision(next, this.stance === 'crouch' ? this.heightCrouch : this.heightStand)) {
      this.position.z = next.z;
    } else {
      this.velocity.z = 0;
    }
    // Y
    next = this.position.clone().add(new THREE.Vector3(0, delta.y, 0));
    if (!this.checkCollision(next, this.stance === 'crouch' ? this.heightCrouch : this.heightStand)) {
      this.position.y = next.y;
    } else {
      if (delta.y < 0) {
        this.isGrounded = true;
        this.velocity.y = 0;
      } else {
        this.velocity.y = 0;
      }
    }
  }

  update(dt: number, camera: THREE.Camera) {
    this.input.update();

    // look
    const look = this.input.consumeLook();
    this.yaw -= look.x * (this.isAiming ? 0.6 : 1.0);
    this.pitch += look.y * (this.isAiming ? 0.6 : 1.0);
    this.pitch = THREE.MathUtils.clamp(this.pitch, -1.4, 1.4);

    // stance
    if (this.input.state.crouch) {
      this.isCrouching = !this.isCrouching ? true : this.isCrouching; // toggle handled via press detection ideally
    }
    // For simplicity, hold to crouch: if key held, crouch
    const wantCrouch = this.input.state.crouch;
    this.stance = wantCrouch ? 'crouch' : 'stand';
    this.isCrouching = wantCrouch;

    // sprint
    this.isSprinting = this.input.state.sprint && this.input.state.move.length() > 0.5 && !this.isCrouching && this.stats.stamina > 5;

    // aiming
    this.isAiming = this.input.state.aim;

    // movement direction relative to camera yaw
    const moveInput = this.input.state.move;
    const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.yaw);
    const right = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.yaw);
    const moveDir = new THREE.Vector3();
    moveDir.addScaledVector(forward, moveInput.y);
    moveDir.addScaledVector(right, moveInput.x);
    if (moveDir.lengthSq() > 0) moveDir.normalize();

    // speed selection
    let targetSpeed = 0;
    if (moveInput.lengthSq() > 0.01) {
      if (this.isSprinting) targetSpeed = this.sprintSpeed;
      else if (this.isCrouching) targetSpeed = this.crouchSpeed;
      else if (moveInput.length() > 0.9) targetSpeed = this.jogSpeed;
      else targetSpeed = this.walkSpeed;
      if (this.isAiming) targetSpeed *= 0.55;
    }

    // apply acceleration
    const accel = this.isGrounded ? 18 : 6;
    const desiredVel = moveDir.multiplyScalar(targetSpeed);
    this.velocity.x = THREE.MathUtils.lerp(this.velocity.x, desiredVel.x, accel * dt);
    this.velocity.z = THREE.MathUtils.lerp(this.velocity.z, desiredVel.z, accel * dt);

    // gravity
    if (!this.isGrounded) {
      this.velocity.y += this.gravity * dt;
    }

    // jump
    if (this.input.state.jump && (this.isGrounded || this.coyoteTimer > 0)) {
      this.velocity.y = this.jumpForce;
      this.isGrounded = false;
      this.coyoteTimer = 0;
      this.moveState = 'jump';
      audioManager.playProceduralSound('footstep');
    }

    // coyote
    if (this.isGrounded) this.coyoteTimer = this.coyoteTime;
    else this.coyoteTimer -= dt;

    // ground check ray
    const groundCheckPos = this.position.clone();
    groundCheckPos.y -= 0.1;
    let grounded = false;
    const checkBox = new THREE.Box3(
      new THREE.Vector3(this.position.x - this.radius * 0.8, this.position.y - 0.2, this.position.z - this.radius * 0.8),
      new THREE.Vector3(this.position.x + this.radius * 0.8, this.position.y + 0.1, this.position.z + this.radius * 0.8)
    );
    for (const c of this.colliders) {
      if (checkBox.intersectsBox(c) && this.velocity.y <= 0.1) { grounded = true; break; }
    }
    if (this.position.y <= 0.05) { grounded = true; this.position.y = 0.05; }
    this.isGrounded = grounded;
    if (grounded && this.velocity.y < 0) this.velocity.y = 0;

    // move
    const delta = this.velocity.clone().multiplyScalar(dt);
    this.moveWithCollision(delta, dt);

    // stamina
    if (this.isSprinting) {
      this.stats.stamina = Math.max(0, this.stats.stamina - 22 * dt);
      if (this.stats.stamina === 0) this.isSprinting = false;
    } else {
      this.stats.stamina = Math.min(this.stats.maxStamina, this.stats.stamina + 18 * dt);
    }

    // move state
    const horizSpeed = Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.z * this.velocity.z);
    if (!this.isGrounded) this.moveState = this.velocity.y > 0 ? 'jump' : 'fall';
    else if (horizSpeed < 0.1) this.moveState = 'idle';
    else if (this.isSprinting) this.moveState = 'sprint';
    else if (this.isCrouching) this.moveState = 'crouch_walk';
    else if (horizSpeed > 3.5) this.moveState = 'jog';
    else this.moveState = 'walk';

    // footsteps
    if (horizSpeed > 0.5 && this.isGrounded) {
      this.footstepTimer -= dt * horizSpeed;
      if (this.footstepTimer <= 0) {
        this.footstepTimer = this.isSprinting ? 0.32 : this.isCrouching ? 0.7 : 0.45;
        if (!this.isCrouching || Math.random() > 0.5) audioManager.playProceduralSound('footstep');
      }
    }

    // update mesh position
    this.mesh.position.copy(this.position);
    this.mesh.rotation.y = this.yaw;

    // camera target (for camera system to use)
    const h = this.stance === 'crouch' ? 0.9 : 1.65;
    this.cameraTarget.set(this.position.x, this.position.y + h, this.position.z);
  }

  getCameraTarget(): THREE.Vector3 { return this.cameraTarget.clone(); }

  takeDamage(amount: number) {
    let remaining = amount;
    if (this.stats.armor > 0) {
      const absorbed = Math.min(this.stats.armor, remaining * 0.6);
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

  getPosition() { return this.position.clone(); }
}
