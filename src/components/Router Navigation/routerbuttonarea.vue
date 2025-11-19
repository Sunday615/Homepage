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
          <li v-for="lang in filteredSource" :key="lang.code" @click="selectSource(lang.code)">
            <img :src="lang.flag" class="flag" />
            <span>{{ lang.name }}</span>
          </li>
        </ul>
      </div>

      <!-- Swap -->
      <button @click="swap" class="swap-btn" ref="swapBtn" :class="{ 'swap-disabled': isSwapLocked }"
        :disabled="isSwapLocked">
        <i class="fa-solid fa-repeat"></i>
      </button>

      <!-- BLOCK 2 -->
      <div class="select-wrap" ref="rightBlock">
        <div class="selected" @click="open2 = !open2">
          <img :src="getFlag(target)" class="flag" />
          <span>{{ getName(target) }}</span>
        </div>
        <ul v-if="open2" class="dropdown-list">
          <li v-for="lang in filteredTarget" :key="lang.code" @click="selectTarget(lang.code)">
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

// default เริ่มต้น
const source = ref("kh")
const target = ref("la")

const open1 = ref(false)
const open2 = ref(false)

const leftBlock = ref(null)
const rightBlock = ref(null)
const swapBtn = ref(null)

const isValidCode = (code) => languages.some(l => l.code === code)
const getFlag = (code) => languages.find(l => l.code === code)?.flag || ""
const getName = (code) => languages.find(l => l.code === code)?.name || ""

// filter รายการให้ตรงกับ rule:
// - ต้องมี la ฝั่งใดฝั่งหนึ่งเสมอ
// - ถ้าอีกฝั่งเป็น la → ฝั่งนี้เลือกได้ทุกประเทศยกเว้น la
// - ถ้าอีกฝั่งไม่ใช่ la → ฝั่งนี้ต้องเป็น la เท่านั้น
const filteredSource = computed(() => {
  if (target.value === "la") {
    return languages.filter(l => l.code !== "la")
  } else {
    return languages.filter(l => l.code === "la")
  }
})

const filteredTarget = computed(() => {
  if (source.value === "la") {
    return languages.filter(l => l.code !== "la")
  } else {
    return languages.filter(l => l.code === "la")
  }
})

// เคสพิเศษ: vn-la และ ch-la → ห้าม swap
const isSwapLocked = computed(() => {
  return (
    target.value === "la" &&
    (source.value === "vn" || source.value === "ch")
  )
})

// เลือกจาก BLOCK 1 (ซ้าย)
const selectSource = (code) => {
  if (!isValidCode(code)) return

  if (code === "la") {
    // ถ้าเลือก la ฝั่งซ้าย
    source.value = "la"
    // กันไม่ให้เป็น la-la
    if (target.value === "la") {
      const firstNonLa = languages.find(l => l.code !== "la")
      if (firstNonLa) target.value = firstNonLa.code
    }
  } else {
    // เลือกประเทศที่ไม่ใช่ la → ฝั่งขวาเป็น la auto
    source.value = code
    target.value = "la"
  }

  open1.value = false
}

// เลือกจาก BLOCK 2 (ขวา)
const selectTarget = (code) => {
  if (!isValidCode(code)) return

  if (code === "la") {
    // ถ้าเลือก la ฝั่งขวา
    target.value = "la"
    // กันไม่ให้เป็น la-la
    if (source.value === "la") {
      const firstNonLa = languages.find(l => l.code !== "la")
      if (firstNonLa) source.value = firstNonLa.code
    }
  } else {
    // เลือกประเทศที่ไม่ใช่ la → ฝั่งซ้ายเป็น la auto
    target.value = code
    source.value = "la"
  }

  open2.value = false
}

// อัปเดต route ให้ตาม pair ปัจจุบัน
const updateRoute = () => {
  const path = `/crossborder/${source.value}-${target.value}`

  if (router.currentRoute.value.path === path) return

  router.push(path).catch((err) => {
    if (err && err.name !== "NavigationDuplicated") {
      console.error(err)
    }
  })
}

// sync state จาก path (ให้ตรง rule: ต้องมี la, ห้าม la-la เป็นต้น)
const syncStateFromRoute = (path) => {
  const match = path.match(/\/crossborder\/([a-z]+)-([a-z]+)/)
  if (!match) {
    source.value = "kh"
    target.value = "la"
    return
  }

  let src = match[1]
  let tgt = match[2]

  if (!isValidCode(src) || !isValidCode(tgt)) {
    source.value = "kh"
    target.value = "la"
    return
  }

  // la-la → บังคับไม่ให้ la ทั้งคู่
  if (src === "la" && tgt === "la") {
    src = "la"
    const firstNonLa = languages.find(l => l.code !== "la")?.code || "kh"
    tgt = firstNonLa
  }
  // ทั้งสองไม่ใช่ la → บังคับให้ฝั่งขวาเป็น la
  else if (src !== "la" && tgt !== "la") {
    // ให้เก็บ src เดิม แล้วบังคับให้ tgt = la
    tgt = "la"
  }

  // วางค่าเข้า state
  source.value = src
  target.value = tgt
}

// redirect เคส la-vn → vn-la, la-ch → ch-la
const fixWrongOrder = (path) => {
  const clean = path.replace("/crossborder/", "")

  if (clean === "la-vn") {
    router.replace("/crossborder/vn-la")
    return true
  }

  if (clean === "la-ch") {
    router.replace("/crossborder/ch-la")
    return true
  }

  return false
}

// watch path: จัดการ redirect + sync state
watch(
  () => router.currentRoute.value.path,
  (newPath, oldPath) => {
    if (newPath === oldPath) return

    // ถ้าเป็น la-vn หรือ la-ch → redirect แล้วยังไม่ต้อง sync
    const redirected = fixWrongOrder(newPath)
    if (redirected) return

    // ไม่ใช่เคส redirect → sync state ตาม path
    syncStateFromRoute(newPath)
  },
  { immediate: true }
)

// watch state → อัปเดต path ให้ตรง state
watch([source, target], () => {
  updateRoute()
})

// GSAP animated swap
const swap = () => {
  // คู่ vn-la / ch-la → ห้าม swap
  if (isSwapLocked.value) return

  const leftEl = leftBlock.value
  const rightEl = rightBlock.value
  const btnEl = swapBtn.value

  const doSwapLogic = () => {
    let src = source.value
    let tgt = target.value

    // สลับค่า
    const tmp = src
    src = tgt
    tgt = tmp

    // enforce rule: ต้องมี la ฝั่งใดฝั่งหนึ่ง และห้าม la-la
    if (src !== "la" && tgt !== "la") {
      // ถ้าหลังสลับไม่มี la เลย → บังคับให้ฝั่งขวาเป็น la
      tgt = "la"
    }
    if (src === "la" && tgt === "la") {
      // ถ้า la-la → ให้ฝั่งขวาเป็นประเทศแรกที่ไม่ใช่ la
      const firstNonLa = languages.find(l => l.code !== "la")?.code || "kh"
      tgt = firstNonLa
    }

    source.value = src
    target.value = tgt
  }

  if (!leftEl || !rightEl || !btnEl) {
    doSwapLogic()
    return
  }

  const tl = gsap.timeline()

  tl.to(btnEl, {
    rotation: "+=180",
    duration: 0.25,
    ease: "power2.inOut",
  })

  tl.to(
    leftEl,
    {
      x: 40,
      scale: 0.97,
      opacity: 0.85,
      duration: 0.18,
      ease: "power2.in",
    },
    "<"
  )

  tl.to(
    rightEl,
    {
      x: -40,
      scale: 0.97,
      opacity: 0.85,
      duration: 0.18,
      ease: "power2.in",
    },
    "<"
  )

  tl.add(() => {
    doSwapLogic()
  })

  tl.to(leftEl, {
    x: 0,
    scale: 1,
    opacity: 1,
    duration: 0.22,
    ease: "back.out(1.6)",
  })

  tl.to(
    rightEl,
    {
      x: 0,
      scale: 1,
      opacity: 1,
      duration: 0.22,
      ease: "back.out(1.6)",
    },
    "<"
  )
}
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
  background: rgba(0, 0, 0, 0.35);
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
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
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
  background: rgba(255, 255, 255, 0.1);
}

.swap-btn {
  background: rgba(0, 0, 0, 0.35);
  color: #fff;
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center;
}

.swap-disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
