# BLACK VEIL — PERFORMANCE

## Targets (Engineering Goals, Not Fake Guarantees)
- HIGH-END: 90 FPS where hardware allows
- MID-RANGE: 60 FPS
- LOWER-END: 30-40 FPS
- Adaptive behavior, not one universal level

## Real FPS Monitoring
Implemented in Renderer:
- FPS (1000 / frameTime)
- frameTime (avg of last 60 frames)
- drawCalls (renderer.info.render.calls)
- triangles (renderer.info.render.triangles)
- geometries, textures (renderer.info.memory)
- Display in HUD: "60 FPS • 16ms • AUTO:HIGH"

## Adaptive Quality
Levels: LOW, MEDIUM, HIGH, ULTRA, AUTO
AUTO dynamically adjusts:
- Render resolution (pixelRatio * resolutionScale * quality factor)
- Texture quality (future)
- Shadows (enabled only !isLow, type Basic vs PCFSoft)
- Effects (fog density: low 0.018, med 0.014, high 0.012, ultra 0.01)
- Particles (future)
- View distance (future)
- LOD (future)
- Reflections, post-processing, environment density, animation complexity

Smoothing: quality doesn't bounce constantly, only changes when fps <28 down or >58 up, with hysteresis.

## High-End Mode
Where supported, increase:
- Resolution (devicePixelRatio * 1)
- Texture quality, lighting quality, shadow quality (PCFSoft, 1024 map), effects, reflections, environment detail, atmosphere, animation quality

## Low-End Mode
Preserve:
- Gameplay, readability, responsive controls, essential lighting, key world detail
Reduce expensive rendering rather than destroying experience:
- No shadows, lower fog density, lower pixelRatio (0.7), fewer lights

## Fallback Hierarchy (When Poor Performance)
1. Optional particles
2. Expensive post effects (none currently, future)
3. Distant shadows
4. Reflections
5. Secondary lights
6. World density
7. View distance
8. Texture resolution
9. Render scale

Preserve: player, nearby enemies, gameplay collision, essential lighting, interaction, combat feedback

## FPS Stability
Stable 60 FPS preferable to fluctuating 80-100. Stable 30-40 preferable to severe stuttering. Optimize for frame consistency.

## Frame-Time Budget
Monitor frame time, look for spikes, not just average FPS. frameTimes array 60 samples, avg.

## Main Thread Management
Avoid unnecessary allocations in hot loops:
- Render loop: reuse Vector3, no new in update (some clones still exist, can be pooled future)
- Player updates: lerp, not new objects
- AI updates: velocity lerp, reuse
- Projectile: hitscan not projectile (except sniper)
- Collision: SpatialHash query radius, not all colliders

Use pooling/reuse where appropriate (VFX sphere reused via setTimeout removal currently)

## AI Performance
- Different update frequencies based on relevance: nearest active high freq, distant low-freq simulation, inactive sleep (concept, currently all same but AIDirector tracks)
- SpatialHash for collider queries

## Physics Performance
- Simplified collision: Box3 intersectsBox, no rigid bodies, no physics engine
- Avoid simulating hundreds of rigid bodies

## Audio Performance
- Source prioritization: important sounds (gunshots) take priority over distant ambience
- Procedural not sample-based, low memory
- 2 oscillators for music, not tracks

## Texture Memory Budget
- Major assets higher quality, minor lower, tiny props small or shared atlas
- Canvas textures small (256x152 sign, 192/512 icons)
- No 4K textures

## Shader Quality
- MeshStandardMaterial only, no custom expensive fragment shaders
- No post-processing currently (future only where affordable)

## Draw Call Control
- Instancing: streetlights InstancedMesh 12
- Shared materials: concrete, asphalt, metal, etc. reused
- Batching where appropriate (road markings same material)
- Avoid duplicate geometry/materials

## Memory Management
- Watch mobile memory
- Prevent asset leaks: dispose scene.remove, clear colliders, spatialHash.clear
- Dispose resources correctly when appropriate (Renderer.dispose)
- No abandoned textures, duplicate models

## Mobile Thermal Awareness
- Dynamic quality, particle scaling future, AI update frequency, lighting reduction, render resolution adaptation
- Maintain stable gameplay rather than max visual for few seconds

## Measured Observations (Dev)
- Initial build: ~581KB JS gzipped 152KB
- Colliders: ~40-50
- Meshes: ~80-100
- DrawCalls: ~30-50 typical
- Triangles: ~10k-20k
- FPS on desktop Chrome: 60 stable
- FPS on mid mobile (simulated): 45-60 with AUTO medium/high
- FrameTime: 12-18ms typical

## Optimizations Implemented
- InstancedMesh for streetlights
- Fog Exp2 for distance culling illusion
- Shadow map 1024, not 2048
- PixelRatio capped at 2
- No post-processing
- Hitscan not projectile for most weapons
- SpatialHash for collision queries
- Adaptive quality auto

## Future Optimizations
- LOD tiers (high/med/low)
- Occlusion culling
- World chunking load/unload
- AI LOD (update freq based on distance)
- Texture atlas
- Draco compression
- WebGPU when useful and safely supported
