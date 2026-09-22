# BLACK VEIL — GAME DESIGN DOCUMENT

## Identity
- **Title**: BLACK VEIL
- **Tagline**: THE CITY FORGOT. YOU DIDN'T.
- **Genre**: Cinematic 3D third-person tactical shooter / stealth / survival / exploration / parkour / RPG-lite / story-driven
- **Platform**: Mobile Web (PWA), Desktop Web
- **Engine**: Three.js + TypeScript

## Core Vision
Veyra megacity collapsed after THE BLACKOUT — coordinated tech failure. Power, comms, transport gone in 17 minutes. Millions vanished. Official: cascading infrastructure failure. Truth: deliberate, someone benefited, someone still inside.

Player returns searching for missing person (sister Mara) connected to Blackout. Deeper you go, disaster was only beginning.

## Experience Target
- Vulnerable entering dangerous areas
- Powerful mastering combat
- Intelligent solving via stealth
- Curious exploring, rewarded discovering hidden
- Emotionally connected to characters
- Immersed by audio, impressed by visuals, in control, motivated to investigate mystery

Central Fantasy: ENTER THE DEAD CITY. SURVIVE ITS PEOPLE. UNCOVER ITS SECRETS. BECOME PART OF STORY.

## World — Veyra Sector 7 Vertical Slice

### Districts
1. **Central Street**: destroyed high-density urban, 6 buildings, streetlights, barriers, abandoned vehicles, evacuation signs
2. **Residential Block**: apartments, 5 floors, interiors, stairwell, windows with emissive, blackout power state
3. **Corporate Helix Tower**: 48m tower, glass facade, security-heavy, powered state, point light cyan, entrance
4. **Industrial Yard**: warehouses, 12 containers (colored), substation (power gameplay), partial power
5. **Underground**: service tunnel cylinder, floor, blackout
6. **Rooftops**: parapets, planks for parkour, vertical traversal
7. **Hidden**: sealed cache, glowing loot, secret discovery

Connections: multiple routes (street, interior, second floor, rooftop, underground)

### Building System
- Not just shells: doors, windows, interiors, stairways, rooftop access, cover, loot, investigation where appropriate
- Modular kit: walls, floors, ceilings, windows, doors, stairs, balconies, roofs, pipes, electrical, streetlights, signs, barriers, fences, storefronts, industrial

### Environmental Storytelling
- Evacuation notices (canvas texture)
- Abandoned medical supplies (loot)
- Warning screens (terminal emissive)
- Broken security devices
- Damaged vehicles (car box + collider)
- Faction propaganda (signs)
- Emergency broadcasts (audio zones future)
- Old advertisements

## Player

### Controller
- Walk 2.2, jog 4.2, sprint 6.5, crouch 1.6, jump 5.5, gravity -14
- Stance: stand/crouch, MoveState: idle/walk/jog/sprint/crouch_walk/jump/fall/slide/vault/mantle/climb (vault/mantle/climb prepared but simplified to jump)
- Responsive, predictable, low latency, collision stable

### Camera
- Follow, shoulder switching (0.4 offset), aiming (1.1 dist, 42 FOV), collision avoidance (raycast), smoothing (lerp), shake, contextual

### Character Art
- Silhouette recognizable: tactical layers, vest, backpack, holsters, gloves, boots, cap
- Materials: tactical fabric, gear metal, skin, vest
- Weapon socket

## Combat

### Weapons
- M9 Tactical (pistol): 28 dmg, 420 rpm, 15 mag, 35m range, suppressor, micro red dot
- VEC-9 (SMG): 19 dmg, 850 rpm, 32 mag, 40m, high CQB
- AR-41 Vanguard (rifle): 36 dmg, 650 rpm, 30 mag, 85m, workhorse
- Breacher-12 (shotgun): 14x8 pellets, 120 rpm, 8 mag, 18m, door kicker
- Phantom SR (sniper): 110 dmg, 45 rpm, 5 mag, 220m, projectile, one-shot
- Tactical Blade (melee): 75 dmg, silent

Each: unique characteristics, fire behavior, damage, range, recoil, spread, rate, reload, magazine, reserve, sound, VFX

### Attachments
- Sights: micro red dot, holo, ACOG 4x, 8x variable
- Muzzles: suppressors (pistol/smg/rifle/sniper) noise -0.6..-0.75
- Magazines: extended
- Grips: vertical (-0.2 recoil), angled (-0.15 recoil, -0.01 spread)

### Ballistics
- Hitscan for pistol/smg/rifle/shotgun, projectile for sniper (future travel/gravity)
- Chose hitscan for mobile performance, projectile for sniper to allow future gravity

### Damage
- Unified: player damage (armor absorbs 60%), enemy damage (headshot 2.2x), environmental future
- Data-driven

### Body Regions (future)
- Head/torso/arms/legs influence damage, movement, accuracy, stagger — currently headshot multiplier

### Hit Feedback
- Sound, visual impact (sphere), animation flash emissive, crosshair

## Stealth

### Detection Stages
UNAWARE → SUSPICIOUS (0.35) → INVESTIGATING (0.65 timer) → ALERTED (0.65) → COMBAT (0.95) → SEARCHING → LOST TARGET

Factors: visibility (crouch 0.5, sprint 1.5), distance (1 - dist/range), sound (shoot 3x hearing, sprint 1.5x, crouch 0.4x), line of sight (raycast), FOV, movement

### Sound Detection
- Gunshots, footsteps (timer), explosions future, doors, objects
- Distance + intensity, not exact location (lastHeardPos)

### Memory
- Last known player pos, time since detection, sound origin, suspicious locations, threat priority → believable search

## AI

### Archetypes
- SECURITY (Helix): standard, holds, calls backup, 100hp, 28m detection, 14 hearing, 110 FOV
- SCOUT (Ashen): fast recon, flank, 75hp, 5.0 speed, 32 detection, 130 FOV
- HEAVY (Vanguard): armored, suppression, 220hp/80 armor, 2.1 speed, 22 detection
- SNIPER (Veil): long-range, relocates, 85hp, 65 detection, 45 FOV, 2.2s fire cooldown
- HUNTER (Ashen): aggressive close, packs, 120hp, 4.6 speed, 20 detection, 140 FOV, 22 hearing
- COMMANDER (Helix): tactical leader, buffs, reinforcements, 150hp/50 armor

Each: visual identity (color, scale, gear), equipment, role, behavior, stats, audio, animations (procedural)

### Director
- Encounter management: spawn pressure (adjust based on activeCombat), reinforcement timing, patrol density
- Never spawn behind player to cheat, creates pacing

### Squad
- Communicate (shared lastKnown), take cover (future), flank (random flank pos), suppress (fire cooldown), retreat, regroup, call reinforcements
- Commanders modify squad (future buff)

### Cover (future)
- Cover positions, quality, line of sight, threat direction, nearby allies

### Navigation
- Patrol points random around start, pathfinding simplified to direct move + collision via world colliders
- No getting stuck: small radius, lerp, avoid large obstacles via SpatialHash

## Missions

### Chapter 1: Ghosts
1. **Ghosts of Veyra**: Enter dead city, reach northern checkpoint (0,0,-80), avoid detection optional, collect 3 intel
2. **Lights Out**: Restore partial power to residential, reach substation (45,0,-20), activate 2 transformers + breaker, defend 6 enemies
3. **The Apartment**: Investigate Mara's apartment, infiltrate residential block (-35,0,20), locate 7B 4th floor, recover drive, escape via underground/rooftops
4. **Helix Tower**: Infiltrate corporate, bypass cameras, disable security grid (hack 2 terminals), reach Level 23 Server Room Delta (0,23,60), download

Design: objectives, optional, alternate routes (rooftop vs main), stealth vs assault, investigation, environmental interaction, rewards, consequences

### Multi-Approach
STEALTH (crouch, suppressor, avoid), TACTICAL ASSAULT (rifle, cover), LONG-RANGE (sniper tower), VERTICAL (rooftops), ENVIRONMENTAL (power, terminals)

### Quest Types (architecture)
Main, side, investigation, rescue, infiltration, extraction, sabotage, recovery, recon, survival, escape

## Progression

- XP, levels, skill points, unlocks, upgrades
- Skill trees: COMBAT, STEALTH, SURVIVAL, MOBILITY (architecture)
- Each upgrade alters playstyle, not just numbers

## World Simulation (lightweight)
- Patrols, NPC activity future, faction presence, world events, weather, lighting, environmental changes
- Not simulating unnecessary details for mobile

## Factions
- VANGUARD: ex-security/military, color #4a6a8a, symbol ◬, holds territory, weapon rifle/shotgun
- ASHEN: civilian survivor network, #8a7a5a, ⬔, scavengers, SMG
- HELIX: private corporate security, #1a1a1a, ⬡, controls ruins, all weapons
- VEIL: secretive org tied to Blackout, #6a4a8a, ◍, sniper, intel

Reputation: hostile, suspicious, neutral, tolerated, allied — influences dialogue, mission availability, world encounters

## Economy
- Currency CR, materials, rewards, mission payouts, vendor framework (future merchants: weapons, medical, equipment, information, rare)

## Difficulty
- STORY, NORMAL, HARD, SURVIVAL/EXTREME — adjusts AI behavior, damage, resources, detection, coordination, not just health *10

## Audio

### Categories
Master, music, SFX, voice, ambience, UI — separate gains, settings persistence

### Realistic Sound
Footsteps (surface-aware future), gunfire (procedural noise burst), weapon handling, reload, impacts, doors, metal, glass, concrete, rain, wind, machinery, alarms, radio

### Voice
Protagonist, main characters (Kael Ashen contact), faction leaders, enemies, civilians, radio operators — architecture for voice-generation, procedural fallback

### Radio
Diegetic: radio calls, mission updates, emergency broadcasts, faction chatter, interference, signal loss, encrypted messages

### Music
Adaptive states: menu, exploration (36Hz saw), mystery, stealth (40Hz), danger, combat (55Hz), high-intensity, story, defeat, victory — smooth transitions via oscillator crossfade

## VFX
- Muzzle flash (cone, opacity 0.9 40ms), impact sphere, sparks future, dust, debris, rain, fog, smoke, explosion, hit reaction, environmental particles
- Quality scaling via settings

## Materials
- Concrete, asphalt, metal, painted metal, glass, fabric, rubber, wood, tactical, emergency, neon, rust, dirt
- Texture pipeline: base color, roughness, metallic, emissive — resolution based on importance, shared atlases future

## LOD / Culling / Instancing / Streaming
- LOD tiers: high close, medium gameplay, low far (concept)
- Frustum culling (Three.js), distance culling, occlusion future
- Instancing: streetlights (InstancedMesh 12)
- Streaming: CORE (player, current area, mission, nearby audio), OPTIONAL (distant), progressive loading via AssetLoader

## Pacing
Quiet exploration → tension → discovery → combat → aftermath → story — moments of silence, not every second combat

## Retention
Story, mystery, exploration, meaningful progression, varied encounters, player agency, world discovery — not artificial grinding

## Verticality
Street, interior, second floor, rooftop, construction, underground — routes connecting layers, parkour useful for escape, shortcuts, flanking, collectibles

## Safehouse (future hub)
Equipment station, mission board, inventory, lore, upgrades, map, story interactions

## End of Chapter 1 Hook
Helix Tower server reveals Project BLACK VEIL — Blackout was test, someone still operating inside Veyra, Mara's drive points deeper.

## Multiplayer-Ready Architecture
- /network separated: transport, session, sync, player-state, backend
- Future: co-op, PvPvE, parties, sessions, authoritative state, synchronized transforms/combat, matchmaking
- Server authority: important state not trusting client
- Currently single-player with architecture preserved, no fake multiplayer
