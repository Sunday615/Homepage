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
      <button @click="swap" class="swap-btn">↔</button>

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
import { ref, watch, computed } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const languages = [
    { code: "la", name: "ລາວ", flag: "https://flagcdn.com/la.svg" },
    { code: "kh", name: "ກຳປູເຈຍ", flag: "https://flagcdn.com/kh.svg" },
  { code: "th", name: "ໄທ", flag: "https://flagcdn.com/th.svg" },
  { code: "th", name: "ຫວຽດນາມ", flag: "https://flagcdn.com/vn.svg" },
  { code: "ch", name: "ຈີນ", flag: "https://flagcdn.com/cn.svg" },
]

const source = ref("la")
const target = ref("kh")

// Dropdown open/close state
const open1 = ref(false)
const open2 = ref(false)


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

const swap = () => {
  const tmp = source.value
  source.value = target.value
  target.value = tmp
}

// Realtime update path
watch([source, target], () => {
  router.push(`/translate/${source.value}-${target.value}`)
})
</script>

<style scoped>
.lang-container {
    width: 700px;
    height: 100px;
    border: 1px solid red;
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.lang-box {
 

  background: linear-gradient(135deg, #001072, #5ab3dd);
  padding: 42px 48px;
  border-radius: 25px;
  display: flex;
  border: 1px solid red;
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