import { COLORS, TIMING } from '../constants.js';

const particles = [];
const MAX_PARTICLES = 150;
const BEAT_INTERVAL = 60000 / TIMING.bpm;

let lastBeat = 0;

export function drawParticles(ctx, width, height, playbackState, timestamp) {
  if (!playbackState.isPlaying) {
    ctx.fillStyle = COLORS.background;
    ctx.fillRect(0, 0, width, height);
    particles.length = 0;
    lastBeat = 0;
    return;
  }

  // Fade trail (semi-transparent fill instead of full clear)
  ctx.fillStyle = 'rgba(10, 10, 42, 0.18)';
  ctx.fillRect(0, 0, width, height);

  // Spawn particles on each simulated beat
  if (timestamp - lastBeat > BEAT_INTERVAL) {
    lastBeat = timestamp;
    const spawnCount = 10 + Math.floor(Math.random() * 10);
    for (let i = 0; i < spawnCount && particles.length < MAX_PARTICLES; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3.5 + 0.5;
      particles.push({
        x: width / 2,
        y: height / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: Math.random() * 4 + 1.5,
        life: 1,
        decay: Math.random() * 0.007 + 0.004,
        color: Math.random() > 0.45 ? COLORS.primary : COLORS.secondary,
      });
    }
  }

  // Update and draw
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.025;
    p.life -= p.decay;

    if (p.life <= 0) {
      particles.splice(i, 1);
      continue;
    }

    ctx.save();
    ctx.globalAlpha = p.life;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.shadowBlur = 10;
    ctx.shadowColor = p.color;
    ctx.fill();
    ctx.restore();
  }
}
