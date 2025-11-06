<template>
  <div class="image-container">
    <img  ref="floatingImage" src="../../assets/Homepage/testvector.svg" alt="Floating" class="floating-img" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const floatingImage = ref(null);

onMounted(() => {
  gsap.to(floatingImage.value, {
    y: -40, // move up 20px
    duration: 2,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1, // infinite loop
  });
});
</script>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px; /* adjust as needed */
  overflow: hidden;
  width: 700px;
 

}

.floating-img {
  width: 100%;
  height: auto;

  
}
</style>
