import { TRANSLATIONS, type Lang } from '../../data/localization';

export class LocalizationManager {
  private current: Lang = 'en';
  private listeners: Set<(lang: Lang) => void> = new Set();

  constructor() {
    const saved = localStorage.getItem('bv_lang') as Lang | null;
    if (saved && (saved === 'en' || saved === 'ar')) this.current = saved;
    else {
      const nav = navigator.language.toLowerCase();
      if (nav.startsWith('ar')) this.current = 'ar';
    }
    this.applyDir();
  }

  get lang() { return this.current; }
  get isRTL() { return this.current === 'ar'; }

  t(key: string): string {
    return TRANSLATIONS[this.current][key] ?? TRANSLATIONS['en'][key] ?? key;
  }

  setLanguage(lang: Lang) {
    this.current = lang;
    localStorage.setItem('bv_lang', lang);
    this.applyDir();
    this.listeners.forEach(l => l(lang));
  }

  onChange(cb: (lang: Lang) => void) {
    this.listeners.add(cb);
    return () => this.listeners.delete(cb);
  }

  private applyDir() {
    document.documentElement.lang = this.current;
    document.documentElement.dir = this.isRTL ? 'rtl' : 'ltr';
    document.body.style.fontFamily = this.isRTL ? "'Noto Sans Arabic','Inter',sans-serif" : "'Inter',sans-serif";
  }
}

export const localization = new LocalizationManager();
