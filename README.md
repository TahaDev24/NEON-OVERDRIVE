<div align="center">

# NEON OVERDRIVE

**A browser-based rhythm platformer with eight worlds, code-generated music, and no external dependencies**

`FEEL THE BEAT · BREAK THE LIMIT`

[Report an Issue](https://github.com/TahaDev24/NEON-OVERDRIVE/issues) · [Developer](https://github.com/TahaDev24)

</div>

---

## Table of Contents

- [Introduction](#introduction)
- [At a Glance](#at-a-glance)
- [How to Play](#how-to-play)
- [Worlds](#worlds)
- [Audio System](#audio-system)
- [Characters and Store](#characters-and-store)
- [Progress and Saving](#progress-and-saving)
- [Settings](#settings)
- [Controls](#controls)
- [Technical Architecture](#technical-architecture)
- [Repository Structure](#repository-structure)
- [Running and Deployment](#running-and-deployment)
- [Troubleshooting](#troubleshooting)
- [Compatibility](#compatibility)
- [Developer](#developer)

---

## Introduction

NEON OVERDRIVE is a complete rhythm platformer that runs in a web browser and is built entirely with standard web technologies. Players take control of a digital character and travel through eight neon worlds, jumping with precise timing, avoiding obstacles, and collecting coins.

The goal of this project was to create a standalone, multi-part gaming experience without a game engine, external libraries, or a server. The game is rendered on Canvas, music and sound effects are generated in real time with the Web Audio API, and player progress is saved in the browser itself. There are no ready-made audio or image assets or external frameworks; everything is written in code.

---

## At a Glance

| Item | Value |
|---|---|
| Number of worlds | 8 |
| Number of characters | 12 |
| External dependencies | None |
| Pre-made audio files | None |
| Server required | No |
| Installation or compilation required | No |
| Interface language | Persian |
| Platform | Desktop and mobile browsers |
| Rendering | HTML5 Canvas 2D |
| Audio | Web Audio API |
| Storage | Local Storage |
| Programming language | Vanilla JavaScript |

---

## How to Play

The game is built around one simple control: **jump**. The challenge comes from timing.

1. Select a world to start a level.
2. The character moves forward automatically, with speed determined by the selected world.
3. Obstacles appear along the path. Jump at the right moment to avoid them.
4. Collect coins along the way to increase your score and balance.
5. Hitting an obstacle ends the level, and your score and record are saved.
6. Use the coins you collect to unlock new characters in the store.

Each world has its own obstacle layout, speed, and atmosphere. Mastering one world does not automatically prepare you for the next; you need to learn its new rhythm.

---

## Worlds

The game features eight worlds. Each one has its own visual identity, color palette, base speed, music theme, and obstacle layout.

| # | World | Persian Title |
|:---:|---|---|
| 01 | NEON CITY | شهر نئونی |
| 02 | CYBER STORM | طوفان سایبری |
| 03 | VOLCANIC RUSH | خروش آتشفشان |
| 04 | GRAVITY BREAK | شکست جاذبه |
| 05 | INFINITY CORE | هسته بی‌نهایت |
| 06 | SKYLINE RIFT | شکاف آسمان |
| 07 | QUANTUM ABYSS | ژرفای کوانتومی |
| 08 | NOVA ASCENSION | صعود نُوا |

### 01 · NEON CITY

The starting point of the game and an introduction to its main atmosphere: city streets and buildings illuminated by neon lights. This world is designed to teach the controls and rhythm.

### 02 · CYBER STORM

A digital, high-pressure environment with storm-like effects and cool colors. This world focuses on navigating paths that require faster reactions.

### 03 · VOLCANIC RUSH

A warm world with fiery colors and a sense of pressure and speed. Its palette and music bring more energy than the first two worlds.

### 04 · GRAVITY BREAK

An environment that conveys a sense of weightlessness and instability. The visual design and music create a suspended and unusual atmosphere.

### 05 · INFINITY CORE

The game's energy center, with a repetitive and hypnotic design. The rhythm draws players into a continuous flow.

### 06 · SKYLINE RIFT

A high-altitude world with a wide horizon and glowing rifts. Its atmosphere feels more open while remaining challenging.

### 07 · QUANTUM ABYSS

The deepest and darkest environment in the game, with deep colors and energy effects. This world requires strong focus and precision.

### 08 · NOVA ASCENSION

The final world and the peak of the journey. It combines the experiences of all previous worlds into an energetic ascent.

---

## Audio System

All game audio is generated in real time using the **Web Audio API**. The project contains no MP3 or WAV files, which keeps the initial load lightweight and makes the audio fully adjustable through code.

### Audio Layers

| Layer | Purpose |
|---|---|
| World music | A dedicated music theme for each of the eight worlds |
| Gameplay effects | Jumping, collecting coins, and collisions |
| Interface effects | Clicks and interactions with menus, the store, and settings |
| Cinematic intro | Dedicated audio for the opening sequence |

### How Audio Is Generated

- Sounds are created using **oscillators**.
- The shape and intensity of each sound are controlled with **Gain** and time-based envelopes.
- Each world's music is built from combinations of notes and rhythmic patterns that match the game's rhythm.
- Players can control audio independently, adjusting music and sound effects separately.

### Browser Note

Modern browsers do not allow audio to start before the user's first interaction. Therefore, audio begins after the first tap or click. This is normal browser behavior.

---

## Characters and Store

The game includes 12 selectable characters. Each character has an independent visual design and color scheme.

- Characters change appearance only; they do not affect game difficulty.
- Special characters can be unlocked in the in-game store using **coins collected during levels**.
- Unlocked characters remain available permanently and can be selected at any time.
- The last selected character remains active the next time the game is opened.

---

## Progress and Saving

Player data is saved in the browser using **Local Storage**. No account, registration, or internet connection is required.

The following data is saved:

- Best score
- Level records
- Coin balance
- Unlocked characters
- Selected character
- Audio and graphics settings

### Things to Know

- Data is stored only in the same browser and on the same device.
- Clearing browser data or using private browsing may erase progress.
- Progress is not synchronized between devices or different browsers.

---

## Settings

| Setting | Description |
|---|---|
| Music | Adjust or disable world music |
| Sound effects | Independently control jump, coin, and interface sounds |
| Display quality | Adjust quality for smoother performance on less powerful devices |
| Effect intensity | Increase or reduce lighting and neon effects |

Settings are saved automatically.

---

## Controls

| Action | Desktop | Mobile |
|---|---|---|
| Jump | `Space`, `↑`, or `W` | Tap the screen or the jump button |
| Pause | `Esc` or `P` | Pause button |
| Resume | `Esc` or `P` | Resume button |

---

## Technical Architecture

The project has three separate layers, each maintained in its own file.

### HTML (`index.html`)

Page structure and user interface: main menu, world selection, store, settings, pause screen, and game canvas.

### CSS (`css/style.css`)

Neon appearance, animations, transitions between screens, and responsive layouts for different display sizes.

### JavaScript (`js/game.js`)

The complete game logic, including the following components:

| Component | Responsibility |
|---|---|
| State management | Controls screens and game states (menu, gameplay, pause, end) |
| Game loop | Updates and renders frames with `requestAnimationFrame` |
| Character physics | Movement, jumping, and gravity |
| Collision detection | Detects collisions with obstacles and coins |
| Levels | Obstacle layouts and settings for each world |
| Scoring | Calculates scores, coins, and records |
| Input | Keyboard and touch controls |
| Audio | Generates music and effects with the Web Audio API |
| Storage | Reads and writes data in Local Storage |

### Rendering

All game elements (character, obstacles, background, coins, and effects) are drawn directly onto **Canvas 2D**. This provides full control over every frame.

---

## Repository Structure

```text
NEON-OVERDRIVE/
├── index.html        # Interface structure and pages
├── css/
│   └── style.css     # Appearance, animations, and responsiveness
├── js/
│   └── game.js       # Game logic, rendering, and audio
└── README.md         # Project documentation
```

| File | Responsibility |
|---|---|
| `index.html` | Modify the interface structure and components |
| `css/style.css` | Modify the design and visual effects |
| `js/game.js` | Modify game logic, levels, and audio |

---

## Running and Deployment

### Run Directly

Download the repository and open `index.html` in a modern browser.

### Run Locally with a Web Server

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Deploy with GitHub Pages

1. Open the repository's **Settings**.
2. Open the **Pages** section.
3. Under Branch, select `main` and the `/ (root)` folder.
4. Click **Save**.
5. After a few minutes, the game will be available at:

```text
https://tahadev24.github.io/NEON-OVERDRIVE/
```

---

## Troubleshooting

| Problem | Solution |
|---|---|
| No audio | Click or tap the screen once and make sure device audio and in-game audio settings are enabled |
| The game runs slowly | Reduce display quality and effect intensity in settings |
| Progress was erased | Browser data may have been cleared, or the game may have been played in private browsing mode |
| Stylesheet or script does not load | Make sure the `css` and `js` folders are next to `index.html` and the filenames match exactly |

---

## Compatibility

The game is designed for modern browsers that support HTML5 Canvas, the Web Audio API, and Local Storage. It supports keyboard and touch input, and the interface layout adapts to mobile and desktop displays.

---

## Developer

| | |
|---|---|
| Name | Taha Hassarki |
| GitHub | [TahaDev24](https://github.com/TahaDev24) |
| Project | NEON OVERDRIVE |
| Architecture | Client-Side |

> [!NOTE]
> AI tools were used as assistants during the development of this project.

<div align="center">

**NEON OVERDRIVE**
`FEEL THE BEAT · BREAK THE LIMIT`

</div>