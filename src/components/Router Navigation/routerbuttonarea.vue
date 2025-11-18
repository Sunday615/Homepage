<template>
  <div class="lang-container">
    <div class="lang-box">

      <!-- BLOCK 1 -->
      <div class="select-wrap" ref="leftBlock">
        <div class="selected" @click="open1 = !open1">
          <img :src="getFlag(source)" class="flag" />
          <span>{{ getName(source) }}</span>
        </div>
        <ul v-if="open1" class="dropdown-list">
          <li 
            v-for="lang in filteredSource" 
            :key="lang.code"
            @click="selectSource(lang.code)"
          >
            <img :src="lang.flag" class="flag" />
            <span>{{ lang.name }}</span>
          </li>
        </ul>
      </div>

      <!-- Swap -->
      <button 
        @click="swap" 
        class="swap-btn"
        ref="swapBtn"
      >
        <i class="fa-solid fa-repeat"></i>
      </button>

      <!-- BLOCK 2 -->
      <div class="select-wrap" ref="rightBlock">
        <div class="selected" @click="open2 = !open2">
          <img :src="getFlag(target)" class="flag" />
          <span>{{ getName(target) }}</span>
        </div>
        <ul v-if="open2" class="dropdown-list">
          <li 
            v-for="lang in filteredTarget" 
            :key="lang.code"
            @click="selectTarget(lang.code)"
          >
            <img :src="lang.flag" class="flag" />
            <span>{{ lang.name }}</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue"
import { useRouter } from "vue-router"
import { gsap } from "gsap"

const router = useRouter()

const languages = [
  { code: "la", name: "ລາວ", flag: "https://flagcdn.com/la.svg" },
  { code: "kh", name: "ກຳປູເຈຍ", flag: "https://flagcdn.com/kh.svg" },
  { code: "th", name: "ໄທ", flag: "https://flagcdn.com/th.svg" },
  { code: "vn", name: "ຫວຽດນາມ", flag: "https://flagcdn.com/vn.svg" },
  { code: "ch", name: "ຈີນ", flag: "https://flagcdn.com/cn.svg" },
]

const source = ref("kh")
const target = ref("la")

const open1 = ref(false)
const open2 = ref(false)

const leftBlock = ref(null)
const rightBlock = ref(null)
const swapBtn = ref(null)

const filteredSource = computed(() =>
  languages.filter(l => l.code !== target.value)
)

const filteredTarget = computed(() =>
  languages.filter(l => l.code !== source.value)
)

const getFlag = (code) => languages.find(l => l.code === code).flag
const getName = (code) => languages.find(l => l.code === code).name

const selectSource = (code) => {
  source.value = code
  open1.value = false
}

const selectTarget = (code) => {
  target.value = code
  open2.value = false
}

// ฟังก์ชันรวม ใช้ update route ทุกครั้งที่ source/target เปลี่ยน
const updateRoute = () => {
  const path = `/crossborder/${source.value}-${target.value}`

  // ถ้า path เดิมแล้ว ไม่ต้อง push ซ้ำ (กัน error / navigation duplicated)
  if (router.currentRoute.value.path === path) return

  router.push(path).catch((err) => {
    // กัน log error แปลก ๆ อย่าง NavigationDuplicated
    if (err && err.name !== "NavigationDuplicated") {
      console.error(err)
    }
  })
}

// GSAP animated swap
const swap = () => {
  const leftEl = leftBlock.value
  const rightEl = rightBlock.value
  const btnEl = swapBtn.value

  if (!leftEl || !rightEl || !btnEl) {
    const tmp = source.value
    source.value = target.value
    target.value = tmp
    updateRoute()
    return
  }

  const tl = gsap.timeline()

  // หมุนปุ่ม
  tl.to(btnEl, {
    rotation: "+=180",
    duration: 0.25,
    ease: "power2.inOut",
  })

  // ขยับ block เข้าหากัน
  tl.to(leftEl, {
    x: 40,
    scale: 0.97,
    opacity: 0.85,
    duration: 0.18,
    ease: "power2.in",
  }, "<")

  tl.to(rightEl, {
    x: -40,
    scale: 0.97,
    opacity: 0.85,
    duration: 0.18,
    ease: "power2.in",
  }, "<")

  // สลับค่าตรงกลาง animation
  tl.add(() => {
    const tmp = source.value
    source.value = target.value
    target.value = tmp
    updateRoute()
  })

  // กลับที่ พร้อม bounce นิด ๆ
  tl.to(leftEl, {
    x: 0,
    scale: 1,
    opacity: 1,
    duration: 0.22,
    ease: "back.out(1.6)",
  })

  tl.to(rightEl, {
    x: 0,
    scale: 1,
    opacity: 1,
    duration: 0.22,
    ease: "back.out(1.6)",
  }, "<")
}

// ถ้าอยากให้เปลี่ยน path ตอนเปลี่ยนจาก dropdown ด้วย -> ใช้ watch นี้
watch([source, target], () => {
  updateRoute()
})
</script>


<style scoped>
.lang-container {
  width: 700px;
  height: 100px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.lang-box {
  background: linear-gradient(135deg, #001072, #5ab3dd);
  padding: 42px 48px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  z-index: 999;
  gap: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
}

.select-wrap {
  position: relative;
  width: 250px;
}

.selected {
  background: rgba(0,0,0,0.35);
  color: #fff;
  padding: 12px 16px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  backdrop-filter: blur(4px);
}

.flag {
  width: 24px;
  height: 17px;
  border-radius: 4px;
}

.dropdown-list {
  position: absolute;
  width: 100%;
  background: #0e0e0e;
  border-radius: 12px;
  margin-top: 6px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,0.35);
  z-index: 10;
}

.dropdown-list li {
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: #fff;
}

.dropdown-list li:hover {
  background: rgba(255,255,255,0.1);
}

.swap-btn {
  background: rgba(0,0,0,0.35);
  color: #fff;
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  /* so GSAP rotation looks centered */
  transform-origin: center;
}
</style>
