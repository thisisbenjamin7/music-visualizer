# Build Conventions

Code structure rules and shared constants for Stage 03. All code in output/app/ must follow these conventions.

## Shared Constants (constants.js)

All colors, fonts, and timing values must be defined in `src/constants.js` and imported where needed. No hardcoded values in other files.

Derive hex values from the color scheme in the concept brief: {{COLOR_SCHEME}}

```js
// src/constants.js -- populate from concept-brief.md color scheme
export const COLORS = {
  primary: "",      // fill from concept brief
  secondary: "",    // fill from concept brief
  background: "",   // fill from concept brief
};

export const FONTS = {
  ui: "",           // fill from os-templates.md for chosen template
  size: 12,
};

export const TIMING = {
  pollInterval: 1000,  // ms between API polls
  smoothing: 0.8,      // canvas analyser smoothing (0-1)
};
```

## File Responsibilities

| File | Responsibility |
|------|---------------|
| `main.js` | Bootstrap: init player, init visualizer, connect them |
| `visualizer.js` | Canvas drawing loop, animation timing |
| `player.js` | Music platform API calls, playback state polling |
| `constants.js` | All shared values -- colors, fonts, timing |

## Rules

- Never read from another stage's output/ folder to learn patterns -- use this file
- Do not hardcode colors or fonts outside of constants.js
- API keys must come from environment variables, never from source code
- Keep visualizer.js and player.js decoupled -- player emits state, visualizer reads it
- Music platform APIs do not stream audio -- sync to playback position, not raw waveform data
