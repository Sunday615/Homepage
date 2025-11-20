<template>
  <section class="hiw" ref="section">
    <div class="hiw-inner">
      <!-- TITLE -->
      <h2 class="hiw-title">ຂັ້ນຕອນການໂອນເງິນຂ້າມ <br> ທະນາຄານຜ່ານຕູ້ ATM</h2>

      <!-- GRID เหมือนในรูป -->
      <div class="hiw-layout">
        <!-- คอลัมน์ซ้าย -->
        <div class="hiw-col hiw-col--left">
          <!-- STEP 1 -->
          <div class="hiw-step hiw-step--1">
            <h3>ຂັ້ນຕອນທີ 1 ຈຸດໃຫ້ບໍລິການ</h3>
            <p>
              ການໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM ສາມາດເຮັດທຸລະກຳການໂອນໄດ້ທີ່ຕູ້ ATM ດັ່ງລຸ່ມນີ້: <br>
              1. ບັດ ATM ຂອງທະນາຄານ (A) ສາມາດນຳໃຊ້ຕູ້ຂອງທະນາຄານ (A) ເພື່ອໂອນຫາຜູ້ຮັບປາຍທາງທີ່ທະນາຄານ (B) <br>
              2. ບັດທະນາຄານ (A) ສາມາດນຳໃຊ້ຕູ້ຂອງທະນາຄານ (B) ເພື່ອໂອນຫາຜູ້ຮັບປາຍທາງທີ່ທະນາຄານ (C)
            </p>
          </div>

          <!-- ช่องว่างกลาง (ตำแหน่งเดียวกับ icon step 2) -->
          <div class="hiw-spacer"></div>

          <!-- STEP 3 -->
          <div class="hiw-step hiw-step--3">
            <h3>ຂັ້ນຕອນທີ 3 ການເຮັດທຸລະກຳ</h3>
            <p>
             1. ນຳບັດເອທີເອັມປ່ອນເຂົ້າຕູ້ເອທີເອັມ ເຮັດຕາມຂັ້ນຕອນການໂອນເງິນ ແລະ ປ້ອນເລກໜ້າບັດ 16 ໂຕເລກຂອງຜູ້ຮັບປາຍທາງ ກົດຈຳນວນເງິນ ແລ້ວຢືນຢັນ <br>
             2. ຜູ້ຮັບປາຍທາງຈະໄດ້ຮັບເງິນໂອນທັນທີ ຫຼັງຈາກທຸລະກຳການໂອນເງິນສຳເລັດ.
            </p>
          </div>
        </div>

        <!-- คอลัมน์กลาง : เส้น + จุด -->
        <div class="hiw-col hiw-col--center">
          <div class="hiw-timeline">
            <div class="hiw-line"></div>
            <span class="hiw-dot hiw-dot--1"></span>
            <span class="hiw-dot hiw-dot--2"></span>
            <span class="hiw-dot hiw-dot--3"></span>
          </div>
        </div>

        <!-- คอลัมน์ขวา -->
        <div class="hiw-col hiw-col--right">
          <!-- ICON STEP 1 -->
          <div class="hiw-icon-card hiw-icon-card--1">
            <div class="hiw-icon"><img src="../../assets/Logo-lapnet/logolapnet.PNG" alt=""></div>
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
            <div class="hiw-icon"><img src="../../assets/Logo-lapnet/textlogo.PNG" alt=""></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const section = ref(null)

onMounted(() => {
  const ctx = gsap.context(() => {
    // TITLE
    gsap.from(".hiw-title", {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section.value,
        start: "top 80%",
      },
    })

    // เส้น timeline
    gsap.from(".hiw-line", {
      scaleY: 0,
      transformOrigin: "center top",
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section.value,
        start: "top 75%",
      },
    })

    // จุด 3 จุด
    gsap.from(".hiw-dot", {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      stagger: 0.15,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: section.value,
        start: "top 70%",
      },
    })

    // STEP 1 → 2 → 3 (ตัวหนังสือ)
    const tlSteps = gsap.timeline({
      scrollTrigger: {
        trigger: section.value,
        start: "top 65%",
      },
    })

    tlSteps
      .from([".hiw-step--1", ".hiw-icon-card--1"], {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power3.out",
      })
      .from([".hiw-step--2"], {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power3.out",
      })
      .from([" .hiw-step--3", ".hiw-icon-card--3"], {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power3.out",
      })
  }, section)

  onBeforeUnmount(() => {
    ctx.revert()
  })
})
</script>

<style scoped>
/* MAIN CONTAINER */
.hiw {
  width: 100%;
  height: 940px;
  background: #020617;
  background: radial-gradient(circle at top, #020617 0, #020817 45%, #000 100%);
  color: #e5e7eb;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  position: relative;
  overflow: hidden;
}

/* glow เบา ๆ */
.hiw::before {
  content: "";
  position: absolute;
  width: 460px;
  height: 460px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.7);
  filter: blur(110px);
  top: -140px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.7;
  pointer-events: none;
}

.hiw-inner {
  position: relative;
  max-width: 1120px;
  width: 100%;
  padding: 48px 32px;
}

/* TITLE */
.hiw-title {
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 60px;
}

/* LAYOUT */
.hiw-layout {
  display: grid;
  grid-template-columns: 1.4fr 0.2fr 1.4fr;
  column-gap: 48px;
  align-items: center;
}

/* COLS */
.hiw-col--left,
.hiw-col--right {
  display: grid;
  grid-template-rows: repeat(3, minmax(0, auto));
  row-gap: 64px;
}

/* spacer ไว้ให้ช่องกลางในคอลัมน์ซ้าย */
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
  background: linear-gradient(to bottom, #1d4ed8, #38bdf8);
  border-radius: 999px;
}

.hiw-dot {
  position: absolute;
  left: 50%;
  width: 14px;
  height: 14px;
  border-radius: 999px;
  transform: translateX(-50%);
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

/* TEXT STEPS */
.hiw-step h3 {
  font-size: 22px;
  font-weight: 600;
  color: #fff36f;
  margin-bottom: 6px;
}

.hiw-step p {
  font-size: 16px;
  color: #9ca3af;
  line-height: 1.7;
}

/* ICON CARDS ขวา */
.hiw-icon-card {
  justify-self: flex-start;
  width: 80px;
  height: 80px;
  border-radius: 24px;
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(59, 130, 246, 0.7);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hiw-icon {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  background: radial-gradient(circle at 30% 20%, #e5f2ff, #3b82f6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #020617;
}

/* ตำแหน่ง icon card ให้ align กับจุดในรูป */
.hiw-icon-card--1 {
  justify-self: flex-end; /* อยู่ขวาบน */
}
.hiw-icon-card--3 {
  justify-self: flex-end; /* อยู่ขวาล่าง */
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
