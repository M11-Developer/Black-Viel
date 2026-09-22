#!/usr/bin/env node
/**
 * BLACK VEIL — One-Click Launcher
 * No bash needed — just run: node launch.mjs  or  double-click the icon
 * 
 * This script:
 * 1. Checks dependencies (node_modules)
 * 2. Builds production if needed (dist)
 * 3. Starts preview server on 4173
 * 4. Auto-opens browser to http://localhost:4173
 * 5. Shows notification with link
 * 6. Handles errors gracefully
 */

import { spawn, exec } from 'child_process';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import http from 'http';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = 4173;
const URL = `http://localhost:${PORT}`;

// Colors for terminal
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  cyan: '\x1b[36m',
  blue: '\x1b[34m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  magenta: '\x1b[35m',
  dim: '\x1b[2m',
};

function log(msg, color = colors.reset) {
  console.log(`${color}${msg}${colors.reset}`);
}

function banner() {
  log(`
  ██████╗ ██╗      █████╗  ██████╗██╗  ██╗    ██╗   ██╗███████╗██╗██╗     
  ██╔══██╗██║     ██╔══██╗██╔════╝██║ ██╔╝    ██║   ██║██╔════╝██║██║     
  ██████╔╝██║     ███████║██║     █████╔╝     ██║   ██║█████╗  ██║██║     
  ██╔══██╗██║     ██╔══██║██║     ██╔═██╗     ╚██╗ ██╔╝██╔══╝  ██║██║     
  ██████╔╝███████╗██║  ██║╚██████╗██║  ██╗     ╚████╔╝ ███████╗██║███████╗
  ╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝      ╚═══╝  ╚══════╝╚═╝╚══════╝
  `, colors.cyan);
  log(`  THE CITY FORGOT. YOU DIDN'T.`, colors.bright + colors.blue);
  log(`  Cinematic 3D Tactical Stealth Action • M11 Dev`, colors.dim);
  log(`  ────────────────────────────────────────────────`, colors.dim);
}

async function checkNodeModules() {
  if (!existsSync(join(__dirname, 'node_modules'))) {
    log(`\n  [1/3] Installing dependencies... (first time, may take a minute)`, colors.yellow);
    await runCommand('npm', ['install'], { stdio: 'inherit' });
    log(`  ✓ Dependencies installed`, colors.green);
  } else {
    log(`\n  [1/3] Dependencies OK`, colors.green);
  }
}

async function checkBuild() {
  if (!existsSync(join(__dirname, 'dist', 'index.html'))) {
    log(`\n  [2/3] Building production...`, colors.yellow);
    await runCommand('npm', ['run', 'build'], { stdio: 'inherit' });
    log(`  ✓ Production build ready`, colors.green);
  } else {
    log(`\n  [2/3] Production build OK`, colors.green);
  }
}

function runCommand(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { shell: true, ...opts });
    p.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} ${args.join(' ')} exited with ${code}`));
    });
    p.on('error', reject);
  });
}

function openBrowser(url) {
  const platform = process.platform;
  let command;
  if (platform === 'win32') command = `start "" "${url}"`;
  else if (platform === 'darwin') command = `open "${url}"`;
  else command = `xdg-open "${url}" || sensible-browser "${url}" || x-www-browser "${url}"`;

  exec(command, (err) => {
    if (err) {
      log(`\n  Could not auto-open browser. Please open manually:`, colors.yellow);
      log(`  ${url}`, colors.bright + colors.cyan);
    } else {
      log(`\n  ✓ Browser opened: ${url}`, colors.green);
    }
  });
}

function waitForServer(port, timeout = 15000) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const check = () => {
      const req = http.get(`http://localhost:${port}`, (res) => {
        res.destroy();
        resolve();
      });
      req.on('error', () => {
        if (Date.now() - start > timeout) reject(new Error('Server timeout'));
        else setTimeout(check, 300);
      });
      req.setTimeout(1000, () => {
        req.destroy();
        if (Date.now() - start > timeout) reject(new Error('Server timeout'));
        else setTimeout(check, 300);
      });
    };
    check();
  });
}

function showNotification() {
  log(`\n  ────────────────────────────────────────────────`, colors.dim);
  log(`  🎮 BLACK VEIL IS RUNNING`, colors.bright + colors.green);
  log(`  ────────────────────────────────────────────────`, colors.dim);
  log(`  Local:   ${URL}`, colors.cyan);
  log(`  Network: http://<your-ip>:${PORT}`, colors.dim);
  log(``, colors.reset);
  log(`  Controls:`, colors.bright);
  log(`    WASD = Move  |  Mouse = Look  |  Shift = Sprint`, colors.reset);
  log(`    LMB = Fire  |  RMB = Aim  |  R = Reload  |  F = Interact`, colors.reset);
  log(`    M = Map  |  Tab = Inventory  |  Esc = Menu`, colors.reset);
  log(``, colors.reset);
  log(`  Mobile: Touch joystick + buttons, gyro optional`, colors.dim);
  log(`  Press Ctrl+C to stop server`, colors.dim);
  log(`  ────────────────────────────────────────────────\n`, colors.dim);

  // Try OS notification if available
  try {
    if (process.platform === 'win32') {
      exec(`powershell -Command "Add-Type -AssemblyName System.Windows.Forms; $n=New-Object System.Windows.Forms.NotifyIcon; $n.Icon=[System.Drawing.SystemIcons]::Information; $n.Visible=$true; $n.ShowBalloonTip(5000,'BLACK VEIL','Game running at ${URL}',[System.Windows.Forms.ToolTipIcon]::Info)"`);
    } else if (process.platform === 'darwin') {
      exec(`osascript -e 'display notification "Game running at ${URL}" with title "BLACK VEIL"'`);
    } else {
      exec(`notify-send "BLACK VEIL" "Game running at ${URL}" -i dialog-information 2>/dev/null || true`);
    }
  } catch {}
}

async function main() {
  banner();

  try {
    await checkNodeModules();
    await checkBuild();

    log(`\n  [3/3] Starting server on port ${PORT}...`, colors.yellow);

    // Try zero-dependency server.cjs first (no vite needed), fallback to vite preview
    const useZeroDep = existsSync(join(__dirname, 'server.cjs')) && existsSync(join(__dirname, 'dist', 'index.html'));
    let server;
    
    if (useZeroDep) {
      log(`  Using zero-dependency server.cjs (no npm install needed for serving)`, colors.dim);
      server = spawn('node', ['server.cjs'], {
        shell: true,
        stdio: ['ignore', 'pipe', 'pipe'],
        cwd: __dirname,
        env: { ...process.env, PORT: String(PORT) }
      });
    } else {
      log(`  Using vite preview server`, colors.dim);
      server = spawn('npx', ['vite', 'preview', '--host', '0.0.0.0', '--port', String(PORT)], {
        shell: true,
        stdio: ['ignore', 'pipe', 'pipe'],
        cwd: __dirname,
      });
    }

    let serverOutput = '';
    server.stdout.on('data', (d) => {
      serverOutput += d.toString();
      process.stdout.write(d);
    });
    server.stderr.on('data', (d) => {
      process.stdout.write(d);
    });

    // Wait for server
    log(`  Waiting for server...`, colors.dim);
    await waitForServer(PORT, 20000);

    // Open browser
    setTimeout(() => openBrowser(URL), 500);
    showNotification();

    // Handle exit
    process.on('SIGINT', () => {
      log(`\n\n  Shutting down BLACK VEIL...`, colors.yellow);
      server.kill();
      process.exit(0);
    });

    server.on('close', (code) => {
      log(`\n  Server stopped (code ${code})`, colors.yellow);
      process.exit(code || 0);
    });

  } catch (err) {
    log(`\n  ✗ Error: ${err.message}`, colors.red);
    log(`\n  Try manually:`, colors.yellow);
    log(`    npm install`, colors.dim);
    log(`    npm run build`, colors.dim);
    log(`    npm run preview`, colors.dim);
    process.exit(1);
  }
}

main();
