<template>
  <div class="dropdown" @mouseleave="closeDropdown">
    <button class="dropdown-btn" @mouseover="openDropdown">
      <p>ຜະລິດຕະພັນ ແລະ ການບໍລິການ <i class="fa-solid fa-caret-down"></i></p>
    </button>
    <ul v-if="isOpen" class="dropdown-menu">
      <li><router-link to="/products-service/products-1"> ກວດຍອດເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM </router-link></li> 
      <li><router-link to="/products-service/products-2">ຖອນເງິນສົດຂ້າມທະນາຄາານຜ່ານຕູ້ ATM</router-link></li> 
      <li><router-link to="/products-service/products-3">ໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM</router-link></li> 
      <li><router-link to="/products-service/products-4">ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື</router-link></li> 
      <li><router-link to="/products-service/products-5">ການຊຳລະເງິນຂ້າມທະນາຄານຜ່ານ QR</router-link></li> 
      <li><router-link to="/products-service/products-6">ຊຳລະຂ້າມແດນໃນຮູບແບບ QR CODE ລະຫວ່າງປະເທດ</router-link></li> 
      
      
    </ul>
  </div>
  
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { RouterLink } from 'vue-router';





export default defineComponent({
  name: 'DropdownMenu',
  setup() {
    const isOpen = ref(false);
    

    const openDropdown = () => {
      isOpen.value = true;
    };

    const closeDropdown = () => {
      isOpen.value = false;
    };

    return { isOpen,  openDropdown, closeDropdown };
  },
});
</script>

<style scoped>
p , h1 , h2 , li , button{
  font-family: "Noto Sans Lao", sans-serif;
}
button{
  cursor: pointer;
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
  min-width: 350px;
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
 
  background-color: #ebebeb;
}


</style>
