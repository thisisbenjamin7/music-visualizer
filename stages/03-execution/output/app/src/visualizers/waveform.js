import { COLORS } from '../constants.js';

export function drawWaveform(ctx, width, height, playbackState, timestamp) {
  ctx.fillStyle = COLORS.background;
  ctx.fillRect(0, 0, width, height);

  const t = timestamp / 1000;
  const midY = height / 2;
  const alpha = playbackState.isPlaying ? 1 : 0.15;
  const speedScale = playbackState.isPlaying ? 1 : 0.15;
  const ampScale = playbackState.isPlaying ? 1 : 0.4;

  // Primary blue wave
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.beginPath();
  ctx.strokeStyle = COLORS.primary;
  ctx.lineWidth = 2.5;
  ctx.shadowBlur = 12;
  ctx.shadowColor = COLORS.primary;

  for (let x = 0; x <= width; x++) {
    const n = x / width;
    const y =
      midY +
      Math.sin(n * 12 + t * 2 * speedScale) * 40 * ampScale *
        (Math.sin(t * 0.5 * speedScale) * 0.3 + 0.7) +
      Math.sin(n * 27 + t * 3.7 * speedScale) * 18 * ampScale *
        (Math.cos(t * 0.9 * speedScale) * 0.3 + 0.7);
    x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.stroke();

  // Secondary orange wave (offset, lower opacity)
  ctx.globalAlpha = alpha * 0.45;
  ctx.beginPath();
  ctx.strokeStyle = COLORS.secondary;
  ctx.lineWidth = 1.5;
  ctx.shadowColor = COLORS.secondary;
  ctx.shadowBlur = 8;

  for (let x = 0; x <= width; x++) {
    const n = x / width;
    const y =
      midY +
      Math.sin(n * 12 + t * 2 * speedScale + 0.5) * 28 * ampScale *
        (Math.sin(t * 0.5 * speedScale + 1.2) * 0.3 + 0.7);
    x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.restore();
}
