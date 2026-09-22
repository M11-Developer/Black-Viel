import * as THREE from 'three';

export interface InputState {
  move: THREE.Vector2; // -1..1
  look: THREE.Vector2;
  sprint: boolean;
  crouch: boolean;
  prone: boolean;
  lean: number; // -1 left, 1 right
  jump: boolean;
  fire: boolean;
  aim: boolean;
  reload: boolean;
  interact: boolean;
  melee: boolean;
  switchWeapon: number; // -1 prev, 1 next
  slide: boolean;
  inventory: boolean;
  map: boolean;
  pause: boolean;
}

export class InputManager {
  state: InputState = {
    move: new THREE.Vector2(),
    look: new THREE.Vector2(),
    sprint: false,
    crouch: false,
    prone: false,
    lean: 0,
    jump: false,
    fire: false,
    aim: false,
    reload: false,
    interact: false,
    melee: false,
    switchWeapon: 0,
    slide: false,
    inventory: false,
    map: false,
    pause: false,
  };

  private keys: Set<string> = new Set();
  private touchJoysticks: { move: THREE.Vector2, look: THREE.Vector2 } = { move: new THREE.Vector2(), look: new THREE.Vector2() };
  private mouseDown = false;
  private pointerLocked = false;

  constructor(private canvas: HTMLCanvasElement) {
    this.bindKeyboard();
    this.bindMouse();
    this.bindTouch();
    this.bindGamepadPoll();
  }

  private bindKeyboard() {
    window.addEventListener('keydown', (e) => {
      this.keys.add(e.code.toLowerCase());
      if (e.code === 'KeyR') this.state.reload = true;
      if (e.code === 'KeyF') this.state.interact = true;
      if (e.code === 'Space') this.state.jump = true;
      if (e.code === 'ControlLeft' || e.code === 'KeyC') this.state.crouch = true;
      if (e.code === 'KeyZ' || e.code === 'KeyX') this.state.prone = true;
      if (e.code === 'ShiftLeft') this.state.sprint = true;
      if (e.code === 'KeyV') this.state.melee = true;
      if (e.code === 'Tab') this.state.inventory = true;
      if (e.code === 'KeyM') this.state.map = true;
      if (e.code === 'Escape') this.state.pause = true;
      if (e.code === 'Digit1') this.state.switchWeapon = -1;
      if (e.code === 'Digit2') this.state.switchWeapon = 1;
      // Lean Q/E - realistic tactical lean
      if (e.code === 'KeyQ') this.state.lean = -1;
      if (e.code === 'KeyE') this.state.lean = 1;
    });
    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.code.toLowerCase());
      if (e.code === 'KeyR') this.state.reload = false;
      if (e.code === 'KeyF') this.state.interact = false;
      if (e.code === 'KeyE') {
        this.state.interact = false;
        if (this.state.lean === 1) this.state.lean = 0;
      }
      if (e.code === 'KeyQ') {
        if (this.state.lean === -1) this.state.lean = 0;
      }
      if (e.code === 'Space') this.state.jump = false;
      if (e.code === 'ControlLeft' || e.code === 'KeyC') this.state.crouch = false;
      if (e.code === 'KeyZ' || e.code === 'KeyX') this.state.prone = false;
      if (e.code === 'ShiftLeft') this.state.sprint = false;
      if (e.code === 'KeyV') this.state.melee = false;
      if (e.code === 'Tab') this.state.inventory = false;
      if (e.code === 'KeyM') this.state.map = false;
      if (e.code === 'Escape') this.state.pause = false;
      if (e.code === 'Digit1' || e.code === 'Digit2') this.state.switchWeapon = 0;
    });
  }

  private bindMouse() {
    this.canvas.addEventListener('mousedown', (e) => {
      if (e.button === 0) this.state.fire = true;
      if (e.button === 2) this.state.aim = true;
      this.mouseDown = true;
    });
    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) this.state.fire = false;
      if (e.button === 2) this.state.aim = false;
      this.mouseDown = false;
    });
    this.canvas.addEventListener('mousemove', (e) => {
      if (document.pointerLockElement === this.canvas) {
        this.state.look.x = e.movementX * 0.002;
        this.state.look.y = e.movementY * 0.002;
      }
    });
    this.canvas.addEventListener('wheel', (e) => {
      this.state.switchWeapon = Math.sign(e.deltaY);
      setTimeout(() => this.state.switchWeapon = 0, 100);
    });
    this.canvas.addEventListener('contextmenu', e => e.preventDefault());
  }

  private bindTouch() {
    // Touch handled by mobile controls overlay, but provide fallback
  }

  private bindGamepadPoll() {
    // polled in update
  }

  setMoveVector(x: number, y: number) {
    this.touchJoysticks.move.set(x, y);
  }
  setLookVector(x: number, y: number) {
    this.touchJoysticks.look.set(x, y);
  }

  update() {
    // Keyboard move
    const kb = new THREE.Vector2();
    if (this.keys.has('keyw') || this.keys.has('arrowup')) kb.y += 1;
    if (this.keys.has('keys') || this.keys.has('arrowdown')) kb.y -= 1;
    if (this.keys.has('keya') || this.keys.has('arrowleft')) kb.x -= 1;
    if (this.keys.has('keyd') || this.keys.has('arrowright')) kb.x += 1;
    if (kb.lengthSq() > 0) kb.normalize();

    // Combine keyboard + touch (touch takes precedence if non-zero)
    if (this.touchJoysticks.move.lengthSq() > 0.01) {
      this.state.move.copy(this.touchJoysticks.move);
    } else {
      this.state.move.copy(kb);
    }

    if (this.touchJoysticks.look.lengthSq() > 0.001) {
      this.state.look.copy(this.touchJoysticks.look);
      // reset touch look after consumption (handled externally)
    }

    // Gamepad
    const pads = navigator.getGamepads();
    for (const pad of pads) {
      if (!pad) continue;
      const dead = 0.2;
      const lx = Math.abs(pad.axes[0]) > dead ? pad.axes[0] : 0;
      const ly = Math.abs(pad.axes[1]) > dead ? -pad.axes[1] : 0;
      if (lx || ly) this.state.move.set(lx, ly);
      const rx = Math.abs(pad.axes[2]) > dead ? pad.axes[2] : 0;
      const ry = Math.abs(pad.axes[3]) > dead ? pad.axes[3] : 0;
      if (rx || ry) this.state.look.set(rx * 0.05, ry * 0.05);
      if (pad.buttons[0]?.pressed) this.state.jump = true;
      if (pad.buttons[1]?.pressed) this.state.crouch = true;
      if (pad.buttons[2]?.pressed) this.state.reload = true;
      if (pad.buttons[3]?.pressed) this.state.interact = true;
      if (pad.buttons[5]?.pressed) this.state.fire = true;
      if (pad.buttons[4]?.pressed) this.state.aim = true;
    }
  }

  consumeLook(): THREE.Vector2 {
    const v = this.state.look.clone();
    this.state.look.set(0, 0);
    return v;
  }

  resetTransient() {
    // Called after frame
    this.state.switchWeapon = 0;
  }
}
