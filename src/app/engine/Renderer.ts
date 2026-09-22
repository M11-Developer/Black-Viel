import * as THREE from 'three';
import { settingsManager, type QualityLevel } from '../settings/SettingsManager';
import { textureManager } from '../core/TextureManager';

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
  private adaptiveQualityLevel = 2;
  private canvas: HTMLCanvasElement;
  private ambientLight: THREE.AmbientLight;
  private directionalLight: THREE.DirectionalLight;
  private hemisphereLight: THREE.HemisphereLight;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
      stencil: false,
      logarithmicDepthBuffer: true,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.shadowMap.autoUpdate = true;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x050508);
    this.scene.fog = new THREE.FogExp2(0x0a0a14, 0.012);

    // Enhanced lighting - cinematic
    this.ambientLight = new THREE.AmbientLight(0x1a1a2e, 0.35);
    this.scene.add(this.ambientLight);

    this.hemisphereLight = new THREE.HemisphereLight(0x6aa6ff, 0x0a0a0f, 0.4);
    this.scene.add(this.hemisphereLight);

    this.directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    this.directionalLight.position.set(30, 50, 20);
    this.directionalLight.castShadow = true;
    this.directionalLight.shadow.mapSize.set(2048, 2048);
    this.directionalLight.shadow.camera.near = 0.5;
    this.directionalLight.shadow.camera.far = 150;
    this.directionalLight.shadow.camera.left = -60;
    this.directionalLight.shadow.camera.right = 60;
    this.directionalLight.shadow.camera.top = 60;
    this.directionalLight.shadow.camera.bottom = -60;
    this.directionalLight.shadow.bias = -0.0001;
    this.scene.add(this.directionalLight);

    // Moon light
    const moonLight = new THREE.DirectionalLight(0x6aa6ff, 0.3);
    moonLight.position.set(-40, 60, -30);
    this.scene.add(moonLight);

    this.camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 800);
    this.camera.position.set(0, 2, 6);

    this.quality = settingsManager.get('quality');
    settingsManager.onChange(s => this.applySettings(s.quality, s.resolutionScale));

    window.addEventListener('resize', () => this.resize());
    this.resize();
    this.applySettings(this.quality, settingsManager.get('resolutionScale'));

    // Load textures
    textureManager.loadAllGenerated();

    console.log('[Renderer] Enhanced graphics initialized - cinematic lighting, 2048 shadows, ACESFilmic');
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
    this.renderer.shadowMap.type = isUltra ? THREE.PCFSoftShadowMap : isMed ? THREE.PCFShadowMap : THREE.BasicShadowMap;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio * resScale * (isLow ? 0.6 : isUltra ? 1.1 : 0.9), 2));

    // Shadow map size based on quality
    const shadowSize = isLow ? 1024 : isMed ? 2048 : isHigh ? 2048 : 4096;
    this.directionalLight.shadow.mapSize.set(shadowSize, shadowSize);

    // Fog
    if (this.scene.fog instanceof THREE.FogExp2) {
      this.scene.fog.density = isLow ? 0.02 : isMed ? 0.015 : isHigh ? 0.012 : 0.009;
    }

    // Tone mapping exposure
    this.renderer.toneMappingExposure = isLow ? 1.0 : isUltra ? 1.25 : 1.15;

    // Ambient
    this.ambientLight.intensity = isLow ? 0.25 : isUltra ? 0.45 : 0.35;
    this.hemisphereLight.intensity = isLow ? 0.3 : isUltra ? 0.5 : 0.4;

    console.log(`[Renderer] Quality: ${effective} (adaptive ${this.adaptiveQualityLevel}) resScale ${resScale} shadow ${shadowSize}`);
  }

  resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  beginFrame() {
    // Could add post-processing here
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

      if (this.quality === 'auto') {
        if (this.stats.fps < 26 && this.adaptiveQualityLevel > 0) {
          this.adaptiveQualityLevel--;
          this.applySettings('auto', this.resolutionScale);
          console.log(`[Renderer] Adaptive down to ${this.adaptiveQualityLevel} FPS ${this.stats.fps.toFixed(1)}`);
        } else if (this.stats.fps > 58 && this.adaptiveQualityLevel < 3) {
          this.adaptiveQualityLevel++;
          this.applySettings('auto', this.resolutionScale);
          console.log(`[Renderer] Adaptive up to ${this.adaptiveQualityLevel} FPS ${this.stats.fps.toFixed(1)}`);
        }
      }

      // Emit FPS for mobile HUD
      window.dispatchEvent(new CustomEvent('bv:fps', { detail: this.stats.fps }));
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

  // Enhanced graphics methods
  setTimeOfDay(time: number) {
    // time 0-1, 0 midnight, 0.5 noon
    const isNight = time < 0.25 || time > 0.75;
    if (this.scene.fog instanceof THREE.FogExp2) {
      this.scene.fog.color.setHex(isNight ? 0x0a0a14 : 0x1a1a2a);
    }
    this.directionalLight.intensity = isNight ? 0.3 : 1.2;
    this.ambientLight.intensity = isNight ? 0.2 : 0.4;
  }

  addPointLight(pos: THREE.Vector3, color: number, intensity: number, distance: number) {
    const light = new THREE.PointLight(color, intensity, distance);
    light.position.copy(pos);
    light.castShadow = true;
    light.shadow.mapSize.set(512, 512);
    this.scene.add(light);
    return light;
  }

  dispose() {
    this.renderer.dispose();
  }
}
