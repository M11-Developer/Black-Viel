# BLACK VEIL — ARCHITECTURE

## Core Loop
```
EXPLORE → DISCOVER → INVESTIGATE → INFILTRATE → FIGHT → LOOT → PROGRESS → UPGRADE → UNCOVER STORY → RETURN
```

## Engine

### Renderer (`/engine/Renderer.ts`)
- Three.js WebGL2, ACESFilmic, PCFSoftShadow, FogExp2
- Adaptive quality: auto adjusts based on FPS (28fps threshold down, 58fps up)
- Quality levels: low (no shadows, 0.7 res), medium, high, ultra (soft shadows, full res)
- Stats: fps, frameTime, drawCalls, triangles, geometries, textures
- Resize handling, pixelRatio capped at 2

### Game (`/core/Game.ts`)
- Central orchestrator, clock, main loop (requestAnimationFrame)
- InitLoading: real progress via AssetLoader, builds world, spawns enemies, sets up interactables
- Systems: Renderer, Input, PlayerController, CameraSystem, World, PlayerCharacter, WeaponSystem, AIDirector, UI, TouchControls
- Handles shooting raycast, interaction, mission checks, stealth state, HUD updates, save

### Input (`/input/InputManager.ts`)
- Abstraction layer: move Vector2, look Vector2, booleans for actions
- Keyboard, mouse, touch (via TouchControls), gamepad polling
- consumeLook() resets after frame

### PlayerController (`/player/PlayerController.ts`)
- Position, velocity, yaw/pitch, stance (stand/crouch), moveState (idle/walk/jog/sprint/crouch_walk/jump/fall)
- Params: walk 2.2, jog 4.2, sprint 6.5, crouch 1.6, jump 5.5, gravity -14, coyote 0.15s
- Collision: Box3 checks against world.colliders, SpatialHash for query
- Ground check: small box at feet, also y <=0.05
- Stamina: sprint drains 22/s, regen 18/s
- Footsteps: procedural audio, timer based on speed

### CameraSystem (`/game/CameraSystem.ts`)
- Target lerp (12 * dt), desiredPosition from yaw/pitch + shoulder offset + distance (1.1 aim, 4.2 normal, 3.2 crouch)
- Collision avoidance: ray from target to desired, intersect with colliders, closestHit
- FOV lerp: 65 normal, 42 aim
- Shake: intensity + decay

### World (`/world/World.ts`)
- Group, colliders, SpatialHash (cell 12)
- Materials: concrete, asphalt, metal, paintedMetal, glass, tactical, emergency, neon
- buildDistrict(): clears, ground plane 400x400, then districts
- Districts: central (6 buildings), residential (5 floors apartment with interiors), corporate (Helix Tower 48m + glass facade), industrial (warehouses + 12 containers + substation), underground (tunnel cylinder), rooftops (parapets + planks), hidden (cache)
- Lighting: ambient, directional moon (shadows 1024), point lights street (6), emergency, corporate
- Storytelling: evacuation sign canvas texture, abandoned car
- getDistrictAt, setPowerState

### Characters
- PlayerCharacter: procedural mesh (torso, vest, head, cap, arms, legs, backpack, holster, gloves, boots), weapon socket Group, simple animation (arm swing, breathing)
- EnemyCharacter: scaled by archetype, body box, head sphere, archetype-specific gear (heavy armor, sniper ghillie), weapon placeholder, faction indicator plane, takeDamage with headshot multiplier 2.2, hit flash emissive

### Combat
- WeaponSystem: config from data/weapons.ts, instance with ammoInMag, reserve, mesh, attachments
- createWeaponMesh: box + cylinder barrel + sight box + cone muzzle flash (opacity)
- addWeapon, getCurrent, switchWeapon, canFire (fireRate, ammo, reloading), fire (recoil, spread, flash, audio), startReload (timer), update (reload timer, recoil decay)
- Recoil: +config.recoil*0.25 per shot, decay 2.5/s; spread +config.spread*0.6, decay 1.8/s

### AI
- AIController: state FSM, memory (lastKnownPlayerPos, lastSeenTime, lastHeardPos, suspiciousLocations), patrolPoints (4 random around start), detection 0..1, stateTimer, velocity, targetPos, fireCooldown
- Perception: canSeePlayer (dist < detectionRange, FOV check, raycast against colliders), canHearPlayer (range * modifiers: shooting 3x, sprint 1.5x, crouch 0.4x)
- Detection: canSee adds dt*1.8*visibility*fov*(0.3+distanceFactor); else subtract dt*0.6, plus hearing dt*0.8
- States: patrol (move to patrolPoints), suspicious (look around), investigating (move to lastHeard), alerted (move to lastKnown or strafe), combat (flank if allies, sniper keep distance, hunter aggressive, standard maintain 8-15m), searching (expanding circles around last known), lost (idle), idle
- Squad: allies passed, flank logic random 1% chance
- AIDirector: enemies list, spawnPressure (adjust based on activeCombat), cleanup dead

### Missions
- MissionManager: Map of missions, activeMission, objectiveProgress, completedObjectives, listeners
- Data-driven from data/missions.ts: 4 main + side, objectives with targetPos, required, optional
- updateObjective, completeObjective, checkMissionComplete (auto advance), getProgress, getObjectiveByPos (radius check)

### Audio
- AudioManager: AudioContext lazy init on interaction, masterGain + 5 category gains, volumes from settingsManager
- Procedural sounds: oscillator + noise buffer for gunshots, different freq/dur/vol per type
- Music states: exploration (36Hz), stealth (40Hz), tension (48Hz), combat (55Hz) via 2 sawtooth oscillators + lowpass
- setListenerPosition for positional (WebAudio listener)

### UI
- UIManager: root #ui-root, layers, createStyles (inline CSS), showMenu (main menu with intel panel, PWA install handling), showHUD (top objective, bottom health/armor/ammo, stealth, crosshair, interact, fps, buttons for map/inv/menu), updateHUD, showMissions (grid, click to set active), showInventory (weapons list + grid, equip), showMap (canvas map with grid, locations, player dot, zoom/pan touch+mouse), showSettings (graphics, audio, controls, language, fullscreen), showCredits (M11 Dev links, YouTube primary), showNotification (toast)
- Localization via localization.t()

### Mobile
- TouchControls: container #touch-controls, display none on fine pointer, block on coarse; move joystick (base + stick, clamped 48px), look area (right 50% width), action buttons (fire large red, aim, reload, jump, crouch, interact, swap, melee)
- Bind touch/mouse, setMoveVector, setLookVector, setState booleans
- Gyro: DeviceOrientationEvent, gamma for yaw, beta for pitch, sensitivity, iOS permission button
- Edit mode: drag to reposition, save layout to settingsManager controlLayout

### Localization
- LocalizationManager: current lang from localStorage or navigator, isRTL, t(key) fallback to en, setLanguage, onChange, applyDir (html lang/dir, body font)

### Save
- SaveManager: SAVE_KEY, SETTINGS_KEY, version 1, save (merge existing + new), load (parse, version check), saveSettings, loadSettings, hasSave, deleteSave, exportSave
- SaveData: version, timestamp, player (health, pos, rot, weapons, ammo), progression (level, xp, skillPoints, skills, currency), missions (active, completed, objectives, flags), world (discovered, lore, factionRep, powerStates), settings, inventory

### Settings
- SettingsManager: GameSettings interface, DEFAULTS, settings object loaded from SaveManager, get, set, update, onChange listeners, persist via saveSettings, reset

### AssetLoader
- AssetLoader: tasks Map, listeners, register, update, complete, getProgress (sum progress/total), getCurrentLabel, onProgress

### Math Utils
- clamp, lerp, smoothDamp, randomRange, degToRad, radToDeg, SpatialHash (cellSize, Map<string, Box3[]>, key, insert, query, clear)

## Data
- artBible: palette, materials, factions, typography, lighting, architecture
- weapons: WeaponConfig, WeaponAttachment, WEAPONS (6), ATTACHMENTS
- enemies: EnemyConfig, ENEMIES (6)
- missions: Mission, MissionObjective, MISSIONS, SIDE_MISSIONS
- localization: Lang, TRANSLATIONS en/ar

## Performance
- InstancedMesh for streetlights
- Shared materials
- SpatialHash for collider queries
- Adaptive quality
- AI: only near enemies high freq (currently all same but director can sleep distant)
- GC: pooling for VFX (simple setTimeout removal)

## Security
- No secrets in frontend, no localhost hardcoded, env vars via import.meta.env if needed (not used)
- Save validation, versioning

## PWA
- vite-plugin-pwa, manifest, icons, workbox precache 12 entries, runtime caching NetworkFirst for external
- registerSW.js autoUpdate

## Expansion
- Modular: new weapons add to WEAPONS, new enemies to ENEMIES, new missions to MISSIONS
- World chunking: districts array, bounds, can load/unload
- Network folder prepared for future multiplayer (transport, session, sync)
