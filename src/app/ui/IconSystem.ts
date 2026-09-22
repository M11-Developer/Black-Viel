/**
 * BLACK VEIL — Icon System
 * No emojis, only SVG and generated images
 * Each icon is SVG path
 */

export type IconName = 
  | 'play' | 'pause' | 'fire' | 'aim' | 'reload' | 'jump' | 'crouch' | 'interact' | 'switch' | 'melee' | 'sprint' | 'photo'
  | 'health' | 'armor' | 'ammo' | 'stealth' | 'hidden' | 'detected' | 'combat' | 'suspicious'
  | 'coop' | 'deathmatch' | 'extraction' | 'survival' | 'infiltration'
  | 'player' | 'security' | 'scout' | 'heavy' | 'sniper' | 'hunter' | 'commander'
  | 'vanguard' | 'ashen' | 'helix' | 'veil'
  | 'map' | 'inventory' | 'missions' | 'settings' | 'credits' | 'achievements'
  | 'server' | 'online' | 'offline' | 'gyro' | 'haptics' | 'battery' | 'fps'
  | 'trophy' | 'intel' | 'cache' | 'med' | 'terminal' | 'camera' | 'safehouse';

export const ICONS: Record<IconName, { svg: string; label: string; labelAr: string }> = {
  play: { svg: '<polygon points="5 3 19 12 5 21 5 3"/>', label: 'PLAY', labelAr: 'العب' },
  pause: { svg: '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>', label: 'PAUSE', labelAr: 'توقف' },
  fire: { svg: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/>', label: 'FIRE', labelAr: 'نار' },
  aim: { svg: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>', label: 'AIM', labelAr: 'تصويب' },
  reload: { svg: '<polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>', label: 'RELOAD', labelAr: 'تذخير' },
  jump: { svg: '<polyline points="18 15 12 9 6 15"/><line x1="12" y1="9" x2="12" y2="21"/>', label: 'JUMP', labelAr: 'قفز' },
  crouch: { svg: '<path d="M4 20h16"/><path d="M8 16l4-8 4 8"/><circle cx="12" cy="8" r="2"/>', label: 'CROUCH', labelAr: 'انحناء' },
  interact: { svg: '<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M7 8V6a5 5 0 0 1 10 0v2"/>', label: 'INTERACT', labelAr: 'تفاعل' },
  switch: { svg: '<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>', label: 'SWITCH', labelAr: 'تبديل' },
  melee: { svg: '<path d="M14 4a6 6 0 0 0-6 6v4a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4a6 6 0 0 0-6-6z"/><path d="M9 9h6"/><path d="M9 13h6"/>', label: 'MELEE', labelAr: 'قتال' },
  sprint: { svg: '<path d="M13 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><polyline points="18 5 22 5 22 9"/><path d="M22 5L13 14"/>', label: 'SPRINT', labelAr: 'ركض' },
  photo: { svg: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>', label: 'PHOTO', labelAr: 'صورة' },
  health: { svg: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>', label: 'HEALTH', labelAr: 'صحة' },
  armor: { svg: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>', label: 'ARMOR', labelAr: 'درع' },
  ammo: { svg: '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>', label: 'AMMO', labelAr: 'ذخيرة' },
  stealth: { svg: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>', label: 'STEALTH', labelAr: 'تخفي' },
  hidden: { svg: '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.88 6.08A10.85 10.85 0 0 1 12 6c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><path d="M2 2l20 20"/>', label: 'HIDDEN', labelAr: 'مخفي' },
  detected: { svg: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" y1="8" x2="12" y2="8"/><line x1="3.95" y1="6.06" x2="8.54" y2="14"/><line x1="10.88" y1="21.94" x2="15.46" y2="14"/>', label: 'DETECTED', labelAr: 'مكتشف' },
  combat: { svg: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>', label: 'COMBAT', labelAr: 'قتال' },
  suspicious: { svg: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>', label: 'SUSPICIOUS', labelAr: 'مشبوه' },
  coop: { svg: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6"/><path d="M23 11v2"/><path d="M17 11v2"/>', label: 'COOP', labelAr: 'تعاون' },
  deathmatch: { svg: '<circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/>', label: 'DEATHMATCH', labelAr: 'موت جماعي' },
  extraction: { svg: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>', label: 'EXTRACTION', labelAr: 'استخراج' },
  survival: { svg: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>', label: 'SURVIVAL', labelAr: 'بقاء' },
  infiltration: { svg: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>', label: 'INFILTRATION', labelAr: 'تسلل' },
  player: { svg: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>', label: 'PLAYER', labelAr: 'لاعب' },
  security: { svg: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="8" r="2"/><path d="M12 10v4"/>', label: 'SECURITY', labelAr: 'أمن' },
  scout: { svg: '<circle cx="12" cy="12" r="10"/><polyline points="16 12 12 8 8 12"/><line x1="12" y1="16" x2="12" y2="8"/>', label: 'SCOUT', labelAr: 'كشاف' },
  heavy: { svg: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v9a6 6 0 0 0 12 0V2z"/>', label: 'HEAVY', labelAr: 'ثقيل' },
  sniper: { svg: '<circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/>', label: 'SNIPER', labelAr: 'قناص' },
  hunter: { svg: '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/><circle cx="12" cy="12" r="3"/>', label: 'HUNTER', labelAr: 'صياد' },
  commander: { svg: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/>', label: 'COMMANDER', labelAr: 'قائد' },
  vanguard: { svg: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>', label: 'VANGUARD', labelAr: 'فانجارد' },
  ashen: { svg: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>', label: 'ASHEN', labelAr: 'آشن' },
  helix: { svg: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>', label: 'HELIX', labelAr: 'هيليكس' },
  veil: { svg: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>', label: 'VEIL', labelAr: 'الحجاب' },
  map: { svg: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>', label: 'MAP', labelAr: 'خريطة' },
  inventory: { svg: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>', label: 'INVENTORY', labelAr: 'مخزون' },
  missions: { svg: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>', label: 'MISSIONS', labelAr: 'مهام' },
  settings: { svg: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>', label: 'SETTINGS', labelAr: 'إعدادات' },
  credits: { svg: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>', label: 'CREDITS', labelAr: 'اعتمادات' },
  achievements: { svg: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>', label: 'ACHIEVEMENTS', labelAr: 'إنجازات' },
  server: { svg: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>', label: 'SERVER', labelAr: 'سيرفر' },
  online: { svg: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>', label: 'ONLINE', labelAr: 'متصل' },
  offline: { svg: '<line x1="1" y1="1" x2="23" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.58 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>', label: 'OFFLINE', labelAr: 'غير متصل' },
  gyro: { svg: '<path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/><path d="M12 6v6l4 2"/>', label: 'GYRO', labelAr: 'جيروسكوب' },
  haptics: { svg: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>', label: 'HAPTICS', labelAr: 'اهتزاز' },
  battery: { svg: '<rect x="2" y="7" width="16" height="10" rx="2"/><line x1="22" y1="11" x2="22" y2="13"/><line x1="6" y1="11" x2="6" y2="13"/><line x1="10" y1="11" x2="10" y2="13"/><line x1="14" y1="11" x2="14" y2="13"/>', label: 'BATTERY', labelAr: 'بطارية' },
  fps: { svg: '<rect x="2" y="2" width="20" height="20" rx="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/>', label: 'FPS', labelAr: 'إطارات' },
  trophy: { svg: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v9a6 6 0 0 0 12 0V2z"/>', label: 'TROPHY', labelAr: 'كأس' },
  intel: { svg: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>', label: 'INTEL', labelAr: 'معلومات' },
  cache: { svg: '<path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/>', label: 'CACHE', labelAr: 'مخبأ' },
  med: { svg: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>', label: 'MED', labelAr: 'علاج' },
  terminal: { svg: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>', label: 'TERMINAL', labelAr: 'جهاز' },
  camera: { svg: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>', label: 'CAMERA', labelAr: 'كاميرا' },
  safehouse: { svg: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>', label: 'SAFEHOUSE', labelAr: 'ملجأ' }
};

export function createIconElement(name: IconName, size = 20, color?: string): HTMLElement {
  const icon = ICONS[name];
  if (!icon) {
    const span = document.createElement('span');
    span.textContent = name;
    return span;
  }

  const wrapper = document.createElement('span');
  wrapper.className = `bv-icon bv-icon-${name}`;
  wrapper.innerHTML = `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color || 'currentColor'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle">
      ${icon.svg}
    </svg>
  `;
  wrapper.title = icon.label;
  return wrapper;
}

export function getIconSvg(name: IconName, size = 24, color = 'currentColor'): string {
  const icon = ICONS[name];
  if (!icon) return '';
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${icon.svg}</svg>`;
}
