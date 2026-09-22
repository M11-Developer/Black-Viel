import * as THREE from 'three';
import { ArtBible } from '../../data/artBible';
import { SpatialHash } from '../utils/math';

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
  }

  private addCollider(box: THREE.Box3) {
    this.colliders.push(box);
    this.spatialHash.insert(box);
  }

  async buildDistrict() {
    // Clear
    while (this.group.children.length) this.group.remove(this.group.children[0]);
    this.colliders = [];
    this.spatialHash.clear();
    this.districts = [];

    // Ground plane
    const groundGeo = new THREE.PlaneGeometry(400, 400);
    const groundMat = this.materials.get('asphalt')!;
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.group.add(ground);
    // Ground collider (large)
    this.addCollider(new THREE.Box3(new THREE.Vector3(-200, -2, -200), new THREE.Vector3(200, 0, 200)));

    // Create districts
    this.createCentralStreet();
    this.createResidentialBlock();
    this.createCorporateBuilding();
    this.createIndustrialYard();
    this.createUnderground();
    this.createRooftops();
    this.createHiddenLocation();

    // Lighting
    this.setupLighting();

    // Props and storytelling
    this.addEnvironmentalStorytelling();

    console.log(`[World] Built ${this.colliders.length} colliders, ${this.group.children.length} meshes`);
  }

  private createCentralStreet() {
    const district: District = {
      id: 'central',
      name: 'Central Street',
      bounds: new THREE.Box3(new THREE.Vector3(-50, 0, -100), new THREE.Vector3(50, 30, 20)),
      powerState: 'partial'
    };
    this.districts.push(district);

    // Buildings along central street
    const buildingPositions = [
      { x: -22, z: -60, w: 12, d: 16, h: 28 },
      { x: 24, z: -65, w: 14, d: 12, h: 32 },
      { x: -28, z: -30, w: 10, d: 18, h: 22 },
      { x: 26, z: -25, w: 12, d: 14, h: 26 },
      { x: -18, z: -5, w: 16, d: 10, h: 18 },
      { x: 20, z: 0, w: 18, d: 12, h: 20 },
    ];

    for (const b of buildingPositions) {
      this.createSimpleBuilding(b.x, b.z, b.w, b.d, b.h);
    }

    // Street props: barriers, abandoned vehicles, streetlights
    for (let i = 0; i < 8; i++) {
      const x = (Math.random() - 0.5) * 40;
      const z = -80 + Math.random() * 70;
      this.createBarrier(x, z);
    }

    // Streetlights (instanced for performance)
    const lightGeo = new THREE.CylinderGeometry(0.1, 0.12, 6, 8);
    const lightMat = this.materials.get('metal')!;
    const lightCount = 12;
    const instanced = new THREE.InstancedMesh(lightGeo, lightMat, lightCount);
    let idx = 0;
    for (let i = 0; i < lightCount; i++) {
      const x = (i % 2 === 0 ? -12 : 12) + (Math.random() - 0.5) * 2;
      const z = -85 + i * 12;
      const mat = new THREE.Matrix4().makeTranslation(x, 3, z);
      instanced.setMatrixAt(idx++, mat);
    }
    instanced.instanceMatrix.needsUpdate = true;
    instanced.castShadow = true;
    this.group.add(instanced);

    // Road markings
    const roadMarkGeo = new THREE.PlaneGeometry(0.3, 6);
    const roadMarkMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 });
    for (let i = 0; i < 20; i++) {
      const m = new THREE.Mesh(roadMarkGeo, roadMarkMat);
      m.rotation.x = -Math.PI / 2;
      m.position.set(0, 0.02, -90 + i * 6);
      this.group.add(m);
    }
  }

  private createResidentialBlock() {
    const district: District = {
      id: 'residential',
      name: 'Abandoned Residential',
      bounds: new THREE.Box3(new THREE.Vector3(-70, 0, -10), new THREE.Vector3(-10, 25, 60)),
      powerState: 'blackout'
    };
    this.districts.push(district);

    // Main apartment building with interiors
    const aptX = -35, aptZ = 20;
    const floors = 5;
    for (let f = 0; f < floors; f++) {
      const y = f * 3.2;
      // Floor slab
      const slabGeo = new THREE.BoxGeometry(28, 0.3, 20);
      const slab = new THREE.Mesh(slabGeo, this.materials.get('concrete')!);
      slab.position.set(aptX, y, aptZ);
      slab.receiveShadow = true;
      this.group.add(slab);
      if (f > 0) this.addCollider(new THREE.Box3(
        new THREE.Vector3(aptX - 14, y - 0.2, aptZ - 10),
        new THREE.Vector3(aptX + 14, y + 0.2, aptZ + 10)
      ));

      // Walls with windows
      if (f < floors - 1) {
        const wallMat = this.materials.get('concrete')!;
        // Outer walls
        const walls = [
          { pos: [aptX, y + 1.6, aptZ - 10] as const, size: [28, 3.2, 0.4] as const },
          { pos: [aptX, y + 1.6, aptZ + 10] as const, size: [28, 3.2, 0.4] as const },
          { pos: [aptX - 14, y + 1.6, aptZ] as const, size: [0.4, 3.2, 20] as const },
          { pos: [aptX + 14, y + 1.6, aptZ] as const, size: [0.4, 3.2, 20] as const },
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

        // Windows
        for (let wx = -10; wx <= 10; wx += 4) {
          const winGeo = new THREE.PlaneGeometry(1.2, 1.6);
          const winMat = this.materials.get('glass')!;
          const win = new THREE.Mesh(winGeo, winMat);
          win.position.set(aptX + wx, y + 1.6, aptZ + 10.21);
          this.group.add(win);
        }
      }
    }

    // Stairwell
    const stairGeo = new THREE.BoxGeometry(3, 16, 4);
    const stair = new THREE.Mesh(stairGeo, this.materials.get('metal')!);
    stair.position.set(aptX + 10, 8, aptZ - 6);
    this.group.add(stair);
    this.addCollider(new THREE.Box3(
      new THREE.Vector3(aptX + 8.5, 0, aptZ - 8),
      new THREE.Vector3(aptX + 11.5, 16, aptZ - 4)
    ));
  }

  private createCorporateBuilding() {
    const district: District = {
      id: 'corporate',
      name: 'Helix Tower',
      bounds: new THREE.Box3(new THREE.Vector3(-20, 0, 40), new THREE.Vector3(30, 60, 90)),
      powerState: 'powered'
    };
    this.districts.push(district);

    const cx = 5, cz = 65;
    const h = 48;
    // Main tower
    const towerGeo = new THREE.BoxGeometry(24, h, 22);
    const towerMat = new THREE.MeshStandardMaterial({ color: 0x1a1a22, roughness: 0.3, metalness: 0.7 });
    const tower = new THREE.Mesh(towerGeo, towerMat);
    tower.position.set(cx, h / 2, cz);
    tower.castShadow = true;
    tower.receiveShadow = true;
    this.group.add(tower);
    this.addCollider(new THREE.Box3(
      new THREE.Vector3(cx - 12, 0, cz - 11),
      new THREE.Vector3(cx + 12, h, cz + 11)
    ));

    // Glass facade
    for (let y = 4; y < h; y += 3) {
      for (let x = -10; x <= 10; x += 2.5) {
        const glassGeo = new THREE.PlaneGeometry(2, 2.5);
        const glassMat = new THREE.MeshStandardMaterial({ color: 0x88aacc, transparent: true, opacity: 0.15, roughness: 0.05, metalness: 0.2 });
        const glass = new THREE.Mesh(glassGeo, glassMat);
        glass.position.set(cx + x, y, cz + 11.1);
        this.group.add(glass);
      }
    }

    // Entrance
    const entranceGeo = new THREE.BoxGeometry(6, 4, 2);
    const entranceMat = this.materials.get('metal')!;
    const entrance = new THREE.Mesh(entranceGeo, entranceMat);
    entrance.position.set(cx, 2, cz - 12);
    this.group.add(entrance);
  }

  private createIndustrialYard() {
    const district: District = {
      id: 'industrial',
      name: 'Industrial Yard',
      bounds: new THREE.Box3(new THREE.Vector3(20, 0, -50), new THREE.Vector3(80, 20, 10)),
      powerState: 'partial'
    };
    this.districts.push(district);

    // Warehouses
    for (let i = 0; i < 3; i++) {
      const x = 45 + i * 18;
      const z = -20;
      const wareGeo = new THREE.BoxGeometry(14, 8, 18);
      const wareMat = new THREE.MeshStandardMaterial({ color: 0x3a3a3e, roughness: 0.8, metalness: 0.2 });
      const ware = new THREE.Mesh(wareGeo, wareMat);
      ware.position.set(x, 4, z);
      ware.castShadow = true;
      this.group.add(ware);
      this.addCollider(new THREE.Box3(
        new THREE.Vector3(x - 7, 0, z - 9),
        new THREE.Vector3(x + 7, 8, z + 9)
      ));
    }

    // Containers
    const contColors = [0x8a2a2a, 0x2a5a8a, 0x4a5a2a, 0x8a8a2a];
    for (let i = 0; i < 12; i++) {
      const x = 35 + (i % 4) * 6.5;
      const z = -35 + Math.floor(i / 4) * 6.5;
      const contGeo = new THREE.BoxGeometry(6, 2.6, 2.6);
      const contMat = new THREE.MeshStandardMaterial({ color: contColors[i % contColors.length], roughness: 0.7, metalness: 0.3 });
      const cont = new THREE.Mesh(contGeo, contMat);
      cont.position.set(x, 1.3, z);
      cont.castShadow = true;
      this.group.add(cont);
      this.addCollider(new THREE.Box3(
        new THREE.Vector3(x - 3, 0, z - 1.3),
        new THREE.Vector3(x + 3, 2.6, z + 1.3)
      ));
    }

    // Substation
    const subGeo = new THREE.BoxGeometry(8, 4, 6);
    const subMat = this.materials.get('paintedMetal')!;
    const sub = new THREE.Mesh(subGeo, subMat);
    sub.position.set(55, 2, -5);
    this.group.add(sub);
    this.addCollider(new THREE.Box3(new THREE.Vector3(51, 0, -8), new THREE.Vector3(59, 4, -2)));
  }

  private createUnderground() {
    const district: District = {
      id: 'underground',
      name: 'Service Tunnels',
      bounds: new THREE.Box3(new THREE.Vector3(-40, -8, -90), new THREE.Vector3(40, 0, 80)),
      powerState: 'blackout'
    };
    this.districts.push(district);

    // Tunnel
    const tunnelLength = 160;
    const tunnelGeo = new THREE.CylinderGeometry(3.5, 3.5, tunnelLength, 16, 1, true);
    const tunnelMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2e, roughness: 0.9, side: THREE.DoubleSide });
    const tunnel = new THREE.Mesh(tunnelGeo, tunnelMat);
    tunnel.rotation.z = Math.PI / 2;
    tunnel.position.set(0, -3, -10);
    this.group.add(tunnel);

    // Tunnel floor
    const floorGeo = new THREE.BoxGeometry(tunnelLength, 0.4, 6);
    const floor = new THREE.Mesh(floorGeo, this.materials.get('concrete')!);
    floor.position.set(0, -5.5, -10);
    this.group.add(floor);
  }

  private createRooftops() {
    // Rooftop access points and traversal
    const rooftopPositions = [
      { x: -22, z: -60, h: 28 },
      { x: 24, z: -65, h: 32 },
      { x: -35, z: 20, h: 16 },
      { x: 5, z: 65, h: 48 },
    ];

    for (const r of rooftopPositions) {
      // Parapet
      const paraGeo = new THREE.BoxGeometry(12, 1, 0.4);
      const paraMat = this.materials.get('concrete')!;
      const para1 = new THREE.Mesh(paraGeo, paraMat);
      para1.position.set(r.x, r.h + 0.5, r.z - 5);
      this.group.add(para1);
      const para2 = new THREE.Mesh(paraGeo, paraMat);
      para2.position.set(r.x, r.h + 0.5, r.z + 5);
      this.group.add(para2);
    }

    // Connecting pipes / planks for parkour
    const plankGeo = new THREE.BoxGeometry(8, 0.3, 1.2);
    const plankMat = new THREE.MeshStandardMaterial({ color: 0x4a3a2a, roughness: 0.8 });
    const plank = new THREE.Mesh(plankGeo, plankMat);
    plank.position.set(-10, 28, -60);
    this.group.add(plank);
  }

  private createHiddenLocation() {
    const hiddenGeo = new THREE.BoxGeometry(6, 3, 6);
    const hiddenMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1e, roughness: 0.9 });
    const hidden = new THREE.Mesh(hiddenGeo, hiddenMat);
    hidden.position.set(-45, 0.5, -75);
    this.group.add(hidden);
    this.addCollider(new THREE.Box3(new THREE.Vector3(-48, 0, -78), new THREE.Vector3(-42, 3, -72)));

    // Secret cache marker (glowing)
    const cacheGeo = new THREE.BoxGeometry(0.8, 0.5, 0.6);
    const cacheMat = new THREE.MeshStandardMaterial({ color: 0x00ff88, emissive: 0x00ff88, emissiveIntensity: 0.6 });
    const cache = new THREE.Mesh(cacheGeo, cacheMat);
    cache.position.set(-45, 1, -75);
    this.group.add(cache);
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
    // Windows
    for (let wy = 3; wy < h - 1; wy += 2.5) {
      for (let wx = -w / 2 + 1; wx < w / 2 - 0.5; wx += 2) {
        const winGeo = new THREE.PlaneGeometry(0.9, 1.2);
        const winMat = new THREE.MeshStandardMaterial({ color: 0x334455, transparent: true, opacity: Math.random() > 0.7 ? 0.15 : 0.05, emissive: Math.random() > 0.85 ? 0xffaa44 : 0x000000, emissiveIntensity: Math.random() > 0.85 ? 0.2 : 0 });
        const win = new THREE.Mesh(winGeo, winMat);
        win.position.set(x + wx, wy, z + d / 2 + 0.06);
        this.group.add(win);
      }
    }
  }

  private createBarrier(x: number, z: number) {
    const geo = new THREE.BoxGeometry(2, 1, 0.4);
    const mat = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, roughness: 0.7 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, 0.5, z);
    mesh.rotation.y = Math.random() * 0.5;
    mesh.castShadow = true;
    this.group.add(mesh);
    this.addCollider(new THREE.Box3(
      new THREE.Vector3(x - 1, 0, z - 0.2),
      new THREE.Vector3(x + 1, 1, z + 0.2)
    ));
  }

  private setupLighting() {
    // Ambient
    const ambient = new THREE.AmbientLight(0x404050, 0.6);
    this.scene.add(ambient);

    // Sun (moon)
    const sun = new THREE.DirectionalLight(0xaaccff, 0.8);
    sun.position.set(40, 60, 20);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 150;
    sun.shadow.camera.left = -80;
    sun.shadow.camera.right = 80;
    sun.shadow.camera.top = 80;
    sun.shadow.camera.bottom = -80;
    this.scene.add(sun);

    // Street lights
    const streetLightColor = 0xffaa44;
    for (let i = 0; i < 6; i++) {
      const light = new THREE.PointLight(streetLightColor, 2, 25);
      light.position.set((i % 2 === 0 ? -12 : 12), 5.5, -80 + i * 14);
      this.scene.add(light);
    }

    // Emergency lights in industrial
    const emergency = new THREE.PointLight(0xff2200, 1.5, 15);
    emergency.position.set(55, 4, -5);
    this.scene.add(emergency);

    // Corporate tower glow
    const corpLight = new THREE.PointLight(0x00e5ff, 1, 30);
    corpLight.position.set(5, 24, 65);
    this.scene.add(corpLight);
  }

  private addEnvironmentalStorytelling() {
    // Evacuation notices, abandoned props
    const signGeo = new THREE.PlaneGeometry(2, 1.2);
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 152;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#ffcc00';
    ctx.fillRect(0, 0, 256, 152);
    ctx.fillStyle = '#000';
    ctx.font = 'bold 24px monospace';
    ctx.fillText('EVACUATION', 20, 40);
    ctx.font = '14px monospace';
    ctx.fillText('SECTOR 7 - MANDATORY', 20, 70);
    ctx.fillText('FOLLOW HELIX PROTOCOL', 20, 90);
    const tex = new THREE.CanvasTexture(canvas);
    const signMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8 });
    const sign = new THREE.Mesh(signGeo, signMat);
    sign.position.set(-10, 2.5, -55);
    sign.rotation.y = 0.3;
    this.group.add(sign);

    // Abandoned vehicle
    const carGeo = new THREE.BoxGeometry(4.5, 1.4, 2);
    const carMat = new THREE.MeshStandardMaterial({ color: 0x2a2a3a, roughness: 0.6, metalness: 0.4 });
    const car = new THREE.Mesh(carGeo, carMat);
    car.position.set(3, 0.7, -45);
    car.rotation.y = 0.2;
    car.castShadow = true;
    this.group.add(car);
    this.addCollider(new THREE.Box3(new THREE.Vector3(0.75, 0, -46), new THREE.Vector3(5.25, 1.4, -44)));
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
  }
}
