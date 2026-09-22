import { multiplayerManager, GameMode } from '../multiplayer/MultiplayerManager';
import { gameModeManager } from '../game/GameModes';
import { freeAIModels } from '../ai/FreeAIModels';
import { createIconElement } from './IconSystem';

export class MultiplayerUI {
  private container: HTMLElement;
  private isVisible = false;

  constructor() {
    this.container = document.createElement('div');
    this.container.id = 'multiplayer-ui';
    this.container.style.cssText = `position:fixed;inset:0;z-index:15;background:rgba(5,5,8,0.95);backdrop-filter:blur(20px);display:none;overflow-y:auto;padding:20px;`;
    document.body.appendChild(this.container);
    this.createStyles();
    this.bindEvents();
  }

  private createStyles() {
    const style = document.createElement('style');
    style.textContent = `
      #multiplayer-ui { font-family:'JetBrains Mono',monospace; }
      .mp-header { text-align:center; padding:20px 0; border-bottom:1px solid rgba(255,255,255,0.06); margin-bottom:20px; }
      .mp-logo { font-family:'Orbitron',sans-serif; font-size:24px; font-weight:900; letter-spacing:0.15em; }
      .mp-logo span { color:#6aa6ff; }
      .mp-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px; max-width:1200px; margin:0 auto; }
      .mp-card { background:rgba(15,15,20,0.9); border:1px solid rgba(255,255,255,0.08); border-radius:16px; padding:16px; backdrop-filter:blur(20px); }
      .mp-card h3 { font-family:'Orbitron',sans-serif; font-size:12px; letter-spacing:0.12em; margin-bottom:12px; display:flex; align-items:center; gap:8px; }
      .mp-mode { background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:12px; cursor:pointer; transition:all 0.15s; margin-bottom:8px; }
      .mp-mode:hover { border-color:rgba(106,166,255,0.3); background:rgba(106,166,255,0.08); }
      .mp-mode.selected { border-color:#6aa6ff; background:rgba(106,166,255,0.15); }
      .mp-mode h4 { font-size:11px; font-family:'Orbitron',sans-serif; display:flex; align-items:center; gap:8px; }
      .mp-mode p { font-size:9px; opacity:0.6; margin-top:6px; line-height:1.5; }
      .mp-btn { width:100%; background:linear-gradient(135deg,#6aa6ff,#8b5cf6); border:none; border-radius:12px; padding:12px; color:#fff; font-family:'Orbitron',sans-serif; font-weight:700; font-size:11px; letter-spacing:0.1em; cursor:pointer; margin:6px 0; }
      .mp-btn.secondary { background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); }
      .mp-btn:active { transform:scale(0.98); }
      .mp-player { display:flex; align-items:center; gap:10px; padding:8px; background:rgba(0,0,0,0.3); border-radius:10px; margin:6px 0; border:1px solid rgba(255,255,255,0.04); }
      .mp-player .avatar { width:32px; height:32px; border-radius:50%; background:linear-gradient(135deg,#6aa6ff,#8b5cf6); display:flex; align-items:center; justify-content:center; font-size:12px; }
      .mp-player .info { flex:1; }
      .mp-player .name { font-size:11px; font-weight:600; }
      .mp-player .role { font-size:8px; opacity:0.5; }
      .mp-input { width:100%; background:rgba(0,0,0,0.5); border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:10px 12px; color:#fff; font-family:'JetBrains Mono',monospace; font-size:11px; margin:6px 0; }
    `;
    document.head.appendChild(style);
  }

  show() {
    this.isVisible = true;
    this.container.style.display = 'block';
    this.render();
  }

  hide() {
    this.isVisible = false;
    this.container.style.display = 'none';
  }

  private render() {
    const modes = gameModeManager.getAllModes();
    const room = multiplayerManager.getRoom();
    const players = multiplayerManager.getPlayers();
    const aiModels = freeAIModels.getUnlimitedModels();

    this.container.innerHTML = `
      <div class="mp-header">
        <div class="mp-logo">BLACK <span>VEIL</span> — MULTIPLAYER</div>
        <div style="font-size:10px;opacity:0.5;margin-top:8px;letter-spacing:0.15em">6 MODES • P2P WEBRTC • FREE AI UNLIMITED • EACH PLAYER UNIQUE STORY</div>
        <button class="mp-btn secondary" style="width:auto;padding:8px 16px;margin-top:12px" onclick="document.getElementById('multiplayer-ui').style.display='none'">✕ CLOSE</button>
      </div>

      <div class="mp-grid">
        <div class="mp-card">
          <h3>${this.getIcon('coop')} GAME MODES — 6 أوضاع مختلفة</h3>
          ${modes.map(m => `
            <div class="mp-mode ${gameModeManager.getCurrentModeId()===m.id?'selected':''}" data-mode="${m.id}">
              <h4><span style="color:${m.color}">${this.getIconSvg(m.id)}</span> ${m.name} / ${m.nameAr}</h4>
              <p>${m.description}</p>
              <p style="opacity:0.4">Players: ${m.minPlayers}-${m.maxPlayers} • ${m.duration}min • ${m.isCoop?'Coop':'PvP'} ${m.storyDriven?'• Story':''}</p>
            </div>
          `).join('')}
        </div>

        <div class="mp-card">
          <h3>${this.getIcon('server')} ROOM — ${room ? room.id : 'No Room'}</h3>
          ${room ? `
            <div style="font-size:10px;opacity:0.6;margin-bottom:12px">
              Mode: ${room.mode} • Map: ${room.map} • ${room.players.length}/${room.maxPlayers} players<br>
              Status: ${room.status} • ${room.isPrivate?'Private':'Public'}
            </div>
            <div>
              ${players.map(p => `
                <div class="mp-player">
                  <div class="avatar" style="background:${this.colorToGradient(p.color)}">${p.name[0]}</div>
                  <div class="info">
                    <div class="name">${p.name} ${p.id===multiplayerManager.getLocalPlayer()?.id?'(YOU)':''}</div>
                    <div class="role">${p.role} • ${p.skin} • ${p.language} • ${p.health}HP • Ping ${p.ping}ms</div>
                  </div>
                  <div style="font-size:8px;opacity:0.4">${p.kills}K/${p.deaths}D</div>
                </div>
              `).join('')}
            </div>
            <button class="mp-btn secondary" onclick="window.mpLeave()">LEAVE ROOM</button>
            <button class="mp-btn" onclick="window.mpStart()">START GAME</button>
          ` : `
            <input class="mp-input" id="mp-player-name" placeholder="Your name (e.g. Operative_7)" value="${localStorage.getItem('bv_player_name')||''}">
            <input class="mp-input" id="mp-room-name" placeholder="Room name (e.g. Veyra Squad)">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:8px 0">
              <button class="mp-btn" onclick="window.mpCreate()">CREATE ROOM</button>
              <button class="mp-btn secondary" onclick="window.mpJoinPrompt()">JOIN ROOM</button>
            </div>
            <div style="font-size:9px;opacity:0.5;line-height:1.5;margin-top:8px">
              P2P WebRTC — No server needed for local. For internet, uses free PeerJS cloud.<br>
              Each player story branching unique — your choices affect world differently.
            </div>
          `}
        </div>

        <div class="mp-card">
          <h3>${this.getIcon('trophy')} FREE AI MODELS — Unlimited</h3>
          <div style="font-size:9px;opacity:0.6;margin-bottom:10px">Local unlimited, no API key needed for basic. Runs in browser.</div>
          ${aiModels.map(m => `
            <div style="background:rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.04);border-radius:8px;padding:8px;margin:6px 0">
              <div style="font-size:10px;font-weight:600;display:flex;align-items:center;gap:6px">
                <span style="width:6px;height:6px;border-radius:50%;background:${m.isLocal?'#4ade80':'#fbbf24'};display:inline-block"></span>
                ${m.name} ${m.isUnlimited?'• UNLIMITED':''}
              </div>
              <div style="font-size:8px;opacity:0.5;margin-top:4px">${m.description}</div>
              <div style="font-size:7px;opacity:0.4;margin-top:2px">${m.provider} • ${m.languages.join(', ')}</div>
            </div>
          `).join('')}
          <button class="mp-btn secondary" onclick="window.mpTestAI()">TEST AI DIALOGUE</button>
          <div id="mp-ai-output" style="background:rgba(0,0,0,0.5);border-radius:8px;padding:8px;margin-top:8px;font-size:9px;min-height:40px;opacity:0.8"></div>
        </div>

        <div class="mp-card">
          <h3>${this.getIcon('intel')} STORY — Each Player Different</h3>
          <div style="font-size:9px;line-height:1.6;opacity:0.7">
            Each character has voice, personality, unique way. Each player plays story differently.<br><br>
            <b>Kael:</b> Gruff, tired, Egyptian survivor, cough<br>
            <b>Mara:</b> Young, glitchy recording, determined<br>
            <b>Kline:</b> Cold corporate, low, precise<br>
            <b>Rami:</b> Warm Egyptian Arabic, wise, tea<br>
            <b>Veil:</b> Ethereal whisper, echo, riddles<br>
            <b>Vanguard:</b> Heavy mechanical, helmet mic<br><br>
            Your choices: kael_trust, faction_trust, mara_fate, helix_logs, background — each creates unique world.<br>
            Uses Web Speech API for voice (free unlimited, supports AR/EN/FR/ES/DE/RU/JA)
          </div>
          <button class="mp-btn secondary" onclick="window.mpTestVoice()">TEST CHARACTER VOICES</button>
        </div>
      </div>
    `;

    // Bind mode selection
    this.container.querySelectorAll('.mp-mode').forEach(el => {
      el.addEventListener('click', () => {
        const mode = (el as HTMLElement).dataset.mode as GameMode;
        gameModeManager.setMode(mode);
        this.render();
      });
    });

    // Global functions for buttons
    (window as any).mpCreate = async () => {
      const nameInput = document.getElementById('mp-room-name') as HTMLInputElement;
      const playerNameInput = document.getElementById('mp-player-name') as HTMLInputElement;
      const roomName = nameInput?.value || `Squad_${Math.floor(Math.random()*999)}`;
      const playerName = playerNameInput?.value || '';
      if (playerName) localStorage.setItem('bv_player_name', playerName);
      const mode = gameModeManager.getCurrentModeId();
      await multiplayerManager.createRoom(roomName, mode, 4, false);
      this.render();
    };

    (window as any).mpJoinPrompt = async () => {
      const roomId = prompt('Enter Room ID (e.g. ABC123):');
      if (!roomId) return;
      const playerName = (document.getElementById('mp-player-name') as HTMLInputElement)?.value || '';
      if (playerName) localStorage.setItem('bv_player_name', playerName);
      await multiplayerManager.joinRoom(roomId.toUpperCase(), playerName);
      this.render();
    };

    (window as any).mpLeave = () => {
      multiplayerManager.leaveRoom();
      this.render();
    };

    (window as any).mpStart = () => {
      this.hide();
      window.dispatchEvent(new CustomEvent('bv:startGame', { detail: { isNew: false, multiplayer: true, mode: gameModeManager.getCurrentModeId() } }));
    };

    (window as any).mpTestAI = async () => {
      const output = document.getElementById('mp-ai-output');
      if (!output) return;
      output.textContent = 'Generating AI dialogue...';
      const choices = JSON.parse(localStorage.getItem('bv_story_choices') || '{}');
      const lang = localStorage.getItem('bv_language') || 'en';
      const line = await freeAIModels.generateDialogue('kael', 'helix logs found', lang, choices);
      output.textContent = `Kael: "${line}" [${lang}] Choices: ${JSON.stringify(choices).slice(0,100)}`;
    };

    (window as any).mpTestVoice = async () => {
      const chars: any[] = ['kael', 'mara', 'helix_commander', 'ashen_leader', 'veil_specter'];
      for (const char of chars) {
        const line = await freeAIModels.generateDialogue(char, 'test', 'en', {});
        await freeAIModels.speak(line, char, 'en');
        await new Promise(r => setTimeout(r, 800));
      }
    };
  }

  private getIcon(name: string): string {
    return `<span style="width:16px;height:16px;display:inline-flex"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/></svg></span>`;
  }

  private getIconSvg(modeId: string): string {
    const icons: Record<string, string> = {
      coop_story: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/>',
      deathmatch: '<circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/>',
      stealth_hunters: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>',
      extraction: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>',
      survival: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
      infiltration: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>'
    };
    return `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">${icons[modeId]||'<circle cx="12" cy="12" r="10"/>'}</svg>`;
  }

  private colorToGradient(color: number): string {
    const hex = color.toString(16).padStart(6, '0');
    return `linear-gradient(135deg, #${hex}, #${(color+0x222222).toString(16).padStart(6,'0')})`;
  }

  private bindEvents() {
    multiplayerManager.onRoomUpdate(() => { if (this.isVisible) this.render(); });
    multiplayerManager.onPlayerUpdate(() => { if (this.isVisible) this.render(); });
  }
}
