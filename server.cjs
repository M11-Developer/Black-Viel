/**
 * BLACK VEIL — Zero-Dependency Static Server
 * Serves dist/ folder on port 4173, no npm install needed (only Node.js)
 * One-click launcher uses this if vite not available
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = process.env.PORT || 4173;
const DIST_DIR = path.join(__dirname, 'dist');

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.webp': 'image/webp',
  '.webmanifest': 'application/manifest+json',
  '.map': 'application/json',
};

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return MIME_TYPES[ext] || 'application/octet-stream';
}

function serveFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }
    res.writeHead(200, { 'Content-Type': getMimeType(filePath) });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  // CORS and PWA headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  
  let urlPath = req.url.split('?')[0];
  if (urlPath === '/') urlPath = '/index.html';
  
  // Security: prevent directory traversal
  const safePath = path.normalize(urlPath).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(DIST_DIR, safePath);
  
  // If file doesn't exist, try index.html (SPA fallback)
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    // Check if it's an asset request that should 404
    if (urlPath.startsWith('/assets/') || urlPath.startsWith('/icons/')) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    filePath = path.join(DIST_DIR, 'index.html');
  }
  
  // Check if dist exists
  if (!fs.existsSync(DIST_DIR)) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <html><head><title>BLACK VEIL — Build Required</title>
      <style>body{background:#050508;color:#e8e8ec;font-family:monospace;padding:40px;text-align:center}
      h1{font-family:Orbitron;color:#6aa6ff} code{background:rgba(255,255,255,0.1);padding:2px 6px;border-radius:3px}</style>
      </head><body>
      <h1>BLACK VEIL</h1>
      <p>Production build not found at <code>dist/</code></p>
      <p>Please run: <code>npm run build</code> or <code>node launch.mjs</code></p>
      <p>Or double-click <code>Black-Veil.bat</code> / <code>Black-Veil.sh</code></p>
      </body></html>
    `);
    return;
  }
  
  serveFile(res, filePath);
});

server.listen(PORT, '0.0.0.0', () => {
  const url = `http://localhost:${PORT}`;
  console.log(`
  ██████╗ ██╗      █████╗  ██████╗██╗  ██╗    ██╗   ██╗███████╗██╗██╗     
  ██╔══██╗██║     ██╔══██╗██╔════╝██║ ██╔╝    ██║   ██║██╔════╝██║██║     
  ██████╔╝██║     ███████║██║     █████╔╝     ██║   ██║█████╗  ██║██║     
  ██╔══██╗██║     ██╔══██║██║     ██╔═██╗     ╚██╗ ██╔╝██╔══╝  ██║██║     
  ██████╔╝███████╗██║  ██║╚██████╗██║  ██╗     ╚████╔╝ ███████╗██║███████╗
  ╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝      ╚═══╝  ╚══════╝╚═╝╚══════╝

  THE CITY FORGOT. YOU DIDN'T.
  Cinematic 3D Tactical Stealth Action • M11 Dev
  ────────────────────────────────────────────────
  Server running at:
    Local:   ${url}
    Network: http://${getLocalIP()}:${PORT}
  
  No bash needed — just click the icon and game auto-opens
  Press Ctrl+C to stop
  ────────────────────────────────────────────────
  `);
  
  // Auto-open browser after 1s
  setTimeout(() => openBrowser(url), 1000);
  
  // OS notification
  try {
    if (process.platform === 'win32') {
      exec(`powershell -Command "Add-Type -AssemblyName System.Windows.Forms; $n=New-Object System.Windows.Forms.NotifyIcon; $n.Icon=[System.Drawing.SystemIcons]::Information; $n.Visible=$true; $n.ShowBalloonTip(5000,'BLACK VEIL','Game running at ${url}',[System.Windows.Forms.ToolTipIcon]::Info)"`);
    } else if (process.platform === 'darwin') {
      exec(`osascript -e 'display notification "Game running at ${url}" with title "BLACK VEIL"'`);
    } else {
      exec(`notify-send "BLACK VEIL" "Game running at ${url}" -i dialog-information 2>/dev/null || true`);
    }
  } catch {}
});

function getLocalIP() {
  try {
    const os = require('os');
    const nets = os.networkInterfaces();
    for (const name of Object.keys(nets)) {
      for (const net of nets[name]) {
        if (net.family === 'IPv4' && !net.internal) return net.address;
      }
    }
  } catch {}
  return '<your-ip>';
}

function openBrowser(url) {
  const platform = process.platform;
  let command;
  if (platform === 'win32') command = `start "" "${url}"`;
  else if (platform === 'darwin') command = `open "${url}"`;
  else command = `xdg-open "${url}" 2>/dev/null || sensible-browser "${url}" 2>/dev/null || x-www-browser "${url}" 2>/dev/null || echo "Open manually: ${url}"`;

  exec(command, (err) => {
    if (err) {
      console.log(`  Please open manually: ${url}`);
    } else {
      console.log(`  ✓ Browser opened: ${url}`);
    }
  });
}

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`\n  Port ${PORT} already in use — trying ${PORT+1}`);
    server.listen(PORT+1, '0.0.0.0');
  } else {
    console.error('Server error:', err);
  }
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n  Shutting down BLACK VEIL...');
  server.close(() => process.exit(0));
});
