import { saveManager } from '../save/SaveManager';

export type QualityLevel = 'low' | 'medium' | 'high' | 'ultra' | 'auto';

export interface GameSettings {
  quality: QualityLevel;
  resolutionScale: number;
  textureQuality: number;
  shadowQuality: number;
  effectsQuality: number;
  viewDistance: number;
  fpsLimit: number; // 30,40,60,90,0=auto
  masterVolume: number;
  musicVolume: number;
  sfxVolume: number;
  voiceVolume: number;
  ambienceVolume: number;
  uiVolume: number;
  cameraSensitivity: number;
  aimSensitivity: number;
  invertY: boolean;
  gyroEnabled: boolean;
  gyroSensitivity: number;
  vibration: boolean;
  subtitles: boolean;
  subtitleSize: number;
  language: 'en' | 'ar';
  touchOpacity: number;
  controlLayout: any;
}

const DEFAULTS: GameSettings = {
  quality: 'auto',
  resolutionScale: 1,
  textureQuality: 1,
  shadowQuality: 1,
  effectsQuality: 1,
  viewDistance: 1,
  fpsLimit: 60,
  masterVolume: 1,
  musicVolume: 0.7,
  sfxVolume: 0.9,
  voiceVolume: 1,
  ambienceVolume: 0.8,
  uiVolume: 0.8,
  cameraSensitivity: 1,
  aimSensitivity: 1,
  invertY: false,
  gyroEnabled: false,
  gyroSensitivity: 1,
  vibration: true,
  subtitles: true,
  subtitleSize: 1,
  language: 'en',
  touchOpacity: 0.85,
  controlLayout: null,
};

export class SettingsManager {
  settings: GameSettings;
  listeners: Set<(s: GameSettings) => void> = new Set();

  constructor() {
    const saved = saveManager.loadSettings();
    this.settings = { ...DEFAULTS, ...(saved || {}) };
  }

  get<K extends keyof GameSettings>(key: K): GameSettings[K] { return this.settings[key]; }

  set<K extends keyof GameSettings>(key: K, value: GameSettings[K]) {
    this.settings[key] = value;
    this.persist();
  }

  update(patch: Partial<GameSettings>) {
    Object.assign(this.settings, patch);
    this.persist();
  }

  private persist() {
    saveManager.saveSettings(this.settings);
    this.listeners.forEach(l => l(this.settings));
  }

  onChange(cb: (s: GameSettings) => void) {
    this.listeners.add(cb);
    return () => this.listeners.delete(cb);
  }

  reset() {
    this.settings = { ...DEFAULTS };
    this.persist();
  }
}

export const settingsManager = new SettingsManager();
