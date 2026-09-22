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
  private pointLights: THREE.PointLight[] = [];
  private time = 0;

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
    this.renderer.toneMappingExposure = 1.18;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.shadowMap.autoUpdate = true;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x050508);
    this.scene.fog = new THREE.FogExp2(0x0a0a14, 0.011);

    // Enhanced cinematic lighting
    this.ambientLight = new THREE.AmbientLight(0x1a1a2e, 0.38);
    this.scene.add(this.ambientLight);

    this.hemisphereLight = new THREE.HemisphereLight(0x6aa6ff, 0x0a0a0f, 0.45);
    this.scene.add(this.hemisphereLight);

    this.directionalLight = new THREE.DirectionalLight(0xfff4e0, 1.25);
    this.directionalLight.position.set(35, 55, 22);
    this.directionalLight.castShadow = true;
    this.directionalLight.shadow.mapSize.set(2048, 2048);
    this.directionalLight.shadow.camera.near = 0.5;
    this.directionalLight.shadow.camera.far = 180;
    this.directionalLight.shadow.camera.left = -70;
    this.directionalLight.shadow.camera.right = 70;
    this.directionalLight.shadow.camera.top = 70;
    this.directionalLight.shadow.camera.bottom = -70;
    this.directionalLight.shadow.bias = -0.00012;
    this.directionalLight.shadow.normalBias = 0.04;
    this.scene.add(this.directionalLight);

    // Moon light - cool fill
    const moonLight = new THREE.DirectionalLight(0x6aa6ff, 0.35);
    moonLight.position.set(-45, 65, -35);
    this.scene.add(moonLight);

    // Volumetric fog lights - city atmosphere
    const cityGlow1 = new THREE.PointLight(0x6aa6ff, 2.2, 90);
    cityGlow1.position.set(20, 12, 20);
    cityGlow1.castShadow = false;
    this.scene.add(cityGlow1);
    this.pointLights.push(cityGlow1);

    const cityGlow2 = new THREE.PointLight(0xff4d6a, 1.5, 70);
    cityGlow2.position.set(-25, 8, -15);
    this.scene.add(cityGlow2);
    this.pointLights.push(cityGlow2);

    const cityGlow3 = new THREE.PointLight(0x4ade80, 1.0, 60);
    cityGlow3.position.set(0, 6, 35);
    this.scene.add(cityGlow3);
    this.pointLights.push(cityGlow3);

    // Neon signs emissive - distant
    const neonLight = new THREE.PointLight(0x00e5ff, 3.5, 120);
    neonLight.position.set(40, 18, 0);
    this.scene.add(neonLight);
    this.pointLights.push(neonLight);

    this.camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 900);
    this.camera.position.set(0, 2, 6);

    this.quality = settingsManager.get('quality');
    settingsManager.onChange(s => this.applySettings(s.quality, s.resolutionScale));

    window.addEventListener('resize', () => this.resize());
    this.resize();
    this.applySettings(this.quality, settingsManager.get('resolutionScale'));

    // Load textures
    textureManager.loadAllGenerated();

    console.log('[Renderer] FINAL v1.4.0 - cinematic lighting, volumetric fog, ACES, 2048 shadows, neon city glow');
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
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio * resScale * (isLow ? 0.6 : isUltra ? 1.15 : 0.92), 2.2));

    const shadowSize = isLow ? 1024 : isMed ? 2048 : isHigh ? 2048 : 4096;
    this.directionalLight.shadow.mapSize.set(shadowSize, shadowSize);

    if (this.scene.fog instanceof THREE.FogExp2) {
      this.scene.fog.density = isLow ? 0.022 : isMed ? 0.015 : isHigh ? 0.011 : 0.008;
    }

    this.renderer.toneMappingExposure = isLow ? 1.02 : isUltra ? 1.28 : 1.18;
    this.ambientLight.intensity = isLow ? 0.28 : isUltra ? 0.48 : 0.38;
    this.hemisphereLight.intensity = isLow ? 0.32 : isUltra ? 0.55 : 0.45;

    // Point lights intensity based on quality
    const pointMult = isLow ? 0.5 : isUltra ? 1.3 : 1.0;
    this.pointLights.forEach(l => {
      l.intensity = l.intensity * pointMult;
      l.visible = !isLow || l === this.pointLights[0];
    });

    console.log(`[Renderer] Quality: ${effective} (adaptive ${this.adaptiveQualityLevel}) resScale ${resScale} shadow ${shadowSize}`);
  }

  resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  beginFrame(dt: number) {
    this.time += dt;
    // Animate city lights flicker for realism
    if (this.pointLights.length > 0) {
      this.pointLights[0].intensity = 2.2 + Math.sin(this.time * 1.7) * 0.25 + Math.sin(this.time * 4.3) * 0.12;
      if (this.pointLights[1]) this.pointLights[1].intensity = 1.5 + Math.sin(this.time * 1.2 + 1.5) * 0.2;
      if (this.pointLights[3]) this.pointLights[3].intensity = 3.5 + Math.sin(this.time * 2.1 + 0.8) * 0.4;
    }
    // Subtle fog color shift day/night cycle simulation
    if (this.scene.fog instanceof THREE.FogExp2) {
      const fogHue = 0.03 + Math.sin(this.time * 0.02) * 0.01;
      this.scene.fog.color.setHSL(fogHue, 0.25, 0.06);
    }
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

  setTimeOfDay(time: number) {
    const isNight = time < 0.25 || time > 0.75;
    if (this.scene.fog instanceof THREE.FogExp2) {
      this.scene.fog.color.setHex(isNight ? 0x0a0a14 : 0x1a1a2a);
    }
    this.directionalLight.intensity = isNight ? 0.35 : 1.25;
    this.ambientLight.intensity = isNight ? 0.22 : 0.42;
    this.hemisphereLight.intensity = isNight ? 0.28 : 0.48;
  }

  addPointLight(pos: THREE.Vector3, color: number, intensity: number, distance: number) {
    const light = new THREE.PointLight(color, intensity, distance);
    light.position.copy(pos);
    light.castShadow = true;
    light.shadow.mapSize.set(512, 512);
    this.scene.add(light);
    this.pointLights.push(light);
    return light;
  }

  // Screen effects for realism
  flash(color: number, intensity: number, duration: number) {
    const flashLight = new THREE.PointLight(color, intensity, 30);
    flashLight.position.copy(this.camera.position);
    flashLight.position.add(new THREE.Vector3(0,0,-2).applyQuaternion(this.camera.quaternion));
    this.scene.add(flashLight);
    setTimeout(() => this.scene.remove(flashLight), duration * 1000);
  }

  dispose() {
    this.renderer.dispose();
  }
}
