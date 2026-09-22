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
import { textureManager } from './TextureManager';
import { VFXSystem } from '../vfx/VFXSystem';
import { SecuritySystem } from '../world/SecuritySystem';
import { achievementManager } from '../progression/AchievementManager';
import { dialogueSystem } from '../story/DialogueSystem';

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
  private vfxSystem: VFXSystem;
  private securitySystem: SecuritySystem;
  private enemies: AIController[] = [];
  private clock = new THREE.Clock();
  private isRunning = false;
  private isGameStarted = false;
  private interactables: { pos: THREE.Vector3; type: string; id: string; mesh: THREE.Mesh; data?: any }[] = [];
  private loot: { pos: THREE.Vector3; type: string; mesh: THREE.Mesh }[] = [];
  private raycaster = new THREE.Raycaster();
  private lastShootState = false;
  private stealthState: 'HIDDEN' | 'SUSPICIOUS' | 'DETECTED' | 'COMBAT' = 'HIDDEN';
  private playerPosHistory: THREE.Vector3[] = [];
  private timePlayed = 0;
  private photoMode = false;

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
    this.vfxSystem = new VFXSystem(this.renderer.scene);
    this.securitySystem = new SecuritySystem(this.renderer.scene);

    this.setupEventListeners();
    this.initLoading();
  }

  private setupEventListeners() {
    window.addEventListener('bv:startGame', (e: any) => {
      const isNew = e.detail?.isNew;
      if (isNew) {
        saveManager.deleteSave();
        localStorage.removeItem('bv_achievements');
        localStorage.removeItem('bv_stats');
        localStorage.removeItem('bv_dialogue_flags');
      }
      this.startGame();
    });

    window.addEventListener('bv:requestInventory', () => {
      window.dispatchEvent(new CustomEvent('bv:inventoryData', {
        detail: { 
          weapons: this.weaponSystem.weapons, 
          currentIndex: this.weaponSystem.currentIndex,
          achievements: achievementManager.getAchievements(),
          stats: achievementManager.getStats()
        }
      }));
    });

    window.addEventListener('bv:equipWeapon', (e: any) => {
      this.weaponSystem.setWeaponIndex(e.detail.index);
      this.updateWeaponMesh();
    });

    window.addEventListener('keydown', (e) => {
      if (!this.isGameStarted) return;
      if (e.code === 'KeyF') this.tryInteract();
      if (e.code === 'KeyR') this.weaponSystem.startReload();
      if (e.code === 'KeyP') this.togglePhotoMode();
      if (e.code === 'KeyT' && e.ctrlKey) {
        e.preventDefault();
        dialogueSystem.startDialogue('intro_kael');
      }
    });

    document.addEventListener('dblclick', () => {
      if (!document.fullscreenElement && !this.ui.isInMenu()) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
    });

    // Achievement notifications
    window.addEventListener('bv:achievement', (e: any) => {
      const ach = e.detail;
      this.ui.showNotification(`🏆 ${ach.title}: ${ach.description} (+${ach.xpReward} XP)`, 4000);
      audioManager.playProceduralSound('ui_click');
    });

    // Dialogue UI hook
    dialogueSystem.onLine((line, choices) => {
      if (line) {
        window.dispatchEvent(new CustomEvent('bv:dialogueLine', { detail: { line, choices } }));
      } else {
        window.dispatchEvent(new CustomEvent('bv:dialogueEnd'));
      }
    });

    // Photo mode
    window.addEventListener('bv:togglePhoto', () => this.togglePhotoMode());
  }

  private async initLoading() {
    const loadingBar = document.getElementById('loading-bar') as HTMLElement;
    const loadingStatus = document.getElementById('loading-status') as HTMLElement;
    const loadingScreen = document.getElementById('loading-screen') as HTMLElement;
    const loadingTip = document.getElementById('loading-tip') as HTMLElement;

    const tips = [
      "Veyra went dark three years ago. Power, comms, transport — gone in 17 minutes. Official story: infrastructure failure. The evidence says otherwise.",
      "Helix Corp controlled 73% of Veyra infrastructure before the Blackout. Now they control the ruins.",
      "The Ashen network survives in shadows. They remember what the city forgot.",
      "Sound travels. Your footsteps can betray you. Move slow, stay hidden.",
      "Verticality is survival. Rooftops, maintenance shafts, underground — the city has layers.",
      "Project BLACK VEIL wasn't a failure. It was a test. 17 minutes. Too clean.",
      "Your sister Mara knew. Now she's missing. Level 23, Helix Tower, Server Room Delta.",
      "Security cameras have blind spots. Find the terminals. Hack the grid.",
      "Safehouse at -58, 15 — Ashen turned an apartment into a hub. Weapons, map, missions.",
      "Headshots do 2.2x damage. But sometimes silence is deadlier than bullets."
    ];

    const tasks = [
      { id: 'textures', label: 'LOADING TEXTURES — concrete, metal, fabric PBR + 7 character skins', duration: 600 },
      { id: 'world', label: 'BUILDING VEYRA DISTRICTS — 7 zones, safehouse, security grid', duration: 700 },
      { id: 'player', label: 'INITIALIZING OPERATIVE — tactical rig, parkour, slide, vault', duration: 350 },
      { id: 'weapons', label: 'LOADING ARSENAL — 6 weapons, attachments, VFX', duration: 450 },
      { id: 'ai', label: 'SIMULATING HOSTILES — 6 archetypes, squad AI, director', duration: 600 },
      { id: 'security', label: 'ARMING SECURITY — cameras, terminals, alarm escalation', duration: 300 },
      { id: 'vfx', label: 'CALIBRATING VFX — bullet holes, sparks, dust, decals', duration: 250 },
      { id: 'audio', label: 'CALIBRATING AUDIO — procedural SFX, adaptive music, radio', duration: 250 },
      { id: 'achievements', label: 'LOADING PROGRESSION — achievements, stats, dialogue', duration: 200 },
      { id: 'mobile', label: 'OPTIMIZING MOBILE — touch, gyro, haptics, PWA one-click', duration: 300 },
      { id: 'final', label: 'ENTERING BLACKOUT ZONE — Sector 7 awaits', duration: 350 },
    ];

    let tipIndex = 0;
    const tipInterval = setInterval(() => {
      tipIndex = (tipIndex + 1) % tips.length;
      if (loadingTip) {
        loadingTip.style.opacity = '0';
        setTimeout(() => {
          loadingTip.textContent = tips[tipIndex];
          loadingTip.style.opacity = '0.7';
        }, 300);
      }
    }, 3000);

    for (const task of tasks) {
      assetLoader.register(task.id, task.label);
      if (loadingStatus) loadingStatus.textContent = task.label;
      await new Promise<void>(resolve => {
        let p = 0;
        const interval = setInterval(async () => {
          p += 0.06;
          if (task.id === 'textures' && p > 0.3 && p < 0.35) {
            // Load textures in background
            textureManager.loadAllGenerated().then(()=> console.log('[Game] Textures loaded'));
          }
          if (p >= 1) {
            clearInterval(interval);
            assetLoader.complete(task.id);
            resolve();
          } else {
            assetLoader.update(task.id, p);
          }
          const totalProg = assetLoader.getProgress();
          if (loadingBar) loadingBar.style.width = `${totalProg * 100}%`;
        }, task.duration / 18);
      });
    }

    clearInterval(tipInterval);

    // Ensure textures loaded
    await textureManager.loadAllGenerated();

    await this.world.buildDistrict();
    this.playerController.setColliders(this.world.colliders);
    this.cameraSystem.setColliders(this.world.colliders);

    this.renderer.scene.add(this.playerCharacter.group);
    this.weaponSystem.addWeapon('m9_tactical');
    this.weaponSystem.addWeapon('vec_9');
    this.updateWeaponMesh();

    this.spawnEnemies();
    this.setupSecurity();
    this.setupInteractables();

    setTimeout(() => {
      if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => loadingScreen.style.display = 'none', 600);
      }
      this.ui.showMenu();
      audioManager.setMusicState('exploration');
      
      // Show one-click launcher info
      if (!localStorage.getItem('bv_launcher_shown')) {
        setTimeout(() => {
          this.ui.showNotification('💡 TIP: Use Black-Veil.bat (Windows) or Black-Veil.sh (Linux/Mac) or node launch.mjs for one-click launch', 5000);
          localStorage.setItem('bv_launcher_shown', '1');
        }, 1000);
      }
    }, 600);
  }

  private updateWeaponMesh() {
    const socket = this.playerCharacter.getWeaponSocket();
    while (socket.children.length) socket.remove(socket.children[0]);
    const current = this.weaponSystem.getCurrent();
    if (current) {
      current.mesh.position.set(0, 0, 0);
      current.mesh.rotation.set(0, 0, 0);
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
      } else if (current.config.category === 'melee') {
        current.mesh.position.set(0.15, -0.1, 0.1);
        current.mesh.rotation.z = -0.5;
      }
      socket.add(current.mesh);
    }
  }

  private spawnEnemies() {
    const positions = [
      { x: -8, z: -58, type: 'security' as const },
      { x: 14, z: -52, type: 'scout' as const },
      { x: -22, z: -22, type: 'security' as const },
      { x: 32, z: -32, type: 'heavy' as const },
      { x: 52, z: -12, type: 'security' as const },
      { x: 62, z: -28, type: 'hunter' as const },
      { x: -38, z: 38, type: 'scout' as const },
      { x: 12, z: 52, type: 'commander' as const },
      { x: 2, z: 72, type: 'sniper' as const },
      { x: -18, z: -48, type: 'hunter' as const },
      { x: 48, z: -38, type: 'security' as const },
      { x: -50, z: -30, type: 'scout' as const },
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

  private setupSecurity() {
    // Security cameras in corporate and industrial
    this.securitySystem.addCamera(new THREE.Vector3(5, 5, 55), new THREE.Euler(0, Math.PI, 0), 'cam_corp_1');
    this.securitySystem.addCamera(new THREE.Vector3(5, 8, 75), new THREE.Euler(-0.2, 0, 0), 'cam_corp_2');
    this.securitySystem.addCamera(new THREE.Vector3(58, 5, -8), new THREE.Euler(0, -Math.PI/2, 0), 'cam_ind_1');
    this.securitySystem.addCamera(new THREE.Vector3(42, 5, -18), new THREE.Euler(0, Math.PI/2, 0), 'cam_ind_2');
    this.securitySystem.addCamera(new THREE.Vector3(0, 5, -75), new THREE.Euler(0, 0, 0), 'cam_checkpoint');

    // Terminals that control cameras
    this.securitySystem.addTerminal(new THREE.Vector3(6, 0, 58), ['cam_corp_1', 'cam_corp_2'], 'term_corp');
    this.securitySystem.addTerminal(new THREE.Vector3(54, 0, -6), ['cam_ind_1', 'cam_ind_2'], 'term_ind');
    this.securitySystem.addTerminal(new THREE.Vector3(2, 0, -78), ['cam_checkpoint'], 'term_checkpoint');

    // Add terminals to interactables
    for (const term of this.securitySystem.getTerminals()) {
      this.interactables.push({
        pos: term.position.clone(),
        type: 'security_terminal',
        id: term.id,
        mesh: term.mesh,
        data: term
      });
    }
  }

  private setupInteractables() {
    const createInteractable = (x: number, z: number, type: string, id: string, y = 0.6) => {
      const geo = new THREE.BoxGeometry(0.9, 1.3, 0.7);
      const mat = new THREE.MeshStandardMaterial({ 
        color: type === 'terminal' ? 0x00e5ff : type === 'door' ? 0x8a6a3a : type === 'safehouse' ? 0xffaa44 : 0x4dff9a,
        emissive: type === 'terminal' ? 0x00aaff : type === 'safehouse' ? 0xffaa44 : 0x000000,
        emissiveIntensity: type === 'terminal' || type === 'safehouse' ? 0.35 : 0
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      this.renderer.scene.add(mesh);
      this.interactables.push({ pos: new THREE.Vector3(x, 0, z), type, id, mesh });
    };

    createInteractable(0, -82, 'checkpoint', 'reach_checkpoint');
    createInteractable(58, -4, 'terminal', 'restore_power');
    createInteractable(54, -4, 'terminal', 'restore_power');
    createInteractable(58, -1, 'breaker', 'restore_power');
    createInteractable(-38, 24, 'door', 'infiltrate_building');
    createInteractable(-36, 26, 'loot', 'recover_logs');
    createInteractable(-58, 15, 'safehouse', 'safehouse_hub', 0.6);

    const createLoot = (x: number, z: number, type: string, y = 0.15) => {
      const geo = new THREE.BoxGeometry(0.55, 0.35, 0.45);
      let color = 0xffaa00;
      if (type === 'intel') color = 0x00e5ff;
      if (type === 'cache') color = 0x00ff88;
      if (type === 'med') color = 0xff4d6a;
      const mat = new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.25 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      // Floating animation
      mesh.userData.baseY = y;
      this.renderer.scene.add(mesh);
      this.loot.push({ pos: new THREE.Vector3(x, 0, z), type, mesh });
    };
    
    createLoot(-12, -62, 'intel');
    createLoot(7, -42, 'intel');
    createLoot(-28, -18, 'intel');
    createLoot(42, -18, 'ammo');
    createLoot(-48, -78, 'cache');
    createLoot(-56, 13, 'intel');
    createLoot(10, 68, 'intel');
    createLoot(35, -35, 'med');
    createLoot(-22, -70, 'ammo');
    createLoot(62, -10, 'intel');
  }

  private startGame() {
    if (this.isGameStarted) {
      this.isRunning = true;
      this.clock.start();
      this.animate();
      this.touchControls.setVisible(true);
      this.ui.showHUD();
      return;
    }
    this.isGameStarted = true;
    this.isRunning = true;
    this.touchControls.setVisible(true);
    this.clock.start();
    this.animate();
    console.log('[Game] Started — BLACK VEIL v1.0.0');
    
    // Start dialogue if first time
    if (!localStorage.getItem('bv_intro_played')) {
      setTimeout(() => {
        dialogueSystem.startDialogue('intro_kael');
        localStorage.setItem('bv_intro_played', '1');
      }, 1500);
    }

    // Discover starting district
    achievementManager.discoverDistrict('central');
  }

  private togglePhotoMode() {
    this.photoMode = !this.photoMode;
    if (this.photoMode) {
      this.ui.showNotification('📷 PHOTO MODE — Press P to exit, Hide UI, Move camera', 3000);
      // Hide HUD
      const hud = document.querySelector('.bv-hud') as HTMLElement;
      if (hud) hud.style.display = 'none';
      const touch = document.getElementById('touch-controls') as HTMLElement;
      if (touch) touch.style.display = 'none';
    } else {
      this.ui.showNotification('📷 Photo Mode OFF', 2000);
      const hud = document.querySelector('.bv-hud') as HTMLElement;
      if (hud) hud.style.display = 'block';
      const touch = document.getElementById('touch-controls') as HTMLElement;
      if (touch) touch.style.display = 'block';
      this.ui.showHUD();
    }
  }

  private tryInteract() {
    const playerPos = this.playerController.getPosition();
    
    // Security terminals first
    const nearestTerm = this.securitySystem.getNearestTerminal(playerPos, 4);
    if (nearestTerm) {
      if (this.securitySystem.hackTerminal(nearestTerm.id)) {
        audioManager.playProceduralSound('terminal');
        this.ui.showNotification(`SECURITY DISABLED — ${nearestTerm.controls.length} cameras offline`, 3000);
        missionManager.updateObjective('disable_security');
        achievementManager.updateProgress('explorer', 1);
        this.vfxSystem.spawn({ type: 'spark', position: nearestTerm.position.clone().add(new THREE.Vector3(0, 0.8, 0)), color: 0x00ff88, scale: 1.2, lifetime: 0.8 });
        return;
      }
    }

    for (const inter of [...this.interactables]) {
      const dist = playerPos.distanceTo(inter.pos);
      if (dist < 3.2) {
        console.log(`[Interact] ${inter.type} ${inter.id}`);
        audioManager.playProceduralSound('terminal');
        missionManager.updateObjective(inter.id);
        
        if (inter.type === 'safehouse') {
          const msg = this.world.safehouse?.interactWithStation('weapons') || 'SAFEHOUSE — Welcome back, operative';
          this.ui.showNotification(msg, 3000);
          // Heal and save
          this.playerController.heal(30);
          saveManager.save({ player: { health: this.playerController.stats.health } } as any);
          this.vfxSystem.spawn({ type: 'dust', position: inter.pos.clone().add(new THREE.Vector3(0, 0.5, 0)), color: 0xffaa66, scale: 1.5, lifetime: 1 });
          break;
        }

        this.ui.showNotification(`INTERACTED: ${inter.type.toUpperCase()}`, 2000);

        if (inter.type === 'terminal' || inter.type === 'breaker') {
          const mat = inter.mesh.material as THREE.MeshStandardMaterial;
          mat.color.setHex(0x4dff9a);
          mat.emissive.setHex(0x4dff9a);
          mat.emissiveIntensity = 0.6;
          this.vfxSystem.spawnMuzzleFlash(inter.pos.clone().add(new THREE.Vector3(0, 0.8, 0)), new THREE.Vector3(0, 1, 0));
          setTimeout(() => {
            this.renderer.scene.remove(inter.mesh);
            this.interactables = this.interactables.filter(i => i !== inter);
          }, 600);
        }

        if (inter.type === 'loot' || inter.id === 'recover_logs') {
          this.weaponSystem.addWeapon('ar_41');
          this.updateWeaponMesh();
          saveManager.save({ progression: { currency: 150 } } as any);
          dialogueSystem.startDialogue('helix_logs');
          this.vfxSystem.spawn({ type: 'impact', position: inter.pos.clone(), color: 0x00e5ff, scale: 1.5, lifetime: 0.5 });
        }

        break;
      }
    }

    for (const l of [...this.loot]) {
      const dist = playerPos.distanceTo(l.pos);
      if (dist < 2.2) {
        this.renderer.scene.remove(l.mesh);
        this.loot = this.loot.filter(x => x !== l);
        this.vfxSystem.spawn({ type: 'dust', position: l.pos.clone().add(new THREE.Vector3(0, 0.3, 0)), color: 0xffaa00, scale: 1, lifetime: 0.8 });
        
        if (l.type === 'ammo') {
          this.weaponSystem.addAmmo('rifle', 35);
          this.ui.showNotification('AMMO +35', 2000);
        } else if (l.type === 'intel') {
          missionManager.updateObjective('collect_intel');
          achievementManager.addIntel();
          this.ui.showNotification('INTEL COLLECTED — Truth about Blackout', 2500);
          if (achievementManager.getStats().intelCollected >= 3) {
            this.weaponSystem.addWeapon('sg_breach');
            this.updateWeaponMesh();
          }
        } else if (l.type === 'cache') {
          this.weaponSystem.addWeapon('sr_phantom');
          this.updateWeaponMesh();
          achievementManager.findHiddenCache();
          this.ui.showNotification('🏆 HIDDEN CACHE: PHANTOM SR UNLOCKED + Secret Intel', 4000);
        } else if (l.type === 'med') {
          this.playerController.heal(40);
          this.ui.showNotification('MEDKIT +40 HP', 2000);
        }
        audioManager.playProceduralSound('ui_click');
        break;
      }
    }
  }

  private checkInteractionPrompt(): string | null {
    const playerPos = this.playerController.getPosition();
    const term = this.securitySystem.getNearestTerminal(playerPos, 4);
    if (term) return `HACK ${term.id.toUpperCase()}`;
    
    for (const inter of this.interactables) {
      if (playerPos.distanceTo(inter.pos) < 3.2) {
        if (inter.type === 'safehouse') return 'ENTER SAFEHOUSE';
        return inter.type.toUpperCase();
      }
    }
    for (const l of this.loot) {
      if (playerPos.distanceTo(l.pos) < 2.2) {
        return `COLLECT ${l.type.toUpperCase()}`;
      }
    }
    return null;
  }

  private handleShooting(dt: number) {
    const isShooting = this.input.state.fire && this.weaponSystem.canFire();
    if (isShooting) {
      const origin = this.playerController.getPosition().clone();
      origin.y += 1.45;
      const dir = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.playerController.yaw);
      dir.y += this.playerController.pitch * 0.15;
      const spread = this.weaponSystem.getSpread();
      dir.x += (Math.random() - 0.5) * spread;
      dir.y += (Math.random() - 0.5) * spread;
      dir.z += (Math.random() - 0.5) * spread;
      dir.normalize();

      const result = this.weaponSystem.fire(origin, dir);
      if (result) {
        this.cameraSystem.addShake(result.damage * 0.006, 7);
        this.vfxSystem.spawnMuzzleFlash(origin.clone().add(dir.clone().multiplyScalar(0.8)), dir.clone());
        
        // Raycast for hits
        this.raycaster.set(origin, dir);
        const currentWeapon = this.weaponSystem.getCurrent()!;
        let hitSomething = false;

        for (const ai of [...this.enemies]) {
          const enemyPos = ai.character.getPosition();
          const toEnemy = enemyPos.clone().sub(origin);
          const proj = toEnemy.dot(dir);
          if (proj > 0 && proj < currentWeapon.config.range) {
            const closest = origin.clone().add(dir.clone().multiplyScalar(proj));
            const distToRay = closest.distanceTo(enemyPos.clone().add(new THREE.Vector3(0, 1, 0)));
            if (distToRay < 0.85) {
              const headPos = enemyPos.clone().add(new THREE.Vector3(0, 1.55, 0));
              const headshot = closest.distanceTo(headPos) < 0.35;
              const dead = ai.character.takeDamage(result.damage, headshot);
              
              this.vfxSystem.spawnImpact(closest, dir.clone().multiplyScalar(-1), 'flesh');
              
              if (dead) {
                this.renderer.scene.remove(ai.character.group);
                this.aiDirector.removeEnemy(ai);
                this.enemies = this.enemies.filter(e => e !== ai);
                missionManager.updateObjective('defend_position');
                achievementManager.addKill(headshot);
                this.ui.showNotification(headshot ? '💀 HEADSHOT' : 'ENEMY DOWN', 1500);
                saveManager.save({ progression: { xp: headshot ? 75 : 50 } } as any);
                this.vfxSystem.spawn({ type: 'blood', position: enemyPos.clone().add(new THREE.Vector3(0, 1, 0)), color: 0xff2222, scale: 1.5, lifetime: 0.8 });
              } else {
                this.ui.showNotification(headshot ? 'HEADSHOT!' : 'HIT', 600);
              }
              hitSomething = true;
              break;
            }
          }
        }

        if (!hitSomething) {
          // Check world collision for bullet holes
          const hitPos = origin.clone().add(dir.clone().multiplyScalar(currentWeapon.config.range * 0.6));
          // Simplified: check if near collider
          for (const box of this.world.colliders) {
            const boxCenter = box.getCenter(new THREE.Vector3());
            const toBox = boxCenter.clone().sub(origin);
            const proj = toBox.dot(dir);
            if (proj > 0 && proj < currentWeapon.config.range) {
              const closest = origin.clone().add(dir.clone().multiplyScalar(proj));
              if (box.containsPoint(closest)) {
                const normal = closest.clone().sub(boxCenter).normalize();
                this.vfxSystem.spawnImpact(closest, normal, 'concrete');
                hitSomething = true;
                break;
              }
            }
          }
          if (!hitSomething) {
            // Air impact dust
            const airPos = origin.clone().add(dir.clone().multiplyScalar(12));
            this.vfxSystem.spawn({ type: 'dust', position: airPos, color: 0x666666, scale: 0.5, lifetime: 0.4 });
          }
        }
      }
    }

    if (this.input.state.reload) {
      if (this.weaponSystem.startReload()) {
        this.ui.showNotification('RELOADING...', 1000);
      }
    }

    if (this.input.state.switchWeapon !== 0) {
      this.weaponSystem.switchWeapon(this.input.state.switchWeapon);
      this.updateWeaponMesh();
      const cur = this.weaponSystem.getCurrent();
      if (cur) this.ui.showNotification(`EQUIPPED: ${cur.config.name}`, 1500);
    }

    this.lastShootState = isShooting;
  }

  private updateStealthState() {
    const combatCount = this.aiDirector.getCombatCount();
    const maxDetection = this.enemies.length > 0 ? Math.max(0, ...this.enemies.map(e => e.getDetectionLevel())) : 0;
    const alarmLevel = this.securitySystem.getAlarmLevel();

    let newState: typeof this.stealthState = 'HIDDEN';
    if (combatCount > 0 || alarmLevel === 'reinforcements' || alarmLevel === 'lockdown') newState = 'COMBAT';
    else if (maxDetection > 0.7 || alarmLevel === 'alert') newState = 'DETECTED';
    else if (maxDetection > 0.3 || alarmLevel === 'suspicious') newState = 'SUSPICIOUS';
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
    const obj = missionManager.getObjectiveByPos({ x: playerPos.x, y: playerPos.y, z: playerPos.z }, 5.5);
    if (obj) {
      missionManager.updateObjective(obj.id);
      this.ui.showNotification(`OBJECTIVE: ${obj.title}`, 2500);
      // Discover district
      const district = this.world.getDistrictAt(playerPos);
      if (district) achievementManager.discoverDistrict(district.id);
    }
  }

  private updateLootAnimation(dt: number) {
    const time = performance.now() * 0.001;
    for (const l of this.loot) {
      l.mesh.position.y = l.mesh.userData.baseY + Math.sin(time * 2 + l.pos.x) * 0.15;
      l.mesh.rotation.y += dt * 0.8;
    }
  }

  private animate = () => {
    if (!this.isRunning) return;
    requestAnimationFrame(this.animate);

    const dt = Math.min(this.clock.getDelta(), 0.033);
    this.timePlayed += dt;

    this.renderer.beginFrame();

    if (this.isGameStarted && !this.photoMode) {
      this.playerController.update(dt, this.renderer.camera);
      this.playerCharacter.group.position.copy(this.playerController.position);
      this.playerCharacter.group.rotation.y = this.playerController.yaw;
      this.playerCharacter.update(dt, this.playerController.moveState, this.playerController.yaw);

      this.cameraSystem.update(dt, this.playerController.getCameraTarget(), this.playerController.yaw, this.playerController.pitch, this.playerController.isAiming, this.playerController.isCrouching);

      this.weaponSystem.update(dt);
      this.handleShooting(dt);

      const playerPos = this.playerController.getPosition();
      const playerState = {
        isCrouching: this.playerController.isCrouching,
        isSprinting: this.playerController.isSprinting,
        isShooting: this.lastShootState,
      };
      
      for (const ai of this.enemies) {
        ai.update(dt, playerPos, this.playerController.velocity, playerState, this.world.colliders, this.enemies);
        if (ai.canShoot()) {
          ai.onShoot();
          const dist = ai.position.distanceTo(playerPos);
          if (dist < ai.config.detectionRange && Math.random() < 0.65) {
            const hitChance = Math.max(0.08, 1 - dist / 45);
            if (Math.random() < hitChance * 0.32) {
              const dead = this.playerController.takeDamage(ai.config.damage * 0.16);
              this.cameraSystem.addShake(0.35, 8);
              this.vfxSystem.spawnImpact(playerPos.clone().add(new THREE.Vector3(0, 1.2, 0)), new THREE.Vector3(0, 0, 1), 'flesh');
              if (dead) {
                this.ui.showNotification('DOWNED — RESTARTING AT SAFEHOUSE', 3500);
                achievementManager.getStats().deaths++;
                setTimeout(() => {
                  this.playerController.position.set(-58, 0.1, 15);
                  this.playerController.stats.health = 100;
                  this.playerController.stats.armor = 30;
                }, 2000);
              }
            }
          }
        }
      }
      this.aiDirector.update(dt, playerPos);
      this.securitySystem.update(dt, playerPos, this.playerController.isCrouching);
      this.vfxSystem.update(dt);
      this.updateLootAnimation(dt);
      this.updateMissions();
      this.updateStealthState();

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

      window.dispatchEvent(new CustomEvent('bv:playerPos', { detail: { x: playerPos.x, z: playerPos.z } }));
      this.playerPosHistory.push(playerPos.clone());
      if (this.playerPosHistory.length > 100) this.playerPosHistory.shift();

      audioManager.setListenerPosition(playerPos, new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.playerController.yaw));
    } else if (this.photoMode) {
      // Photo mode: free camera
      const look = this.input.consumeLook();
      if (look.lengthSq() > 0) {
        this.renderer.camera.rotation.y -= look.x;
        this.renderer.camera.rotation.x += look.y;
      }
      const move = this.input.state.move;
      if (move.lengthSq() > 0) {
        const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(this.renderer.camera.quaternion);
        const right = new THREE.Vector3(1, 0, 0).applyQuaternion(this.renderer.camera.quaternion);
        this.renderer.camera.position.addScaledVector(forward, move.y * 0.15);
        this.renderer.camera.position.addScaledVector(right, move.x * 0.15);
      }
    }

    this.renderer.render();
    this.renderer.endFrame(dt);
    this.input.resetTransient();
  };

  dispose() {
    this.isRunning = false;
    this.renderer.dispose();
    this.world.dispose();
    this.vfxSystem.clear();
  }
}
