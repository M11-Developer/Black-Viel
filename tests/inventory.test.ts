import { describe, it, expect } from 'vitest';
import { WEAPONS } from '../src/data/weapons';

describe('Weapons', () => {
  it('should have 6 weapons', () => {
    expect(WEAPONS.length).toBe(6);
  });
  it('each weapon has required fields', () => {
    for (const w of WEAPONS) {
      expect(w.id).toBeTruthy();
      expect(w.damage).toBeGreaterThan(0);
      expect(w.magazine).toBeGreaterThan(0);
      expect(w.range).toBeGreaterThan(0);
    }
  });
});

describe('Inventory Logic', () => {
  it('ammo calculation', () => {
    const weapon = WEAPONS[0];
    let ammoInMag = weapon.magazine;
    let reserve = weapon.reserve;
    // Fire 5 shots
    ammoInMag -= 5;
    expect(ammoInMag).toBe(weapon.magazine - 5);
    // Reload
    const needed = weapon.magazine - ammoInMag;
    const toLoad = Math.min(needed, reserve);
    ammoInMag += toLoad;
    reserve -= toLoad;
    expect(ammoInMag).toBe(weapon.magazine);
  });
});
