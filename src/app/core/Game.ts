import * as THREE from 'three';
import { Renderer } from '../engine/Renderer';
import { InputManager } from '../input/InputManager';
import { PlayerController } from '../player/PlayerController';
import { CameraSystem } from '../game/CameraSystem';
import { World } from '../world/World';
import { PlayerCharacter } from '../characters/PlayerCharacter';
import { EnemyCharacter } from '../characters/EnemyCharacter';
import { WeaponSystem } from '../combat/WeaponSystem';
import { AIController, AIDirector } from '../ai/AIController';
import { ENEMIES } from '../../data/enemies';
import { UIManager } from '../ui/UIManager';
import { TouchControls } from '../mobile/TouchControls';
import { missionManager } from '../missions/MissionManager';
import { saveManager } from '../save/SaveManager';
import { settingsManager } from '../settings/SettingsManager';
import { audioManager } from '../audio/AudioManager';
import { assetLoader } from './AssetLoader';
import { localization } from '../localization/LocalizationManager';

export class Game {
  private renderer: Renderer;
  private input: InputManager;
  private playerController: PlayerController;
  private cameraSystem: CameraSystem;
  private world: World;
  private playerCharacter: PlayerCharacter;
  private weaponSystem: WeaponSystem;
  private ui: UIManager;
  private touchControls: TouchControls;
  private aiDirector: AIDirector;
  private enemies: AIController[] = [];
  private clock = new THREE.Clock();
  private isRunning = false;
  private isGameStarted = false;
  private interactables: { pos: THREE.Vector3; type: string; id: string; mesh: THREE.Mesh }[] = [];
  private loot: { pos: THREE.Vector3; type: string; mesh: THREE.Mesh }[] = [];
  private raycaster = new THREE.Raycaster();
  private lastShootState = false;
  private stealthState: 'HIDDEN' | 'SUSPICIOUS' | 'DETECTED' | 'COMBAT' = 'HIDDEN';
  private playerPosHistory: THREE.Vector3[] = [];

  constructor(private canvas: HTMLCanvasElement) {
    this.renderer = new Renderer(canvas);
    this.input = new InputManager(canvas);
    this.playerController = new PlayerController(this.input);
    this.world = new World(this.renderer.scene);
    this.playerCharacter = new PlayerCharacter();
    this.weaponSystem = new WeaponSystem();
    this.cameraSystem = new CameraSystem(this.renderer.camera, this.world.colliders);
    this.ui = new UIManager();
    this.touchControls = new TouchControls(this.input);
    this.aiDirector = new AIDirector();

    this.setupEventListeners();
    this.initLoading();
  }

  private setupEventListeners() {
    window.addEventListener('bv:startGame', (e: any) => {
      const isNew = e.detail?.isNew;
      if (isNew) saveManager.deleteSave();
      this.startGame();
    });

    window.addEventListener('bv:requestInventory', () => {
      window.dispatchEvent(new CustomEvent('bv:inventoryData', {
        detail: { weapons: this.weaponSystem.weapons, currentIndex: this.weaponSystem.currentIndex }
      }));
    });

    window.addEventListener('bv:equipWeapon', (e: any) => {
      this.weaponSystem.setWeaponIndex(e.detail.index);
      this.updateWeaponMesh();
    });

    window.addEventListener('keydown', (e) => {
      if (e.code === 'KeyF' && this.isGameStarted) this.tryInteract();
      if (e.code === 'KeyR' && this.isGameStarted) this.weaponSystem.startReload();
    });

    // Fullscreen button
    document.addEventListener('dblclick', () => {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
    });
  }

  private async initLoading() {
    const loadingBar = document.getElementById('loading-bar') as HTMLElement;
    const loadingStatus = document.getElementById('loading-status') as HTMLElement;
    const loadingScreen = document.getElementById('loading-screen') as HTMLElement;

    const tasks = [
      { id: 'world', label: 'BUILDING VEYRA DISTRICTS', duration: 600 },
      { id: 'player', label: 'INITIALIZING OPERATIVE', duration: 300 },
      { id: 'weapons', label: 'LOADING ARSENAL', duration: 400 },
      { id: 'ai', label: 'SIMULATING HOSTILES', duration: 500 },
      { id: 'audio', label: 'CALIBRATING AUDIO', duration: 200 },
      { id: 'final', label: 'ENTERING BLACKOUT ZONE', duration: 300 },
    ];

    let progress = 0;
    for (const task of tasks) {
      assetLoader.register(task.id, task.label);
      loadingStatus.textContent = task.label;
      // Simulate async work
      await new Promise<void>(resolve => {
        let p = 0;
        const interval = setInterval(() => {
          p += 0.05;
          if (p >= 1) {
            clearInterval(interval);
            assetLoader.complete(task.id);
            resolve();
          } else {
            assetLoader.update(task.id, p);
          }
          const totalProg = assetLoader.getProgress();
          progress = totalProg;
          if (loadingBar) loadingBar.style.width = `${totalProg * 100}%`;
        }, task.duration / 20);
      });
    }

    // Build actual world
    await this.world.buildDistrict();
    this.playerController.setColliders(this.world.colliders);
    this.cameraSystem.setColliders(this.world.colliders);

    // Setup player
    this.renderer.scene.add(this.playerCharacter.group);
    this.weaponSystem.addWeapon('m9_tactical');
    this.weaponSystem.addWeapon('vec_9');
    this.updateWeaponMesh();

    // Setup enemies
    this.spawnEnemies();

    // Setup interactables and loot
    this.setupInteractables();

    // Hide loading
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      setTimeout(() => loadingScreen.style.display = 'none', 600);
      this.ui.showMenu();
      audioManager.setMusicState('exploration');
    }, 500);
  }

  private updateWeaponMesh() {
    const socket = this.playerCharacter.getWeaponSocket();
    // Clear old
    while (socket.children.length) socket.remove(socket.children[0]);
    const current = this.weaponSystem.getCurrent();
    if (current) {
      // Position weapon mesh for third person view
      current.mesh.position.set(0, 0, 0);
      current.mesh.rotation.set(0, 0, 0);
      // Adjust for third person: pistol near hand
      if (current.config.category === 'pistol') {
        current.mesh.position.set(0.05, -0.05, 0.15);
        current.mesh.rotation.y = -0.1;
      } else if (current.config.category === 'smg' || current.config.category === 'rifle') {
        current.mesh.position.set(0.08, -0.08, 0.25);
        current.mesh.rotation.y = -0.05;
      } else if (current.config.category === 'sniper') {
        current.mesh.position.set(0.1, -0.1, 0.4);
      } else if (current.config.category === 'shotgun') {
        current.mesh.position.set(0.08, -0.08, 0.3);
      }
      socket.add(current.mesh);
    }
  }

  private spawnEnemies() {
    const positions = [
      { x: -8, z: -55, type: 'security' as const },
      { x: 12, z: -50, type: 'scout' as const },
      { x: -20, z: -20, type: 'security' as const },
      { x: 30, z: -30, type: 'heavy' as const },
      { x: 50, z: -10, type: 'security' as const },
      { x: 60, z: -25, type: 'hunter' as const },
      { x: -35, z: 35, type: 'scout' as const },
      { x: 10, z: 50, type: 'commander' as const },
      { x: 0, z: 70, type: 'sniper' as const },
    ];

    for (const p of positions) {
      const cfg = ENEMIES.find(e => e.id === p.type)!;
      const char = new EnemyCharacter(cfg);
      const ai = new AIController(char, cfg, new THREE.Vector3(p.x, 0, p.z));
      this.enemies.push(ai);
      this.aiDirector.addEnemy(ai);
      this.renderer.scene.add(char.group);
    }
  }

  private setupInteractables() {
    const createInteractable = (x: number, z: number, type: string, id: string) => {
      const geo = new THREE.BoxGeometry(0.8, 1.2, 0.6);
      const mat = new THREE.MeshStandardMaterial({ 
        color: type === 'terminal' ? 0x00e5ff : type === 'door' ? 0x8a6a3a : 0x4dff9a,
        emissive: type === 'terminal' ? 0x00aaff : 0x000000,
        emissiveIntensity: type === 'terminal' ? 0.3 : 0
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, 0.6, z);
      mesh.castShadow = true;
      this.renderer.scene.add(mesh);
      this.interactables.push({ pos: new THREE.Vector3(x, 0, z), type, id, mesh });
    };

    createInteractable(0, -80, 'checkpoint', 'reach_checkpoint');
    createInteractable(55, -5, 'terminal', 'restore_power');
    createInteractable(51, -5, 'terminal', 'restore_power');
    createInteractable(55, -2, 'breaker', 'restore_power');
    createInteractable(-35, 20, 'door', 'infiltrate_building');
    createInteractable(-33, 22, 'loot', 'recover_logs');

    // Loot
    const createLoot = (x: number, z: number, type: string) => {
      const geo = new THREE.BoxGeometry(0.5, 0.3, 0.4);
      const mat = new THREE.MeshStandardMaterial({ color: 0xffaa00, emissive: 0xffaa00, emissiveIntensity: 0.2 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, 0.15, z);
      this.renderer.scene.add(mesh);
      this.loot.push({ pos: new THREE.Vector3(x, 0, z), type, mesh });
    };
    createLoot(-10, -60, 'intel');
    createLoot(5, -40, 'intel');
    createLoot(-25, -15, 'intel');
    createLoot(40, -15, 'ammo');
    createLoot(-45, -75, 'cache');
  }

  private startGame() {
    if (this.isGameStarted) return;
    this.isGameStarted = true;
    this.isRunning = true;
    this.touchControls.setVisible(true);
    this.clock.start();
    this.animate();
    console.log('[Game] Started');
  }

  private tryInteract() {
    const playerPos = this.playerController.getPosition();
    for (const inter of this.interactables) {
      const dist = playerPos.distanceTo(inter.pos);
      if (dist < 3) {
        console.log(`[Interact] ${inter.type} ${inter.id}`);
        audioManager.playProceduralSound('terminal');
        missionManager.updateObjective(inter.id);
        this.ui.showNotification(`INTERACTED: ${inter.type.toUpperCase()}`, 2000);

        // Special handling
        if (inter.type === 'terminal' || inter.type === 'breaker') {
          inter.mesh.material = new THREE.MeshStandardMaterial({ color: 0x4dff9a, emissive: 0x4dff9a, emissiveIntensity: 0.5 });
          setTimeout(() => {
            this.renderer.scene.remove(inter.mesh);
            this.interactables = this.interactables.filter(i => i !== inter);
          }, 500);
        }

        if (inter.type === 'loot' || inter.id === 'recover_logs') {
          this.weaponSystem.addWeapon('ar_41');
          this.updateWeaponMesh();
          saveManager.save({ progression: { currency: 100 } } as any);
        }

        break;
      }
    }

    // Loot
    for (const l of this.loot) {
      const dist = playerPos.distanceTo(l.pos);
      if (dist < 2) {
        this.renderer.scene.remove(l.mesh);
        this.loot = this.loot.filter(x => x !== l);
        if (l.type === 'ammo') {
          this.weaponSystem.addAmmo('rifle', 30);
          this.ui.showNotification('AMMO +30', 2000);
        } else if (l.type === 'intel') {
          missionManager.updateObjective('collect_intel');
          this.ui.showNotification('INTEL COLLECTED', 2000);
        } else if (l.type === 'cache') {
          this.weaponSystem.addWeapon('sr_phantom');
          this.updateWeaponMesh();
          this.ui.showNotification('HIDDEN CACHE: PHANTOM SR UNLOCKED', 3000);
        }
        audioManager.playProceduralSound('ui_click');
        break;
      }
    }
  }

  private checkInteractionPrompt(): string | null {
    const playerPos = this.playerController.getPosition();
    for (const inter of this.interactables) {
      if (playerPos.distanceTo(inter.pos) < 3) {
        return inter.type.toUpperCase();
      }
    }
    for (const l of this.loot) {
      if (playerPos.distanceTo(l.pos) < 2) {
        return `COLLECT ${l.type.toUpperCase()}`;
      }
    }
    return null;
  }

  private handleShooting(dt: number) {
    const isShooting = this.input.state.fire && this.weaponSystem.canFire();
    if (isShooting) {
      const origin = this.playerController.getPosition().clone();
      origin.y += 1.4;
      const dir = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.playerController.yaw);
      // Add spread
      const spread = this.weaponSystem.getSpread();
      dir.x += (Math.random() - 0.5) * spread;
      dir.y += (Math.random() - 0.5) * spread;
      dir.z += (Math.random() - 0.5) * spread;
      dir.normalize();

      const result = this.weaponSystem.fire(origin, dir);
      if (result) {
        this.cameraSystem.addShake(result.damage * 0.005, 6);
        // Raycast for hit
        this.raycaster.set(origin, dir);
        const enemyMeshes = this.enemies.map(e => e.character.group);
        // Check enemy hits via distance
        for (const ai of this.enemies) {
          const enemyPos = ai.character.getPosition();
          const toEnemy = enemyPos.clone().sub(origin);
          const proj = toEnemy.dot(dir);
          if (proj > 0 && proj < this.weaponSystem.getCurrent()!.config.range) {
            const closest = origin.clone().add(dir.clone().multiplyScalar(proj));
            const distToRay = closest.distanceTo(enemyPos.clone().add(new THREE.Vector3(0, 1, 0)));
            if (distToRay < 0.8) {
              const headshot = Math.abs(closest.y - (enemyPos.y + 1.55)) < 0.3;
              const dead = ai.character.takeDamage(result.damage, headshot);
              if (dead) {
                this.renderer.scene.remove(ai.character.group);
                this.aiDirector.removeEnemy(ai);
                this.enemies = this.enemies.filter(e => e !== ai);
                missionManager.updateObjective('defend_position');
                this.ui.showNotification(headshot ? 'HEADSHOT' : 'ENEMY DOWN', 1500);
                saveManager.save({ progression: { xp: 50 } } as any);
              }
              break;
            }
          }
        }

        // Bullet impact VFX (simple)
        const impactPos = origin.clone().add(dir.clone().multiplyScalar(20));
        const impactGeo = new THREE.SphereGeometry(0.08, 6, 6);
        const impactMat = new THREE.MeshBasicMaterial({ color: 0xffaa44, transparent: true, opacity: 0.8 });
        const impact = new THREE.Mesh(impactGeo, impactMat);
        impact.position.copy(impactPos);
        this.renderer.scene.add(impact);
        setTimeout(() => this.renderer.scene.remove(impact), 120);
      }
    }

    if (this.input.state.reload) {
      this.weaponSystem.startReload();
    }

    if (this.input.state.switchWeapon !== 0) {
      this.weaponSystem.switchWeapon(this.input.state.switchWeapon);
      this.updateWeaponMesh();
    }

    this.lastShootState = isShooting;
  }

  private updateStealthState() {
    const combatCount = this.aiDirector.getCombatCount();
    const maxDetection = Math.max(0, ...this.enemies.map(e => e.getDetectionLevel()), 0);

    let newState: typeof this.stealthState = 'HIDDEN';
    if (combatCount > 0) newState = 'COMBAT';
    else if (maxDetection > 0.7) newState = 'DETECTED';
    else if (maxDetection > 0.3) newState = 'SUSPICIOUS';
    else newState = 'HIDDEN';

    if (newState !== this.stealthState) {
      this.stealthState = newState;
      if (newState === 'COMBAT') audioManager.setMusicState('combat');
      else if (newState === 'DETECTED') audioManager.setMusicState('tension');
      else if (newState === 'SUSPICIOUS') audioManager.setMusicState('stealth');
      else audioManager.setMusicState('exploration');
    }
  }

  private updateMissions() {
    const playerPos = this.playerController.getPosition();
    const obj = missionManager.getObjectiveByPos({ x: playerPos.x, y: playerPos.y, z: playerPos.z }, 5);
    if (obj) {
      missionManager.updateObjective(obj.id);
      this.ui.showNotification(`OBJECTIVE: ${obj.title}`, 2500);
    }
  }

  private animate = () => {
    if (!this.isRunning) return;
    requestAnimationFrame(this.animate);

    const dt = Math.min(this.clock.getDelta(), 0.033);
    const fpsLimit = settingsManager.get('fpsLimit');
    if (fpsLimit > 0) {
      // Simple fps limiting via timeout would be better but we do check
    }

    this.renderer.beginFrame();

    if (this.isGameStarted) {
      // Player
      this.playerController.update(dt, this.renderer.camera);
      this.playerCharacter.group.position.copy(this.playerController.position);
      this.playerCharacter.group.rotation.y = this.playerController.yaw;
      this.playerCharacter.update(dt, this.playerController.moveState, this.playerController.yaw);

      // Camera
      this.cameraSystem.update(dt, this.playerController.getCameraTarget(), this.playerController.yaw, this.playerController.pitch, this.playerController.isAiming, this.playerController.isCrouching);

      // Weapons
      this.weaponSystem.update(dt);
      this.handleShooting(dt);

      // AI
      const playerPos = this.playerController.getPosition();
      const playerState = {
        isCrouching: this.playerController.isCrouching,
        isSprinting: this.playerController.isSprinting,
        isShooting: this.lastShootState,
      };
      for (const ai of this.enemies) {
        ai.update(dt, playerPos, this.playerController.velocity, playerState, this.world.colliders, this.enemies);
        // Enemy shooting
        if (ai.canShoot()) {
          ai.onShoot();
          const dist = ai.position.distanceTo(playerPos);
          if (dist < ai.config.detectionRange && Math.random() < 0.6) {
            // Hit chance based on distance
            const hitChance = Math.max(0.1, 1 - dist / 40);
            if (Math.random() < hitChance * 0.3) {
              const dead = this.playerController.takeDamage(ai.config.damage * 0.15);
              this.cameraSystem.addShake(0.3, 8);
              if (dead) {
                this.ui.showNotification('DOWNED — RESTARTING AT CHECKPOINT', 3000);
                setTimeout(() => {
                  this.playerController.position.set(0, 0.1, 0);
                  this.playerController.stats.health = 100;
                }, 2000);
              }
            }
          }
        }
      }
      this.aiDirector.update(dt, playerPos);

      // Missions
      this.updateMissions();

      // Stealth
      this.updateStealthState();

      // HUD
      const currentW = this.weaponSystem.getCurrent();
      this.ui.updateHUD({
        health: this.playerController.stats.health,
        armor: this.playerController.stats.armor,
        ammoCurrent: currentW?.ammoInMag ?? 0,
        ammoReserve: currentW?.reserve ?? 0,
        weaponName: currentW?.config.name ?? 'UNARMED',
        stealth: this.stealthState,
        fps: this.renderer.getStats().fps,
        frameTime: this.renderer.getStats().frameTime,
        quality: settingsManager.get('quality').toUpperCase() + (settingsManager.get('quality') === 'auto' ? `:${['LOW','MED','HIGH','ULTRA'][this.renderer.getAdaptiveLevel()]}` : ''),
        interact: this.checkInteractionPrompt(),
        isAiming: this.playerController.isAiming,
      });

      // Save player pos for map
      window.dispatchEvent(new CustomEvent('bv:playerPos', { detail: { x: playerPos.x, z: playerPos.z } }));
      this.playerPosHistory.push(playerPos.clone());
      if (this.playerPosHistory.length > 100) this.playerPosHistory.shift();

      // Audio listener
      audioManager.setListenerPosition(playerPos, new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.playerController.yaw));
    }

    this.renderer.render();
    this.renderer.endFrame(dt);
    this.input.resetTransient();
  };

  dispose() {
    this.isRunning = false;
    this.renderer.dispose();
    this.world.dispose();
  }
}
