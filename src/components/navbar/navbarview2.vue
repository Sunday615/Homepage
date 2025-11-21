<script setup lang="ts">

import productdropdown from './product-dropdown.vue'
import dropdownmember from './memberdropdown.vue'
import aboutusdropdown from './aboutusdropdown.vue';


function goTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>


<template>

    <!-- <newNavbar></newNavbar> -->
      <nav class="navbar">
        <img id="navbar-bg" src="../../assets/navbar/navbar-bg.png" alt="">
        <div class="logo">
            <router-link to="/"><img src="../../assets/Logo-lapnet/logolapnet.PNG" alt=""></img></router-link>
            <router-link to="/">  <img src="../../assets/Logo-lapnet/textlogo.PNG" alt=""></router-link>
          

        </div>
        <div class="listnavbar">
            <ul>
               <li @click="goTop()"><productdropdown></productdropdown></li>
               <li @click="goTop()" ><dropdownmember></dropdownmember></li>
               <li style="  padding: 10px 20px; font-size:21px;" @click="goTop()"><router-link to="/page/1">ຂ່າວສານ ແລະ ກິດຈະກຳ</router-link></li>
               <li style="  padding: 10px 20px; font-size:21px;"> <router-link to="/joinus">ຮ່ວມງານກັບເຮົາ </router-link> </li>
               <li><aboutusdropdown></aboutusdropdown></li>
               <li style="font-size:21px;"> <router-link to="/contact">ຕິດຕໍ່ພວກເຮົາ</router-link> </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
.listnavbar ul li {
  font-size: 23px;
  color: #fff;
  font-family: "Noto Sans Lao", sans-serif;
  padding-right: 15px;
  cursor: pointer;
}

.listnavbar ul {
  display: flex;
  padding-left: 55px;
  align-items: center;
}

#navbar-bg {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 160px;
}

.listnavbar {
  display: flex;
  align-items: center;
  width: 80%;
  height: 100%;
}

.logo img {
  width: 120px;
  height: 120px;
  margin-right: 10px;
}

.logo {
  display: flex;
  align-items: center;
  padding-left: 70px;
  width: 20%;
  height: 100%;
}

.navbar {
  width: 100%;
  height: 160px;
  display: flex;
}

/* Navigator bg ที่ใช้ซ้ำ */
.navigatorcontent {
  width: 100%;
  height: 470px;
}

.navigator-info-container {
  width: 1000px;
  height: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#navigator-img {
  width: 100%;
  height: 470px;
  position: absolute;
  z-index: -1;
}

.titlenavigator p {
  font-size: 70px;
  color: #fff;
  font-family: "Noto Sans Lao", sans-serif;
  font-weight: 500;
  padding-bottom: 70px;
}

.navigatorlink p {
  color: #fff;
  font-size: 20px;
  font-family: "Noto Sans Lao", sans-serif;
}

/* -------------------- RESPONSIVE -------------------- */

/* <= 1200px */
@media (max-width: 1200px) {
  .logo {
    padding-left: 30px;
    width: 25%;
  }

  .listnavbar {
    width: 75%;
  }

  .listnavbar ul li {
    font-size: 20px;
  }
}

/* <= 992px (แท็บเล็ต / จอเล็ก) */
@media (max-width: 992px) {
  .navbar {
    flex-direction: column;
    height: auto;
    padding-bottom: 12px;
  }

  #navbar-bg {
    height: 200px;
  }

  .logo {
    width: 100%;
    justify-content: flex-start;
    padding: 16px 20px 0;
  }

  .logo img {
    width: 90px;
    height: 90px;
  }

  .listnavbar {
    width: 100%;
    padding: 8px 16px 0;
  }

  .listnavbar ul {
    padding-left: 0;
    flex-wrap: wrap;
    row-gap: 8px;
  }

  .listnavbar ul li {
    font-size: 18px;
    padding-right: 10px;
  }
}

/* <= 768px (มือถือ) */
@media (max-width: 768px) {
  .logo img {
    width: 70px;
    height: 70px;
  }

  .listnavbar ul {
    justify-content: flex-start;
  }

  .listnavbar ul li {
    font-size: 16px;
    padding-right: 8px;
  }

  .navigator-info-container {
    width: 90%;
  }

  .titlenavigator p {
    font-size: 40px;
    padding-bottom: 30px;
    text-align: center;
  }

  .navigatorlink p {
    font-size: 16px;
    text-align: center;
  }

  .navigatorcontent,
  #navigator-img {
    height: 360px;
  }
}
</style>
