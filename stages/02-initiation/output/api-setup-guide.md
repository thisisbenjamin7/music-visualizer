# Spotify API Setup Guide

## Auth Flow: Authorization Code with PKCE

vizz is a pure frontend app (no backend server). Use the **PKCE flow** — it does not require exposing a client secret.

---

## Step 1: Register Your App

1. Go to [https://developer.spotify.com/dashboard](https://developer.spotify.com/dashboard) and log in
2. Click **Create app**
3. Fill in:
   - **App name:** vizz
   - **App description:** Music visualizer
   - **Redirect URI:** `http://localhost:5173/` (add `https://myvisualizer.com/` before deploying)
   - **APIs used:** Web API
4. Save. You will land on the app dashboard.
5. Click **Settings** — copy your **Client ID**

> **Redirect URI tip:** The dashboard shows a warning "This redirect URI is not secure" for `http://` URIs — this is just a warning, not a blocker. Press **Enter** in the text field to confirm the URI, then scroll down and click **Save** at the bottom of the page. Clicking the Add button alone does not save.

---

## Step 2: Configure Environment Variables

Create a `.env` file at the project root:

```
VITE_CLIENT_ID=your_client_id_here
VITE_REDIRECT_URI=http://localhost:5173/callback
```

Add `.env` to `.gitignore` immediately:

```
.env
node_modules/
dist/
```

> **Never commit the Client ID to a public repo.** Although the PKCE flow has no client secret, the Client ID is still tied to your Spotify account and rate limit quota.

---

## Step 3: OAuth PKCE Flow (auth.js)

### Redirect to Spotify

```js
// Generate PKCE code verifier and challenge
const codeVerifier = generateRandomString(128);
const codeChallenge = await generateCodeChallenge(codeVerifier);
sessionStorage.setItem('code_verifier', codeVerifier);

const params = new URLSearchParams({
  response_type: 'code',
  client_id: import.meta.env.VITE_CLIENT_ID,
  scope: 'user-read-playback-state user-read-currently-playing',
  redirect_uri: import.meta.env.VITE_REDIRECT_URI,
  code_challenge_method: 'S256',
  code_challenge: codeChallenge,
});

window.location = `https://accounts.spotify.com/authorize?${params}`;
```

### Exchange Code for Token

After Spotify redirects back to `/callback?code=...`:

```js
const code = new URLSearchParams(window.location.search).get('code');
const codeVerifier = sessionStorage.getItem('code_verifier');

const response = await fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: import.meta.env.VITE_REDIRECT_URI,
    client_id: import.meta.env.VITE_CLIENT_ID,
    code_verifier: codeVerifier,
  }),
});

const { access_token, refresh_token, expires_in } = await response.json();
// Store tokens in localStorage (expires_in is seconds)
```

### Refresh Token

```js
const response = await fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: localStorage.getItem('refresh_token'),
    client_id: import.meta.env.VITE_CLIENT_ID,
  }),
});
```

---

## Step 4: Playback Polling (player.js)

Poll every 1000ms (see `TIMING.pollInterval` in constants.js):

```js
const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
  headers: { Authorization: `Bearer ${accessToken}` },
});

// 204 = nothing playing, 200 = track data
if (response.status === 200) {
  const data = await response.json();
  // data.item.name, data.item.artists, data.progress_ms, data.is_playing
}
```

### Playback State Object (emitted to visualizer.js)

```js
{
  isPlaying: true,
  trackName: "Song Title",
  artistName: "Artist Name",
  progressMs: 42000,       // current position in track
  durationMs: 210000,      // total track length
}
```

---

## Localhost Blocked? Use ngrok

If `http://localhost:5173/` is blocked by a firewall or corporate proxy, use ngrok to create a public HTTPS tunnel. This also fixes `crypto.subtle` errors on non-HTTPS origins (e.g. when testing on a phone).

1. Download `ngrok.exe` from ngrok.com and place it in your project folder
2. Sign up for a free ngrok account and copy your authtoken
3. With Vite running, open a second terminal and run:
```bash
./ngrok.exe config add-authtoken YOUR_AUTHTOKEN
./ngrok.exe http 5173
```
4. ngrok prints a URL like `https://abc123.ngrok-free.app` — use this as your redirect URI
5. Add the ngrok URL to Spotify dashboard redirect URIs (press Enter, then Save)
6. Update `.env`:
```
VITE_REDIRECT_URI=https://abc123.ngrok-free.app/
```
7. Add the ngrok hostname to `vite.config.js` (Vite blocks unknown hosts by default):
```js
export default {
  server: {
    allowedHosts: true,
  },
}
```

> **Note:** The free ngrok URL changes every time you restart ngrok. Update `.env` and the Spotify dashboard each session, or upgrade to a paid ngrok plan for a fixed URL.

---

## Credentials Checklist

Complete before starting Stage 03:

- [ ] Spotify Developer app created at developer.spotify.com
- [ ] Client ID copied from app dashboard
- [ ] Redirect URI added in Spotify app settings (press Enter to confirm, then Save)
- [ ] `.env` file created at project root with `VITE_CLIENT_ID` and `VITE_REDIRECT_URI`
- [ ] `.env` added to `.gitignore`
- [ ] `npm create vite@latest vizz -- --template vanilla` run successfully
- [ ] `npm install` completed, `npm run dev` starts the dev server at `localhost:5173`
- [ ] If localhost is blocked: ngrok tunnel running and `vite.config.js` updated with `allowedHosts: true`
