import * as THREE from 'three';
import { settingsManager, type QualityLevel } from '../settings/SettingsManager';

export interface RenderStats {
  fps: number;
  frameTime: number;
  drawCalls: number;
  triangles: number;
  geometries: number;
  textures: number;
}

export class Renderer {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  private quality: QualityLevel = 'auto';
  private resolutionScale = 1;
  private stats: RenderStats = { fps: 60, frameTime: 16, drawCalls: 0, triangles: 0, geometries: 0, textures: 0 };
  private frameTimes: number[] = [];
  private lastFpsUpdate = 0;
  private adaptiveQualityLevel = 2; // 0 low, 3 ultra
  private canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
      stencil: false,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x050508);
    this.scene.fog = new THREE.FogExp2(0x0a0a14, 0.012);

    this.camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 800);
    this.camera.position.set(0, 2, 6);

    this.quality = settingsManager.get('quality');
    settingsManager.onChange(s => this.applySettings(s.quality, s.resolutionScale));

    window.addEventListener('resize', () => this.resize());
    this.resize();
    this.applySettings(this.quality, settingsManager.get('resolutionScale'));
  }

  private applySettings(quality: QualityLevel, resScale: number) {
    this.quality = quality;
    this.resolutionScale = resScale;

    let effective: QualityLevel = quality;
    if (quality === 'auto') {
      const levels: QualityLevel[] = ['low', 'medium', 'high', 'ultra'];
      effective = levels[this.adaptiveQualityLevel] as QualityLevel;
    }

    const isLow = effective === 'low';
    const isMed = effective === 'medium';
    const isHigh = effective === 'high';
    const isUltra = effective === 'ultra';

    this.renderer.shadowMap.enabled = !isLow;
    this.renderer.shadowMap.type = isUltra ? THREE.PCFSoftShadowMap : THREE.BasicShadowMap;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio * resScale * (isLow ? 0.7 : isUltra ? 1 : 0.9), 2));

    // Fog density adjustment
    if (this.scene.fog instanceof THREE.FogExp2) {
      this.scene.fog.density = isLow ? 0.018 : isMed ? 0.014 : isHigh ? 0.012 : 0.01;
    }
  }

  resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  beginFrame() {
    // stats begin
  }

  endFrame(dt: number) {
    this.frameTimes.push(dt);
    if (this.frameTimes.length > 60) this.frameTimes.shift();
    const now = performance.now();
    if (now - this.lastFpsUpdate > 500) {
      const avg = this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length;
      this.stats.frameTime = avg * 1000;
      this.stats.fps = 1000 / this.stats.frameTime;
      this.stats.drawCalls = this.renderer.info.render.calls;
      this.stats.triangles = this.renderer.info.render.triangles;
      this.stats.geometries = this.renderer.info.memory.geometries;
      this.stats.textures = this.renderer.info.memory.textures;
      this.lastFpsUpdate = now;

      // Adaptive quality logic
      if (this.quality === 'auto') {
        if (this.stats.fps < 28 && this.adaptiveQualityLevel > 0) {
          this.adaptiveQualityLevel--;
          this.applySettings('auto', this.resolutionScale);
        } else if (this.stats.fps > 58 && this.adaptiveQualityLevel < 3) {
          this.adaptiveQualityLevel++;
          this.applySettings('auto', this.resolutionScale);
        }
      }
    }
  }

  getStats(): RenderStats { return { ...this.stats }; }
  getAdaptiveLevel() { return this.adaptiveQualityLevel; }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  setBackground(color: THREE.ColorRepresentation) {
    this.scene.background = new THREE.Color(color);
  }

  dispose() {
    this.renderer.dispose();
  }
}
