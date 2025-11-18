<template>
  <div class="lang-container">

    <div class="lang-box">

      <!-- BLOCK 1 -->
      <div class="select-wrap">
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
      <button @click="swap" class="swap-btn"><i class="fa-solid fa-repeat"></i></button>

      <!-- BLOCK 2 -->
      <div class="select-wrap">
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
import { ref, watch, computed, onMounted } from "vue"
import { useRouter, useRoute } from "vue-router"

const router = useRouter()
const route = useRoute()

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

// flag helpers
const getFlag = (code) => languages.find(l => l.code === code)?.flag
const getName = (code) => languages.find(l => l.code === code)?.name

// dropdown filters
const filteredSource = computed(() =>
  languages.filter(l => l.code !== target.value)
)

const filteredTarget = computed(() =>
  languages.filter(l => l.code !== source.value)
)

// function for selecting
const selectSource = (code) => {
  source.value = code
  open1.value = false
}

const selectTarget = (code) => {
  target.value = code
  open2.value = false
}

// -----------------------------------------------
// ⛔ ป้องกัน sync ซ้ำซ้อน / ปัญหากดสองครั้ง
// -----------------------------------------------
const isUpdating = ref(false)

// -----------------------------------------------
// ⭐ โหลดค่าจาก PATH มาตั้งค่าทันที
// -----------------------------------------------
const updateFromRoute = () => {
  const id = route.params.id
  if (!id) return

  const [src, tar] = id.split("-")

  if (languages.find(l => l.code === src) && languages.find(l => l.code === tar)) {
    isUpdating.value = true  // กัน watch ด้านล่างทำงานซ้อน
    source.value = src
    target.value = tar
    setTimeout(() => (isUpdating.value = false), 0)
  }
}

onMounted(() => {
  updateFromRoute()
})

// -----------------------------------------------
// ⭐ ถ้า PATH เปลี่ยน (เช่นเปลี่ยนหน้า 1 → หน้า 2) อัปเดตทันที
// -----------------------------------------------
watch(
  () => route.params.id,
  () => updateFromRoute()
)

// -----------------------------------------------
// ⭐ sync state → URL (แบบไม่ชนกับ update route)
// -----------------------------------------------
watch([source, target], ([newS, newT]) => {
  if (isUpdating.value) return  // กันการยิงซ้ำจนต้องกดสองครั้ง

  const newPath = `${newS}-${newT}`
  const oldPath = route.params.id

  if (newPath !== oldPath) {
    router.replace(`/crossborder/${newPath}`)
  }
})

// -----------------------------------------------
const swap = () => {
  const t = source.value
  source.value = target.value
  target.value = t
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
}
</style>