# Architecture

The browser build is organized around four responsibilities:

- **Presentation** — responsive shell, HUD and canvas.
- **Simulation** — player movement, collisions, pickups and zone completion.
- **Content** — zone layout and progression data.
- **Persistence** — local progress stored in the browser.

The game uses Canvas 2D for rendering and the Web Audio API can be used for generated audio without shipping music files.

## Runtime flow

1. The page initializes the canvas and controls.
2. A zone is generated from the current zone index.
3. Each animation frame updates the simulation using elapsed time.
4. The renderer draws the current world state.
5. Completing a zone records progress and unlocks the next zone.

## Save data

The save is stored in localStorage under `neonOverdriveNextGenV2`. Clearing browser storage resets local progress.
