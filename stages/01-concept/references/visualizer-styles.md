# Visualizer Styles

Reference for Stage 01. Lists available visualizer styles and their technical implications.

## Style Options

### Bar Spectrum
- What it looks like: vertical bars that pulse to frequency data
- Audio source: FFT (Fast Fourier Transform) frequency bins via Web Audio API AnalyserNode
- Complexity: low -- well-documented pattern
- Best for: classic music player feel

### Waveform
- What it looks like: a scrolling or oscillating wave representing the audio signal
- Audio source: time-domain data from AnalyserNode
- Complexity: low
- Best for: minimal, clean aesthetic

### Particle Field
- What it looks like: particles that react to beat and amplitude
- Audio source: amplitude and beat detection
- Complexity: medium -- requires beat detection logic
- Best for: dramatic visual impact

### Circular Spectrum
- What it looks like: bars arranged in a circle, radiating outward
- Audio source: FFT frequency bins
- Complexity: low to medium -- uses canvas arc math
- Best for: Windows Media Player-style nostalgia

## Important Note on Music Platform APIs

Spotify, Apple Music, and similar platforms do not expose raw audio streams to web apps. The visualizer syncs to playback state (track progress, play/pause) rather than real-time audio data. The Web Audio API AnalyserNode works only with local audio elements or microphone input. Plan for a timestamp-based animation approach when integrating with a music platform.
