import { GameMode } from '../multiplayer/MultiplayerManager';

export interface GameModeConfig {
  id: GameMode;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  maxPlayers: number;
  minPlayers: number;
  duration: number; // minutes
  objectives: string[];
  objectivesAr: string[];
  map: string;
  allowedWeapons: string[];
  hasRespawn: boolean;
  isCoop: boolean;
  isPvP: boolean;
  storyDriven: boolean;
  iconSvg: string; // SVG path, not emoji
  color: string;
}

export const GAME_MODES: Record<GameMode, GameModeConfig> = {
  coop_story: {
    id: 'coop_story',
    name: 'Co-Op Story',
    nameAr: 'قصة تعاونية',
    description: 'Play story together, each player choices affect world differently. Branching narrative, each player unique path.',
    descriptionAr: 'العب القصة معاً، كل لاعب اختياراته تؤثر على العالم بشكل مختلف. قصة متفرعة، كل لاعب مسار فريد.',
    maxPlayers: 4,
    minPlayers: 1,
    duration: 45,
    objectives: ['infiltrate_helix', 'find_mara', 'restore_power', 'extract_truth'],
    objectivesAr: ['تسلل هيليكس', 'اعثر على مارا', 'استعد الطاقة', 'استخرج الحقيقة'],
    map: 'veyra_sector7',
    allowedWeapons: ['all'],
    hasRespawn: true,
    isCoop: true,
    isPvP: false,
    storyDriven: true,
    iconSvg: '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>',
    color: '#6aa6ff'
  },
  deathmatch: {
    id: 'deathmatch',
    name: 'Deathmatch',
    nameAr: 'موت جماعي',
    description: 'Free-for-all combat in Veyra ruins. No teams, only survival.',
    descriptionAr: 'قتال حر في أنقاض فيرا. لا فرق، فقط البقاء.',
    maxPlayers: 8,
    minPlayers: 2,
    duration: 10,
    objectives: ['eliminate_enemies', 'survive'],
    objectivesAr: ['اقض على الأعداء', 'ابق على قيد الحياة'],
    map: 'veyra_central',
    allowedWeapons: ['all'],
    hasRespawn: true,
    isCoop: false,
    isPvP: true,
    storyDriven: false,
    iconSvg: '<circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/>',
    color: '#ff4d6a'
  },
  stealth_hunters: {
    id: 'stealth_hunters',
    name: 'Stealth vs Hunters',
    nameAr: 'تخفي ضد صيادين',
    description: 'One team stealth operatives, other team hunters with thermal vision and trackers.',
    descriptionAr: 'فريق عملاء متخفين وفريق صيادين برؤية حرارية ومتتبعات.',
    maxPlayers: 6,
    minPlayers: 2,
    duration: 15,
    objectives: ['stay_hidden', 'hunt_operatives', 'extract_intel'],
    objectivesAr: ['ابق مخفياً', 'اصطاد العملاء', 'استخرج المعلومات'],
    map: 'veyra_industrial',
    allowedWeapons: ['silenced', 'melee'],
    hasRespawn: false,
    isCoop: false,
    isPvP: true,
    storyDriven: true,
    iconSvg: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    color: '#4ade80'
  },
  extraction: {
    id: 'extraction',
    name: 'Extraction',
    nameAr: 'استخراج',
    description: 'Collect intel and extract before Helix lockdown. Risk vs reward.',
    descriptionAr: 'اجمع المعلومات واستخرج قبل إغلاق هيليكس. مخاطرة مقابل مكافأة.',
    maxPlayers: 4,
    minPlayers: 1,
    duration: 20,
    objectives: ['collect_intel', 'avoid_detection', 'reach_extraction', 'survive_lockdown'],
    objectivesAr: ['اجمع المعلومات', 'تجنب الكشف', 'اصل لنقطة الاستخراج', 'انج من الإغلاق'],
    map: 'veyra_corporate',
    allowedWeapons: ['silenced', 'smg', 'pistol'],
    hasRespawn: false,
    isCoop: true,
    isPvP: false,
    storyDriven: true,
    iconSvg: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    color: '#fbbf24'
  },
  survival: {
    id: 'survival',
    name: 'Survival',
    nameAr: 'بقاء',
    description: 'Survive waves of Helix security. Each wave harder, new enemy types.',
    descriptionAr: 'ابق على قيد الحياة ضد موجات أمن هيليكس. كل موجة أصعب.',
    maxPlayers: 4,
    minPlayers: 1,
    duration: 30,
    objectives: ['survive_waves', 'defend_position', 'conserve_ammo'],
    objectivesAr: ['انج من الموجات', 'دافع عن الموقع', 'حافظ على الذخيرة'],
    map: 'veyra_checkpoint',
    allowedWeapons: ['all'],
    hasRespawn: true,
    isCoop: true,
    isPvP: false,
    storyDriven: false,
    iconSvg: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    color: '#a78bfa'
  },
  infiltration: {
    id: 'infiltration',
    name: 'Infiltration',
    nameAr: 'تسلل',
    description: 'Infiltrate Helix Tower, each player different entry: rooftop, sewer, lobby, vent.',
    descriptionAr: 'تسلل لبرج هيليكس، كل لاعب مدخل مختلف: سطح، مجاري، بهو، تهوية.',
    maxPlayers: 4,
    minPlayers: 1,
    duration: 25,
    objectives: ['choose_entry', 'avoid_cameras', 'hack_terminals', 'reach_server_room'],
    objectivesAr: ['اختر المدخل', 'تجنب الكاميرات', 'اخترق الأجهزة', 'اصل لغرفة الخادم'],
    map: 'helix_tower',
    allowedWeapons: ['silenced', 'melee', 'hacking_tool'],
    hasRespawn: false,
    isCoop: true,
    isPvP: false,
    storyDriven: true,
    iconSvg: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
    color: '#00e5ff'
  }
};

export class GameModeManager {
  private currentMode: GameMode = 'coop_story';
  private modeStartTime = 0;
  private objectivesCompleted: Set<string> = new Set();

  setMode(mode: GameMode) {
    this.currentMode = mode;
    this.modeStartTime = performance.now();
    this.objectivesCompleted.clear();
    console.log(`[GameMode] Set to ${mode}: ${GAME_MODES[mode].name}`);
  }

  getCurrentMode(): GameModeConfig {
    return GAME_MODES[this.currentMode];
  }

  getCurrentModeId(): GameMode {
    return this.currentMode;
  }

  completeObjective(id: string) {
    this.objectivesCompleted.add(id);
    console.log(`[GameMode] Objective completed: ${id} (${this.objectivesCompleted.size}/${this.getCurrentMode().objectives.length})`);
  }

  isObjectiveCompleted(id: string): boolean {
    return this.objectivesCompleted.has(id);
  }

  getProgress(): number {
    const total = this.getCurrentMode().objectives.length;
    return total > 0 ? this.objectivesCompleted.size / total : 0;
  }

  getRemainingTime(): number {
    const elapsed = (performance.now() - this.modeStartTime) / 60000; // minutes
    return Math.max(0, this.getCurrentMode().duration - elapsed);
  }

  isModeCompleted(): boolean {
    return this.getProgress() >= 1 || this.getRemainingTime() <= 0;
  }

  getAllModes(): GameModeConfig[] {
    return Object.values(GAME_MODES);
  }

  getCoopModes(): GameModeConfig[] {
    return Object.values(GAME_MODES).filter(m => m.isCoop);
  }

  getPvPModes(): GameModeConfig[] {
    return Object.values(GAME_MODES).filter(m => m.isPvP);
  }

  getStoryModes(): GameModeConfig[] {
    return Object.values(GAME_MODES).filter(m => m.storyDriven);
  }
}

export const gameModeManager = new GameModeManager();
