<template>
  <div class="dropdown" ref="dropdownRef">
    <!-- Button -->
    <button class="dropdown-btn" @click="toggleDropdown">
      {{ selectedLabel || "ເລືອກເດືອນ" }}
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
  modelValue: string | null
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | null): void
}>()

// แสดงเป็น "ເດືອນ 1" แต่ value ใช้ชื่อเดือนภาษาอังกฤษ
const options = [
  { label: 'ທັງໝົດ', value: 'all' },
  { label: 'ເດືອນ 1', value: 'January' },
  { label: 'ເດືອນ 2', value: 'February' },
  { label: 'ເດືອນ 3', value: 'March' },
  { label: 'ເດືອນ 4', value: 'April' },
  { label: 'ເດືອນ 5', value: 'May' },
  { label: 'ເດືອນ 6', value: 'June' },
  { label: 'ເດືອນ 7', value: 'July' },
  { label: 'ເດືອນ 8', value: 'August' },
  { label: 'ເດືອນ 9', value: 'September' },
  { label: 'ເດືອນ 10', value: 'October' },
  { label: 'ເດືອນ 11', value: 'November' },
  { label: 'ເດືອນ 12', value: 'December' }
]

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const selectedLabel = computed(() => {
  if (!props.modelValue || props.modelValue === 'all') return ''
  const found = options.find(o => o.value === props.modelValue)
  return found ? found.label : ''
})

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function selectOption(option: { label: string; value: string | null }) {
  emit('update:modelValue', option.value)
  isOpen.value = false
}

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

/* Dropdown container */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Button styling */
.dropdown-btn {
  margin-top: 5px;
  font-family: "Noto Sans Lao", sans-serif;
  color: #000000d3;
  border: 1px solid #00000082;
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
