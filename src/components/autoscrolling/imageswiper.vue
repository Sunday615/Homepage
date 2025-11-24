<template>
  <section class="swiper-section">
    <div class="swiper-inner">
      <div class="swiper-header">
        <h2>LIFE AT LAPNet</h2>
        <p>ກິດຈະກຳຕ່າງໆຂອງບໍລິສັດ Lao National Payment Network.</p>
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
        :navigation="true"
        class="image-swiper"
      >
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <div class="slide-card">
            <img :src="image.src" :alt="image.alt" />
            <div class="slide-caption">
              <h3>{{ image.title }}</h3>
              <p>{{ image.caption }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const modules = [Autoplay, Navigation];

const images = [
  {
    src: '/joinusswiper/swiper1.jpeg',
    alt: 'Image 1',
    title: 'ງານລ້ຽງ',
    caption: 'ງານລ້ຽງປີໃໝ່ລາວປີ 2025 ຂອງບໍລິສັດ LAPNet.',
  },
  {
    src: '/joinusswiper/swiper2.jpeg',
    alt: 'Image 2',
    title: 'ທ່ອງທ່ຽວ',
    caption: 'LAPNet ທ່ອງທ່ຽວທີ່ນະຄອນຫຼວງພະບາງປະຈຳປີ 2025.',
  },
  {
    src: '/joinusswiper/swiper3.jpeg',
    alt: 'Image 3',
    title: 'ທ່ອງທ່ຽວ',
    caption: 'LAPNet ທ່ອງທ່ຽວທີ່ນະຄອນຫຼວງພະບາງປະຈຳປີ 2025.',
  },
  {
    src: '/joinusswiper/swiper4.jpeg',
    alt: 'Image 4',
    title: 'ທ່ອງທ່ຽວ',
    caption: 'LAPNet ທ່ອງທ່ຽວທີ່ນະຄອນຫຼວງພະບາງປະຈຳປີ 2025.',
  },
  {
    src: '/joinusswiper/swiper5.jpeg',
    alt: 'Image 5',
    title: 'ທ່ອງທ່ຽວ',
    caption: 'LAPNet ທ່ອງທ່ຽວທີ່ນະຄອນຫຼວງພະບາງປະຈຳປີ 2025.',
  },
  {
    src: '/joinusswiper/swiper6.jpeg',
    alt: 'Image 6',
    title: 'ທ່ອງທ່ຽວ',
    caption: 'LAPNet ທ່ອງທ່ຽວທີ່ວັງວຽງປະຈຳປີ 2023.',
  },
];

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
</script>

<style scoped>
.swiper-section {
  width: 100%;
  padding: 40px 6vw;
  box-sizing: border-box;
  background: radial-gradient(circle at top left, #2657b5 0, rgb(11, 27, 98) 55%, #00133e 100%);
  display: flex;
  justify-content: center;
}

.swiper-inner {
  width: 100%;
  max-width: 1280px;
  color: #e5e7eb;
}

.swiper-header {
  text-align: center;
  margin-bottom: 24px;
}

.swiper-header h2 {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.swiper-header p {
  font-size: 0.95rem;
  opacity: 0.8;
}

.image-swiper {
  width: 100%;
  max-width: 1400px;
  height: 480px;
  display: flex;
  align-items: center;
  margin-inline: auto;
  position: relative;
}

.slide-card {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  overflow: hidden;
  background: #020617;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.9);
  transform: translateY(0);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.slide-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.95);
  transition: transform 0.6s ease, filter 0.3s ease;
}

.slide-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 30px 70px rgba(15, 23, 42, 1);
}

.slide-card:hover img {
  transform: scale(1.05);
  filter: brightness(1);
}

/* Small overlay for description */
.slide-caption {
  position: absolute;
  left: 50%;
  bottom: 14px;
  transform: translateX(-50%);
  max-width: 90%;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(6px);
  display: flex;
  flex-direction: column;
  gap: 2px;
  pointer-events: none; /* don’t block clicks/drags */
}

.slide-caption h3 {
  font-size: 0.85rem;
  font-weight: 600;
  color: #e5e7eb;
}

.slide-caption p {
  font-size: 0.75rem;
  color: #cbd5f5;
}

/* ==== MINIMAL NAV BUTTONS ==== */
.image-swiper :deep(.swiper-button-next),
.image-swiper :deep(.swiper-button-prev) {
  width: auto;
  height: auto;
  background: transparent;
  border: none;
  box-shadow: none;
  top: 50%;
  transform: translateY(-50%);
  color: #e5e7eb;
  opacity: 0.7;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.image-swiper :deep(.swiper-button-next) {
  right: 10px;
}

.image-swiper :deep(.swiper-button-prev) {
  left: 10px;
}

.image-swiper :deep(.swiper-button-next::after),
.image-swiper :deep(.swiper-button-prev::after) {
  font-size: 20px;
  font-weight: 600;
}

.image-swiper :deep(.swiper-button-next:hover),
.image-swiper :deep(.swiper-button-prev:hover) {
  opacity: 1;
  transform: translateY(-50%) scale(1.05);
}

/* Responsive */
@media (max-width: 768px) {
  .swiper-section {
    padding-inline: 16px;
  }

  .image-swiper {
    height: 380px;
  }

  .swiper-header h2 {
    font-size: 2.4rem;
  }

  .slide-caption {
    bottom: 10px;
    padding: 6px 10px;
  }

  .slide-caption h3 {
    font-size: 0.8rem;
  }

  .slide-caption p {
    font-size: 0.7rem;
  }
}
</style>
