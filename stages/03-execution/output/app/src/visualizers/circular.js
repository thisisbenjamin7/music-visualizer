import { COLORS } from '../constants.js';

const BAR_COUNT = 64;

export function drawCircular(ctx, width, height, playbackState, timestamp) {
  ctx.fillStyle = COLORS.background;
  ctx.fillRect(0, 0, width, height);

  const t = timestamp / 1000;
  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.min(width, height) * 0.22;
  const alpha = playbackState.isPlaying ? 1 : 0.15;
  const speedScale = playbackState.isPlaying ? 1 : 0.15;

  // Base ring
  ctx.save();
  ctx.globalAlpha = alpha * 0.35;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.strokeStyle = COLORS.primary;
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = alpha;

  for (let i = 0; i < BAR_COUNT; i++) {
    const angle = (i / BAR_COUNT) * Math.PI * 2 - Math.PI / 2;
    const freq = 0.5 + (i / BAR_COUNT) * 4;
    const phase = i * 0.3;
    const amplitude =
      (Math.sin(t * freq * speedScale + phase) * 0.5 + 0.5) *
      (Math.sin(t * 0.4 * speedScale + i * 0.08) * 0.3 + 0.7);

    const barLen = amplitude * radius * 0.9;
    const x1 = cx + Math.cos(angle) * radius;
    const y1 = cy + Math.sin(angle) * radius;
    const x2 = cx + Math.cos(angle) * (radius + barLen);
    const y2 = cy + Math.sin(angle) * (radius + barLen);

    const r = Math.round(59 + 190 * amplitude);
    const g = Math.round(130 - 15 * amplitude);
    const b = Math.round(246 - 224 * amplitude);

    ctx.beginPath();
    ctx.strokeStyle = `rgb(${r},${g},${b})`;
    ctx.lineWidth = 2;
    ctx.shadowBlur = 5;
    ctx.shadowColor = `rgb(${r},${g},${b})`;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  ctx.restore();
}
