import * as THREE from 'three';
import { EnemyConfig } from '../../data/enemies';

export class EnemyCharacter {
  group = new THREE.Group();
  config: EnemyConfig;
  health: number;
  private head!: THREE.Mesh;
  private body!: THREE.Mesh;

  constructor(config: EnemyConfig) {
    this.config = config;
    this.health = config.health;
    this.buildMesh();
  }

  private buildMesh() {
    const mat = new THREE.MeshStandardMaterial({ color: this.config.color, roughness: 0.7, metalness: 0.2 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x111114, roughness: 0.6 });

    // Body
    const bodyGeo = new THREE.BoxGeometry(0.55 * this.config.scale, 0.7 * this.config.scale, 0.32 * this.config.scale);
    this.body = new THREE.Mesh(bodyGeo, mat);
    this.body.position.y = 1.0 * this.config.scale;
    this.body.castShadow = true;
    this.group.add(this.body);

    // Head
    const headGeo = new THREE.SphereGeometry(0.2 * this.config.scale, 10, 10);
    this.head = new THREE.Mesh(headGeo, new THREE.MeshStandardMaterial({ color: 0x8a7a6a, roughness: 0.8 }));
    this.head.position.y = 1.55 * this.config.scale;
    this.group.add(this.head);

    // Helmet / gear based on archetype
    if (this.config.id === 'heavy') {
      const armorGeo = new THREE.BoxGeometry(0.7, 0.5, 0.45);
      const armor = new THREE.Mesh(armorGeo, darkMat);
      armor.position.y = 1.1;
      this.group.add(armor);
      const helmGeo = new THREE.SphereGeometry(0.26, 10, 10);
      const helm = new THREE.Mesh(helmGeo, darkMat);
      helm.position.y = 1.58;
      this.group.add(helm);
    } else if (this.config.id === 'sniper') {
      const ghillie = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.8, 0.4), new THREE.MeshStandardMaterial({ color: 0x3a4a2a, roughness: 0.95 }));
      ghillie.position.y = 1.0;
      this.group.add(ghillie);
    }

    // Arms
    const armGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.55, 6);
    const lArm = new THREE.Mesh(armGeo, mat);
    lArm.position.set(-0.38, 1.0, 0);
    this.group.add(lArm);
    const rArm = new THREE.Mesh(armGeo, mat);
    rArm.position.set(0.38, 1.0, 0);
    this.group.add(rArm);

    // Legs
    const legGeo = new THREE.CylinderGeometry(0.11, 0.1, 0.8, 6);
    const lLeg = new THREE.Mesh(legGeo, mat);
    lLeg.position.set(-0.15, 0.4, 0);
    this.group.add(lLeg);
    const rLeg = new THREE.Mesh(legGeo, mat);
    rLeg.position.set(0.15, 0.4, 0);
    this.group.add(rLeg);

    // Weapon placeholder
    const wepGeo = new THREE.BoxGeometry(0.08, 0.08, 0.7);
    const wep = new THREE.Mesh(wepGeo, darkMat);
    wep.position.set(0.45, 1.0, 0.3);
    this.group.add(wep);

    // Faction indicator
    const indicatorGeo = new THREE.PlaneGeometry(0.2, 0.2);
    const indicatorMat = new THREE.MeshBasicMaterial({ color: this.config.color, side: THREE.DoubleSide });
    const indicator = new THREE.Mesh(indicatorGeo, indicatorMat);
    indicator.position.set(0, 2.1, 0);
    indicator.name = 'indicator';
    this.group.add(indicator);
  }

  takeDamage(amount: number, headshot = false): boolean {
    const dmg = headshot ? amount * 2.2 : amount;
    this.health -= dmg;
    // hit flash
    (this.body.material as THREE.MeshStandardMaterial).emissive.setHex(0x550000);
    setTimeout(() => {
      (this.body.material as THREE.MeshStandardMaterial).emissive.setHex(0x000000);
    }, 80);
    return this.health <= 0;
  }

  setPosition(pos: THREE.Vector3) { this.group.position.copy(pos); }
  getPosition() { return this.group.position.clone(); }

  lookAt(target: THREE.Vector3) {
    const dir = target.clone().sub(this.group.position);
    dir.y = 0;
    if (dir.lengthSq() > 0.01) {
      const angle = Math.atan2(dir.x, dir.z);
      this.group.rotation.y = angle;
    }
  }

  dispose(scene: THREE.Scene) {
    scene.remove(this.group);
  }
}
