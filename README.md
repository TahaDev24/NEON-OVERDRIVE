# NEON OVERDRIVE — NEXT GEN

<p align="center"><img src="assets/banner.svg" alt="NEON OVERDRIVE — NEXT GEN" width="100%"></p>
<p align="center"><strong>A neon arcade platformer for modern browsers.</strong><br>Precision movement · Neon worlds · Final-zone boss</p>
<p align="center">
<img src="https://img.shields.io/badge/Platform-Web-00E5FF?style=for-the-badge&logo=html5&logoColor=white" alt="Web">
<img src="https://img.shields.io/badge/Renderer-Canvas%202D-7C4DFF?style=for-the-badge" alt="Canvas 2D">
<img src="https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

---

## Overview

NEON OVERDRIVE — NEXT GEN is a lightweight browser platformer with sequential zone progression, keyboard and touch controls, collectibles, hazards, local progress, and a boss in the final zone.

## Features

- 10 sequential zones
- Canvas 2D rendering
- Keyboard and mobile touch input
- Local save data
- Collectibles and obstacle collisions
- Final-zone boss encounter
- Responsive interface
- Bundled standalone HTML release

## Play

- **Myket:** [Open the game](https://myket.ir/app/com.webapp.neonoverdriv.q6cc)
- **Source:** [GitHub repository](https://github.com/TahaDev24/NEON-OVERDRIVE)

## Structure

```
NEON-OVERDRIVE/
├── assets/
│   ├── banner.svg
│   └── css/game.css
├── src/js/
│   ├── core/
│   │   ├── config.js
│   │   ├── input.js
│   │   └── save.js
│   ├── render/renderer.js
│   ├── world/level.js
│   └── main.js
├── docs/
├── tools/
├── release/
├── index.html
└── package.json
```

## Run locally

Open `index.html` in a current browser. For development builds, install Node.js and run:

```bash
npm install
npm run check
npm run build
```

The standalone build is generated at `release/NEON_OVERDRIVE_NEXT_GEN.html`.

## Controls

| Action | Keyboard | Touch |
|---|---|---|
| Move | Arrow keys / A-D | Direction controls |
| Jump | Space / W / Up | Jump button |
| Pause | Escape / P | Pause key |

## Progression

Zone 01 is available at the start. Clearing a zone unlocks the next zone in sequence. Progress is saved locally in the browser.

## Credits

Created by **Taha Hesaraki** · [GitHub](https://github.com/TahaDev24)
