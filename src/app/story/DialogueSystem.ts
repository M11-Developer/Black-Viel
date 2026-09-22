export interface DialogueLine {
  id: string;
  speaker: string;
  text: string;
  textAr?: string;
  emotion?: 'neutral' | 'angry' | 'whisper' | 'urgent' | 'sad';
  duration?: number;
  audioId?: string;
  choices?: DialogueChoice[];
  next?: string;
  flags?: Record<string, any>;
  condition?: string;
}

export interface DialogueChoice {
  id: string;
  text: string;
  textAr?: string;
  next: string;
  reputation?: Record<string, number>;
  flags?: Record<string, any>;
}

export interface Dialogue {
  id: string;
  title: string;
  lines: Record<string, DialogueLine>;
  start: string;
}

export const DIALOGUES: Record<string, Dialogue> = {
  intro_kael: {
    id: 'intro_kael',
    title: 'Contact',
    start: 'line1',
    lines: {
      line1: {
        id: 'line1',
        speaker: 'Kael',
        text: 'You actually came back. I thought Veyra had taken everyone with any sense.',
        textAr: 'لقد عدت فعلاً. ظننت أن فيرا أخذت كل من لديه عقل.',
        emotion: 'neutral',
        next: 'line2'
      },
      line2: {
        id: 'line2',
        speaker: 'Player',
        text: 'Mara is here. I know it. Where was she last seen?',
        textAr: 'مارا هنا. أعلم ذلك. أين شوهدت آخر مرة؟',
        emotion: 'urgent',
        next: 'line3'
      },
      line3: {
        id: 'line3',
        speaker: 'Kael',
        text: 'Sector 7, near the old checkpoint. She was investigating the power grid. Said the Blackout wasn\'t random — it was a pattern.',
        textAr: 'القطاع 7، بالقرب من نقطة التفتيش القديمة. كانت تحقق في شبكة الطاقة. قالت إن الانقطاع لم يكن عشوائياً — كان نمطاً.',
        emotion: 'whisper',
        next: 'choice1'
      },
      choice1: {
        id: 'choice1',
        speaker: 'Kael',
        text: 'Helix locked down the residential block after she disappeared. If you want to find her apartment, you\'ll need to restore power from the industrial yard. You in?',
        textAr: 'أغلقت هيليكس المبنى السكني بعد اختفائها. إذا كنت تريد العثور على شقتها، ستحتاج إلى استعادة الطاقة من الساحة الصناعية. هل أنت معنا؟',
        emotion: 'neutral',
        choices: [
          {
            id: 'yes',
            text: 'I\'m in. Tell me where.',
            textAr: 'أنا معكم. أخبرني أين.',
            next: 'line_yes',
            flags: { accepted_mission: true }
          },
          {
            id: 'more',
            text: 'What did Mara find?',
            textAr: 'ماذا وجدت مارا؟',
            next: 'line_more'
          }
        ]
      },
      line_yes: {
        id: 'line_yes',
        speaker: 'Kael',
        text: 'Substation in the industrial yard. Two transformers and a main breaker. Helix patrols it now. Stay quiet, stay alive.',
        textAr: 'محطة فرعية في الساحة الصناعية. محولان وقاطع رئيسي. تقوم هيليكس بدوريات هناك الآن. ابق هادئاً، ابق على قيد الحياة.',
        emotion: 'urgent',
        next: 'end'
      },
      line_more: {
        id: 'line_more',
        speaker: 'Kael',
        text: 'She found logs. Helix was running something called BLACK VEIL during the Blackout. Not a failure — a test. 17 minutes. Too clean. Someone wanted Veyra dark.',
        textAr: 'وجدت سجلات. كانت هيليكس تدير شيئاً يسمى الحجاب الأسود أثناء الانقطاع. ليس فشلاً — اختباراً. 17 دقيقة. نظيف جداً. شخص ما أراد فيرا مظلمة.',
        emotion: 'whisper',
        next: 'line_yes'
      },
      end: {
        id: 'end',
        speaker: 'Kael',
        text: 'Good luck. The city forgot. You didn\'t.',
        textAr: 'حظاً موفقاً. المدينة نسيت. أنت لم تنس.',
        emotion: 'neutral'
      }
    }
  },
  helix_logs: {
    id: 'helix_logs',
    title: 'Helix Logs',
    start: 'log1',
    lines: {
      log1: {
        id: 'log1',
        speaker: 'Helix Log',
        text: '[17:03:22] BLACK VEIL initiated. Grid sectors 1-7 disengaged.',
        textAr: '[17:03:22] تم بدء الحجاب الأسود. تم فصل قطاعات الشبكة 1-7.',
        emotion: 'neutral',
        next: 'log2'
      },
      log2: {
        id: 'log2',
        speaker: 'Helix Log',
        text: '[17:08:45] Comms blackout confirmed. Civilian evacuation protocol failed — intentional.',
        textAr: '[17:08:45] تم تأكيد انقطاع الاتصالات. فشل بروتوكول إخلاء المدنيين — متعمد.',
        emotion: 'neutral',
        next: 'log3'
      },
      log3: {
        id: 'log3',
        speaker: 'Helix Log',
        text: '[17:20:11] Veyra population: 2.1M → 0.3M estimated. Asset acquisition complete.',
        textAr: '[17:20:11] سكان فيرا: 2.1 مليون → 0.3 مليون تقديري. اكتمل الاستحواذ على الأصول.',
        emotion: 'neutral',
        next: 'log4'
      },
      log4: {
        id: 'log4',
        speaker: 'Mara',
        text: 'If you find this — they didn\'t have a failure. They had a plan. BLACK VEIL is still active. Level 23, Helix Tower. Server Room Delta.',
        textAr: 'إذا وجدت هذا — لم يكن لديهم فشل. كان لديهم خطة. الحجاب الأسود لا يزال نشطاً. المستوى 23، برج هيليكس. غرفة الخادم دلتا.',
        emotion: 'urgent'
      }
    }
  }
};

export class DialogueSystem {
  private currentDialogue: Dialogue | null = null;
  private currentLineId: string | null = null;
  private isActive = false;
  private history: DialogueLine[] = [];
  private flags: Record<string, any> = {};
  private listeners: Set<(line: DialogueLine | null, choices: DialogueChoice[] | null) => void> = new Set();

  constructor() {
    this.loadFlags();
  }

  private loadFlags() {
    try {
      const raw = localStorage.getItem('bv_dialogue_flags');
      if (raw) this.flags = JSON.parse(raw);
    } catch {}
  }

  private saveFlags() {
    try {
      localStorage.setItem('bv_dialogue_flags', JSON.stringify(this.flags));
    } catch {}
  }

  startDialogue(id: string): boolean {
    const dialogue = DIALOGUES[id];
    if (!dialogue) {
      console.warn(`[Dialogue] Not found: ${id}`);
      return false;
    }

    this.currentDialogue = dialogue;
    this.currentLineId = dialogue.start;
    this.isActive = true;
    this.showCurrentLine();
    console.log(`[Dialogue] Started: ${id}`);
    return true;
  }

  private showCurrentLine() {
    if (!this.currentDialogue || !this.currentLineId) {
      this.endDialogue();
      return;
    }

    const line = this.currentDialogue.lines[this.currentLineId];
    if (!line) {
      this.endDialogue();
      return;
    }

    // Check condition
    if (line.condition && !this.flags[line.condition]) {
      if (line.next) {
        this.currentLineId = line.next;
        this.showCurrentLine();
      } else {
        this.endDialogue();
      }
      return;
    }

    this.history.push(line);

    // Apply flags
    if (line.flags) {
      Object.assign(this.flags, line.flags);
      this.saveFlags();
    }

    const choices = line.choices || null;
    this.listeners.forEach(l => l(line, choices));

    // Auto-advance if no choices and has next
    if (!choices && line.next) {
      const duration = line.duration || (line.text.length * 50 + 1000);
      setTimeout(() => {
        if (this.isActive && this.currentLineId === line.id) {
          this.currentLineId = line.next!;
          this.showCurrentLine();
        }
      }, Math.min(duration, 5000));
    } else if (!choices && !line.next) {
      setTimeout(() => this.endDialogue(), line.duration || 3000);
    }
  }

  choose(choiceId: string) {
    if (!this.currentDialogue || !this.currentLineId) return;

    const line = this.currentDialogue.lines[this.currentLineId];
    if (!line.choices) return;

    const choice = line.choices.find(c => c.id === choiceId);
    if (!choice) return;

    // Apply choice flags and reputation
    if (choice.flags) {
      Object.assign(this.flags, choice.flags);
      this.saveFlags();
    }

    if (choice.reputation) {
      // Would update faction reputation
      console.log('[Dialogue] Reputation change:', choice.reputation);
    }

    this.currentLineId = choice.next;
    this.showCurrentLine();
  }

  next() {
    if (!this.currentDialogue || !this.currentLineId) return;

    const line = this.currentDialogue.lines[this.currentLineId];
    if (line.choices) return; // Need to choose

    if (line.next) {
      this.currentLineId = line.next;
      this.showCurrentLine();
    } else {
      this.endDialogue();
    }
  }

  endDialogue() {
    this.isActive = false;
    this.currentDialogue = null;
    this.currentLineId = null;
    this.listeners.forEach(l => l(null, null));
    console.log('[Dialogue] Ended');
  }

  isInDialogue() { return this.isActive; }
  getCurrentLine(): DialogueLine | null {
    if (!this.currentDialogue || !this.currentLineId) return null;
    return this.currentDialogue.lines[this.currentLineId] || null;
  }

  onLine(cb: (line: DialogueLine | null, choices: DialogueChoice[] | null) => void) {
    this.listeners.add(cb);
    return () => this.listeners.delete(cb);
  }

  getFlag(key: string) { return this.flags[key]; }
  setFlag(key: string, value: any) {
    this.flags[key] = value;
    this.saveFlags();
  }

  getHistory() { return [...this.history]; }
}
export const dialogueSystem = new DialogueSystem();
