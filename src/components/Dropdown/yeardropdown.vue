<template>
  <div class="dropdown" ref="dropdownRef">
    <!-- Button -->
    <button class="dropdown-btn" @click="toggleDropdown">
      {{ selected || "ເລືອກປີ" }}
      <span class="arrow" :class="{ open: isOpen }">▼</span>
    </button>

    <!-- Menu -->
    <ul v-if="isOpen" class="dropdown-menu">
      <li v-for="(country, index) in countries" :key="index" class="dropdown-item" @click="selectCountry(country)">
        {{ country }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const countries = ["ປີ 2025", "ປີ 2024", "ປີ 2023", "ປີ 2022",];

const isOpen = ref(false);
const selected = ref("");
const dropdownRef = ref<HTMLElement | null>(null);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function selectCountry(country: string) {
  selected.value = country;
  isOpen.value = false;
}

// Close dropdown when clicking outside
function handleClickOutside(event: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
}

onMounted(() => document.addEventListener("click", handleClickOutside));
onBeforeUnmount(() => document.removeEventListener("click", handleClickOutside));
</script>

<style scoped>
/* Dropdown container */
* {
  font-family: "Noto Sans Lao", sans-serif;

}

.dropdown {
  position: relative;
  display: inline-block;
}

/* Button styling */
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

/* Arrow icon */
.arrow {
  font-size: 10px;
  transition: transform 0.2s ease;
}

.arrow.open {
  transform: rotate(180deg);
}

/* Dropdown menu */
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

/* Menu item */
.dropdown-item {
  padding: 10px 16px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}
</style>
