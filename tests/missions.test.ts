import { describe, it, expect } from 'vitest';
import { MISSIONS } from '../src/data/missions';

describe('Missions', () => {
  it('should have 4 main missions', () => {
    expect(MISSIONS.length).toBe(4);
  });
  it('missions have objectives', () => {
    for (const m of MISSIONS) {
      expect(m.objectives.length).toBeGreaterThan(0);
      expect(m.title).toBeTruthy();
      expect(m.rewards.xp).toBeGreaterThan(0);
    }
  });
  it('mission chain is valid', () => {
    const ids = new Set(MISSIONS.map(m => m.id));
    for (const m of MISSIONS) {
      if (m.nextMission) {
        expect(ids.has(m.nextMission)).toBe(true);
      }
    }
  });
});
