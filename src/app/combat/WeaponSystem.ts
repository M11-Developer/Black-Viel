import * as THREE from 'three';
import { WEAPONS, WeaponConfig } from '../../data/weapons';
import { audioManager } from '../audio/AudioManager';

export interface WeaponInstance {
  config: WeaponConfig;
  ammoInMag: number;
  reserve: number;
  attachments: string[];
  mesh: THREE.Group;
}

export class WeaponSystem {
  weapons: WeaponInstance[] = [];
  currentIndex = 0;
  private lastFireTime = 0;
  private isReloading = false;
  private reloadTimer = 0;
  private recoil = 0;
  private spread = 0;

  constructor() {}

  createWeaponMesh(config: WeaponConfig): THREE.Group {
    const group = new THREE.Group();
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1e, roughness: 0.5, metalness: 0.6 });
    const metalMat = new THREE.MeshStandardMaterial({ color: 0x4a4a4e, roughness: 0.3, metalness: 0.8 });

    let bodyGeo: THREE.BoxGeometry;
    switch (config.category) {
      case 'pistol': bodyGeo = new THREE.BoxGeometry(0.08, 0.08, 0.28); break;
      case 'smg': bodyGeo = new THREE.BoxGeometry(0.1, 0.12, 0.45); break;
      case 'rifle': bodyGeo = new THREE.BoxGeometry(0.1, 0.14, 0.65); break;
      case 'shotgun': bodyGeo = new THREE.BoxGeometry(0.12, 0.14, 0.7); break;
      case 'sniper': bodyGeo = new THREE.BoxGeometry(0.11, 0.15, 0.95); break;
      case 'melee': bodyGeo = new THREE.BoxGeometry(0.04, 0.04, 0.35); break;
      default: bodyGeo = new THREE.BoxGeometry(0.1, 0.1, 0.5);
    }

    const body = new THREE.Mesh(bodyGeo, darkMat);
    body.castShadow = true;
    group.add(body);

    // Barrel
    const barrelGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.3, 6);
    barrelGeo.rotateX(Math.PI / 2);
    const barrel = new THREE.Mesh(barrelGeo, metalMat);
    barrel.position.z = bodyGeo.parameters.depth / 2 + 0.15;
    group.add(barrel);

    // Sight
    if (config.category !== 'melee') {
      const sightGeo = new THREE.BoxGeometry(0.04, 0.06, 0.12);
      const sight = new THREE.Mesh(sightGeo, metalMat);
      sight.position.set(0, 0.1, -0.05);
      group.add(sight);
    }

    // Muzzle flash placeholder
    const flashGeo = new THREE.ConeGeometry(0.06, 0.18, 6);
    const flashMat = new THREE.MeshBasicMaterial({ color: 0xffaa44, transparent: true, opacity: 0 });
    const flash = new THREE.Mesh(flashGeo, flashMat);
    flash.rotation.x = Math.PI / 2;
    flash.position.z = bodyGeo.parameters.depth / 2 + 0.35;
    flash.name = 'muzzleFlash';
    group.add(flash);

    return group;
  }

  addWeapon(id: string): WeaponInstance | null {
    const cfg = WEAPONS.find(w => w.id === id);
    if (!cfg) return null;
    if (this.weapons.find(w => w.config.id === id)) return null; // already have
    const inst: WeaponInstance = {
      config: cfg,
      ammoInMag: cfg.magazine,
      reserve: cfg.reserve,
      attachments: [],
      mesh: this.createWeaponMesh(cfg)
    };
    this.weapons.push(inst);
    return inst;
  }

  getCurrent(): WeaponInstance | null {
    return this.weapons[this.currentIndex] ?? null;
  }

  switchWeapon(dir: number) {
    if (this.weapons.length <= 1) return;
    this.currentIndex = (this.currentIndex + dir + this.weapons.length) % this.weapons.length;
    audioManager.playProceduralSound('reload');
  }

  setWeaponIndex(idx: number) {
    if (idx >= 0 && idx < this.weapons.length) {
      this.currentIndex = idx;
      audioManager.playProceduralSound('reload');
    }
  }

  canFire(): boolean {
    const w = this.getCurrent();
    if (!w) return false;
    if (this.isReloading) return false;
    if (w.config.category === 'melee') return performance.now() - this.lastFireTime > 60000 / w.config.fireRate;
    return w.ammoInMag > 0 && performance.now() - this.lastFireTime > 60000 / w.config.fireRate;
  }

  fire(origin: THREE.Vector3, direction: THREE.Vector3): { hit: boolean; point?: THREE.Vector3; damage: number } | null {
    const w = this.getCurrent();
    if (!w || !this.canFire()) return null;

    this.lastFireTime = performance.now();
    if (w.config.category !== 'melee') w.ammoInMag--;

    // Recoil
    this.recoil = Math.min(1.5, this.recoil + w.config.recoil * 0.25);
    this.spread = Math.min(0.25, this.spread + w.config.spread * 0.6);

    // Muzzle flash
    const flash = w.mesh.getObjectByName('muzzleFlash') as THREE.Mesh;
    if (flash) {
      (flash.material as THREE.MeshBasicMaterial).opacity = 0.9;
      setTimeout(() => { (flash.material as THREE.MeshBasicMaterial).opacity = 0; }, 40);
    }

    audioManager.playProceduralSound(w.config.sound);

    return { hit: false, damage: w.config.damage };
  }

  startReload() {
    const w = this.getCurrent();
    if (!w || this.isReloading) return false;
    if (w.ammoInMag === w.config.magazine) return false;
    if (w.reserve <= 0) return false;
    this.isReloading = true;
    this.reloadTimer = w.config.reloadTime;
    audioManager.playProceduralSound('reload');
    return true;
  }

  update(dt: number) {
    // Reload timer
    if (this.isReloading) {
      this.reloadTimer -= dt;
      if (this.reloadTimer <= 0) {
        const w = this.getCurrent();
        if (w) {
          const needed = w.config.magazine - w.ammoInMag;
          const toLoad = Math.min(needed, w.reserve);
          w.ammoInMag += toLoad;
          w.reserve -= toLoad;
        }
        this.isReloading = false;
      }
    }

    // Recoil decay
    this.recoil = Math.max(0, this.recoil - dt * 2.5);
    this.spread = Math.max(0, this.spread - dt * 1.8);
  }

  getRecoil() { return this.recoil; }
  getSpread() { return this.spread; }
  getIsReloading() { return this.isReloading; }

  addAmmo(type: string, amount: number) {
    // Simplified: add to all weapons that use ammo
    for (const w of this.weapons) {
      if (w.config.category !== 'melee') {
        w.reserve += amount;
      }
    }
  }
}
