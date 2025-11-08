<template>
  <div class="image-swiper">
    <Swiper
      :modules="[Autoplay, EffectFade, Navigation]"
      effect="fade"
      :speed="transitionSpeed"
      :autoplay="{ delay: delayTime, disableOnInteraction: false }"
      navigation
      loop
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="mySwiper"
    >
      <SwiperSlide v-for="(img, index) in images" :key="index">
        <img :src="img" class="slide-image" />
      </SwiperSlide>
    </Swiper>

    <!-- 🔹 แสดงสถานะภาพ -->
    <div class="indicator">
      {{ currentSlide + 1 }} / {{ totalSlides }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

// ✅ ต้อง import CSS เหล่านี้
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// 🔹 ใส่ภาพของคุณเองใน assets/
import img1 from "../../assets/ImageSwiper/1.png";
import img2 from "../../assets/ImageSwiper/2.png";
import img3 from "../../assets/ImageSwiper/3.png";
import img4 from "../../assets/ImageSwiper/4.png";
import img5 from "../../assets/ImageSwiper/5.png";
import img6 from "../../assets/ImageSwiper/6.png";
import img7 from "../../assets/ImageSwiper/7.png";




const images = [img1, img2, img3 , img4 , img5 , img6 , img7 ];

// 🔹 ปรับค่าความเร็ว
const delayTime = 3000;
const transitionSpeed = 1000;

// 🔹 เก็บข้อมูล Swiper
const swiperInstance = ref(null);
const currentSlide = ref(0);
const totalSlides = images.length;

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};
const onSlideChange = () => {
  if (swiperInstance.value) {
    currentSlide.value = swiperInstance.value.realIndex;
  }
};
</script>

<style scoped>
.image-swiper {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ปุ่ม Next / Prev */
.swiper-button-next,
.swiper-button-prev {
  color: white;
  transition: opacity 0.3s;
}
.swiper-button-next:hover,
.swiper-button-prev:hover {
  opacity: 0.7;
}

/* ตัวเลขสถานะ */
.indicator {
  position: absolute;
  bottom: 20px;
  right: 30px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
}
</style>