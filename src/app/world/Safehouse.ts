import * as THREE from 'three';

export class Safehouse {
  group = new THREE.Group();
  private colliders: THREE.Box3[] = [];
  private stations: { type: string; pos: THREE.Vector3; mesh: THREE.Mesh }[] = [];

  constructor() {
    this.build();
  }

  private build() {
    // Safehouse is an abandoned apartment turned into hub
    // Located near residential block, slightly hidden

    // Floor
    const floorGeo = new THREE.BoxGeometry(10, 0.3, 8);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2e, roughness: 0.9 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.position.set(0, 0, 0);
    floor.receiveShadow = true;
    this.group.add(floor);

    // Walls
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x3a3a42, roughness: 0.85 });
    const walls = [
      { pos: [0, 1.5, -4] as const, size: [10, 3, 0.3] as const },
      { pos: [0, 1.5, 4] as const, size: [10, 3, 0.3] as const },
      { pos: [-5, 1.5, 0] as const, size: [0.3, 3, 8] as const },
      { pos: [5, 1.5, 0] as const, size: [0.3, 3, 8] as const },
    ];
    for (const w of walls) {
      const geo = new THREE.BoxGeometry(w.size[0], w.size[1], w.size[2]);
      const mesh = new THREE.Mesh(geo, wallMat);
      mesh.position.set(w.pos[0], w.pos[1], w.pos[2]);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.group.add(mesh);
      this.colliders.push(new THREE.Box3(
        new THREE.Vector3(w.pos[0] - w.size[0]/2, w.pos[1] - w.size[1]/2, w.pos[2] - w.size[2]/2),
        new THREE.Vector3(w.pos[0] + w.size[0]/2, w.pos[1] + w.size[1]/2, w.pos[2] + w.size[2]/2)
      ));
    }

    // Stations
    this.createStation('weapons', -3.5, 0.6, -2.5, 0x4a6a8a);
    this.createStation('map', 0, 0.6, -3.2, 0x6aa6ff);
    this.createStation('missions', 3.5, 0.6, -2.5, 0xa78bfa);
    this.createStation('upgrades', -3.5, 0.6, 2.5, 0x4dff9a);
    this.createStation('story', 3.5, 0.6, 2.5, 0xffaa44);

    // Lighting - warm safe light
    const light = new THREE.PointLight(0xffaa66, 1.5, 12);
    light.position.set(0, 2.5, 0);
    this.group.add(light);

    // Emissive screens
    const screenGeo = new THREE.PlaneGeometry(1.2, 0.8);
    const screenMat = new THREE.MeshStandardMaterial({ 
      color: 0x00e5ff, 
      emissive: 0x00aaff, 
      emissiveIntensity: 0.4,
      roughness: 0.2 
    });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0, 1.5, -3.84);
    this.group.add(screen);

    // Bed / rest area
    const bedGeo = new THREE.BoxGeometry(2, 0.4, 3);
    const bedMat = new THREE.MeshStandardMaterial({ color: 0x2a3a2a, roughness: 0.9 });
    const bed = new THREE.Mesh(bedGeo, bedMat);
    bed.position.set(0, 0.2, 1.5);
    this.group.add(bed);

    // Lore wall - photos, notes
    for (let i = 0; i < 5; i++) {
      const noteGeo = new THREE.PlaneGeometry(0.4, 0.5);
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 160;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = i % 2 === 0 ? '#fffaaa' : '#aaffff';
      ctx.fillRect(0, 0, 128, 160);
      ctx.fillStyle = '#000';
      ctx.font = '10px monospace';
      ctx.fillText(`NOTE ${i+1}`, 10, 20);
      ctx.font = '8px monospace';
      ctx.fillText('Mara was here', 10, 40);
      ctx.fillText('Blackout != accident', 10, 55);
      const tex = new THREE.CanvasTexture(canvas);
      const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9 });
      const note = new THREE.Mesh(noteGeo, mat);
      note.position.set(-4.84, 1.2 + i * 0.3, -1 + Math.random()*0.5);
      note.rotation.y = Math.PI / 2;
      note.rotation.z = (Math.random()-0.5)*0.2;
      this.group.add(note);
    }
  }

  private createStation(type: string, x: number, y: number, z: number, color: number) {
    const geo = new THREE.BoxGeometry(1, 0.8, 0.6);
    const mat = new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.2, roughness: 0.6 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    this.group.add(mesh);
    this.stations.push({ type, pos: new THREE.Vector3(x, y, z), mesh });

    // Label
    const labelGeo = new THREE.PlaneGeometry(0.8, 0.2);
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, 256, 64);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 20px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(type.toUpperCase(), 128, 38);
    const tex = new THREE.CanvasTexture(canvas);
    const labelMat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide });
    const label = new THREE.Mesh(labelGeo, labelMat);
    label.position.set(x, y + 0.7, z);
    this.group.add(label);
  }

  getColliders(): THREE.Box3[] { return this.colliders; }
  getStations() { return this.stations; }

  setPosition(x: number, y: number, z: number) {
    this.group.position.set(x, y, z);
    // Update collider positions
    // (simplified - in real implementation would update world colliders)
  }

  interactWithStation(type: string): string {
    switch(type) {
      case 'weapons': return 'WEAPONS STATION — Modify and upgrade arsenal';
      case 'map': return 'MAP TABLE — Veyra Sector 7 tactical overview';
      case 'missions': return 'MISSION BOARD — Active operations and intel';
      case 'upgrades': return 'UPGRADE BENCH — Enhance gear with scavenged materials';
      case 'story': return 'INVESTIGATION WALL — Mara\'s notes and Blackout evidence';
      default: return `STATION: ${type}`;
    }
  }
}
