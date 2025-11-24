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
        :class="{ 'swap-disabled': isSwapLocked }"
        :disabled="isSwapLocked"
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

// default initial pair
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

// filter lists based on rules:
// - One side must always be "la"
// - If the other side is "la" → this side can select any country except "la"
// - If the other side is NOT "la" → this side must be "la"
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

// special case: vn-la and ch-la → swap is disabled
const isSwapLocked = computed(() => {
  return (
    target.value === "la" &&
    (source.value === "vn" || source.value === "ch")
  )
})

// select from BLOCK 1 (left)
const selectSource = (code) => {
  if (!isValidCode(code)) return

  if (code === "la") {
    // if selecting "la" on the left
    source.value = "la"
    // prevent la-la
    if (target.value === "la") {
      const firstNonLa = languages.find(l => l.code !== "la")
      if (firstNonLa) target.value = firstNonLa.code
    }
  } else {
    // if selecting non-"la" on the left → right side becomes "la" automatically
    source.value = code
    target.value = "la"
  }

  open1.value = false
}

// select from BLOCK 2 (right)
const selectTarget = (code) => {
  if (!isValidCode(code)) return

  if (code === "la") {
    // if selecting "la" on the right
    target.value = "la"
    // prevent la-la
    if (source.value === "la") {
      const firstNonLa = languages.find(l => l.code !== "la")
      if (firstNonLa) source.value = firstNonLa.code
    }
  } else {
    // if selecting non-"la" on the right → left side becomes "la" automatically
    target.value = code
    source.value = "la"
  }

  open2.value = false
}

// update route based on current pair
const updateRoute = () => {
  const path = `/crossborder/${source.value}-${target.value}`

  if (router.currentRoute.value.path === path) return

  router.push(path).catch((err) => {
    if (err && err.name !== "NavigationDuplicated") {
      console.error(err)
    }
  })
}

// sync state from route path (enforce rules: must include "la", no la-la, etc.)
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

  // la-la → force only one side to be "la"
  if (src === "la" && tgt === "la") {
    src = "la"
    const firstNonLa = languages.find(l => l.code !== "la")?.code || "kh"
    tgt = firstNonLa
  }
  // both sides are not "la" → force right side to "la"
  else if (src !== "la" && tgt !== "la") {
    // keep src, set tgt = "la"
    tgt = "la"
  }

  // set state
  source.value = src
  target.value = tgt
}

// redirect special cases: la-vn → vn-la, la-ch → ch-la
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

// watch path: handle redirect + sync state
watch(
  () => router.currentRoute.value.path,
  (newPath, oldPath) => {
    if (newPath === oldPath) return

    // if la-vn or la-ch → redirect and skip sync
    const redirected = fixWrongOrder(newPath)
    if (redirected) return

    // normal case → sync state from path
    syncStateFromRoute(newPath)
  },
  { immediate: true }
)

// watch state → update route to match state
watch([source, target], () => {
  updateRoute()
})

// GSAP animated swap
const swap = () => {
  // vn-la / ch-la → do not allow swap
  if (isSwapLocked.value) return

  const leftEl = leftBlock.value
  const rightEl = rightBlock.value
  const btnEl = swapBtn.value

  const doSwapLogic = () => {
    let src = source.value
    let tgt = target.value

    // swap values
    const tmp = src
    src = tgt
    tgt = tmp

    // enforce rule: one side must be "la" and no la-la
    if (src !== "la" && tgt !== "la") {
      // if no "la" after swap → force right side to "la"
      tgt = "la"
    }
    if (src === "la" && tgt === "la") {
      // if la-la → set right side to first non-"la"
      const firstNonLa = languages.find(l => l.code !== "la")?.code || "kh"
      tgt = firstNonLa
    }

    source.value = src
    target.value = tgt
  }

  // if elements not ready → skip animation, just do logic
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
