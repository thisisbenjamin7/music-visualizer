import { COLORS } from '../constants.js';

const BAR_COUNT = 48;

export function drawBars(ctx, width, height, playbackState, timestamp) {
  ctx.fillStyle = COLORS.background;
  ctx.fillRect(0, 0, width, height);

  const t = timestamp / 1000;
  const alpha = playbackState.isPlaying ? 1 : 0.15;
  const speedScale = playbackState.isPlaying ? 1 : 0.2;

  const slotWidth = width / BAR_COUNT;
  const barWidth = slotWidth * 0.7;
  const gap = slotWidth * 0.3;

  for (let i = 0; i < BAR_COUNT; i++) {
    const freq = 0.5 + (i / BAR_COUNT) * 3;
    const phase = i * 0.4;
    const amplitude =
      (Math.sin(t * freq * speedScale + phase) * 0.5 + 0.5) *
      (Math.sin(t * 0.3 * speedScale + i * 0.1) * 0.3 + 0.7);

    const barHeight = amplitude * height * 0.8;
    const x = i * slotWidth + gap / 2;
    const y = height - barHeight;

    // Blue (#3b82f6) at low amplitude → orange (#f97316) at high amplitude
    const r = Math.round(59 + 190 * amplitude);
    const g = Math.round(130 - 15 * amplitude);
    const b = Math.round(246 - 224 * amplitude);

    ctx.globalAlpha = alpha;
    ctx.fillStyle = `rgb(${r},${g},${b})`;
    ctx.fillRect(x, y, barWidth, barHeight);
  }

  ctx.globalAlpha = 1;
}
