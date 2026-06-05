import { drawBars } from './visualizers/bars.js';
import { drawWaveform } from './visualizers/waveform.js';
import { drawParticles } from './visualizers/particles.js';
import { drawCircular } from './visualizers/circular.js';

const DRAW_FNS = {
  bars: drawBars,
  waveform: drawWaveform,
  particles: drawParticles,
  circular: drawCircular,
};

let canvas, ctx;
let mode = 'bars';
let playbackState = { isPlaying: false, trackName: null, artistName: null, progressMs: 0, durationMs: 0 };

export function initVisualizer(canvasEl) {
  canvas = canvasEl;
  ctx = canvas.getContext('2d');
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  requestAnimationFrame(loop);
}

export function setMode(newMode) {
  if (DRAW_FNS[newMode]) mode = newMode;
}

export function updatePlaybackState(state) {
  playbackState = state;
}

function resizeCanvas() {
  const parent = canvas.parentElement;
  canvas.width = parent.clientWidth;
  canvas.height = parent.clientHeight;
}

function loop(timestamp) {
  requestAnimationFrame(loop);
  DRAW_FNS[mode]?.(ctx, canvas.width, canvas.height, playbackState, timestamp);
}
