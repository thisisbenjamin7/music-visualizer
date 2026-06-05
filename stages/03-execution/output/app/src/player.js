import { getAccessToken, logout } from './auth.js';
import { TIMING } from './constants.js';

const CURRENTLY_PLAYING_URL = 'https://api.spotify.com/v1/me/player/currently-playing';

let pollTimer = null;
let onStateChange = null;

export function startPolling(callback) {
  onStateChange = callback;
  poll();
  pollTimer = setInterval(poll, TIMING.pollInterval);
}

export function stopPolling() {
  if (pollTimer) clearInterval(pollTimer);
  pollTimer = null;
}

async function poll() {
  const token = await getAccessToken();
  if (!token) {
    stopPolling();
    return;
  }

  let res;
  try {
    res = await fetch(CURRENTLY_PLAYING_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch {
    return;
  }

  if (res.status === 401) {
    logout();
    stopPolling();
    return;
  }

  if (res.status === 204 || !res.ok) {
    onStateChange?.({ isPlaying: false, trackName: null, artistName: null, progressMs: 0, durationMs: 0 });
    return;
  }

  const data = await res.json();
  onStateChange?.({
    isPlaying: data.is_playing ?? false,
    trackName: data.item?.name ?? null,
    artistName: data.item?.artists?.[0]?.name ?? null,
    progressMs: data.progress_ms ?? 0,
    durationMs: data.item?.duration_ms ?? 0,
  });
}
