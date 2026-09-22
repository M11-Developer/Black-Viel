export type LoadTask = { id: string; progress: number; total: number; label: string };

export class AssetLoader {
  private tasks: Map<string, LoadTask> = new Map();
  private listeners: Set<(progress: number, label: string) => void> = new Set();

  register(id: string, label: string, total = 1) {
    this.tasks.set(id, { id, progress: 0, total, label });
    this.emit();
  }

  update(id: string, progress: number) {
    const t = this.tasks.get(id);
    if (t) { t.progress = progress; this.emit(); }
  }

  complete(id: string) {
    const t = this.tasks.get(id);
    if (t) { t.progress = t.total; this.emit(); }
  }

  getProgress(): number {
    if (this.tasks.size === 0) return 0;
    let sum = 0, total = 0;
    for (const t of this.tasks.values()) { sum += t.progress; total += t.total; }
    return total ? sum / total : 0;
  }

  getCurrentLabel(): string {
    let latest = '';
    for (const t of this.tasks.values()) if (t.progress < t.total) latest = t.label;
    return latest || 'READY';
  }

  onProgress(cb: (p: number, label: string) => void) {
    this.listeners.add(cb);
    return () => this.listeners.delete(cb);
  }

  private emit() {
    const p = this.getProgress();
    const label = this.getCurrentLabel();
    this.listeners.forEach(l => l(p, label));
  }

  async loadTextureFromCanvas(width: number, height: number, draw: (ctx: CanvasRenderingContext2D) => void): Promise<HTMLCanvasElement> {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d')!;
    draw(ctx);
    return canvas;
  }
}
export const assetLoader = new AssetLoader();
