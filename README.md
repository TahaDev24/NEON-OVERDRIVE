<!--
  NEON OVERDRIVE — NEXT GEN
  Developed by Taha Hassarki
-->

<div align="center">

# ⚡ NEON OVERDRIVE

### NEXT GEN · RHYTHM PLATFORMER

**A neon-powered rhythm platformer built with pure HTML, CSS and JavaScript.**

<br>

`FEEL THE BEAT · BREAK THE LIMIT`

<br>

[▶ Play the Game](https://tahadev24.github.io/NEON-OVERDRIVE/) ·
[Source Code](https://github.com/TahaDev24/NEON-OVERDRIVE) ·
[Report an Issue](https://github.com/TahaDev24/NEON-OVERDRIVE/issues)

<br>

![HTML5](https://img.shields.io/badge/HTML5-Structure-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Visuals-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Game%20Logic-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111111)
![Dependencies](https://img.shields.io/badge/Dependencies-None-35C98A?style=for-the-badge)

</div>

---

## ✦ About the Game

**NEON OVERDRIVE — NEXT GEN** is a browser-based rhythm platformer focused on timing, movement and precision. Guide your character through a sequence of neon environments, avoid hazards, collect coins, unlock content and work your way toward the final challenge.

The project is built with standard web technologies rather than a heavyweight game engine. Its interface, visual effects, gameplay systems and audio are implemented directly in the project.

> This repository contains the current **10-zone NEXT GEN build**. It replaces the older eight-world documentation and layout.

## ◈ Core Features

- **10 playable zones** with distinct progression and visual atmosphere.
- **Rhythm-based platforming** built around precise jumps and obstacle timing.
- **Boss encounter** with multiple phases as a major progression challenge.
- **Coin and unlock systems** for in-game rewards and customization.
- **Checkpoints and progression** to support longer runs.
- **Procedural audio** generated in the browser with the Web Audio API.
- **Intro sequence and animated interface** with a neon visual identity.
- **Local progress storage** so supported game progress remains on the device.
- **Keyboard and touch input** for desktop and mobile browsers.
- **No external game engine or runtime library.**

## 🎮 Gameplay

1. Open the game and enter the zone selection screen.
2. Choose an available zone and start the run.
3. Time your jumps to pass obstacles and collect coins.
4. Reach checkpoints and progress through the zone sequence.
5. Complete the required stages to unlock later content.
6. Prepare for the final boss encounter.

Previously completed zones can be replayed without paying an entry fee. Some optional unlocks may still use in-game currency.

## 🧭 Project Structure

The source is organized into dedicated folders for configuration, gameplay systems, interface code, and visual styling. A standalone build is also included for players who want to launch the game without managing separate assets.

```text
NEON-OVERDRIVE/
│
├── index.html                         # Modular game entry point
├── NEON-OVERDRIVE-STANDALONE.html     # Single-file version
│
├── css/                               # Separated visual layers
│   ├── main.css                       # Stylesheet entry point
│   ├── base.css                       # Global rules and typography
│   ├── layout.css                     # App shell and canvas layout
│   ├── hud.css                        # In-game HUD and controls
│   ├── screens.css                    # Menus and panels
│   ├── components.css                 # Cards, settings and zones
│   ├── intro.css                      # Intro and ending cinematic visuals
│   ├── animations.css                 # Keyframes and motion definitions
│   ├── effects.css                    # Visual refinements
│   └── responsive.css                 # Mobile and reduced-motion rules
│
├── js/
│   ├── game.js                        # Main game loop and orchestration
│   ├── data/game-data.js              # Zones, themes and character data
│   ├── systems/audio.js               # Procedural music and sound effects
│   └── ui/intro.js                    # Intro cinematic lifecycle
│
└── README.md                          # Project documentation
```

### Source Responsibilities

| File | Responsibility |
|---|---|
| `index.html` | Game interface and modular asset loading |
| `NEON-OVERDRIVE-STANDALONE.html` | Complete single-file edition |
| `css/` | Separated visual layers, animations and responsive rules |
| `js/game.js` | Main game loop, physics, collisions and progression |
| `js/data/game-data.js` | Zone and character data |
| `js/systems/audio.js` | Browser-generated music and sound effects |
| `js/ui/intro.js` | Intro animation and skip behavior |

The separation is intentional: visual changes can be made in CSS without digging through gameplay logic, while the HTML remains focused on the page structure.

## 🛠️ Technology

| Technology | Usage |
|---|---|
| HTML5 | Document structure and Canvas element |
| CSS3 | Interface styling, effects, transitions and responsive layout |
| Vanilla JavaScript | Gameplay systems and application logic |
| Canvas 2D | Real-time game rendering |
| Web Audio API | Browser-generated music and sound effects |
| Local Storage | Local player progress and settings |

No package installation, build step or external JavaScript framework is required.

## ⚡ Choose Your Edition

- **Modular edition:** open `index.html` or serve the repository through a local HTTP server. CSS and JavaScript load from their folders.
- **Single-file edition:** open `NEON-OVERDRIVE-STANDALONE.html` directly. The complete game styles and scripts are embedded in one HTML file for a quick, no-setup experience.

## ▶ Run Locally

### Option 1 — Open Directly

1. Download or clone this repository.
2. Open `index.html` in a modern browser (or use the standalone HTML file for a one-file launch).
3. Start playing.

### Option 2 — Local HTTP Server

From the repository directory, run:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## ⌨️ Controls

| Action | Desktop | Mobile |
|---|---|---|
| Jump | `Space`, `↑` or `W` | Tap / on-screen jump control |
| Pause | `Esc` or `P` | Pause control |
| Resume | `Esc` or `P` | Resume control |

Some browser audio features require a first user interaction before playback can begin. Tap or click once if audio does not start immediately.

## 💾 Progress & Compatibility

- Progress and settings are stored locally in the browser.
- Saved data is tied to the browser and device where the game is played.
- Clearing browser storage can remove local progress.
- The game is intended for modern desktop and mobile browsers with Canvas 2D, Web Audio API and Local Storage support.
- An internet connection is not required for the core game after the project files are available locally.

## 🧩 Development Notes

The source is intentionally kept dependency-free and split by responsibility. If you want to modify the project:

- Start with `index.html` for page-level structure.
- Edit `css/style.css` for the visual layer.
- Work in `js/game.js` for gameplay behavior and systems.

Please report reproducible bugs with the browser/device details and the steps needed to reproduce them.

## 👨‍💻 Developer

<div align="center">

### TAHA HASSARKI

**Game Developer · Python Developer · Software Creator**

[GitHub Profile](https://github.com/TahaDev24)

<br>

**NEON OVERDRIVE — NEXT GEN**

`FEEL THE BEAT · BREAK THE LIMIT`

</div>
