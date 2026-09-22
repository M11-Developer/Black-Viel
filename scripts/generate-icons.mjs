import { PNG } from 'pngjs';
import fs from 'fs';
import path from 'path';

function generateIcon(size, filePath) {
  const png = new PNG({ width: size, height: size });
  // Fill with Black Veil gradient: dark background with accent glow
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (size * y + x) << 2;
      // radial gradient from center
      const cx = size / 2, cy = size / 2;
      const dx = x - cx, dy = y - cy;
      const dist = Math.sqrt(dx*dx + dy*dy) / (size/2);
      const angle = Math.atan2(dy, dx);
      
      // Base: #050508 -> #0a0a0f -> #141420
      let r = 5 + Math.floor(15 * (1 - dist));
      let g = 5 + Math.floor(15 * (1 - dist));
      let b = 8 + Math.floor(24 * (1 - dist));
      
      // Accent glow near center
      const glow = Math.max(0, 1 - dist * 1.8);
      r += Math.floor(106 * glow * 0.15);
      g += Math.floor(166 * glow * 0.15);
      b += Math.floor(255 * glow * 0.25);
      
      // Letter "V" shape in center - stylized Black Veil mark
      // Create a V with veil effect
      const isV = (() => {
        const vx = (x - cx) / (size * 0.22);
        const vy = (y - cy) / (size * 0.32) + 0.15;
        // Two lines forming V
        const leftLine = Math.abs(vx + vy * 0.6) < 0.18 && vy > -0.8 && vy < 0.8;
        const rightLine = Math.abs(vx - vy * 0.6) < 0.18 && vy > -0.8 && vy < 0.8;
        return leftLine || rightLine;
      })();
      
      if (isV) {
        r = 220; g = 230; b = 255;
        const edge = Math.sin(dist * 20) * 0.1 + 0.9;
        r = Math.floor(r * edge);
        g = Math.floor(g * edge);
        b = Math.floor(b * edge);
      }
      
      // Border
      if (dist > 0.92) {
        r = Math.floor(r * 0.6);
        g = Math.floor(g * 0.6);
        b = Math.floor(b * 0.7);
      }
      
      png.data[idx] = Math.min(255, r);
      png.data[idx+1] = Math.min(255, g);
      png.data[idx+2] = Math.min(255, b);
      png.data[idx+3] = 255;
    }
  }
  
  const buffer = PNG.sync.write(png);
  fs.writeFileSync(filePath, buffer);
  console.log(`Generated ${filePath} (${size}x${size})`);
}

const outDir = path.join(process.cwd(), 'public', 'icons');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

generateIcon(192, path.join(outDir, 'icon-192.png'));
generateIcon(512, path.join(outDir, 'icon-512.png'));
generateIcon(32, path.join(outDir, 'favicon-32.png'));
generateIcon(16, path.join(outDir, 'favicon-16.png'));

// Also copy 192 as favicon.ico placeholder (will be png but okay)
fs.copyFileSync(path.join(outDir, 'icon-192.png'), path.join(process.cwd(), 'public', 'favicon.ico'));

console.log('Icons generated');
