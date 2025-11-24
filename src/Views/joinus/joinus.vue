<template>
  <div class="page-wrapper">
    <!-- PART 1: DESCRIPTION / HERO -->
    <section class="section-hero">
      <div class="hero-grid-overlay"></div>
      <div class="hero-inner">
        <div>
          <div class="hero-eyebrow">Why choose us</div>
          <h1 class="hero-title">
            Power your product with
            <span class="hero-highlight">future-ready technology</span>.
          </h1>
          <p class="hero-text">
            We blend human insight with next-generation engineering to build
            digital experiences that feel one step ahead. From concept to
            launch, every screen is optimized for speed, clarity, and trust.
          </p>

          <div class="hero-points">
            <div class="hero-point">
              <div class="hero-point-label">Neural workflow</div>
              <div class="hero-point-title">AI-assisted delivery</div>
              <p class="hero-point-text">
                Smart pipelines that automate the busywork so your team can
                focus on high-impact decisions.
              </p>
            </div>
            <div class="hero-point">
              <div class="hero-point-label">Realtime insights</div>
              <div class="hero-point-title">Data-driven UX</div>
              <p class="hero-point-text">
                Interfaces that adapt to behavior patterns, not assumptions,
                creating smoother journeys for every user.
              </p>
            </div>
          </div>
        </div>

        <div class="hero-badge">
          <div class="hero-badge-chip">Live metrics</div>
          <div class="hero-badge-number">99.9%</div>
          <div class="hero-badge-label">Uptime across deployments</div>
          <div class="hero-badge-footnote">
            Monitored, self-healing infrastructure with proactive alerting.
          </div>
        </div>
      </div>
    </section>

    <!-- PART 2: IMAGE SWIPER (6 IMAGES) -->
    <section class="section-gallery">
      <div class="gallery-glow"></div>

      <div class="gallery-header">
        <div class="gallery-title-block">
          <div class="gallery-tag">Interface pipeline</div>
          <h2>See our future-tech design system in motion.</h2>
          <p>
            High-contrast surfaces, holographic accents, and precise typography
            create a UI layer that feels like it was built for tomorrow’s
            products.
          </p>
        </div>
        <div class="gallery-meta">
          Auto-scrolling gallery powered by SwiperJS.<br />
          Connect your six showcase screens and ship.
        </div>
      </div>

      <div class="swiper-container">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <!-- Slide 1 -->
            <div class="swiper-slide">
              <img src="/slides/slide1.png" alt="Project preview 1" />
              <div class="slide-overlay"></div>
              <div class="slide-content">
                <div class="slide-tag">Monitoring</div>
                <div class="slide-title">Realtime systems dashboard</div>
                <div class="slide-text">
                  Futuristic telemetry views with depth, glow, and precise data groupings.
                </div>
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="swiper-slide">
              <img src="/slides/slide2.png" alt="Project preview 2" />
              <div class="slide-overlay"></div>
              <div class="slide-content">
                <div class="slide-tag">Landing core</div>
                <div class="slide-title">Conversion-ready hero blocks</div>
                <div class="slide-text">
                  Bold, tech-driven layouts that keep the eye locked on your primary actions.
                </div>
              </div>
            </div>

            <!-- Slide 3 -->
            <div class="swiper-slide">
              <img src="/slides/slide3.png" alt="Project preview 3" />
              <div class="slide-overlay"></div>
              <div class="slide-content">
                <div class="slide-tag">Mobile shell</div>
                <div class="slide-title">Edge-to-edge experiences</div>
                <div class="slide-text">
                  Compact, neon-accented UI kits crafted for mobile-first products.
                </div>
              </div>
            </div>

            <!-- Slide 4 -->
            <div class="swiper-slide">
              <img src="/slides/slide4.png" alt="Project preview 4" />
              <div class="slide-overlay"></div>
              <div class="slide-content">
                <div class="slide-tag">Brand system</div>
                <div class="slide-title">Unified visual language</div>
                <div class="slide-text">
                  Iconography and motion design aligned to your core product narrative.
                </div>
              </div>
            </div>

            <!-- Slide 5 -->
            <div class="swiper-slide">
              <img src="/slides/slide5.png" alt="Project preview 5" />
              <div class="slide-overlay"></div>
              <div class="slide-content">
                <div class="slide-tag">Product surface</div>
                <div class="slide-title">Feature-first storytelling</div>
                <div class="slide-text">
                  Narrative-driven modules that highlight the technology, not the noise.
                </div>
              </div>
            </div>

            <!-- Slide 6 -->
            <div class="swiper-slide">
              <img src="/slides/slide6.png" alt="Project preview 6" />
              <div class="slide-overlay"></div>
              <div class="slide-content">
                <div class="slide-tag">Trust layer</div>
                <div class="slide-title">Calm, confident UI state</div>
                <div class="slide-text">
                  Dark surfaces with subtle glow and motion to make every action feel secure.
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>

    <!-- PART 3: KEY REASONS / CARDS -->
    <section class="section-reasons">
      <div class="reasons-inner">
        <div class="reasons-header">
          <span>Future-ready advantage</span>
          <h2>Three pillars behind our technology-driven approach.</h2>
          <p>
            We don’t just design screens. We architect systems that scale, learn,
            and respond — giving your product the same calm confidence under load
            as it has on launch day.
          </p>
        </div>

        <div class="reasons-grid">
          <div class="reason-card">
            <div class="reason-icon">
              <span class="reason-icon-glow"></span>
              ⚙️
            </div>
            <div class="reason-title">Composable architectures</div>
            <p class="reason-text">
              We build from modular components and shared patterns, making every
              new feature faster, safer, and easier to evolve.
            </p>
            <div class="reason-meta">Systems</div>
          </div>

          <div class="reason-card">
            <div class="reason-icon">
              <span class="reason-icon-glow"></span>
              📡
            </div>
            <div class="reason-title">Telemetry by default</div>
            <p class="reason-text">
              Metrics, tracing, and insight hooks are wired in from day one —
              not bolted on at the end.
            </p>
            <div class="reason-meta">Observability</div>
          </div>

          <div class="reason-card">
            <div class="reason-icon">
              <span class="reason-icon-glow"></span>
              🤖
            </div>
            <div class="reason-title">Human + AI collaboration</div>
            <p class="reason-text">
              Workflows shaped around both your team and your models, keeping
              humans in control while AI accelerates the path to impact.
            </p>
            <div class="reason-meta">Intelligence</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

// Swiper core + modules (for v9+ / v11+)
import Swiper from "swiper";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

onMounted(() => {
  // Attach modules inside options (no Swiper.use needed)
  new Swiper(".mySwiper", {
    modules: [Autoplay, FreeMode, Pagination],
    loop: true,
    speed: 6000,
    slidesPerView: "auto",
    spaceBetween: 28,
    centeredSlides: true,
    grabCursor: true,
    allowTouchMove: true,
    freeMode: {
      enabled: true,
      momentum: false,
    },
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        spaceBetween: 16,
      },
      768: {
        spaceBetween: 24,
      },
      1024: {
        spaceBetween: 28,
      },
    },
  });
});
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:global(body) {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  background: radial-gradient(circle at top, #02071a 0%, #02030b 60%, #000 100%);
  color: #e5f0ff;
  line-height: 1.6;
}

.page-wrapper {
  width: 100%;
  overflow-x: hidden;
  background:
    radial-gradient(circle at 0% 0%, rgba(0, 255, 255, 0.08), transparent 55%),
    radial-gradient(circle at 100% 100%, rgba(0, 120, 255, 0.16), transparent 60%),
    #02040d;
}

/* --------------------
   PART 1 – HERO / DESCRIPTION
   -------------------- */
.section-hero {
  width: 100%;
  height: 900px; /* keep spec */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6%;
  overflow: hidden;
}

.hero-grid-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      to right,
      rgba(40, 70, 120, 0.35) 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      rgba(40, 70, 120, 0.35) 1px,
      transparent 1px
    );
  background-size: 40px 40px;
  opacity: 0.08;
  pointer-events: none;
}

.hero-inner {
  position: relative;
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 3.5rem;
  align-items: center;
  z-index: 1;
}

.hero-eyebrow {
  text-transform: uppercase;
  font-size: 0.78rem;
  letter-spacing: 0.3em;
  color: #4fd4ff;
  font-weight: 600;
  margin-bottom: 1.25rem;
  opacity: 0.85;
}

.hero-title {
  font-size: 3.1rem;
  line-height: 1.12;
  margin-bottom: 1.5rem;
  color: #f5f8ff;
  text-shadow: 0 0 22px rgba(0, 247, 255, 0.2);
}

.hero-highlight {
  color: #58ddff;
  position: relative;
}

.hero-highlight::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.3rem;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #00e5ff, #7c4dff);
  opacity: 0.7;
}

.hero-text {
  font-size: 1.02rem;
  max-width: 560px;
  color: #9fb1ff;
  margin-bottom: 2.2rem;
}

.hero-points {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.6rem;
}

.hero-point {
  background: radial-gradient(circle at top left, rgba(0, 255, 255, 0.12), transparent 55%),
    rgba(5, 16, 45, 0.88);
  border-radius: 20px;
  padding: 1.3rem 1.45rem;
  box-shadow: 0 22px 50px rgba(5, 17, 50, 0.7);
  border: 1px solid rgba(88, 221, 255, 0.35);
  backdrop-filter: blur(18px);
}

.hero-point-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: #66e4ff;
  margin-bottom: 0.4rem;
}

.hero-point-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: #f2f4ff;
}

.hero-point-text {
  font-size: 0.9rem;
  color: #a2b5ff;
}

.hero-badge {
  justify-self: flex-end;
  align-self: center;
  background: radial-gradient(circle at top, rgba(123, 255, 245, 0.45), transparent 60%),
    linear-gradient(145deg, rgba(6, 21, 58, 0.9), rgba(16, 42, 104, 0.9));
  color: #ffffff;
  border-radius: 24px;
  padding: 1.4rem 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow:
    0 0 45px rgba(0, 255, 255, 0.45),
    0 24px 60px rgba(3, 9, 30, 0.9);
  border: 1px solid rgba(100, 255, 255, 0.6);
  position: relative;
  overflow: hidden;
}

.hero-badge::before {
  content: "";
  position: absolute;
  inset: -40%;
  background: conic-gradient(
    from 180deg,
    rgba(0, 255, 255, 0.1),
    transparent,
    rgba(124, 77, 255, 0.18),
    transparent
  );
  opacity: 0.7;
  mix-blend-mode: screen;
  animation: rotateGlow 14s linear infinite;
}

.hero-badge > * {
  position: relative;
  z-index: 1;
}

.hero-badge-chip {
  align-self: flex-start;
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  padding: 0.32rem 0.7rem;
  border-radius: 999px;
  border: 1px solid rgba(177, 255, 255, 0.7);
  color: #c8f8ff;
  background: rgba(1, 8, 26, 0.7);
}

.hero-badge-number {
  font-size: 2.6rem;
  font-weight: 700;
}

.hero-badge-label {
  font-size: 0.9rem;
  opacity: 0.95;
}

.hero-badge-footnote {
  font-size: 0.78rem;
  opacity: 0.8;
  color: #d2e5ff;
}

/* --------------------
   PART 2 – IMAGE SWIPER
   -------------------- */
.section-gallery {
  width: 100%;
  height: 930px; /* keep spec */
  position: relative;
  background: radial-gradient(circle at top, #050d24 0%, #02030a 55%, #000 100%);
  padding: 4.2rem 6%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.8rem;
  color: #e4ecff;
  overflow: hidden;
}

.gallery-glow {
  position: absolute;
  inset: -20%;
  background:
    radial-gradient(circle at 15% 0%, rgba(0, 243, 255, 0.18), transparent 55%),
    radial-gradient(circle at 85% 100%, rgba(99, 102, 241, 0.35), transparent 60%);
  opacity: 0.9;
  pointer-events: none;
}

.gallery-header {
  position: relative;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2.5rem;
  z-index: 1;
}

.gallery-title-block h2 {
  font-size: 2.2rem;
  margin-bottom: 0.8rem;
  color: #f7fbff;
}

.gallery-title-block p {
  max-width: 520px;
  font-size: 0.96rem;
  color: #b6c7ff;
}

.gallery-tag {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: #62f0ff;
  margin-bottom: 0.7rem;
}

.gallery-meta {
  font-size: 0.88rem;
  color: #9cb4ff;
  max-width: 260px;
  text-align: right;
}

.swiper-container {
  max-width: 1220px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.swiper {
  width: 100%;
  padding: 1.8rem 0 2.3rem;
}

.swiper-slide {
  width: 320px;
  height: 420px;
  border-radius: 26px;
  overflow: hidden;
  background: radial-gradient(circle at top left, rgba(96, 236, 255, 0.22), rgba(4, 13, 40, 1));
  box-shadow:
    0 25px 60px rgba(0, 0, 0, 0.9),
    0 0 35px rgba(0, 248, 255, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  isolation: isolate;
}

.swiper-slide img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.85;
  transform: scale(1.06);
  transition: transform 0.8s ease, opacity 0.8s ease;
  z-index: -2;
}

.slide-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to top, rgba(1, 6, 25, 0.96), rgba(3, 17, 49, 0.1)),
    radial-gradient(circle at top, rgba(0, 255, 255, 0.18), transparent 55%);
  mix-blend-mode: soft-light;
  z-index: -1;
}

.slide-content {
  padding: 1.5rem 1.6rem 1.5rem;
  color: #f5f9ff;
}

.slide-tag {
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  opacity: 0.8;
  margin-bottom: 0.4rem;
  color: #78f5ff;
}

.slide-title {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.slide-text {
  font-size: 0.86rem;
  color: #c3d3ff;
}

.swiper-slide:hover img {
  transform: scale(1.1);
  opacity: 1;
}

.swiper-pagination-bullet {
  background: #69dfff;
  opacity: 0.35;
}

.swiper-pagination-bullet-active {
  opacity: 1;
  box-shadow: 0 0 12px rgba(0, 240, 255, 0.9);
}

/* --------------------
   PART 3 – REASONS / CARDS
   -------------------- */
.section-reasons {
  width: 100%;
  padding: 5.2rem 6% 6rem;
  background: radial-gradient(circle at bottom, #020614 0%, #010208 60%, #000 100%);
  display: flex;
  justify-content: center;
}

.reasons-inner {
  max-width: 1200px;
  width: 100%;
}

.reasons-header {
  text-align: center;
  margin-bottom: 3.1rem;
}

.reasons-header span {
  font-size: 0.8rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #66e7ff;
  font-weight: 600;
}

.reasons-header h2 {
  font-size: 2rem;
  margin-top: 0.75rem;
  color: #f5f7ff;
}

.reasons-header p {
  max-width: 560px;
  margin: 0.9rem auto 0;
  color: #a0b2ff;
  font-size: 0.96rem;
}

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.9rem;
}

.reason-card {
  position: relative;
  background: linear-gradient(145deg, rgba(5, 16, 45, 0.96), rgba(9, 25, 65, 0.98));
  border-radius: 22px;
  padding: 1.9rem 1.7rem;
  border: 1px solid rgba(108, 235, 255, 0.4);
  box-shadow:
    0 22px 48px rgba(0, 0, 0, 0.76),
    0 0 26px rgba(0, 249, 255, 0.28);
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
  overflow: hidden;
}

.reason-card::before {
  content: "";
  position: absolute;
  inset: -30%;
  background: radial-gradient(circle at top, rgba(87, 223, 255, 0.25), transparent 60%);
  opacity: 0.7;
  pointer-events: none;
}

.reason-icon {
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid rgba(155, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  position: relative;
  overflow: hidden;
  background: rgba(4, 15, 40, 0.95);
}

.reason-icon-glow {
  position: absolute;
  inset: -40%;
  background: conic-gradient(
    from 180deg,
    rgba(0, 234, 255, 0.6),
    transparent,
    rgba(123, 97, 255, 0.7),
    transparent
  );
  opacity: 0.6;
  filter: blur(4px);
  animation: rotateGlow 14s linear infinite;
}

.reason-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: #f1f4ff;
}

.reason-text {
  font-size: 0.94rem;
  color: #b5c7ff;
}

.reason-meta {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: #88f1ff;
  margin-top: 0.4rem;
}

/* --------------------
   RESPONSIVE
   -------------------- */
@media (max-width: 992px) {
  .hero-inner {
    grid-template-columns: 1fr;
  }

  .hero-badge {
    justify-self: flex-start;
    margin-top: 1.6rem;
  }

  .section-hero {
    height: auto;
    padding: 4.3rem 7% 4.7rem;
  }

  .section-gallery {
    height: auto;
    padding: 3.7rem 7%;
  }

  .reasons-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .gallery-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .gallery-meta {
    text-align: left;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.3rem;
  }

  .hero-points {
    grid-template-columns: 1fr;
  }

  .reasons-grid {
    grid-template-columns: 1fr;
  }

  .swiper-slide {
    width: 260px;
    height: 360px;
  }
}

/* --------------------
   KEYFRAMES
   -------------------- */
@keyframes rotateGlow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
