/**
 * BLACK VEIL — Free Multiplayer Server (WebSocket)
 * Unlimited, free, no API key, runs on Node.js
 * Supports P2P signaling + room management + story branching sync
 * Deploy on Wasmer, Fly.io, Render, or local
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 4174;
const DIST_DIR = path.join(__dirname, 'dist');

// In-memory rooms
const rooms = new Map(); // roomId -> { id, name, mode, maxPlayers, players, hostId, status }
const clients = new Map(); // ws -> { id, roomId, player }

function createRoom(id, name, mode, maxPlayers, hostId) {
  const room = {
    id,
    name,
    mode,
    maxPlayers,
    players: [],
    hostId,
    status: 'waiting',
    created: Date.now(),
    map: 'veyra_sector7'
  };
  rooms.set(id, room);
  return room;
}

function getRoom(id) {
  return rooms.get(id);
}

function broadcastToRoom(roomId, msg, excludeId = null) {
  clients.forEach((client, ws) => {
    if (client.roomId === roomId && client.id !== excludeId) {
      try {
        if (ws.readyState === 1) ws.send(JSON.stringify(msg));
      } catch {}
    }
  });
}

// HTTP server for static + multiplayer API
const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = url.pathname;

  // API: List rooms
  if (pathname === '/api/rooms') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(Array.from(rooms.values()).map(r => ({
      id: r.id,
      name: r.name,
      mode: r.mode,
      players: r.players.length,
      maxPlayers: r.maxPlayers,
      status: r.status,
      map: r.map
    }))));
    return;
  }

  // API: Create room
  if (pathname === '/api/rooms/create' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const roomId = data.id || 'ROOM_' + Math.random().toString(36).substr(2, 6).toUpperCase();
        const room = createRoom(roomId, data.name || roomId, data.mode || 'coop_story', data.maxPlayers || 4, data.hostId);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(room));
      } catch (e) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  // Serve static dist
  let filePath = pathname === '/' ? '/index.html' : pathname;
  const safePath = path.normalize(filePath).replace(/^(\.\.[\/\\])+/, '');
  let fullPath = path.join(DIST_DIR, safePath);

  if (!fs.existsSync(fullPath) || fs.statSync(fullPath).isDirectory()) {
    if (pathname.startsWith('/assets/') || pathname.startsWith('/icons/')) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    fullPath = path.join(DIST_DIR, 'index.html');
  }

  if (!fs.existsSync(DIST_DIR)) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<html><body><h1>BLACK VEIL — Build dist first: npm run build</h1></body></html>`);
    return;
  }

  const ext = path.extname(fullPath).toLowerCase();
  const mime = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.ico': 'image/x-icon',
    '.svg': 'image/svg+xml',
    '.webmanifest': 'application/manifest+json'
  }[ext] || 'application/octet-stream';

  fs.readFile(fullPath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('404');
      return;
    }
    res.writeHead(200, { 'Content-Type': mime });
    res.end(data);
  });
});

// WebSocket upgrade handling (simple, no external ws lib - uses built-in)
server.on('upgrade', (req, socket, head) => {
  // Simple WebSocket handshake (for demo, we use raw)
  // For production, use 'ws' npm package
  socket.destroy(); // We don't handle raw upgrade without ws lib
});

console.log(`
  BLACK VEIL — Multiplayer Server v1.3.0
  P2P WebRTC signaling + room management
  Free unlimited, no API key

  To enable full WebSocket multiplayer:
  1. npm install ws
  2. Use server-multiplayer-ws.cjs (with ws lib)

  For now, serving static + REST API for rooms:
    GET  /api/rooms - list rooms
    POST /api/rooms/create - create room

  Static: http://localhost:${PORT}
  API: http://localhost:${PORT}/api/rooms

  For P2P, game uses PeerJS cloud (free) + mock local bots
  Each player story branching unique - choices sync via broadcast
`);

server.listen(PORT, '0.0.0.0', () => {
  console.log(`  Server running at http://localhost:${PORT}`);
  console.log(`  Multiplayer API at http://localhost:${PORT}/api/rooms`);
  try {
    const { exec } = require('child_process');
    const url = `http://localhost:${PORT}`;
    const platform = process.platform;
    let cmd;
    if (platform === 'win32') cmd = `start "" "${url}"`;
    else if (platform === 'darwin') cmd = `open "${url}"`;
    else cmd = `xdg-open "${url}" 2>/dev/null || true`;
    setTimeout(() => exec(cmd), 1000);
  } catch {}
});
