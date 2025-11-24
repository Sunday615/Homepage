<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const section = ref(null)
let ctx // ไว้เก็บ context ของ gsap

onMounted(() => {
  ctx = gsap.context(() => {
    // TITLE
    gsap.from('.hiw-title', {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section.value,
        start: 'top 80%',
      },
    })

    // TIMELINE LINE
    gsap.from('.hiw-line', {
      scaleY: 0,
      transformOrigin: 'center top',
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section.value,
        start: 'top 75%',
      },
    })

    // TIMELINE DOTS
    gsap.from('.hiw-dot', {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      stagger: 0.15,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: section.value,
        start: 'top 70%',
      },
    })

    // STEPS 1 → 2 → 3
    const tlSteps = gsap.timeline({
      scrollTrigger: {
        trigger: section.value,
        start: 'top 65%',
      },
    })

    tlSteps
      .from(['.hiw-step--1', '.hiw-icon-card--1'], {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: 'power3.out',
      })
      .from('.hiw-step--2', {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: 'power3.out',
      })
      .from(['.hiw-step--3', '.hiw-icon-card--3'], {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: 'power3.out',
      })
  }, section)
})

onBeforeUnmount(() => {
  if (ctx) ctx.revert()
})
</script>

<template>
  <section class="hiw" ref="section">
    <div class="hiw-inner">
      <!-- TITLE -->
      <h2 class="hiw-title">
        ຂັ້ນຕອນການໂອນເງິນຂ້າມ
        <br />
        ທະນາຄານຜ່ານຕູ້ ATM
      </h2>

      <!-- GRID -->
      <div class="hiw-layout">
        <!-- LEFT COLUMN -->
        <div class="hiw-col hiw-col--left">
          <!-- STEP 1 -->
          <div class="hiw-step hiw-step--1">
            <h3>ຂັ້ນຕອນທີ 1 ຈຸດໃຫ້ບໍລິການ</h3>
            <p>
              ການໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM ສາມາດເຮັດທຸລະກຳການໂອນໄດ້ທີ່ຕູ້ ATM ດັ່ງລຸ່ມນີ້:
              <br />
              1. ບັດ ATM ຂອງທະນາຄານ (A) ສາມາດນຳໃຊ້ຕູ້ຂອງທະນາຄານ (A) ເພື່ອໂອນຫາຜູ້ຮັບປາຍທາງທີ່ທະນາຄານ (B)
              <br />
              2. ບັດທະນາຄານ (A) ສາມາດນຳໃຊ້ຕູ້ຂອງທະນາຄານ (B) ເພື່ອໂອນຫາຜູ້ຮັບປາຍທາງທີ່ທະນາຄານ (C)
            </p>
          </div>

          <!-- SPACER (ตำแหน่ง icon step 2) -->
          <div class="hiw-spacer"></div>

          <!-- STEP 3 -->
          <div class="hiw-step hiw-step--3">
            <h3>ຂັ້ນຕອນທີ 3 ການເຮັດທຸລະກຳ</h3>
            <p>
              1. ນຳບັດເອທີເອັມປ່ອນເຂົ້າຕູ້ເອທີເອັມ ເຮັດຕາມຂັ້ນຕອນການໂອນເງິນ ແລະ
              ປ້ອນເລກໜ້າບັດ 16 ໂຕເລກຂອງຜູ້ຮັບປາຍທາງ ກົດຈຳນວນເງິນ ແລ້ວຢືນຢັນ
              <br />
              2. ຜູ້ຮັບປາຍທາງຈະໄດ້ຮັບເງິນໂອນທັນທີ ຫຼັງຈາກທຸລະກຳການໂອນເງິນສຳເລັດ.
            </p>
          </div>
        </div>

        <!-- CENTER COLUMN (TIMELINE) -->
        <div class="hiw-col hiw-col--center">
          <div class="hiw-timeline">
            <div class="hiw-line"></div>
            <span class="hiw-dot hiw-dot--1"></span>
            <span class="hiw-dot hiw-dot--2"></span>
            <span class="hiw-dot hiw-dot--3"></span>
          </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="hiw-col hiw-col--right">
          <!-- ICON STEP 1 -->
          <div class="hiw-icon-card hiw-icon-card--1">
            <div class="hiw-icon">
              <img src="../../assets/Logo-lapnet/logolapnet.PNG" alt="LAPNet logo" />
            </div>
          </div>

          <!-- STEP 2 -->
          <div class="hiw-step hiw-step--2">
            <h3>ຂັ້ນຕອນທີ 2 ສະມາຊິກທີ່ໃຫ້ບໍລິການ</h3>
            <p>
              ສາມາດເລືອກໃຊ້ຕູ້ ATM ໃດກໍໄດ້ ພາຍໃນ 16 ທະນາຄານທີ່ເປັນສະມາຊິກຂອງບໍລິສັດ LAPNet
            </p>
          </div>

          <!-- ICON STEP 3 -->
          <div class="hiw-icon-card hiw-icon-card--3">
            <div class="hiw-icon">
              <img src="../../assets/Logo-lapnet/textlogo.PNG" alt="LAPNet text logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hiw {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 940px;
  overflow: hidden;
  color: #e5e7eb;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  background: #020617;
  background: radial-gradient(circle at top, #1871ff 0, #001261 55%, #000 100%);
}

/* glow */
.hiw::before {
  content: '';
  position: absolute;
  top: -140px;
  left: 50%;
  width: 460px;
  height: 460px;
  transform: translateX(-50%);
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.7);
  filter: blur(110px);
  opacity: 0.7;
  pointer-events: none;
}

.hiw-inner {
  position: relative;
  width: 100%;
  max-width: 1120px;
  padding: 48px 32px;
}

/* TITLE */
.hiw-title {
  margin-bottom: 60px;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
}

/* LAYOUT */
.hiw-layout {
  display: grid;
  grid-template-columns: 1.4fr 0.2fr 1.4fr;
  column-gap: 48px;
  align-items: center;
}

/* COLUMNS */
.hiw-col--left,
.hiw-col--right {
  display: grid;
  grid-template-rows: repeat(3, minmax(0, auto));
  row-gap: 64px;
}

/* spacer */
.hiw-spacer {
  min-height: 40px;
}

/* TIMELINE */
.hiw-col--center {
  display: flex;
  justify-content: center;
}

.hiw-timeline {
  position: relative;
  width: 4px;
  height: 360px;
}

.hiw-line {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 2px;
  border-radius: 999px;
  background: linear-gradient(to bottom, #1d4ed8, #38bdf8);
}

.hiw-dot {
  position: absolute;
  left: 50%;
  width: 14px;
  height: 14px;
  transform: translateX(-50%);
  border-radius: 999px;
  background: radial-gradient(circle at 30% 20%, #e0f2fe, #3b82f6);
  box-shadow: 0 0 18px rgba(37, 99, 235, 0.9);
}

.hiw-dot--1 {
  top: 0;
}

.hiw-dot--2 {
  top: 50%;
  transform: translate(-50%, -50%);
}

.hiw-dot--3 {
  bottom: 0;
}

/* STEPS TEXT */
.hiw-step h3 {
  margin-bottom: 6px;
  font-size: 22px;
  font-weight: 600;
  color: #fff36f;
}

.hiw-step p {
  font-size: 16px;
  line-height: 1.7;
  color: #feffff;
}

/* ICON CARDS */
.hiw-icon-card {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: flex-start;
  width: 80px;
  height: 80px;
  border-radius: 24px;
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(59, 130, 246, 0.7);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.9);
}

.hiw-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 18px;
  background: radial-gradient(circle at 30% 20%, #e5f2ff, #3b82f6);
  font-size: 30px;
  color: #020617;
}

.hiw-icon img {
  max-width: 70%;
  max-height: 70%;
}

/* align icons */
.hiw-icon-card--1,
.hiw-icon-card--3 {
  justify-self: flex-end;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .hiw-inner {
    padding: 32px 20px;
  }

  .hiw-title {
    font-size: 36px;
    margin-bottom: 40px;
  }

  .hiw-layout {
    grid-template-columns: 1fr;
    row-gap: 32px;
  }

  .hiw-col--left,
  .hiw-col--right {
    grid-template-rows: none;
    row-gap: 32px;
  }

  .hiw-col--center {
    order: -1;
  }

  .hiw-timeline {
    height: 260px;
  }

  .hiw-icon-card {
    justify-self: flex-start;
  }
}
</style>
