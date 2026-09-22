# BLACK VEIL — ASSET PIPELINE

## Art-to-3D Pipeline (Most Important Requirement)

### Character Pipeline
1. **Design**: High-quality character design (art bible: tactical, realistic proportions, functional gear)
2. **Views**: Front, back, side, three-quarter, face, clothing details, equipment, weapon details (concept art 2D allowed as source)
3. **Image-to-3D**: Where available, use image-to-3D reconstruction; if not available, strongest alternative: procedural 3D, modular geometry, scripted modeling
4. **Geometry**: Actual 3D geometry (Box, Cylinder, Sphere, not flat images)
5. **Materials**: Derive from art bible (tactical 0x2d342d roughness 0.7, gear 0x1a1a1e metalness 0.3, etc.)
6. **UV/Material**: Assignments via MeshStandardMaterial, color, roughness, metalness, emissive where needed
7. **Skeleton/Rig**: Simple rig via Groups, weapon socket, procedural bone rotations (rightArm rotation.x for walk/sprint)
8. **Animations**: Animation states: idle (breathing sin), walk/jog/sprint (arm swing sin), crouch, aim (future), fire (muzzle flash), reload, etc. Transitions via lerp
9. **LOD**: High close (full mesh), medium gameplay (same but lower poly count via fewer segments), low far (future impostor)
10. **Collision**: Capsule approximated via Box3 radius 0.45, height stand 1.8 crouch 1.1
11. **Integrate**: Add to scene, set position, rotation
12. **Test**: At gameplay scale (player 1.8m, enemy scale 0.95-1.15)
13. **Optimize**: Mobile — frustumCulled false for player (always visible), instancing for repeated, low poly (Cylinder 6-8 sides)

### Weapon Pipeline
Same as character but simpler: BoxGeometry for body (size per category), Cylinder for barrel, Box for sight, Cone for muzzle flash. Materials dark/metal. Cast shadow. Weapon socket.

### Building Pipeline
1. **Concept**: Visual concept (art bible: architecture, materials, lighting)
2. **Architectural Language**: Determine style per district (central: mixed 18-32m, residential: concrete 16m 5 floors, corporate: glass tower 48m, industrial: warehouses)
3. **Modular Kit**: walls, floors, ceilings, windows, doors, stairs, balconies, roofs, pipes, electrical, streetlights, signs, barriers
4. **Materials**: concrete, asphalt, metal, glass (transparent 0.25 opacity), etc.
5. **Buildings**: Construct from kit (BoxGeometry + colliders)
6. **Props**: Signs (canvas texture), barriers, vehicles (Box), containers (colored)
7. **Signs/Decals**: CanvasTexture for evacuation sign (256x152, yellow/black)
8. **Lighting**: Point lights per district, shadows
9. **Collision**: Box3 per building/wall/prop, added to SpatialHash
10. **Traversal**: Add routes (planks, parapets, stairwell)
11. **POI**: Add points of interest (checkpoint, substation, cache)
12. **Optimize**: InstancedMesh for streetlights (12), shared materials, distance culling
13. **Test**: Navigate, check collision, ensure no getting stuck

### Texture Pipeline
- Base color, roughness, metalness, emissive
- Resolution based on importance: major assets higher, minor lower, tiny props small or shared atlas
- Procedural via canvas: evacuation sign, icons
- No 4K on tiny objects

### Icon Generation
- Script `scripts/generate-icons.mjs` using pngjs (pure JS, no native)
- Generates 192, 512, 32, 16 with Black Veil art bible: dark gradient (#050508 to #141420) + accent glow (106,166,255) + stylized V mark (white)
- PWA requires 192, 512, favicon

### Material System
Categories: concrete (roughness 0.9 metalness 0.05 color 0x8a8a85), asphalt (0.85,0.02,0x1a1a1e), metal (0.4,0.8,0x6a6a72), paintedMetal (0.5,0.3,0x2a3a4a), glass (0.05,0.1,0x88aacc transparent 0.25), fabric (0.95,0,0x2a2a32), rubber (0.9,0,0x111114), wood (0.8,0,0x4a3a2a), tactical (0.7,0.1,0x2d342d)

### Branding
- Logo: font Orbitron 900, letter-spacing 0.25em, color #fff, text-shadow 0 0 40px rgba(120,180,255,0.4)
- Tagline: JetBrains Mono 11px 0.4em #7a7a8a uppercase
- Icons: recognizable at small sizes (V shape)
- Loading artwork: same gradient as menu, subtle animation (shimmer bar)

### Asset Manifest (Concept)
- ID, category, source, file, size, purpose, loading priority, LOD
- Implemented via AssetLoader tasks: world, player, weapons, ai, audio, final
- Priority: startup UI (loading screen), player, current environment, current mission, essential audio, nearby, optional

### Validation
- Detect missing assets (try/catch, fallback), broken paths, wrong formats, duplicate IDs, unused, invalid refs
- Asset error handling: log dev info, controlled fallback, continue loading, avoid crash

### Originality
- Everything original or appropriately licensed/generated
- No copying proprietary characters/maps/logos/music/textures/voice from commercial games
- Inspiration at genre/mechanics level only

### No Random Style
- All content feels like BLACK VEIL: realistic proportions, material response, color language, architecture, clothing, weapons, signage, faction symbols, lighting, weather, UI style, typography, effects
- Avoid mixing realistic character with cartoon building

### Quality Bar
- Major objects not default primitives: use materials, lighting, proportions, damage, environmental context
- Character: silhouette, clothing detail, proportions, equipment, material variation, animation, lighting
- Building: readable architecture, believable proportions, windows, doors, materials, damage, gameplay purpose
- Prop: helps sell world, variation (barriers random rotation, containers 4 colors)

### Future Expansion
- Blender automation if available (not in web sandbox)
- Image-to-3D via external service (architecture ready)
- Texture generation via AI (architecture ready)
- LOD variants, collision representation, skeleton/rig, blend trees
