<template>
  <div class="marvel-container">
    <h1 class="main-title">MARVEL GALLERY</h1>

    <swiper
      :modules="[Autoplay, EffectFade, Pagination]"
      effect="fade"
      :fade-effect="{ crossFade: true }"
      :loop="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :pagination="{
        clickable: true,
        el: '.swiper-pagination'
      }"
      class="marvel-swiper"
      @slideChange="onSlideChange"
    >
      <!-- Slides -->
      <swiper-slide
        v-for="(item, index) in slides"
        :key="index"
        class="slide"
        ref="cards"
      >
        <div class="image-wrapper">
          <img :src="item.image" alt="marvel image" class="slide-img" />

          <!-- Overlay -->
          <div class="overlay">
            <div class="text-box">
              <h2 class="slide-header">{{ item.header }}</h2>
              <p class="slide-title">{{ item.title }}</p>
            </div>
          </div>

          <!-- Status Bar -->
          <div class="status-bar">
            {{ currentSlide + 1 }} / {{ slides.length }}
          </div>
        </div>
      </swiper-slide>

      <!-- ✅ Pagination Bullets -->
      <div class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { gsap } from 'gsap'

/* 🖼️ Replace these URLs with your own */
const slides = [
  {
    image: 'https://images.unsplash.com/photo-1580522129392-6cc6a95f1a17?auto=format&fit=crop&w=1000&q=80',
    header: 'Iron Man',
    title: 'The genius, billionaire, playboy, philanthropist.'
  },
  {
    image: 'https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=1000&q=80',
    header: 'Captain America',
    title: 'A super soldier with a heart of gold.'
  },
  {
    image: 'https://images.unsplash.com/photo-1598133894001-58e9c5c7e0a1?auto=format&fit=crop&w=1000&q=80',
    header: 'Thor',
    title: 'The God of Thunder, protector of the realms.'
  },
  {
    image: 'https://images.unsplash.com/photo-1619441207975-fec7c5f4f21d?auto=format&fit=crop&w=1000&q=80',
    header: 'Black Widow',
    title: 'The ultimate spy with deadly precision.'
  },
  {
    image: 'https://images.unsplash.com/photo-1619441207975-fec7c5f4f21d?auto=format&fit=crop&w=1000&q=80',
    header: 'Hulk',
    title: 'The green powerhouse of unstoppable strength.'
  },
  {
    image: 'https://images.unsplash.com/photo-1606112225693-1b50b1a07c7e?auto=format&fit=crop&w=1000&q=80',
    header: 'Spider-Man',
    title: 'The friendly neighborhood hero swinging into action.'
  }
]

const cards = ref([])
const currentSlide = ref(0)

const onSlideChange = (swiper) => {
  currentSlide.value = swiper.realIndex
}

onMounted(() => {
  cards.value = Array.from(document.querySelectorAll('.text-box'))
  gsap.from(cards.value, {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    ease: 'power3.out'
  })
})
</script>

<style scoped>
.marvel-container {
  width: 90%;
  margin: 60px auto;
  text-align: center;
  background: linear-gradient(135deg, #ff0000, #8b0000);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  overflow: hidden;
}

.main-title {
  color: white;
  font-size: 2.5rem;
  margin-bottom: 30px;
  letter-spacing: 3px;
}

.marvel-swiper {
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.slide {
  position: relative;
  width: 100%;
  height: 500px;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 2s ease;
}

.slide:hover .slide-img {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 40px;
  box-sizing: border-box;
}

.text-box {
  color: #fff;
  text-align: center;
  animation: fadeInUp 1s ease;
}

.slide-header {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.slide-title {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* ✅ Status Bar */
.status-bar {
  position: absolute;
  top: 15px;
  right: 25px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.9rem;
}

/* ✅ Pagination Bullets */
.swiper-pagination-bullets {
  bottom: 15px !important;
}

.swiper-pagination-bullet {
  background: white !important;
  opacity: 0.6;
  width: 10px;
  height: 10px;
  margin: 0 6px !important;
  transition: 0.3s ease;
}

.swiper-pagination-bullet-active {
  background: #fff !important;
  transform: scale(1.3);
  opacity: 1;
}

@keyframes fadeInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
