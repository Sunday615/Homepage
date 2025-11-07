<template>
  <div class="dropdown" @mouseleave="closeDropdown">
    <button class="dropdown-btn" @mouseover="openDropdown">
      <p> ກ່ຽວກັບພວກເຮົາ <i class="fa-solid fa-caret-down"></i></p>
    </button>
    <ul v-if="isOpen" class="dropdown-menu">
      <li> <router-link to="/vision_mission">{{ products[0] }}</router-link> </li>
      <li> <router-link to="/Role">{{ products[1] }}</router-link> </li>
      <li> <router-link to="/History">{{ products[2] }}</router-link> </li>
      <li> <router-link to="/board_of_director">{{ products[3] }}</router-link> </li>
      <li> <router-link to="/companystructure">{{ products[4] }}</router-link> </li>
    </ul>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import router from '../../../router';

export default defineComponent({
  name: 'DropdownMenu',
  setup() {
    const isOpen = ref(false);
    const products = ref<string[]>([
      'ວິໄສທັດ ແລະ ພາລະກິດ',
      'ພາລະບົດບາດ',
      'ຄວາມເປັນມາ',
      'ສະພາຜູ້ບໍລິຫານ',
      'ໂຄງຮ່າງການຈັດຕັ້ງ',

    ]);

    const openDropdown = () => {
      isOpen.value = true;
    };

    const closeDropdown = () => {
      isOpen.value = false;
    };

    return { isOpen, products, openDropdown, closeDropdown };
  },
});
</script>

<style scoped>
h1,
h2,
p,
li {
  font-family: "Noto Sans Lao", sans-serif;
}

.dropdown {
  position: relative;
  display: inline-block;
}


.dropdown-btn {
  padding: 10px 20px;
  font-size: 21px;
  font-family: notosanlao;
  color: rgb(255, 255, 255);
  border: none;

  border-radius: 5px;
  cursor: pointer;

}



.dropdown-menu {
  position: absolute;
  top: 85%;
  left: 0;
  color: #000;
  font-size: 20px;
  font-family: notosanlao;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-width: 250px;
  margin-top: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  list-style: none;
  padding: 0;
  z-index: 1000;
}

.dropdown-menu li {
  padding: 10px;
  cursor: pointer;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #00000023;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background-color: #f0f0f0;
}
</style>
