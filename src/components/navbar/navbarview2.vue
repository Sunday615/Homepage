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
.listnavbar ul{
 display: flex;
 padding-left: 55px;
 align-items: center;
}

#navbar-bg{
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 160px;
}
.listnavbar{
    display: flex;
    align-items: center;
    
    width: 80%;
    height: 100%;
  
}
.logo img{
    width: 120px;
    height: 120px;
    margin-right: 10px;

}
.logo{
    display: flex;
    align-items: center;
    padding-left: 70px;
    width: 20%;
    height: 100%;
 
}

.navbar{
    width: 100%;
    height: 160px;
    display: flex;
    

}

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
}</style>