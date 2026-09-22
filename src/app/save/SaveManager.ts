export interface SaveData {
  version: number;
  timestamp: number;
  player: {
    health: number;
    position: { x: number; y: number; z: number };
    rotation: number;
    weapons: string[];
    currentWeapon: number;
    ammo: Record<string, number>;
  };
  progression: {
    level: number;
    xp: number;
    skillPoints: number;
    skills: Record<string, number>;
    currency: number;
  };
  missions: {
    activeMissionId: string | null;
    completed: string[];
    objectives: Record<string, boolean>;
    flags: Record<string, any>;
  };
  world: {
    discoveredLocations: string[];
    collectedLore: string[];
    factionRep: Record<string, number>;
    powerStates: Record<string, 'powered' | 'partial' | 'blackout'>;
  };
  settings: {
    quality: string;
    sensitivity: number;
    language: string;
    volumes: Record<string, number>;
    fpsLimit: number;
  };
  inventory: {
    items: { id: string; count: number }[];
    equipped: Record<string, string>;
  };
}

const SAVE_KEY = 'blackveil_save_v1';
const SETTINGS_KEY = 'blackveil_settings_v1';
const CURRENT_VERSION = 1;

export class SaveManager {
  save(data: Partial<SaveData>) {
    try {
      const existing = this.load();
      const merged: SaveData = {
        version: CURRENT_VERSION,
        timestamp: Date.now(),
        player: { health: 100, position: { x: 0, y: 0, z: 0 }, rotation: 0, weapons: ['m9_tactical'], currentWeapon: 0, ammo: { '9mm': 90 }, ...(existing?.player || {}), ...(data.player || {}) },
        progression: { level: 1, xp: 0, skillPoints: 0, skills: {}, currency: 0, ...(existing?.progression || {}), ...(data.progression || {}) },
        missions: { activeMissionId: 'ch1_m1_entry', completed: [], objectives: {}, flags: {}, ...(existing?.missions || {}), ...(data.missions || {}) },
        world: { discoveredLocations: [], collectedLore: [], factionRep: { VANGUARD: 0, ASHEN: 10, HELIX: -20, VEIL: -50 }, powerStates: {}, ...(existing?.world || {}), ...(data.world || {}) },
        settings: { quality: 'auto', sensitivity: 1, language: 'en', volumes: { master: 1, music: 0.7, sfx: 0.9, voice: 1, ambience: 0.8, ui: 0.8 }, fpsLimit: 60, ...(existing?.settings || {}), ...(data.settings || {}) },
        inventory: { items: [], equipped: {}, ...(existing?.inventory || {}), ...(data.inventory || {}) },
      };
      localStorage.setItem(SAVE_KEY, JSON.stringify(merged));
      return true;
    } catch (e) {
      console.error('[Save] Failed', e);
      return false;
    }
  }

  load(): SaveData | null {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw) as SaveData;
      if (data.version !== CURRENT_VERSION) {
        console.warn('[Save] Version mismatch, migrating');
        // simple migration: keep
      }
      return data;
    } catch (e) {
      console.error('[Save] Corrupt', e);
      return null;
    }
  }

  saveSettings(settings: any) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }

  loadSettings() {
    try { return JSON.parse(localStorage.getItem(SETTINGS_KEY) || 'null'); } catch { return null; }
  }

  hasSave(): boolean { return !!localStorage.getItem(SAVE_KEY); }

  deleteSave() { localStorage.removeItem(SAVE_KEY); }

  exportSave(): string | null { return localStorage.getItem(SAVE_KEY); }
}

export const saveManager = new SaveManager();
