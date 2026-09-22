import * as THREE from 'three';
import { EnemyCharacter } from '../characters/EnemyCharacter';
import { EnemyConfig } from '../../data/enemies';

export type AIState = 'idle' | 'patrol' | 'suspicious' | 'investigating' | 'alerted' | 'combat' | 'searching' | 'lost';

export interface AIMemory {
  lastKnownPlayerPos: THREE.Vector3 | null;
  lastSeenTime: number;
  lastHeardPos: THREE.Vector3 | null;
  deadTeammates: number;
  suspiciousLocations: THREE.Vector3[];
  threatLevel: number;
}

export class AIController {
  state: AIState = 'patrol';
  memory: AIMemory = {
    lastKnownPlayerPos: null,
    lastSeenTime: 0,
    lastHeardPos: null,
    deadTeammates: 0,
    suspiciousLocations: [],
    threatLevel: 0,
  };
  position: THREE.Vector3;
  private patrolPoints: THREE.Vector3[] = [];
  private patrolIndex = 0;
  private detection = 0; // 0..1
  private stateTimer = 0;
  private velocity = new THREE.Vector3();
  private targetPos: THREE.Vector3 | null = null;
  private fireCooldown = 0;
  private squadId: string | null = null;

  constructor(public character: EnemyCharacter, public config: EnemyConfig, startPos: THREE.Vector3) {
    this.position = startPos.clone();
    this.character.setPosition(startPos);
    this.generatePatrol(startPos);
  }

  private generatePatrol(center: THREE.Vector3) {
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2 + Math.random() * 0.5;
      const dist = 6 + Math.random() * 10;
      this.patrolPoints.push(new THREE.Vector3(
        center.x + Math.cos(angle) * dist,
        center.y,
        center.z + Math.sin(angle) * dist
      ));
    }
  }

  setSquad(id: string) { this.squadId = id; }

  update(dt: number, playerPos: THREE.Vector3, playerVel: THREE.Vector3, playerState: { isCrouching: boolean; isSprinting: boolean; isShooting: boolean }, colliders: THREE.Box3[], allies: AIController[]) {
    this.stateTimer += dt;
    this.fireCooldown = Math.max(0, this.fireCooldown - dt);

    // Perception
    const toPlayer = playerPos.clone().sub(this.position);
    const dist = toPlayer.length();
    const canSee = this.canSeePlayer(playerPos, colliders, dist);
    const canHear = this.canHearPlayer(playerPos, playerState, dist);

    // Detection logic
    if (canSee) {
      const visibilityFactor = playerState.isCrouching ? 0.5 : playerState.isSprinting ? 1.5 : 1.0;
      const distanceFactor = THREE.MathUtils.clamp(1 - dist / this.config.detectionRange, 0, 1);
      const fovFactor = this.isInFOV(toPlayer) ? 1 : 0.2;
      this.detection += dt * 1.8 * visibilityFactor * fovFactor * (0.3 + distanceFactor);
      this.memory.lastKnownPlayerPos = playerPos.clone();
      this.memory.lastSeenTime = performance.now();
    } else {
      this.detection -= dt * 0.6;
      if (canHear) {
        this.detection += dt * 0.8;
        this.memory.lastHeardPos = playerPos.clone();
        if (!this.memory.lastKnownPlayerPos) this.memory.lastKnownPlayerPos = playerPos.clone();
      }
    }
    this.detection = THREE.MathUtils.clamp(this.detection, 0, 1);

    // State transitions
    const prevState = this.state;
    if (this.detection >= 0.95) {
      this.state = 'combat';
      this.memory.threatLevel = 1;
    } else if (this.detection >= 0.65) {
      if (this.state !== 'combat') this.state = 'alerted';
    } else if (this.detection >= 0.35) {
      if (this.state === 'patrol' || this.state === 'idle') this.state = 'suspicious';
      if (this.state === 'suspicious' && this.stateTimer > 2) this.state = 'investigating';
    } else {
      if (this.state === 'alerted' || this.state === 'combat') {
        this.state = 'searching';
        this.stateTimer = 0;
      }
      if (this.state === 'searching' && this.stateTimer > 8) {
        this.state = 'lost';
        this.stateTimer = 0;
      }
      if (this.state === 'lost' && this.stateTimer > 4) {
        this.state = 'patrol';
        this.memory.lastKnownPlayerPos = null;
      }
    }

    if (prevState !== this.state) {
      this.stateTimer = 0;
      // console.log(`[AI ${this.config.id}] ${prevState} -> ${this.state}`);
    }

    // Behavior execution
    switch (this.state) {
      case 'patrol': this.updatePatrol(dt); break;
      case 'suspicious': this.updateSuspicious(dt); break;
      case 'investigating': this.updateInvestigate(dt); break;
      case 'alerted': this.updateAlerted(dt, playerPos); break;
      case 'combat': this.updateCombat(dt, playerPos, allies); break;
      case 'searching': this.updateSearching(dt); break;
      case 'lost': this.velocity.set(0, 0, 0); break;
      case 'idle': break;
    }

    // Apply movement
    this.position.add(this.velocity.clone().multiplyScalar(dt));
    this.position.y = 0;
    this.character.setPosition(this.position);
    if (this.targetPos || this.memory.lastKnownPlayerPos) {
      const lookTarget = this.state === 'combat' || this.state === 'alerted' ? playerPos : (this.targetPos || this.memory.lastKnownPlayerPos!);
      this.character.lookAt(lookTarget);
    }

    // Map AI state to anim state for realistic animation
    let animState: any = 'idle';
    if (this.state === 'patrol') animState = this.velocity.length() > 0.1 ? 'patrol' : 'idle';
    else if (this.state === 'suspicious') animState = 'alert';
    else if (this.state === 'investigating') animState = 'search';
    else if (this.state === 'alerted') animState = 'alert';
    else if (this.state === 'combat') animState = this.velocity.length() > 0.5 ? 'chase' : 'attack';
    else if (this.state === 'searching') animState = 'search';
    else if (this.state === 'lost') animState = 'idle';
    this.character.setAnimState(animState);
    this.character.update(dt);
  }

  private canSeePlayer(playerPos: THREE.Vector3, colliders: THREE.Box3[], dist: number): boolean {
    if (dist > this.config.detectionRange) return false;
    if (!this.isInFOV(playerPos.clone().sub(this.position))) return false;
    // Raycast
    const dir = playerPos.clone().sub(this.position);
    dir.y = 0;
    const len = dir.length();
    dir.normalize();
    const ray = new THREE.Ray(this.position.clone().add(new THREE.Vector3(0, 1.2, 0)), dir);
    for (const box of colliders) {
      const hit = ray.intersectBox(box, new THREE.Vector3());
      if (hit) {
        const d = hit.distanceTo(this.position);
        if (d < len - 0.5) return false; // blocked
      }
    }
    return true;
  }

  private canHearPlayer(playerPos: THREE.Vector3, playerState: { isCrouching: boolean; isSprinting: boolean; isShooting: boolean }, dist: number): boolean {
    let range = this.config.hearingRange;
    if (playerState.isShooting) range *= 3;
    if (playerState.isSprinting) range *= 1.5;
    if (playerState.isCrouching) range *= 0.4;
    return dist < range;
  }

  private isInFOV(toPlayer: THREE.Vector3): boolean {
    toPlayer.y = 0;
    if (toPlayer.lengthSq() < 0.01) return true;
    const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.character.group.rotation.y);
    const angle = forward.angleTo(toPlayer.clone().normalize());
    return angle < THREE.MathUtils.degToRad(this.config.fov * 0.5);
  }

  private updatePatrol(dt: number) {
    if (this.patrolPoints.length === 0) return;
    const target = this.patrolPoints[this.patrolIndex];
    const toTarget = target.clone().sub(this.position);
    toTarget.y = 0;
    if (toTarget.length() < 1.2) {
      this.patrolIndex = (this.patrolIndex + 1) % this.patrolPoints.length;
      this.velocity.set(0, 0, 0);
      if (Math.random() < 0.3) {
        this.state = 'idle';
        setTimeout(() => { if (this.state === 'idle') this.state = 'patrol'; }, 2000 + Math.random() * 3000);
      }
    } else {
      toTarget.normalize().multiplyScalar(this.config.speed * 0.5);
      this.velocity.lerp(toTarget, dt * 3);
    }
  }

  private updateSuspicious(dt: number) {
    this.velocity.lerp(new THREE.Vector3(0, 0, 0), dt * 2);
    // Look around
    this.character.group.rotation.y += Math.sin(this.stateTimer * 0.8) * dt * 0.5;
  }

  private updateInvestigate(dt: number) {
    const target = this.memory.lastHeardPos || this.memory.lastKnownPlayerPos;
    if (!target) { this.state = 'patrol'; return; }
    const toTarget = target.clone().sub(this.position);
    toTarget.y = 0;
    if (toTarget.length() < 1.5) {
      this.state = 'suspicious';
      this.memory.suspiciousLocations.push(target.clone());
    } else {
      toTarget.normalize().multiplyScalar(this.config.speed * 0.7);
      this.velocity.lerp(toTarget, dt * 4);
      this.targetPos = target;
    }
  }

  private updateAlerted(dt: number, playerPos: THREE.Vector3) {
    // Move to cover or last known
    const target = this.memory.lastKnownPlayerPos || playerPos;
    const toTarget = target.clone().sub(this.position);
    const dist = toTarget.length();
    if (dist > 12) {
      toTarget.normalize().multiplyScalar(this.config.speed * 0.9);
      this.velocity.lerp(toTarget, dt * 4);
    } else {
      // Strafe
      const strafe = new THREE.Vector3(-toTarget.z, 0, toTarget.x).normalize().multiplyScalar(Math.sin(this.stateTimer * 1.2) * 2);
      this.velocity.lerp(strafe, dt * 3);
    }
    this.targetPos = target;
  }

  private updateCombat(dt: number, playerPos: THREE.Vector3, allies: AIController[]) {
    const toPlayer = playerPos.clone().sub(this.position);
    const dist = toPlayer.length();

    // Squad behavior: flank if allies present
    if (allies.length > 1 && this.config.id !== 'heavy' && this.config.id !== 'sniper') {
      if (Math.random() < 0.01) {
        // Try flank
        const flankDir = new THREE.Vector3(-toPlayer.z, 0, toPlayer.x).normalize();
        const flankPos = playerPos.clone().add(flankDir.multiplyScalar((Math.random() > 0.5 ? 1 : -1) * 8));
        this.targetPos = flankPos;
        toPlayer.copy(flankPos).sub(this.position);
      }
    }

    if (this.config.id === 'sniper') {
      // Keep distance
      if (dist < 25) {
        const away = this.position.clone().sub(playerPos).normalize().multiplyScalar(this.config.speed);
        this.velocity.lerp(away, dt * 3);
      } else {
        this.velocity.lerp(new THREE.Vector3(0, 0, 0), dt * 3);
      }
    } else if (this.config.id === 'hunter') {
      // Aggressive close
      if (dist > 3) {
        toPlayer.normalize().multiplyScalar(this.config.speed * 1.1);
        this.velocity.lerp(toPlayer, dt * 5);
      } else {
        this.velocity.set(0, 0, 0);
      }
    } else {
      // Standard: maintain 8-15m
      if (dist > 15) {
        toPlayer.normalize().multiplyScalar(this.config.speed);
        this.velocity.lerp(toPlayer, dt * 4);
      } else if (dist < 6) {
        toPlayer.normalize().multiplyScalar(-this.config.speed * 0.7);
        this.velocity.lerp(toPlayer, dt * 4);
      } else {
        this.velocity.lerp(new THREE.Vector3(0, 0, 0), dt * 4);
      }
    }
  }

  private updateSearching(dt: number) {
    // Search around last known position
    const target = this.memory.lastKnownPlayerPos;
    if (!target) { this.state = 'patrol'; return; }
    const toTarget = target.clone().sub(this.position);
    toTarget.y = 0;
    if (toTarget.length() < 2) {
      // Search pattern: move in expanding circles
      const angle = this.stateTimer * 0.8;
      const radius = 2 + this.stateTimer * 0.5;
      const searchPos = target.clone().add(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
      const toSearch = searchPos.clone().sub(this.position);
      toSearch.normalize().multiplyScalar(this.config.speed * 0.6);
      this.velocity.lerp(toSearch, dt * 2);
      this.targetPos = searchPos;
    } else {
      toTarget.normalize().multiplyScalar(this.config.speed * 0.7);
      this.velocity.lerp(toTarget, dt * 3);
      this.targetPos = target;
    }
  }

  canShoot(): boolean {
    return this.state === 'combat' && this.fireCooldown <= 0 && this.detection > 0.8;
  }

  onShoot() {
    this.fireCooldown = this.config.id === 'sniper' ? 2.2 : this.config.id === 'heavy' ? 0.18 : 0.5;
  }

  getDetectionLevel() { return this.detection; }
  isAlive() { return this.character.health > 0; }
}

export class AIDirector {
  private enemies: AIController[] = [];
  private spawnPressure = 0;
  private lastReinforcement = 0;

  addEnemy(ai: AIController) { this.enemies.push(ai); }
  removeEnemy(ai: AIController) { this.enemies = this.enemies.filter(e => e !== ai); }

  update(dt: number, playerPos: THREE.Vector3) {
    // Adjust spawn pressure based on player performance
    const activeCombat = this.enemies.filter(e => e.state === 'combat').length;
    if (activeCombat > 4) this.spawnPressure = Math.max(0, this.spawnPressure - dt * 0.2);
    else this.spawnPressure = Math.min(1, this.spawnPressure + dt * 0.05);

    // Cleanup dead
    this.enemies = this.enemies.filter(e => e.isAlive());
  }

  getEnemies() { return this.enemies; }
  getCombatCount() { return this.enemies.filter(e => e.state === 'combat').length; }
}
