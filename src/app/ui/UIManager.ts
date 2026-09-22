import { localization } from '../localization/LocalizationManager';
import { settingsManager } from '../settings/SettingsManager';
import { saveManager } from '../save/SaveManager';
import { missionManager } from '../missions/MissionManager';
import { WEAPONS } from '../../data/weapons';
import { achievementManager } from '../progression/AchievementManager';
import { dialogueSystem } from '../story/DialogueSystem';
import type { DialogueLine, DialogueChoice } from '../story/DialogueSystem';

export class UIManager {
  private root: HTMLElement;
  private hudEl: HTMLElement | null = null;
  private menuEl: HTMLElement | null = null;
  private currentScreen: 'menu' | 'hud' | 'inventory' | 'map' | 'settings' | 'credits' | 'loading' | 'dialogue' = 'menu';
  private isMenuOpen = true;
  private dialogueEl: HTMLElement | null = null;

  constructor() {
    this.root = document.getElementById('ui-root')!;
    this.createStyles();
    this.setupDialogueListener();
  }

  private createStyles() {
    const style = document.createElement('style');
    style.textContent = `
      #ui-root { position:fixed; inset:0; pointer-events:none; z-index:10; font-family:'Inter',sans-serif; }
      .ui-layer { position:absolute; inset:0; pointer-events:auto; }
      .bv-menu { background:radial-gradient(120% 120% at 20% 20%, rgba(20,20,32,0.95) 0%, rgba(10,10,15,0.98) 40%, rgba(5,5,8,0.99) 100%); backdrop-filter:blur(24px); display:flex; flex-direction:column; }
      .bv-menu-bg { position:absolute; inset:0; overflow:hidden; opacity:0.15; }
      .bv-menu-bg::before { content:''; position:absolute; inset:-50%; background:repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(106,166,255,0.03) 2px, rgba(106,166,255,0.03) 4px); animation:scan 8s linear infinite; }
      @keyframes scan { 0%{transform:translateY(0)} 100%{transform:translateY(4px)} }
      .bv-menu-content { position:relative; z-index:1; flex:1; display:flex; }
      .bv-menu-left { width: min(440px, 90vw); padding: 32px 24px; display:flex; flex-direction:column; justify-content:center; border-right:1px solid rgba(255,255,255,0.06); }
      .bv-logo { font-family:'Orbitron',monospace; font-weight:900; font-size:clamp(28px,5vw,48px); letter-spacing:0.22em; color:#fff; line-height:0.9; margin-bottom:8px; text-shadow:0 0 30px rgba(106,166,255,0.5); }
      .bv-tagline { font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:0.35em; color:#6a6a7a; text-transform:uppercase; margin-bottom:32px; }
      .bv-menu-items { display:flex; flex-direction:column; gap:4px; }
      .bv-menu-item { font-family:'Orbitron',monospace; font-size:13px; letter-spacing:0.15em; color:#8a8a9a; padding:13px 20px; cursor:pointer; transition:all 0.2s ease; border:1px solid transparent; background:rgba(255,255,255,0.02); position:relative; overflow:hidden; }
      .bv-menu-item::before { content:''; position:absolute; left:0; top:0; bottom:0; width:2px; background:#6aa6ff; transform:scaleY(0); transition:transform 0.2s ease; }
      .bv-menu-item:hover { color:#fff; background:rgba(106,166,255,0.08); border-color:rgba(106,166,255,0.2); transform:translateX(4px); }
      .bv-menu-item:hover::before { transform:scaleY(1); }
      .bv-menu-item.primary { color:#fff; background:linear-gradient(90deg, rgba(106,166,255,0.15), rgba(167,139,250,0.1)); border-color:rgba(106,166,255,0.3); }
      .bv-menu-item.primary:hover { background:linear-gradient(90deg, rgba(106,166,255,0.25), rgba(167,139,250,0.18)); box-shadow:0 0 20px rgba(106,166,255,0.2); }
      .bv-menu-right { flex:1; padding:32px; display:flex; flex-direction:column; justify-content:space-between; align-items:flex-end; text-align:right; overflow-y:auto; }
      .bv-version { font-family:'JetBrains Mono',monospace; font-size:10px; color:#4a4a5a; letter-spacing:0.1em; }
      .bv-hud { position:absolute; inset:0; pointer-events:none; }
      .bv-hud-top { position:absolute; top:0; left:0; right:0; padding:14px 18px; display:flex; justify-content:space-between; align-items:flex-start; gap:12px; }
      .bv-hud-objective { background:rgba(0,0,0,0.62); backdrop-filter:blur(14px); border:1px solid rgba(255,255,255,0.08); padding:12px 16px; min-width:280px; max-width:420px; }
      .bv-hud-objective-title { font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:0.2em; color:#6aa6ff; margin-bottom:6px; }
      .bv-hud-objective-text { font-size:13px; color:#e8e8ec; line-height:1.4; }
      .bv-hud-objective-progress { height:2px; background:rgba(255,255,255,0.1); margin-top:8px; overflow:hidden; }
      .bv-hud-objective-bar { height:100%; background:linear-gradient(90deg,#6aa6ff,#a78bfa); transition:width 0.3s ease; }
      .bv-hud-bottom { position:absolute; bottom:0; left:0; right:0; padding:14px 18px; display:flex; justify-content:space-between; align-items:flex-end; gap:12px; }
      .bv-hud-health { display:flex; gap:14px; align-items:center; }
      .bv-health-bar { width:132px; height:4px; background:rgba(255,255,255,0.1); position:relative; overflow:hidden; border-radius:2px; }
      .bv-health-fill { height:100%; background:linear-gradient(90deg,#4dff9a,#6aa6ff); transition:width 0.2s ease; }
      .bv-armor-fill { height:100%; background:linear-gradient(90deg,#6aa6ff,#a78bfa); transition:width 0.2s ease; }
      .bv-hud-ammo { text-align:right; }
      .bv-ammo-count { font-family:'Orbitron',monospace; font-size:26px; font-weight:600; color:#fff; line-height:1; }
      .bv-ammo-reserve { font-family:'JetBrains Mono',monospace; font-size:11px; color:#8a8a9a; }
      .bv-hud-stealth { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); background:rgba(0,0,0,0.72); border:1px solid rgba(255,255,255,0.1); padding:8px 16px; font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:0.15em; color:#fff; opacity:0; transition:opacity 0.3s ease; border-radius:4px; }
      .bv-hud-stealth.visible { opacity:1; }
      .bv-hud-crosshair { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:22px; height:22px; pointer-events:none; }
      .bv-hud-crosshair::before, .bv-hud-crosshair::after { content:''; position:absolute; background:rgba(255,255,255,0.82); }
      .bv-hud-crosshair::before { width:1px; height:10px; left:50%; top:50%; transform:translate(-50%,-50%); }
      .bv-hud-crosshair::after { width:10px; height:1px; left:50%; top:50%; transform:translate(-50%,-50%); }
      .bv-hud-crosshair.aiming { width:7px; height:7px; }
      .bv-hud-interact { position:absolute; bottom:130px; left:50%; transform:translateX(-50%); background:rgba(0,0,0,0.82); border:1px solid rgba(106,166,255,0.35); padding:10px 20px; font-family:'JetBrains Mono',monospace; font-size:12px; color:#fff; letter-spacing:0.1em; border-radius:20px; backdrop-filter:blur(8px); }
      .bv-panel { background:rgba(10,10,15,0.96); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.08); }
      .bv-button { font-family:'Orbitron',monospace; font-size:11px; letter-spacing:0.14em; padding:10px 20px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); color:#e8e8ec; cursor:pointer; transition:all 0.2s ease; border-radius:4px; }
      .bv-button:hover { background:rgba(106,166,255,0.15); border-color:rgba(106,166,255,0.3); color:#fff; transform:translateY(-1px); }
      .bv-credits { position:absolute; inset:0; background:radial-gradient(100% 100% at 50% 0%, #141420 0%, #0a0a0f 60%, #050508 100%); display:flex; flex-direction:column; align-items:center; padding:32px; text-align:center; overflow-y:auto; }
      .bv-credits h1 { font-family:'Orbitron',monospace; font-size:32px; letter-spacing:0.2em; color:#fff; margin-bottom:8px; }
      .bv-credits h2 { font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:0.3em; color:#6a6a7a; margin-bottom:28px; }
      .bv-credit-card { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:22px; margin:10px 0; width:min(520px,92vw); text-align:left; border-radius:6px; }
      .bv-credit-card h3 { font-family:'Orbitron',monospace; font-size:11px; letter-spacing:0.2em; color:#6aa6ff; margin-bottom:12px; }
      .bv-credit-link { display:flex; align-items:center; gap:12px; padding:9px 0; color:#e8e8ec; text-decoration:none; font-size:13px; transition:color 0.2s; }
      .bv-credit-link:hover { color:#6aa6ff; }
      .bv-credit-link.primary { font-weight:700; color:#fff; background:linear-gradient(90deg, rgba(106,166,255,0.15), transparent); padding:11px; border-left:2px solid #6aa6ff; border-radius:2px; }
      .bv-map { position:absolute; inset:0; background:rgba(5,5,8,0.96); display:flex; }
      .bv-map-canvas { flex:1; background:#0a0a0f; position:relative; overflow:hidden; }
      .bv-map-sidebar { width:320px; background:rgba(15,15,20,0.98); border-left:1px solid rgba(255,255,255,0.08); padding:20px; overflow-y:auto; }
      .bv-inventory { position:absolute; inset:0; background:rgba(5,5,8,0.96); display:flex; padding:18px; gap:18px; }
      .bv-inv-grid { flex:1; display:grid; grid-template-columns:repeat(auto-fill, minmax(150px,1fr)); gap:12px; align-content:start; overflow-y:auto; }
      .bv-inv-item { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:12px; cursor:pointer; transition:all 0.2s; border-radius:6px; }
      .bv-inv-item:hover { border-color:rgba(106,166,255,0.4); background:rgba(106,166,255,0.08); transform:translateY(-1px); }
      .bv-inv-item.equipped { border-color:#6aa6ff; background:rgba(106,166,255,0.12); box-shadow:0 0 12px rgba(106,166,255,0.15); }
      .bv-settings { position:absolute; inset:0; background:rgba(5,5,8,0.96); padding:24px; overflow-y:auto; }
      .bv-settings-section { margin-bottom:28px; }
      .bv-settings-section h3 { font-family:'Orbitron',monospace; font-size:12px; letter-spacing:0.15em; color:#6aa6ff; margin-bottom:14px; }
      .bv-setting-row { display:flex; justify-content:space-between; align-items:center; padding:11px 0; border-bottom:1px solid rgba(255,255,255,0.06); }
      .bv-fps { position:absolute; top:8px; left:8px; font-family:'JetBrains Mono',monospace; font-size:9px; color:#5a5a6a; background:rgba(0,0,0,0.6); padding:4px 8px; pointer-events:none; border-radius:3px; }
      .bv-dialogue { position:absolute; bottom:0; left:0; right:0; background:linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 60%, transparent 100%); padding:24px 24px 32px 24px; pointer-events:auto; }
      .bv-dialogue-box { max-width:800px; margin:0 auto; background:rgba(15,15,20,0.9); border:1px solid rgba(106,166,255,0.2); padding:18px 22px; backdrop-filter:blur(16px); border-radius:8px; }
      .bv-dialogue-speaker { font-family:'Orbitron',monospace; font-size:11px; letter-spacing:0.18em; color:#6aa6ff; margin-bottom:8px; }
      .bv-dialogue-text { font-size:15px; line-height:1.6; color:#e8e8ec; }
      .bv-dialogue-choices { margin-top:16px; display:flex; flex-direction:column; gap:8px; }
      .bv-dialogue-choice { padding:10px 16px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); color:#e8e8ec; font-size:13px; cursor:pointer; transition:all 0.2s; border-radius:4px; text-align:left; }
      .bv-dialogue-choice:hover { background:rgba(106,166,255,0.12); border-color:rgba(106,166,255,0.3); color:#fff; transform:translateX(4px); }
      .bv-achievement-popup { position:fixed; top:80px; right:20px; background:rgba(10,10,15,0.92); border:1px solid rgba(77,255,154,0.3); border-left:3px solid #4dff9a; padding:14px 18px; min-width:300px; backdrop-filter:blur(16px); transform:translateX(400px); transition:transform 0.4s ease; z-index:100; border-radius:6px; pointer-events:none; }
      .bv-achievement-popup.show { transform:translateX(0); }
      @media (max-width:768px) { .bv-menu-content { flex-direction:column; } .bv-menu-left { width:100%; border-right:none; border-bottom:1px solid rgba(255,255,255,0.06); } .bv-hud-top { flex-direction:column; gap:10px; } .bv-inventory { flex-direction:column; } .bv-map { flex-direction:column; } .bv-map-sidebar { width:100%; height:200px; border-left:none; border-top:1px solid rgba(255,255,255,0.08); } }
    `;
    document.head.appendChild(style);
  }

  private setupDialogueListener() {
    window.addEventListener('bv:dialogueLine', (e: any) => {
      const { line, choices } = e.detail as { line: DialogueLine; choices: DialogueChoice[] | null };
      this.showDialogue(line, choices);
    });
    window.addEventListener('bv:dialogueEnd', () => {
      this.hideDialogue();
    });
    window.addEventListener('bv:achievement', (e: any) => {
      this.showAchievementPopup(e.detail);
    });
  }

  private showDialogue(line: DialogueLine, choices: DialogueChoice[] | null) {
    this.currentScreen = 'dialogue';
    if (this.dialogueEl) this.dialogueEl.remove();
    
    const el = document.createElement('div');
    el.className = 'ui-layer bv-dialogue';
    const isRTL = localization.isRTL;
    const text = isRTL && line.textAr ? line.textAr : line.text;
    
    el.innerHTML = `
      <div class="bv-dialogue-box">
        <div class="bv-dialogue-speaker">${line.speaker} ${line.emotion ? `• ${line.emotion.toUpperCase()}` : ''}</div>
        <div class="bv-dialogue-text" dir="${isRTL ? 'rtl' : 'ltr'}" style="font-family:${isRTL ? "'Noto Sans Arabic', sans-serif" : "'Inter', sans-serif"}">${text}</div>
        ${choices ? `<div class="bv-dialogue-choices">${choices.map(c => {
          const ct = isRTL && c.textAr ? c.textAr : c.text;
          return `<button class="bv-dialogue-choice" data-choice="${c.id}" dir="${isRTL ? 'rtl' : 'ltr'}">${ct}</button>`;
        }).join('')}</div>` : `<div style="margin-top:12px; font-family:'JetBrains Mono',monospace; font-size:10px; color:#5a5a6a; text-align:right;">[SPACE] Continue • [F] Next</div>`}
      </div>
    `;
    
    this.root.appendChild(el);
    this.dialogueEl = el;

    el.querySelectorAll('[data-choice]').forEach(btn => {
      btn.addEventListener('click', () => {
        const choiceId = (btn as HTMLElement).dataset.choice!;
        dialogueSystem.choose(choiceId);
      });
    });

    if (!choices) {
      const advance = () => dialogueSystem.next();
      el.addEventListener('click', advance);
      const keyHandler = (ev: KeyboardEvent) => {
        if (ev.code === 'Space' || ev.code === 'KeyF' || ev.code === 'Enter') {
          advance();
          window.removeEventListener('keydown', keyHandler);
        }
      };
      window.addEventListener('keydown', keyHandler, { once: true });
    }
  }

  private hideDialogue() {
    if (this.dialogueEl) {
      this.dialogueEl.remove();
      this.dialogueEl = null;
    }
    if (this.currentScreen === 'dialogue') {
      this.currentScreen = 'hud';
    }
  }

  private showAchievementPopup(ach: any) {
    const popup = document.createElement('div');
    popup.className = 'bv-achievement-popup';
    popup.innerHTML = `
      <div style="display:flex; gap:12px; align-items:center;">
        <div style="width:40px; height:40px; background:rgba(77,255,154,0.15); border:1px solid rgba(77,255,154,0.3); display:flex; align-items:center; justify-content:center; font-size:20px; border-radius:6px;">${ach.icon}</div>
        <div>
          <div style="font-family:'Orbitron',monospace; font-size:11px; letter-spacing:0.15em; color:#4dff9a;">ACHIEVEMENT UNLOCKED</div>
          <div style="font-size:13px; color:#fff; margin-top:2px; font-weight:600;">${ach.title}</div>
          <div style="font-size:11px; color:#8a8a9a; margin-top:2px;">${ach.description}</div>
        </div>
      </div>
    `;
    document.body.appendChild(popup);
    setTimeout(() => popup.classList.add('show'), 100);
    setTimeout(() => {
      popup.classList.remove('show');
      setTimeout(() => popup.remove(), 400);
    }, 4000);
  }

  showMenu() {
    this.currentScreen = 'menu';
    this.isMenuOpen = true;
    this.root.innerHTML = '';
    const el = document.createElement('div');
    el.className = 'ui-layer bv-menu';
    const hasSave = saveManager.hasSave();
    const achievements = achievementManager.getAchievements();
    const unlockedCount = achievements.filter(a => a.unlocked).length;
    
    el.innerHTML = `
      <div class="bv-menu-bg"></div>
      <div class="bv-menu-content">
        <div class="bv-menu-left">
          <div class="bv-logo">${localization.t('game.title')}</div>
          <div class="bv-tagline">${localization.t('game.tagline')}</div>
          <div class="bv-menu-items">
            ${hasSave ? `<div class="bv-menu-item primary" data-action="continue">▶ ${localization.t('menu.continue')}</div>` : ''}
            <div class="bv-menu-item ${!hasSave ? 'primary' : ''}" data-action="new">${hasSave ? localization.t('menu.new_game') : '▶ ENTER VEYRA'}</div>
            <div class="bv-menu-item" data-action="missions">MISSIONS • ${missionManager.getAll().length}</div>
            <div class="bv-menu-item" data-action="inventory">INVENTORY • ${WEAPONS.length} WEAPONS</div>
            <div class="bv-menu-item" data-action="achievements">ACHIEVEMENTS • ${unlockedCount}/${achievements.length}</div>
            <div class="bv-menu-item" data-action="map">MAP • SECTOR 7</div>
            <div class="bv-menu-item" data-action="settings">${localization.t('menu.settings')}</div>
            <div class="bv-menu-item" data-action="credits">${localization.t('menu.credits')}</div>
            <div class="bv-menu-item" data-action="launcher" style="border-color:rgba(77,255,154,0.2); color:#4dff9a;">🚀 ONE-CLICK LAUNCHER</div>
            <div class="bv-menu-item" data-action="install" id="install-btn" style="display:none">📲 INSTALL GAME</div>
          </div>
          <div style="margin-top:20px; padding:12px; background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.06); border-radius:4px;">
            <div style="font-family:'JetBrains Mono',monospace; font-size:9px; letter-spacing:0.15em; color:#6aa6ff; margin-bottom:6px;">QUICK LAUNCH</div>
            <div style="font-size:11px; color:#8a8a9a; line-height:1.5; font-family:'JetBrains Mono',monospace;">
              Windows: <span style="color:#fff">Black-Veil.bat</span><br>
              Linux/Mac: <span style="color:#fff">./Black-Veil.sh</span><br>
              Node: <span style="color:#fff">node launch.mjs</span><br>
              Desktop: <span style="color:#fff">Electron app</span>
            </div>
          </div>
        </div>
        <div class="bv-menu-right">
          <div style="max-width:380px; text-align:left; background:rgba(0,0,0,0.45); border:1px solid rgba(255,255,255,0.06); padding:20px; backdrop-filter:blur(12px); border-radius:8px;">
            <div style="font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:0.2em; color:#6aa6ff; margin-bottom:12px;">// SECTOR 7 INTEL • DAY 1095</div>
            <div style="font-size:13px; line-height:1.65; color:#9a9aaa;">
              Veyra Blackout — 3 years ago. Power, comms, transport — gone in 17 minutes. Official: infrastructure failure. Truth: Project BLACK VEIL.<br><br>
              <span style="color:#e8e8ec;">Your sister Mara was last seen near Sector 7. She found logs — Helix running BLACK VEIL during Blackout. Not failure. Test.</span><br><br>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin:12px 0;">
                <div style="background:rgba(106,166,255,0.08); border:1px solid rgba(106,166,255,0.15); padding:8px; border-radius:4px; text-align:center;">
                  <div style="font-size:18px; color:#6aa6ff;">◬</div>
                  <div style="font-size:9px; color:#8a8a9a; margin-top:2px;">VANGUARD</div>
                </div>
                <div style="background:rgba(138,122,90,0.08); border:1px solid rgba(138,122,90,0.15); padding:8px; border-radius:4px; text-align:center;">
                  <div style="font-size:18px; color:#8a7a5a;">⬔</div>
                  <div style="font-size:9px; color:#8a8a9a; margin-top:2px;">ASHEN</div>
                </div>
                <div style="background:rgba(0,229,255,0.06); border:1px solid rgba(0,229,255,0.12); padding:8px; border-radius:4px; text-align:center;">
                  <div style="font-size:18px; color:#00e5ff;">⬡</div>
                  <div style="font-size:9px; color:#8a8a9a; margin-top:2px;">HELIX</div>
                </div>
                <div style="background:rgba(106,74,138,0.08); border:1px solid rgba(106,74,138,0.15); padding:8px; border-radius:4px; text-align:center;">
                  <div style="font-size:18px; color:#6a4a8a;">◍</div>
                  <div style="font-size:9px; color:#8a8a9a; margin-top:2px;">VEIL</div>
                </div>
              </div>
              <span style="font-family:'JetBrains Mono',monospace; font-size:11px; color:#5a5a6a;">> ENTER THE DEAD CITY<br>> SURVIVE ITS PEOPLE<br>> UNCOVER ITS SECRETS<br>> SAFEHOUSE: -58,15 • P = Photo Mode</span>
            </div>
          </div>
          <div style="margin-top:16px; text-align:left; width:100%; max-width:380px;">
            <div style="font-family:'JetBrains Mono',monospace; font-size:9px; letter-spacing:0.15em; color:#5a5a6a; margin-bottom:8px;">PROGRESSION</div>
            <div style="display:flex; gap:8px;">
              <div style="flex:1; background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.06); padding:8px; border-radius:4px; text-align:center;">
                <div style="font-family:'Orbitron',monospace; font-size:16px; color:#fff;">${achievementManager.getStats().kills}</div>
                <div style="font-size:8px; color:#6a6a7a; letter-spacing:0.1em;">KILLS</div>
              </div>
              <div style="flex:1; background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.06); padding:8px; border-radius:4px; text-align:center;">
                <div style="font-family:'Orbitron',monospace; font-size:16px; color:#fff;">${achievementManager.getStats().intelCollected}</div>
                <div style="font-size:8px; color:#6a6a7a; letter-spacing:0.1em;">INTEL</div>
              </div>
              <div style="flex:1; background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.06); padding:8px; border-radius:4px; text-align:center;">
                <div style="font-family:'Orbitron',monospace; font-size:16px; color:#fff;">${achievementManager.getStats().totalDiscovered}</div>
                <div style="font-size:8px; color:#6a6a7a; letter-spacing:0.1em;">DISCOVERED</div>
              </div>
            </div>
          </div>
          <div class="bv-version" style="margin-top:20px;">BLACK VEIL v1.0.0 • BUILD 430e42e • M11 DEV • ELECTRON + PWA • ONE-CLICK LAUNCHER</div>
        </div>
      </div>
    `;
    this.root.appendChild(el);
    this.menuEl = el;

    el.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = (btn as HTMLElement).dataset.action;
        this.handleMenuAction(action!);
      });
    });

    let deferredPrompt: any = null;
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      const ib = document.getElementById('install-btn');
      if (ib) ib.style.display = 'block';
    });
    const ib = document.getElementById('install-btn');
    if (ib) {
      ib.addEventListener('click', async () => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          await deferredPrompt.userChoice;
          deferredPrompt = null;
          ib.style.display = 'none';
        }
      });
    }
  }

  private handleMenuAction(action: string) {
    switch (action) {
      case 'continue':
      case 'new':
        this.showHUD();
        window.dispatchEvent(new CustomEvent('bv:startGame', { detail: { isNew: action === 'new' } }));
        break;
      case 'missions':
        this.showMissions();
        break;
      case 'inventory':
        this.showInventory();
        break;
      case 'achievements':
        this.showAchievements();
        break;
      case 'map':
        this.showMap();
        break;
      case 'settings':
        this.showSettings();
        break;
      case 'credits':
        this.showCredits();
        break;
      case 'launcher':
        this.showLauncherInfo();
        break;
    }
  }

  showHUD() {
    this.currentScreen = 'hud';
    this.isMenuOpen = false;
    this.root.innerHTML = '';
    const el = document.createElement('div');
    el.className = 'ui-layer bv-hud';
    el.innerHTML = `
      <div class="bv-hud-top">
        <div class="bv-hud-objective" id="hud-objective">
          <div class="bv-hud-objective-title" id="hud-obj-title">ACTIVE MISSION</div>
          <div class="bv-hud-objective-text" id="hud-obj-text">Reach Northern Checkpoint</div>
          <div class="bv-hud-objective-progress"><div class="bv-hud-objective-bar" id="hud-obj-bar" style="width:0%"></div></div>
        </div>
        <div style="display:flex; gap:6px; flex-wrap:wrap; justify-content:flex-end;">
          <button class="bv-button" id="hud-map-btn" style="pointer-events:auto; padding:7px 10px; font-size:9px;">MAP [M]</button>
          <button class="bv-button" id="hud-inv-btn" style="pointer-events:auto; padding:7px 10px; font-size:9px;">INV [TAB]</button>
          <button class="bv-button" id="hud-photo-btn" style="pointer-events:auto; padding:7px 10px; font-size:9px;">📷 [P]</button>
          <button class="bv-button" id="hud-menu-btn" style="pointer-events:auto; padding:7px 10px; font-size:9px;">MENU [ESC]</button>
        </div>
      </div>
      <div class="bv-hud-bottom">
        <div class="bv-hud-health">
          <div>
            <div style="font-family:'JetBrains Mono',monospace; font-size:8px; color:#5a5a6a; letter-spacing:0.15em; margin-bottom:3px;">HEALTH</div>
            <div class="bv-health-bar"><div class="bv-health-fill" id="hud-health" style="width:100%"></div></div>
            <div style="font-family:'JetBrains Mono',monospace; font-size:8px; color:#5a5a6a; letter-spacing:0.15em; margin-top:5px;">ARMOR</div>
            <div class="bv-health-bar"><div class="bv-armor-fill" id="hud-armor" style="width:50%"></div></div>
          </div>
          <div style="font-family:'JetBrains Mono',monospace; font-size:9px; color:#8a8a9a; margin-left:8px; line-height:1.4;">
            <div id="hud-stealth-text">HIDDEN</div>
            <div id="hud-faction" style="color:#6aa6ff; margin-top:1px;">ASHEN • NEUTRAL</div>
            <div id="hud-ammo-extra" style="color:#5a5a6a; margin-top:2px; font-size:8px;">SAFEHOUSE -58,15</div>
          </div>
        </div>
        <div class="bv-hud-ammo">
          <div class="bv-ammo-count" id="hud-ammo-current">15</div>
          <div class="bv-ammo-reserve" id="hud-ammo-reserve">/ 90 • M9 Tactical</div>
        </div>
      </div>
      <div class="bv-hud-stealth" id="hud-stealth">HIDDEN</div>
      <div class="bv-hud-crosshair" id="hud-crosshair"></div>
      <div class="bv-hud-interact" id="hud-interact" style="display:none;">[F] INTERACT</div>
      <div class="bv-fps" id="hud-fps">60 FPS • 16ms • AUTO:HIGH</div>
    `;
    this.root.appendChild(el);
    this.hudEl = el;

    el.querySelector('#hud-map-btn')?.addEventListener('click', () => this.showMap());
    el.querySelector('#hud-inv-btn')?.addEventListener('click', () => this.showInventory());
    el.querySelector('#hud-photo-btn')?.addEventListener('click', () => window.dispatchEvent(new CustomEvent('bv:togglePhoto')));
    el.querySelector('#hud-menu-btn')?.addEventListener('click', () => this.showMenu());

    missionManager.onChange(m => {
      if (!m) return;
      const titleEl = document.getElementById('hud-obj-title');
      const textEl = document.getElementById('hud-obj-text');
      const barEl = document.getElementById('hud-obj-bar') as HTMLElement;
      if (titleEl) titleEl.textContent = m.title.toUpperCase();
      if (textEl) {
        const nextObj = m.objectives.find(o => !o.completed);
        textEl.textContent = nextObj ? nextObj.title : 'Mission Complete';
      }
      const prog = missionManager.getProgress();
      if (barEl) barEl.style.width = `${prog.percent * 100}%`;
    });
    const active = missionManager.getActive();
    if (active) {
      const titleEl = document.getElementById('hud-obj-title');
      const textEl = document.getElementById('hud-obj-text');
      if (titleEl) titleEl.textContent = active.title.toUpperCase();
      if (textEl) {
        const next = active.objectives.find(o => !o.completed);
        textEl.textContent = next ? next.title : active.description;
      }
    }
  }

  updateHUD(data: { health: number; armor: number; ammoCurrent: number; ammoReserve: number; weaponName: string; stealth: string; fps: number; frameTime: number; quality: string; interact?: string | null; isAiming?: boolean }) {
    if (this.currentScreen !== 'hud' && this.currentScreen !== 'dialogue') return;
    const healthEl = document.getElementById('hud-health') as HTMLElement;
    const armorEl = document.getElementById('hud-armor') as HTMLElement;
    const ammoCur = document.getElementById('hud-ammo-current');
    const ammoRes = document.getElementById('hud-ammo-reserve');
    const stealthEl = document.getElementById('hud-stealth');
    const stealthText = document.getElementById('hud-stealth-text');
    const fpsEl = document.getElementById('hud-fps');
    const interactEl = document.getElementById('hud-interact') as HTMLElement;
    const crosshair = document.getElementById('hud-crosshair') as HTMLElement;

    if (healthEl) healthEl.style.width = `${data.health}%`;
    if (armorEl) armorEl.style.width = `${data.armor}%`;
    if (ammoCur) ammoCur.textContent = `${data.ammoCurrent}`;
    if (ammoRes) ammoRes.textContent = `/ ${data.ammoReserve} • ${data.weaponName}`;
    if (stealthEl) {
      stealthEl.textContent = data.stealth;
      stealthEl.className = `bv-hud-stealth ${data.stealth !== 'HIDDEN' ? 'visible' : ''}`;
      stealthEl.style.color = data.stealth === 'COMBAT' ? '#ff4d6a' : data.stealth === 'DETECTED' ? '#ffb84d' : '#4dff9a';
    }
    if (stealthText) stealthText.textContent = data.stealth;
    if (fpsEl) fpsEl.textContent = `${Math.round(data.fps)} FPS • ${data.frameTime.toFixed(1)}ms • ${data.quality} • P:Photo`;
    if (interactEl) {
      if (data.interact) {
        interactEl.style.display = 'block';
        interactEl.textContent = `[F] ${data.interact}`;
      } else {
        interactEl.style.display = 'none';
      }
    }
    if (crosshair) {
      crosshair.className = `bv-hud-crosshair ${data.isAiming ? 'aiming' : ''}`;
      crosshair.style.opacity = data.isAiming ? '0.9' : '0.6';
    }
  }

  showMissions() {
    this.root.innerHTML = '';
    const el = document.createElement('div');
    el.className = 'ui-layer bv-panel';
    el.style.padding = '24px';
    el.style.overflowY = 'auto';
    const missions = missionManager.getAll();
    el.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; flex-wrap:wrap; gap:12px;">
        <h2 style="font-family:Orbitron; letter-spacing:0.2em; color:#fff;">MISSIONS • CHAPTER 1: GHOSTS</h2>
        <button class="bv-button" id="missions-back">BACK</button>
      </div>
      <div style="display:grid; gap:16px; max-width:900px;">
        ${missions.map(m => `
          <div class="bv-credit-card" data-mission="${m.id}" style="cursor:pointer; width:100%; ${missionManager.getActive()?.id === m.id ? 'border-color:#6aa6ff; background:rgba(106,166,255,0.08);' : ''}">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px;">
              <div>
                <h3>${m.title} • CH${m.chapter} • ${m.location}</h3>
                <div style="font-size:13px; color:#9a9aaa; line-height:1.5; margin:8px 0;">${m.longDescription || m.description}</div>
                <div style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#5a5a6a;">${m.difficulty.toUpperCase()} • ${m.rewards.xp} XP • ${m.rewards.currency} CR ${m.rewards.items ? `• ${m.rewards.items.join(', ')}` : ''}</div>
              </div>
              <div style="font-family:'Orbitron',monospace; font-size:10px; color:${missionManager.getActive()?.id === m.id ? '#6aa6ff' : '#5a5a6a'}; white-space:nowrap;">${missionManager.getActive()?.id === m.id ? '● ACTIVE' : '○'}</div>
            </div>
            <div style="margin-top:12px; display:grid; gap:4px;">
              ${m.objectives.map(o => `<div style="font-size:11px; color:${o.completed ? '#4dff9a' : o.optional ? '#8a8a6a' : '#e8e8ec'}; display:flex; gap:8px;"><span>${o.completed ? '✓' : o.optional ? '◇' : '○'}</span><span><strong>${o.title}</strong> — ${o.description} ${o.required ? `(${o.current||0}/${o.required})` : ''} ${o.optional ? '(OPTIONAL)' : ''}</span></div>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
    this.root.appendChild(el);
    el.querySelector('#missions-back')?.addEventListener('click', () => this.showMenu());
    el.querySelectorAll('[data-mission]').forEach(card => {
      card.addEventListener('click', () => {
        const id = (card as HTMLElement).dataset.mission!;
        missionManager.setActive(id);
        this.showMenu();
      });
    });
  }

  showInventory() {
    this.currentScreen = 'inventory';
    this.root.innerHTML = '';
    const el = document.createElement('div');
    el.className = 'ui-layer bv-inventory';
    el.innerHTML = `
      <div style="width:340px; background:rgba(15,15,20,0.98); border:1px solid rgba(255,255,255,0.08); padding:18px; overflow-y:auto; border-radius:8px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px;">
          <h2 style="font-family:Orbitron; font-size:15px; letter-spacing:0.15em; color:#fff;">INVENTORY • ARSENAL</h2>
          <button class="bv-button" id="inv-back" style="padding:6px 12px; font-size:10px;">BACK</button>
        </div>
        <div style="font-family:'JetBrains Mono',monospace; font-size:9px; color:#5a5a6a; margin-bottom:10px; letter-spacing:0.1em;">WEAPONS • ${WEAPONS.length} AVAILABLE • CLICK TO EQUIP</div>
        <div id="inv-weapons" style="display:flex; flex-direction:column; gap:8px;"></div>
        <div style="margin-top:20px; padding-top:14px; border-top:1px solid rgba(255,255,255,0.06);">
          <div style="font-family:'JetBrains Mono',monospace; font-size:9px; color:#5a5a6a; margin-bottom:8px; letter-spacing:0.1em;">PROGRESSION • STATS</div>
          <div id="inv-stats" style="font-size:11px; color:#8a8a9a; line-height:1.7; font-family:'JetBrains Mono',monospace;"></div>
        </div>
        <div style="margin-top:16px;">
          <div style="font-family:'JetBrains Mono',monospace; font-size:9px; color:#5a5a6a; margin-bottom:8px;">CONTROLS</div>
          <div style="font-size:10px; color:#6a6a7a; line-height:1.6;">
            [F] Interact • [R] Reload • [1/2] Swap<br>
            [P] Photo Mode • [M] Map • [TAB] Inventory
          </div>
        </div>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; gap:12px; overflow-y:auto;">
        <div class="bv-inv-grid" id="inv-grid" style="flex:1;"></div>
        <div id="inv-achievements" style="background:rgba(15,15,20,0.9); border:1px solid rgba(255,255,255,0.08); padding:16px; border-radius:8px; max-height:220px; overflow-y:auto;"></div>
      </div>
    `;
    this.root.appendChild(el);
    el.querySelector('#inv-back')?.addEventListener('click', () => this.showHUD());

    window.dispatchEvent(new CustomEvent('bv:requestInventory'));

    const handler = (e: any) => {
      const { weapons, currentIndex, achievements, stats } = e.detail;
      const weaponsDiv = el.querySelector('#inv-weapons') as HTMLElement;
      const grid = el.querySelector('#inv-grid') as HTMLElement;
      const statsDiv = el.querySelector('#inv-stats') as HTMLElement;
      const achDiv = el.querySelector('#inv-achievements') as HTMLElement;

      weaponsDiv.innerHTML = weapons.map((w: any, i: number) => `
        <div class="bv-inv-item ${i === currentIndex ? 'equipped' : ''}" data-idx="${i}">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div style="font-family:Orbitron; font-size:11px; color:#fff; letter-spacing:0.05em;">${w.config.name}</div>
            <div style="font-size:9px; color:${i===currentIndex?'#6aa6ff':'#5a5a6a'};">${i===currentIndex?'● EQUIPPED':'○'}</div>
          </div>
          <div style="font-size:10px; color:#8a8a9a; margin-top:3px;">${w.config.category.toUpperCase()} • ${w.ammoInMag}/${w.reserve} • ${w.config.fireRate} RPM</div>
          <div style="font-size:9px; color:#5a5a6a; margin-top:3px; line-height:1.3;">${w.config.description}</div>
          <div style="margin-top:6px; height:2px; background:rgba(255,255,255,0.08); overflow:hidden; border-radius:1px;"><div style="height:100%; width:${(w.ammoInMag/w.config.magazine)*100}%; background:${w.ammoInMag<5?'#ff4d6a':'#6aa6ff'};"></div></div>
        </div>
      `).join('');
      weaponsDiv.querySelectorAll('[data-idx]').forEach(item => {
        item.addEventListener('click', () => {
          const idx = parseInt((item as HTMLElement).dataset.idx!);
          window.dispatchEvent(new CustomEvent('bv:equipWeapon', { detail: { index: idx } }));
          this.showHUD();
        });
      });

      grid.innerHTML = weapons.map((w: any, i: number) => `
        <div class="bv-inv-item ${i===currentIndex?'equipped':''}" data-idx="${i}">
          <div style="height:70px; background:rgba(255,255,255,0.02); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:4px; border-radius:4px;">
            <div style="font-size:24px;">${w.config.category==='pistol'?'◬':w.config.category==='smg'?'⬔':w.config.category==='rifle'?'⬡':w.config.category==='shotgun'?'◍':w.config.category==='sniper'?'◎':'◫'}</div>
            <div style="font-family:Orbitron; font-size:8px; color:#5a5a6a;">${w.config.category.toUpperCase()}</div>
          </div>
          <div style="padding:8px 0 0 0;">
            <div style="font-size:11px; color:#fff; font-weight:600;">${w.config.name}</div>
            <div style="font-size:9px; color:#6aa6ff; margin-top:2px;">DMG ${w.config.damage} • RNG ${w.config.range}m • ${w.config.magazine} MAG</div>
            <div style="font-size:8px; color:#5a5a6a; margin-top:2px;">${w.config.fireModes.join('/').toUpperCase()}</div>
          </div>
        </div>
      `).join('');
      grid.querySelectorAll('[data-idx]').forEach(item => {
        item.addEventListener('click', () => {
          const idx = parseInt((item as HTMLElement).dataset.idx!);
          window.dispatchEvent(new CustomEvent('bv:equipWeapon', { detail: { index: idx } }));
          this.showHUD();
        });
      });

      if (stats) {
        statsDiv.innerHTML = `
          Kills: <span style="color:#fff">${stats.kills}</span> (Headshots: ${stats.headshots})<br>
          Intel: <span style="color:#fff">${stats.intelCollected}</span> • Districts: <span style="color:#fff">${stats.totalDiscovered}/7</span><br>
          Missions: <span style="color:#fff">${stats.missionsCompleted}</span> • Stealth: <span style="color:#fff">${stats.stealthMissions}</span><br>
          Currency: <span style="color:#4dff9a">${saveManager.load()?.progression.currency || 0} CR</span><br>
          Level: <span style="color:#6aa6ff">${saveManager.load()?.progression.level || 1}</span> • XP: ${saveManager.load()?.progression.xp || 0}
        `;
      }

      if (achievements) {
        achDiv.innerHTML = `
          <div style="font-family:'Orbitron',monospace; font-size:10px; letter-spacing:0.15em; color:#4dff9a; margin-bottom:10px;">ACHIEVEMENTS • ${achievements.filter((a:any)=>a.unlocked).length}/${achievements.length}</div>
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(200px,1fr)); gap:8px;">
            ${achievements.map((a:any) => `
              <div style="background:${a.unlocked?'rgba(77,255,154,0.08)':'rgba(255,255,255,0.02)'}; border:1px solid ${a.unlocked?'rgba(77,255,154,0.2)':'rgba(255,255,255,0.06)'}; padding:8px 10px; border-radius:4px; opacity:${a.unlocked?1:0.6};">
                <div style="display:flex; gap:8px; align-items:center;">
                  <div style="font-size:16px;">${a.icon}</div>
                  <div>
                    <div style="font-size:10px; color:${a.unlocked?'#4dff9a':'#fff'}; font-weight:600;">${a.title} ${a.unlocked?'✓':''}</div>
                    <div style="font-size:8px; color:#8a8a9a; margin-top:1px;">${a.description}</div>
                    <div style="margin-top:4px; height:2px; background:rgba(255,255,255,0.08); border-radius:1px;"><div style="height:100%; width:${(a.progress/a.maxProgress)*100}%; background:${a.unlocked?'#4dff9a':'#6aa6ff'};"></div></div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }
    };
    window.addEventListener('bv:inventoryData', handler as any, { once: true });
  }

  showAchievements() {
    this.root.innerHTML = '';
    const el = document.createElement('div');
    el.className = 'ui-layer bv-panel';
    el.style.padding = '24px';
    el.style.overflowY = 'auto';
    const achievements = achievementManager.getAchievements();
    const stats = achievementManager.getStats();
    el.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; flex-wrap:wrap; gap:12px;">
        <h2 style="font-family:Orbitron; letter-spacing:0.2em; color:#fff;">ACHIEVEMENTS • ${achievements.filter(a=>a.unlocked).length}/${achievements.length}</h2>
        <button class="bv-button" id="ach-back">BACK</button>
      </div>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px,1fr)); gap:12px; margin-bottom:24px;">
        <div class="bv-credit-card" style="width:100%"><h3>STATS</h3><div style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#9a9aaa; line-height:1.8;">
          Kills: ${stats.kills} (Headshots: ${stats.headshots})<br>
          Intel: ${stats.intelCollected} • Districts: ${stats.totalDiscovered}/7<br>
          Missions: ${stats.missionsCompleted} • Stealth: ${stats.stealthMissions}<br>
          Time: ${(stats.timePlayed/60).toFixed(1)}m • Distance: ${(stats.distanceTraveled/1000).toFixed(2)}km
        </div></div>
        <div class="bv-credit-card" style="width:100%"><h3>PROGRESSION</h3><div style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#9a9aaa; line-height:1.8;">
          Level: ${saveManager.load()?.progression.level || 1} • XP: ${saveManager.load()?.progression.xp || 0}<br>
          Currency: ${saveManager.load()?.progression.currency || 0} CR<br>
          Weapons: ${WEAPONS.length} available<br>
          Save: ${saveManager.hasSave() ? 'Present' : 'None'}
        </div></div>
      </div>
      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px,1fr)); gap:12px;">
        ${achievements.map(a => `
          <div class="bv-credit-card" style="width:100%; border-color:${a.unlocked?'rgba(77,255,154,0.3)':'rgba(255,255,255,0.08)'}; background:${a.unlocked?'rgba(77,255,154,0.06)':'rgba(255,255,255,0.02)'};">
            <div style="display:flex; gap:12px; align-items:flex-start;">
              <div style="width:44px; height:44px; background:${a.unlocked?'rgba(77,255,154,0.15)':'rgba(255,255,255,0.04)'}; border:1px solid ${a.unlocked?'rgba(77,255,154,0.3)':'rgba(255,255,255,0.08)'}; display:flex; align-items:center; justify-content:center; font-size:22px; border-radius:6px; flex-shrink:0;">${a.icon}</div>
              <div style="flex:1;">
                <h3 style="margin-bottom:4px; color:${a.unlocked?'#4dff9a':'#fff'};">${a.title} ${a.unlocked?'✓':''} ${a.hidden && !a.unlocked?'(HIDDEN)':''}</h3>
                <div style="font-size:12px; color:#9a9aaa; line-height:1.4;">${a.hidden && !a.unlocked ? '???' : a.description}</div>
                <div style="margin-top:8px; height:3px; background:rgba(255,255,255,0.08); border-radius:2px; overflow:hidden;"><div style="height:100%; width:${(a.progress/a.maxProgress)*100}%; background:${a.unlocked?'#4dff9a':'#6aa6ff'}; transition:width 0.3s;"></div></div>
                <div style="font-family:'JetBrains Mono',monospace; font-size:9px; color:#5a5a6a; margin-top:4px;">${a.progress}/${a.maxProgress} • ${a.xpReward} XP • ${a.category.toUpperCase()}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    this.root.appendChild(el);
    el.querySelector('#ach-back')?.addEventListener('click', () => this.showMenu());
  }

  showMap() {
    this.currentScreen = 'map';
    this.root.innerHTML = '';
    const el = document.createElement('div');
    el.className = 'ui-layer bv-map';
    el.innerHTML = `
      <div class="bv-map-canvas" id="map-canvas">
        <canvas id="map-canvas-el" style="width:100%; height:100%;"></canvas>
        <div style="position:absolute; top:14px; left:14px; background:rgba(0,0,0,0.72); padding:8px 12px; font-family:'JetBrains Mono',monospace; font-size:10px; color:#6aa6ff; letter-spacing:0.15em; border-radius:4px; backdrop-filter:blur(8px);">VEYRA SECTOR 7 • TACTICAL MAP • 7 DISTRICTS</div>
        <button class="bv-button" id="map-back" style="position:absolute; top:14px; right:14px; pointer-events:auto;">BACK</button>
        <div style="position:absolute; bottom:14px; left:14px; background:rgba(0,0,0,0.72); padding:8px 12px; font-family:'JetBrains Mono',monospace; font-size:9px; color:#8a8a9a; border-radius:4px; backdrop-filter:blur(8px); line-height:1.5;">
          SCROLL TO ZOOM • DRAG TO PAN • PINCH ON MOBILE<br>
          <span style="color:#6aa6ff;">■</span> PLAYER • <span style="color:#ff4d6a;">■</span> ENEMY • <span style="color:#4dff9a;">■</span> OBJECTIVE • <span style="color:#ffaa44;">■</span> SAFEHOUSE • <span style="color:#00e5ff;">■</span> SECURITY
        </div>
      </div>
      <div class="bv-map-sidebar">
        <h3 style="font-family:Orbitron; font-size:12px; letter-spacing:0.15em; color:#fff; margin-bottom:14px;">LOCATIONS • ${achievementManager.getStats().totalDiscovered}/7 DISCOVERED</h3>
        <div id="map-locations" style="display:flex; flex-direction:column; gap:8px; margin-bottom:16px;"></div>
        <div style="background:rgba(106,166,255,0.06); border:1px solid rgba(106,166,255,0.12); padding:10px; border-radius:4px;">
          <div style="font-family:'JetBrains Mono',monospace; font-size:9px; color:#6aa6ff; margin-bottom:4px;">SAFEHOUSE</div>
          <div style="font-size:11px; color:#e8e8ec;">-58, 15 — Ashen Hub</div>
          <div style="font-size:9px; color:#8a8a9a; margin-top:2px;">Weapons • Map • Missions • Upgrades • Story</div>
        </div>
      </div>
    `;
    this.root.appendChild(el);
    el.querySelector('#map-back')?.addEventListener('click', () => this.showHUD());

    const canvas = el.querySelector('#map-canvas-el') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;
    const resize = () => {
      canvas.width = canvas.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.clientHeight * window.devicePixelRatio;
    };
    resize();

    let offsetX = 0, offsetY = 0, scale = 1.3;
    let isDragging = false, lastX = 0, lastY = 0;

    const locations = [
      { name: 'Central Street', x: 0, z: -40, type: 'street', discovered: true, desc: 'High-density urban, Helix patrols' },
      { name: 'Residential Block', x: -38, z: 22, type: 'residential', discovered: true, desc: 'Apartments, Mara 7B, blackout' },
      { name: 'Helix Tower', x: 5, z: 68, type: 'corporate', discovered: false, desc: 'Corporate, security heavy, powered' },
      { name: 'Industrial Yard', x: 48, z: -20, type: 'industrial', discovered: true, desc: 'Warehouses, containers, substation' },
      { name: 'Safehouse', x: -58, z: 15, type: 'safehouse', discovered: true, desc: 'Ashen hub, your base' },
      { name: 'Northern Checkpoint', x: 0, z: -82, type: 'objective', discovered: true, desc: 'Entry point, mission objective' },
      { name: 'Substation', x: 58, z: -4, type: 'objective', discovered: false, desc: 'Power grid, restore for residential' },
      { name: 'Hidden Cache', x: -48, z: -78, type: 'secret', discovered: false, desc: 'Secret, Phantom SR' },
      { name: 'Security Grid', x: 5, z: 58, type: 'security', discovered: false, desc: 'Cameras, hack terminals' },
    ];

    const locDiv = el.querySelector('#map-locations') as HTMLElement;
    locDiv.innerHTML = locations.map(l => `
      <div style="padding:9px 10px; background:${l.discovered ? 'rgba(106,166,255,0.08)' : 'rgba(255,255,255,0.02)'}; border:1px solid ${l.discovered ? 'rgba(106,166,255,0.2)' : 'rgba(255,255,255,0.06)'}; border-radius:4px; cursor:pointer;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div style="font-size:11px; color:${l.discovered ? '#fff' : '#5a5a6a'}; font-weight:600;">${l.name}</div>
          <div style="font-size:8px; color:${l.discovered ? '#4dff9a' : '#5a5a6a'};">${l.discovered ? '●' : '○'}</div>
        </div>
        <div style="font-size:9px; color:#6a6a7a; margin-top:2px;">${l.type.toUpperCase()} • ${l.desc}</div>
      </div>
    `).join('');

    let playerPos = { x: 0, z: 0 };
    window.addEventListener('bv:playerPos', (e: any) => { playerPos = e.detail; });

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      const w = canvas.clientWidth, h = canvas.clientHeight;
      ctx.translate(w / 2 + offsetX, h / 2 + offsetY);
      ctx.scale(scale, scale);

      ctx.strokeStyle = 'rgba(255,255,255,0.035)';
      ctx.lineWidth = 1;
      for (let x = -250; x <= 250; x += 20) {
        ctx.beginPath(); ctx.moveTo(x, -250); ctx.lineTo(x, 250); ctx.stroke();
      }
      for (let z = -250; z <= 250; z += 20) {
        ctx.beginPath(); ctx.moveTo(-250, z); ctx.lineTo(250, z); ctx.stroke();
      }

      // Districts bounds
      ctx.strokeStyle = 'rgba(106,166,255,0.08)';
      ctx.lineWidth = 2;
      ctx.strokeRect(-60, -110, 120, 135); // central
      ctx.strokeRect(-75, -10, 65, 75); // residential
      ctx.strokeRect(-20, 40, 50, 50); // corporate

      locations.forEach(l => {
        let fill = 'rgba(255,255,255,0.03)';
        let stroke = 'rgba(255,255,255,0.08)';
        let radius = 10;
        if (l.type === 'objective') { fill = 'rgba(77,255,154,0.15)'; stroke = 'rgba(77,255,154,0.4)'; radius = 8; }
        else if (l.type === 'secret') { fill = 'rgba(255,184,77,0.12)'; stroke = 'rgba(255,184,77,0.35)'; radius = 7; }
        else if (l.type === 'safehouse') { fill = 'rgba(255,170,68,0.15)'; stroke = 'rgba(255,170,68,0.4)'; radius = 9; }
        else if (l.type === 'security') { fill = 'rgba(0,229,255,0.12)'; stroke = 'rgba(0,229,255,0.35)'; radius = 7; }
        else if (l.discovered) { fill = 'rgba(106,166,255,0.06)'; stroke = 'rgba(106,166,255,0.18)'; }
        
        ctx.fillStyle = fill;
        ctx.strokeStyle = stroke;
        ctx.lineWidth = l.discovered ? 1.5 : 1;
        ctx.beginPath();
        ctx.arc(l.x, l.z, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        if (l.discovered) {
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 8px monospace';
          ctx.textAlign = 'center';
          ctx.fillText(l.name.split(' ')[0], l.x, l.z - radius - 6);
        }
      });

      ctx.fillStyle = '#6aa6ff';
      ctx.shadowColor = '#6aa6ff';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(playerPos.x, playerPos.z, 4.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.restore();
      if (this.currentScreen === 'map') requestAnimationFrame(draw);
    };
    draw();

    canvas.addEventListener('mousedown', (e) => { isDragging = true; lastX = e.clientX; lastY = e.clientY; });
    window.addEventListener('mouseup', () => isDragging = false);
    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      offsetX += e.clientX - lastX;
      offsetY += e.clientY - lastY;
      lastX = e.clientX; lastY = e.clientY;
    });
    canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      scale = Math.max(0.35, Math.min(5, scale * (e.deltaY < 0 ? 1.12 : 0.88)));
    }, { passive: false });

    let lastDist = 0;
    canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) { isDragging = true; lastX = e.touches[0].clientX; lastY = e.touches[0].clientY; }
      if (e.touches.length === 2) { lastDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY); }
    });
    canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (e.touches.length === 1 && isDragging) {
        offsetX += e.touches[0].clientX - lastX;
        offsetY += e.touches[0].clientY - lastY;
        lastX = e.touches[0].clientX; lastY = e.touches[0].clientY;
      }
      if (e.touches.length === 2) {
        const dist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
        if (lastDist) scale = Math.max(0.35, Math.min(5, scale * (dist / lastDist)));
        lastDist = dist;
      }
    }, { passive: false });
    canvas.addEventListener('touchend', () => { isDragging = false; lastDist = 0; });
  }

  showSettings() {
    this.currentScreen = 'settings';
    this.root.innerHTML = '';
    const el = document.createElement('div');
    el.className = 'ui-layer bv-settings';
    const s = settingsManager.settings;
    el.innerHTML = `
      <div style="max-width:760px; margin:0 auto;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:28px; flex-wrap:wrap; gap:12px;">
          <h2 style="font-family:Orbitron; letter-spacing:0.2em; color:#fff;">SETTINGS • ONE-CLICK LAUNCHER</h2>
          <button class="bv-button" id="settings-back">BACK</button>
        </div>

        <div style="background:rgba(77,255,154,0.08); border:1px solid rgba(77,255,154,0.2); padding:16px; border-radius:6px; margin-bottom:24px;">
          <div style="font-family:'Orbitron',monospace; font-size:11px; letter-spacing:0.15em; color:#4dff9a; margin-bottom:8px;">🚀 ONE-CLICK LAUNCHER — NO BASH NEEDED</div>
          <div style="font-size:12px; color:#9a9aaa; line-height:1.6; font-family:'JetBrains Mono',monospace;">
            Windows: Double-click <span style="color:#fff; background:rgba(255,255,255,0.08); padding:2px 6px; border-radius:3px;">Black-Veil.bat</span> — auto installs, builds, starts server, opens browser<br>
            Linux/Mac: Double-click or <span style="color:#fff; background:rgba(255,255,255,0.08); padding:2px 6px; border-radius:3px;">./Black-Veil.sh</span><br>
            Node: <span style="color:#fff; background:rgba(255,255,255,0.08); padding:2px 6px; border-radius:3px;">node launch.mjs</span> — cross-platform, auto-open, notifications<br>
            Desktop App: <span style="color:#fff; background:rgba(255,255,255,0.08); padding:2px 6px; border-radius:3px;">npm run electron</span> — Electron window, no browser needed<br>
            Launcher Page: <span style="color:#fff; background:rgba(255,255,255,0.08); padding:2px 6px; border-radius:3px;">start.html</span> — auto-detects server, shows link, notification
          </div>
        </div>

        <div class="bv-settings-section">
          <h3>GRAPHICS • AUTO ADAPTIVE</h3>
          <div class="bv-setting-row"><span>Quality (AUTO adjusts based on FPS)</span><select id="set-quality" class="bv-button" style="pointer-events:auto; padding:6px 12px;"><option value="low" ${s.quality==='low'?'selected':''}>LOW</option><option value="medium" ${s.quality==='medium'?'selected':''}>MEDIUM</option><option value="high" ${s.quality==='high'?'selected':''}>HIGH</option><option value="ultra" ${s.quality==='ultra'?'selected':''}>ULTRA</option><option value="auto" ${s.quality==='auto'?'selected':''}>AUTO (Recommended)</option></select></div>
          <div class="bv-setting-row"><span>FPS Limit</span><select id="set-fps" class="bv-button" style="pointer-events:auto; padding:6px 12px;"><option value="30" ${s.fpsLimit===30?'selected':''}>30</option><option value="40" ${s.fpsLimit===40?'selected':''}>40</option><option value="60" ${s.fpsLimit===60?'selected':''}>60</option><option value="90" ${s.fpsLimit===90?'selected':''}>90</option><option value="0" ${s.fpsLimit===0?'selected':''}>AUTO</option></select></div>
          <div class="bv-setting-row"><span>Resolution Scale</span><input type="range" id="set-res" min="0.5" max="1.5" step="0.1" value="${s.resolutionScale}" style="pointer-events:auto; width:160px;"></div>
          <div class="bv-setting-row"><span>Photo Mode [P]</span><button class="bv-button" id="photo-btn" style="pointer-events:auto; padding:6px 12px;">TOGGLE PHOTO MODE</button></div>
        </div>

        <div class="bv-settings-section">
          <h3>AUDIO • PROCEDURAL + ADAPTIVE MUSIC</h3>
          <div class="bv-setting-row"><span>Master</span><input type="range" id="set-master" min="0" max="1" step="0.05" value="${s.masterVolume}" style="pointer-events:auto; width:160px;"></div>
          <div class="bv-setting-row"><span>Music (exploration/stealth/tension/combat)</span><input type="range" id="set-music" min="0" max="1" step="0.05" value="${s.musicVolume}" style="pointer-events:auto; width:160px;"></div>
          <div class="bv-setting-row"><span>SFX (gunshots, footsteps, VFX)</span><input type="range" id="set-sfx" min="0" max="1" step="0.05" value="${s.sfxVolume}" style="pointer-events:auto; width:160px;"></div>
        </div>

        <div class="bv-settings-section">
          <h3>CONTROLS • TOUCH + GYRO + LAYOUT EDITOR</h3>
          <div class="bv-setting-row"><span>Camera Sensitivity</span><input type="range" id="set-cam" min="0.2" max="2.5" step="0.1" value="${s.cameraSensitivity}" style="pointer-events:auto; width:160px;"></div>
          <div class="bv-setting-row"><span>Aim Sensitivity</span><input type="range" id="set-aim" min="0.2" max="2.5" step="0.1" value="${s.aimSensitivity}" style="pointer-events:auto; width:160px;"></div>
          <div class="bv-setting-row"><span>Gyro Aiming (mobile)</span><button id="set-gyro" class="bv-button" style="pointer-events:auto; padding:6px 12px;">${s.gyroEnabled ? 'ENABLED' : 'DISABLED'}</button></div>
          <div class="bv-setting-row"><span>Touch Opacity</span><input type="range" id="set-touch" min="0.2" max="1" step="0.05" value="${s.touchOpacity}" style="pointer-events:auto; width:160px;"></div>
          <div class="bv-setting-row"><span>Control Layout (drag to reposition)</span><button id="set-layout" class="bv-button" style="pointer-events:auto; padding:6px 12px;">EDIT LAYOUT</button></div>
        </div>

        <div class="bv-settings-section">
          <h3>LANGUAGE / ACCESSIBILITY • EN/AR RTL</h3>
          <div class="bv-setting-row"><span>Language</span><select id="set-lang" class="bv-button" style="pointer-events:auto; padding:6px 12px;"><option value="en" ${s.language==='en'?'selected':''}>ENGLISH</option><option value="ar" ${s.language==='ar'?'selected':''}>العربية</option></select></div>
          <div class="bv-setting-row"><span>Subtitles</span><button id="set-sub" class="bv-button" style="pointer-events:auto; padding:6px 12px;">${s.subtitles ? 'ON' : 'OFF'}</button></div>
          <div class="bv-setting-row"><span>Subtitle Size</span><input type="range" id="set-subsize" min="0.8" max="1.6" step="0.1" value="${s.subtitleSize}" style="pointer-events:auto; width:160px;"></div>
        </div>

        <div style="margin-top:28px; display:flex; gap:10px; flex-wrap:wrap;">
          <button class="bv-button" id="settings-reset">RESET TO DEFAULT</button>
          <button class="bv-button" id="settings-fullscreen">FULLSCREEN [F11]</button>
          <button class="bv-button" id="settings-launcher" style="border-color:rgba(77,255,154,0.3); color:#4dff9a;">OPEN LAUNCHER PAGE</button>
        </div>
      </div>
    `;
    this.root.appendChild(el);

    el.querySelector('#settings-back')?.addEventListener('click', () => this.showMenu());
    el.querySelector('#set-quality')?.addEventListener('change', (e) => settingsManager.set('quality', (e.target as HTMLSelectElement).value as any));
    el.querySelector('#set-fps')?.addEventListener('change', (e) => settingsManager.set('fpsLimit', parseInt((e.target as HTMLSelectElement).value)));
    el.querySelector('#set-res')?.addEventListener('input', (e) => settingsManager.set('resolutionScale', parseFloat((e.target as HTMLInputElement).value)));
    el.querySelector('#set-master')?.addEventListener('input', (e) => settingsManager.set('masterVolume', parseFloat((e.target as HTMLInputElement).value)));
    el.querySelector('#set-music')?.addEventListener('input', (e) => settingsManager.set('musicVolume', parseFloat((e.target as HTMLInputElement).value)));
    el.querySelector('#set-sfx')?.addEventListener('input', (e) => settingsManager.set('sfxVolume', parseFloat((e.target as HTMLInputElement).value)));
    el.querySelector('#set-cam')?.addEventListener('input', (e) => settingsManager.set('cameraSensitivity', parseFloat((e.target as HTMLInputElement).value)));
    el.querySelector('#set-aim')?.addEventListener('input', (e) => settingsManager.set('aimSensitivity', parseFloat((e.target as HTMLInputElement).value)));
    el.querySelector('#set-gyro')?.addEventListener('click', (e) => {
      const en = !settingsManager.get('gyroEnabled');
      settingsManager.set('gyroEnabled', en);
      (e.target as HTMLElement).textContent = en ? 'ENABLED' : 'DISABLED';
    });
    el.querySelector('#set-touch')?.addEventListener('input', (e) => settingsManager.set('touchOpacity', parseFloat((e.target as HTMLInputElement).value)));
    el.querySelector('#set-lang')?.addEventListener('change', (e) => {
      const lang = (e.target as HTMLSelectElement).value as 'en' | 'ar';
      settingsManager.set('language', lang);
      localization.setLanguage(lang);
      this.showSettings();
    });
    el.querySelector('#set-sub')?.addEventListener('click', (e) => {
      const on = !settingsManager.get('subtitles');
      settingsManager.set('subtitles', on);
      (e.target as HTMLElement).textContent = on ? 'ON' : 'OFF';
    });
    el.querySelector('#settings-reset')?.addEventListener('click', () => { settingsManager.reset(); this.showSettings(); });
    el.querySelector('#settings-fullscreen')?.addEventListener('click', () => {
      if (document.fullscreenElement) document.exitFullscreen();
      else document.documentElement.requestFullscreen().catch(() => {});
    });
    el.querySelector('#set-layout')?.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('bv:editLayout'));
      this.showHUD();
    });
    el.querySelector('#photo-btn')?.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('bv:togglePhoto'));
      this.showHUD();
    });
    el.querySelector('#settings-launcher')?.addEventListener('click', () => {
      window.open('start.html', '_blank');
    });
  }

  showLauncherInfo() {
    this.root.innerHTML = '';
    const el = document.createElement('div');
    el.className = 'ui-layer bv-panel';
    el.style.padding = '24px';
    el.style.overflowY = 'auto';
    el.innerHTML = `
      <div style="max-width:760px; margin:0 auto;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
          <h2 style="font-family:Orbitron; letter-spacing:0.2em; color:#fff;">🚀 ONE-CLICK LAUNCHER</h2>
          <button class="bv-button" id="launcher-back">BACK</button>
        </div>

        <div style="background:rgba(10,10,15,0.9); border:1px solid rgba(106,166,255,0.2); padding:20px; border-radius:8px; margin-bottom:20px;">
          <div style="font-family:'Orbitron',monospace; font-size:14px; color:#6aa6ff; margin-bottom:12px;">NO BASH NEEDED — JUST CLICK THE ICON</div>
          <div style="font-size:13px; color:#e8e8ec; line-height:1.7;">
            The launchers automatically:<br>
            1. Check Node.js and dependencies<br>
            2. Build production if needed<br>
            3. Start server on port 4173<br>
            4. Auto-open browser to http://localhost:4173<br>
            5. Show notification with link<br>
            6. Handle errors gracefully
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px,1fr)); gap:16px;">
          <div class="bv-credit-card" style="width:100%">
            <h3>🪟 WINDOWS</h3>
            <div style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#9a9aaa; line-height:1.7;">
              Double-click:<br>
              <span style="color:#fff; background:rgba(255,255,255,0.08); padding:4px 8px; border-radius:4px; display:inline-block; margin:4px 0;">Black-Veil.bat</span><br><br>
              What it does:<br>
              • Checks Node.js<br>
              • Installs deps if needed<br>
              • Builds if needed<br>
              • Opens browser after 3s<br>
              • Starts preview server<br>
              • Shows link notification<br><br>
              <span style="color:#4dff9a;">✓ No bash, just double-click</span>
            </div>
            <button class="bv-button" style="margin-top:12px; width:100%;" onclick="window.open('https://nodejs.org','_blank')">DOWNLOAD NODE.JS IF NEEDED</button>
          </div>

          <div class="bv-credit-card" style="width:100%">
            <h3>🐧 LINUX / 🍎 MAC</h3>
            <div style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#9a9aaa; line-height:1.7;">
              Double-click or run:<br>
              <span style="color:#fff; background:rgba(255,255,255,0.08); padding:4px 8px; border-radius:4px; display:inline-block; margin:4px 0;">./Black-Veil.sh</span><br>
              or<br>
              <span style="color:#fff; background:rgba(255,255,255,0.08); padding:4px 8px; border-radius:4px; display:inline-block; margin:4px 0;">Black-Veil.command</span> (Mac)<br><br>
              What it does:<br>
              • Same as Windows<br>
              • Auto-opens with xdg-open/open<br>
              • OS notification via notify-send/osascript<br>
              • Keeps terminal open<br><br>
              <span style="color:#4dff9a;">✓ chmod +x already done</span>
            </div>
          </div>

          <div class="bv-credit-card" style="width:100%">
            <h3>🟢 NODE LAUNCHER (CROSS-PLATFORM)</h3>
            <div style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#9a9aaa; line-height:1.7;">
              Run:<br>
              <span style="color:#fff; background:rgba(255,255,255,0.08); padding:4px 8px; border-radius:4px; display:inline-block; margin:4px 0;">node launch.mjs</span><br>
              or<br>
              <span style="color:#fff; background:rgba(255,255,255,0.08); padding:4px 8px; border-radius:4px; display:inline-block; margin:4px 0;">npm start</span><br><br>
              Features:<br>
              • Waits for server ready (HTTP check)<br>
              • Auto-opens browser (start/open/xdg-open)<br>
              • Shows banner + link + controls<br>
              • OS notification (Win/Mac/Linux)<br>
              • Handles Ctrl+C gracefully<br>
              • No external deps needed<br><br>
              <span style="color:#4dff9a;">✓ Best for developers</span>
            </div>
          </div>

          <div class="bv-credit-card" style="width:100%">
            <h3>💻 DESKTOP APP (ELECTRON)</h3>
            <div style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#9a9aaa; line-height:1.7;">
              Run:<br>
              <span style="color:#fff; background:rgba(255,255,255,0.08); padding:4px 8px; border-radius:4px; display:inline-block; margin:4px 0;">npm run electron</span><br>
              Build installer:<br>
              <span style="color:#fff; background:rgba(255,255,255,0.08); padding:4px 8px; border-radius:4px; display:inline-block; margin:4px 0;">npm run dist</span><br><br>
              Features:<br>
              • True desktop icon<br>
              • No browser needed<br>
              • Loads dist/index.html directly<br>
              • Menu with M11 Dev links<br>
              • Notification on load<br>
              • Builds NSIS/AppImage/DMG<br>
              • Output in release/<br><br>
              <span style="color:#4dff9a;">✓ True one-click icon</span>
            </div>
          </div>

          <div class="bv-credit-card" style="width:100%">
            <h3>🌐 LAUNCHER PAGE (start.html)</h3>
            <div style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#9a9aaa; line-height:1.7;">
              Open:<br>
              <span style="color:#fff; background:rgba(255,255,255,0.08); padding:4px 8px; border-radius:4px; display:inline-block; margin:4px 0;">start.html</span> in browser<br><br>
              Features:<br>
              • Auto-detects server (4173/5173)<br>
              • Shows status dot (green/yellow/red)<br>
              • Launch button opens game<br>
              • Build & Launch instructions<br>
              • Links to local/dev/github<br>
              • Notification API<br>
              • Polls every 3s<br>
              • ?auto=1 auto-redirects<br><br>
              <span style="color:#4dff9a;">✓ Visual launcher with link</span>
            </div>
            <button class="bv-button" style="margin-top:12px; width:100%;" onclick="window.open('start.html','_blank')">OPEN LAUNCHER PAGE</button>
          </div>

          <div class="bv-credit-card" style="width:100%">
            <h3>📦 GITHUB RELEASE</h3>
            <div style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#9a9aaa; line-height:1.7;">
              Release includes:<br>
              • dist/ production build<br>
              • Icons 192/512<br>
              • Launchers (.bat, .sh, .command)<br>
              • launch.mjs, start.html<br>
              • Electron app (optional)<br>
              • README + docs<br><br>
              Install:<br>
              1. Download release zip<br>
              2. Extract<br>
              3. Double-click launcher<br>
              4. Game auto-opens at localhost:4173<br><br>
              <span style="color:#4dff9a;">✓ No bash needed by user</span>
            </div>
            <button class="bv-button" style="margin-top:12px; width:100%;" onclick="window.open('https://github.com/M11-Developer/Black-Viel/releases','_blank')">VIEW RELEASES</button>
          </div>
        </div>

        <div style="margin-top:24px; background:rgba(0,0,0,0.5); border:1px solid rgba(255,255,255,0.06); padding:16px; border-radius:6px; text-align:center;">
          <div style="font-family:'Orbitron',monospace; font-size:12px; color:#6aa6ff; letter-spacing:0.15em;">BLACK VEIL v1.0.0 • ONE-CLICK LAUNCHER • M11 DEV</div>
          <div style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#5a5a6a; margin-top:6px;">All launchers show notification with link • Server at http://localhost:4173 • Press Ctrl+C to stop</div>
        </div>
      </div>
    `;
    this.root.appendChild(el);
    el.querySelector('#launcher-back')?.addEventListener('click', () => this.showMenu());
  }

  showCredits() {
    this.currentScreen = 'credits';
    this.root.innerHTML = '';
    const el = document.createElement('div');
    el.className = 'ui-layer bv-credits';
    el.innerHTML = `
      <h1>BLACK VEIL</h1>
      <h2>THE CITY FORGOT. YOU DIDN'T. • v1.0.0 • ONE-CLICK LAUNCHER</h2>

      <div class="bv-credit-card">
        <h3>🚀 ONE-CLICK LAUNCHER — NO BASH NEEDED</h3>
        <div style="font-size:13px; color:#e8e8ec; line-height:1.6; font-family:'JetBrains Mono',monospace;">
          <span style="color:#4dff9a;">Windows:</span> Double-click Black-Veil.bat → auto installs, builds, starts server at 4173, opens browser<br>
          <span style="color:#4dff9a;">Linux/Mac:</span> ./Black-Veil.sh or Black-Veil.command → same, with OS notifications<br>
          <span style="color:#4dff9a;">Node:</span> node launch.mjs or npm start → cross-platform, waits for server, auto-open, notification<br>
          <span style="color:#4dff9a;">Desktop:</span> npm run electron → Electron app, true icon, no browser needed, loads dist directly<br>
          <span style="color:#4dff9a;">Launcher Page:</span> start.html → auto-detects server 4173/5173, shows link, notification, auto-redirect ?auto=1<br>
          <span style="color:#4dff9a;">Release:</span> GitHub release with zip, dist, launchers, icons — download, extract, double-click
        </div>
      </div>

      <div class="bv-credit-card">
        <h3>GAME DESIGN / DEVELOPMENT • IMPROVED</h3>
        <div style="font-size:13px; color:#e8e8ec; line-height:1.6;">
          Cinematic 3D third-person tactical stealth action — premium web + desktop<br>
          Engine: Three.js + TypeScript + Vite + Electron + PWA<br>
          New: Safehouse hub, Security cameras + hack terminals + alarm escalation, VFX bullet holes/sparks/dust/blood decals, Achievements + stats, Dialogue branching EN/AR, Photo mode, Radio, More props/debris/vehicles/graffiti, Enhanced lighting 2048 shadows, 12 enemies, More loot med/intel/cache
        </div>
      </div>

      <div class="bv-credit-card">
        <h3>M11 DEV • PRIMARY CREATOR</h3>
        <a class="bv-credit-link primary" href="https://youtube.com/@m11-dev?si=GH9TIb3iQJh0UDev" target="_blank">
          <span style="font-size:20px;">▶</span> <span><strong>YouTube:</strong> @m11-dev — Primary Creator Channel</span>
        </a>
        <a class="bv-credit-link" href="https://github.com/M11-Developer" target="_blank">
          <span>◍</span> <span><strong>GitHub:</strong> M11-Developer</span>
        </a>
        <a class="bv-credit-link" href="https://vt.tiktok.com/ZS9A2FU1fAJWo-k9M67/" target="_blank">
          <span>♪</span> <span><strong>TikTok:</strong> M11 Developer</span>
        </a>
        <div style="margin-top:12px; padding-top:12px; border-top:1px solid rgba(255,255,255,0.06); font-family:'JetBrains Mono',monospace; font-size:12px; color:#8a8a9a;">
          Contact: ma7292537@gmail.com • Release: github.com/M11-Developer/Black-Viel/releases
        </div>
      </div>

      <div class="bv-credit-card">
        <h3>IMPROVEMENTS • v1.0.0 → v1.1.0</h3>
        <div style="font-size:11px; color:#8a8a9a; line-height:1.7; font-family:'JetBrains Mono',monospace;">
          ✓ One-click launchers: .bat, .sh, .command, .desktop, launch.mjs, start.html, Electron<br>
          ✓ Auto-open browser + OS notifications + link display<br>
          ✓ GitHub release with artifacts<br>
          ✓ World: safehouse -58,15 with 5 stations, more buildings, sidewalks, balconies, antennas, debris 20, bins 6, 3 cars, graffiti, speaker<br>
          ✓ Lighting: 2048 shadows, 8 street lights, safehouse warm, moon, cache glow, window interior lights<br>
          ✓ Security: 5 cameras + 3 terminals, FOV, rotation patrol, LED green/red, hack disables, alarm escalation normal/suspicious/alert/lockdown/reinforcements<br>
          ✓ VFX: muzzle flash + sparks, impact concrete/metal/flesh, bullet holes decals 80 pool fade 30s, dust, blood, pooling<br>
          ✓ Safehouse: floor, walls, 5 stations weapons/map/missions/upgrades/story with labels, bed, investigation wall notes 5 canvas, warm light, emissive screens<br>
          ✓ Achievements: 8 achievements first_blood/ghost/explorer/intel/marksman/hidden_cache/chapter1/pacifist, stats kills/headshots/intel/districts/missions/stealth/deaths/distance/time, localStorage, popup<br>
          ✓ Dialogue: branching EN/AR, Kael intro + Helix logs, choices, flags, reputation, auto-advance, UI box speaker/emotion/text/choices<br>
          ✓ Photo mode: P toggle, hide HUD/touch, free camera WASD + mouse look<br>
          ✓ Loot: 10 loot intel/ammo/cache/med, floating animation sin, rotation<br>
          ✓ Enemies: 12 positions, more variety<br>
          ✓ Map: 9 locations, bounds rects, safehouse/security markers, discovered 7<br>
          ✓ UI: achievements in inventory + menu, progression stats, dialogue, launcher info page, photo mode button, improved HUD
        </div>
      </div>

      <button class="bv-button" id="credits-back" style="margin-top:20px; pointer-events:auto;">BACK TO MENU</button>
      <div style="margin-top:20px; font-family:'JetBrains Mono',monospace; font-size:10px; color:#4a4a5a;">BLACK VEIL • ONE-CLICK LAUNCHER • ELECTRON + PWA • NO BASH NEEDED • BUILT WITH CARE</div>
    `;
    this.root.appendChild(el);
    el.querySelector('#credits-back')?.addEventListener('click', () => this.showMenu());
  }

  showNotification(text: string, duration = 3500) {
    const notif = document.createElement('div');
    notif.style.cssText = `position:fixed; top:80px; left:50%; transform:translateX(-50%); background:rgba(0,0,0,0.88); border:1px solid rgba(106,166,255,0.35); color:#fff; padding:12px 22px; font-family:'JetBrains Mono',monospace; font-size:12px; letter-spacing:0.08em; z-index:100; pointer-events:none; transition:opacity 0.3s ease; border-radius:20px; backdrop-filter:blur(12px); max-width:90vw; text-align:center;`;
    notif.textContent = text;
    document.body.appendChild(notif);
    setTimeout(() => { notif.style.opacity = '0'; setTimeout(() => notif.remove(), 300); }, duration);
  }

  isInMenu() { return this.isMenuOpen; }
}
