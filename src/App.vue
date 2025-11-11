<script setup>
import homepageproduct from './components/autoscrolling/homepageproduct.vue';
import gridblog from './Views/Blog/gridblog/gridblogpage1.vue';
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

import blogdetail6 from './Views/Blog/blogdetailpage/blogdetail/blogdetail6.vue';
import Blogdetail7 from './Views/Blog/blogdetailpage/blogdetail/blogdetail7.vue';
import Blogdetail8 from './Views/Blog/blogdetailpage/blogdetail/blogdetail8.vue';
import Blogdetail9 from './Views/Blog/blogdetailpage/blogdetail/blogdetail9.vue';
import Blogdetail10 from './Views/Blog/blogdetailpage/blogdetail/blogdetail10.vue';
import Blogdetail11 from './Views/Blog/blogdetailpage/blogdetail/blogdetail11.vue';
import Blogdetail12 from './Views/Blog/blogdetailpage/blogdetail/blogdetail12.vue';
import Blogdetail13 from './Views/Blog/blogdetailpage/blogdetail/blogdetail13.vue';
import Blogdetail14 from './Views/Blog/blogdetailpage/blogdetail/blogdetail14.vue';
import Blogdetail15 from './Views/Blog/blogdetailpage/blogdetail/blogdetail15.vue';
import Blogdetail16 from './Views/Blog/blogdetailpage/blogdetail/blogdetail16.vue';
import Blogdetail17 from './Views/Blog/blogdetailpage/blogdetail/blogdetail17.vue';
import Blogdetail18 from './Views/Blog/blogdetailpage/blogdetail/blogdetail18.vue';
import Blogdetail19 from './Views/Blog/blogdetailpage/blogdetail/blogdetail19.vue';
import Blogdetail20 from './Views/Blog/blogdetailpage/blogdetail/blogdetail20.vue';
import Blogdetail21 from './Views/Blog/blogdetailpage/blogdetail/blogdetail21.vue';
import Blogdetail22 from './Views/Blog/blogdetailpage/blogdetail/blogdetail22.vue';
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
  <!-- <div id="app">
    <transition @before-enter="beforeEnter" @enter="enter" @leave="leave" mode="out-in">
      <router-view    />
    </transition>


    <div ref="overlay" class="overlay"></div>
  </div> -->
    <Blogdetail22></Blogdetail22>

 



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
