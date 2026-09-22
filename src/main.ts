import { Game } from './app/core/Game';
import { saveManager } from './app/save/SaveManager';

console.log('%c BLACK VEIL ', 'background:#0a0a0f; color:#6aa6ff; font-size:20px; font-family:monospace; padding:8px 16px; border:1px solid #6aa6ff;');
console.log('%c THE CITY FORGOT. YOU DIDN\'T. ', 'color:#8a8a9a; font-family:monospace;');

function init() {
  const canvas = document.getElementById('game-canvas') as HTMLCanvasElement;
  if (!canvas) {
    console.error('Canvas not found');
    return;
  }

  // Device capability detection
  const capabilities = {
    webgl: (() => { try { const c = document.createElement('canvas'); return !!window.WebGL2RenderingContext && !!c.getContext('webgl2'); } catch { return false; } })(),
    webgpu: 'gpu' in navigator,
    touch: 'ontouchstart' in window,
    storage: (() => { try { localStorage.setItem('test', '1'); localStorage.removeItem('test'); return true; } catch { return false; } })(),
    fullscreen: !!document.documentElement.requestFullscreen,
    gamepad: 'getGamepads' in navigator,
    gyro: 'DeviceOrientationEvent' in window,
  };
  console.log('[Capabilities]', capabilities);

  if (!capabilities.webgl) {
    document.getElementById('loading-status')!.textContent = 'WEBGL2 NOT SUPPORTED - PLEASE USE MODERN BROWSER';
    return;
  }

  // Prevent context menu, overscroll
  document.addEventListener('contextmenu', e => e.preventDefault());
  document.addEventListener('touchmove', e => { if ((e.target as HTMLElement).closest('#ui-root, #touch-controls')) return; e.preventDefault(); }, { passive: false });

  // Handle visibility
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      console.log('[Game] Hidden - pausing audio');
    }
  });

  // Orientation
  const checkOrientation = () => {
    const warning = document.getElementById('orientation-warning');
    if (!warning) return;
    if (window.innerHeight > window.innerWidth && window.innerWidth < 768) {
      warning.style.display = 'flex';
    } else {
      warning.style.display = 'none';
    }
  };
  window.addEventListener('resize', checkOrientation);
  checkOrientation();

  // Init game
  const game = new Game(canvas);

  // Expose for debug
  (window as any).BLACK_VEIL = game;
  (window as any).BV_SAVE = saveManager;

  // Service worker update handling
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data.type === 'UPDATE_AVAILABLE') {
        console.log('[PWA] Update available');
      }
    });
  }

  // Error recovery
  window.addEventListener('error', (e) => {
    console.error('[Global Error]', e.error);
  });
  window.addEventListener('unhandledrejection', (e) => {
    console.error('[Unhandled Rejection]', e.reason);
  });

  console.log('[Black Veil] Initialized - Awaiting player');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
