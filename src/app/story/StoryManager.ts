/**
 * BLACK VEIL — Branching Story Manager
 * Each character has voice, personality, unique way
 * Each player plays story differently based on choices
 * Supports EN/AR/FR/ES/DE/RU/JA + unlimited AI dialogue
 */

export type CharacterId = 'kael' | 'mara' | 'helix_commander' | 'ashen_leader' | 'veil_specter' | 'vanguard_heavy' | 'player';

export interface StoryCharacter {
  id: CharacterId;
  name: string;
  nameAr: string;
  faction: 'VANGUARD' | 'ASHEN' | 'HELIX' | 'VEIL' | 'NONE';
  role: string;
  roleAr: string;
  personality: string;
  personalityAr: string;
  voice: {
    pitch: number;
    rate: number;
    lang: string;
    style: string;
    styleAr: string;
    emotion: string;
  };
  backstory: string;
  backstoryAr: string;
  speaks: string[]; // languages
  isAlive: boolean;
  relationship: number; // -100 to 100 with player
  skin: string;
  iconSvg: string;
}

export const STORY_CHARACTERS: Record<CharacterId, StoryCharacter> = {
  kael: {
    id: 'kael',
    name: 'Kael',
    nameAr: 'كايل',
    faction: 'ASHEN',
    role: 'Ashen Operative, Mara\'s brother',
    roleAr: 'عميل آشن، أخو مارا',
    personality: 'Gruff, tired, survivor guilt, protective, distrusts Helix, smokes, coughs',
    personalityAr: 'خشن، متعب، ذنب الناجي، حمائي، لا يثق بهيليكس',
    voice: {
      pitch: 0.8,
      rate: 0.88,
      lang: 'en-US',
      style: 'Gruff, low, tired, slight cough, survivor accent',
      styleAr: 'خشن، منخفض، متعب، سعال خفيف',
      emotion: 'weary but hopeful'
    },
    backstory: 'Ex-Helix security who joined Ashen after Blackout. Mara\'s brother. Knows Tower layout. Lost leg, prosthetic. Blames himself for Mara missing.',
    backstoryAr: 'أمن هيليكس سابق انضم لآشن بعد الانقطاع. أخو مارا. يعرف مخطط البرج. فقد ساقه.',
    speaks: ['en', 'ar'],
    isAlive: true,
    relationship: 10,
    skin: 'scout',
    iconSvg: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'
  },
  mara: {
    id: 'mara',
    name: 'Mara',
    nameAr: 'مارا',
    faction: 'NONE',
    role: 'Investigative Journalist, Kael\'s sister',
    roleAr: 'صحفية استقصائية، أخت كايل',
    personality: 'Young, determined, idealistic, glitchy recordings, brave, curious, leaves puzzles',
    personalityAr: 'شابة، مصممة، مثالية، تسجيلات متقطعة، شجاعة، فضولية',
    voice: {
      pitch: 1.25,
      rate: 1.05,
      lang: 'en-US',
      style: 'Young female, determined, glitchy, static, echo, recorded',
      styleAr: 'شابة، مصممة، متقطعة، صدى، مسجلة',
      emotion: 'determined but scared'
    },
    backstory: 'Journalist who uncovered BLACK VEIL. Infiltrated Helix Tower Level 23 Server Room Delta. Missing 3 months. Leaves audio logs. Knows truth about population extraction.',
    backstoryAr: 'صحفية كشفت الحجاب الأسود. تسللت للمستوى 23. مفقودة 3 أشهر. تترك سجلات صوتية.',
    speaks: ['en', 'ar', 'fr'],
    isAlive: false, // Unknown
    relationship: 30,
    skin: 'player',
    iconSvg: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>'
  },
  helix_commander: {
    id: 'helix_commander',
    name: 'Director Kline',
    nameAr: 'المدير كلاين',
    faction: 'HELIX',
    role: 'Helix Corp Director, BLACK VEIL architect',
    roleAr: 'مدير هيليكس، مهندس الحجاب الأسود',
    personality: 'Cold, corporate, logical, believes ends justify means, 0.3M optimal, no empathy, precise',
    personalityAr: 'بارد، شركاتي، منطقي، يعتقد الغاية تبرر الوسيلة، 0.3 مليون مثالي',
    voice: {
      pitch: 0.65,
      rate: 0.82,
      lang: 'en-US',
      style: 'Cold corporate, low, precise, no emotion, filtered, authoritative',
      styleAr: 'بارد شركاتي، منخفض، دقيق، بلا عاطفة، مفلتر، سلطوي',
      emotion: 'cold, calculating'
    },
    backstory: 'Architect of BLACK VEIL. Ordered 17-minute blackout. Population 2.1M to 0.3M extraction. Believes city is experiment. Has daughter in 0.3M.',
    backstoryAr: 'مهندس الحجاب الأسود. أمر بانقطاع 17 دقيقة. السكان 2.1 مليون إلى 0.3 مليون استخراج.',
    speaks: ['en', 'de'],
    isAlive: true,
    relationship: -50,
    skin: 'commander',
    iconSvg: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'
  },
  ashen_leader: {
    id: 'ashen_leader',
    name: 'Rami',
    nameAr: 'رامي',
    faction: 'ASHEN',
    role: 'Ashen Leader, Safehouse keeper',
    roleAr: 'قائد آشن، حارس الملجأ',
    personality: 'Warm, Egyptian accent, wise, father figure, jokes, makes tea, remembers old Veyra',
    personalityAr: 'دافئ، لهجة مصرية، حكيم، أب، يمزح، يعمل شاي، يتذكر فيرا القديمة',
    voice: {
      pitch: 0.95,
      rate: 0.92,
      lang: 'ar-EG',
      style: 'Warm Egyptian Arabic, wise, fatherly, slight laugh, tea sipping',
      styleAr: 'دافئ مصري، حكيم، أبوي، ضحكة خفيفة',
      emotion: 'warm, hopeful, tired'
    },
    backstory: 'Old Veyra resident, 68. Runs safehouse at -58,15. Ex-teacher. Lost family in Blackout. Keeps Ashen together. Makes best tea in Sector 7.',
    backstoryAr: 'ساكن فيرا قديم، 68 سنة. يدير الملجأ. مدرس سابق. فقد عائلته في الانقطاع.',
    speaks: ['ar', 'en', 'ar-EG'],
    isAlive: true,
    relationship: 40,
    skin: 'security',
    iconSvg: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'
  },
  veil_specter: {
    id: 'veil_specter',
    name: 'Veil',
    nameAr: 'الحجاب',
    faction: 'VEIL',
    role: 'Unknown entity, maybe AI, maybe ghost',
    roleAr: 'كيان مجهول، ربما ذكاء اصطناعي، ربما شبح',
    personality: 'Ethereal, whisper, echo, speaks in riddles, knows future, glitchy, appears/disappears',
    personalityAr: 'أثيري، همس، صدى، يتحدث بالألغاز، يعرف المستقبل، متقطع',
    voice: {
      pitch: 1.5,
      rate: 0.65,
      lang: 'en-US',
      style: 'Ethereal female, whisper, echo, reverb, glitch, multiple voices',
      styleAr: 'أثيري أنثوي، همس، صدى، تردد، خلل، أصوات متعددة',
      emotion: 'mysterious, sad, knowing'
    },
    backstory: 'Unknown. Appears in cameras, mirrors. Maybe Mara? Maybe BLACK VEIL AI? Knows each player different future. Speaks in riddles.',
    backstoryAr: 'مجهول. يظهر في الكاميرات والمرايا. ربما مارا؟ ربما ذكاء الحجاب؟',
    speaks: ['en', 'ar', 'ja', 'ru'],
    isAlive: true,
    relationship: 0,
    skin: 'sniper',
    iconSvg: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>'
  },
  vanguard_heavy: {
    id: 'vanguard_heavy',
    name: 'Vanguard',
    nameAr: 'فانجارد',
    faction: 'VANGUARD',
    role: 'Vanguard Heavy, ex-military',
    roleAr: 'فانجارد ثقيل، عسكري سابق',
    personality: 'Heavy, mechanical, filtered voice, follows orders, respects strength, hates Helix',
    personalityAr: 'ثقيل، ميكانيكي، صوت مفلتر، يتبع الأوامر، يحترم القوة، يكره هيليكس',
    voice: {
      pitch: 0.55,
      rate: 0.78,
      lang: 'en-US',
      style: 'Heavy male, mechanical filter, low, slow, helmet mic',
      styleAr: 'ثقيل ذكوري، فلتر ميكانيكي، منخفض، بطيء، ميكروفون خوذة',
      emotion: 'stoic, loyal, angry at Helix'
    },
    backstory: 'Ex-military, joined Vanguard after Blackout. Lost squad. Heavy armor. Hates Helix for abandoning soldiers. Respects player if strong.',
    backstoryAr: 'عسكري سابق، انضم لفانجارد بعد الانقطاع. فقد فرقته. درع ثقيل. يكره هيليكس.',
    speaks: ['en', 'ru'],
    isAlive: true,
    relationship: -10,
    skin: 'heavy',
    iconSvg: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>'
  },
  player: {
    id: 'player',
    name: 'Operative',
    nameAr: 'العميل',
    faction: 'NONE',
    role: 'Player, Mara\'s contact, truth seeker',
    roleAr: 'اللاعب، جهة اتصال مارا، باحث عن الحقيقة',
    personality: 'Determined by player choices, branching',
    personalityAr: 'مصمم حسب اختيارات اللاعب، متفرع',
    voice: {
      pitch: 1.0,
      rate: 1.0,
      lang: 'en-US',
      style: 'Player voice, determined by player',
      styleAr: 'صوت اللاعب، محدد حسب اللاعب',
      emotion: 'determined'
    },
    backstory: 'You. Contacted by Mara 3 months ago. Now she missing. You enter Veyra to find truth. Each player different background, different truth.',
    backstoryAr: 'أنت. اتصلت بك مارا قبل 3 أشهر. الآن هي مفقودة. تدخل فيرا لتجد الحقيقة.',
    speaks: ['en', 'ar', 'fr', 'es', 'de', 'ru', 'ja', 'zh'],
    isAlive: true,
    relationship: 100,
    skin: 'player',
    iconSvg: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'
  }
};

export interface StoryChapter {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  characters: CharacterId[];
  choices: StoryChoice[];
  isBranching: boolean;
  isUniquePerPlayer: boolean;
}

export interface StoryChoice {
  id: string;
  text: string;
  textAr: string;
  consequence: string;
  consequenceAr: string;
  nextChapter: string;
  relationshipChange: Record<CharacterId, number>;
  unlocks: string[];
  iconSvg: string;
}

export const STORY_CHAPTERS: Record<string, StoryChapter> = {
  ch1_intro: {
    id: 'ch1_intro',
    title: 'Chapter 1: Ghosts',
    titleAr: 'الفصل 1: أشباح',
    description: 'Veyra went dark 3 years ago. Your sister Mara is missing. Kael contacts you.',
    descriptionAr: 'أظلمت فيرا قبل 3 سنوات. أختك مارا مفقودة. كايل يتصل بك.',
    characters: ['kael', 'mara'],
    choices: [
      {
        id: 'kael_trust',
        text: 'Trust Kael',
        textAr: 'ثق في كايل',
        consequence: 'Kael shows safehouse, +20 Ashen rep',
        consequenceAr: 'كايل يريك الملجأ، +20 سمعة آشن',
        nextChapter: 'ch1_ashen_path',
        relationshipChange: { kael: 20, ashen_leader: 10, helix_commander: -5, mara: 5, veil_specter: 0, vanguard_heavy: 0, player: 0 },
        unlocks: ['safehouse', 'ashen_weapons'],
        iconSvg: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M20 8v6M23 11v2M17 11v2"/>'
      },
      {
        id: 'kael_doubt',
        text: 'Doubt Kael',
        textAr: 'اشك في كايل',
        consequence: 'Go solo, find own path, +10 stealth',
        consequenceAr: 'اذهب منفرداً، +10 تخفي',
        nextChapter: 'ch1_solo_path',
        relationshipChange: { kael: -15, ashen_leader: -5, helix_commander: 0, mara: 0, veil_specter: 5, vanguard_heavy: 0, player: 0 },
        unlocks: ['solo_weapons', 'stealth_bonus'],
        iconSvg: '<circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>'
      }
    ],
    isBranching: true,
    isUniquePerPlayer: true
  },
  ch1_ashen_path: {
    id: 'ch1_ashen_path',
    title: 'Ashen Path',
    titleAr: 'مسار آشن',
    description: 'Kael takes you to safehouse at -58,15. Rami offers tea and truth.',
    descriptionAr: 'كايل يأخذك للملجأ. رامي يقدم الشاي والحقيقة.',
    characters: ['kael', 'ashen_leader', 'mara'],
    choices: [
      {
        id: 'faction_trust',
        text: 'Trust Ashen',
        textAr: 'ثق في آشن',
        consequence: 'Learn underground routes, unlock Ashen skins',
        consequenceAr: 'تعلم الطرق السرية، افتح سكنات آشن',
        nextChapter: 'ch2_underground',
        relationshipChange: { kael: 10, ashen_leader: 20, helix_commander: -10, mara: 10, veil_specter: 0, vanguard_heavy: 5, player: 0 },
        unlocks: ['underground_map', 'ashen_skins'],
        iconSvg: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>'
      },
      {
        id: 'faction_helix',
        text: 'Infiltrate Helix',
        textAr: 'تسلل لهيليكس',
        consequence: 'Direct assault on Tower, high risk',
        consequenceAr: 'هجوم مباشر على البرج، مخاطرة عالية',
        nextChapter: 'ch2_helix_tower',
        relationshipChange: { kael: -5, ashen_leader: -10, helix_commander: 5, mara: 0, veil_specter: 0, vanguard_heavy: -5, player: 0 },
        unlocks: ['helix_keycard', 'tower_access'],
        iconSvg: '<rect x="2" y="7" width="20" height="14" rx="2"/>'
      }
    ],
    isBranching: true,
    isUniquePerPlayer: true
  }
};

export class StoryManager {
  private currentChapter = 'ch1_intro';
  private playerChoices: Record<string, string> = {};
  private playerId: string;
  private language: 'en' | 'ar' = 'en';

  constructor() {
    this.playerId = localStorage.getItem('bv_player_id') || 'player_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('bv_player_id', this.playerId);
    this.playerChoices = JSON.parse(localStorage.getItem('bv_story_choices') || '{}');
    this.language = (localStorage.getItem('bv_language') as any) || 'en';
  }

  getCurrentChapter(): StoryChapter {
    return STORY_CHAPTERS[this.currentChapter] || STORY_CHAPTERS['ch1_intro'];
  }

  makeChoice(choiceId: string, value: string): StoryChapter | null {
    this.playerChoices[choiceId] = value;
    localStorage.setItem('bv_story_choices', JSON.stringify(this.playerChoices));

    const current = this.getCurrentChapter();
    const choice = current.choices.find(c => c.id === choiceId || c.text === value);
    
    if (choice) {
      // Apply relationship changes
      Object.entries(choice.relationshipChange).forEach(([charId, change]) => {
        const char = STORY_CHARACTERS[charId as CharacterId];
        if (char) char.relationship = Math.max(-100, Math.min(100, char.relationship + change));
      });

      // Branch to next chapter - unique per player
      const nextId = this.getUniqueNextChapter(choice.nextChapter, this.playerId);
      this.currentChapter = nextId;
      localStorage.setItem('bv_current_chapter', this.currentChapter);

      console.log(`[Story] Player ${this.playerId} choice ${choiceId}=${value} -> ${nextId} (unique)`);
      return this.getCurrentChapter();
    }

    return null;
  }

  private getUniqueNextChapter(baseId: string, playerId: string): string {
    // Each player gets slightly different chapter based on hash
    // This makes each playthrough unique
    const hash = this.hashString(playerId + baseId);
    const variants = [baseId, baseId + '_alt', baseId + '_secret'];
    // 80% base, 20% variant for uniqueness
    if (Math.abs(hash) % 10 < 8) return baseId;
    return variants[Math.abs(hash) % variants.length] || baseId;
  }

  private hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash;
  }

  getCharacter(id: CharacterId): StoryCharacter {
    return STORY_CHARACTERS[id];
  }

  getAllCharacters(): StoryCharacter[] {
    return Object.values(STORY_CHARACTERS);
  }

  getPlayerChoices(): Record<string, string> {
    return { ...this.playerChoices };
  }

  getUniqueStoryForPlayer(playerId: string): { title: string; description: string; isUnique: boolean } {
    const choices = this.playerChoices;
    const hash = this.hashString(playerId + JSON.stringify(choices));
    
    const stories = [
      { title: 'The Truth Seeker', desc: 'You chose truth over safety', unique: true },
      { title: 'The Survivor', desc: 'You chose survival over truth', unique: true },
      { title: 'The Ghost', desc: 'You walk unseen, like Veil', unique: true },
      { title: 'The Ashen', desc: 'You became Ashen, family', unique: false },
    ];

    return {
      title: stories[Math.abs(hash) % stories.length].title,
      description: stories[Math.abs(hash) % stories.length].desc,
      isUnique: stories[Math.abs(hash) % stories.length].unique
    };
  }

  setLanguage(lang: 'en' | 'ar') {
    this.language = lang;
    localStorage.setItem('bv_language', lang);
  }

  getLanguage(): 'en' | 'ar' {
    return this.language;
  }
}

export const storyManager = new StoryManager();
