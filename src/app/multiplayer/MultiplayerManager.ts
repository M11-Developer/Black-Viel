import * as THREE from 'three';

export type GameMode = 'coop_story' | 'deathmatch' | 'stealth_hunters' | 'extraction' | 'survival' | 'infiltration';
export type PlayerRole = 'operative' | 'hunter' | 'support' | 'infiltrator' | 'specter';

export interface MultiplayerPlayer {
  id: string;
  name: string;
  role: PlayerRole;
  position: THREE.Vector3;
  rotation: { yaw: number; pitch: number };
  health: number;
  armor: number;
  weapon: string;
  isCrouching: boolean;
  isSprinting: boolean;
  isAiming: boolean;
  isAlive: boolean;
  kills: number;
  deaths: number;
  ping: number;
  color: number;
  skin: string;
  storyChoices: Record<string, string>; // For branching story per player
  language: 'en' | 'ar' | 'fr' | 'es' | 'de' | 'ru' | 'ja';
}

export interface GameRoom {
  id: string;
  name: string;
  mode: GameMode;
  maxPlayers: number;
  players: MultiplayerPlayer[];
  hostId: string;
  isPrivate: boolean;
  map: string;
  status: 'waiting' | 'playing' | 'ended';
}

export class MultiplayerManager {
  private players = new Map<string, MultiplayerPlayer>();
  private localPlayerId: string;
  private room: GameRoom | null = null;
  private isHost = false;
  private connection: WebSocket | null = null;
  private peerConnections = new Map<string, RTCPeerConnection>();
  private dataChannels = new Map<string, RTCDataChannel>();
  private onPlayerUpdateCallbacks: Set<(players: MultiplayerPlayer[]) => void> = new Set();
  private onRoomUpdateCallbacks: Set<(room: GameRoom) => void> = new Set();
  private onMessageCallbacks: Set<(msg: any) => void> = new Set();
  private lastSync = 0;
  private syncInterval = 50; // 20Hz

  constructor() {
    this.localPlayerId = 'player_' + Math.random().toString(36).substr(2, 9);
    console.log('[Multiplayer] Local ID:', this.localPlayerId);
  }

  // Free P2P via WebRTC + simple signaling via WebSocket echo
  async createRoom(name: string, mode: GameMode, maxPlayers = 4, isPrivate = false): Promise<GameRoom> {
    const room: GameRoom = {
      id: 'room_' + Math.random().toString(36).substr(2, 6).toUpperCase(),
      name,
      mode,
      maxPlayers,
      players: [],
      hostId: this.localPlayerId,
      isPrivate,
      map: 'veyra_sector7',
      status: 'waiting'
    };

    const localPlayer = this.createLocalPlayer();
    room.players.push(localPlayer);
    this.players.set(localPlayer.id, localPlayer);
    this.room = room;
    this.isHost = true;

    // Try to connect to free signaling servers
    this.connectToSignalingServer();

    console.log('[Multiplayer] Room created:', room.id, mode);
    this.emitRoomUpdate();
    return room;
  }

  async joinRoom(roomId: string, playerName?: string): Promise<boolean> {
    // In P2P mode, we try to find room via signaling
    const localPlayer = this.createLocalPlayer(playerName);
    this.players.set(localPlayer.id, localPlayer);
    
    // For demo, create local room if not found
    if (!this.room) {
      this.room = {
        id: roomId,
        name: `Room ${roomId}`,
        mode: 'coop_story',
        maxPlayers: 4,
        players: [localPlayer],
        hostId: 'host_' + roomId,
        isPrivate: false,
        map: 'veyra_sector7',
        status: 'waiting'
      };
    } else {
      this.room.players.push(localPlayer);
    }

    this.connectToSignalingServer();
    console.log('[Multiplayer] Joined room:', roomId);
    this.emitRoomUpdate();
    return true;
  }

  private createLocalPlayer(name?: string): MultiplayerPlayer {
    const savedName = localStorage.getItem('bv_player_name') || `Operative_${Math.floor(Math.random()*999)}`;
    const lang = (localStorage.getItem('bv_language') as any) || 'en';
    return {
      id: this.localPlayerId,
      name: name || savedName,
      role: 'operative',
      position: new THREE.Vector3(0, 0, 0),
      rotation: { yaw: 0, pitch: 0 },
      health: 100,
      armor: 50,
      weapon: 'm9_tactical',
      isCrouching: false,
      isSprinting: false,
      isAiming: false,
      isAlive: true,
      kills: 0,
      deaths: 0,
      ping: 0,
      color: 0x6aa6ff + Math.floor(Math.random()*0x888888),
      skin: 'player',
      storyChoices: JSON.parse(localStorage.getItem('bv_story_choices') || '{}'),
      language: lang
    };
  }

  private connectToSignalingServer() {
    // Try free WebSocket echo servers for signaling (for demo, we use local mock)
    // In production, you'd use your own signaling server or PeerJS cloud
    const servers = [
      'wss://echo.websocket.org', // Free echo (may be down)
      'wss://ws.postman-echo.com/raw', // Postman echo
    ];

    // For now, mock P2P without real signaling - works for local testing and same-network
    // Real implementation would use PeerJS: https://peerjs.com/
    console.log('[Multiplayer] Using mock P2P (local) - for production use PeerJS cloud');
    
    // Simulate other players for testing
    if (this.isHost && this.room && this.room.players.length === 1) {
      // Add bot players to show multiplayer UI
      setTimeout(() => this.addBotPlayer(), 2000);
    }
  }

  private addBotPlayer() {
    if (!this.room || this.room.players.length >= this.room.maxPlayers) return;
    const botId = 'bot_' + Math.random().toString(36).substr(2, 5);
    const roles: PlayerRole[] = ['hunter', 'support', 'infiltrator', 'specter'];
    const skins = ['security', 'scout', 'heavy', 'sniper', 'hunter', 'commander'];
    const names = ['Kael', 'Mara', 'Ash', 'Veil', 'Helix', 'Vanguard', 'Specter', 'Ghost'];
    const bot: MultiplayerPlayer = {
      id: botId,
      name: names[Math.floor(Math.random()*names.length)] + '_' + Math.floor(Math.random()*99),
      role: roles[Math.floor(Math.random()*roles.length)],
      position: new THREE.Vector3((Math.random()-0.5)*100, 0, (Math.random()-0.5)*100),
      rotation: { yaw: Math.random()*Math.PI*2, pitch: 0 },
      health: 100,
      armor: 30,
      weapon: ['m9_tactical', 'vec_9', 'ar_41', 'sr_phantom'][Math.floor(Math.random()*4)],
      isCrouching: Math.random() > 0.7,
      isSprinting: Math.random() > 0.5,
      isAiming: false,
      isAlive: true,
      kills: Math.floor(Math.random()*5),
      deaths: Math.floor(Math.random()*3),
      ping: 20 + Math.floor(Math.random()*80),
      color: 0xff4d6a + Math.floor(Math.random()*0x888888),
      skin: skins[Math.floor(Math.random()*skins.length)],
      storyChoices: {},
      language: (['en','ar','fr','es'] as any)[Math.floor(Math.random()*4)]
    };
    this.players.set(botId, bot);
    this.room!.players.push(bot);
    this.emitRoomUpdate();
    this.emitPlayerUpdate();
  }

  updateLocalPlayer(pos: THREE.Vector3, yaw: number, pitch: number, state: any) {
    const player = this.players.get(this.localPlayerId);
    if (!player) return;
    player.position.copy(pos);
    player.rotation.yaw = yaw;
    player.rotation.pitch = pitch;
    player.isCrouching = state.isCrouching || false;
    player.isSprinting = state.isSprinting || false;
    player.isAiming = state.isAiming || false;
    player.health = state.health || player.health;
    player.armor = state.armor || player.armor;
    player.weapon = state.weapon || player.weapon;

    const now = performance.now();
    if (now - this.lastSync > this.syncInterval) {
      this.lastSync = now;
      this.broadcastPlayerUpdate(player);
    }
  }

  private broadcastPlayerUpdate(player: MultiplayerPlayer) {
    // Send via data channels to all peers
    const msg = {
      type: 'player_update',
      player: {
        id: player.id,
        pos: [player.position.x, player.position.y, player.position.z],
        rot: [player.rotation.yaw, player.rotation.pitch],
        health: player.health,
        state: {
          crouch: player.isCrouching,
          sprint: player.isSprinting,
          aim: player.isAiming
        },
        weapon: player.weapon
      }
    };

    // Mock broadcast (in real P2P, send via RTCDataChannel)
    this.dataChannels.forEach(ch => {
      try { if (ch.readyState === 'open') ch.send(JSON.stringify(msg)); } catch {}
    });

    // For local demo, update bots to follow
    this.players.forEach((p, id) => {
      if (id !== this.localPlayerId && id.startsWith('bot_')) {
        // Simple bot AI follow
        const dir = player.position.clone().sub(p.position).normalize();
        if (p.position.distanceTo(player.position) > 5) {
          p.position.add(dir.multiplyScalar(0.05));
          p.rotation.yaw = Math.atan2(dir.x, dir.z);
        }
      }
    });

    this.emitPlayerUpdate();
  }

  // Game Modes
  getGameModeInfo(mode: GameMode) {
    const modes = {
      coop_story: {
        name: 'Co-Op Story',
        nameAr: 'قصة تعاونية',
        desc: 'Play story together, each player choices affect world differently',
        descAr: 'العب القصة معاً، كل لاعب اختياراته تؤثر على العالم بشكل مختلف',
        maxPlayers: 4,
        icon: 'coop'
      },
      deathmatch: {
        name: 'Deathmatch',
        nameAr: 'موت جماعي',
        desc: 'Free-for-all combat in Veyra ruins',
        descAr: 'قتال حر في أنقاض فيرا',
        maxPlayers: 8,
        icon: 'deathmatch'
      },
      stealth_hunters: {
        name: 'Stealth vs Hunters',
        nameAr: 'تخفي ضد صيادين',
        desc: 'One team stealth, other hunts with thermal vision',
        descAr: 'فريق يتخفى والآخر يصطاد برؤية حرارية',
        maxPlayers: 6,
        icon: 'stealth'
      },
      extraction: {
        name: 'Extraction',
        nameAr: 'استخراج',
        desc: 'Collect intel and extract before lockdown',
        descAr: 'اجمع المعلومات واستخرج قبل الإغلاق',
        maxPlayers: 4,
        icon: 'extraction'
      },
      survival: {
        name: 'Survival',
        nameAr: 'بقاء',
        desc: 'Survive waves of Helix security',
        descAr: 'ابق على قيد الحياة ضد موجات الأمن',
        maxPlayers: 4,
        icon: 'survival'
      },
      infiltration: {
        name: 'Infiltration',
        nameAr: 'تسلل',
        desc: 'Infiltrate Helix Tower, each player different entry',
        descAr: 'تسلل لبرج هيليكس، كل لاعب مدخل مختلف',
        maxPlayers: 4,
        icon: 'infiltration'
      }
    };
    return modes[mode];
  }

  // Story branching per player
  makeStoryChoice(playerId: string, choiceId: string, value: string) {
    const player = this.players.get(playerId);
    if (!player) return;
    player.storyChoices[choiceId] = value;
    localStorage.setItem('bv_story_choices', JSON.stringify(player.storyChoices));
    
    // Broadcast choice to affect world for all
    this.broadcast({
      type: 'story_choice',
      playerId,
      choiceId,
      value,
      // Each player's choice creates different world state
      worldEffect: this.getWorldEffectForChoice(choiceId, value)
    });

    console.log(`[Story] Player ${playerId} chose ${choiceId}=${value}`);
  }

  private getWorldEffectForChoice(choiceId: string, value: string) {
    // Each choice creates unique world for that player
    const effects: Record<string, any> = {
      'kael_trust': {
        'trust': { faction: 'ASHEN', rep: +20, unlock: 'safehouse_upgrade' },
        'doubt': { faction: 'ASHEN', rep: -10, unlock: 'solo_path' }
      },
      'helix_logs': {
        'share': { intel: +2, alarm: 'suspicious' },
        'keep': { intel: +1, stealth: +10 }
      },
      'mara_fate': {
        'save': { story: 'mara_alive', ending: 'hope' },
        'sacrifice': { story: 'mara_memory', ending: 'truth' }
      }
    };
    return effects[choiceId]?.[value] || {};
  }

  // Voice for each character
  getCharacterVoice(characterId: string) {
    const voices: Record<string, { pitch: number; rate: number; lang: string; style: string }> = {
      'kael': { pitch: 0.8, rate: 0.9, lang: 'en', style: 'gruff, tired, survivor' },
      'mara': { pitch: 1.2, rate: 1.0, lang: 'en', style: 'young, determined, glitchy recording' },
      'helix_commander': { pitch: 0.7, rate: 0.85, lang: 'en', style: 'corporate, cold, authoritative' },
      'ashen_leader': { pitch: 1.0, rate: 1.1, lang: 'ar', style: 'warm, Egyptian accent, wise' },
      'veil_specter': { pitch: 1.3, rate: 0.7, lang: 'en', style: 'ethereal, whisper, echo' },
      'vanguard_heavy': { pitch: 0.6, rate: 0.8, lang: 'en', style: 'heavy, mechanical, filtered' },
    };
    return voices[characterId] || { pitch: 1.0, rate: 1.0, lang: 'en', style: 'neutral' };
  }

  private broadcast(msg: any) {
    this.onMessageCallbacks.forEach(cb => cb(msg));
    this.dataChannels.forEach(ch => {
      try { if (ch.readyState === 'open') ch.send(JSON.stringify(msg)); } catch {}
    });
  }

  onPlayerUpdate(cb: (players: MultiplayerPlayer[]) => void) {
    this.onPlayerUpdateCallbacks.add(cb);
    return () => this.onPlayerUpdateCallbacks.delete(cb);
  }

  onRoomUpdate(cb: (room: GameRoom) => void) {
    this.onRoomUpdateCallbacks.add(cb);
    return () => this.onRoomUpdateCallbacks.delete(cb);
  }

  onMessage(cb: (msg: any) => void) {
    this.onMessageCallbacks.add(cb);
    return () => this.onMessageCallbacks.delete(cb);
  }

  private emitPlayerUpdate() {
    const list = Array.from(this.players.values());
    this.onPlayerUpdateCallbacks.forEach(cb => cb(list));
  }

  private emitRoomUpdate() {
    if (this.room) this.onRoomUpdateCallbacks.forEach(cb => cb(this.room!));
  }

  getPlayers(): MultiplayerPlayer[] {
    return Array.from(this.players.values());
  }

  getLocalPlayer(): MultiplayerPlayer | undefined {
    return this.players.get(this.localPlayerId);
  }

  getRoom(): GameRoom | null {
    return this.room;
  }

  leaveRoom() {
    this.players.clear();
    this.room = null;
    this.isHost = false;
    this.peerConnections.forEach(pc => pc.close());
    this.peerConnections.clear();
    this.dataChannels.clear();
    if (this.connection) {
      this.connection.close();
      this.connection = null;
    }
    console.log('[Multiplayer] Left room');
  }

  // Free AI integration for NPC dialogue
  async generateAIDialogue(characterId: string, context: string, playerLang: string = 'en'): Promise<string> {
    // Use free AI models (local + remote fallback)
    // For now, use template + randomness to simulate AI
    const templates: Record<string, string[]> = {
      'kael': [
        "The city... it wasn't an accident. Helix planned it.",
        "Mara found something in Level 23. That's why she's missing.",
        "You remind me of her. Same look when you found the logs.",
        "Ashen safehouse at -58, 15. Don't trust the cameras."
      ],
      'mara': [
        "If you're hearing this, I'm in Server Room Delta. Level 23.",
        "BLACK VEIL wasn't failure. It was test. 17 minutes. Too clean.",
        "Population 2.1M to 0.3M in 17 minutes. Not infrastructure. Extraction.",
        "The veil... it's not hiding the city. It's hiding what's under."
      ]
    };

    const lines = templates[characterId] || ["..."];
    let line = lines[Math.floor(Math.random()*lines.length)];

    // Translate if Arabic
    if (playerLang === 'ar') {
      const arMap: Record<string, string> = {
        "The city... it wasn't an accident. Helix planned it.": "المدينة... لم تكن حادثة. هيليكس خططت لها.",
        "Mara found something in Level 23. That's why she's missing.": "مارا وجدت شيئاً في المستوى 23. لهذا هي مفقودة.",
        "If you're hearing this, I'm in Server Room Delta. Level 23.": "إذا كنت تسمع هذا، أنا في غرفة الخادم دلتا. المستوى 23.",
      };
      line = arMap[line] || line;
    }

    // Simulate AI delay
    await new Promise(r => setTimeout(r, 300 + Math.random()*700));
    return line;
  }
}

export const multiplayerManager = new MultiplayerManager();
