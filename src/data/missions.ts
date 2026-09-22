export interface MissionObjective {
  id: string;
  title: string;
  description: string;
  type: 'reach' | 'interact' | 'collect' | 'eliminate' | 'stealth' | 'restore' | 'investigate' | 'extract';
  targetPos?: { x: number; y: number; z: number };
  required?: number;
  current?: number;
  optional?: boolean;
  completed?: boolean;
}

export interface Mission {
  id: string;
  title: string;
  chapter: number;
  description: string;
  longDescription: string;
  objectives: MissionObjective[];
  rewards: { xp: number; currency: number; items?: string[] };
  location: string;
  difficulty: 'story' | 'normal' | 'hard';
  nextMission?: string;
}

export const MISSIONS: Mission[] = [
  {
    id: 'ch1_m1_entry',
    title: 'Ghosts of Veyra',
    chapter: 1,
    description: 'Enter the dead city. Find the northern checkpoint.',
    longDescription: 'Three years after the Blackout, you return to Veyra. Your sister Mara was last seen near Sector 7. The city is sealed, but you know a way in through the old service tunnel. Find the northern checkpoint and make contact with the Ashen network.',
    objectives: [
      { id: 'reach_checkpoint', title: 'Reach Northern Checkpoint', description: 'Navigate through Central Street to the checkpoint', type: 'reach', targetPos: { x: 0, y: 0, z: -80 }, required: 1, current: 0 },
      { id: 'avoid_patrols', title: 'Avoid Detection', description: 'Reach checkpoint without alerting Helix', type: 'stealth', optional: true },
      { id: 'collect_intel', title: 'Gather Intel', description: 'Find 3 pieces of evidence about Mara', type: 'collect', required: 3, current: 0 }
    ],
    rewards: { xp: 500, currency: 250, items: ['m9_tactical'] },
    location: 'Central Street',
    difficulty: 'normal',
    nextMission: 'ch1_m2_power'
  },
  {
    id: 'ch1_m2_power',
    title: 'Lights Out',
    chapter: 1,
    description: 'Restore partial power to the residential block.',
    longDescription: 'The Ashen contact, Kael, tells you Mara was investigating the power grid failure. The residential block is in blackout - Helix locked it down. Restore power from the industrial yard substation to access her apartment.',
    objectives: [
      { id: 'reach_substation', title: 'Reach Substation', description: 'Navigate to industrial yard', type: 'reach', targetPos: { x: 45, y: 0, z: -20 } },
      { id: 'restore_power', title: 'Restore Power Grid', description: 'Activate 2 transformers and main breaker', type: 'restore', required: 3, current: 0 },
      { id: 'defend_position', title: 'Hold Position', description: 'Defend substation during reboot sequence', type: 'eliminate', required: 6, current: 0 }
    ],
    rewards: { xp: 750, currency: 400, items: ['vec_9', 'flashlight'] },
    location: 'Industrial Yard',
    difficulty: 'normal',
    nextMission: 'ch1_m3_apartment'
  },
  {
    id: 'ch1_m3_apartment',
    title: 'The Apartment',
    chapter: 1,
    description: 'Investigate Mara\'s apartment in the residential block.',
    longDescription: 'Power restored. Mara\'s apartment is on the 4th floor, 7B. Kael warns: Helix swept the building yesterday. Something spooked them. Find what Mara left behind. The answer to the Blackout might be in her logs.',
    objectives: [
      { id: 'infiltrate_building', title: 'Infiltrate Residential Block', description: 'Enter through rooftop or main entrance', type: 'reach', targetPos: { x: -35, y: 0, z: 20 } },
      { id: 'find_apartment', title: 'Locate Apartment 7B', description: 'Search 4th floor', type: 'investigate' },
      { id: 'recover_logs', title: 'Recover Data Drive', description: 'Find Mara\'s encrypted drive', type: 'collect', required: 1 },
      { id: 'escape', title: 'Escape', description: 'Exfil via underground or rooftops', type: 'extract' }
    ],
    rewards: { xp: 1000, currency: 600, items: ['ar_41'] },
    location: 'Residential Block',
    difficulty: 'hard',
    nextMission: 'ch1_m4_helix'
  },
  {
    id: 'ch1_m4_helix',
    title: 'Helix Tower',
    chapter: 1,
    description: 'Infiltrate Helix corporate building. Uncover the truth.',
    longDescription: 'Mara\'s drive points to Helix Tower. Level 23, Server Room Delta. Project codename: BLACK VEIL. The Blackout wasn\'t failure. It was a test. Someone is still operating inside Veyra. You need to see it yourself.',
    objectives: [
      { id: 'enter_tower', title: 'Infiltrate Helix Tower', description: 'Bypass security, avoid cameras', type: 'stealth' },
      { id: 'disable_security', title: 'Disable Security Grid', description: 'Hack 2 terminals to disable cameras', type: 'interact', required: 2 },
      { id: 'reach_server', title: 'Reach Server Room Delta', description: 'Level 23', type: 'reach', targetPos: { x: 0, y: 23, z: 60 } },
      { id: 'download_data', title: 'Download Project Files', description: 'Hold position while download completes', type: 'restore', required: 1 }
    ],
    rewards: { xp: 1500, currency: 1000, items: ['sr_phantom'] },
    location: 'Corporate District',
    difficulty: 'hard'
  }
];

export const SIDE_MISSIONS: Mission[] = [
  {
    id: 'side_supply',
    title: 'Supply Run',
    chapter: 0,
    description: 'Ashen needs medical supplies from the abandoned clinic.',
    longDescription: 'The Ashen network is low on meds. The old clinic on Central has supplies but Vanguard patrols it now.',
    objectives: [
      { id: 'collect_meds', title: 'Collect Medical Supplies', description: 'Find 5 med kits', type: 'collect', required: 5, current: 0 },
      { id: 'return', title: 'Return to Ashen Contact', description: 'Bring supplies back', type: 'reach' }
    ],
    rewards: { xp: 300, currency: 200 },
    location: 'Central Street',
    difficulty: 'normal'
  }
];
