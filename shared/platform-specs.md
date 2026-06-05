# Platform Specs

API reference for the selected music platform. Referenced by stages 02 and 03.

## Selected Platform: Spotify

### Authentication
- Auth type: OAuth 2.0
- Scopes needed: user-read-playback-state, user-read-currently-playing (Spotify) / MusicKit token (Apple Music)
- Token endpoint: see official developer docs for Spotify

### Playback Data Endpoints
- Currently playing track: polling or webhook depending on platform
- Audio features: platform-specific (Spotify provides audio-features; Apple Music provides no raw waveform)
- Sync method: timestamp-based interpolation for visualizer animation

### Rate Limits
- Follow official rate limit documentation for Spotify
- Implement exponential backoff for failed requests

### Developer Portal
- Register your app and obtain credentials at the official Spotify developer portal
- Set the OAuth redirect URI to match your local and production URLs
