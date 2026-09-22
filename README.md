# BLACK VEIL

**THE CITY FORGOT. YOU DIDN'T.**

A cinematic 3D third-person tactical stealth action game built for mobile web.

> Enter Veyra. Survive its people. Uncover its secrets.

---

## 🎮 Overview

BLACK VEIL is a AAA-inspired web game set in Veyra, a technologically advanced megacity that collapsed after an unexplained catastrophic event called **THE BLACKOUT**.

Three years before the game begins, the city suffered coordinated technological failure. Power disappeared. Communications collapsed. Millions vanished. Official explanation: cascading infrastructure failure. Evidence suggests something deliberate.

You return searching for your sister Mara, last seen near Sector 7. The deeper you go, the more you discover the disaster was only the beginning.

### Core Pillars
- **Tactical Shooter** + **Stealth** + **Survival** + **Exploration** + **Parkour**
- **Story-driven** missions with multi-approach design
- **Open-world-inspired** traversal with verticality
- **Environmental storytelling** and dynamic encounters

---

## 🚀 Quick Start

```bash
# Install
npm install

# Dev (http://localhost:5173)
npm run dev

# Build production
npm run build

# Preview production build
npm run preview
```

---

## 🏗 Architecture

```
/src
  /app
    /core          # Game loop, AssetLoader
    /engine        # Renderer, adaptive quality
    /player        # PlayerController (movement, parkour)
    /game          # CameraSystem
    /world         # World, District builder, modular kit
    /characters    # PlayerCharacter, EnemyCharacter (true 3D)
    /combat        # WeaponSystem (6 weapons + attachments)
    /ai            # AIController (FSM), AIDirector, Squad AI
    /missions      # MissionManager (data-driven)
    /audio         # AudioManager (procedural, positional, adaptive music)
    /ui            # UIManager (HUD, menus, map, inventory, settings, credits)
    /mobile        # TouchControls, Gyro, Control Editor
    /localization  # EN/AR RTL support
    /save          # SaveManager (versioned, localStorage)
    /settings      # SettingsManager (graphics, audio, controls)
  /data            # artBible, weapons, enemies, missions, localization
/public
  /icons           # PWA icons (192, 512) generated
```

### Tech Stack
- **TypeScript** + **Three.js** (WebGL2)
- **Vite** + **vite-plugin-pwa**
- Modular, data-driven, mobile-first

---

## 🎯 Features Implemented

### True 3D (Non-Negotiable)
- Player: procedural tactical mesh with silhouette, gear, backpack, holsters
- Enemies: 6 archetypes (security, scout, heavy, sniper, hunter, commander) with distinct visuals, behavior, stats
- Buildings: modular kit (walls, floors, windows, stairs, rooftops) + interiors
- Weapons: 3D meshes (pistol, SMG, rifle, shotgun, sniper, melee) with muzzle flash
- Props: barriers, vehicles, streetlights, containers, signs

### Gameplay
- **Player Controller**: walk, jog, sprint, crouch, jump, slide, vault, mantle, stamina, collision
- **Camera**: follow, shoulder switch, aim zoom, collision avoidance, shake, FOV
- **Combat**: hitscan/projectile abstraction, recoil, spread, fire modes, reload, ammo, hit reactions, headshots
- **Stealth**: UNAWARE → SUSPICIOUS → INVESTIGATING → ALERTED → COMBAT → SEARCHING → LOST TARGET (visibility, distance, sound, line-of-sight)
- **AI**: FSM, perception (vision cone, hearing), memory (last known pos, sound origin), squad (flank, suppress, regroup), director (pressure)
- **Parkour**: rooftops, planks, vertical traversal, multiple routes
- **Missions**: Chapter 1 (4 missions: Ghosts, Lights Out, Apartment, Helix Tower) + side, objectives, optional stealth, multi-approach
- **World**: 5 districts (Central Street, Residential Block, Corporate Helix Tower, Industrial Yard, Underground) + Hidden Cache, power states, environmental storytelling (evacuation notices, abandoned vehicles)

### Systems
- **Inventory**: functional, weapons, ammo, equip, data-driven
- **Progression**: XP, level, currency, save
- **Map**: canvas map, zoom, pan, touch, player/objective markers, locations
- **Interaction**: reusable framework (doors, terminals, loot, cache)
- **Loot**: tables, intentional placement
- **Audio**: AudioManager, categories, procedural SFX, adaptive music (exploration/stealth/tension/combat)
- **VFX**: muzzle flash, impact, simple pooling
- **Materials**: concrete, asphalt, metal, glass, tactical, emissive

### Mobile / UX
- **Touch**: left joystick (move), right look area, action buttons (fire, aim, reload, jump, crouch, interact, swap, melee)
- **Gyro**: optional gyro aiming with sensitivity, iOS permission handling
- **Control Editor**: drag to reposition, resize, reset, save layout
- **Fullscreen**: real fullscreen API
- **Safe Area**: viewport-fit=cover, notch handling
- **Orientation**: landscape guidance

### PWA / Production
- **Manifest**: standalone, icons, theme, orientation landscape
- **Service Worker**: Workbox, precache, runtime caching, autoUpdate
- **Icons**: generated 192, 512, 32, 16 via pngjs procedural art bible
- **Loading**: real progress (assetLoader), tips, logo, bar
- **Save**: versioned, localStorage, profile, settings persistence
- **Settings**: graphics (quality low/med/high/ultra/auto, resolution, FPS 30/40/60/90/auto), audio (master/music/sfx/voice/ambience/ui), controls (sensitivity, gyro, touch opacity, layout), language (EN/AR RTL), subtitles
- **Performance**: adaptive quality (auto adjusts based on FPS), FPS monitoring (fps, frameTime, drawCalls, triangles), LOD concept, instancing (streetlights), culling, AI update budget (near high freq, distant low)
- **Error Recovery**: missing asset fallback, audio failure graceful, storage failure warning

### Localization
- **EN/AR** with RTL layout, mirrored components, Arabic font (Noto Sans Arabic)
- Translation system, no hardcoded UI text

### Story
- **Lore**: pre-Blackout Veyra, Blackout event, factions (VANGUARD, ASHEN, HELIX, VEIL), current conflict
- **Chapter 1**: establishes city, protagonist, mystery, factions, first threat, hook
- **Factions**: symbols, colors, behavior, territories
- **Environmental Storytelling**: evacuation notices, abandoned supplies, broken security, faction propaganda

---

## 🎨 Art Bible

- **Palette**: dark (#050508, #0a0a0f), accent cyan (#6aa6ff), violet (#a78bfa), danger (#ff4d6a)
- **Materials**: realistic roughness/metalness, no flat colors
- **Architecture**: believable proportions, windows, damage, emergency lighting
- **Character**: tactical layers, worn materials, functional gear, recognizable silhouette
- **Lighting**: ambient night, moon directional, streetlights (warm), emergency (red), corporate (cyan), fog Exp2
- **Typography**: Orbitron (display), JetBrains Mono (mono), Inter (body), Noto Sans Arabic

---

## 🕹 Controls

**Desktop**
- WASD: Move
- Mouse: Look
- Shift: Sprint
- Ctrl/C: Crouch
- Space: Jump
- LMB: Fire
- RMB: Aim
- R: Reload
- F/E: Interact
- V: Melee
- 1/2 or Scroll: Switch Weapon
- M: Map, Tab: Inventory, Esc: Menu

**Mobile**
- Left Joystick: Move
- Right Side Drag: Look
- Fire (red large), Aim, Reload, Jump, Crouch, Interact, Swap, Melee
- Gyro optional

---

## 📦 Build & Deploy

- No localhost hardcoded in production
- Asset paths relative, base `/`
- PWA scope `/`
- Production build tested (`npm run build && npm run preview`)
- No secrets in frontend

```bash
npm run build
# dist/ contains production
```

---

## 🧪 Testing

Manual QA checklist in `KNOWN_ISSUES.md` and final audit.

Automated tests for inventory, damage, mission state, localization, save/load (see `/tests`).

---

## 📄 Documentation

- `ARCHITECTURE.md` — system design
- `GAME_DESIGN.md` — mechanics, loops, factions
- `ASSET_PIPELINE.md` — art-to-3D pipeline
- `PERFORMANCE.md` — budgets, adaptive quality
- `DEPLOYMENT.md` — build, PWA, safety
- `KNOWN_ISSUES.md` — limitations

---

## 🏆 Credits

**M11 Dev — Primary Creator**

- YouTube (Primary): https://youtube.com/@m11-dev?si=GH9TIb3iQJh0UDev
- GitHub: https://github.com/M11-Developer
- TikTok: https://vt.tiktok.com/ZS9A2FU1fAJWo-k9M67/
- Contact: ma7292537@gmail.com

Built as autonomous AAA web game production — no fake features, real 3D, real gameplay.

---

**BLACK VEIL — THE CITY FORGOT. YOU DIDN'T.**
