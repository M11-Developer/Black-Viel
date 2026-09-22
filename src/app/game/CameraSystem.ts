import * as THREE from 'three';

export class CameraSystem {
  private target = new THREE.Vector3();
  private desiredPosition = new THREE.Vector3();
  private currentPosition = new THREE.Vector3();
  private offset = new THREE.Vector3(0, 1.8, 4.2);
  private shoulder = 0.4;
  private fovNormal = 65;
  private fovAim = 38;
  private fovSprint = 72;
  private shakeIntensity = 0;
  private shakeDecay = 0;
  private collisionRadius = 0.32;
  private bobPhase = 0;
  private swayX = 0;
  private swayY = 0;
  private recoilX = 0;
  private recoilY = 0;
  private lean = 0;
  private time = 0;

  constructor(private camera: THREE.PerspectiveCamera, private colliders: THREE.Box3[]) {}

  setColliders(boxes: THREE.Box3[]) { this.colliders = boxes; }

  setShoulder(side: 'left' | 'right') { this.shoulder = side === 'right' ? 0.4 : -0.4; }

  addShake(intensity: number, decay = 4) {
    this.shakeIntensity = Math.max(this.shakeIntensity, intensity);
    this.shakeDecay = decay;
  }

  addRecoil(x: number, y: number) {
    this.recoilX += x;
    this.recoilY += y;
  }

  update(dt: number, playerTarget: THREE.Vector3, yaw: number, pitch: number, isAiming: boolean, isCrouching: boolean, moveState?: string, velocity?: THREE.Vector3, lean?: number) {
    this.time += dt;
    this.target.lerp(playerTarget, 14 * dt);

    // Head bob based on move state - realistic
    const speed = velocity ? Math.sqrt(velocity.x*velocity.x + velocity.z*velocity.z) : 0;
    const isMoving = speed > 0.3;
    const isSprint = moveState === 'sprint';
    const isProne = moveState === 'prone_crawl';
    
    if (isMoving && moveState !== 'slide' && moveState !== 'jump' && moveState !== 'fall') {
      const freq = isSprint ? 9.8 : isProne ? 2.8 : isCrouching ? 4.5 : moveState === 'walk' ? 5.2 : 6.8;
      this.bobPhase += dt * freq;
      
      const bobY = Math.sin(this.bobPhase) * (isSprint ? 0.075 : isProne ? 0.02 : isCrouching ? 0.03 : 0.045);
      const bobX = Math.sin(this.bobPhase * 0.5) * (isSprint ? 0.04 : 0.02);
      const bobRoll = Math.sin(this.bobPhase * 0.5) * (isSprint ? 0.025 : 0.01);
      
      this.target.y += bobY;
      this.target.x += bobX;
      
      // Apply roll to camera
      this.camera.rotation.z = THREE.MathUtils.lerp(this.camera.rotation.z, bobRoll, dt * 8);
    } else {
      this.bobPhase = THREE.MathUtils.lerp(this.bobPhase, 0, dt * 5);
      this.camera.rotation.z = THREE.MathUtils.lerp(this.camera.rotation.z, 0, dt * 6);
      // Breathing in idle
      this.target.y += Math.sin(this.time * 1.1) * 0.006;
    }

    // Sway based on mouse movement and velocity
    if (velocity) {
      this.swayX = THREE.MathUtils.lerp(this.swayX, velocity.x * 0.015, dt * 5);
      this.swayY = THREE.MathUtils.lerp(this.swayY, velocity.z * 0.015, dt * 5);
    }

    // Lean
    if (lean !== undefined) {
      this.lean = THREE.MathUtils.lerp(this.lean, lean, dt * 6);
    }

    // Calculate desired camera position
    const distance = isAiming ? 0.85 : isCrouching ? 2.9 : isProne ? 1.6 : 3.8;
    const height = isCrouching ? 0.15 : isProne ? -0.15 : 0.35;

    const rotMatrix = new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(pitch, yaw, 0, 'YXZ'));
    const forward = new THREE.Vector3(0, 0, distance).applyMatrix4(rotMatrix);
    const right = new THREE.Vector3(1, 0, 0).applyMatrix4(rotMatrix).multiplyScalar(this.shoulder + this.lean * 0.5);
    const up = new THREE.Vector3(0, height, 0);

    this.desiredPosition.copy(this.target).add(forward).add(right).add(up);
    
    // Add sway offset
    const swayRight = new THREE.Vector3(1,0,0).applyMatrix4(rotMatrix).multiplyScalar(this.swayX);
    const swayUp = new THREE.Vector3(0,1,0).multiplyScalar(this.swayY);
    this.desiredPosition.add(swayRight).add(swayUp);

    // Collision avoidance with smooth push
    const dir = this.desiredPosition.clone().sub(this.target);
    const dist = dir.length();
    dir.normalize();
    let closestHit = dist;
    const rayOrigin = this.target.clone();
    for (const box of this.colliders) {
      const ray = new THREE.Ray(rayOrigin, dir);
      const intersect = ray.intersectBox(box, new THREE.Vector3());
      if (intersect) {
        const d = intersect.distanceTo(rayOrigin);
        if (d < closestHit && d > 0.25) closestHit = Math.max(0.45, d - this.collisionRadius);
      }
    }
    const finalDist = Math.max(0.35, closestHit);
    this.desiredPosition.copy(this.target).add(dir.multiplyScalar(finalDist));

    // Smooth follow with different lerp for aiming
    const lerpSpeed = isAiming ? 20 : isSprint ? 10 : 9;
    this.currentPosition.lerp(this.desiredPosition, lerpSpeed * dt);
    this.camera.position.copy(this.currentPosition);

    // Look at target with aim offset and recoil
    const lookTarget = this.target.clone();
    if (isAiming) {
      const aimOffset = new THREE.Vector3(0, -0.08, -7.5).applyMatrix4(rotMatrix);
      lookTarget.add(aimOffset);
    }
    // Add recoil to look target
    lookTarget.x += this.recoilX;
    lookTarget.y += this.recoilY;
    
    this.camera.lookAt(lookTarget);

    // Recoil recovery
    this.recoilX = THREE.MathUtils.lerp(this.recoilX, 0, dt * 8);
    this.recoilY = THREE.MathUtils.lerp(this.recoilY, 0, dt * 8);

    // FOV lerp with sprint boost
    let targetFov = isAiming ? this.fovAim : isSprint ? this.fovSprint : this.fovNormal;
    // Add speed-based FOV for running
    if (isSprint) targetFov += Math.min(6, speed * 0.5);
    
    this.camera.fov = THREE.MathUtils.lerp(this.camera.fov, targetFov, 9 * dt);
    this.camera.updateProjectionMatrix();

    // Shake with perlin-like
    if (this.shakeIntensity > 0.001) {
      const sx = (Math.random() - 0.5) * this.shakeIntensity;
      const sy = (Math.random() - 0.5) * this.shakeIntensity;
      const sz = (Math.random() - 0.5) * this.shakeIntensity * 0.3;
      this.camera.position.x += sx;
      this.camera.position.y += sy;
      this.camera.position.z += sz;
      this.camera.rotation.x += (Math.random()-0.5) * this.shakeIntensity * 0.04;
      this.camera.rotation.y += (Math.random()-0.5) * this.shakeIntensity * 0.04;
      this.shakeIntensity = Math.max(0, this.shakeIntensity - this.shakeDecay * dt);
    }
  }

  getCamera() { return this.camera; }
}
