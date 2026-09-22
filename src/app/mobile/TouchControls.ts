import { InputManager } from '../input/InputManager';
import { settingsManager } from '../settings/SettingsManager';

export class TouchControls {
  private container: HTMLElement;
  private moveJoystick: HTMLElement;
  private lookArea: HTMLElement;
  private buttons: Map<string, HTMLElement> = new Map();
  private moveActive = false;
  private moveStart = { x: 0, y: 0 };
  private moveVector = { x: 0, y: 0 };
  private lookActive = false;
  private lookStart = { x: 0, y: 0 };
  private editMode = false;
  private lastTap = 0;
  private sprintLocked = false;

  constructor(private input: InputManager) {
    this.container = document.createElement('div');
    this.container.id = 'touch-controls';
    this.container.style.cssText = `position:fixed; inset:0; pointer-events:none; z-index:5; touch-action:none;`;
    document.body.appendChild(this.container);

    this.createStyles();
    this.moveJoystick = document.createElement('div');
    this.moveJoystick.className = 'touch-joystick move';
    this.moveJoystick.innerHTML = `<div class="joystick-base"><div class="joystick-stick"></div><div class="joystick-ring"></div></div><div class="joystick-label">MOVE</div>`;
    this.container.appendChild(this.moveJoystick);

    this.lookArea = document.createElement('div');
    this.lookArea.className = 'touch-look-area';
    this.lookArea.innerHTML = `<div class="look-hint">👁️ DRAG TO LOOK • PINCH ZOOM</div>`;
    this.container.appendChild(this.lookArea);

    this.createActionButtons();
    this.bindEvents();
    this.applyOpacity();
    this.createMobileHUD();
    settingsManager.onChange(s => {
      this.applyOpacity();
      if (s.controlLayout) this.applyLayout(s.controlLayout);
    });
  }

  private haptic(pattern: number | number[]) {
    try {
      if (settingsManager.get('hapticsEnabled') !== false && navigator.vibrate) {
        navigator.vibrate(pattern);
      }
    } catch {}
  }

  private createStyles() {
    const style = document.createElement('style');
    style.textContent = `
      #touch-controls { display:none; }
      @media (pointer:coarse) { #touch-controls { display:block; } }
      .touch-joystick { position:absolute; width:130px; height:130px; pointer-events:auto; }
      .touch-joystick.move { left:16px; bottom:16px; }
      .joystick-base { width:100%; height:100%; border-radius:50%; background:radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08), rgba(0,0,0,0.5)); border:1.5px solid rgba(255,255,255,0.12); backdrop-filter:blur(12px); position:relative; box-shadow:0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1); }
      .joystick-ring { position:absolute; inset:8px; border-radius:50%; border:1px dashed rgba(106,166,255,0.15); pointer-events:none; }
      .joystick-stick { position:absolute; left:50%; top:50%; width:52px; height:52px; margin:-26px 0 0 -26px; border-radius:50%; background:radial-gradient(circle at 30% 30%, rgba(106,166,255,0.4), rgba(106,166,255,0.15)); border:1.5px solid rgba(106,166,255,0.5); transition:transform 0.06s linear; box-shadow:0 2px 12px rgba(106,166,255,0.3); }
      .joystick-label { position:absolute; bottom:-18px; left:50%; transform:translateX(-50%); font-family:'JetBrains Mono',monospace; font-size:8px; letter-spacing:0.15em; opacity:0.4; color:#fff; }
      .touch-look-area { position:absolute; right:0; top:0; width:55%; height:100%; pointer-events:auto; }
      .look-hint { position:absolute; top:12px; right:12px; font-size:8px; opacity:0.25; letter-spacing:0.1em; background:rgba(0,0,0,0.4); padding:4px 8px; border-radius:12px; border:1px solid rgba(255,255,255,0.06); }
      .touch-btn { position:absolute; pointer-events:auto; width:58px; height:58px; border-radius:14px; background:linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4)); border:1px solid rgba(255,255,255,0.1); backdrop-filter:blur(16px); display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:'JetBrains Mono',monospace; font-size:9px; color:#fff; letter-spacing:0.06em; user-select:none; touch-action:none; transition:all 0.12s ease; box-shadow:0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08); }
      .touch-btn .btn-icon { font-size:16px; margin-bottom:2px; }
      .touch-btn:active { background:linear-gradient(135deg, rgba(106,166,255,0.35), rgba(106,166,255,0.2)); border-color:rgba(106,166,255,0.5); transform:scale(0.92); box-shadow:0 2px 8px rgba(106,166,255,0.4); }
      .touch-btn.fire { width:78px; height:78px; border-radius:50%; background:radial-gradient(circle at 30% 30%, rgba(255,77,106,0.3), rgba(255,77,106,0.15)); border-color:rgba(255,77,106,0.4); right:16px; bottom:16px; font-size:11px; box-shadow:0 6px 20px rgba(255,77,106,0.25); }
      .touch-btn.fire .btn-icon { font-size:22px; }
      .touch-btn.aim { right:108px; bottom:28px; background:rgba(106,166,255,0.12); border-color:rgba(106,166,255,0.2); }
      .touch-btn.reload { right:16px; bottom:108px; width:50px; height:50px; }
      .touch-btn.jump { right:76px; bottom:108px; width:50px; height:50px; }
      .touch-btn.crouch { right:16px; bottom:168px; width:50px; height:50px; }
      .touch-btn.interact { left:50%; bottom:14px; transform:translateX(-50%); width:96px; height:42px; border-radius:22px; flex-direction:row; gap:6px; }
      .touch-btn.switch { right:136px; bottom:168px; width:46px; height:46px; font-size:8px; }
      .touch-btn.melee { right:186px; bottom:28px; width:50px; height:50px; }
      .touch-btn.photo { left:16px; top:16px; width:44px; height:44px; font-size:8px; }
      .touch-btn.sprint { left:16px; bottom:168px; width:50px; height:50px; }
      .touch-controls-edit .touch-btn { border:1px dashed #6aa6ff; background:rgba(106,166,255,0.15); }
      .touch-edit-panel { position:fixed; top:0; left:0; right:0; background:rgba(0,0,0,0.92); padding:12px 16px; display:flex; justify-content:space-between; align-items:center; z-index:20; pointer-events:auto; backdrop-filter:blur(20px); border-bottom:1px solid rgba(255,255,255,0.08); }
      .mobile-hud { position:absolute; top:0; left:0; right:0; height:44px; pointer-events:none; display:flex; justify-content:space-between; align-items:center; padding:0 12px; z-index:2; }
      .mobile-hud .hud-left, .mobile-hud .hud-right { display:flex; gap:8px; pointer-events:auto; }
      .hud-chip { background:rgba(0,0,0,0.6); border:1px solid rgba(255,255,255,0.08); border-radius:20px; padding:6px 10px; font-size:9px; backdrop-filter:blur(12px); display:flex; align-items:center; gap:6px; }
      .hud-chip .dot { width:6px; height:6px; border-radius:50%; background:#4ade80; box-shadow:0 0 6px #4ade80; }
      @media (max-height:500px) { .touch-joystick.move { bottom:8px; left:8px; width:100px; height:100px; } .touch-btn.fire { width:64px; height:64px; right:8px; bottom:8px; } }
    `;
    document.head.appendChild(style);
  }

  private createMobileHUD() {
    const hud = document.createElement('div');
    hud.className = 'mobile-hud';
    hud.innerHTML = `
      <div class="hud-left">
        <div class="hud-chip"><div class="dot"></div><span id="mobile-fps">60 FPS</span></div>
        <div class="hud-chip">📶 <span id="mobile-ping">Online</span></div>
      </div>
      <div class="hud-right">
        <div class="hud-chip" id="mobile-gyro-chip" style="display:none">📳 Gyro</div>
        <div class="hud-chip">🔋 <span id="mobile-battery">--</span></div>
      </div>
    `;
    this.container.appendChild(hud);

    // Battery API
    try {
      (navigator as any).getBattery?.().then((b:any)=>{
        const update = ()=> {
          const el = document.getElementById('mobile-battery');
          if(el) el.textContent = Math.round(b.level*100)+'%';
        };
        b.addEventListener('levelchange', update);
        update();
      });
    } catch {}

    // FPS from game event
    window.addEventListener('bv:fps', (e:any)=>{
      const el = document.getElementById('mobile-fps');
      if(el) el.textContent = Math.round(e.detail||60)+' FPS';
    });
  }

  private createActionButtons() {
    const btnDefs = [
      { id: 'fire', label: 'FIRE', icon: '🔥', class: 'fire' },
      { id: 'aim', label: 'AIM', icon: '🎯', class: 'aim' },
      { id: 'reload', label: 'R', icon: '🔄', class: 'reload' },
      { id: 'jump', label: 'JUMP', icon: '🦘', class: 'jump' },
      { id: 'crouch', label: 'CROUCH', icon: '🦆', class: 'crouch' },
      { id: 'interact', label: 'INTERACT', icon: '📦', class: 'interact' },
      { id: 'switch', label: 'SWAP', icon: '🔀', class: 'switch' },
      { id: 'melee', label: 'MELEE', icon: '👊', class: 'melee' },
      { id: 'sprint', label: 'SPRINT', icon: '🏃', class: 'sprint' },
      { id: 'photo', label: 'PHOTO', icon: '📸', class: 'photo' },
    ];

    for (const def of btnDefs) {
      const btn = document.createElement('div');
      btn.className = `touch-btn ${def.class}`;
      btn.dataset.id = def.id;
      btn.innerHTML = `<span class="btn-icon">${def.icon}</span><span>${def.label}</span>`;
      this.container.appendChild(btn);
      this.buttons.set(def.id, btn);
    }
  }

  private bindEvents() {
    const base = this.moveJoystick.querySelector('.joystick-base') as HTMLElement;
    const stick = this.moveJoystick.querySelector('.joystick-stick') as HTMLElement;

    const onMoveStart = (x: number, y: number) => {
      this.moveActive = true;
      this.moveStart = { x, y };
      this.haptic(10);
      // Double-tap to sprint lock
      const now = Date.now();
      if (now - this.lastTap < 300) {
        this.sprintLocked = !this.sprintLocked;
        this.input.state.sprint = this.sprintLocked;
        this.haptic(this.sprintLocked ? [20,30,20] : 20);
        const label = this.moveJoystick.querySelector('.joystick-label') as HTMLElement;
        if(label) label.textContent = this.sprintLocked ? 'SPRINTING' : 'MOVE';
      }
      this.lastTap = now;
    };
    const onMoveMove = (x: number, y: number) => {
      if (!this.moveActive) return;
      const dx = x - this.moveStart.x;
      const dy = y - this.moveStart.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 52;
      const clampedDist = Math.min(dist, maxDist);
      const angle = Math.atan2(dy, dx);
      const cx = Math.cos(angle) * clampedDist;
      const cy = Math.sin(angle) * clampedDist;
      stick.style.transform = `translate(${cx}px, ${cy}px)`;
      this.moveVector = { x: cx / maxDist, y: -cy / maxDist };
      this.input.setMoveVector(this.moveVector.x, this.moveVector.y);
      // Auto sprint if pushed to edge
      if (dist > maxDist * 0.9) {
        this.input.state.sprint = true;
      } else if (!this.sprintLocked) {
        this.input.state.sprint = false;
      }
    };
    const onMoveEnd = () => {
      this.moveActive = false;
      stick.style.transform = `translate(0,0)`;
      this.moveVector = { x: 0, y: 0 };
      this.input.setMoveVector(0, 0);
      if (!this.sprintLocked) this.input.state.sprint = false;
    };

    base.addEventListener('touchstart', (e) => { e.preventDefault(); onMoveStart(e.touches[0].clientX, e.touches[0].clientY); }, { passive: false });
    base.addEventListener('touchmove', (e) => { e.preventDefault(); onMoveMove(e.touches[0].clientX, e.touches[0].clientY); }, { passive: false });
    base.addEventListener('touchend', (e) => { e.preventDefault(); onMoveEnd(); }, { passive: false });
    base.addEventListener('mousedown', (e) => { onMoveStart(e.clientX, e.clientY); });
    window.addEventListener('mousemove', (e) => { if (this.moveActive) onMoveMove(e.clientX, e.clientY); });
    window.addEventListener('mouseup', () => { if (this.moveActive) onMoveEnd(); });

    // Look with inertia
    let lookVelocity = { x: 0, y: 0 };
    this.lookArea.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.lookActive = true;
      this.lookStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      lookVelocity = { x: 0, y: 0 };
    }, { passive: false });
    this.lookArea.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (!this.lookActive) return;
      const dx = e.touches[0].clientX - this.lookStart.x;
      const dy = e.touches[0].clientY - this.lookStart.y;
      const sens = settingsManager.get('cameraSensitivity') * 0.0032;
      this.input.setLookVector(-dx * sens, -dy * sens);
      lookVelocity = { x: -dx * sens * 0.5, y: -dy * sens * 0.5 };
      this.lookStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, { passive: false });
    this.lookArea.addEventListener('touchend', (e) => {
      e.preventDefault();
      this.lookActive = false;
      // Inertia
      let inertia = 12;
      const applyInertia = () => {
        if (inertia-- <= 0) return;
        this.input.setLookVector(lookVelocity.x * 0.3, lookVelocity.y * 0.3);
        lookVelocity.x *= 0.85;
        lookVelocity.y *= 0.85;
        requestAnimationFrame(applyInertia);
      };
      applyInertia();
    }, { passive: false });

    // Pinch zoom for FOV
    let lastPinchDist = 0;
    this.lookArea.addEventListener('touchmove', (e) => {
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (lastPinchDist > 0) {
          const delta = dist - lastPinchDist;
          window.dispatchEvent(new CustomEvent('bv:pinchZoom', { detail: delta * 0.01 }));
        }
        lastPinchDist = dist;
      }
    }, { passive: false });
    this.lookArea.addEventListener('touchend', () => { lastPinchDist = 0; });

    // Action buttons with haptics
    this.buttons.forEach((btn, id) => {
      const setState = (active: boolean) => {
        if (active) this.haptic(id==='fire'? [15] : 12);
        switch (id) {
          case 'fire': this.input.state.fire = active; break;
          case 'aim': this.input.state.aim = active; break;
          case 'reload': if (active) { this.input.state.reload = true; this.haptic([10,20,10]); } break;
          case 'jump': if (active) { this.input.state.jump = true; this.haptic(20); } break;
          case 'crouch': this.input.state.crouch = active; if(active) this.haptic(15); break;
          case 'interact': this.input.state.interact = active; if(active) this.haptic([15,30,15]); break;
          case 'switch': if (active) { this.input.state.switchWeapon = 1; this.haptic([10,10]); } break;
          case 'melee': if (active) { this.input.state.melee = true; this.haptic([30,20,40]); } break;
          case 'sprint': this.input.state.sprint = active; this.sprintLocked = active; break;
          case 'photo': if (active) { window.dispatchEvent(new CustomEvent('bv:togglePhoto')); this.haptic([20,40,20]); } break;
        }
      };
      btn.addEventListener('touchstart', (e) => { e.preventDefault(); setState(true); }, { passive: false });
      btn.addEventListener('touchend', (e) => { e.preventDefault(); setState(false); if (['reload','jump','melee','switch','photo'].includes(id)) setTimeout(()=>setState(false), 120); }, { passive: false });
      btn.addEventListener('mousedown', () => setState(true));
      btn.addEventListener('mouseup', () => setState(false));
    });

    window.addEventListener('bv:editLayout', () => this.enterEditMode());
    this.initGyro();
  }

  private initGyro() {
    if (!('DeviceOrientationEvent' in window)) return;
    let enabled = settingsManager.get('gyroEnabled');
    settingsManager.onChange(s => {
      enabled = s.gyroEnabled;
      const chip = document.getElementById('mobile-gyro-chip');
      if(chip) chip.style.display = enabled ? 'flex' : 'none';
    });

    let lastGamma = 0, lastBeta = 0;
    window.addEventListener('deviceorientation', (e) => {
      if (!enabled) return;
      if (e.beta === null || e.gamma === null) return;
      const sens = settingsManager.get('gyroSensitivity') * 0.0006;
      const gammaDelta = (e.gamma || 0) - lastGamma;
      const betaDelta = (e.beta || 0) - lastBeta;
      lastGamma = e.gamma || 0;
      lastBeta = e.beta || 0;
      // Deadzone
      if (Math.abs(gammaDelta) < 0.15 && Math.abs(betaDelta) < 0.15) return;
      const yaw = gammaDelta * sens * 1.2;
      const pitch = betaDelta * sens * 0.6;
      if (Math.abs(yaw) > 0.0001 || Math.abs(pitch) > 0.0001) {
        this.input.setLookVector(yaw, pitch);
      }
    });

    const btn = document.createElement('button');
    btn.textContent = 'ENABLE GYRO 📳';
    btn.className = 'bv-button';
    btn.style.cssText = 'position:fixed; bottom:90px; left:50%; transform:translateX(-50%); z-index:20; display:none; pointer-events:auto; background:rgba(106,166,255,0.15); border:1px solid rgba(106,166,255,0.3); border-radius:20px; padding:8px 16px; font-size:10px; color:#fff;';
    document.body.appendChild(btn);
    btn.addEventListener('click', async () => {
      try {
        const doe = DeviceOrientationEvent as any;
        if (doe.requestPermission) {
          const perm = await doe.requestPermission();
          if (perm === 'granted') {
            settingsManager.set('gyroEnabled', true);
            btn.style.display = 'none';
            this.haptic([20,30,20]);
          }
        } else {
          settingsManager.set('gyroEnabled', true);
          btn.style.display = 'none';
        }
      } catch {}
    });
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      btn.style.display = 'block';
    } else if (settingsManager.get('gyroEnabled')) {
      const chip = document.getElementById('mobile-gyro-chip');
      if(chip) chip.style.display = 'flex';
    }
  }

  private applyOpacity() {
    const op = settingsManager.get('touchOpacity');
    this.container.style.opacity = `${op}`;
  }

  private applyLayout(layout: any) {
    if (!layout) return;
    for (const [id, pos] of Object.entries(layout)) {
      const btn = this.buttons.get(id);
      if (btn && pos && typeof pos === 'object') {
        const p = pos as any;
        if (p.x !== undefined) btn.style.left = p.x + 'px';
        if (p.y !== undefined) btn.style.top = p.y + 'px';
        if (p.right !== undefined) btn.style.right = p.right + 'px';
        if (p.bottom !== undefined) btn.style.bottom = p.bottom + 'px';
      }
    }
  }

  private enterEditMode() {
    if (this.editMode) return;
    this.editMode = true;
    this.container.classList.add('touch-controls-edit');
    const panel = document.createElement('div');
    panel.className = 'touch-edit-panel';
    panel.innerHTML = `
      <span style="font-family:'JetBrains Mono',monospace; font-size:11px; color:#fff;">DRAG TO MOVE • DOUBLE-TAP SPRINT • PINCH ZOOM • HAPTICS ON</span>
      <div style="display:flex; gap:8px;">
        <button class="bv-button" id="edit-reset" style="padding:6px 12px; font-size:10px;">RESET</button>
        <button class="bv-button" id="edit-save" style="padding:6px 12px; font-size:10px;">SAVE</button>
      </div>
    `;
    document.body.appendChild(panel);
    let dragged: HTMLElement | null = null;
    let dragOffset = { x: 0, y: 0 };
    const makeDraggable = (el: HTMLElement) => {
      el.style.pointerEvents = 'auto';
      const onStart = (cx: number, cy: number) => {
        dragged = el;
        const rect = el.getBoundingClientRect();
        dragOffset = { x: cx - rect.left, y: cy - rect.top };
      };
      el.addEventListener('touchstart', (e) => { e.preventDefault(); onStart(e.touches[0].clientX, e.touches[0].clientY); }, { passive: false });
      el.addEventListener('mousedown', (e) => onStart(e.clientX, e.clientY));
    };
    this.buttons.forEach(makeDraggable);
    makeDraggable(this.moveJoystick);
    const onMove = (cx: number, cy: number) => {
      if (!dragged) return;
      dragged.style.left = (cx - dragOffset.x) + 'px';
      dragged.style.top = (cy - dragOffset.y) + 'px';
      dragged.style.right = 'auto';
      dragged.style.bottom = 'auto';
    };
    const onEnd = () => { dragged = null; };
    window.addEventListener('touchmove', (e) => { if (dragged) { e.preventDefault(); onMove(e.touches[0].clientX, e.touches[0].clientY); } }, { passive: false });
    window.addEventListener('mousemove', (e) => { if (dragged) onMove(e.clientX, e.clientY); });
    window.addEventListener('touchend', onEnd);
    window.addEventListener('mouseup', onEnd);
    panel.querySelector('#edit-reset')?.addEventListener('click', () => {
      settingsManager.set('controlLayout', null);
      location.reload();
    });
    panel.querySelector('#edit-save')?.addEventListener('click', () => {
      const layout: any = {};
      this.buttons.forEach((btn, id) => {
        const rect = btn.getBoundingClientRect();
        layout[id] = { x: rect.left, y: rect.top };
      });
      const joyRect = this.moveJoystick.getBoundingClientRect();
      layout['move'] = { x: joyRect.left, y: joyRect.top };
      settingsManager.set('controlLayout', layout);
      panel.remove();
      this.container.classList.remove('touch-controls-edit');
      this.editMode = false;
      this.haptic([20,40,20]);
    });
  }

  setVisible(v: boolean) {
    this.container.style.display = v ? 'block' : 'none';
  }
}
