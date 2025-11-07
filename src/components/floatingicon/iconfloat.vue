<template>
  <div class="floating-logo-container">
    <img
      v-for="(logo, index) in logos"
      :key="index"
      :src="logo"
      class="floating-logo"
      ref="logoRefs"
      :style="{ left: `${Math.random() * 90 + 5}%` }"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

// ✅ ใส่โลโก้ของคุณทั้งหมด 18 รูป
const logos = [
  'logos/logo1.png',
  'logos/logo2.png',
  'logos/logo3.png',
  'logos/logo4.png',
  'logos/logo5.png',
  'logos/logo6.png',
  'logos/logo7.png',
  'logos/logo8.png',
  'logos/logo9.png',
  'logos/logo10.png',
  'logos/logo11.png',
  'logos/logo12.png',
  'logos/logo13.png',
  'logos/logo14.png',
  'logos/logo15.png',
  'logos/logo16.png',
  'logos/logo17.png',
  'logos/logo18.png',
]

const logoRefs = ref([])

onMounted(() => {
  logoRefs.value.forEach((el, i) => {
    animateLogo(el)
  })
})

// 🔁 ฟังก์ชันให้โลโก้ลอยขึ้นแบบคลื่น แล้วหายเมื่อถึงบนสุด
function animateLogo(el) {
  const duration = 15 + Math.random() * 25
  const delay = Math.random() * 4
  const startY = window.innerHeight + Math.random() * 200
  const endY = -150
  const amplitude = 30 + Math.random() * 30 // ความกว้างของคลื่น
  const waveSpeed = 1 + Math.random() * 0.5

  // ตั้งค่าตำแหน่งเริ่มต้น
  gsap.set(el, {
    y: startY,
    x: Math.random() * window.innerWidth * 0.9,
    opacity: 1,
    scale: 0.8 + Math.random() * 0.4,
  })

  // สร้าง motion คลื่น
  gsap.to(el, {
    y: endY,
    duration,
    delay,
    ease: 'none',
    onUpdate() {
      // ทำให้เคลื่อนไหวเป็นคลื่น sine wave
      const progress = this.progress()
      const offsetX = Math.sin(progress * Math.PI * 2 * waveSpeed) * amplitude
      gsap.set(el, { x: parseFloat(el.dataset.startX || el._gsTransform?.x || 0) + offsetX })
    },
    onComplete() {
      // รีสตาร์ทเมื่อถึงข้างบน
      animateLogo(el)
    },
  })
  
}
</script>

<style scoped>
.floating-logo-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: transparent;
}

.floating-logo {
  position: absolute;
  width: 80px;
  height: 80px;
  object-fit: contain;
  user-select: none;
  pointer-events: none;
  will-change: transform;
}
</style>

