import * as THREE from 'three';
import { ArtBible } from '../../data/artBible';

export class PlayerCharacter {
  group = new THREE.Group();
  private mixer: THREE.AnimationMixer | null = null;
  private parts: Map<string, THREE.Mesh> = new Map();

  constructor() {
    this.buildMesh();
  }

  private buildMesh() {
    // Silhouette recognizable: tactical gear, backpack, holsters
    const tacticalMat = new THREE.MeshStandardMaterial({ color: 0x2d342d, roughness: 0.7, metalness: 0.1 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xc9a689, roughness: 0.8 });
    const gearMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1e, roughness: 0.5, metalness: 0.3 });
    const vestMat = new THREE.MeshStandardMaterial({ color: 0x3a3a3e, roughness: 0.6, metalness: 0.2 });

    // Torso
    const torsoGeo = new THREE.BoxGeometry(0.6, 0.75, 0.35);
    const torso = new THREE.Mesh(torsoGeo, tacticalMat);
    torso.position.y = 1.1;
    torso.castShadow = true;
    this.group.add(torso);
    this.parts.set('torso', torso);

    // Vest
    const vestGeo = new THREE.BoxGeometry(0.68, 0.6, 0.42);
    const vest = new THREE.Mesh(vestGeo, vestMat);
    vest.position.y = 1.15;
    vest.castShadow = true;
    this.group.add(vest);

    // Head
    const headGeo = new THREE.SphereGeometry(0.22, 12, 12);
    const head = new THREE.Mesh(headGeo, skinMat);
    head.position.y = 1.7;
    head.castShadow = true;
    this.group.add(head);
    this.parts.set('head', head);

    // Cap / helmet
    const capGeo = new THREE.CylinderGeometry(0.24, 0.26, 0.12, 12);
    const cap = new THREE.Mesh(capGeo, gearMat);
    cap.position.y = 1.82;
    this.group.add(cap);

    // Arms
    const armGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.6, 8);
    const leftArm = new THREE.Mesh(armGeo, tacticalMat);
    leftArm.position.set(-0.42, 1.1, 0);
    leftArm.rotation.z = -0.1;
    leftArm.castShadow = true;
    this.group.add(leftArm);

    const rightArm = new THREE.Mesh(armGeo, tacticalMat);
    rightArm.position.set(0.42, 1.1, 0);
    rightArm.rotation.z = 0.1;
    rightArm.castShadow = true;
    this.group.add(rightArm);
    this.parts.set('rightArm', rightArm);

    // Legs
    const legGeo = new THREE.CylinderGeometry(0.13, 0.12, 0.85, 8);
    const leftLeg = new THREE.Mesh(legGeo, tacticalMat);
    leftLeg.position.set(-0.18, 0.42, 0);
    leftLeg.castShadow = true;
    this.group.add(leftLeg);

    const rightLeg = new THREE.Mesh(legGeo, tacticalMat);
    rightLeg.position.set(0.18, 0.42, 0);
    rightLeg.castShadow = true;
    this.group.add(rightLeg);

    // Backpack
    const packGeo = new THREE.BoxGeometry(0.5, 0.6, 0.25);
    const pack = new THREE.Mesh(packGeo, gearMat);
    pack.position.set(0, 1.1, -0.3);
    pack.castShadow = true;
    this.group.add(pack);

    // Holster
    const holsterGeo = new THREE.BoxGeometry(0.12, 0.25, 0.18);
    const holster = new THREE.Mesh(holsterGeo, gearMat);
    holster.position.set(0.38, 0.55, 0.05);
    this.group.add(holster);

    // Weapon socket placeholder
    const weaponSocket = new THREE.Group();
    weaponSocket.position.set(0.5, 1.0, 0.15);
    weaponSocket.name = 'weaponSocket';
    this.group.add(weaponSocket);

    // Gloves
    const gloveGeo = new THREE.SphereGeometry(0.11, 8, 8);
    const gloveMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 });
    const leftGlove = new THREE.Mesh(gloveGeo, gloveMat);
    leftGlove.position.set(-0.42, 0.75, 0);
    this.group.add(leftGlove);
    const rightGlove = new THREE.Mesh(gloveGeo, gloveMat);
    rightGlove.position.set(0.42, 0.75, 0);
    this.group.add(rightGlove);

    // Boots
    const bootGeo = new THREE.BoxGeometry(0.18, 0.12, 0.32);
    const bootMat = new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 0.8 });
    const leftBoot = new THREE.Mesh(bootGeo, bootMat);
    leftBoot.position.set(-0.18, 0.06, 0.05);
    this.group.add(leftBoot);
    const rightBoot = new THREE.Mesh(bootGeo, bootMat);
    rightBoot.position.set(0.18, 0.06, 0.05);
    this.group.add(rightBoot);

    this.group.traverse((o: any) => { if ((o as THREE.Mesh).isMesh) { (o as THREE.Mesh).frustumCulled = false; } });
  }

  getWeaponSocket(): THREE.Group {
    return this.group.getObjectByName('weaponSocket') as THREE.Group;
  }

  update(dt: number, moveState: string, yaw: number) {
    // Simple procedural animation based on moveState
    const t = performance.now() * 0.001;
    const rightArm = this.parts.get('rightArm');
    if (rightArm) {
      if (moveState === 'sprint') {
        rightArm.rotation.x = Math.sin(t * 8) * 0.6;
      } else if (moveState === 'walk' || moveState === 'jog') {
        rightArm.rotation.x = Math.sin(t * 5) * 0.4;
      } else {
        rightArm.rotation.x = THREE.MathUtils.lerp(rightArm.rotation.x, 0, dt * 5);
      }
    }

    // Breathing idle
    if (moveState === 'idle') {
      this.group.position.y = Math.sin(t * 1.2) * 0.015;
    } else {
      this.group.position.y = THREE.MathUtils.lerp(this.group.position.y, 0, dt * 8);
    }
  }

  setPosition(pos: THREE.Vector3) { this.group.position.copy(pos); }
  setRotation(yaw: number) { this.group.rotation.y = yaw; }
}
