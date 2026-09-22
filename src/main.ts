import { Game } from './app/core/Game';
import { saveManager } from './app/save/SaveManager';
import { multiplayerManager } from './app/multiplayer/MultiplayerManager';
import { freeAIModels } from './app/ai/FreeAIModels';
import { storyManager } from './app/story/StoryManager';
import { gameModeManager } from './app/game/GameModes';

console.log('%c BLACK VEIL v1.2.0 — MULTIPLAYER + AI + STORY ', 'background:#0a0a0f; color:#6aa6ff; font-size:18px; font-family:monospace; padding:8px 16px; border:1px solid #6aa6ff;');
console.log('%c THE CITY FORGOT. YOU DIDN\'T. — One-tap mobile, P2P multiplayer, 6 modes, free AI unlimited, each player unique story ', 'color:#8a8a9a; font-family:monospace;');

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
    webrtc: 'RTCPeerConnection' in window,
    webspeech: 'speechSynthesis' in window,
    vibrate: 'vibrate' in navigator,
    battery: 'getBattery' in navigator,
  };
  console.log('[Capabilities]', capabilities);
  console.log('[AI] Free unlimited models:', freeAIModels.getUnlimitedModels().length);
  console.log('[Multiplayer] P2P supported:', capabilities.webrtc);
  console.log('[Story] Current chapter:', storyManager.getCurrentChapter().id, 'Player ID:', localStorage.getItem('bv_player_id'));
  console.log('[GameModes] Available:', gameModeManager.getAllModes().length);

  if (!capabilities.webgl) {
    const status = document.getElementById('loading-status');
    if (status) status.textContent = 'WEBGL2 NOT SUPPORTED - PLEASE USE MODERN BROWSER';
    return;
  }

  // Prevent context menu, overscroll
  document.addEventListener('contextmenu', e => e.preventDefault());
  document.addEventListener('touchmove', e => { if ((e.target as HTMLElement).closest('#ui-root, #touch-controls, #multiplayer-ui')) return; e.preventDefault(); }, { passive: false });

  // Handle visibility
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      console.log('[Game] Hidden - pausing');
    }
  });

  // Orientation
  const checkOrientation = () => {
    const warning = document.getElementById('orientation-warning');
    if (!warning) return;
    // Allow portrait now for mobile one-click, but show hint
    if (window.innerHeight > window.innerWidth && window.innerWidth < 768) {
      // Don't force, just show hint that landscape better
      // warning.style.display = 'flex';
    } else {
      warning.style.display = 'none';
    }
  };
  window.addEventListener('resize', checkOrientation);
  checkOrientation();

  // Init game
  const game = new Game(canvas);

  // Expose for debug + Wasmer + mobile
  (window as any).BLACK_VEIL = game;
  (window as any).BV_SAVE = saveManager;
  (window as any).BV_MULTIPLAYER = multiplayerManager;
  (window as any).BV_AI = freeAIModels;
  (window as any).BV_STORY = storyManager;
  (window as any).BV_MODES = gameModeManager;

  // Service worker update handling
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data.type === 'UPDATE_AVAILABLE') {
        console.log('[PWA] Update available');
      }
    });
    // Register SW for offline + Wasmer
    navigator.serviceWorker.register('./sw.js').then(reg => {
      console.log('[PWA] SW registered', reg.scope);
    }).catch(err => console.log('[PWA] SW failed', err));
  }

  // Multiplayer events
  multiplayerManager.onPlayerUpdate(players => {
    console.log('[Multiplayer] Players updated:', players.length);
    window.dispatchEvent(new CustomEvent('bv:multiplayerPlayers', { detail: players }));
  });

  multiplayerManager.onRoomUpdate(room => {
    console.log('[Multiplayer] Room updated:', room.id);
    window.dispatchEvent(new CustomEvent('bv:multiplayerRoom', { detail: room }));
  });

  // Game ready event for loading screen
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent('bv:gameReady'));
  }, 100);

  // Error recovery
  window.addEventListener('error', (e) => {
    console.error('[Global Error]', e.error);
  });
  window.addEventListener('unhandledrejection', (e) => {
    console.error('[Unhandled Rejection]', e.reason);
  });

  // Wasmer + mobile one-click detection
  const isWasmer = location.hostname.includes('wasmer.app') || location.hostname.includes('wasmer');
  if (isWasmer) {
    console.log('[Wasmer] Running on Wasmer Edge - static site mode, P2P multiplayer via WebRTC');
  }

  const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
  if (isMobile) {
    console.log('[Mobile] One-tap mobile detected - touch + gyro + haptics + PWA');
    // Auto request fullscreen on first interaction
    document.addEventListener('touchend', () => {
      try { document.documentElement.requestFullscreen?.(); } catch {}
    }, { once: true });
  }

  console.log('[Black Veil] Initialized v1.2.0 - Awaiting player - Multiplayer + AI + Story unique per player');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
