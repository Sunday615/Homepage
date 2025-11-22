<template>
  <div class="logo-container" ref="containerRef">
    <div
      v-for="(logo, index) in logos"
      :key="index"
      class="logo"
      :style="{ left: logo.left + 'px' }"
      ref="logoRefs"
    >
      <img :src="logo.src" :alt="logo.alt" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

const logoRefs = ref([]);
const containerRef = ref(null);

const logos = [
  { src: "/logos/logo1.png", alt: "BCEL Mobile", left: 40 },
  { src: "/logos/logo2.png", alt: "Shipstation", left: 140 },
  { src: "/logos/logo3.png", alt: "BigCommerce", left: 260 },
  { src: "/logos/logo4.png", alt: "TaxJar", left: 360 },
  { src: "/logos/logo5.png", alt: "Netsuite", left: 480 },
  { src: "/logos/logo6.png", alt: "Squarespace", left: 600 },

  { src: "/logos/logo7.png", alt: "BCEL Mobile", left: 40 },
  { src: "/logos/logo8.png", alt: "Shipstation", left: 140 },
  { src: "/logos/logo9.png", alt: "BigCommerce", left: 260 },
  { src: "/logos/logo10.png", alt: "TaxJar", left: 360 },
  { src: "/logos/logo11.png", alt: "Netsuite", left: 480 },
  { src: "/logos/logo12.png", alt: "Squarespace", left: 600 },

  { src: "/logos/logo13.png", alt: "BCEL Mobile", left: 40 },
  { src: "/logos/logo14.png", alt: "Shipstation", left: 140 },
  { src: "/logos/logo15.png", alt: "BigCommerce", left: 260 },
  { src: "/logos/logo16.png", alt: "Squarespace", left: 360 },
  { src: "/logos/logo17.png", alt: "TaxJar", left: 480 },
  { src: "/logos/logo18.png", alt: "Netsuite", left: 600 },
];

onMounted(() => {
  const items = logoRefs.value.filter(Boolean);

  const containerHeight = 600;
  const logoHeight = 110;
  const total = items.length;

  // กันไม่ให้โลโก้ชนกันแนวตั้ง
  const spacing = logoHeight * 1.4;       // ยิ่งมากยิ่งห่าง
  const distance = spacing * total;

  const startY = containerHeight + logoHeight; // เริ่มล่าง container
  const endY = startY - distance;              // จบเหนือ container ตามจำนวนโลโก้

  const travelDuration = 30;                   // ลอยช้า ๆ
  const slot = travelDuration / total;         // เวลาห่างกันของแต่ละโลโก้

  items.forEach((el, i) => {
    const delay = i * slot;

    // เริ่มใต้ container มองเห็นเลย
    gsap.set(el, {
      y: startY,
      opacity: 1,
      x: 0,
    });

    // ลอยขึ้นตรง ๆ เป็นระเบียบ (แกน Y)
    gsap.to(el, {
      y: endY,
      duration: travelDuration,
      ease: "none",
      delay,
      repeat: -1,
      repeatDelay: 0,
    });

    // 🎈 effect wave ตอนลอยขึ้น (แกน X)
    gsap.to(el, {
      x: i % 2 === 0 ? "+=40" : "-=40", // ซ้าย–ขวาสลับกัน
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      delay: delay * 0.3, // เลื่อนเฟส wave นิดหน่อยให้ไม่ขยับพร้อมกันหมด
    });
  });

  // PATTERN ของ container (ยังเหมือนเดิม)
  const container = containerRef.value;

  if (container) {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    tl.to(container, {
      duration: 6,
      y: -20,
      x: 10,
      rotation: 1.5,
    })
      .to(
        container,
        {
          duration: 6,
          y: -10,
          x: -15,
          rotation: -1.5,
        },
        "+=0"
      )
      .to(
        container,
        {
          duration: 6,
          y: 5,
          x: 5,
          rotation: 0,
        },
        "+=0"
      );
  }
});
</script>

<style scoped>
.logo-container {
  position: relative;
  width: 100%;
  height: 700px;
  overflow: hidden;
  margin: 0 auto;
}

.logo {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
}

.logo img {
  width: 70%;
  height: 70%;
  object-fit: contain;
}
</style>
