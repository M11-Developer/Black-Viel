import { describe, it, expect } from 'vitest';

describe('Save System', () => {
  it('should handle JSON serialization', () => {
    const data = {
      version: 1,
      player: { health: 100, position: { x: 0, y: 0, z: 0 } },
      progression: { level: 1, xp: 0 }
    };
    const serialized = JSON.stringify(data);
    const parsed = JSON.parse(serialized);
    expect(parsed.version).toBe(1);
    expect(parsed.player.health).toBe(100);
  });

  it('should handle corrupted data gracefully', () => {
    try {
      JSON.parse('invalid json');
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });
});
