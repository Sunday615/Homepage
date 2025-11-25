<template>
  <div class="dropdown" ref="dropdownRef">
    <!-- Button -->
    <button class="dropdown-btn" @click="toggleDropdown">
      {{ selectedLabel || "ເລືອກປີ" }}
      <span class="arrow" :class="{ open: isOpen }">▼</span>
    </button>

    <!-- Menu -->
    <ul v-if="isOpen" class="dropdown-menu">
      <li
        v-for="option in options"
        :key="option.value ?? 'all'"
        class="dropdown-item"
        @click="selectOption(option)"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const props = defineProps<{
  modelValue: number | null
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | null): void
}>()


const options = [
  { label: 'ທັງໝົດ', value: null },
  { label: 'ປີ 2025', value: 2025 },
  { label: 'ປີ 2024', value: 2024 },
  { label: 'ປີ 2023', value: 2023 },
  { label: 'ປີ 2022', value: 2022 },
  { label: 'ປີ 2021', value: 2021 },
  { label: 'ປີ 2020', value: 2020 },
  { label: 'ປີ 2019', value: 2019 }
]

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const selectedLabel = computed(() => {
  const found = options.find(o => o.value === props.modelValue)
  return found ? found.label : ''
})

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function selectOption(option: { label: string; value: number | null }) {
  emit('update:modelValue', option.value)
  isOpen.value = false
}

// Close dropdown when clicking outside
function handleClickOutside(event: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))
</script>

<style scoped>
* {
  font-family: "Noto Sans Lao", sans-serif;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-btn {
  color: #000000d3;
  margin-top: 5px;
  border: 1px solid #000000b0;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  width: 345px;
  height: 70px;
  font-size: 19px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.2s ease;
}

.dropdown-btn:hover {
  background-color: #e6e6e6;
}

.arrow {
  font-size: 10px;
  transition: transform 0.2s ease;
}

.arrow.open {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
  margin-top: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  z-index: 1000;
}

.dropdown-item {
  padding: 10px 16px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}
</style>
