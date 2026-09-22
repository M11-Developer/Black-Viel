export interface WeaponAttachment {
  id: string;
  type: 'sight' | 'muzzle' | 'magazine' | 'grip' | 'stock' | 'laser';
  name: string;
  modifiers: Partial<{
    damage: number;
    recoil: number;
    spread: number;
    range: number;
    fireRate: number;
    reloadTime: number;
    accuracy: number;
    noise: number;
  }>;
}

export interface WeaponConfig {
  id: string;
  name: string;
  category: 'pistol' | 'smg' | 'rifle' | 'shotgun' | 'sniper' | 'melee';
  damage: number;
  fireRate: number; // rpm
  magazine: number;
  reserve: number;
  reloadTime: number;
  range: number;
  recoil: number;
  spread: number;
  projectile: 'hitscan' | 'projectile';
  fireModes: ('auto' | 'semi' | 'burst')[];
  attachments: string[];
  sound: string;
  description: string;
}

export const WEAPONS: WeaponConfig[] = [
  {
    id: 'm9_tactical',
    name: 'M9 Tactical',
    category: 'pistol',
    damage: 28,
    fireRate: 420,
    magazine: 15,
    reserve: 90,
    reloadTime: 1.4,
    range: 35,
    recoil: 0.35,
    spread: 0.02,
    projectile: 'hitscan',
    fireModes: ['semi'],
    attachments: ['suppressor_pistol', 'red_dot_micro'],
    sound: 'pistol',
    description: 'Standard sidearm. Reliable, quiet with suppressor.'
  },
  {
    id: 'vec_9',
    name: 'VEC-9',
    category: 'smg',
    damage: 19,
    fireRate: 850,
    magazine: 32,
    reserve: 160,
    reloadTime: 1.8,
    range: 40,
    recoil: 0.45,
    spread: 0.06,
    projectile: 'hitscan',
    fireModes: ['auto', 'burst'],
    attachments: ['suppressor_smg', 'holo_sight', 'grip_vertical'],
    sound: 'smg',
    description: 'High rate CQB weapon. Melts armor up close.'
  },
  {
    id: 'ar_41',
    name: 'AR-41 Vanguard',
    category: 'rifle',
    damage: 36,
    fireRate: 650,
    magazine: 30,
    reserve: 150,
    reloadTime: 2.1,
    range: 85,
    recoil: 0.6,
    spread: 0.03,
    projectile: 'hitscan',
    fireModes: ['auto', 'semi'],
    attachments: ['acog', 'suppressor_rifle', 'grip_angled', 'extended_mag'],
    sound: 'rifle',
    description: 'Workhorse rifle. Balanced for Veyra operations.'
  },
  {
    id: 'sg_breach',
    name: 'Breacher-12',
    category: 'shotgun',
    damage: 14,
    fireRate: 120,
    magazine: 8,
    reserve: 32,
    reloadTime: 3.2,
    range: 18,
    recoil: 1.2,
    spread: 0.18,
    projectile: 'hitscan',
    fireModes: ['semi'],
    attachments: [],
    sound: 'shotgun',
    description: 'Door kicker. Devastating in tight corridors.'
  },
  {
    id: 'sr_phantom',
    name: 'Phantom SR',
    category: 'sniper',
    damage: 110,
    fireRate: 45,
    magazine: 5,
    reserve: 20,
    reloadTime: 2.8,
    range: 220,
    recoil: 1.8,
    spread: 0.005,
    projectile: 'projectile',
    fireModes: ['semi'],
    attachments: ['scope_8x', 'suppressor_sniper'],
    sound: 'sniper',
    description: 'Long eye of Veyra. One shot changes everything.'
  },
  {
    id: 'knife_tactical',
    name: 'Tactical Blade',
    category: 'melee',
    damage: 75,
    fireRate: 90,
    magazine: 1,
    reserve: 0,
    reloadTime: 0,
    range: 2.2,
    recoil: 0,
    spread: 0,
    projectile: 'hitscan',
    fireModes: ['semi'],
    attachments: [],
    sound: 'melee',
    description: 'Silent. Final. The city teaches you to be quiet.'
  }
];

export const ATTACHMENTS: WeaponAttachment[] = [
  { id: 'suppressor_pistol', type: 'muzzle', name: 'Whisper-S', modifiers: { noise: -0.7, range: -0.05 } },
  { id: 'suppressor_smg', type: 'muzzle', name: 'Whisper-M', modifiers: { noise: -0.65, recoil: -0.1 } },
  { id: 'suppressor_rifle', type: 'muzzle', name: 'Whisper-R', modifiers: { noise: -0.6, recoil: -0.15 } },
  { id: 'suppressor_sniper', type: 'muzzle', name: 'Phantom Can', modifiers: { noise: -0.75 } },
  { id: 'red_dot_micro', type: 'sight', name: 'RDS Micro', modifiers: { accuracy: 0.15 } },
  { id: 'holo_sight', type: 'sight', name: 'Holo-X', modifiers: { accuracy: 0.2, spread: -0.02 } },
  { id: 'acog', type: 'sight', name: 'ACOG 4x', modifiers: { accuracy: 0.3, range: 0.1 } },
  { id: 'scope_8x', type: 'sight', name: 'Variable 8x', modifiers: { accuracy: 0.5, range: 0.25 } },
  { id: 'grip_vertical', type: 'grip', name: 'Vertical Grip', modifiers: { recoil: -0.2 } },
  { id: 'grip_angled', type: 'grip', name: 'Angled Grip', modifiers: { recoil: -0.15, spread: -0.01 } },
  { id: 'extended_mag', type: 'magazine', name: 'Extended Mag', modifiers: { } },
];
