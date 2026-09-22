import { MISSIONS, Mission, MissionObjective } from '../../data/missions';
import { saveManager } from '../save/SaveManager';

export class MissionManager {
  private missions: Map<string, Mission> = new Map();
  activeMission: Mission | null = null;
  private objectiveProgress: Map<string, number> = new Map();
  private completedObjectives: Set<string> = new Set();
  private listeners: Set<(mission: Mission | null) => void> = new Set();

  constructor() {
    MISSIONS.forEach(m => this.missions.set(m.id, JSON.parse(JSON.stringify(m))));
    const save = saveManager.load();
    const activeId = save?.missions.activeMissionId || 'ch1_m1_entry';
    this.activeMission = this.missions.get(activeId) || this.missions.get('ch1_m1_entry')!;
    if (save?.missions.objectives) {
      Object.entries(save.missions.objectives).forEach(([k, v]) => {
        if (v) this.completedObjectives.add(k);
      });
    }
  }

  getActive(): Mission | null { return this.activeMission; }
  getAll(): Mission[] { return Array.from(this.missions.values()); }

  setActive(id: string) {
    const m = this.missions.get(id);
    if (m) {
      this.activeMission = m;
      this.emit();
      saveManager.save({ missions: { activeMissionId: id, completed: [], objectives: {}, flags: {} } } as any);
    }
  }

  updateObjective(id: string, progress = 1) {
    if (!this.activeMission) return;
    const obj = this.activeMission.objectives.find(o => o.id === id);
    if (!obj) return;
    const current = this.objectiveProgress.get(id) || obj.current || 0;
    const next = current + progress;
    this.objectiveProgress.set(id, next);
    obj.current = next;
    if (obj.required && next >= obj.required) {
      this.completedObjectives.add(id);
      obj.completed = true;
    } else if (!obj.required && next >= 1) {
      this.completedObjectives.add(id);
      obj.completed = true;
    }
    this.emit();
    this.checkMissionComplete();
    saveManager.save({ missions: { activeMissionId: this.activeMission.id, completed: [], objectives: Object.fromEntries(this.completedObjectives.entries()), flags: {} } } as any);
  }

  completeObjective(id: string) {
    this.updateObjective(id, 999);
  }

  private checkMissionComplete() {
    if (!this.activeMission) return;
    const required = this.activeMission.objectives.filter(o => !o.optional);
    const allDone = required.every(o => this.completedObjectives.has(o.id));
    if (allDone) {
      console.log(`[Mission] ${this.activeMission.title} completed`);
      // Auto advance
      if (this.activeMission.nextMission) {
        setTimeout(() => this.setActive(this.activeMission!.nextMission!), 2000);
      }
    }
  }

  getProgress(): { completed: number; total: number; percent: number } {
    if (!this.activeMission) return { completed: 0, total: 0, percent: 0 };
    const total = this.activeMission.objectives.filter(o => !o.optional).length;
    const completed = this.activeMission.objectives.filter(o => !o.optional && this.completedObjectives.has(o.id)).length;
    return { completed, total, percent: total ? completed / total : 0 };
  }

  onChange(cb: (m: Mission | null) => void) {
    this.listeners.add(cb);
    return () => this.listeners.delete(cb);
  }

  private emit() { this.listeners.forEach(l => l(this.activeMission)); }

  getObjectiveByPos(pos: { x: number; y: number; z: number }, radius = 6): MissionObjective | null {
    if (!this.activeMission) return null;
    for (const obj of this.activeMission.objectives) {
      if (obj.targetPos && !this.completedObjectives.has(obj.id)) {
        const dx = obj.targetPos.x - pos.x;
        const dz = obj.targetPos.z - pos.z;
        if (Math.sqrt(dx * dx + dz * dz) < radius) return obj;
      }
    }
    return null;
  }
}

export const missionManager = new MissionManager();
