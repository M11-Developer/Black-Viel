import * as THREE from 'three';
import { EnemyConfig } from '../../data/enemies';

export type EnemyAnimState = 'idle' | 'patrol' | 'alert' | 'chase' | 'attack' | 'hit' | 'death' | 'search';

export class EnemyCharacter {
  group = new THREE.Group();
  config: EnemyConfig;
  health: number;
  animState: EnemyAnimState = 'idle';
  
  private parts: Map<string, THREE.Object3D> = new Map();
  private meshes: Map<string, THREE.Mesh> = new Map();
  private head!: THREE.Mesh;
  private body!: THREE.Mesh;
  private leftLegGroup!: THREE.Group;
  private rightLegGroup!: THREE.Group;
  private leftArmGroup!: THREE.Group;
  private rightArmGroup!: THREE.Group;
  private hips!: THREE.Group;
  private spine!: THREE.Group;
  private headGroup!: THREE.Group;
  
  private animTime = 0;
  private bobPhase = 0;
  private alertLevel = 0;
  private hitFlashTimer = 0;
  private deathTime = 0;
  private isDead = false;
  private ragdollParts: { mesh: THREE.Mesh; vel: THREE.Vector3; rotVel: THREE.Vector3 }[] = [];
  private breathPhase = 0;
  private gazeTarget: THREE.Vector3 | null = null;
  private lastPos = new THREE.Vector3();
  private velocity = new THREE.Vector3();

  constructor(config: EnemyConfig) {
    this.config = config;
    this.health = config.health;
    this.buildAdvancedMesh();
    this.lastPos.copy(this.group.position);
  }

  private buildAdvancedMesh() {
    const mat = new THREE.MeshStandardMaterial({ 
      color: this.config.color, 
      roughness: 0.75, 
      metalness: 0.2,
      emissive: new THREE.Color(this.config.color).multiplyScalar(0.05),
      emissiveIntensity: 0.1
    });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x111114, roughness: 0.65, metalness: 0.3 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0x8a7a6a, roughness: 0.85 });

    // Hips
    this.hips = new THREE.Group();
    this.hips.position.y = 0.9 * this.config.scale;
    this.group.add(this.hips);
    this.parts.set('hips', this.hips);

    // Spine
    this.spine = new THREE.Group();
    this.spine.position.y = 0.15 * this.config.scale;
    this.hips.add(this.spine);

    // Body
    const bodyGeo = new THREE.BoxGeometry(0.55 * this.config.scale, 0.68 * this.config.scale, 0.32 * this.config.scale);
    this.body = new THREE.Mesh(bodyGeo, mat);
    this.body.position.y = 0.12 * this.config.scale;
    this.body.castShadow = true;
    this.body.receiveShadow = true;
    this.spine.add(this.body);
    this.meshes.set('body', this.body);

    // Vest / armor details
    if (this.config.id === 'heavy') {
      const armorGeo = new THREE.BoxGeometry(0.72 * this.config.scale, 0.52 * this.config.scale, 0.48 * this.config.scale);
      const armor = new THREE.Mesh(armorGeo, darkMat);
      armor.position.y = 0.15 * this.config.scale;
      armor.castShadow = true;
      this.spine.add(armor);
      
      const shoulderPadGeo = new THREE.BoxGeometry(0.18, 0.12, 0.22);
      const leftPad = new THREE.Mesh(shoulderPadGeo, darkMat);
      leftPad.position.set(-0.32 * this.config.scale, 0.35 * this.config.scale, 0);
      this.spine.add(leftPad);
      const rightPad = new THREE.Mesh(shoulderPadGeo, darkMat);
      rightPad.position.set(0.32 * this.config.scale, 0.35 * this.config.scale, 0);
      this.spine.add(rightPad);
    } else if (this.config.id === 'sniper') {
      const ghillie = new THREE.Mesh(
        new THREE.BoxGeometry(0.62 * this.config.scale, 0.82 * this.config.scale, 0.42 * this.config.scale), 
        new THREE.MeshStandardMaterial({ color: 0x3a4a2a, roughness: 0.95, metalness: 0 })
      );
      ghillie.position.y = 0.12 * this.config.scale;
      ghillie.castShadow = true;
      this.spine.add(ghillie);
    } else if (this.config.id === 'hunter') {
      // Light tactical
      const vest = new THREE.Mesh(new THREE.BoxGeometry(0.6 * this.config.scale, 0.5 * this.config.scale, 0.38 * this.config.scale), darkMat);
      vest.position.y = 0.14 * this.config.scale;
      this.spine.add(vest);
    }

    // Head group for tracking
    this.headGroup = new THREE.Group();
    this.headGroup.position.y = 0.55 * this.config.scale;
    this.spine.add(this.headGroup);
    this.parts.set('headGroup', this.headGroup);

    const headGeo = new THREE.SphereGeometry(0.20 * this.config.scale, 14, 14);
    this.head = new THREE.Mesh(headGeo, skinMat);
    this.head.castShadow = true;
    this.headGroup.add(this.head);
    this.meshes.set('head', this.head);

    // Helmet / mask based on type
    if (this.config.id === 'heavy') {
      const helmGeo = new THREE.SphereGeometry(0.26 * this.config.scale, 14, 14, 0, Math.PI*2, 0, Math.PI*0.75);
      const helm = new THREE.Mesh(helmGeo, darkMat);
      helm.position.y = 0.04 * this.config.scale;
      helm.castShadow = true;
      this.headGroup.add(helm);
      
      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.28 * this.config.scale, 0.06, 0.15 * this.config.scale), new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.2, metalness: 0.9 }));
      visor.position.set(0, 0.02, 0.18 * this.config.scale);
      this.headGroup.add(visor);
    } else if (this.config.id === 'security') {
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.21 * this.config.scale, 0.23 * this.config.scale, 0.08 * this.config.scale, 12), darkMat);
      cap.position.y = 0.14 * this.config.scale;
      this.headGroup.add(cap);
    } else if (this.config.id === 'hunter') {
      const mask = new THREE.Mesh(new THREE.BoxGeometry(0.24 * this.config.scale, 0.18 * this.config.scale, 0.22 * this.config.scale), darkMat);
      mask.position.set(0, 0, 0.08 * this.config.scale);
      this.headGroup.add(mask);
      // Goggles glow
      const goggleGlow = new THREE.Mesh(new THREE.BoxGeometry(0.22 * this.config.scale, 0.05, 0.02), new THREE.MeshStandardMaterial({ color: 0xff2200, emissive: 0xff1100, emissiveIntensity: 0.8 }));
      goggleGlow.position.set(0, 0.02, 0.19 * this.config.scale);
      this.headGroup.add(goggleGlow);
    }

    // Arms with joints
    this.leftArmGroup = new THREE.Group();
    this.leftArmGroup.position.set(-0.34 * this.config.scale, 0.3 * this.config.scale, 0);
    this.spine.add(this.leftArmGroup);
    
    this.rightArmGroup = new THREE.Group();
    this.rightArmGroup.position.set(0.34 * this.config.scale, 0.3 * this.config.scale, 0);
    this.spine.add(this.rightArmGroup);

    const upperArmGeo = new THREE.CylinderGeometry(0.08 * this.config.scale, 0.07 * this.config.scale, 0.32 * this.config.scale, 8);
    const lowerArmGeo = new THREE.CylinderGeometry(0.07 * this.config.scale, 0.06 * this.config.scale, 0.28 * this.config.scale, 8);

    const leftUpper = new THREE.Mesh(upperArmGeo, mat);
    leftUpper.position.y = -0.16 * this.config.scale;
    leftUpper.castShadow = true;
    this.leftArmGroup.add(leftUpper);
    
    const leftLowerGroup = new THREE.Group();
    leftLowerGroup.position.y = -0.32 * this.config.scale;
    this.leftArmGroup.add(leftLowerGroup);
    const leftLower = new THREE.Mesh(lowerArmGeo, mat);
    leftLower.position.y = -0.14 * this.config.scale;
    leftLower.castShadow = true;
    leftLowerGroup.add(leftLower);

    const rightUpper = new THREE.Mesh(upperArmGeo, mat);
    rightUpper.position.y = -0.16 * this.config.scale;
    rightUpper.castShadow = true;
    this.rightArmGroup.add(rightUpper);
    
    const rightLowerGroup = new THREE.Group();
    rightLowerGroup.position.y = -0.32 * this.config.scale;
    this.rightArmGroup.add(rightLowerGroup);
    this.parts.set('rightLower', rightLowerGroup);
    const rightLower = new THREE.Mesh(lowerArmGeo, mat);
    rightLower.position.y = -0.14 * this.config.scale;
    rightLower.castShadow = true;
    rightLowerGroup.add(rightLower);

    // Weapon
    const wepGeo = new THREE.BoxGeometry(0.07 * this.config.scale, 0.07 * this.config.scale, 0.68 * this.config.scale);
    const wep = new THREE.Mesh(wepGeo, darkMat);
    wep.position.set(0, -0.14 * this.config.scale, 0.28 * this.config.scale);
    wep.castShadow = true;
    rightLowerGroup.add(wep);
    this.meshes.set('weapon', wep);

    // Legs
    this.leftLegGroup = new THREE.Group();
    this.leftLegGroup.position.set(-0.14 * this.config.scale, -0.05 * this.config.scale, 0);
    this.hips.add(this.leftLegGroup);
    
    this.rightLegGroup = new THREE.Group();
    this.rightLegGroup.position.set(0.14 * this.config.scale, -0.05 * this.config.scale, 0);
    this.hips.add(this.rightLegGroup);

    const thighGeo = new THREE.CylinderGeometry(0.11 * this.config.scale, 0.10 * this.config.scale, 0.44 * this.config.scale, 8);
    const shinGeo = new THREE.CylinderGeometry(0.10 * this.config.scale, 0.09 * this.config.scale, 0.42 * this.config.scale, 8);

    const leftThigh = new THREE.Mesh(thighGeo, mat);
    leftThigh.position.y = -0.22 * this.config.scale;
    leftThigh.castShadow = true;
    this.leftLegGroup.add(leftThigh);
    const leftShinGroup = new THREE.Group();
    leftShinGroup.position.y = -0.44 * this.config.scale;
    this.leftLegGroup.add(leftShinGroup);
    this.parts.set('leftShin', leftShinGroup);
    const leftShin = new THREE.Mesh(shinGeo, mat);
    leftShin.position.y = -0.21 * this.config.scale;
    leftShin.castShadow = true;
    leftShinGroup.add(leftShin);

    const rightThigh = new THREE.Mesh(thighGeo, mat);
    rightThigh.position.y = -0.22 * this.config.scale;
    rightThigh.castShadow = true;
    this.rightLegGroup.add(rightThigh);
    const rightShinGroup = new THREE.Group();
    rightShinGroup.position.y = -0.44 * this.config.scale;
    this.rightLegGroup.add(rightShinGroup);
    this.parts.set('rightShin', rightShinGroup);
    const rightShin = new THREE.Mesh(shinGeo, mat);
    rightShin.position.y = -0.21 * this.config.scale;
    rightShin.castShadow = true;
    rightShinGroup.add(rightShin);

    // Faction indicator with glow
    const indicatorGeo = new THREE.PlaneGeometry(0.22, 0.22);
    const indicatorMat = new THREE.MeshBasicMaterial({ 
      color: this.config.color, 
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9
    });
    const indicator = new THREE.Mesh(indicatorGeo, indicatorMat);
    indicator.position.set(0, 2.15 * this.config.scale, 0);
    indicator.name = 'indicator';
    this.group.add(indicator);

    // Health bar background (hidden until damaged)
    const healthBg = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.08), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.6, side: THREE.DoubleSide }));
    healthBg.position.set(0, 1.95 * this.config.scale, 0);
    healthBg.name = 'healthBg';
    healthBg.visible = false;
    this.group.add(healthBg);

    const healthBar = new THREE.Mesh(new THREE.PlaneGeometry(0.58, 0.06), new THREE.MeshBasicMaterial({ color: 0xff3333, side: THREE.DoubleSide }));
    healthBar.position.set(0, 1.95 * this.config.scale, 0.01);
    healthBar.name = 'healthBar';
    healthBar.visible = false;
    this.group.add(healthBar);

    this.group.traverse((o: any) => {
      if ((o as THREE.Mesh).isMesh) {
        (o as THREE.Mesh).frustumCulled = false;
      }
    });
  }

  takeDamage(amount: number, headshot = false): boolean {
    if (this.isDead) return true;
    
    const dmg = headshot ? amount * 2.4 : amount;
    this.health -= dmg;
    
    // Hit reaction
    this.animState = 'hit';
    this.hitFlashTimer = 0.18;
    this.alertLevel = 1;
    
    // Show health bar
    const healthBg = this.group.getObjectByName('healthBg') as THREE.Mesh;
    const healthBar = this.group.getObjectByName('healthBar') as THREE.Mesh;
    if (healthBg && healthBar) {
      healthBg.visible = true;
      healthBar.visible = true;
      const pct = Math.max(0, this.health / this.config.health);
      (healthBar as any).scale.x = pct;
      // Color based on health
      (healthBar.material as THREE.MeshBasicMaterial).color.setHSL(pct * 0.35, 0.9, 0.55);
    }
    
    // Emissive flash
    if (this.body) {
      (this.body.material as THREE.MeshStandardMaterial).emissive.setHex(headshot ? 0xaa0000 : 0x550000);
      (this.body.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.6;
    }
    
    // Knockback
    this.velocity.add(new THREE.Vector3((Math.random()-0.5)*2, 0.5, (Math.random()-0.5)*2));
    
    if (this.health <= 0) {
      this.die(headshot);
      return true;
    }
    
    // Flinch animation
    this.spine.rotation.x = -0.4;
    this.headGroup.rotation.x = -0.3;
    
    setTimeout(() => {
      if (!this.isDead) {
        (this.body.material as THREE.MeshStandardMaterial).emissive.setHex(0x000000);
        (this.body.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.1;
      }
    }, 120);
    
    return false;
  }

  private die(headshot: boolean) {
    this.isDead = true;
    this.animState = 'death';
    this.deathTime = 0;
    
    // Enable ragdoll physics simulation (simple)
    this.group.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh && obj !== this.group) {
        const mesh = obj as THREE.Mesh;
        this.ragdollParts.push({
          mesh,
          vel: new THREE.Vector3(
            (Math.random()-0.5) * 3,
            Math.random() * 2 + (headshot ? 3 : 1),
            (Math.random()-0.5) * 3
          ),
          rotVel: new THREE.Vector3(
            (Math.random()-0.5) * 8,
            (Math.random()-0.5) * 8,
            (Math.random()-0.5) * 8
          )
        });
      }
    });
    
    console.log(`[Enemy] ${this.config.id} died headshot=${headshot}`);
  }

  setPosition(pos: THREE.Vector3) { 
    this.group.position.copy(pos); 
  }
  
  getPosition() { return this.group.position.clone(); }

  lookAt(target: THREE.Vector3) {
    this.gazeTarget = target.clone();
    const dir = target.clone().sub(this.group.position);
    dir.y = 0;
    if (dir.lengthSq() > 0.01) {
      const angle = Math.atan2(dir.x, dir.z);
      this.group.rotation.y = THREE.MathUtils.lerp(this.group.rotation.y, angle, 0.08);
    }
  }

  setAnimState(state: EnemyAnimState) {
    if (this.isDead) return;
    if (this.animState !== state) {
      this.animState = state;
      this.bobPhase = 0; // reset gait
    }
  }

  update(dt: number) {
    this.animTime += dt;
    
    // Calculate velocity
    const delta = this.group.position.clone().sub(this.lastPos);
    this.velocity.lerp(delta.divideScalar(Math.max(dt, 0.001)), dt * 8);
    this.lastPos.copy(this.group.position);
    const speed = this.velocity.length();

    if (this.isDead) {
      this.deathTime += dt;
      // Ragdoll simulation
      for (const part of this.ragdollParts) {
        part.vel.y -= 9.8 * dt; // gravity
        part.vel.multiplyScalar(0.995); // air drag
        part.mesh.position.add(part.vel.clone().multiplyScalar(dt * 0.12));
        part.mesh.rotation.x += part.rotVel.x * dt;
        part.mesh.rotation.y += part.rotVel.y * dt;
        part.mesh.rotation.z += part.rotVel.z * dt;
        part.rotVel.multiplyScalar(0.98);
        
        // Ground collision for ragdoll parts
        if (part.mesh.getWorldPosition(new THREE.Vector3()).y < 0.05) {
          part.vel.y = Math.abs(part.vel.y) * -0.25;
          part.vel.x *= 0.75;
          part.vel.z *= 0.75;
        }
      }
      
      // Sink into ground slowly
      if (this.deathTime > 3) {
        this.group.position.y = THREE.MathUtils.lerp(this.group.position.y, -0.8, dt * 0.3);
        if (this.deathTime > 8) {
          this.group.visible = false;
        }
      }
      
      // Indicator fade
      const indicator = this.group.getObjectByName('indicator') as THREE.Mesh;
      if (indicator) {
        (indicator.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 1 - this.deathTime * 0.4);
      }
      return;
    }

    // Hit flash timer
    if (this.hitFlashTimer > 0) {
      this.hitFlashTimer -= dt;
      if (this.hitFlashTimer <= 0) {
        this.animState = 'alert';
        (this.body.material as THREE.MeshStandardMaterial).emissive.setHex(0x000000);
      }
    }

    // Breathing
    this.breathPhase += dt * (this.animState === 'chase' ? 2.2 : this.animState === 'alert' ? 1.6 : 0.9);
    const breath = Math.sin(this.breathPhase) * 0.015;
    this.spine.scale.y = 1 + breath;
    
    // Head tracking to gaze target
    if (this.gazeTarget && this.animState !== 'hit') {
      const headDir = this.gazeTarget.clone().sub(this.headGroup.getWorldPosition(new THREE.Vector3()));
      const localDir = headDir.applyQuaternion(this.group.quaternion.clone().invert());
      const targetYaw = Math.atan2(localDir.x, localDir.z);
      const targetPitch = Math.atan2(localDir.y, Math.sqrt(localDir.x*localDir.x + localDir.z*localDir.z));
      this.headGroup.rotation.y = THREE.MathUtils.lerp(this.headGroup.rotation.y, THREE.MathUtils.clamp(targetYaw, -0.9, 0.9), dt * 4);
      this.headGroup.rotation.x = THREE.MathUtils.lerp(this.headGroup.rotation.x, THREE.MathUtils.clamp(targetPitch, -0.5, 0.5), dt * 4);
    } else if (this.animState === 'idle') {
      // Idle look around
      this.headGroup.rotation.y = THREE.MathUtils.lerp(this.headGroup.rotation.y, Math.sin(this.animTime * 0.35) * 0.45, dt * 1.2);
      this.headGroup.rotation.x = THREE.MathUtils.lerp(this.headGroup.rotation.x, Math.sin(this.animTime * 0.5) * 0.12, dt * 1.2);
    }

    // Gait animation based on state and speed
    if (this.animState === 'patrol' || this.animState === 'chase' || this.animState === 'search') {
      const isRunning = this.animState === 'chase' || speed > 3.2;
      const freq = isRunning ? 8.5 : 5.2;
      this.bobPhase += dt * freq;
      
      const bobY = Math.abs(Math.sin(this.bobPhase)) * (isRunning ? 0.06 : 0.035);
      const bobX = Math.sin(this.bobPhase) * (isRunning ? 0.025 : 0.012);
      
      this.hips.position.y = 0.9 * this.config.scale + bobY;
      this.hips.position.x = bobX;
      this.spine.rotation.z = -bobX * 0.12;
      
      // Legs
      const leftPhase = this.bobPhase;
      this.leftLegGroup.rotation.x = Math.sin(leftPhase) * (isRunning ? 0.75 : 0.5);
      const leftShin = this.parts.get('leftShin') as THREE.Group;
      if (leftShin) leftShin.rotation.x = Math.max(0, -Math.sin(leftPhase) * 0.85);
      
      const rightPhase = this.bobPhase + Math.PI;
      this.rightLegGroup.rotation.x = Math.sin(rightPhase) * (isRunning ? 0.75 : 0.5);
      const rightShin = this.parts.get('rightShin') as THREE.Group;
      if (rightShin) rightShin.rotation.x = Math.max(0, -Math.sin(rightPhase) * 0.85);
      
      // Arms opposite
      this.leftArmGroup.rotation.x = Math.sin(leftPhase + Math.PI) * (isRunning ? 0.9 : 0.45);
      this.rightArmGroup.rotation.x = Math.sin(rightPhase + Math.PI) * (isRunning ? 0.9 : 0.45);
    } else if (this.animState === 'idle') {
      // Idle sway
      this.hips.position.y = THREE.MathUtils.lerp(this.hips.position.y, 0.9 * this.config.scale + Math.sin(this.animTime * 0.9) * 0.012, dt * 3);
      this.leftLegGroup.rotation.x = THREE.MathUtils.lerp(this.leftLegGroup.rotation.x, Math.sin(this.animTime * 0.6) * 0.04, dt * 2);
      this.rightLegGroup.rotation.x = THREE.MathUtils.lerp(this.rightLegGroup.rotation.x, Math.sin(this.animTime * 0.6 + Math.PI) * 0.04, dt * 2);
      this.leftArmGroup.rotation.x = THREE.MathUtils.lerp(this.leftArmGroup.rotation.x, Math.sin(this.animTime * 0.7) * 0.06, dt * 2);
      this.rightArmGroup.rotation.x = THREE.MathUtils.lerp(this.rightArmGroup.rotation.x, Math.sin(this.animTime * 0.7 + 0.5) * 0.06, dt * 2);
    } else if (this.animState === 'alert') {
      // Alert - tense, slight crouch
      this.hips.position.y = THREE.MathUtils.lerp(this.hips.position.y, 0.85 * this.config.scale, dt * 5);
      this.spine.rotation.x = THREE.MathUtils.lerp(this.spine.rotation.x, 0.12, dt * 5);
      // Weapon up
      const rightLower = this.parts.get('rightLower') as THREE.Group;
      if (rightLower) rightLower.rotation.x = THREE.MathUtils.lerp(rightLower.rotation.x, -0.6, dt * 6);
    } else if (this.animState === 'attack') {
      // Recoil
      const rightLower = this.parts.get('rightLower') as THREE.Group;
      if (rightLower) {
        rightLower.rotation.x = Math.sin(this.animTime * 18) * 0.25 - 0.4;
      }
      this.spine.rotation.x = THREE.MathUtils.lerp(this.spine.rotation.x, -0.08, dt * 8);
    } else if (this.animState === 'hit') {
      // Flinch
      this.spine.rotation.x = THREE.MathUtils.lerp(this.spine.rotation.x, -0.35, dt * 12);
      this.hips.position.y = THREE.MathUtils.lerp(this.hips.position.y, 0.82 * this.config.scale, dt * 12);
    }

    // Indicator bob for alive enemies
    const indicator = this.group.getObjectByName('indicator') as THREE.Mesh;
    if (indicator) {
      indicator.position.y = 2.15 * this.config.scale + Math.sin(this.animTime * 2.2) * 0.06;
      indicator.lookAt(indicator.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0,0,1)));
      // Pulse when alert
      if (this.animState === 'alert' || this.animState === 'chase') {
        (indicator.material as THREE.MeshBasicMaterial).opacity = 0.7 + Math.sin(this.animTime * 8) * 0.3;
      }
    }

    // Health bar always face camera
    const healthBg = this.group.getObjectByName('healthBg') as THREE.Mesh;
    const healthBar = this.group.getObjectByName('healthBar') as THREE.Mesh;
    if (healthBg && healthBar && healthBg.visible) {
      // Would need camera ref to billboard, but simple
      healthBg.lookAt(healthBg.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0,0,1)));
      healthBar.lookAt(healthBar.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0,0,1)));
    }
  }

  dispose(scene: THREE.Scene) {
    scene.remove(this.group);
    this.ragdollParts = [];
  }

  isAlive() { return !this.isDead; }
}
