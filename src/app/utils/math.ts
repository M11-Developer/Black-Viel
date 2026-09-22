import * as THREE from 'three';

export function clamp(v: number, min: number, max: number) { return Math.max(min, Math.min(max, v)); }
export function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
export function smoothDamp(current: number, target: number, velocity: { value: number }, smoothTime: number, dt: number) {
  const omega = 2 / smoothTime;
  const x = omega * dt;
  const exp = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
  let change = current - target;
  const temp = (velocity.value + omega * change) * dt;
  velocity.value = (velocity.value - omega * temp) * exp;
  let result = target + (change + temp) * exp;
  if ((target - current > 0) === (result > target)) {
    result = target;
    velocity.value = (result - target) / dt;
  }
  return result;
}

export function randomRange(min: number, max: number) { return min + Math.random() * (max - min); }
export function degToRad(d: number) { return d * Math.PI / 180; }
export function radToDeg(r: number) { return r * 180 / Math.PI; }

export class SpatialHash {
  cellSize: number;
  map: Map<string, THREE.Box3[]>;
  constructor(cellSize = 10) { this.cellSize = cellSize; this.map = new Map(); }
  key(x: number, z: number) { return `${Math.floor(x / this.cellSize)},${Math.floor(z / this.cellSize)}`; }
  insert(box: THREE.Box3) {
    const minK = this.key(box.min.x, box.min.z);
    const maxK = this.key(box.max.x, box.max.z);
    const [minX, minZ] = minK.split(',').map(Number);
    const [maxX, maxZ] = maxK.split(',').map(Number);
    for (let ix = minX; ix <= maxX; ix++) for (let iz = minZ; iz <= maxZ; iz++) {
      const k = `${ix},${iz}`;
      if (!this.map.has(k)) this.map.set(k, []);
      this.map.get(k)!.push(box);
    }
  }
  query(pos: THREE.Vector3, radius: number): THREE.Box3[] {
    const res: THREE.Box3[] = [];
    const minK = this.key(pos.x - radius, pos.z - radius);
    const maxK = this.key(pos.x + radius, pos.z + radius);
    const [minX, minZ] = minK.split(',').map(Number);
    const [maxX, maxZ] = maxK.split(',').map(Number);
    const seen = new Set<THREE.Box3>();
    for (let ix = minX; ix <= maxX; ix++) for (let iz = minZ; iz <= maxZ; iz++) {
      const arr = this.map.get(`${ix},${iz}`);
      if (!arr) continue;
      for (const b of arr) if (!seen.has(b)) { seen.add(b); res.push(b); }
    }
    return res;
  }
  clear() { this.map.clear(); }
}
