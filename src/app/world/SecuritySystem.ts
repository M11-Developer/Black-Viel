import * as THREE from 'three';

export interface SecurityCamera {
  id: string;
  position: THREE.Vector3;
  rotation: THREE.Euler;
  fov: number;
  range: number;
  isActive: boolean;
  isAlerted: boolean;
  mesh: THREE.Group;
  light?: THREE.SpotLight;
}

export interface SecurityTerminal {
  id: string;
  position: THREE.Vector3;
  controls: string[]; // camera ids
  isHacked: boolean;
  mesh: THREE.Mesh;
}

export class SecuritySystem {
  private cameras: SecurityCamera[] = [];
  private terminals: SecurityTerminal[] = [];
  private scene: THREE.Scene;
  private alarmLevel: 'normal' | 'suspicious' | 'alert' | 'lockdown' | 'reinforcements' = 'normal';
  private alarmTimer = 0;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
  }

  addCamera(pos: THREE.Vector3, rot: THREE.Euler, id: string): SecurityCamera {
    const group = new THREE.Group();
    
    // Camera body
    const bodyGeo = new THREE.BoxGeometry(0.3, 0.2, 0.4);
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1e, roughness: 0.6, metalness: 0.4 });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    group.add(body);

    // Lens
    const lensGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.15, 12);
    lensGeo.rotateX(Math.PI/2);
    const lensMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.2, metalness: 0.8 });
    const lens = new THREE.Mesh(lensGeo, lensMat);
    lens.position.z = 0.25;
    group.add(lens);

    // LED
    const ledGeo = new THREE.SphereGeometry(0.03, 6, 6);
    const ledMat = new THREE.MeshStandardMaterial({ color: 0xff0000, emissive: 0xff0000, emissiveIntensity: 0.8 });
    const led = new THREE.Mesh(ledGeo, ledMat);
    led.position.set(0.12, 0.08, 0.15);
    led.name = 'led';
    group.add(led);

    group.position.copy(pos);
    group.rotation.copy(rot);
    this.scene.add(group);

    // Spotlight for FOV visualization (subtle)
    const light = new THREE.SpotLight(0xff4444, 0.5, 15, Math.PI/6, 0.5, 1);
    light.position.copy(pos);
    light.target.position.copy(pos.clone().add(new THREE.Vector3(0, 0, -5).applyEuler(rot)));
    this.scene.add(light);
    this.scene.add(light.target);

    const camera: SecurityCamera = {
      id,
      position: pos.clone(),
      rotation: rot.clone(),
      fov: 60,
      range: 18,
      isActive: true,
      isAlerted: false,
      mesh: group,
      light
    };

    this.cameras.push(camera);
    return camera;
  }

  addTerminal(pos: THREE.Vector3, controls: string[], id: string): SecurityTerminal {
    const geo = new THREE.BoxGeometry(0.6, 1.2, 0.4);
    const mat = new THREE.MeshStandardMaterial({ 
      color: 0x2a3a4a, 
      emissive: 0x00aaff, 
      emissiveIntensity: 0.2,
      roughness: 0.6 
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(pos);
    mesh.castShadow = true;
    this.scene.add(mesh);

    // Screen
    const screenGeo = new THREE.PlaneGeometry(0.5, 0.35);
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 160;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#001122';
    ctx.fillRect(0, 0, 256, 160);
    ctx.fillStyle = '#00ff88';
    ctx.font = '12px monospace';
    ctx.fillText('HELIX SECURE', 10, 20);
    ctx.fillStyle = '#ffaa00';
    ctx.fillText('CAMERAS: ' + controls.length, 10, 40);
    ctx.fillStyle = '#ffffff';
    ctx.font = '10px monospace';
    ctx.fillText('[F] HACK', 10, 140);
    const tex = new THREE.CanvasTexture(canvas);
    const screenMat = new THREE.MeshBasicMaterial({ map: tex });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0, 0.15, 0.21);
    mesh.add(screen);

    const terminal: SecurityTerminal = {
      id,
      position: pos.clone(),
      controls,
      isHacked: false,
      mesh
    };

    this.terminals.push(terminal);
    return terminal;
  }

  update(dt: number, playerPos: THREE.Vector3, playerCrouching: boolean) {
    // Update alarm decay
    if (this.alarmLevel !== 'normal') {
      this.alarmTimer -= dt;
      if (this.alarmTimer <= 0) {
        this.setAlarmLevel('normal');
      }
    }

    // Update cameras
    for (const cam of this.cameras) {
      if (!cam.isActive) continue;

      // Rotate slowly (patrol)
      cam.mesh.rotation.y += Math.sin(Date.now() * 0.0003 + cam.position.x) * dt * 0.3;
      
      // Check if player in FOV
      const toPlayer = playerPos.clone().sub(cam.position);
      const dist = toPlayer.length();
      
      if (dist < cam.range) {
        const forward = new THREE.Vector3(0, 0, -1).applyEuler(cam.mesh.rotation);
        const angle = forward.angleTo(toPlayer.clone().normalize());
        
        if (angle < (cam.fov * Math.PI / 180) * 0.5) {
          // Raycast simplified - check distance only for now
          // In full implementation, would raycast against colliders
          const visibility = playerCrouching ? 0.6 : 1.0;
          if (dist * visibility < cam.range * 0.8) {
            cam.isAlerted = true;
            const led = cam.mesh.getObjectByName('led') as THREE.Mesh;
            if (led) {
              (led.material as THREE.MeshStandardMaterial).color.setHex(0xff0000);
              (led.material as THREE.MeshStandardMaterial).emissive.setHex(0xff0000);
            }
            if (cam.light) {
              cam.light.color.setHex(0xff0000);
              cam.light.intensity = 1.2;
            }
            this.triggerAlarm('alert');
          }
        }
      } else {
        // Reset if player far
        if (cam.isAlerted && dist > cam.range * 1.5) {
          cam.isAlerted = false;
          const led = cam.mesh.getObjectByName('led') as THREE.Mesh;
          if (led) {
            (led.material as THREE.MeshStandardMaterial).color.setHex(0x00ff00);
            (led.material as THREE.MeshStandardMaterial).emissive.setHex(0x00ff00);
          }
          if (cam.light) {
            cam.light.color.setHex(0x44ff44);
            cam.light.intensity = 0.3;
          }
        }
      }
    }
  }

  hackTerminal(id: string): boolean {
    const terminal = this.terminals.find(t => t.id === id);
    if (!terminal || terminal.isHacked) return false;

    terminal.isHacked = true;
    (terminal.mesh.material as THREE.MeshStandardMaterial).emissive.setHex(0x4dff9a);
    (terminal.mesh.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.5;

    // Disable controlled cameras
    for (const camId of terminal.controls) {
      const cam = this.cameras.find(c => c.id === camId);
      if (cam) {
        cam.isActive = false;
        cam.isAlerted = false;
        const led = cam.mesh.getObjectByName('led') as THREE.Mesh;
        if (led) {
          (led.material as THREE.MeshStandardMaterial).color.setHex(0x333333);
          (led.material as THREE.MeshStandardMaterial).emissive.setHex(0x000000);
        }
        if (cam.light) cam.light.intensity = 0;
        // Visual disabled
        cam.mesh.traverse((obj: any) => {
          if (obj.isMesh) obj.material.transparent = true, obj.material.opacity = 0.3;
        });
      }
    }

    return true;
  }

  triggerAlarm(level: typeof this.alarmLevel) {
    const levels = ['normal', 'suspicious', 'alert', 'lockdown', 'reinforcements'];
    const currentIdx = levels.indexOf(this.alarmLevel);
    const newIdx = levels.indexOf(level);
    
    if (newIdx > currentIdx) {
      this.alarmLevel = level;
      this.alarmTimer = level === 'alert' ? 20 : level === 'lockdown' ? 40 : level === 'reinforcements' ? 60 : 15;
      console.log(`[Security] Alarm level: ${level}`);
      return true;
    }
    return false;
  }

  setAlarmLevel(level: typeof this.alarmLevel) {
    this.alarmLevel = level;
    if (level === 'normal') this.alarmTimer = 0;
  }

  getAlarmLevel() { return this.alarmLevel; }
  getCameras() { return this.cameras; }
  getTerminals() { return this.terminals; }

  getNearestTerminal(pos: THREE.Vector3, maxDist = 4): SecurityTerminal | null {
    let nearest: SecurityTerminal | null = null;
    let minDist = maxDist;
    for (const t of this.terminals) {
      const dist = t.position.distanceTo(pos);
      if (dist < minDist && !t.isHacked) {
        minDist = dist;
        nearest = t;
      }
    }
    return nearest;
  }
}
