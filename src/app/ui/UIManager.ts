import { localization } from '../localization/LocalizationManager';
import { settingsManager } from '../settings/SettingsManager';
import { saveManager } from '../save/SaveManager';
import { missionManager } from '../missions/MissionManager';
import { WEAPONS } from '../../data/weapons';

export class UIManager {
  private root: HTMLElement;
  private hudEl: HTMLElement | null = null;
  private menuEl: HTMLElement | null = null;
  private currentScreen: 'menu' | 'hud' | 'inventory' | 'map' | 'settings' | 'credits' | 'loading' = 'menu';
  private isMenuOpen = true;

  constructor() {
    this.root = document.getElementById('ui-root')!;
    this.createStyles();
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
      .bv-menu-left { width: min(420px, 90vw); padding: 32px 24px; display:flex; flex-direction:column; justify-content:center; border-right:1px solid rgba(255,255,255,0.06); }
      .bv-logo { font-family:'Orbitron',monospace; font-weight:900; font-size:clamp(28px,5vw,48px); letter-spacing:0.22em; color:#fff; line-height:0.9; margin-bottom:8px; text-shadow:0 0 30px rgba(106,166,255,0.5); }
      .bv-tagline { font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:0.35em; color:#6a6a7a; text-transform:uppercase; margin-bottom:48px; }
      .bv-menu-items { display:flex; flex-direction:column; gap:4px; }
      .bv-menu-item { font-family:'Orbitron',monospace; font-size:14px; letter-spacing:0.15em; color:#8a8a9a; padding:14px 20px; cursor:pointer; transition:all 0.2s ease; border:1px solid transparent; background:rgba(255,255,255,0.02); position:relative; overflow:hidden; }
      .bv-menu-item::before { content:''; position:absolute; left:0; top:0; bottom:0; width:2px; background:#6aa6ff; transform:scaleY(0); transition:transform 0.2s ease; }
      .bv-menu-item:hover { color:#fff; background:rgba(106,166,255,0.08); border-color:rgba(106,166,255,0.2); transform:translateX(4px); }
      .bv-menu-item:hover::before { transform:scaleY(1); }
      .bv-menu-item.primary { color:#fff; background:linear-gradient(90deg, rgba(106,166,255,0.15), rgba(167,139,250,0.1)); border-color:rgba(106,166,255,0.3); }
      .bv-menu-item.primary:hover { background:linear-gradient(90deg, rgba(106,166,255,0.25), rgba(167,139,250,0.18)); box-shadow:0 0 20px rgba(106,166,255,0.2); }
      .bv-menu-right { flex:1; padding:32px; display:flex; flex-direction:column; justify-content:flex-end; align-items:flex-end; text-align:right; }
      .bv-version { font-family:'JetBrains Mono',monospace; font-size:10px; color:#4a4a5a; letter-spacing:0.1em; }
      .bv-hud { position:absolute; inset:0; pointer-events:none; }
      .bv-hud-top { position:absolute; top:0; left:0; right:0; padding:16px 20px; display:flex; justify-content:space-between; align-items:flex-start; }
      .bv-hud-objective { background:rgba(0,0,0,0.6); backdrop-filter:blur(12px); border:1px solid rgba(255,255,255,0.08); padding:12px 16px; min-width:260px; }
      .bv-hud-objective-title { font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:0.2em; color:#6aa6ff; margin-bottom:6px; }
      .bv-hud-objective-text { font-size:13px; color:#e8e8ec; line-height:1.4; }
      .bv-hud-objective-progress { height:2px; background:rgba(255,255,255,0.1); margin-top:8px; overflow:hidden; }
      .bv-hud-objective-bar { height:100%; background:linear-gradient(90deg,#6aa6ff,#a78bfa); transition:width 0.3s ease; }
      .bv-hud-bottom { position:absolute; bottom:0; left:0; right:0; padding:16px 20px; display:flex; justify-content:space-between; align-items:flex-end; }
      .bv-hud-health { display:flex; gap:16px; align-items:center; }
      .bv-health-bar { width:140px; height:4px; background:rgba(255,255,255,0.1); position:relative; overflow:hidden; }
      .bv-health-fill { height:100%; background:linear-gradient(90deg,#4dff9a,#6aa6ff); transition:width 0.2s ease; }
      .bv-armor-fill { height:100%; background:linear-gradient(90deg,#6aa6ff,#a78bfa); transition:width 0.2s ease; }
      .bv-hud-ammo { text-align:right; }
      .bv-ammo-count { font-family:'Orbitron',monospace; font-size:28px; font-weight:600; color:#fff; line-height:1; }
      .bv-ammo-reserve { font-family:'JetBrains Mono',monospace; font-size:12px; color:#8a8a9a; }
      .bv-hud-stealth { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); background:rgba(0,0,0,0.7); border:1px solid rgba(255,255,255,0.1); padding:8px 16px; font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:0.15em; color:#fff; opacity:0; transition:opacity 0.3s ease; }
      .bv-hud-stealth.visible { opacity:1; }
      .bv-hud-crosshair { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:24px; height:24px; pointer-events:none; }
      .bv-hud-crosshair::before, .bv-hud-crosshair::after { content:''; position:absolute; background:rgba(255,255,255,0.8); }
      .bv-hud-crosshair::before { width:1px; height:12px; left:50%; top:50%; transform:translate(-50%,-50%); }
      .bv-hud-crosshair::after { width:12px; height:1px; left:50%; top:50%; transform:translate(-50%,-50%); }
      .bv-hud-crosshair.aiming { width:8px; height:8px; }
      .bv-hud-interact { position:absolute; bottom:140px; left:50%; transform:translateX(-50%); background:rgba(0,0,0,0.8); border:1px solid rgba(106,166,255,0.3); padding:10px 20px; font-family:'JetBrains Mono',monospace; font-size:12px; color:#fff; letter-spacing:0.1em; }
      .bv-panel { background:rgba(10,10,15,0.96); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.08); }
      .bv-button { font-family:'Orbitron',monospace; font-size:12px; letter-spacing:0.15em; padding:12px 24px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); color:#e8e8ec; cursor:pointer; transition:all 0.2s ease; }
      .bv-button:hover { background:rgba(106,166,255,0.15); border-color:rgba(106,166,255,0.3); color:#fff; }
      .bv-credits { position:absolute; inset:0; background:radial-gradient(100% 100% at 50% 0%, #141420 0%, #0a0a0f 60%, #050508 100%); display:flex; flex-direction:column; align-items:center; justify-content:center; padding:32px; text-align:center; overflow-y:auto; }
      .bv-credits h1 { font-family:'Orbitron',monospace; font-size:32px; letter-spacing:0.2em; color:#fff; margin-bottom:8px; }
      .bv-credits h2 { font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:0.3em; color:#6a6a7a; margin-bottom:32px; }
      .bv-credit-card { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:24px; margin:12px 0; width:min(480px,90vw); text-align:left; }
      .bv-credit-card h3 { font-family:'Orbitron',monospace; font-size:12px; letter-spacing:0.2em; color:#6aa6ff; margin-bottom:12px; }
      .bv-credit-link { display:flex; align-items:center; gap:12px; padding:10px 0; color:#e8e8ec; text-decoration:none; font-size:14px; transition:color 0.2s; }
      .bv-credit-link:hover { color:#6aa6ff; }
      .bv-credit-link.primary { font-weight:700; color:#fff; background:linear-gradient(90deg, rgba(106,166,255,0.15), transparent); padding:12px; border-left:2px solid #6aa6ff; }
      .bv-map { position:absolute; inset:0; background:rgba(5,5,8,0.96); display:flex; }
      .bv-map-canvas { flex:1; background:#0a0a0f; position:relative; overflow:hidden; }
      .bv-map-sidebar { width:320px; background:rgba(15,15,20,0.98); border-left:1px solid rgba(255,255,255,0.08); padding:20px; overflow-y:auto; }
      .bv-inventory { position:absolute; inset:0; background:rgba(5,5,8,0.96); display:flex; padding:20px; gap:20px; }
      .bv-inv-grid { flex:1; display:grid; grid-template-columns:repeat(auto-fill, minmax(140px,1fr)); gap:12px; align-content:start; }
      .bv-inv-item { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:12px; cursor:pointer; transition:all 0.2s; }
      .bv-inv-item:hover { border-color:rgba(106,166,255,0.4); background:rgba(106,166,255,0.08); }
      .bv-inv-item.equipped { border-color:#6aa6ff; background:rgba(106,166,255,0.12); }
      .bv-settings { position:absolute; inset:0; background:rgba(5,5,8,0.96); padding:24px; overflow-y:auto; }
      .bv-settings-section { margin-bottom:32px; }
      .bv-settings-section h3 { font-family:'Orbitron',monospace; font-size:13px; letter-spacing:0.15em; color:#6aa6ff; margin-bottom:16px; }
      .bv-setting-row { display:flex; justify-content:space-between; align-items:center; padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.06); }
      .bv-fps { position:absolute; top:8px; left:8px; font-family:'JetBrains Mono',monospace; font-size:10px; color:#5a5a6a; background:rgba(0,0,0,0.6); padding:4px 8px; pointer-events:none; }
      @media (max-width:768px) { .bv-menu-content { flex-direction:column; } .bv-menu-left { width:100%; border-right:none; border-bottom:1px solid rgba(255,255,255,0.06); } .bv-hud-top { flex-direction:column; gap:12px; } }
    `;
    document.head.appendChild(style);
  }

  showMenu() {
    this.currentScreen = 'menu';
    this.isMenuOpen = true;
    this.root.innerHTML = '';
    const el = document.createElement('div');
    el.className = 'ui-layer bv-menu';
    el.innerHTML = `
      <div class="bv-menu-bg"></div>
      <div class="bv-menu-content">
        <div class="bv-menu-left">
          <div class="bv-logo">${localization.t('game.title')}</div>
          <div class="bv-tagline">${localization.t('game.tagline')}</div>
          <div class="bv-menu-items">
            <div class="bv-menu-item primary" data-action="continue">${localization.t('menu.continue')}</div>
            <div class="bv-menu-item" data-action="new">${localization.t('menu.new_game')}</div>
            <div class="bv-menu-item" data-action="missions">${localization.t('menu.missions')}</div>
            <div class="bv-menu-item" data-action="settings">${localization.t('menu.settings')}</div>
            <div class="bv-menu-item" data-action="credits">${localization.t('menu.credits')}</div>
            <div class="bv-menu-item" data-action="install" id="install-btn" style="display:none">INSTALL GAME</div>
          </div>
        </div>
        <div class="bv-menu-right">
          <div style="max-width:360px; text-align:left; background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.06); padding:20px; backdrop-filter:blur(12px);">
            <div style="font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:0.2em; color:#6aa6ff; margin-bottom:12px;">// SECTOR 7 INTEL</div>
            <div style="font-size:13px; line-height:1.6; color:#9a9aaa;">
              Veyra Blackout - Day 1095<br><br>
              The city didn't die. It was killed. Power grid failure was too clean, too coordinated. Someone wanted Veyra dark.<br><br>
              <span style="color:#e8e8ec;">Your sister knew. Now she's missing.</span><br><br>
              <span style="font-family:'JetBrains Mono',monospace; font-size:11px; color:#5a5a6a;">> ENTER THE DEAD CITY<br>> SURVIVE ITS PEOPLE<br>> UNCOVER ITS SECRETS</span>
            </div>
          </div>
          <div class="bv-version" style="margin-top:24px;">BLACK VEIL v1.0.0 • BUILD 430e42e • M11 DEV</div>
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

    // PWA install
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
      case 'settings':
        this.showSettings();
        break;
      case 'credits':
        this.showCredits();
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
        <div style="display:flex; gap:8px;">
          <button class="bv-button" id="hud-map-btn" style="pointer-events:auto; padding:8px 12px; font-size:10px;">MAP [M]</button>
          <button class="bv-button" id="hud-inv-btn" style="pointer-events:auto; padding:8px 12px; font-size:10px;">INV [TAB]</button>
          <button class="bv-button" id="hud-menu-btn" style="pointer-events:auto; padding:8px 12px; font-size:10px;">MENU [ESC]</button>
        </div>
      </div>
      <div class="bv-hud-bottom">
        <div class="bv-hud-health">
          <div>
            <div style="font-family:'JetBrains Mono',monospace; font-size:9px; color:#5a5a6a; letter-spacing:0.15em; margin-bottom:4px;">HEALTH</div>
            <div class="bv-health-bar"><div class="bv-health-fill" id="hud-health" style="width:100%"></div></div>
            <div style="font-family:'JetBrains Mono',monospace; font-size:9px; color:#5a5a6a; letter-spacing:0.15em; margin-top:6px;">ARMOR</div>
            <div class="bv-health-bar"><div class="bv-armor-fill" id="hud-armor" style="width:50%"></div></div>
          </div>
          <div style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#8a8a9a; margin-left:8px;">
            <div id="hud-stealth-text">HIDDEN</div>
            <div id="hud-faction" style="color:#6aa6ff; margin-top:2px;">ASHEN • NEUTRAL</div>
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
    el.querySelector('#hud-menu-btn')?.addEventListener('click', () => this.showMenu());

    // Mission updates
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
    // Trigger initial
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
    if (this.currentScreen !== 'hud') return;
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
    if (fpsEl) fpsEl.textContent = `${Math.round(data.fps)} FPS • ${data.frameTime.toFixed(1)}ms • ${data.quality}`;
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
    this.currentScreen = 'hud';
    this.root.innerHTML = '';
    const el = document.createElement('div');
    el.className = 'ui-layer bv-panel';
    el.style.padding = '24px';
    el.style.overflowY = 'auto';
    const missions = missionManager.getAll();
    el.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
        <h2 style="font-family:Orbitron; letter-spacing:0.2em; color:#fff;">MISSIONS</h2>
        <button class="bv-button" id="missions-back">BACK</button>
      </div>
      <div style="display:grid; gap:16px;">
        ${missions.map(m => `
          <div class="bv-credit-card" data-mission="${m.id}" style="cursor:pointer; ${missionManager.getActive()?.id === m.id ? 'border-color:#6aa6ff; background:rgba(106,166,255,0.08);' : ''}">
            <h3>${m.title} • CH${m.chapter}</h3>
            <div style="font-size:13px; color:#9a9aaa; line-height:1.5; margin:8px 0;">${m.description}</div>
            <div style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#5a5a6a;">${m.location} • ${m.difficulty.toUpperCase()} • ${m.rewards.xp} XP</div>
            <div style="margin-top:12px;">
              ${m.objectives.map(o => `<div style="font-size:11px; color:${o.completed ? '#4dff9a' : '#8a8a9a'}; margin:2px 0;">${o.completed ? '✓' : '○'} ${o.title}</div>`).join('')}
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
      <div style="width:320px; background:rgba(15,15,20,0.98); border:1px solid rgba(255,255,255,0.08); padding:20px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
          <h2 style="font-family:Orbitron; font-size:16px; letter-spacing:0.15em; color:#fff;">INVENTORY</h2>
          <button class="bv-button" id="inv-back" style="padding:6px 12px; font-size:10px;">BACK</button>
        </div>
        <div style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#5a5a6a; margin-bottom:12px;">WEAPONS • ${WEAPONS.length} AVAILABLE</div>
        <div id="inv-weapons" style="display:flex; flex-direction:column; gap:8px;"></div>
        <div style="margin-top:24px; padding-top:16px; border-top:1px solid rgba(255,255,255,0.06);">
          <div style="font-family:'JetBrains Mono',monospace; font-size:10px; color:#5a5a6a; margin-bottom:8px;">STATS</div>
          <div style="font-size:12px; color:#8a8a9a; line-height:1.8;">
            Missions: ${saveManager.load()?.missions.completed.length || 0}<br>
            Currency: ${saveManager.load()?.progression.currency || 0} CR<br>
            Level: ${saveManager.load()?.progression.level || 1}
          </div>
        </div>
      </div>
      <div class="bv-inv-grid" id="inv-grid"></div>
    `;
    this.root.appendChild(el);
    el.querySelector('#inv-back')?.addEventListener('click', () => this.showHUD());

    const weaponsDiv = el.querySelector('#inv-weapons') as HTMLElement;
    const grid = el.querySelector('#inv-grid') as HTMLElement;

    // Populate from event
    window.dispatchEvent(new CustomEvent('bv:requestInventory'));

    // Listen for inventory data
    const handler = (e: any) => {
      const { weapons, currentIndex } = e.detail;
      weaponsDiv.innerHTML = weapons.map((w: any, i: number) => `
        <div class="bv-inv-item ${i === currentIndex ? 'equipped' : ''}" data-idx="${i}">
          <div style="font-family:Orbitron; font-size:12px; color:#fff; letter-spacing:0.05em;">${w.config.name}</div>
          <div style="font-size:11px; color:#8a8a9a; margin-top:4px;">${w.config.category.toUpperCase()} • ${w.ammoInMag}/${w.reserve}</div>
          <div style="font-size:10px; color:#5a5a6a; margin-top:4px;">${w.config.description}</div>
        </div>
      `).join('');
      weaponsDiv.querySelectorAll('[data-idx]').forEach(item => {
        item.addEventListener('click', () => {
          const idx = parseInt((item as HTMLElement).dataset.idx!);
          window.dispatchEvent(new CustomEvent('bv:equipWeapon', { detail: { index: idx } }));
          this.showHUD();
        });
      });

      grid.innerHTML = weapons.map((w: any) => `
        <div class="bv-inv-item">
          <div style="height:60px; background:rgba(255,255,255,0.02); display:flex; align-items:center; justify-content:center; font-family:Orbitron; font-size:10px; color:#5a5a6a;">${w.config.category}</div>
          <div style="padding:8px 0 0 0;">
            <div style="font-size:12px; color:#fff;">${w.config.name}</div>
            <div style="font-size:10px; color:#6aa6ff;">DMG ${w.config.damage} • RNG ${w.config.range}m</div>
          </div>
        </div>
      `).join('');
    };
    window.addEventListener('bv:inventoryData', handler as any, { once: true });
  }

  showMap() {
    this.currentScreen = 'map';
    this.root.innerHTML = '';
    const el = document.createElement('div');
    el.className = 'ui-layer bv-map';
    el.innerHTML = `
      <div class="bv-map-canvas" id="map-canvas">
        <canvas id="map-canvas-el" style="width:100%; height:100%;"></canvas>
        <div style="position:absolute; top:16px; left:16px; background:rgba(0,0,0,0.7); padding:8px 12px; font-family:'JetBrains Mono',monospace; font-size:10px; color:#6aa6ff; letter-spacing:0.15em;">VEYRA SECTOR 7 • MAP</div>
        <button class="bv-button" id="map-back" style="position:absolute; top:16px; right:16px; pointer-events:auto;">BACK</button>
        <div style="position:absolute; bottom:16px; left:16px; background:rgba(0,0,0,0.7); padding:8px 12px; font-family:'JetBrains Mono',monospace; font-size:10px; color:#8a8a9a;">
          SCROLL TO ZOOM • DRAG TO PAN<br>
          <span style="color:#6aa6ff;">■</span> PLAYER • <span style="color:#ff4d6a;">■</span> ENEMY • <span style="color:#4dff9a;">■</span> OBJECTIVE
        </div>
      </div>
      <div class="bv-map-sidebar">
        <h3 style="font-family:Orbitron; font-size:13px; letter-spacing:0.15em; color:#fff; margin-bottom:16px;">LOCATIONS</h3>
        <div id="map-locations" style="display:flex; flex-direction:column; gap:8px;"></div>
      </div>
    `;
    this.root.appendChild(el);
    el.querySelector('#map-back')?.addEventListener('click', () => this.showHUD());

    // Simple map rendering
    const canvas = el.querySelector('#map-canvas-el') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;
    const resize = () => {
      canvas.width = canvas.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.clientHeight * window.devicePixelRatio;
    };
    resize();

    let offsetX = 0, offsetY = 0, scale = 1.2;
    let isDragging = false, lastX = 0, lastY = 0;

    const locations = [
      { name: 'Central Street', x: 0, z: -40, type: 'street', discovered: true },
      { name: 'Residential Block', x: -35, z: 20, type: 'residential', discovered: true },
      { name: 'Helix Tower', x: 5, z: 65, type: 'corporate', discovered: false },
      { name: 'Industrial Yard', x: 45, z: -20, type: 'industrial', discovered: true },
      { name: 'Northern Checkpoint', x: 0, z: -80, type: 'objective', discovered: true },
      { name: 'Substation', x: 55, z: -5, type: 'objective', discovered: false },
      { name: 'Hidden Cache', x: -45, z: -75, type: 'secret', discovered: false },
    ];

    const locDiv = el.querySelector('#map-locations') as HTMLElement;
    locDiv.innerHTML = locations.map(l => `
      <div style="padding:10px; background:${l.discovered ? 'rgba(106,166,255,0.08)' : 'rgba(255,255,255,0.02)'}; border:1px solid ${l.discovered ? 'rgba(106,166,255,0.2)' : 'rgba(255,255,255,0.06)'}; cursor:pointer;">
        <div style="font-size:12px; color:${l.discovered ? '#fff' : '#5a5a6a'};">${l.name}</div>
        <div style="font-size:10px; color:#6a6a7a; margin-top:2px;">${l.type.toUpperCase()} • ${l.discovered ? 'DISCOVERED' : 'UNDISCOVERED'}</div>
      </div>
    `).join('');

    let playerPos = { x: 0, z: 0 };
    window.addEventListener('bv:playerPos', (e: any) => { playerPos = e.detail; });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      const w = canvas.clientWidth, h = canvas.clientHeight;
      ctx.translate(w / 2 + offsetX, h / 2 + offsetY);
      ctx.scale(scale, scale);

      // Grid
      ctx.strokeStyle = 'rgba(255,255,255,0.04)';
      ctx.lineWidth = 1;
      for (let x = -200; x <= 200; x += 20) {
        ctx.beginPath(); ctx.moveTo(x, -200); ctx.lineTo(x, 200); ctx.stroke();
      }
      for (let z = -200; z <= 200; z += 20) {
        ctx.beginPath(); ctx.moveTo(-200, z); ctx.lineTo(200, z); ctx.stroke();
      }

      // Districts
      ctx.fillStyle = 'rgba(106,166,255,0.05)';
      ctx.strokeStyle = 'rgba(106,166,255,0.15)';
      locations.forEach(l => {
        if (l.type === 'objective') {
          ctx.fillStyle = 'rgba(77,255,154,0.15)';
          ctx.strokeStyle = 'rgba(77,255,154,0.4)';
        } else if (l.type === 'secret') {
          ctx.fillStyle = 'rgba(255,184,77,0.1)';
          ctx.strokeStyle = 'rgba(255,184,77,0.3)';
        } else {
          ctx.fillStyle = 'rgba(255,255,255,0.03)';
          ctx.strokeStyle = 'rgba(255,255,255,0.08)';
        }
        ctx.beginPath();
        ctx.arc(l.x, l.z, l.type === 'objective' ? 8 : 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });

      // Player
      ctx.fillStyle = '#6aa6ff';
      ctx.beginPath();
      ctx.arc(playerPos.x, playerPos.z, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.restore();
      requestAnimationFrame(draw);
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
      scale = Math.max(0.4, Math.min(4, scale * (e.deltaY < 0 ? 1.1 : 0.9)));
    }, { passive: false });

    // Touch
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
        if (lastDist) scale = Math.max(0.4, Math.min(4, scale * (dist / lastDist)));
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
      <div style="max-width:720px; margin:0 auto;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:32px;">
          <h2 style="font-family:Orbitron; letter-spacing:0.2em; color:#fff;">SETTINGS</h2>
          <button class="bv-button" id="settings-back">BACK</button>
        </div>

        <div class="bv-settings-section">
          <h3>GRAPHICS</h3>
          <div class="bv-setting-row"><span>Quality</span><select id="set-quality" class="bv-button" style="pointer-events:auto; padding:6px 12px;"><option value="low" ${s.quality==='low'?'selected':''}>LOW</option><option value="medium" ${s.quality==='medium'?'selected':''}>MEDIUM</option><option value="high" ${s.quality==='high'?'selected':''}>HIGH</option><option value="ultra" ${s.quality==='ultra'?'selected':''}>ULTRA</option><option value="auto" ${s.quality==='auto'?'selected':''}>AUTO</option></select></div>
          <div class="bv-setting-row"><span>FPS Limit</span><select id="set-fps" class="bv-button" style="pointer-events:auto; padding:6px 12px;"><option value="30" ${s.fpsLimit===30?'selected':''}>30</option><option value="40" ${s.fpsLimit===40?'selected':''}>40</option><option value="60" ${s.fpsLimit===60?'selected':''}>60</option><option value="90" ${s.fpsLimit===90?'selected':''}>90</option><option value="0" ${s.fpsLimit===0?'selected':''}>AUTO</option></select></div>
          <div class="bv-setting-row"><span>Resolution Scale</span><input type="range" id="set-res" min="0.5" max="1.5" step="0.1" value="${s.resolutionScale}" style="pointer-events:auto; width:160px;"></div>
        </div>

        <div class="bv-settings-section">
          <h3>AUDIO</h3>
          <div class="bv-setting-row"><span>Master</span><input type="range" id="set-master" min="0" max="1" step="0.05" value="${s.masterVolume}" style="pointer-events:auto; width:160px;"></div>
          <div class="bv-setting-row"><span>Music</span><input type="range" id="set-music" min="0" max="1" step="0.05" value="${s.musicVolume}" style="pointer-events:auto; width:160px;"></div>
          <div class="bv-setting-row"><span>SFX</span><input type="range" id="set-sfx" min="0" max="1" step="0.05" value="${s.sfxVolume}" style="pointer-events:auto; width:160px;"></div>
        </div>

        <div class="bv-settings-section">
          <h3>CONTROLS</h3>
          <div class="bv-setting-row"><span>Camera Sensitivity</span><input type="range" id="set-cam" min="0.2" max="2.5" step="0.1" value="${s.cameraSensitivity}" style="pointer-events:auto; width:160px;"></div>
          <div class="bv-setting-row"><span>Aim Sensitivity</span><input type="range" id="set-aim" min="0.2" max="2.5" step="0.1" value="${s.aimSensitivity}" style="pointer-events:auto; width:160px;"></div>
          <div class="bv-setting-row"><span>Gyro Aiming</span><button id="set-gyro" class="bv-button" style="pointer-events:auto; padding:6px 12px;">${s.gyroEnabled ? 'ENABLED' : 'DISABLED'}</button></div>
          <div class="bv-setting-row"><span>Touch Opacity</span><input type="range" id="set-touch" min="0.2" max="1" step="0.05" value="${s.touchOpacity}" style="pointer-events:auto; width:160px;"></div>
          <div class="bv-setting-row"><span>Control Layout</span><button id="set-layout" class="bv-button" style="pointer-events:auto; padding:6px 12px;">EDIT LAYOUT</button></div>
        </div>

        <div class="bv-settings-section">
          <h3>LANGUAGE / ACCESSIBILITY</h3>
          <div class="bv-setting-row"><span>Language</span><select id="set-lang" class="bv-button" style="pointer-events:auto; padding:6px 12px;"><option value="en" ${s.language==='en'?'selected':''}>ENGLISH</option><option value="ar" ${s.language==='ar'?'selected':''}>العربية</option></select></div>
          <div class="bv-setting-row"><span>Subtitles</span><button id="set-sub" class="bv-button" style="pointer-events:auto; padding:6px 12px;">${s.subtitles ? 'ON' : 'OFF'}</button></div>
          <div class="bv-setting-row"><span>Subtitle Size</span><input type="range" id="set-subsize" min="0.8" max="1.6" step="0.1" value="${s.subtitleSize}" style="pointer-events:auto; width:160px;"></div>
        </div>

        <div style="margin-top:32px; display:flex; gap:12px;">
          <button class="bv-button" id="settings-reset">RESET TO DEFAULT</button>
          <button class="bv-button" id="settings-fullscreen">FULLSCREEN</button>
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
  }

  showCredits() {
    this.currentScreen = 'credits';
    this.root.innerHTML = '';
    const el = document.createElement('div');
    el.className = 'ui-layer bv-credits';
    el.innerHTML = `
      <h1>BLACK VEIL</h1>
      <h2>THE CITY FORGOT. YOU DIDN'T.</h2>

      <div class="bv-credit-card">
        <h3>GAME DESIGN / DEVELOPMENT</h3>
        <div style="font-size:14px; color:#e8e8ec; line-height:1.6;">
          A cinematic 3D third-person tactical stealth action game built as a premium web experience.<br>
          Engine: Three.js + TypeScript + Vite<br>
          Architecture: Modular AAA pipeline
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
          Contact: ma7292537@gmail.com
        </div>
      </div>

      <div class="bv-credit-card">
        <h3>WORLD / LORE</h3>
        <div style="font-size:13px; color:#9a9aaa; line-height:1.6;">
          Veyra Megacity — 3 years after The Blackout. A coordinated technological failure erased power, comms, transport. Millions vanished. Official story: cascading infrastructure failure. Truth: Project BLACK VEIL.<br><br>
          Factions: Vanguard (ex-military), Ashen (survivors), Helix Corp (security), Veil (shadow org).<br><br>
          Protagonist returns searching for Mara — sister, engineer, last seen near Sector 7. What she found could rewrite the Blackout.
        </div>
      </div>

      <div class="bv-credit-card">
        <h3>TECHNICAL ACHIEVEMENTS</h3>
        <div style="font-size:12px; color:#8a8a9a; line-height:1.8; font-family:'JetBrains Mono',monospace;">
          ✓ True 3D — player, enemies, buildings, props as 3D objects<br>
          ✓ Procedural city kit — modular buildings, interiors, rooftops<br>
          ✓ Third-person controller — walk/jog/sprint/crouch/jump/vault/mantle<br>
          ✓ Camera system — collision avoidance, shoulder switch, aim zoom<br>
          ✓ Combat — 6 weapons, attachments, recoil, spread, reload<br>
          ✓ AI — 6 archetypes, FSM, perception, squad, director<br>
          ✓ Stealth — visibility, sound, detection stages<br>
          ✓ Missions — data-driven, multi-approach, Chapter 1<br>
          ✓ World — 5 districts + hidden, power states, storytelling<br>
          ✓ Audio — procedural, positional, adaptive music<br>
          ✓ Mobile — touch joysticks, gyro, control editor, safe-area<br>
          ✓ PWA — manifest, service worker, install flow<br>
          ✓ Localization — EN/AR RTL, translation system<br>
          ✓ Performance — adaptive quality, FPS monitoring, LOD
        </div>
      </div>

      <button class="bv-button" id="credits-back" style="margin-top:24px; pointer-events:auto;">BACK TO MENU</button>
      <div style="margin-top:24px; font-family:'JetBrains Mono',monospace; font-size:10px; color:#4a4a5a;">BLACK VEIL • BUILT WITH CARE • NO FAKE FEATURES • REAL 3D • REAL GAMEPLAY</div>
    `;
    this.root.appendChild(el);
    el.querySelector('#credits-back')?.addEventListener('click', () => this.showMenu());
  }

  showNotification(text: string, duration = 3000) {
    const notif = document.createElement('div');
    notif.style.cssText = `position:fixed; top:80px; left:50%; transform:translateX(-50%); background:rgba(0,0,0,0.85); border:1px solid rgba(106,166,255,0.3); color:#fff; padding:10px 20px; font-family:'JetBrains Mono',monospace; font-size:12px; letter-spacing:0.1em; z-index:100; pointer-events:none; transition:opacity 0.3s ease;`;
    notif.textContent = text;
    document.body.appendChild(notif);
    setTimeout(() => { notif.style.opacity = '0'; setTimeout(() => notif.remove(), 300); }, duration);
  }

  isInMenu() { return this.isMenuOpen; }
}
