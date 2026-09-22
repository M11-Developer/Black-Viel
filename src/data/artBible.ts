/**
 * BLACK VEIL - Art Bible
 * Defines visual consistency system
 */
export const ArtBible = {
  palette: {
    primary: '#0a0a0f',
    secondary: '#141420',
    accent: '#6aa6ff',
    accent2: '#a78bfa',
    danger: '#ff4d6a',
    warning: '#ffb84d',
    success: '#4dff9a',
    text: '#e8e8ec',
    textDim: '#8a8a9a',
    textFaint: '#5a5a6a',
    background: '#050508',
    concrete: '#8a8a85',
    metal: '#6a6a72',
    rust: '#8a4a2a',
    neonCyan: '#00e5ff',
    neonAmber: '#ffaa00',
  },
  materials: {
    concrete: { roughness: 0.9, metalness: 0.05, color: 0x8a8a85 },
    asphalt: { roughness: 0.85, metalness: 0.02, color: 0x1a1a1e },
    metal: { roughness: 0.4, metalness: 0.8, color: 0x6a6a72 },
    paintedMetal: { roughness: 0.5, metalness: 0.3, color: 0x2a3a4a },
    glass: { roughness: 0.05, metalness: 0.1, color: 0x88aacc, transparent: true, opacity: 0.25 },
    fabric: { roughness: 0.95, metalness: 0, color: 0x2a2a32 },
    rubber: { roughness: 0.9, metalness: 0, color: 0x111114 },
    wood: { roughness: 0.8, metalness: 0, color: 0x4a3a2a },
    tactical: { roughness: 0.7, metalness: 0.1, color: 0x2d342d },
  },
  factions: {
    VANGUARD: { color: '#4a6a8a', symbol: '◬', name: 'VANGUARD' },
    ASHEN: { color: '#8a7a5a', symbol: '⬔', name: 'ASHEN' },
    HELIX: { color: '#1a1a1a', symbol: '⬡', name: 'HELIX CORP' },
    VEIL: { color: '#6a4a8a', symbol: '◍', name: 'VEIL' },
  },
  typography: {
    display: "'Orbitron', monospace",
    mono: "'JetBrains Mono', monospace",
    body: "'Inter', sans-serif",
    arabic: "'Noto Sans Arabic', sans-serif",
  },
  lighting: {
    ambientDay: 0x404050,
    ambientNight: 0x101018,
    sunIntensity: 1.2,
    moonIntensity: 0.15,
    emergencyColor: 0xff2200,
    streetLightColor: 0xffaa44,
    neonCyan: 0x00e5ff,
  },
  architecture: {
    buildingHeightMin: 12,
    buildingHeightMax: 48,
    streetWidth: 14,
    sidewalkWidth: 3,
    windowSize: { w: 1.2, h: 1.8 },
  }
} as const;

export type FactionId = keyof typeof ArtBible.factions;
