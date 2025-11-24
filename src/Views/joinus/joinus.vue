<template>
  <navbarview2></navbarview2>
  <div class="why-choose-us-page">
    <!-- PART 1: Hero / Why Choose Us -->
    <section class="section section-1">
      <div class="section-1-inner">
        <div class="section-1-text">
          <h1>Why Choose Us</h1>
          <p>
            We build modern, scalable technology solutions that help your business grow faster,
            safer, and smarter.
          </p>

          <div class="reasons">
            <div class="reason-card">
              <h3>Cutting-Edge Tech</h3>
              <p>
                We use the latest frameworks, cloud-native tools, and AI-driven approaches.
              </p>
            </div>
            <div class="reason-card">
              <h3>Expert Team</h3>
              <p>
                Our engineers, designers, and product experts deliver quality at every step.
              </p>
            </div>
            <div class="reason-card">
              <h3>Proven Results</h3>
              <p>
                We focus on measurable impact: performance, security, and business value.
              </p>
            </div>
          </div>
        </div>

        <div class="section-1-visual">
          <div class="tech-card">
            <h2>Trusted Tech Partner</h2>
            <p>From MVPs to enterprise platforms, we’ve got you covered.</p>
            <ul>
              <li>Cloud & DevOps</li>
              <li>AI & Automation</li>
              <li>Scalable Architecture</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- PART 2: Image Swiper -->
    <section class="section section-2">
      <div class="section-2-inner">
        <div class="section-2-header">
        <h2>LIFE AT LAPNet</h2>
          <p>Take a quick look at our projects and the people behind them.</p>
        </div>

        <Swiper
          :modules="modules"
          :loop="true"
          :autoplay="{ delay: 2500, disableOnInteraction: false }"
          :slides-per-view="2.2"
          :centered-slides="true"
          :space-between="24"
          :breakpoints="swiperBreakpoints"
          :speed="800"
          class="work-swiper"
        >
          <SwiperSlide v-for="(image, index) in images" :key="index">
            <div class="slide-card">
              <img :src="image.src" :alt="image.alt" />
              <div class="slide-overlay">
                <h3>{{ image.title }}</h3>
                <p>{{ image.caption }}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    <!-- PART 3: Positions We Want To Hire -->
    <section class="section section-3">
      <div class="section-3-inner">
        <header class="section-3-header">
          <h2>Positions We’re Hiring</h2>
          <p>
            Join a high-performing team building the next generation of technology products.
          </p>
        </header>

        <div class="positions-grid">
          <div
            v-for="(role, index) in roles"
            :key="index"
            class="position-card"
          >
            <div class="position-header">
              <h3>{{ role.title }}</h3>
              <span class="tag">{{ role.type }}</span>
            </div>
            <p class="position-location">{{ role.location }}</p>
            <p class="position-desc">{{ role.description }}</p>

            <ul class="position-highlights">
              <li v-for="(item, i) in role.highlights" :key="i">
                {{ item }}
              </li>
            </ul>

            <button class="apply-button">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
  <mainfooter></mainfooter>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import navbarview2 from '../../components/navbar/navbarview2.vue';
import mainfooter from '../../components/footer/mainfooter.vue';
import 'swiper/css';

const modules = [Autoplay];

// Replace these with your real 6 images
const images = [
  {
    src: '/joinusswiper/swiper1.jpeg',
    alt: 'Project 1',
    title: 'Project 1',
    caption: 'High-performance web applications.',
  },
  {
    src: '/joinusswiper/swiper2.jpeg',
    alt: 'Project 2',
    title: 'Project 2',
    caption: 'Cloud-native microservices at scale.',
  },
  {
    src: '/joinusswiper/swiper3.jpeg',
    alt: 'Team Culture',
    title: 'Team Culture',
    caption: 'Collaborative teams and strong ownership.',
  },
  {
    src: '/joinusswiper/swiper4.jpeg',
    alt: 'UI UX',
    title: 'UI / UX',
    caption: 'Modern, clean, and intuitive interfaces.',
  },
  {
    src: '/joinusswiper/swiper5.jpeg',
    alt: 'AI Solutions',
    title: 'AI Solutions',
    caption: 'Smart automation and intelligent products.',
  },
  {
    src: '/joinusswiper/swiper6.jpeg',
    alt: 'DevOps',
    title: 'DevOps',
    caption: 'Reliable pipelines and fast delivery.',
  },
];

// Wider slides on desktop/tablet
const swiperBreakpoints = {
  0: {
    slidesPerView: 1,
    centeredSlides: true,
  },
  640: {
    slidesPerView: 1.4,
    centeredSlides: true,
  },
  1024: {
    slidesPerView: 2.2,
    centeredSlides: true,
  },
};

const roles = [
  {
    title: 'Senior Frontend Engineer (Vue.js)',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    description:
      'Own the frontend architecture for scalable, responsive web applications.',
    highlights: [
      'Expert in Vue 3 & modern JS',
      'Strong eye for UI/UX and performance',
      'Experience with design systems',
    ],
  },
  {
    title: 'Backend Engineer (Node.js)',
    type: 'Full-time',
    location: 'Remote / On-site',
    description:
      'Design and build robust APIs and microservices powering our products.',
    highlights: [
      'Node.js, TypeScript, REST/GraphQL',
      'Experience with SQL/NoSQL databases',
      'Cloud-native and DevOps mindset',
    ],
  },
  {
    title: 'Product Designer',
    type: 'Full-time',
    location: 'Remote',
    description:
      'Craft beautiful, intuitive experiences for complex technology products.',
    highlights: [
      'Strong portfolio of product work',
      'Comfortable with design tools (Figma, etc.)',
      'User-centered, data-informed decisions',
    ],
  },
];
</script>

<style scoped>
.why-choose-us-page {
  background: #ffffff;
  color: #0b1120;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    sans-serif;
}

/* GENERAL SECTIONS */
.section {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 6vw;
  box-sizing: border-box;
}

/* PART 1 */
.section-1 {
  height: 800px; /* as requested */
  background: radial-gradient(circle at top left, #0ea5e9 0, #0f172a 55%, #020617 100%);
  color: #ffffff;
}

.section-1-inner {
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
  gap: 48px;
  align-items: center;
}

.section-1-text h1 {
  font-size: 3rem;
  line-height: 1.1;
  margin-bottom: 16px;
}

.section-1-text p {
  font-size: 1rem;
  opacity: 0.9;
  max-width: 520px;
  margin-bottom: 32px;
}

.reasons {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.reason-card {
  background: rgba(15, 23, 42, 0.85);
  border-radius: 16px;
  padding: 16px 14px;
  border: 1px solid rgba(148, 163, 184, 0.3);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.65);
}

.reason-card h3 {
  font-size: 0.95rem;
  margin-bottom: 8px;
}

.reason-card p {
  font-size: 0.8rem;
  opacity: 0.85;
}

.section-1-visual {
  display: flex;
  justify-content: flex-end;
}

.tech-card {
  background: linear-gradient(145deg, #0f172a, #0b1120);
  border-radius: 24px;
  padding: 24px 20px;
  border: 1px solid rgba(56, 189, 248, 0.6);
  box-shadow: 0 30px 60px rgba(8, 47, 73, 0.8);
  max-width: 350px;
}

.tech-card h2 {
  font-size: 1.4rem;
  margin-bottom: 8px;
}

.tech-card p {
  font-size: 0.9rem;
  margin-bottom: 16px;
  opacity: 0.9;
}

.tech-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tech-card li {
  font-size: 0.85rem;
  margin-bottom: 8px;
  position: relative;
  padding-left: 18px;
}

.tech-card li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 7px;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #38bdf8;
}

/* PART 2 */
.section-2 {
  height: 900px; /* as requested */
  background: #f8fafc;
}

.section-2-inner {
  max-width: 1200px;
  width: 100%;
}

.section-2-header {
  text-align: center;
  margin-bottom: 32px;
  font-family :Inter;
  font-weight: bold;
}

.section-2-header h2 {
  font-size: 4.2rem;
  color: #0f172a;
  margin-bottom: 8px;
}

.section-2-header p {
  font-size: 1rem;
  color: #64748b;
}

.work-swiper {
  width: 100%;
  max-width: 1400px; /* allows slides to be larger */
  height: 600px;
  display: flex;
  align-items: center;
  margin-inline: auto;
}

.slide-card {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  background: #020617;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.slide-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.9);
  transition: transform 0.5s ease;
}

.slide-card:hover img {
  transform: scale(1.05);
}

.slide-overlay {
  position: absolute;
  inset: auto 0 0 0;
  padding: 16px 18px 18px;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent);
  color: #e5e7eb;
}

.slide-overlay h3 {
  font-size: 1.1rem;
  margin-bottom: 4px;
}

.slide-overlay p {
  font-size: 0.9rem;
  opacity: 0.9;
}

/* PART 3 */
.section-3 {
  height: 800px; /* adjustable */
  background: linear-gradient(to bottom, #0f172a, #020617);
  color: #e5e7eb;
}

.section-3-inner {
  max-width: 1200px;
  width: 100%;
}

.section-3-header {
  text-align: center;
  margin-bottom: 32px;
}

.section-3-header h2 {
  font-size: 2.2rem;
  margin-bottom: 8px;
}

.section-3-header p {
  font-size: 1rem;
  color: #cbd5f5;
}

.positions-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.position-card {
  background: rgba(15, 23, 42, 0.95);
  border-radius: 20px;
  padding: 20px 18px;
  border: 1px solid rgba(56, 189, 248, 0.5);
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.9);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.position-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.position-header h3 {
  font-size: 1.1rem;
}

.tag {
  font-size: 0.8rem;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.2);
  color: #93c5fd;
  border: 1px solid rgba(59, 130, 246, 0.4);
}

.position-location {
  font-size: 0.85rem;
  color: #94a3b8;
}

.position-desc {
  font-size: 0.9rem;
  color: #e2e8f0;
}

.position-highlights {
  list-style: none;
  padding: 0;
  margin: 4px 0 0;
  font-size: 0.85rem;
  color: #cbd5f5;
}

.position-highlights li {
  margin-bottom: 4px;
  position: relative;
  padding-left: 16px;
}

.position-highlights li::before {
  content: '•';
  position: absolute;
  left: 0;
  top: -1px;
  font-size: 1rem;
  color: #38bdf8;
}

.apply-button {
  margin-top: auto;
  align-self: flex-start;
  margin-top: 12px;
  padding: 8px 16px;
  border-radius: 999px;
  border: none;
  background: linear-gradient(to right, #1d4ed8, #0ea5e9);
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;
  box-shadow: 0 12px 25px rgba(37, 99, 235, 0.55);
}

.apply-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 18px 40px rgba(37, 99, 235, 0.7);
  opacity: 0.95;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .section-1-inner {
    grid-template-columns: 1fr;
  }

  .section-1 {
    height: auto;
    padding-block: 48px;
  }

  .section-2 {
    height: auto;
    padding-block: 40px;
  }

  .section-3 {
    height: auto;
    padding-block: 40px;
  }

  .positions-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .section {
    padding-inline: 16px;
  }

  .reasons {
    grid-template-columns: 1fr;
  }

  .work-swiper {
    height: 420px;
  }

  .positions-grid {
    grid-template-columns: 1fr;
  }
}
</style>
