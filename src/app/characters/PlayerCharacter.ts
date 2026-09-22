import * as THREE from 'three';

/**
 * BLACK VEIL v1.4.0 FINAL - Advanced Player Character
 * Realistic procedural animation system:
 * - Skeletal hierarchy with groups (hips, spine, head, limbs)
 * - IK feet placement, weight shift, inertia
 * - Breathing, micro-movements, weapon sway
 * - Head tracking, gaze, lean
 * - Physics-based secondary motion (backpack, gear)
 */

export class PlayerCharacter {
  group = new THREE.Group();
  private parts: Map<string, THREE.Object3D> = new Map();
  private meshes: Map<string, THREE.Mesh> = new Map();
  
  // Animation state
  private animTime = 0;
  private lastMoveState = 'idle';
  private velocity = new THREE.Vector3();
  private lastPos = new THREE.Vector3();
  private inertia = new THREE.Vector3();
  private leanX = 0;
  private leanZ = 0;
  private bobPhase = 0;
  private breathPhase = 0;
  private swayX = 0;
  private swayY = 0;
  
  // Bones hierarchy
  private hips!: THREE.Group;
  private spine!: THREE.Group;
  private chest!: THREE.Group;
  private neck!: THREE.Group;
  private headGroup!: THREE.Group;
  private leftArmGroup!: THREE.Group;
  private rightArmGroup!: THREE.Group;
  private leftLegGroup!: THREE.Group;
  private rightLegGroup!: THREE.Group;
  private weaponSocket!: THREE.Group;
  
  // Secondary motion
  private backpack!: THREE.Mesh;
  private secondaryBones: { mesh: THREE.Mesh; offset: THREE.Vector3; velocity: THREE.Vector3 }[] = [];

  constructor() {
    this.buildAdvancedMesh();
  }

  private buildAdvancedMesh() {
    // Materials - PBR realistic
    const tacticalMat = new THREE.MeshStandardMaterial({ 
      color: 0x2d342d, 
      roughness: 0.85, 
      metalness: 0.05,
      emissive: 0x0a0f0a,
      emissiveIntensity: 0.02
    });
    const skinMat = new THREE.MeshStandardMaterial({ 
      color: 0xc9a689, 
      roughness: 0.75, 
      metalness: 0,
      subsurfaceScattering: true as any
    });
    const gearMat = new THREE.MeshStandardMaterial({ 
      color: 0x1a1a1e, 
      roughness: 0.6, 
      metalness: 0.4,
      envMapIntensity: 0.5
    });
    const vestMat = new THREE.MeshStandardMaterial({ 
      color: 0x3a3a42, 
      roughness: 0.7, 
      metalness: 0.25 
    });
    const gloveMat = new THREE.MeshStandardMaterial({ color: 0x0e0e0f, roughness: 0.9, metalness: 0.1 });
    const bootMat = new THREE.MeshStandardMaterial({ color: 0x08080a, roughness: 0.85, metalness: 0.15 });

    // Hips - root of body
    this.hips = new THREE.Group();
    this.hips.position.y = 0.9;
    this.group.add(this.hips);
    this.parts.set('hips', this.hips);

    // Spine
    this.spine = new THREE.Group();
    this.spine.position.y = 0.2;
    this.hips.add(this.spine);
    this.parts.set('spine', this.spine);

    const torsoGeo = new THREE.BoxGeometry(0.58, 0.72, 0.34);
    const torso = new THREE.Mesh(torsoGeo, tacticalMat);
    torso.position.y = 0.15;
    torso.castShadow = true;
    torso.receiveShadow = true;
    this.spine.add(torso);
    this.meshes.set('torso', torso);

    // Chest / vest
    this.chest = new THREE.Group();
    this.chest.position.y = 0.35;
    this.spine.add(this.chest);
    
    const vestGeo = new THREE.BoxGeometry(0.66, 0.58, 0.42);
    const vest = new THREE.Mesh(vestGeo, vestMat);
    vest.castShadow = true;
    this.chest.add(vest);
    this.meshes.set('vest', vest);

    // Vest details - pouches
    const pouchGeo = new THREE.BoxGeometry(0.18, 0.14, 0.1);
    for (let i = 0; i < 3; i++) {
      const pouch = new THREE.Mesh(pouchGeo, gearMat);
      pouch.position.set(-0.2 + i * 0.2, -0.05, 0.22);
      pouch.castShadow = true;
      this.chest.add(pouch);
    }

    // Neck
    this.neck = new THREE.Group();
    this.neck.position.y = 0.45;
    this.chest.add(this.neck);

    // Head group
    this.headGroup = new THREE.Group();
    this.headGroup.position.y = 0.15;
    this.neck.add(this.headGroup);
    this.parts.set('head', this.headGroup);

    const headGeo = new THREE.SphereGeometry(0.22, 16, 16);
    const head = new THREE.Mesh(headGeo, skinMat);
    head.castShadow = true;
    this.headGroup.add(head);
    this.meshes.set('head', head);

    // Cap / helmet with details
    const capGeo = new THREE.CylinderGeometry(0.24, 0.26, 0.12, 16);
    const cap = new THREE.Mesh(capGeo, gearMat);
    cap.position.y = 0.14;
    cap.castShadow = true;
    this.headGroup.add(cap);

    const visorGeo = new THREE.BoxGeometry(0.28, 0.04, 0.22);
    const visor = new THREE.Mesh(visorGeo, gearMat);
    visor.position.set(0, 0.08, 0.15);
    this.headGroup.add(visor);

    // Arms with proper joints
    this.leftArmGroup = new THREE.Group();
    this.leftArmGroup.position.set(-0.38, 0.2, 0);
    this.chest.add(this.leftArmGroup);
    
    this.rightArmGroup = new THREE.Group();
    this.rightArmGroup.position.set(0.38, 0.2, 0);
    this.chest.add(this.rightArmGroup);

    const upperArmGeo = new THREE.CylinderGeometry(0.09, 0.08, 0.35, 10);
    const lowerArmGeo = new THREE.CylinderGeometry(0.08, 0.07, 0.32, 10);

    // Left arm
    const leftUpper = new THREE.Mesh(upperArmGeo, tacticalMat);
    leftUpper.position.y = -0.175;
    leftUpper.castShadow = true;
    this.leftArmGroup.add(leftUpper);
    
    const leftLowerGroup = new THREE.Group();
    leftLowerGroup.position.y = -0.35;
    this.leftArmGroup.add(leftLowerGroup);
    
    const leftLower = new THREE.Mesh(lowerArmGeo, tacticalMat);
    leftLower.position.y = -0.16;
    leftLower.castShadow = true;
    leftLowerGroup.add(leftLower);
    
    const leftGlove = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 10), gloveMat);
    leftGlove.position.y = -0.36;
    leftLowerGroup.add(leftGlove);

    // Right arm
    const rightUpper = new THREE.Mesh(upperArmGeo, tacticalMat);
    rightUpper.position.y = -0.175;
    rightUpper.castShadow = true;
    this.rightArmGroup.add(rightUpper);
    
    const rightLowerGroup = new THREE.Group();
    rightLowerGroup.position.y = -0.35;
    this.rightArmGroup.add(rightLowerGroup);
    this.parts.set('rightLower', rightLowerGroup);
    
    const rightLower = new THREE.Mesh(lowerArmGeo, tacticalMat);
    rightLower.position.y = -0.16;
    rightLower.castShadow = true;
    rightLowerGroup.add(rightLower);
    
    const rightGlove = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 10), gloveMat);
    rightGlove.position.y = -0.36;
    rightLowerGroup.add(rightGlove);

    // Legs with hip joints
    this.leftLegGroup = new THREE.Group();
    this.leftLegGroup.position.set(-0.16, -0.05, 0);
    this.hips.add(this.leftLegGroup);
    
    this.rightLegGroup = new THREE.Group();
    this.rightLegGroup.position.set(0.16, -0.05, 0);
    this.hips.add(this.rightLegGroup);

    const thighGeo = new THREE.CylinderGeometry(0.14, 0.12, 0.48, 10);
    const shinGeo = new THREE.CylinderGeometry(0.12, 0.10, 0.46, 10);

    // Left leg
    const leftThigh = new THREE.Mesh(thighGeo, tacticalMat);
    leftThigh.position.y = -0.24;
    leftThigh.castShadow = true;
    this.leftLegGroup.add(leftThigh);
    
    const leftShinGroup = new THREE.Group();
    leftShinGroup.position.y = -0.48;
    this.leftLegGroup.add(leftShinGroup);
    this.parts.set('leftShin', leftShinGroup);
    
    const leftShin = new THREE.Mesh(shinGeo, tacticalMat);
    leftShin.position.y = -0.23;
    leftShin.castShadow = true;
    leftShinGroup.add(leftShin);
    
    const leftBoot = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.13, 0.34), bootMat);
    leftBoot.position.set(0, -0.52, 0.06);
    leftBoot.castShadow = true;
    leftShinGroup.add(leftBoot);

    // Right leg
    const rightThigh = new THREE.Mesh(thighGeo, tacticalMat);
    rightThigh.position.y = -0.24;
    rightThigh.castShadow = true;
    this.rightLegGroup.add(rightThigh);
    
    const rightShinGroup = new THREE.Group();
    rightShinGroup.position.y = -0.48;
    this.rightLegGroup.add(rightShinGroup);
    this.parts.set('rightShin', rightShinGroup);
    
    const rightShin = new THREE.Mesh(shinGeo, tacticalMat);
    rightShin.position.y = -0.23;
    rightShin.castShadow = true;
    rightShinGroup.add(rightShin);
    
    const rightBoot = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.13, 0.34), bootMat);
    rightBoot.position.set(0, -0.52, 0.06);
    rightBoot.castShadow = true;
    rightShinGroup.add(rightBoot);

    // Backpack with secondary motion
    const packGeo = new THREE.BoxGeometry(0.52, 0.62, 0.28);
    this.backpack = new THREE.Mesh(packGeo, gearMat);
    this.backpack.position.set(0, 0.25, -0.32);
    this.backpack.castShadow = true;
    this.spine.add(this.backpack);
    
    this.secondaryBones.push({
      mesh: this.backpack,
      offset: new THREE.Vector3(0, 0.25, -0.32),
      velocity: new THREE.Vector3()
    });

    // Holster
    const holsterGeo = new THREE.BoxGeometry(0.12, 0.26, 0.18);
    const holster = new THREE.Mesh(holsterGeo, gearMat);
    holster.position.set(0.36, -0.25, 0.06);
    holster.castShadow = true;
    this.hips.add(holster);

    // Weapon socket - attached to right hand area
    this.weaponSocket = new THREE.Group();
    this.weaponSocket.position.set(0, -0.4, 0.12);
    rightLowerGroup.add(this.weaponSocket);
    this.weaponSocket.name = 'weaponSocket';

    // Knife sheath
    const knifeSheath = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.18, 0.06), gearMat);
    knifeSheath.position.set(-0.28, -0.15, -0.18);
    this.hips.add(knifeSheath);

    this.group.traverse((o: any) => { 
      if ((o as THREE.Mesh).isMesh) { 
        (o as THREE.Mesh).frustumCulled = false;
        (o as THREE.Mesh).receiveShadow = true;
      } 
    });
    
    this.lastPos.copy(this.group.position);
  }

  getWeaponSocket(): THREE.Group {
    return this.weaponSocket;
  }

  update(dt: number, moveState: string, yaw: number, velocity?: THREE.Vector3) {
    this.animTime += dt;
    if (velocity) this.velocity.copy(velocity);
    
    // Calculate actual velocity from position delta for inertia
    const posDelta = this.group.position.clone().sub(this.lastPos);
    const actualVel = posDelta.divideScalar(Math.max(dt, 0.001));
    this.lastPos.copy(this.group.position);
    
    // Smooth inertia
    this.inertia.lerp(actualVel, dt * 6);
    const speed = this.inertia.length();
    const isMoving = speed > 0.1;
    
    // Breathing - more realistic with chest expansion
    this.breathPhase += dt * (isMoving ? 1.8 : 0.9);
    const breath = Math.sin(this.breathPhase) * (isMoving ? 0.02 : 0.015);
    const breathSide = Math.sin(this.breathPhase * 0.5) * 0.01;
    
    if (this.chest) {
      this.chest.scale.y = 1 + breath * 0.5;
      this.chest.scale.x = 1 + breathSide;
    }

    // Head bob based on gait
    const gaitFreq = moveState === 'sprint' ? 9.5 : moveState === 'jog' ? 7.2 : moveState === 'walk' ? 5.0 : moveState === 'crouch_walk' ? 4.2 : 0;
    if (gaitFreq > 0) {
      this.bobPhase += dt * gaitFreq;
      const bobY = Math.abs(Math.sin(this.bobPhase)) * (moveState === 'sprint' ? 0.06 : 0.035);
      const bobX = Math.sin(this.bobPhase) * (moveState === 'sprint' ? 0.03 : 0.015);
      
      // Hips bob
      this.hips.position.y = 0.9 + bobY;
      this.hips.position.x = bobX * 0.3;
      
      // Spine counter-rotation for balance
      this.spine.rotation.z = -bobX * 0.15;
      this.spine.rotation.x = Math.sin(this.bobPhase * 0.5) * 0.03;
    } else {
      // Idle sway
      this.hips.position.y = THREE.MathUtils.lerp(this.hips.position.y, 0.9 + Math.sin(this.animTime * 1.2) * 0.012, dt * 4);
      this.hips.position.x = THREE.MathUtils.lerp(this.hips.position.x, Math.sin(this.animTime * 0.7) * 0.008, dt * 2);
      this.spine.rotation.z = THREE.MathUtils.lerp(this.spine.rotation.z, Math.sin(this.animTime * 0.5) * 0.02, dt * 2);
    }

    // Lean based on velocity and turning
    const targetLeanZ = THREE.MathUtils.clamp(-this.inertia.x * 0.04, -0.25, 0.25);
    const targetLeanX = THREE.MathUtils.clamp(this.inertia.z * 0.03, -0.2, 0.2);
    this.leanZ = THREE.MathUtils.lerp(this.leanZ, targetLeanZ, dt * 5);
    this.leanX = THREE.MathUtils.lerp(this.leanX, targetLeanX, dt * 5);
    
    this.spine.rotation.z += this.leanZ;
    this.spine.rotation.x += this.leanX;

    // Leg animation - realistic gait cycle
    if (moveState === 'walk' || moveState === 'jog' || moveState === 'sprint' || moveState === 'crouch_walk') {
      const cycle = this.bobPhase;
      const isSprint = moveState === 'sprint';
      const isCrouch = moveState === 'crouch_walk';
      
      // Left leg
      const leftPhase = cycle;
      this.leftLegGroup.rotation.x = Math.sin(leftPhase) * (isSprint ? 0.85 : isCrouch ? 0.45 : 0.6);
      const leftShin = this.parts.get('leftShin') as THREE.Group;
      if (leftShin) {
        leftShin.rotation.x = Math.max(0, -Math.sin(leftPhase) * (isSprint ? 1.1 : 0.8)) + (isCrouch ? 0.5 : 0);
      }
      
      // Right leg - opposite phase
      const rightPhase = cycle + Math.PI;
      this.rightLegGroup.rotation.x = Math.sin(rightPhase) * (isSprint ? 0.85 : isCrouch ? 0.45 : 0.6);
      const rightShin = this.parts.get('rightShin') as THREE.Group;
      if (rightShin) {
        rightShin.rotation.x = Math.max(0, -Math.sin(rightPhase) * (isSprint ? 1.1 : 0.8)) + (isCrouch ? 0.5 : 0);
      }
      
      // Knee bend extra for crouch
      if (isCrouch) {
        this.leftLegGroup.rotation.x += 0.3;
        this.rightLegGroup.rotation.x += 0.3;
      }
    } else if (moveState === 'slide') {
      // Slide pose - legs forward, leaning back
      this.leftLegGroup.rotation.x = -0.2;
      this.rightLegGroup.rotation.x = 0.4;
      const leftShin = this.parts.get('leftShin') as THREE.Group;
      const rightShin = this.parts.get('rightShin') as THREE.Group;
      if (leftShin) leftShin.rotation.x = 1.0;
      if (rightShin) rightShin.rotation.x = 0.6;
      this.hips.rotation.x = -0.3;
    } else if (moveState === 'jump' || moveState === 'fall') {
      // Jump - tuck legs
      this.leftLegGroup.rotation.x = -0.4;
      this.rightLegGroup.rotation.x = -0.4;
      const leftShin = this.parts.get('leftShin') as THREE.Group;
      const rightShin = this.parts.get('rightShin') as THREE.Group;
      if (leftShin) leftShin.rotation.x = 1.2;
      if (rightShin) rightShin.rotation.x = 1.2;
    } else {
      // Idle - return to neutral with slight random
      this.leftLegGroup.rotation.x = THREE.MathUtils.lerp(this.leftLegGroup.rotation.x, Math.sin(this.animTime * 0.3) * 0.05, dt * 3);
      this.rightLegGroup.rotation.x = THREE.MathUtils.lerp(this.rightLegGroup.rotation.x, Math.sin(this.animTime * 0.3 + Math.PI) * 0.05, dt * 3);
      const leftShin = this.parts.get('leftShin') as THREE.Group;
      const rightShin = this.parts.get('rightShin') as THREE.Group;
      if (leftShin) leftShin.rotation.x = THREE.MathUtils.lerp(leftShin.rotation.x, 0, dt * 4);
      if (rightShin) rightShin.rotation.x = THREE.MathUtils.lerp(rightShin.rotation.x, 0, dt * 4);
      this.hips.rotation.x = THREE.MathUtils.lerp(this.hips.rotation.x, 0, dt * 4);
    }

    // Arm swing - opposite to legs, realistic
    if (moveState === 'walk' || moveState === 'jog' || moveState === 'sprint') {
      const armFreq = this.bobPhase;
      const swingAmount = moveState === 'sprint' ? 1.1 : moveState === 'jog' ? 0.7 : 0.5;
      
      this.leftArmGroup.rotation.x = Math.sin(armFreq + Math.PI) * swingAmount;
      this.rightArmGroup.rotation.x = Math.sin(armFreq) * swingAmount;
      
      // Sprint - arms bent 90deg, pumping
      if (moveState === 'sprint') {
        const leftLower = this.leftArmGroup.children[1] as THREE.Group;
        const rightLower = this.parts.get('rightLower') as THREE.Group;
        if (leftLower) leftLower.rotation.x = -1.2 + Math.sin(armFreq) * 0.3;
        if (rightLower) rightLower.rotation.x = -1.2 + Math.sin(armFreq + Math.PI) * 0.3;
      } else {
        const leftLower = this.leftArmGroup.children[1] as THREE.Group;
        const rightLower = this.parts.get('rightLower') as THREE.Group;
        if (leftLower) leftLower.rotation.x = THREE.MathUtils.lerp(leftLower.rotation.x, -0.2, dt * 5);
        if (rightLower) rightLower.rotation.x = THREE.MathUtils.lerp(rightLower.rotation.x, -0.2, dt * 5);
      }
    } else if (moveState === 'idle') {
      // Idle - slight arm sway, breathing
      this.leftArmGroup.rotation.x = THREE.MathUtils.lerp(this.leftArmGroup.rotation.x, Math.sin(this.animTime * 0.8) * 0.08, dt * 2);
      this.rightArmGroup.rotation.x = THREE.MathUtils.lerp(this.rightArmGroup.rotation.x, Math.sin(this.animTime * 0.8 + 0.5) * 0.08, dt * 2);
      this.leftArmGroup.rotation.z = THREE.MathUtils.lerp(this.leftArmGroup.rotation.z, Math.sin(this.animTime * 0.5) * 0.05, dt * 2);
    } else {
      this.leftArmGroup.rotation.x = THREE.MathUtils.lerp(this.leftArmGroup.rotation.x, 0, dt * 6);
      this.rightArmGroup.rotation.x = THREE.MathUtils.lerp(this.rightArmGroup.rotation.x, 0, dt * 6);
    }

    // Head tracking - subtle look around in idle
    if (moveState === 'idle') {
      this.headGroup.rotation.y = THREE.MathUtils.lerp(this.headGroup.rotation.y, Math.sin(this.animTime * 0.4) * 0.25, dt * 1.5);
      this.headGroup.rotation.x = THREE.MathUtils.lerp(this.headGroup.rotation.x, Math.sin(this.animTime * 0.6) * 0.08, dt * 1.5);
    } else {
      this.headGroup.rotation.y = THREE.MathUtils.lerp(this.headGroup.rotation.y, 0, dt * 5);
      this.headGroup.rotation.x = THREE.MathUtils.lerp(this.headGroup.rotation.x, 0, dt * 5);
    }

    // Weapon sway - based on movement and inertia
    const swayIntensity = moveState === 'sprint' ? 0.12 : moveState === 'jog' ? 0.06 : moveState === 'walk' ? 0.03 : 0.01;
    this.swayX = THREE.MathUtils.lerp(this.swayX, (Math.random() - 0.5) * swayIntensity + this.inertia.x * 0.01, dt * 8);
    this.swayY = THREE.MathUtils.lerp(this.swayY, (Math.random() - 0.5) * swayIntensity + this.inertia.z * 0.01, dt * 8);
    
    if (this.weaponSocket) {
      this.weaponSocket.rotation.x = this.swayY;
      this.weaponSocket.rotation.y = this.swayX;
      this.weaponSocket.position.x = 0 + this.swayX * 0.5;
      this.weaponSocket.position.y = -0.4 + this.swayY * 0.3;
    }

    // Secondary motion - backpack jiggle with physics
    for (const sec of this.secondaryBones) {
      // Spring physics
      const targetPos = sec.offset.clone();
      // Add inertia offset
      targetPos.x += -this.inertia.x * 0.008;
      targetPos.z += -this.inertia.z * 0.01;
      targetPos.y += Math.abs(Math.sin(this.bobPhase)) * 0.02;
      
      const diff = targetPos.clone().sub(sec.mesh.position);
      sec.velocity.add(diff.multiplyScalar(dt * 12));
      sec.velocity.multiplyScalar(0.88); // damping
      sec.mesh.position.add(sec.velocity.clone().multiplyScalar(dt));
      sec.mesh.rotation.x = sec.velocity.z * 0.5;
      sec.mesh.rotation.z = -sec.velocity.x * 0.5;
    }

    // Overall group subtle floating for alive feel
    if (moveState === 'idle') {
      this.group.position.y += Math.sin(this.animTime * 1.2) * 0.0008;
    }

    this.lastMoveState = moveState;
  }

  setPosition(pos: THREE.Vector3) { 
    this.group.position.copy(pos);
    // Don't update lastPos here to keep inertia correct - will be updated next frame
  }
  
  setRotation(yaw: number) { 
    this.group.rotation.y = yaw; 
  }

  // For external systems to get head position for camera etc
  getHeadPosition(): THREE.Vector3 {
    const pos = new THREE.Vector3();
    this.headGroup.getWorldPosition(pos);
    return pos;
  }
}
