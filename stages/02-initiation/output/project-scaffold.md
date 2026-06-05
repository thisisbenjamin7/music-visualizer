# Project Scaffold: vizz

## Tech Stack

- **Bundler:** Vite (vanilla JS template)
- **Language:** Vanilla JavaScript (no framework)
- **Rendering:** HTML5 Canvas via Web Audio API AnalyserNode pattern (timestamp-synced to Spotify)
- **Auth:** Spotify Authorization Code with PKCE (no client secret in frontend)

## Bootstrap Command

```bash
npm create vite@latest vizz -- --template vanilla
cd vizz
npm install
```

## Folder Structure

```
vizz/
├── index.html
├── src/
│   ├── main.js              (bootstrap: init auth, player, visualizer; wire mode switcher)
│   ├── auth.js              (Spotify OAuth PKCE flow: redirect, token exchange, refresh)
│   ├── player.js            (Spotify API polling: currently-playing endpoint, playback state)
│   ├── visualizer.js        (canvas loop, mode switching, delegates to active style module)
│   ├── visualizers/
│   │   ├── bars.js          (bar spectrum: FFT-simulated bars synced to playback progress)
│   │   ├── waveform.js      (waveform: oscillating line synced to playback progress)
│   │   ├── particles.js     (particle field: amplitude-driven particles, beat simulation)
│   │   └── circular.js      (circular spectrum: bars radiating outward in a ring)
│   └── constants.js         (all colors, fonts, timing -- no hardcoded values elsewhere)
├── assets/
│   └── os-theme/
│       ├── win98.css        (Windows 98 window chrome: title bar, menu bar, status bar)
│       └── icons/           (minimize, maximize, close button assets)
├── .env                     (VITE_CLIENT_ID, VITE_REDIRECT_URI -- never commit)
├── .env.example             (committed template with placeholder values)
├── .gitignore               (must include .env and node_modules)
├── vite.config.js           (set allowedHosts: true if using ngrok or non-localhost dev URL)
└── package.json
```

## File Responsibilities

| File | Responsibility |
|------|---------------|
| `main.js` | Entry point: check auth state, init player, init visualizer, bind mode-switcher UI |
| `auth.js` | PKCE code verifier/challenge generation, redirect to Spotify, token exchange, token storage |
| `player.js` | Poll `/v1/me/player/currently-playing` on interval, emit playback state object |
| `visualizer.js` | `requestAnimationFrame` loop, receives playback state, delegates draw call to active style |
| `visualizers/bars.js` | Draws bar spectrum; animates via playback progress position |
| `visualizers/waveform.js` | Draws waveform line; animates via playback progress position |
| `visualizers/particles.js` | Manages particle array; drives movement from simulated beat timing |
| `visualizers/circular.js` | Draws circular ring of bars; uses same data source as bars.js |
| `constants.js` | `COLORS`, `FONTS`, `TIMING` exports -- single source of truth |
| `win98.css` | All OS chrome styles: title bar gradient, grey panels, inset/outset borders |
| `vite.config.js` | Dev server config; set `allowedHosts: true` when tunneling via ngrok |

## Mode Switcher UI

Add a Windows 98-style menu bar item (e.g. **View → Style**) or toolbar buttons inside the window chrome to let the user switch between the four visualizer modes at runtime. Active mode stored in a module-level variable in `visualizer.js`.
