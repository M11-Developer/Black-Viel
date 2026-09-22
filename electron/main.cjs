/**
 * BLACK VEIL — Electron Desktop Launcher
 * One-click icon, no bash needed
 * Loads dist/index.html or starts local server
 */

const { app, BrowserWindow, Menu, dialog, shell, Notification } = require('electron');
const path = require('path');
const fs = require('fs');
const http = require('http');
const { spawn } = require('child_process');

let mainWindow;
let serverProcess;

const PORT = 4173;
const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 1024,
    minHeight: 600,
    title: 'BLACK VEIL — THE CITY FORGOT. YOU DIDN\'T.',
    backgroundColor: '#050508',
    icon: path.join(__dirname, '../public/icons/icon-512.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.cjs'),
    },
    show: false,
    titleBarStyle: 'default',
    autoHideMenuBar: true,
  });

  // Try to load dist/index.html directly first (no server needed)
  const distPath = path.join(__dirname, '../dist/index.html');
  const devPath = path.join(__dirname, '../index.html');

  if (fs.existsSync(distPath) && !isDev) {
    console.log('[Electron] Loading dist/index.html');
    mainWindow.loadFile(distPath);
  } else if (fs.existsSync(devPath)) {
    // In dev, try localhost:4173 or 5173, else load index.html
    const tryLoadServer = () => {
      const req = http.get(`http://localhost:${PORT}`, (res) => {
        console.log(`[Electron] Server found at ${PORT}, loading`);
        mainWindow.loadURL(`http://localhost:${PORT}`);
        res.destroy();
      });
      req.on('error', () => {
        const req2 = http.get('http://localhost:5173', (res2) => {
          console.log('[Electron] Dev server found at 5173');
          mainWindow.loadURL('http://localhost:5173');
          res2.destroy();
        });
        req2.on('error', () => {
          console.log('[Electron] No server, loading dev index.html');
          mainWindow.loadFile(devPath);
        });
        req2.setTimeout(1000, () => req2.destroy());
      });
      req.setTimeout(1000, () => req.destroy());
    };
    tryLoadServer();
  } else {
    mainWindow.loadURL('http://localhost:4173');
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    mainWindow.focus();
    
    // Show notification
    if (Notification.isSupported()) {
      const notification = new Notification({
        title: 'BLACK VEIL',
        body: 'THE CITY FORGOT. YOU DIDN\'T. — Game Loaded',
        icon: path.join(__dirname, '../public/icons/icon-192.png'),
        silent: false,
      });
      notification.show();
      notification.on('click', () => mainWindow.focus());
    }
  });

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  // Menu
  const template = [
    {
      label: 'Game',
      submenu: [
        { label: 'Reload', accelerator: 'CmdOrCtrl+R', click: () => mainWindow.reload() },
        { label: 'Toggle DevTools', accelerator: 'F12', click: () => mainWindow.webContents.toggleDevTools() },
        { type: 'separator' },
        { label: 'Fullscreen', accelerator: 'F11', click: () => mainWindow.setFullScreen(!mainWindow.isFullScreen()) },
        { type: 'separator' },
        { role: 'quit' }
      ]
    },
    {
      label: 'M11 Dev',
      submenu: [
        { label: 'YouTube (Primary)', click: () => shell.openExternal('https://youtube.com/@m11-dev?si=GH9TIb3iQJh0UDev') },
        { label: 'GitHub', click: () => shell.openExternal('https://github.com/M11-Developer') },
        { label: 'TikTok', click: () => shell.openExternal('https://vt.tiktok.com/ZS9A2FU1fAJWo-k9M67/') },
        { type: 'separator' },
        { label: 'About BLACK VEIL', click: () => {
          dialog.showMessageBox(mainWindow, {
            type: 'info',
            title: 'BLACK VEIL',
            message: 'BLACK VEIL v1.0.0',
            detail: 'THE CITY FORGOT. YOU DIDN\'T.\n\nCinematic 3D Tactical Stealth Action\n\nM11 Dev — Primary Creator\nYouTube: @m11-dev (Primary)\nGitHub: M11-Developer\nTikTok: M11 Developer\nContact: ma7292537@gmail.com\n\nBuilt with Three.js + TypeScript + Electron',
            buttons: ['OK']
          });
        }}
      ]
    }
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (serverProcess) serverProcess.kill();
  if (process.platform !== 'darwin') app.quit();
});

app.on('before-quit', () => {
  if (serverProcess) serverProcess.kill();
});

// Handle second instance
const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });
}
