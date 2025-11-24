<template>
  <navbarview2></navbarview2>
  <div class="navigatorcontent">
            <img id="navigator-img" src="../../assets/joinus/navigatorjoinus.png" alt="" />
            <div class="navigator-info-container">
                <div class="titlenavigator">
                    <div data-aos="zoom-in-down" data-aos-duration="1000">
                        <p>ຮ່ວມງານກັບເຮົາ</p>
                    </div>
                </div>
                <div class="navigatorlink">
                    <div data-aos="zoom-out-up" data-aos-duration="1000">
                        <p>
                            ໜ້າຫຼັກ
                            <span style="padding-right: 40px; padding-left: 40px">
                                <i class="fa-solid fa-chevron-right"></i>
                            </span>
                            ສະມາຊິກ
                            <span style="padding-right: 40px; padding-left: 40px">
                                <i class="fa-solid fa-chevron-right"></i>
                            </span>
                            ຮ່ວມງານກັບເຮົາ
                        </p>
                    </div>
                </div>
            </div>
        </div>
  <div class="page-wrapper">
    <!-- PART 1: DESCRIPTION / HERO -->
    <section class="section-hero">
      <div class="hero-inner">
        <div>
          <div class="hero-eyebrow">Why choose us</div>
          <h1 class="hero-title">
            Build with a partner that’s
            <span class="hero-highlight">fast, reliable, and clear</span>.
          </h1>
          <p class="hero-text">
            We combine modern design, clean code, and human-centered thinking to
            deliver digital experiences your customers actually enjoy using.
            No noise, no clutter—just results.
          </p>

          <div class="hero-points">
            <div class="hero-point">
              <div class="hero-point-label">Efficiency</div>
              <div class="hero-point-title">Fewer revisions, faster launch</div>
              <p class="hero-point-text">
                A refined process that keeps you in the loop while avoiding
                endless back-and-forth.
              </p>
            </div>
            <div class="hero-point">
              <div class="hero-point-label">Clarity</div>
              <div class="hero-point-title">Focused on what matters</div>
              <p class="hero-point-text">
                We strip away the unnecessary and highlight exactly what your
                audience needs to see.
              </p>
            </div>
          </div>
        </div>

        <div class="hero-badge">
          <div class="hero-badge-number">98%</div>
          <div class="hero-badge-label">Client satisfaction score</div>
          <div class="hero-badge-footnote">
            Based on delivery, communication, and long-term performance.
          </div>
        </div>
      </div>
    </section>

    <!-- PART 2: IMAGE SWIPER (6 IMAGES) -->
    <section class="section-gallery">
      <div class="gallery-header">
        <div class="gallery-title-block">
          <div class="gallery-tag">Visual proof</div>
          <h2>See how our work feels in motion.</h2>
          <p>
            A clean, minimal blue-driven aesthetic that stays out of the way and
            lets your product shine. These slides showcase recent layouts and
            components.
          </p>
        </div>
        <div class="gallery-meta">
          Auto-scrolling gallery powered by SwiperJS.<br />
          Plug in your 6 images and you’re live.
        </div>
      </div>

      <div class="swiper-container">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <!-- Slide 1 -->
            <div class="swiper-slide">
              <img src="/slides/slide1.png" alt="Project preview 1" />
              <div class="slide-content">
                <div class="slide-tag">Dashboard</div>
                <div class="slide-title">Clean analytics layout</div>
                <div class="slide-text">
                  Minimal blue gradients, soft cards, and clear hierarchy.
                </div>
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="swiper-slide">
              <img src="/slides/slide2.png" alt="Project preview 2" />
              <div class="slide-content">
                <div class="slide-tag">Landing page</div>
                <div class="slide-title">Conversion-focused hero</div>
                <div class="slide-text">
                  Bold typography with quiet background visuals to keep
                  attention on your primary CTA.
                </div>
              </div>
            </div>

            <!-- Slide 3 -->
            <div class="swiper-slide">
              <img src="/slides/slide3.png" alt="Project preview 3" />
              <div class="slide-content">
                <div class="slide-tag">Mobile</div>
                <div class="slide-title">Responsive blue UI kit</div>
                <div class="slide-text">
                  Components built to adapt elegantly to any screen size.
                </div>
              </div>
            </div>

            <!-- Slide 4 -->
            <div class="swiper-slide">
              <img src="/slides/slide4.png" alt="Project preview 4" />
              <div class="slide-content">
                <div class="slide-tag">Brand</div>
                <div class="slide-title">Consistent visual language</div>
                <div class="slide-text">
                  Iconography and layout rules that keep your brand recognizable
                  everywhere.
                </div>
              </div>
            </div>

            <!-- Slide 5 -->
            <div class="swiper-slide">
              <img src="/slides/slide5.png" alt="Project preview 5" />
              <div class="slide-content">
                <div class="slide-tag">Product</div>
                <div class="slide-title">Feature-driven storytelling</div>
                <div class="slide-text">
                  Show your strongest moments with considered spacing and clean
                  labels.
                </div>
              </div>
            </div>

            <!-- Slide 6 -->
            <div class="swiper-slide">
              <img src="/slides/slide6.png" alt="Project preview 6" />
              <div class="slide-content">
                <div class="slide-tag">Experience</div>
                <div class="slide-title">Calm, confident interface</div>
                <div class="slide-text">
                  A quiet blue palette and micro-interactions that make the UI
                  feel trustworthy.
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
          <span>What makes us different</span>
          <h2>Three reasons teams keep choosing us.</h2>
          <p>
            From the first idea to launch day and beyond, we stay focused on
            clarity, speed, and reliability—so your product doesn’t just look
            good, it performs.
          </p>
        </div>

        <div class="reasons-grid">
          <div class="reason-card">
            <div class="reason-icon">⚡</div>
            <div class="reason-title">Fast, structured delivery</div>
            <p class="reason-text">
              Clear milestones, transparent timelines, and smooth communication.
              You always know what’s next.
            </p>
            <div class="reason-meta">Process</div>
          </div>

          <div class="reason-card">
            <div class="reason-icon">🎯</div>
            <div class="reason-title">Designs that convert</div>
            <p class="reason-text">
              Minimal, blue-driven visuals optimized for readability, clicks,
              and long-term engagement.
            </p>
            <div class="reason-meta">Impact</div>
          </div>

          <div class="reason-card">
            <div class="reason-icon">🤝</div>
            <div class="reason-title">Long-term partnership</div>
            <p class="reason-text">
              We don’t disappear after launch. We iterate, refine, and grow with
              your product.
            </p>
            <div class="reason-meta">Support</div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <mainfooter></mainfooter>
</template>

<script setup>
import { onMounted } from "vue";

// core Swiper class
import Swiper from "swiper";
import navbarview2 from "../../components/navbar/navbarview2.vue";
import mainfooter from "../../components/footer/mainfooter.vue";
// Swiper modules (v9+ / v11+)
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

onMounted(() => {
  // init Swiper
  const swiper = new Swiper(".mySwiper", {
    // register modules here
    modules: [Autoplay, FreeMode, Pagination],

    loop: true,
    speed: 6000, // smoother continuous motion
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
.navigatorcontent {
    width: 100%;
    height: 470px;
}

.navigator-info-container {
    width: 1000px;
    height: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#navigator-img {
    width: 100%;
    height: 470px;
    object-fit: cover;
    position: absolute;
    z-index: -1;
}

.titlenavigator p {
    font-size: 70px;
    color: #fff;
    font-family: 'Noto Sans Lao', sans-serif;
    font-weight: bold;
    padding-bottom: 70px;
}

.navigatorlink p {
    color: #fff;
    font-size: 20px;
    font-family: 'Noto Sans Lao', sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* global body styling inside scoped block */
:global(body) {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  background: #f5f7fb;
  color: #0b1b3b;
  line-height: 1.6;
}

.page-wrapper {
  width: 100%;
  overflow-x: hidden;
}

/* --------------------
   PART 1 – HERO / DESCRIPTION
   -------------------- */
.section-hero {
  width: 100%;
  height: 900px; /* as requested */
  background: radial-gradient(circle at top left, #e5f0ff, #f5f7fb);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
}

.hero-inner {
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-eyebrow {
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  color: #4a7dff;
  font-weight: 600;
  margin-bottom: 1rem;
}

.hero-title {
  font-size: 3rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #0a1650;
}

.hero-highlight {
  color: #2962ff;
}

.hero-text {
  font-size: 1.05rem;
  max-width: 540px;
  color: #44506b;
  margin-bottom: 2rem;
}

.hero-points {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}

.hero-point {
  background: #ffffff;
  border-radius: 18px;
  padding: 1.25rem 1.5rem;
  box-shadow: 0 18px 35px rgba(15, 35, 90, 0.06);
  border: 1px solid rgba(41, 98, 255, 0.08);
}

.hero-point-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #7b8ab5;
  margin-bottom: 0.35rem;
}

.hero-point-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #12224f;
}

.hero-point-text {
  font-size: 0.9rem;
  color: #66728f;
}

.hero-badge {
  justify-self: flex-end;
  align-self: center;
  background: linear-gradient(145deg, #2962ff, #4f8dff);
  color: #ffffff;
  border-radius: 22px;
  padding: 1.25rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  box-shadow: 0 18px 35px rgba(16, 47, 138, 0.35);
}

.hero-badge-number {
  font-size: 2.4rem;
  font-weight: 700;
}

.hero-badge-label {
  font-size: 0.85rem;
  opacity: 0.9;
}

.hero-badge-footnote {
  font-size: 0.75rem;
  opacity: 0.75;
}

/* --------------------
   PART 2 – IMAGE SWIPER
   -------------------- */
.section-gallery {
  width: 100%;
  height: 930px; /* as requested */
  background: #0f1b3e;
  padding: 4rem 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
  color: #e4ecff;
}

.gallery-header {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
}

.gallery-title-block h2 {
  font-size: 2.1rem;
  margin-bottom: 0.75rem;
  color: #ffffff;
}

.gallery-title-block p {
  max-width: 480px;
  font-size: 0.98rem;
  color: #b7c4ff;
}

.gallery-tag {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: #96b4ff;
  margin-bottom: 0.6rem;
}

.gallery-meta {
  font-size: 0.85rem;
  color: #97a7ff;
}

.swiper-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.swiper {
  width: 100%;
  padding: 1.5rem 0 2rem;
}

.swiper-slide {
  width: 320px; /* fixed width for continuous scroll */
  height: 420px;
  border-radius: 24px;
  overflow: hidden;
  background: linear-gradient(145deg, #1b2750, #111836);
  box-shadow: 0 18px 40px rgba(1, 10, 31, 0.7);
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
  opacity: 0.9;
  transform: scale(1.02);
  transition: transform 0.7s ease, opacity 0.7s ease;
  z-index: -1;
}

.swiper-slide::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(6, 13, 39, 0.95),
    rgba(5, 10, 32, 0.1)
  );
  z-index: -1;
}

.slide-content {
  padding: 1.4rem 1.5rem;
  color: #ffffff;
}

.slide-tag {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.7;
  margin-bottom: 0.3rem;
}

.slide-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.slide-text {
  font-size: 0.85rem;
  color: #c5d0ff;
}

.swiper-slide:hover img {
  transform: scale(1.07);
  opacity: 1;
}

.swiper-pagination-bullet {
  background: #5f83ff;
  opacity: 0.4;
}

.swiper-pagination-bullet-active {
  opacity: 1;
}

/* --------------------
   PART 3 – REASONS / CARDS
   -------------------- */
.section-reasons {
  width: 100%;
  padding: 5rem 5% 6rem;
  background: #f7f9ff;
  display: flex;
  justify-content: center;
}

.reasons-inner {
  max-width: 1200px;
  width: 100%;
}

.reasons-header {
  text-align: center;
  margin-bottom: 3rem;
}

.reasons-header span {
  font-size: 0.8rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #6284ff;
  font-weight: 600;
}

.reasons-header h2 {
  font-size: 2rem;
  margin-top: 0.75rem;
  color: #0a174a;
}

.reasons-header p {
  max-width: 540px;
  margin: 0.85rem auto 0;
  color: #707ea6;
  font-size: 0.98rem;
}

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.8rem;
}

.reason-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 1.75rem 1.5rem;
  border: 1px solid rgba(101, 135, 255, 0.12);
  box-shadow: 0 16px 30px rgba(112, 139, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.reason-icon {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 2px solid rgba(48, 100, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.reason-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #15245a;
}

.reason-text {
  font-size: 0.95rem;
  color: #6b7696;
}

.reason-meta {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #9aa5c4;
  margin-top: 0.3rem;
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
    margin-top: 1rem;
  }

  .section-hero {
    height: auto;
    padding: 4rem 6% 4.5rem;
  }

  .section-gallery {
    height: auto;
    padding: 3.5rem 6%;
  }

  .reasons-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }

  .hero-points {
    grid-template-columns: 1fr;
  }

  .gallery-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .reasons-grid {
    grid-template-columns: 1fr;
  }

  .swiper-slide {
    width: 260px;
    height: 360px;
  }
}
</style>

