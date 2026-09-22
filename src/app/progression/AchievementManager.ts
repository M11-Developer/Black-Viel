export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'story' | 'combat' | 'stealth' | 'exploration' | 'mastery';
  progress: number;
  maxProgress: number;
  unlocked: boolean;
  unlockedAt?: number;
  xpReward: number;
  hidden?: boolean;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_blood',
    title: 'First Blood',
    description: 'Eliminate your first hostile',
    icon: '◬',
    category: 'combat',
    progress: 0,
    maxProgress: 1,
    unlocked: false,
    xpReward: 100
  },
  {
    id: 'ghost',
    title: 'Ghost of Veyra',
    description: 'Complete a mission without being detected',
    icon: '⬔',
    category: 'stealth',
    progress: 0,
    maxProgress: 1,
    unlocked: false,
    xpReward: 500
  },
  {
    id: 'explorer',
    title: 'Urban Explorer',
    description: 'Discover all districts in Sector 7',
    icon: '⬡',
    category: 'exploration',
    progress: 0,
    maxProgress: 7,
    unlocked: false,
    xpReward: 300
  },
  {
    id: 'intel',
    title: 'Truth Seeker',
    description: 'Collect 10 pieces of intel about the Blackout',
    icon: '◍',
    category: 'story',
    progress: 0,
    maxProgress: 10,
    unlocked: false,
    xpReward: 400
  },
  {
    id: 'marksman',
    title: 'Marksman',
    description: 'Get 5 headshots',
    icon: '◎',
    category: 'combat',
    progress: 0,
    maxProgress: 5,
    unlocked: false,
    xpReward: 250
  },
  {
    id: 'hidden_cache',
    title: 'Hidden Truth',
    description: 'Find the hidden cache in Central',
    icon: '⬔',
    category: 'exploration',
    progress: 0,
    maxProgress: 1,
    unlocked: false,
    xpReward: 350,
    hidden: true
  },
  {
    id: 'chapter1',
    title: 'Ghosts of Veyra',
    description: 'Complete Chapter 1',
    icon: '◬',
    category: 'story',
    progress: 0,
    maxProgress: 1,
    unlocked: false,
    xpReward: 1000
  },
  {
    id: 'pacifist',
    title: 'Shadow',
    description: 'Complete a mission with 0 kills',
    icon: '⬔',
    category: 'stealth',
    progress: 0,
    maxProgress: 1,
    unlocked: false,
    xpReward: 600,
    hidden: true
  }
];

export class AchievementManager {
  private achievements: Map<string, Achievement> = new Map();
  private listeners: Set<(ach: Achievement) => void> = new Set();
  private stats = {
    kills: 0,
    headshots: 0,
    intelCollected: 0,
    districtsDiscovered: new Set<string>(),
    missionsCompleted: 0,
    stealthMissions: 0,
    deaths: 0,
    distanceTraveled: 0,
    timePlayed: 0,
  };

  constructor() {
    ACHIEVEMENTS.forEach(a => this.achievements.set(a.id, { ...a }));
    this.load();
  }

  private load() {
    try {
      const raw = localStorage.getItem('bv_achievements');
      if (raw) {
        const data = JSON.parse(raw);
        for (const [id, saved] of Object.entries(data as any)) {
          const ach = this.achievements.get(id);
          if (ach) {
            ach.progress = (saved as any).progress;
            ach.unlocked = (saved as any).unlocked;
            ach.unlockedAt = (saved as any).unlockedAt;
          }
        }
      }
      const statsRaw = localStorage.getItem('bv_stats');
      if (statsRaw) {
        const savedStats = JSON.parse(statsRaw);
        this.stats = { ...this.stats, ...savedStats, districtsDiscovered: new Set(savedStats.districtsDiscovered || []) };
      }
    } catch {}
  }

  private save() {
    try {
      const data: any = {};
      for (const [id, ach] of this.achievements) {
        data[id] = { progress: ach.progress, unlocked: ach.unlocked, unlockedAt: ach.unlockedAt };
      }
      localStorage.setItem('bv_achievements', JSON.stringify(data));
      localStorage.setItem('bv_stats', JSON.stringify({
        ...this.stats,
        districtsDiscovered: Array.from(this.stats.districtsDiscovered)
      }));
    } catch {}
  }

  updateProgress(id: string, amount = 1) {
    const ach = this.achievements.get(id);
    if (!ach || ach.unlocked) return;

    ach.progress = Math.min(ach.maxProgress, ach.progress + amount);
    
    if (ach.progress >= ach.maxProgress && !ach.unlocked) {
      this.unlock(id);
    }
    
    this.save();
  }

  unlock(id: string) {
    const ach = this.achievements.get(id);
    if (!ach || ach.unlocked) return;

    ach.unlocked = true;
    ach.unlockedAt = Date.now();
    ach.progress = ach.maxProgress;
    
    console.log(`[Achievement] Unlocked: ${ach.title}`);
    this.listeners.forEach(l => l(ach));
    this.save();

    // Show notification (will be handled by UI)
    window.dispatchEvent(new CustomEvent('bv:achievement', { detail: ach }));
  }

  // Stats tracking
  addKill(headshot = false) {
    this.stats.kills++;
    if (headshot) {
      this.stats.headshots++;
      this.updateProgress('marksman', 1);
    }
    if (this.stats.kills === 1) this.unlock('first_blood');
    this.save();
  }

  addIntel() {
    this.stats.intelCollected++;
    this.updateProgress('intel', 1);
    this.save();
  }

  discoverDistrict(id: string) {
    if (!this.stats.districtsDiscovered.has(id)) {
      this.stats.districtsDiscovered.add(id);
      this.updateProgress('explorer', 1);
      this.save();
    }
  }

  completeMission(stealth = false, kills = 0) {
    this.stats.missionsCompleted++;
    if (stealth) {
      this.stats.stealthMissions++;
      this.updateProgress('ghost', 1);
    }
    if (kills === 0 && this.stats.missionsCompleted > 0) {
      this.updateProgress('pacifist', 1);
    }
    if (this.stats.missionsCompleted >= 4) this.unlock('chapter1');
    this.save();
  }

  findHiddenCache() {
    this.unlock('hidden_cache');
  }

  getAchievements(): Achievement[] {
    return Array.from(this.achievements.values());
  }

  getStats() {
    return {
      ...this.stats,
      districtsDiscovered: Array.from(this.stats.districtsDiscovered),
      totalDiscovered: this.stats.districtsDiscovered.size
    };
  }

  onUnlock(cb: (ach: Achievement) => void) {
    this.listeners.add(cb);
    return () => this.listeners.delete(cb);
  }
}

export const achievementManager = new AchievementManager();
