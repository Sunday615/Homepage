<template>
  <section ref="sectionRef" class="tech-section">
    <!-- พื้นหลังแสง -->
    <div class="orb orb-main"></div>
    <div class="orb orb-left"></div>
    <div class="orb orb-right"></div>

    <div class="section-inner">
      <!-- หัวข้อใหญ่ -->
      <h1 class="hero-title">
        ຜົນປະໂຫຍດທີ່ໄດ້ຮັບ<br />
        <span style="font-size: 40px;">ດ້ານທະນາຄານສະມາຊິກ ແລະ ດ້ານລູກຄ້າຂອງທະນາຄານ.</span>
      </h1>

      <!-- Card ใหญ่ 2 ใบ -->
      <div class="card-row">
        <article class="big-card" v-for="card in cards" :key="card.title">
          <div class="big-card-header">
            <div class="icon-wrap">
              <i :class="card.icon"></i>
            </div>
            <h2 class="big-card-title">{{ card.title }}</h2>
          </div>

          <p class="big-card-text">
            {{ card.text }}
          </p>

          <div class="big-card-footer">
            <span
              v-for="tag in card.tags"
              :key="tag"
              class="badge"
            >
              {{ tag }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

const sectionRef = ref(null)


const cards = [
  {
    icon: "fa-solid fa-building-columns",
    title: 'ຜົນປະໂຫຍດທີ່ໄດ້ຮັບ',
    text: 'ຜະລິດຕະພັນ ການໂອນເງິນຂ້າມທະນາຄານເທິງມືຖືນີ້ ຈະຊ່ວຍອຳນວຍຄວາມສະດວກໃຫ້ແກ່ມວນຊົນໃນການດຳເນີນທຸລະກຳທາງການເງິນຢູ່ເທິງມືຖືໄດ້ງ່າຍ ແລະ ວ່ອງໄວຂື້ນ ໂດຍນຳໃຊ້ Applications ຂອງແຕ່ລະທະນາຄານທຸລະກິດທີ່ເປັນສະມາຊິກຂອງບໍລິສັດ LAPNet, ຕາມຄຳຂວັນທີ່ກ່າວໄວ້ວ່າ: “ ທຸກທີ່ ທຸກເວລາ ທຸກຊ່ອງທາງການຊຳລະ”.',

  },
  {
    icon: "fa-solid fa-users",
    title: '​ເງື່ອນໄຂການໃຊ້ບໍລິການ',
    text: 'ລຸກຄ້ານຳໃຊ້ Application ຂອງທະນາຄານ ທີ່ຕົນເອງມີ ດຳເນີນທຸລະກຳການຊໍາລະຄ່າສິນຄ້າ - ບໍລິການ ຫຼື ອື່ນໆຂ້າມທະນາຄານໄດ້ ດ້ວຍການສະແກນ QR Code ທີ່ຮ້ານຄ້າ ທີ່ມີສັນຍາລັກ ປ້າຍທີ່ລະບຸວ່າ ຊໍາລະຂ້າມທະນາຄານຜ່ານ LAPNet QR Pay.”',
 
  },
]

onMounted(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.9, ease: 'power3.out' },
    })

    tl.from('.hero-title', { y: 40, opacity: 0 })
      .from('.card-row', { y: 40, opacity: 0 }, '-=0.4')
      .from('.big-card', { y: 30, opacity: 0, stagger: 0.2 }, '-=0.4')

    // อนิเมชันลอยของวงแสง
    gsap.to('.orb-main', {
      y: -20,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
    gsap.to('.orb-left', {
      y: 15,
      x: -10,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
    gsap.to('.orb-right', {
      y: -10,
      x: 12,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, sectionRef)

  onBeforeUnmount(() => {
    ctx.revert()
  })
})
</script>

<style scoped>
.tech-section {
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
  color: #f7fbff;
  background: radial-gradient(circle at top, #1b2b4c 0%, #020713 55%, #00020a 100%);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text',
    'Inter', sans-serif;
}

/* วงแสงพื้นหลัง */
.orb {
  position: absolute;
  border-radius: 999px;
  filter: blur(40px);
  opacity: 0.8;
  pointer-events: none;
}
.orb-main {
  width: 900px;
  height: 900px;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(94, 140, 255, 0.9), transparent 60%);
}
.orb-left {
  width: 260px;
  height: 260px;
  left: -60px;
  bottom: 40px;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.7), transparent 70%);
}
.orb-right {
  width: 260px;
  height: 260px;
  right: -40px;
  top: 120px;
  background: radial-gradient(circle, rgba(0, 119, 255, 0.9), transparent 70%);
}

/* เนื้อหาด้านใน */
.section-inner {
  position: relative;
  z-index: 1;
  max-width: 1160px;
  height: 100%;
  margin: 0 auto;
  padding: 60px 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
}

/* หัวข้อใหญ่ */
.hero-title {
  font-size: clamp(2.6rem, 3.8vw, 3.4rem);
  line-height: 1.1;
  margin: 0;
  font-weight: 700;
  color: #eef4ff;
}
.hero-title span {
  background: linear-gradient(120deg, #5fd4ff, #9baeff, #ffffff);
  -webkit-background-clip: text;
  color: transparent;
}

/* แถว card */
.card-row {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

/* Card ใหญ่ */
.big-card {
  flex: 1;
  min-width: 260px;
  background: radial-gradient(circle at top left, #202956, #050818);
  border-radius: 24px;
  padding: 22px 22px 20px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.85);
  border: 1px solid rgba(132, 168, 255, 0.55);
  position: relative;
  overflow: hidden;
}
.big-card::before {
  content: '';
  position: absolute;
  inset: -40%;
  background: radial-gradient(circle at top, rgba(115, 177, 255, 0.25), transparent 60%);
  opacity: 0.85;
  pointer-events: none;
}
.big-card-header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}
.icon-wrap {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: radial-gradient(circle at top, #4fc3ff, #1b37ff);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 26px rgba(74, 151, 255, 0.9);
}
.icon-wrap span {
  font-size: 20px;
}
.big-card-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}
.big-card-text {
  position: relative;
  margin: 8px 0 16px;
  font-size: 13px;
  color: rgba(214, 227, 255, 0.9);
}

/* badge footer */
.big-card-footer {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.badge {
  font-size: 11px;
  padding: 5px 10px;
  border-radius: 999px;
  background: rgba(5, 15, 40, 0.8);
  border: 1px solid rgba(152, 188, 255, 0.8);
  color: rgba(225, 235, 255, 0.96);
}

/* responsive */
@media (max-width: 900px) {
  .section-inner {
    padding-inline: 20px;
  }
}
</style>
