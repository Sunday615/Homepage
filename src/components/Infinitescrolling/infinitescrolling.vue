<template>
  <div class="scroll-container" @mouseenter="pauseScroll" @mouseleave="resumeScroll">
    <div
      class="scroll-content"
      :style="{ animationDuration: speed + 's' }"
      ref="scrollContent"
    >
      <!-- 16 cards duplicated for seamless infinite scroll -->
      <div class="card" v-for="(card, i) in doubledCards" :key="i">
        <img :src="card" alt="Credit Card" loading="lazy" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Your 16 card image URLs
const cards = [
  "/Cards/1.png",
  "/Cards/2.png",
  "/Cards/3.png",
  "/Cards/4.png",
  "/Cards/5.png",
  "/Cards/6.png",
  "/Cards/7.png",
  "/Cards/8.png",
  "/Cards/9.png",
  "/Cards/10.png",
  "/Cards/11.png",
  "/Cards/12.png",
  "/Cards/13.png",
  "/Cards/14.png",
  "/Cards/15.png",
  "/Cards/16.png",
];

// Duplicate cards to create smooth infinite effect
const doubledCards = computed(() => [...cards, ...cards]);

// Control animation speed (seconds for one full loop)
const speed = ref(60); // smaller = faster, larger = slower

// Pause/resume animation on hover
const scrollContent = ref(null);
const pauseScroll = () => (scrollContent.value.style.animationPlayState = "paused");
const resumeScroll = () => (scrollContent.value.style.animationPlayState = "running");
</script>

<style scoped>
.scroll-container {
  height: 800px; /* visible area height */
  width: 400px;
  overflow: hidden;
  position: relative;
}

.scroll-content {
  display: flex;
  flex-direction: column;
  animation: scrollUp linear infinite;
}

.card {
  width: 100%;
  height: 250px;
  margin: 8px 0;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Infinite scroll keyframes */
@keyframes scrollUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}
</style>
