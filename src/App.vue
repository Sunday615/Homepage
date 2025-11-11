<script setup>
import homepageproduct from './components/autoscrolling/homepageproduct.vue';
import gridblog from './Views/Blog/gridblog/gridblogpage1.vue';
import { onMounted, ref } from 'vue'
import gridblogpage10 from './Views/Blog/gridblog/gridblogpage10.vue'
import gsap from 'gsap'


const overlay = ref(null)

// Called before new page enters
const beforeEnter = (el) => {
  gsap.set(el, { opacity: 0 })
}

// Enter animation for new route
const enter = (el, done) => {
  gsap.to(el, { opacity: 1, duration: 0.8, ease: "power2.out", onComplete: done })
}

// Leave animation with fade black effect
const leave = (el, done) => {
  const tl = gsap.timeline({ onComplete: done })
  tl.to(overlay.value, { opacity: 1, duration: 0.5, ease: "power2.inOut" }) // Fade to black
    .to(el, { opacity: 0, duration: 0.4 }, "<")
    .to(overlay.value, { opacity: 0, duration: 0.6, ease: "power2.inOut" }) // Fade back
}
</script>

<template>
  <div id="app">
    <transition @before-enter="beforeEnter" @enter="enter" @leave="leave" mode="out-in">
      <router-view    />
    </transition>


    <div ref="overlay" class="overlay"></div>
  </div>

    

 



</template>

<style scoped>




.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  pointer-events: none;
  z-index: 9999;
}

</style>
