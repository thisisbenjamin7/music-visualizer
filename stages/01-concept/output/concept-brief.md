# Concept Brief: vizz

## App Identity

- **App name:** vizz
- **Music platform:** Spotify
- **Target audience:** General public

## Visualizer

- **Styles:** Bar Spectrum, Waveform, Particle Field, Circular Spectrum
- **Mode switching:** User-switchable at runtime
- **Sync method:** Timestamp-based animation against Spotify playback state (no raw audio stream)

## UI

- **OS template:** Windows 98
- **Window chrome:** Title bar (#000080 → #1084d0 gradient), grey menu bar (#c0c0c0), sunken status bar showing track name and artist
- **Font:** "MS Sans Serif", "Tahoma", sans-serif, 12px
- **Border style:** 2px outset (raised), 2px inset (sunken)

## Color Scheme

- **Palette:** Blue and Orange
- **Usage:** Derive specific hex values in Stage 03 constants.js (primary, secondary, background)

## Notes

- Spotify does not expose raw audio streams to web apps; all visualizer animation syncs to playback position and play/pause state
- All four styles must degrade gracefully when Spotify is paused or no track is playing
