import type { FactionId } from './artBible';

export type EnemyArchetype = 'security' | 'scout' | 'heavy' | 'sniper' | 'hunter' | 'commander';

export interface EnemyConfig {
  id: EnemyArchetype;
  name: string;
  faction: FactionId;
  health: number;
  armor: number;
  damage: number;
  speed: number;
  detectionRange: number;
  hearingRange: number;
  fov: number; // degrees
  behavior: string;
  weapons: string[];
  loot: string[];
  description: string;
  color: number;
  scale: number;
}

export const ENEMIES: EnemyConfig[] = [
  {
    id: 'security',
    name: 'Helix Security',
    faction: 'HELIX',
    health: 100,
    armor: 20,
    damage: 22,
    speed: 3.2,
    detectionRange: 28,
    hearingRange: 14,
    fov: 110,
    behavior: 'patrol_guard',
    weapons: ['vec_9', 'm9_tactical'],
    loot: ['ammo_9mm', 'med_small'],
    description: 'Standard armed unit. Holds position, calls backup.',
    color: 0x2a2a2e,
    scale: 1.0
  },
  {
    id: 'scout',
    name: 'Ashen Scout',
    faction: 'ASHEN',
    health: 75,
    armor: 0,
    damage: 18,
    speed: 5.0,
    detectionRange: 32,
    hearingRange: 18,
    fov: 130,
    behavior: 'flank_recon',
    weapons: ['vec_9'],
    loot: ['scrap', 'intel'],
    description: 'Fast reconnaissance. Will flank and report.',
    color: 0x5a4a32,
    scale: 0.95
  },
  {
    id: 'heavy',
    name: 'Vanguard Heavy',
    faction: 'VANGUARD',
    health: 220,
    armor: 80,
    damage: 38,
    speed: 2.1,
    detectionRange: 22,
    hearingRange: 10,
    fov: 90,
    behavior: 'suppression_advance',
    weapons: ['ar_41', 'sg_breach'],
    loot: ['armor_plate', 'ammo_rifle'],
    description: 'Armored unit. Soaks damage, pins you down.',
    color: 0x3a4a5a,
    scale: 1.15
  },
  {
    id: 'sniper',
    name: 'Veil Marksman',
    faction: 'VEIL',
    health: 85,
    armor: 10,
    damage: 95,
    speed: 2.8,
    detectionRange: 65,
    hearingRange: 8,
    fov: 45,
    behavior: 'long_range_hold',
    weapons: ['sr_phantom'],
    loot: ['ammo_sniper', 'intel_encrypted'],
    description: 'Long-range threat. Relocates after shot.',
    color: 0x3a2a4a,
    scale: 1.0
  },
  {
    id: 'hunter',
    name: 'Hunter',
    faction: 'ASHEN',
    health: 120,
    armor: 15,
    damage: 42,
    speed: 4.6,
    detectionRange: 20,
    hearingRange: 22,
    fov: 140,
    behavior: 'aggressive_close',
    weapons: ['sg_breach', 'knife_tactical'],
    loot: ['scrap_rare'],
    description: 'Aggressive close-range unit. Hunts in packs.',
    color: 0x4a3a2a,
    scale: 1.05
  },
  {
    id: 'commander',
    name: 'Helix Commander',
    faction: 'HELIX',
    health: 150,
    armor: 50,
    damage: 30,
    speed: 3.0,
    detectionRange: 35,
    hearingRange: 16,
    fov: 120,
    behavior: 'tactical_leader',
    weapons: ['ar_41', 'm9_tactical'],
    loot: ['keycard', 'intel_command'],
    description: 'Tactical leader. Buffs nearby units, calls reinforcements.',
    color: 0x1a1a22,
    scale: 1.08
  }
];
