import { settingsManager } from '../settings/SettingsManager';

export type SoundCategory = 'master' | 'music' | 'sfx' | 'voice' | 'ambience' | 'ui';

interface SoundDef {
  id: string;
  category: SoundCategory;
  buffer?: AudioBuffer;
  volume: number;
  loop?: boolean;
}

export class AudioManager {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private gains: Map<SoundCategory, GainNode> = new Map();
  private sounds: Map<string, SoundDef> = new Map();
  private activeSources: Set<AudioBufferSourceNode> = new Set();
  private musicState: 'menu' | 'exploration' | 'stealth' | 'combat' | 'tension' = 'exploration';
  private musicOscillators: OscillatorNode[] = [];

  constructor() {
    this.initContextOnInteraction();
  }

  private initContextOnInteraction() {
    const init = () => {
      if (this.ctx) return;
      try {
        this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        this.masterGain = this.ctx.createGain();
        this.masterGain.connect(this.ctx.destination);
        (['master', 'music', 'sfx', 'voice', 'ambience', 'ui'] as SoundCategory[]).forEach(cat => {
          const g = this.ctx!.createGain();
          g.connect(cat === 'master' ? this.ctx!.destination : this.masterGain!);
          this.gains.set(cat, g);
        });
        this.updateVolumes();
        settingsManager.onChange(() => this.updateVolumes());
        // procedural ambient
        this.startProceduralAmbience();
        console.log('[Audio] Context initialized');
      } catch (e) {
        console.warn('[Audio] Failed to init', e);
      }
      window.removeEventListener('click', init);
      window.removeEventListener('keydown', init);
      window.removeEventListener('touchstart', init);
    };
    window.addEventListener('click', init, { once: false });
    window.addEventListener('keydown', init, { once: false });
    window.addEventListener('touchstart', init, { once: false });
  }

  private updateVolumes() {
    if (!this.ctx) return;
    const s = settingsManager.settings;
    this.gains.get('master')!.gain.value = s.masterVolume;
    this.gains.get('music')!.gain.value = s.musicVolume;
    this.gains.get('sfx')!.gain.value = s.sfxVolume;
    this.gains.get('voice')!.gain.value = s.voiceVolume;
    this.gains.get('ambience')!.gain.value = s.ambienceVolume;
    this.gains.get('ui')!.gain.value = s.uiVolume;
  }

  private startProceduralAmbience() {
    if (!this.ctx) return;
    // simple wind + city hum
    try {
      const ctx = this.ctx;
      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.02 * Math.sin(i * 0.0001);
      }
      const src = ctx.createBufferSource();
      src.buffer = buffer;
      src.loop = true;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 400;
      src.connect(filter);
      filter.connect(this.gains.get('ambience')!);
      src.start();
    } catch {}
  }

  playProceduralSound(type: string, pos?: { x: number; y: number; z: number }) {
    if (!this.ctx || !this.masterGain) return;
    try {
      const ctx = this.ctx;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      
      let freq = 440, dur = 0.1, vol = 0.3;
      switch (type) {
        case 'pistol': freq = 180; dur = 0.15; vol = 0.6; break;
        case 'rifle': freq = 120; dur = 0.12; vol = 0.7; break;
        case 'smg': freq = 200; dur = 0.08; vol = 0.5; break;
        case 'shotgun': freq = 80; dur = 0.25; vol = 0.8; break;
        case 'sniper': freq = 90; dur = 0.3; vol = 0.9; break;
        case 'footstep': freq = 60; dur = 0.05; vol = 0.15; break;
        case 'reload': freq = 300; dur = 0.4; vol = 0.3; break;
        case 'hit': freq = 150; dur = 0.1; vol = 0.5; break;
        case 'ui_click': freq = 800; dur = 0.08; vol = 0.2; break;
        case 'terminal': freq = 600; dur = 0.15; vol = 0.25; break;
        case 'door': freq = 100; dur = 0.5; vol = 0.4; break;
        default: freq = 440; dur = 0.1; vol = 0.3;
      }

      osc.type = type.includes('shot') || type === 'rifle' || type === 'pistol' ? 'square' : 'sine';
      osc.frequency.value = freq;
      if (type.includes('shot') || type === 'rifle' || type === 'pistol' || type === 'smg' || type === 'shotgun' || type === 'sniper') {
        // noise burst
        const bufferSize = ctx.sampleRate * dur;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 2) * vol;
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        noise.connect(filter);
        filter.type = 'bandpass';
        filter.frequency.value = freq * 2;
        filter.connect(this.gains.get('sfx')!);
        noise.start();
        return;
      }

      gain.gain.setValueAtTime(vol, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.gains.get(type.startsWith('ui') ? 'ui' : 'sfx')!);
      osc.start();
      osc.stop(ctx.currentTime + dur);
    } catch (e) {
      console.warn('[Audio] play failed', e);
    }
  }

  setMusicState(state: typeof this.musicState) {
    this.musicState = state;
    // In full prod, would crossfade tracks. Here procedural mood via oscillators
    if (!this.ctx) return;
    // Stop old
    this.musicOscillators.forEach(o => { try { o.stop(); } catch {} });
    this.musicOscillators = [];
    try {
      const ctx = this.ctx;
      const baseFreq = state === 'combat' ? 55 : state === 'stealth' ? 40 : state === 'tension' ? 48 : 36;
      for (let i = 0; i < 2; i++) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.value = baseFreq * (i + 1) * 0.5;
        gain.gain.value = state === 'combat' ? 0.06 : 0.02;
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = state === 'combat' ? 800 : 400;
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.gains.get('music')!);
        osc.start();
        this.musicOscillators.push(osc);
      }
    } catch {}
  }

  playUI(sound: 'click' | 'hover' | 'open' | 'close' | 'error') {
    const map: Record<string, string> = { click: 'ui_click', hover: 'ui_click', open: 'terminal', close: 'door', error: 'hit' };
    this.playProceduralSound(map[sound] || 'ui_click');
  }

  setListenerPosition(pos: THREE.Vector3Like, forward: THREE.Vector3Like) {
    if (!this.ctx?.listener) return;
    const l = this.ctx.listener;
    if ('positionX' in l) {
      (l as any).positionX.value = pos.x;
      (l as any).positionY.value = pos.y;
      (l as any).positionZ.value = pos.z;
    } else {
      (l as any).setPosition(pos.x, pos.y, pos.z);
    }
  }
}

export const audioManager = new AudioManager();

declare namespace THREE { interface Vector3Like { x: number; y: number; z: number; } }
