import * as THREE from 'three';

export class TextureManager {
  private loader = new THREE.TextureLoader();
  private textures = new Map<string, THREE.Texture>();
  private canvases = new Map<string, HTMLCanvasElement>();

  async loadTexture(id: string, url: string): Promise<THREE.Texture | null> {
    if (this.textures.has(id)) return this.textures.get(id)!;
    return new Promise((resolve) => {
      this.loader.load(
        url,
        (tex) => {
          tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
          tex.colorSpace = THREE.SRGBColorSpace;
          this.textures.set(id, tex);
          console.log(`[Texture] Loaded ${id} from ${url}`);
          resolve(tex);
        },
        undefined,
        (err) => {
          console.warn(`[Texture] Failed to load ${id} from ${url}`, err);
          resolve(null);
        }
      );
    });
  }

  createProceduralTexture(id: string, width: number, height: number, draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d')!;
    draw(ctx, width, height);
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.colorSpace = THREE.SRGBColorSpace;
    this.textures.set(id, tex);
    this.canvases.set(id, canvas);
    return tex;
  }

  get(id: string): THREE.Texture | undefined {
    return this.textures.get(id);
  }

  getAll(): Map<string, THREE.Texture> {
    return this.textures;
  }

  // Generate PBR-like textures procedurally if image fails
  generateFallbackTextures() {
    // Concrete
    this.createProceduralTexture('concrete', 256, 256, (ctx, w, h) => {
      ctx.fillStyle = '#2a2a2e';
      ctx.fillRect(0,0,w,h);
      for(let i=0;i<800;i++){
        const x = Math.random()*w, y = Math.random()*h;
        const s = Math.random()*2+0.5;
        ctx.fillStyle = `rgba(${30+Math.random()*20},${30+Math.random()*20},${35+Math.random()*20},${Math.random()*0.3})`;
        ctx.fillRect(x,y,s,s);
      }
      // Cracks
      ctx.strokeStyle = 'rgba(0,0,0,0.15)';
      ctx.lineWidth = 0.5;
      for(let i=0;i<15;i++){
        ctx.beginPath();
        ctx.moveTo(Math.random()*w, Math.random()*h);
        ctx.lineTo(Math.random()*w, Math.random()*h);
        ctx.stroke();
      }
    });

    // Metal
    this.createProceduralTexture('metal', 256, 256, (ctx, w, h) => {
      const grad = ctx.createLinearGradient(0,0,w,0);
      grad.addColorStop(0, '#3a3a3e');
      grad.addColorStop(0.5, '#4a4a4e');
      grad.addColorStop(1, '#2a2a2e');
      ctx.fillStyle = grad;
      ctx.fillRect(0,0,w,h);
      // Scratches
      ctx.strokeStyle = 'rgba(255,255,255,0.06)';
      ctx.lineWidth = 0.8;
      for(let i=0;i<60;i++){
        const y = Math.random()*h;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y + (Math.random()-0.5)*4);
        ctx.stroke();
      }
      // Rivets
      ctx.fillStyle = '#1a1a1e';
      for(let x=20;x<w;x+=64){
        for(let y=20;y<h;y+=64){
          ctx.beginPath();
          ctx.arc(x,y,3,0,Math.PI*2);
          ctx.fill();
        }
      }
    });

    // Fabric tactical
    this.createProceduralTexture('fabric', 256, 256, (ctx, w, h) => {
      ctx.fillStyle = '#0f0f12';
      ctx.fillRect(0,0,w,h);
      ctx.strokeStyle = 'rgba(255,255,255,0.04)';
      ctx.lineWidth = 0.5;
      for(let x=0;x<w;x+=4){
        ctx.beginPath();
        ctx.moveTo(x,0);
        ctx.lineTo(x,h);
        ctx.stroke();
      }
      for(let y=0;y<h;y+=4){
        ctx.beginPath();
        ctx.moveTo(0,y);
        ctx.lineTo(w,y);
        ctx.stroke();
      }
      // Carbon pattern
      ctx.fillStyle = 'rgba(106,166,255,0.03)';
      for(let i=0;i<w*h/200;i++){
        ctx.fillRect(Math.random()*w, Math.random()*h, 2, 2);
      }
    });

    // Graffiti
    this.createProceduralTexture('graffiti', 512, 256, (ctx, w, h) => {
      ctx.fillStyle = '#1a1a1e';
      ctx.fillRect(0,0,w,h);
      ctx.font = 'bold 48px Orbitron, monospace';
      ctx.fillStyle = 'rgba(106,166,255,0.15)';
      ctx.fillText('VEIL', 40, 80);
      ctx.fillStyle = 'rgba(255,77,106,0.12)';
      ctx.fillText('VEYRA', 200, 140);
      ctx.fillStyle = 'rgba(74,222,128,0.1)';
      ctx.font = '24px JetBrains Mono, monospace';
      ctx.fillText('THE CITY FORGOT', 40, 200);
      // Spray noise
      for(let i=0;i<2000;i++){
        ctx.fillStyle = `hsla(${200+Math.random()*60},70%,60%,${Math.random()*0.08})`;
        ctx.fillRect(Math.random()*w, Math.random()*h, Math.random()*3+1, Math.random()*3+1);
      }
    });

    // Skin - player veil
    this.createProceduralTexture('skin_player', 256, 256, (ctx, w, h) => {
      const grad = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, w/2);
      grad.addColorStop(0, '#2a2a3a');
      grad.addColorStop(0.5, '#1a1a24');
      grad.addColorStop(1, '#0f0f14');
      ctx.fillStyle = grad;
      ctx.fillRect(0,0,w,h);
      // Veil pattern
      ctx.strokeStyle = 'rgba(106,166,255,0.08)';
      ctx.lineWidth = 1;
      for(let i=0;i<20;i++){
        ctx.beginPath();
        ctx.moveTo(0, i*13);
        ctx.bezierCurveTo(w*0.3, i*13+5, w*0.7, i*13-5, w, i*13);
        ctx.stroke();
      }
    });

    console.log('[Texture] Generated fallback procedural textures');
  }

  async loadAllGenerated() {
    this.generateFallbackTextures();
    // Try to load real generated images if available
    const toLoad = [
      { id: 'char_player', url: './public/assets/characters/player.png' },
      { id: 'char_security', url: './public/assets/characters/security.png' },
      { id: 'char_scout', url: './public/assets/characters/scout.png' },
      { id: 'char_heavy', url: './public/assets/characters/heavy.png' },
      { id: 'char_sniper', url: './public/assets/characters/sniper.png' },
      { id: 'char_hunter', url: './public/assets/characters/hunter.png' },
      { id: 'char_commander', url: './public/assets/characters/commander.png' },
      { id: 'tex_concrete_img', url: './public/assets/textures/concrete.png' },
      { id: 'tex_metal_img', url: './public/assets/textures/metal.png' },
      { id: 'tex_fabric_img', url: './public/assets/textures/fabric_tactical.png' },
      { id: 'tex_graffiti_img', url: './public/assets/textures/graffiti.png' },
    ];
    for (const item of toLoad) {
      await this.loadTexture(item.id, item.url);
    }
  }
}

export const textureManager = new TextureManager();
