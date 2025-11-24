<template>
  <!-- Full-area overlay, use absolute + pointer-events-none where you place it -->
  <canvas ref="canvasEl" class="mesh-overlay-canvas"></canvas>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const canvasEl = ref(null);

let ctx = null;
let animationId = null;
let particles = [];
let canvasWidth = 0;
let canvasHeight = 0;

const NUM_PARTICLES = 65; // increase/decrease density
const MAX_CONNECTION_DISTANCE = 180; // how far lines can connect
const SPEED = 0.2; // particle speed factor

function initCanvasSize() {
  if (!canvasEl.value) return;
  const canvas = canvasEl.value;

  const rect = canvas.getBoundingClientRect();
  canvasWidth = rect.width;
  canvasHeight = rect.height;

  const dpr = window.devicePixelRatio || 1;
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;

  const context = canvas.getContext("2d");
  context.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function createParticles() {
  particles = [];
  for (let i = 0; i < NUM_PARTICLES; i++) {
    particles.push({
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      radius: 2 + Math.random() * 2.2,
    });
  }
}

function updateParticles() {
  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;

    // soft bouncing on edges
    if (p.x <= 0 || p.x >= canvasWidth) p.vx *= -1;
    if (p.y <= 0 || p.y >= canvasHeight) p.vy *= -1;
  }
}

function drawParticles() {
  if (!ctx) return;

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // background glow layer (very subtle)
  const gradient = ctx.createRadialGradient(
    canvasWidth * 0.1,
    canvasHeight * 0.1,
    0,
    canvasWidth * 0.5,
    canvasHeight * 0.6,
    canvasWidth
  );
  gradient.addColorStop(0, "rgba(120, 180, 255, 0.10)");
  gradient.addColorStop(0.4, "rgba(30, 80, 180, 0.30)");
  gradient.addColorStop(1, "rgba(5, 15, 50, 0.0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // connections
  for (let i = 0; i < particles.length; i++) {
    const p1 = particles[i];
    for (let j = i + 1; j < particles.length; j++) {
      const p2 = particles[j];
      const dx = p1.x + 0 - (p2.x + 0);
      const dy = p1.y + 0 - (p2.y + 0);
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < MAX_CONNECTION_DISTANCE) {
        const alpha = 1 - dist / MAX_CONNECTION_DISTANCE;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(137, 197, 255, ${alpha * 0.6})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }

  // nodes
  for (const p of particles) {
    const radial = ctx.createRadialGradient(
      p.x,
      p.y,
      0,
      p.x,
      p.y,
      p.radius * 3
    );
    radial.addColorStop(0, "rgba(255, 255, 255, 0.9)");
    radial.addColorStop(0.3, "rgba(184, 214, 255, 0.9)");
    radial.addColorStop(1, "rgba(93, 149, 255, 0.0)");

    ctx.fillStyle = radial;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function tick() {
  updateParticles();
  drawParticles();
  animationId = requestAnimationFrame(tick);
}

function handleResize() {
  initCanvasSize();
  createParticles();
}

onMounted(() => {
  if (!canvasEl.value) return;
  ctx = canvasEl.value.getContext("2d");

  initCanvasSize();
  createParticles();
  tick();

  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  if (animationId) cancelAnimationFrame(animationId);
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
.mesh-overlay-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* so user can click stuff under it */
  z-index: 0; /* put your actual content above this with z-index: 1+ */
}
</style>
