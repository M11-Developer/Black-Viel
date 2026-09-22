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

  constructor(private input: InputManager) {
    this.container = document.createElement('div');
    this.container.id = 'touch-controls';
    this.container.style.cssText = `position:fixed; inset:0; pointer-events:none; z-index:5; touch-action:none;`;
    document.body.appendChild(this.container);

    this.createStyles();

    // Move joystick
    this.moveJoystick = document.createElement('div');
    this.moveJoystick.className = 'touch-joystick move';
    this.moveJoystick.innerHTML = `<div class="joystick-base"><div class="joystick-stick"></div></div>`;
    this.container.appendChild(this.moveJoystick);

    // Look area (right side)
    this.lookArea = document.createElement('div');
    this.lookArea.className = 'touch-look-area';
    this.container.appendChild(this.lookArea);

    this.createActionButtons();
    this.bindEvents();
    this.applyOpacity();
    settingsManager.onChange(s => {
      this.applyOpacity();
      if (s.controlLayout) this.applyLayout(s.controlLayout);
    });
  }

  private createStyles() {
    const style = document.createElement('style');
    style.textContent = `
      #touch-controls { display:none; }
      @media (pointer:coarse) { #touch-controls { display:block; } }
      .touch-joystick { position:absolute; width:120px; height:120px; pointer-events:auto; }
      .touch-joystick.move { left:20px; bottom:20px; }
      .joystick-base { width:100%; height:100%; border-radius:50%; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); backdrop-filter:blur(8px); position:relative; }
      .joystick-stick { position:absolute; left:50%; top:50%; width:48px; height:48px; margin:-24px 0 0 -24px; border-radius:50%; background:rgba(106,166,255,0.25); border:1px solid rgba(106,166,255,0.4); transition:transform 0.05s linear; }
      .touch-look-area { position:absolute; right:0; top:0; width:50%; height:100%; pointer-events:auto; }
      .touch-btn { position:absolute; pointer-events:auto; width:56px; height:56px; border-radius:12px; background:rgba(0,0,0,0.5); border:1px solid rgba(255,255,255,0.12); backdrop-filter:blur(12px); display:flex; align-items:center; justify-content:center; font-family:'JetBrains Mono',monospace; font-size:10px; color:#fff; letter-spacing:0.05em; user-select:none; touch-action:none; transition:all 0.1s ease; }
      .touch-btn:active { background:rgba(106,166,255,0.3); border-color:rgba(106,166,255,0.5); transform:scale(0.92); }
      .touch-btn.fire { width:72px; height:72px; border-radius:50%; background:rgba(255,77,106,0.2); border-color:rgba(255,77,106,0.4); right:20px; bottom:20px; font-size:12px; }
      .touch-btn.aim { right:110px; bottom:32px; }
      .touch-btn.reload { right:20px; bottom:110px; width:48px; height:48px; }
      .touch-btn.jump { right:80px; bottom:110px; width:48px; height:48px; }
      .touch-btn.crouch { right:20px; bottom:170px; width:48px; height:48px; }
      .touch-btn.interact { left:50%; bottom:20px; transform:translateX(-50%); width:88px; height:40px; border-radius:20px; }
      .touch-btn.switch { right:140px; bottom:170px; width:44px; height:44px; font-size:9px; }
      .touch-btn.melee { right:190px; bottom:32px; width:48px; height:48px; }
      .touch-controls-edit .touch-btn { border:1px dashed #6aa6ff; background:rgba(106,166,255,0.15); }
      .touch-edit-panel { position:fixed; top:0; left:0; right:0; background:rgba(0,0,0,0.9); padding:12px 16px; display:flex; justify-content:space-between; align-items:center; z-index:20; pointer-events:auto; }
    `;
    document.head.appendChild(style);
  }

  private createActionButtons() {
    const btnDefs = [
      { id: 'fire', label: 'FIRE', class: 'fire' },
      { id: 'aim', label: 'AIM', class: 'aim' },
      { id: 'reload', label: 'R', class: 'reload' },
      { id: 'jump', label: 'JUMP', class: 'jump' },
      { id: 'crouch', label: 'CROUCH', class: 'crouch' },
      { id: 'interact', label: 'INTERACT', class: 'interact' },
      { id: 'switch', label: 'SWAP', class: 'switch' },
      { id: 'melee', label: 'MELEE', class: 'melee' },
    ];

    for (const def of btnDefs) {
      const btn = document.createElement('div');
      btn.className = `touch-btn ${def.class}`;
      btn.dataset.id = def.id;
      btn.textContent = def.label;
      this.container.appendChild(btn);
      this.buttons.set(def.id, btn);
    }
  }

  private bindEvents() {
    // Move joystick
    const base = this.moveJoystick.querySelector('.joystick-base') as HTMLElement;
    const stick = this.moveJoystick.querySelector('.joystick-stick') as HTMLElement;

    const onMoveStart = (x: number, y: number) => {
      this.moveActive = true;
      this.moveStart = { x, y };
    };
    const onMoveMove = (x: number, y: number) => {
      if (!this.moveActive) return;
      const dx = x - this.moveStart.x;
      const dy = y - this.moveStart.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 48;
      const clampedDist = Math.min(dist, maxDist);
      const angle = Math.atan2(dy, dx);
      const cx = Math.cos(angle) * clampedDist;
      const cy = Math.sin(angle) * clampedDist;
      stick.style.transform = `translate(${cx}px, ${cy}px)`;
      this.moveVector = { x: cx / maxDist, y: -cy / maxDist };
      this.input.setMoveVector(this.moveVector.x, this.moveVector.y);
    };
    const onMoveEnd = () => {
      this.moveActive = false;
      stick.style.transform = `translate(0,0)`;
      this.moveVector = { x: 0, y: 0 };
      this.input.setMoveVector(0, 0);
    };

    base.addEventListener('touchstart', (e) => { e.preventDefault(); onMoveStart(e.touches[0].clientX, e.touches[0].clientY); }, { passive: false });
    base.addEventListener('touchmove', (e) => { e.preventDefault(); onMoveMove(e.touches[0].clientX, e.touches[0].clientY); }, { passive: false });
    base.addEventListener('touchend', (e) => { e.preventDefault(); onMoveEnd(); }, { passive: false });
    base.addEventListener('mousedown', (e) => { onMoveStart(e.clientX, e.clientY); });
    window.addEventListener('mousemove', (e) => { if (this.moveActive) onMoveMove(e.clientX, e.clientY); });
    window.addEventListener('mouseup', () => { if (this.moveActive) onMoveEnd(); });

    // Look
    this.lookArea.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.lookActive = true;
      this.lookStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, { passive: false });
    this.lookArea.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (!this.lookActive) return;
      const dx = e.touches[0].clientX - this.lookStart.x;
      const dy = e.touches[0].clientY - this.lookStart.y;
      const sens = settingsManager.get('cameraSensitivity') * 0.003;
      this.input.setLookVector(-dx * sens, -dy * sens);
      this.lookStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, { passive: false });
    this.lookArea.addEventListener('touchend', (e) => { e.preventDefault(); this.lookActive = false; }, { passive: false });

    // Action buttons
    this.buttons.forEach((btn, id) => {
      const setState = (active: boolean) => {
        switch (id) {
          case 'fire': this.input.state.fire = active; break;
          case 'aim': this.input.state.aim = active; break;
          case 'reload': if (active) this.input.state.reload = true; break;
          case 'jump': if (active) this.input.state.jump = true; break;
          case 'crouch': this.input.state.crouch = active; break;
          case 'interact': this.input.state.interact = active; break;
          case 'switch': if (active) this.input.state.switchWeapon = 1; break;
          case 'melee': if (active) this.input.state.melee = true; break;
        }
      };
      btn.addEventListener('touchstart', (e) => { e.preventDefault(); setState(true); }, { passive: false });
      btn.addEventListener('touchend', (e) => { e.preventDefault(); setState(false); if (id === 'reload' || id === 'jump' || id === 'melee' || id === 'switch') setTimeout(() => setState(false), 100); }, { passive: false });
      btn.addEventListener('mousedown', () => setState(true));
      btn.addEventListener('mouseup', () => setState(false));
    });

    // Edit layout mode
    window.addEventListener('bv:editLayout', () => this.enterEditMode());

    // Gyro
    this.initGyro();
  }

  private initGyro() {
    if (!('DeviceOrientationEvent' in window)) return;
    let enabled = settingsManager.get('gyroEnabled');
    settingsManager.onChange(s => enabled = s.gyroEnabled);

    window.addEventListener('deviceorientation', (e) => {
      if (!enabled) return;
      if (e.beta === null || e.gamma === null) return;
      const sens = settingsManager.get('gyroSensitivity') * 0.0005;
      // Use gamma for yaw, beta for pitch
      const yaw = (e.gamma || 0) * sens;
      const pitch = (e.beta || 0) * sens * 0.5;
      if (Math.abs(yaw) > 0.0001 || Math.abs(pitch) > 0.0001) {
        this.input.setLookVector(yaw, pitch);
      }
    });

    // Request permission on iOS
    const btn = document.createElement('button');
    btn.textContent = 'ENABLE GYRO';
    btn.className = 'bv-button';
    btn.style.cssText = 'position:fixed; bottom:100px; left:50%; transform:translateX(-50%); z-index:20; display:none; pointer-events:auto;';
    document.body.appendChild(btn);
    btn.addEventListener('click', async () => {
      try {
        const doe = DeviceOrientationEvent as any;
        if (doe.requestPermission) {
          const perm = await doe.requestPermission();
          if (perm === 'granted') {
            settingsManager.set('gyroEnabled', true);
            btn.style.display = 'none';
          }
        }
      } catch {}
    });
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      btn.style.display = 'block';
    }
  }

  private applyOpacity() {
    const op = settingsManager.get('touchOpacity');
    this.container.style.opacity = `${op}`;
  }

  private applyLayout(layout: any) {
    // Apply custom positions
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
      <span style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#fff;">DRAG BUTTONS TO REPOSITION • PINCH TO RESIZE</span>
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
    });
  }

  setVisible(v: boolean) {
    this.container.style.display = v ? 'block' : 'none';
  }
}
