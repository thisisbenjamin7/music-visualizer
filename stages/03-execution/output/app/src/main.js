import { isLoggedIn, redirectToSpotify, handleCallback } from './auth.js';
import { startPolling } from './player.js';
import { initVisualizer, updatePlaybackState, setMode } from './visualizer.js';

const canvas = document.getElementById('visualizer-canvas');
const loginOverlay = document.getElementById('login-overlay');
const loginBtn = document.getElementById('login-btn');
const statusTrack = document.getElementById('status-track');
const statusMode = document.getElementById('status-mode');
const viewMenuTrigger = document.getElementById('view-menu-trigger');
const viewMenu = document.getElementById('view-menu');

async function init() {
  if (!import.meta.env.VITE_CLIENT_ID) {
    statusTrack.textContent = 'Error: VITE_CLIENT_ID missing from .env';
    loginOverlay.style.display = 'none';
    initVisualizer(canvas);
    return;
  }

  initVisualizer(canvas);

  if (window.location.search.includes('code=')) {
    const ok = await handleCallback();
    if (!ok) statusTrack.textContent = 'Spotify auth failed — try again';
  }

  if (isLoggedIn()) {
    loginOverlay.style.display = 'none';
    startPolling((state) => {
      updatePlaybackState(state);
      if (state.trackName) {
        statusTrack.textContent = `${state.trackName} — ${state.artistName}`;
      } else {
        statusTrack.textContent = state.isPlaying ? 'Loading...' : 'Nothing playing on Spotify';
      }
    });
  } else {
    loginOverlay.style.display = 'flex';
    statusTrack.textContent = 'Not connected';
  }
}

loginBtn.addEventListener('click', redirectToSpotify);

viewMenuTrigger.addEventListener('click', (e) => {
  e.stopPropagation();
  viewMenu.classList.toggle('hidden');
});

document.addEventListener('click', () => viewMenu.classList.add('hidden'));

viewMenu.querySelectorAll('.menu-option').forEach((option) => {
  option.addEventListener('click', () => {
    setMode(option.dataset.mode);
    viewMenu.querySelectorAll('.menu-option').forEach((o) => o.classList.remove('active'));
    option.classList.add('active');
    statusMode.textContent = option.textContent;
    viewMenu.classList.add('hidden');
  });
});

init();
