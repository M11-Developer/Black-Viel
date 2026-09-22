import * as THREE from 'three';
import { ArtBible } from '../../data/artBible';
import { SpatialHash } from '../utils/math';
import { Safehouse } from './Safehouse';

export interface WorldConfig {
  seed: number;
}

export interface District {
  id: string;
  name: string;
  bounds: THREE.Box3;
  powerState: 'powered' | 'partial' | 'blackout';
}

export class World {
  group = new THREE.Group();
  colliders: THREE.Box3[] = [];
  spatialHash = new SpatialHash(12);
  districts: District[] = [];
  private materials: Map<string, THREE.Material> = new Map();
  private instancedMeshes: THREE.InstancedMesh[] = [];
  safehouse: Safehouse | null = null;
  private lights: THREE.Light[] = [];

  constructor(private scene: THREE.Scene) {
    this.scene.add(this.group);
    this.createMaterials();
  }

  private createMaterials() {
    const createMat = (id: string, opts: any) => {
      const mat = new THREE.MeshStandardMaterial({
        color: opts.color ?? 0x888888,
        roughness: opts.roughness ?? 0.8,
        metalness: opts.metalness ?? 0.1,
      });
      this.materials.set(id, mat);
      return mat;
    };
    createMat('concrete', ArtBible.materials.concrete);
    createMat('asphalt', ArtBible.materials.asphalt);
    createMat('metal', ArtBible.materials.metal);
    createMat('paintedMetal', ArtBible.materials.paintedMetal);
    createMat('glass', ArtBible.materials.glass);
    createMat('fabric', ArtBible.materials.fabric);
    createMat('tactical', ArtBible.materials.tactical);
    createMat('emergency', { color: 0xff2200, roughness: 0.6, metalness: 0.2 });
    createMat('neon', { color: 0x00e5ff, roughness: 0.2, metalness: 0.5 });
    createMat('rust', { color: 0x8a4a2a, roughness: 0.9, metalness: 0.1 });
    createMat('wood', { color: 0x4a3a2a, roughness: 0.85, metalness: 0 });
  }

  private addCollider(box: THREE.Box3) {
    this.colliders.push(box);
    this.spatialHash.insert(box);
  }

  async buildDistrict() {
    while (this.group.children.length) this.group.remove(this.group.children[0]);
    this.colliders = [];
    this.spatialHash.clear();
    this.districts = [];
    this.lights.forEach(l => this.scene.remove(l));
    this.lights = [];

    // Ground plane with subtle variation
    const groundGeo = new THREE.PlaneGeometry(500, 500, 10, 10);
    const groundMat = this.materials.get('asphalt')!;
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    // Slight vertex displacement for realism
    const pos = groundGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      pos.setZ(i, (Math.random() - 0.5) * 0.15);
    }
    pos.needsUpdate = true;
    this.group.add(ground);
    this.addCollider(new THREE.Box3(new THREE.Vector3(-250, -2, -250), new THREE.Vector3(250, 0, 250)));

    this.createCentralStreet();
    this.createResidentialBlock();
    this.createCorporateBuilding();
    this.createIndustrialYard();
    this.createUnderground();
    this.createRooftops();
    this.createHiddenLocation();
    this.createSafehouse();
    this.createAdditionalProps();

    this.setupLighting();
    this.addEnvironmentalStorytelling();

    console.log(`[World] Built ${this.colliders.length} colliders, ${this.group.children.length} meshes, ${this.districts.length} districts`);
  }

  private createCentralStreet() {
    const district: District = {
      id: 'central',
      name: 'Central Street',
      bounds: new THREE.Box3(new THREE.Vector3(-60, 0, -110), new THREE.Vector3(60, 35, 25)),
      powerState: 'partial'
    };
    this.districts.push(district);

    const buildingPositions = [
      { x: -24, z: -68, w: 14, d: 18, h: 30 },
      { x: 26, z: -72, w: 16, d: 14, h: 36 },
      { x: -30, z: -35, w: 12, d: 20, h: 24 },
      { x: 28, z: -28, w: 14, d: 16, h: 28 },
      { x: -20, z: -6, w: 18, d: 12, h: 20 },
      { x: 22, z: 2, w: 20, d: 14, h: 22 },
      { x: -45, z: -50, w: 10, d: 10, h: 16 },
      { x: 45, z: -55, w: 10, d: 10, h: 18 },
    ];

    for (const b of buildingPositions) {
      this.createSimpleBuilding(b.x, b.z, b.w, b.d, b.h);
    }

    for (let i = 0; i < 12; i++) {
      const x = (Math.random() - 0.5) * 50;
      const z = -90 + Math.random() * 80;
      this.createBarrier(x, z);
      if (i % 3 === 0) this.createDebris(x + (Math.random()-0.5)*3, z + (Math.random()-0.5)*3);
    }

    const lightGeo = new THREE.CylinderGeometry(0.1, 0.12, 6, 8);
    const lightMat = this.materials.get('metal')!;
    const lightCount = 16;
    const instanced = new THREE.InstancedMesh(lightGeo, lightMat, lightCount);
    let idx = 0;
    for (let i = 0; i < lightCount; i++) {
      const x = (i % 2 === 0 ? -13 : 13) + (Math.random() - 0.5) * 2;
      const z = -95 + i * 11;
      const mat = new THREE.Matrix4().makeTranslation(x, 3, z);
      instanced.setMatrixAt(idx++, mat);
    }
    instanced.instanceMatrix.needsUpdate = true;
    instanced.castShadow = true;
    this.group.add(instanced);

    const roadMarkGeo = new THREE.PlaneGeometry(0.3, 6);
    const roadMarkMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 });
    for (let i = 0; i < 28; i++) {
      const m = new THREE.Mesh(roadMarkGeo, roadMarkMat);
      m.rotation.x = -Math.PI / 2;
      m.position.set(0, 0.02, -100 + i * 6);
      this.group.add(m);
    }

    // Sidewalks
    const sidewalkGeo = new THREE.BoxGeometry(4, 0.2, 120);
    const sidewalkMat = this.materials.get('concrete')!;
    const leftWalk = new THREE.Mesh(sidewalkGeo, sidewalkMat);
    leftWalk.position.set(-8, 0.1, -35);
    this.group.add(leftWalk);
    const rightWalk = new THREE.Mesh(sidewalkGeo, sidewalkMat);
    rightWalk.position.set(8, 0.1, -35);
    this.group.add(rightWalk);
  }

  private createResidentialBlock() {
    const district: District = {
      id: 'residential',
      name: 'Abandoned Residential',
      bounds: new THREE.Box3(new THREE.Vector3(-75, 0, -10), new THREE.Vector3(-10, 25, 65)),
      powerState: 'blackout'
    };
    this.districts.push(district);

    const aptX = -38, aptZ = 22;
    const floors = 6;
    for (let f = 0; f < floors; f++) {
      const y = f * 3.2;
      const slabGeo = new THREE.BoxGeometry(30, 0.3, 22);
      const slab = new THREE.Mesh(slabGeo, this.materials.get('concrete')!);
      slab.position.set(aptX, y, aptZ);
      slab.receiveShadow = true;
      this.group.add(slab);
      if (f > 0) this.addCollider(new THREE.Box3(
        new THREE.Vector3(aptX - 15, y - 0.2, aptZ - 11),
        new THREE.Vector3(aptX + 15, y + 0.2, aptZ + 11)
      ));

      if (f < floors - 1) {
        const wallMat = this.materials.get('concrete')!;
        const walls = [
          { pos: [aptX, y + 1.6, aptZ - 11] as const, size: [30, 3.2, 0.4] as const },
          { pos: [aptX, y + 1.6, aptZ + 11] as const, size: [30, 3.2, 0.4] as const },
          { pos: [aptX - 15, y + 1.6, aptZ] as const, size: [0.4, 3.2, 22] as const },
          { pos: [aptX + 15, y + 1.6, aptZ] as const, size: [0.4, 3.2, 22] as const },
        ];
        for (const w of walls) {
          const geo = new THREE.BoxGeometry(w.size[0], w.size[1], w.size[2]);
          const mesh = new THREE.Mesh(geo, wallMat);
          mesh.position.set(w.pos[0], w.pos[1], w.pos[2]);
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          this.group.add(mesh);
          this.addCollider(new THREE.Box3(
            new THREE.Vector3(w.pos[0] - w.size[0] / 2, w.pos[1] - w.size[1] / 2, w.pos[2] - w.size[2] / 2),
            new THREE.Vector3(w.pos[0] + w.size[0] / 2, w.pos[1] + w.size[1] / 2, w.pos[2] + w.size[2] / 2)
          ));
        }

        for (let wx = -12; wx <= 12; wx += 3.5) {
          const winGeo = new THREE.PlaneGeometry(1.2, 1.6);
          const winMat = new THREE.MeshStandardMaterial({ 
            color: 0x334455, 
            transparent: true, 
            opacity: Math.random() > 0.6 ? 0.12 : 0.04,
            emissive: Math.random() > 0.82 ? 0xffaa44 : 0x000000,
            emissiveIntensity: Math.random() > 0.82 ? 0.15 : 0
          });
          const win = new THREE.Mesh(winGeo, winMat);
          win.position.set(aptX + wx, y + 1.6, aptZ + 11.21);
          this.group.add(win);
          // Interior light for some windows
          if (Math.random() > 0.85) {
            const light = new THREE.PointLight(0xffaa66, 0.6, 8);
            light.position.set(aptX + wx, y + 1.6, aptZ + 9);
            this.scene.add(light);
            this.lights.push(light);
          }
        }

        // Interior props for some floors
        if (f === 2 || f === 3) {
          for (let p = 0; p < 3; p++) {
            const propGeo = new THREE.BoxGeometry(0.8, 0.6, 0.5);
            const propMat = new THREE.MeshStandardMaterial({ color: 0x4a3a2a, roughness: 0.9 });
            const prop = new THREE.Mesh(propGeo, propMat);
            prop.position.set(aptX + (Math.random()-0.5)*10, y + 0.5, aptZ + (Math.random()-0.5)*6);
            this.group.add(prop);
          }
        }
      }
    }

    const stairGeo = new THREE.BoxGeometry(3.5, 20, 4.5);
    const stair = new THREE.Mesh(stairGeo, this.materials.get('metal')!);
    stair.position.set(aptX + 11, 10, aptZ - 6);
    this.group.add(stair);
    this.addCollider(new THREE.Box3(
      new THREE.Vector3(aptX + 9.25, 0, aptZ - 8.25),
      new THREE.Vector3(aptX + 12.75, 20, aptZ - 3.75)
    ));

    // Balconies
    for (let f = 1; f < floors-1; f++) {
      const balGeo = new THREE.BoxGeometry(4, 0.2, 2);
      const bal = new THREE.Mesh(balGeo, this.materials.get('concrete')!);
      bal.position.set(aptX - 8, f*3.2, aptZ + 12);
      this.group.add(bal);
    }
  }

  private createCorporateBuilding() {
    const district: District = {
      id: 'corporate',
      name: 'Helix Tower',
      bounds: new THREE.Box3(new THREE.Vector3(-20, 0, 40), new THREE.Vector3(30, 60, 90)),
      powerState: 'powered'
    };
    this.districts.push(district);

    const cx = 5, cz = 68;
    const h = 52;
    const towerGeo = new THREE.BoxGeometry(26, h, 24);
    const towerMat = new THREE.MeshStandardMaterial({ color: 0x1a1a22, roughness: 0.25, metalness: 0.75 });
    const tower = new THREE.Mesh(towerGeo, towerMat);
    tower.position.set(cx, h / 2, cz);
    tower.castShadow = true;
    tower.receiveShadow = true;
    this.group.add(tower);
    this.addCollider(new THREE.Box3(
      new THREE.Vector3(cx - 13, 0, cz - 12),
      new THREE.Vector3(cx + 13, h, cz + 12)
    ));

    // Glass facade with variation
    for (let y = 4; y < h; y += 2.8) {
      for (let x = -11; x <= 11; x += 2.4) {
        const isLit = Math.random() > 0.7;
        const glassGeo = new THREE.PlaneGeometry(2, 2.4);
        const glassMat = new THREE.MeshStandardMaterial({ 
          color: isLit ? 0xaaccff : 0x334455, 
          transparent: true, 
          opacity: isLit ? 0.25 : 0.08,
          emissive: isLit ? 0x88aacc : 0x000000,
          emissiveIntensity: isLit ? 0.2 : 0,
          roughness: 0.05, 
          metalness: 0.3 
        });
        const glass = new THREE.Mesh(glassGeo, glassMat);
        glass.position.set(cx + x, y, cz + 12.1);
        this.group.add(glass);
      }
    }

    // Helix logo (emissive)
    const logoGeo = new THREE.PlaneGeometry(6, 2);
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 170;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, 512, 170);
    ctx.fillStyle = '#00e5ff';
    ctx.font = 'bold 64px Orbitron';
    ctx.textAlign = 'center';
    ctx.fillText('HELIX', 256, 100);
    ctx.font = '16px JetBrains Mono';
    ctx.fillStyle = '#8a8a9a';
    ctx.fillText('CORPORATE TOWER • SECTOR 7', 256, 130);
    const tex = new THREE.CanvasTexture(canvas);
    const logoMat = new THREE.MeshStandardMaterial({ map: tex, emissive: 0x00aaff, emissiveIntensity: 0.3 });
    const logo = new THREE.Mesh(logoGeo, logoMat);
    logo.position.set(cx, 8, cz - 12.1);
    logo.rotation.y = Math.PI;
    this.group.add(logo);

    // Entrance with security
    const entranceGeo = new THREE.BoxGeometry(7, 4.5, 2.5);
    const entranceMat = this.materials.get('metal')!;
    const entrance = new THREE.Mesh(entranceGeo, entranceMat);
    entrance.position.set(cx, 2.25, cz - 13.5);
    this.group.add(entrance);

    // Security barriers at entrance
    for (let i = -1; i <= 1; i++) {
      const bollardGeo = new THREE.CylinderGeometry(0.25, 0.25, 1, 8);
      const bollard = new THREE.Mesh(bollardGeo, this.materials.get('paintedMetal')!);
      bollard.position.set(cx + i*2, 0.5, cz - 16);
      this.group.add(bollard);
      this.addCollider(new THREE.Box3(
        new THREE.Vector3(cx + i*2 -0.25, 0, cz -16.25),
        new THREE.Vector3(cx + i*2 +0.25, 1, cz -15.75)
      ));
    }
  }

  private createIndustrialYard() {
    const district: District = {
      id: 'industrial',
      name: 'Industrial Yard',
      bounds: new THREE.Box3(new THREE.Vector3(20, 0, -55), new THREE.Vector3(85, 20, 15)),
      powerState: 'partial'
    };
    this.districts.push(district);

    for (let i = 0; i < 4; i++) {
      const x = 42 + i * 16;
      const z = -22;
      const wareGeo = new THREE.BoxGeometry(14, 9, 18);
      const wareMat = new THREE.MeshStandardMaterial({ color: 0x3a3a3e, roughness: 0.85, metalness: 0.15 });
      const ware = new THREE.Mesh(wareGeo, wareMat);
      ware.position.set(x, 4.5, z);
      ware.castShadow = true;
      this.group.add(ware);
      this.addCollider(new THREE.Box3(
        new THREE.Vector3(x - 7, 0, z - 9),
        new THREE.Vector3(x + 7, 9, z + 9)
      ));
      // Warehouse details
      const doorGeo = new THREE.BoxGeometry(4, 5, 0.3);
      const door = new THREE.Mesh(doorGeo, this.materials.get('metal')!);
      door.position.set(x, 2.5, z + 9.2);
      this.group.add(door);
    }

    const contColors = [0x8a2a2a, 0x2a5a8a, 0x4a5a2a, 0x8a8a2a, 0x5a3a2a];
    for (let i = 0; i < 16; i++) {
      const x = 32 + (i % 5) * 6.8;
      const z = -38 + Math.floor(i / 5) * 6.8;
      const contGeo = new THREE.BoxGeometry(6, 2.6, 2.6);
      const contMat = new THREE.MeshStandardMaterial({ color: contColors[i % contColors.length], roughness: 0.7, metalness: 0.3 });
      const cont = new THREE.Mesh(contGeo, contMat);
      cont.position.set(x, 1.3, z);
      cont.castShadow = true;
      cont.rotation.y = (Math.random()-0.5)*0.1;
      this.group.add(cont);
      this.addCollider(new THREE.Box3(
        new THREE.Vector3(x - 3, 0, z - 1.3),
        new THREE.Vector3(x + 3, 2.6, z + 1.3)
      ));
    }

    const subGeo = new THREE.BoxGeometry(9, 4.5, 7);
    const subMat = this.materials.get('paintedMetal')!;
    const sub = new THREE.Mesh(subGeo, subMat);
    sub.position.set(58, 2.25, -4);
    this.group.add(sub);
    this.addCollider(new THREE.Box3(new THREE.Vector3(53.5, 0, -7.5), new THREE.Vector3(62.5, 4.5, -0.5)));

    // Power lines
    for (let i = 0; i < 3; i++) {
      const poleGeo = new THREE.CylinderGeometry(0.15, 0.18, 8, 8);
      const pole = new THREE.Mesh(poleGeo, this.materials.get('metal')!);
      pole.position.set(55 + i*8, 4, -12);
      this.group.add(pole);
    }

    // Machinery
    const machGeo = new THREE.BoxGeometry(3, 2, 2);
    const machMat = new THREE.MeshStandardMaterial({ color: 0x4a4a4a, roughness: 0.7, metalness: 0.5 });
    for (let i = 0; i < 4; i++) {
      const mach = new THREE.Mesh(machGeo, machMat);
      mach.position.set(40 + i*3, 1, -8);
      this.group.add(mach);
    }
  }

  private createUnderground() {
    const district: District = {
      id: 'underground',
      name: 'Service Tunnels',
      bounds: new THREE.Box3(new THREE.Vector3(-45, -8, -95), new THREE.Vector3(45, 0, 85)),
      powerState: 'blackout'
    };
    this.districts.push(district);

    const tunnelLength = 180;
    const tunnelGeo = new THREE.CylinderGeometry(3.8, 3.8, tunnelLength, 20, 1, true);
    const tunnelMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2e, roughness: 0.95, side: THREE.DoubleSide });
    const tunnel = new THREE.Mesh(tunnelGeo, tunnelMat);
    tunnel.rotation.z = Math.PI / 2;
    tunnel.position.set(0, -3.2, -10);
    this.group.add(tunnel);

    const floorGeo = new THREE.BoxGeometry(tunnelLength, 0.5, 7);
    const floor = new THREE.Mesh(floorGeo, this.materials.get('concrete')!);
    floor.position.set(0, -5.8, -10);
    this.group.add(floor);

    // Tunnel lights (flickering)
    for (let i = -80; i <= 80; i += 18) {
      const light = new THREE.PointLight(0xffaa44, 0.8, 12);
      light.position.set(i, -1.5, -10);
      this.scene.add(light);
      this.lights.push(light);
    }

    // Pipes along tunnel
    const pipeGeo = new THREE.CylinderGeometry(0.2, 0.2, tunnelLength, 8);
    pipeGeo.rotateZ(Math.PI/2);
    const pipeMat = new THREE.MeshStandardMaterial({ color: 0x4a4a4a, roughness: 0.6, metalness: 0.5 });
    const pipe = new THREE.Mesh(pipeGeo, pipeMat);
    pipe.position.set(0, -0.5, -8);
    this.group.add(pipe);
  }

  private createRooftops() {
    const rooftopPositions = [
      { x: -24, z: -68, h: 30 },
      { x: 26, z: -72, h: 36 },
      { x: -38, z: 22, h: 19.2 },
      { x: 5, z: 68, h: 52 },
      { x: 42, z: -22, h: 9 },
    ];

    for (const r of rooftopPositions) {
      const paraGeo = new THREE.BoxGeometry(13, 1.1, 0.45);
      const paraMat = this.materials.get('concrete')!;
      const para1 = new THREE.Mesh(paraGeo, paraMat);
      para1.position.set(r.x, r.h + 0.55, r.z - 5.5);
      this.group.add(para1);
      const para2 = new THREE.Mesh(paraGeo, paraMat);
      para2.position.set(r.x, r.h + 0.55, r.z + 5.5);
      this.group.add(para2);
      const para3 = new THREE.BoxGeometry(0.45, 1.1, 11);
      const para3a = new THREE.Mesh(para3, paraMat);
      para3a.position.set(r.x - 6.25, r.h + 0.55, r.z);
      this.group.add(para3a);
      const para3b = new THREE.Mesh(para3, paraMat);
      para3b.position.set(r.x + 6.25, r.h + 0.55, r.z);
      this.group.add(para3b);

      // Rooftop props
      const acGeo = new THREE.BoxGeometry(1.5, 1, 1);
      const ac = new THREE.Mesh(acGeo, this.materials.get('metal')!);
      ac.position.set(r.x + 3, r.h + 0.5, r.z + 2);
      this.group.add(ac);
    }

    const plankGeo = new THREE.BoxGeometry(9, 0.35, 1.3);
    const plankMat = new THREE.MeshStandardMaterial({ color: 0x4a3a2a, roughness: 0.85 });
    const plank1 = new THREE.Mesh(plankGeo, plankMat);
    plank1.position.set(-10, 30, -68);
    this.group.add(plank1);
    const plank2 = new THREE.Mesh(plankGeo, plankMat);
    plank2.position.set(2, 22, -35);
    plank2.rotation.y = 0.4;
    this.group.add(plank2);

    // Zipline / cable for traversal visual
    const cableGeo = new THREE.CylinderGeometry(0.02, 0.02, 30, 4);
    cableGeo.rotateZ(Math.PI/2);
    const cableMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 });
    const cable = new THREE.Mesh(cableGeo, cableMat);
    cable.position.set(-5, 32, -50);
    this.group.add(cable);
  }

  private createHiddenLocation() {
    const hiddenGeo = new THREE.BoxGeometry(7, 3.5, 7);
    const hiddenMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1e, roughness: 0.95 });
    const hidden = new THREE.Mesh(hiddenGeo, hiddenMat);
    hidden.position.set(-48, 0.5, -78);
    this.group.add(hidden);
    this.addCollider(new THREE.Box3(new THREE.Vector3(-51.5, 0, -81.5), new THREE.Vector3(-44.5, 3.5, -74.5)));

    const cacheGeo = new THREE.BoxGeometry(0.9, 0.6, 0.7);
    const cacheMat = new THREE.MeshStandardMaterial({ color: 0x00ff88, emissive: 0x00ff88, emissiveIntensity: 0.7 });
    const cache = new THREE.Mesh(cacheGeo, cacheMat);
    cache.position.set(-48, 1.2, -78);
    this.group.add(cache);

    // Add light for cache
    const cacheLight = new THREE.PointLight(0x00ff88, 1, 6);
    cacheLight.position.set(-48, 1.5, -78);
    this.scene.add(cacheLight);
    this.lights.push(cacheLight);
  }

  private createSafehouse() {
    this.safehouse = new Safehouse();
    this.safehouse.setPosition(-58, 0, 15);
    this.group.add(this.safehouse.group);
    this.safehouse.getColliders().forEach(c => {
      const shifted = new THREE.Box3(
        c.min.clone().add(new THREE.Vector3(-58, 0, 15)),
        c.max.clone().add(new THREE.Vector3(-58, 0, 15))
      );
      this.addCollider(shifted);
    });

    const district: District = {
      id: 'safehouse',
      name: 'Safehouse',
      bounds: new THREE.Box3(new THREE.Vector3(-63, 0, 11), new THREE.Vector3(-53, 4, 19)),
      powerState: 'powered'
    };
    this.districts.push(district);
  }

  private createAdditionalProps() {
    // More debris
    for (let i = 0; i < 20; i++) {
      this.createDebris((Math.random()-0.5)*100, -80 + Math.random()*120);
    }
    // Trash bins
    for (let i = 0; i < 6; i++) {
      const binGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.9, 8);
      const binMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.8 });
      const bin = new THREE.Mesh(binGeo, binMat);
      bin.position.set((Math.random()-0.5)*60, 0.45, -70 + Math.random()*90);
      this.group.add(bin);
      this.addCollider(new THREE.Box3(
        new THREE.Vector3(bin.position.x-0.4, 0, bin.position.z-0.4),
        new THREE.Vector3(bin.position.x+0.4, 0.9, bin.position.z+0.4)
      ));
    }
  }

  private createSimpleBuilding(x: number, z: number, w: number, d: number, h: number) {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mat = new THREE.MeshStandardMaterial({ color: 0x2a2a32, roughness: 0.8, metalness: 0.15 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, h / 2, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.group.add(mesh);
    this.addCollider(new THREE.Box3(
      new THREE.Vector3(x - w / 2, 0, z - d / 2),
      new THREE.Vector3(x + w / 2, h, z + d / 2)
    ));
    for (let wy = 3; wy < h - 1; wy += 2.5) {
      for (let wx = -w / 2 + 1; wx < w / 2 - 0.5; wx += 2.2) {
        const winGeo = new THREE.PlaneGeometry(0.9, 1.2);
        const isLit = Math.random() > 0.72;
        const winMat = new THREE.MeshStandardMaterial({ 
          color: isLit ? 0x88aacc : 0x334455, 
          transparent: true, 
          opacity: isLit ? 0.18 : 0.05,
          emissive: isLit ? 0xffaa44 : 0x000000,
          emissiveIntensity: isLit ? 0.12 : 0
        });
        const win = new THREE.Mesh(winGeo, winMat);
        win.position.set(x + wx, wy, z + d / 2 + 0.06);
        this.group.add(win);
      }
    }
    // Rooftop details
    if (Math.random() > 0.5) {
      const antennaGeo = new THREE.CylinderGeometry(0.05, 0.05, 3, 6);
      const antenna = new THREE.Mesh(antennaGeo, this.materials.get('metal')!);
      antenna.position.set(x + (Math.random()-0.5)*w*0.5, h + 1.5, z + (Math.random()-0.5)*d*0.5);
      this.group.add(antenna);
    }
  }

  private createBarrier(x: number, z: number) {
    const geo = new THREE.BoxGeometry(2.2, 1.1, 0.45);
    const mat = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, roughness: 0.7 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, 0.55, z);
    mesh.rotation.y = Math.random() * 0.6 - 0.3;
    mesh.castShadow = true;
    this.group.add(mesh);
    this.addCollider(new THREE.Box3(
      new THREE.Vector3(x - 1.1, 0, z - 0.25),
      new THREE.Vector3(x + 1.1, 1.1, z + 0.25)
    ));
  }

  private createDebris(x: number, z: number) {
    const geo = new THREE.BoxGeometry(0.3 + Math.random()*0.5, 0.1 + Math.random()*0.3, 0.3 + Math.random()*0.5);
    const mat = new THREE.MeshStandardMaterial({ color: 0x4a4a4a, roughness: 0.9 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, 0.05, z);
    mesh.rotation.set(Math.random()*0.5, Math.random()*Math.PI, Math.random()*0.5);
    this.group.add(mesh);
  }

  private setupLighting() {
    const ambient = new THREE.AmbientLight(0x404050, 0.65);
    this.scene.add(ambient);
    this.lights.push(ambient);

    const sun = new THREE.DirectionalLight(0xaaccff, 0.9);
    sun.position.set(50, 70, 25);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 200;
    sun.shadow.camera.left = -100;
    sun.shadow.camera.right = 100;
    sun.shadow.camera.top = 100;
    sun.shadow.camera.bottom = -100;
    sun.shadow.bias = -0.0001;
    this.scene.add(sun);
    this.lights.push(sun);

    const streetLightColor = 0xffaa44;
    for (let i = 0; i < 8; i++) {
      const light = new THREE.PointLight(streetLightColor, 2.2, 28);
      light.position.set((i % 2 === 0 ? -13 : 13), 5.8, -90 + i * 13);
      light.castShadow = true;
      light.shadow.mapSize.set(512, 512);
      this.scene.add(light);
      this.lights.push(light);
    }

    const emergency = new THREE.PointLight(0xff2200, 1.8, 18);
    emergency.position.set(58, 4.5, -4);
    this.scene.add(emergency);
    this.lights.push(emergency);

    const corpLight = new THREE.PointLight(0x00e5ff, 1.2, 35);
    corpLight.position.set(5, 28, 68);
    this.scene.add(corpLight);
    this.lights.push(corpLight);

    // Safehouse warm light
    const safeLight = new THREE.PointLight(0xffaa66, 1.5, 15);
    safeLight.position.set(-58, 3, 15);
    this.scene.add(safeLight);
    this.lights.push(safeLight);

    // Moon + stars subtle
    const moonLight = new THREE.DirectionalLight(0x8888ff, 0.15);
    moonLight.position.set(-40, 60, -20);
    this.scene.add(moonLight);
    this.lights.push(moonLight);
  }

  private addEnvironmentalStorytelling() {
    const signGeo = new THREE.PlaneGeometry(2.2, 1.4);
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 152;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#ffcc00';
    ctx.fillRect(0, 0, 256, 152);
    ctx.fillStyle = '#000';
    ctx.font = 'bold 22px monospace';
    ctx.fillText('EVACUATION', 20, 38);
    ctx.font = '13px monospace';
    ctx.fillText('SECTOR 7 - MANDATORY', 20, 68);
    ctx.fillText('FOLLOW HELIX PROTOCOL', 20, 88);
    ctx.fillStyle = '#aa0000';
    ctx.font = 'bold 11px monospace';
    ctx.fillText('BLACKOUT ZONE — AUTHORIZED ONLY', 20, 115);
    const tex = new THREE.CanvasTexture(canvas);
    const signMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8 });
    const sign = new THREE.Mesh(signGeo, signMat);
    sign.position.set(-12, 2.6, -58);
    sign.rotation.y = 0.35;
    this.group.add(sign);

    // Abandoned vehicles
    const carPositions = [
      { x: 4, z: -48, rot: 0.2, color: 0x2a2a3a },
      { x: -6, z: -32, rot: -0.3, color: 0x3a2a2a },
      { x: 18, z: -18, rot: 0.5, color: 0x2a3a2a },
    ];
    for (const c of carPositions) {
      const carGeo = new THREE.BoxGeometry(4.8, 1.5, 2.2);
      const carMat = new THREE.MeshStandardMaterial({ color: c.color, roughness: 0.6, metalness: 0.4 });
      const car = new THREE.Mesh(carGeo, carMat);
      car.position.set(c.x, 0.75, c.z);
      car.rotation.y = c.rot;
      car.castShadow = true;
      this.group.add(car);
      this.addCollider(new THREE.Box3(
        new THREE.Vector3(c.x-2.4, 0, c.z-1.1),
        new THREE.Vector3(c.x+2.4, 1.5, c.z+1.1)
      ));
      // Broken windows
      const winGeo = new THREE.PlaneGeometry(1, 0.6);
      const winMat = new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.9 });
      const win = new THREE.Mesh(winGeo, winMat);
      win.position.set(c.x, 1.1, c.z);
      win.rotation.y = c.rot;
      this.group.add(win);
    }

    // Faction graffiti
    const graffitiGeo = new THREE.PlaneGeometry(3, 1.5);
    const gCanvas = document.createElement('canvas');
    gCanvas.width = 256;
    gCanvas.height = 128;
    const gCtx = gCanvas.getContext('2d')!;
    gCtx.fillStyle = 'rgba(0,0,0,0)';
    gCtx.fillRect(0, 0, 256, 128);
    gCtx.fillStyle = '#ff4d6a';
    gCtx.font = 'bold 32px Orbitron';
    gCtx.fillText('ASHEN', 20, 60);
    gCtx.fillStyle = '#ffffff';
    gCtx.font = '14px JetBrains Mono';
    gCtx.fillText('WE REMEMBER', 20, 85);
    const gTex = new THREE.CanvasTexture(gCanvas);
    const gMat = new THREE.MeshStandardMaterial({ map: gTex, transparent: true, roughness: 0.9 });
    const graffiti = new THREE.Mesh(graffitiGeo, gMat);
    graffiti.position.set(-24, 2, -67.9);
    graffiti.rotation.y = 0;
    this.group.add(graffiti);

    // Emergency broadcast speaker
    const speakerGeo = new THREE.BoxGeometry(0.6, 0.8, 0.4);
    const speaker = new THREE.Mesh(speakerGeo, this.materials.get('metal')!);
    speaker.position.set(-10, 3.5, -45);
    this.group.add(speaker);
  }

  getDistrictAt(pos: THREE.Vector3): District | null {
    for (const d of this.districts) {
      if (d.bounds.containsPoint(pos)) return d;
    }
    return null;
  }

  setPowerState(districtId: string, state: District['powerState']) {
    const d = this.districts.find(x => x.id === districtId);
    if (d) d.powerState = state;
  }

  dispose() {
    this.scene.remove(this.group);
    this.lights.forEach(l => this.scene.remove(l));
  }
}
