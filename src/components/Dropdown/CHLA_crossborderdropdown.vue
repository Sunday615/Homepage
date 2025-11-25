<template>
  <div class="dropdown" ref="dropdownRef">
    <!-- Dropdown button -->
    <button class="dropdown-toggle" @click="toggleDropdown">
      <img
        v-if="selected.flag"
        :src="selected.flag"
        alt=""
        class="flag-icon"
      />
      <span>{{ selected.label }}</span>
      <span class="caret">▼</span>
    </button>

    <!-- Dropdown menu -->
    <ul v-if="isOpen" class="dropdown-menu">
      <li class="dropdown-item" @click="selectOption(options[0])">
        <img :src="options[0].flag" alt="" class="flag-icon" />
        <span>{{ options[0].label }}</span>
      </li>

      <li class="dropdown-item" @click="selectOption(options[1])">
        <img :src="options[1].flag" alt="" class="flag-icon" />
        <span>{{ options[1].label }}</span>
      </li>

      <li class="dropdown-item" @click="selectOption(options[2])">
        <span>{{ options[2].label }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const emit = defineEmits(["change-country"]);

const options = [
  {
    id: "china",
    label: "China",
    flag: "https://flagcdn.com/cn.svg",
  },
  {
    id: "korea",
    label: "Korea",
    flag: "https://flagcdn.com/kr.svg",
  },
  {
    id: "sea",
    label: "SEA",
    flag: null, // no flag, just text
  },
];

const isOpen = ref(false);
const selected = ref(options[0]); // default: China
const dropdownRef = ref(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selected.value = option;
  isOpen.value = false;

  // ส่งค่า id ของประเทศไปให้ parent
  emit("change-country", option.id);
};

const handleClickOutside = (e) => {
  if (!dropdownRef.value) return;
  if (!dropdownRef.value.contains(e.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
  font-family: inherit;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 18px 94px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  backdrop-filter: blur(6px);
}

.dropdown-toggle:hover {
  background: rgba(255, 255, 255, 0.08);
}

.flag-icon {
  width: 22px;
  height: 16px;
  border-radius: 2px;
  object-fit: cover;
}

.caret {
  font-size: 10px;
  opacity: 0.8;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 6px;
  min-width: 140px;
  background: rgba(0, 0, 0, 0.85);
  border-radius: 12px;
  padding: 6px 0;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  z-index: 10;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  color: #fff;
}

.dropdown-item:hover {
  background: rgba(255, 255, 255, 0.08);
}
</style>
