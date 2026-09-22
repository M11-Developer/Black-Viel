import * as THREE from 'three';

export class CameraSystem {
  private target = new THREE.Vector3();
  private desiredPosition = new THREE.Vector3();
  private currentPosition = new THREE.Vector3();
  private offset = new THREE.Vector3(0, 1.8, 4.2);
  private shoulder = 0.4; // right shoulder
  private fovNormal = 65;
  private fovAim = 42;
  private shakeIntensity = 0;
  private shakeDecay = 0;
  private collisionRadius = 0.3;

  constructor(private camera: THREE.PerspectiveCamera, private colliders: THREE.Box3[]) {}

  setColliders(boxes: THREE.Box3[]) { this.colliders = boxes; }

  setShoulder(side: 'left' | 'right') { this.shoulder = side === 'right' ? 0.4 : -0.4; }

  addShake(intensity: number, decay = 4) {
    this.shakeIntensity = Math.max(this.shakeIntensity, intensity);
    this.shakeDecay = decay;
  }

  update(dt: number, playerTarget: THREE.Vector3, yaw: number, pitch: number, isAiming: boolean, isCrouching: boolean) {
    this.target.lerp(playerTarget, 12 * dt);

    // Calculate desired camera position based on yaw/pitch and shoulder offset
    const distance = isAiming ? 1.1 : isCrouching ? 3.2 : 4.2;
    const height = isCrouching ? 0.2 : 0.4;

    const rotMatrix = new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(pitch, yaw, 0, 'YXZ'));
    const forward = new THREE.Vector3(0, 0, distance).applyMatrix4(rotMatrix);
    const right = new THREE.Vector3(1, 0, 0).applyMatrix4(rotMatrix).multiplyScalar(this.shoulder);
    const up = new THREE.Vector3(0, height, 0);

    this.desiredPosition.copy(this.target).add(forward).add(right).add(up);

    // Collision avoidance: raycast from target to desiredPosition
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
        if (d < closestHit && d > 0.3) closestHit = d - this.collisionRadius;
      }
    }
    const finalDist = Math.max(0.5, closestHit);
    this.desiredPosition.copy(this.target).add(dir.multiplyScalar(finalDist));

    // Smooth follow
    this.currentPosition.lerp(this.desiredPosition, (isAiming ? 18 : 8) * dt);
    this.camera.position.copy(this.currentPosition);

    // Look at target with slight offset for aiming
    const lookTarget = this.target.clone();
    if (isAiming) {
      const aimOffset = new THREE.Vector3(0, -0.1, -8).applyMatrix4(rotMatrix);
      lookTarget.add(aimOffset);
    }
    this.camera.lookAt(lookTarget);

    // FOV lerp
    const targetFov = isAiming ? this.fovAim : this.fovNormal;
    this.camera.fov = THREE.MathUtils.lerp(this.camera.fov, targetFov, 8 * dt);
    this.camera.updateProjectionMatrix();

    // Shake
    if (this.shakeIntensity > 0.001) {
      const sx = (Math.random() - 0.5) * this.shakeIntensity;
      const sy = (Math.random() - 0.5) * this.shakeIntensity;
      this.camera.position.x += sx;
      this.camera.position.y += sy;
      this.shakeIntensity = Math.max(0, this.shakeIntensity - this.shakeDecay * dt);
    }
  }

  getCamera() { return this.camera; }
}
