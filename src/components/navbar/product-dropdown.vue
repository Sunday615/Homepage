<template>
  <div class="dropdown" @mouseleave="closeDropdown">
    <button class="dropdown-btn" @mouseover="openDropdown">
      ຜະລິດຕະພັນ ແລະ ການບໍລິການ <i class="fa-solid fa-caret-down"></i>
    </button>
    <ul v-if="isOpen" class="dropdown-menu">
      <li><router-link to="/products-service/products-1">ກວດຍອດເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM</router-link></li>
      <li> <router-link to="/products-service/products-2">ຖອນເງິນສົດຂ້າມທະນາຄາານຜ່ານຕູ້ ATM</router-link></li>
      <li><router-link to="/products-service/products-3">ໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM</router-link></li>
      <li><router-link to="/products-service/products-4">ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື</router-link></li>
      <li><router-link to="/products-service/products-5">ການຊຳລະເງິນຂ້າມທະນາຄານຜ່ານ QR</router-link></li>
      <li><router-link to="/products-service/products-6">ຊຳລະຂ້າມແດນໃນຮູບແບບ QR CODE ລະຫວ່າງປະເທດ</router-link></li>
    </ul>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'DropdownMenu',
  setup() {
    const isOpen = ref(false);
    const products = ref<string[]>([
      'ກວດຍອດເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM',
      'ຖອນເງິນສົດຂ້າມທະນາຄາານຜ່ານຕູ້ ATM',
      'ໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM',
      'ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື',
      'ການຊຳລະເງິນຂ້າມທະນາຄານຜ່ານ QR',
      'ຊຳລະຂ້າມແດນໃນຮູບແບບ QR CODE ລະຫວ່າງປະເທດ',
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
.dropdown {
  position: relative;
  display: inline-block;
}


.dropdown-btn {
  margin-left: 40px;
  padding: 10px 20px;
  font-size: 21px;
  font-family: "Noto Sans Lao", sans-serif;
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
  font-family: "Noto Sans Lao", sans-serif;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-width: 250px;
  margin-top: 5px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
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
}

.dropdown-menu li:hover {
  background-color: #f0f0f0;
}
</style>
