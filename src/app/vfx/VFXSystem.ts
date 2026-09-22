import * as THREE from 'three';

export interface VFXConfig {
  type: 'muzzle' | 'impact' | 'spark' | 'dust' | 'smoke' | 'debris' | 'blood' | 'bulletHole';
  position: THREE.Vector3;
  direction?: THREE.Vector3;
  color?: number;
  scale?: number;
  lifetime?: number;
}

export class VFXSystem {
  private scene: THREE.Scene;
  private pool: THREE.Mesh[] = [];
  private active: { mesh: THREE.Mesh; life: number; maxLife: number; velocity?: THREE.Vector3; }[] = [];
  private decalPool: THREE.Mesh[] = [];
  private decals: THREE.Mesh[] = [];

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    // Pre-create pool
    for (let i = 0; i < 30; i++) {
      const geo = new THREE.SphereGeometry(0.05, 6, 6);
      const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(geo, mat);
      this.pool.push(mesh);
    }
  }

  spawn(config: VFXConfig) {
    let mesh: THREE.Mesh;
    if (this.pool.length > 0) {
      mesh = this.pool.pop()!;
    } else {
      const geo = new THREE.SphereGeometry(0.05, 6, 6);
      const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
      mesh = new THREE.Mesh(geo, mat);
    }

    const color = config.color ?? 0xffaa44;
    (mesh.material as THREE.MeshBasicMaterial).color.setHex(color);
    (mesh.material as THREE.MeshBasicMaterial).opacity = 0.9;
    mesh.position.copy(config.position);
    mesh.scale.setScalar(config.scale ?? 1);
    mesh.visible = true;
    this.scene.add(mesh);

    const velocity = config.direction ? config.direction.clone().multiplyScalar(2 + Math.random() * 3) : undefined;
    if (config.type === 'spark' && velocity) velocity.y += Math.random() * 2;

    this.active.push({
      mesh,
      life: config.lifetime ?? (config.type === 'muzzle' ? 0.08 : config.type === 'impact' ? 0.15 : 0.6),
      maxLife: config.lifetime ?? 0.6,
      velocity
    });

    // Bullet holes as decals (planes)
    if (config.type === 'bulletHole' || config.type === 'impact') {
      this.spawnDecal(config.position, config.direction, config.color);
    }

    return mesh;
  }

  private spawnDecal(pos: THREE.Vector3, normal?: THREE.Vector3, color?: number) {
    if (this.decals.length > 80) {
      const old = this.decals.shift();
      if (old) this.scene.remove(old);
    }
    const geo = new THREE.CircleGeometry(0.08 + Math.random() * 0.05, 8);
    const mat = new THREE.MeshBasicMaterial({ 
      color: color ?? 0x333333, 
      transparent: true, 
      opacity: 0.7,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const decal = new THREE.Mesh(geo, mat);
    decal.position.copy(pos);
    if (normal) {
      const lookAt = pos.clone().add(normal);
      decal.lookAt(lookAt);
      decal.position.add(normal.clone().multiplyScalar(0.01));
    }
    // Random rotation
    decal.rotation.z = Math.random() * Math.PI * 2;
    this.scene.add(decal);
    this.decals.push(decal);
    // Fade after 30s
    setTimeout(() => {
      mat.opacity = 0;
      setTimeout(() => {
        this.scene.remove(decal);
        const idx = this.decals.indexOf(decal);
        if (idx >= 0) this.decals.splice(idx, 1);
      }, 1000);
    }, 30000);
  }

  spawnMuzzleFlash(pos: THREE.Vector3, dir: THREE.Vector3) {
    this.spawn({ type: 'muzzle', position: pos, direction: dir, color: 0xffcc44, scale: 1.5, lifetime: 0.06 });
    // Add sparks
    for (let i = 0; i < 3; i++) {
      const sparkDir = dir.clone().add(new THREE.Vector3((Math.random()-0.5)*0.5, (Math.random()-0.5)*0.5, (Math.random()-0.5)*0.5)).normalize();
      this.spawn({ type: 'spark', position: pos.clone(), direction: sparkDir, color: 0xffaa44, scale: 0.3 + Math.random()*0.4, lifetime: 0.2 + Math.random()*0.3 });
    }
  }

  spawnImpact(pos: THREE.Vector3, normal: THREE.Vector3, type: 'concrete' | 'metal' | 'flesh' = 'concrete') {
    const colors = { concrete: 0xaaaaaa, metal: 0xffaa44, flesh: 0xff4d6a };
    this.spawn({ type: 'impact', position: pos, direction: normal, color: colors[type], scale: 1, lifetime: 0.15 });
    this.spawn({ type: 'bulletHole', position: pos, direction: normal, color: 0x222222, scale: 1, lifetime: 0 });
    // Dust for concrete
    if (type === 'concrete') {
      for (let i = 0; i < 4; i++) {
        const dir = normal.clone().add(new THREE.Vector3((Math.random()-0.5), (Math.random()-0.5), (Math.random()-0.5))).normalize();
        this.spawn({ type: 'dust', position: pos.clone(), direction: dir, color: 0x888888, scale: 0.5 + Math.random(), lifetime: 0.6 + Math.random()*0.6 });
      }
    }
    // Sparks for metal
    if (type === 'metal') {
      for (let i = 0; i < 6; i++) {
        const dir = normal.clone().add(new THREE.Vector3((Math.random()-0.5), (Math.random()-0.5), (Math.random()-0.5))).normalize();
        this.spawn({ type: 'spark', position: pos.clone(), direction: dir, color: 0xffaa44, scale: 0.4, lifetime: 0.3 });
      }
    }
  }

  update(dt: number) {
    for (let i = this.active.length - 1; i >= 0; i--) {
      const a = this.active[i];
      a.life -= dt;
      if (a.velocity) {
        a.mesh.position.add(a.velocity.clone().multiplyScalar(dt));
        a.velocity.y -= 4 * dt; // gravity
        a.velocity.multiplyScalar(0.98);
      }
      const t = a.life / a.maxLife;
      (a.mesh.material as THREE.MeshBasicMaterial).opacity = t * 0.9;
      a.mesh.scale.multiplyScalar(0.995);
      
      if (a.life <= 0) {
        this.scene.remove(a.mesh);
        (a.mesh.material as THREE.MeshBasicMaterial).opacity = 0;
        this.pool.push(a.mesh);
        this.active.splice(i, 1);
      }
    }
  }

  clear() {
    for (const a of this.active) this.scene.remove(a.mesh);
    this.active = [];
    for (const d of this.decals) this.scene.remove(d);
    this.decals = [];
  }
}
