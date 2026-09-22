// BLACK VEIL — Electron Preload (secure bridge)
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('BLACK_VEIL_DESKTOP', {
  version: '1.0.0',
  isDesktop: true,
  platform: process.platform,
  // Future IPC
  openExternal: (url) => ipcRenderer.invoke('open-external', url),
});

console.log('[BLACK VEIL Desktop] Preload loaded — THE CITY FORGOT. YOU DIDN\'T.');
