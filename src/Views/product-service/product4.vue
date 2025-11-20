<script setup lang="ts">


import navbarview2 from '../../components/navbar/navbarview2.vue';
import footer_memberservice_product4 from '../../components/memberfooter/footer_memberservice_product4.vue';
import mainfooter from '../../components/footer/mainfooter.vue';
import floating_action from '../../components/floatingicon/floating_action.vue';
import tablefee from '../../components/table/tablefee.vue';

import { onMounted } from 'vue'

onMounted(() => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})
interface Props {
  brandName?: string
  headline?: string
  phone?: string
  email?: string
  address?: string
}

const props = withDefaults(defineProps<Props>(), {
  brandName: 'Lunaris',
  headline: "Let’s work together to be the best banking platform in the world",
  phone: '+123 456 7891',
  email: 'lunaris@gmail.com',
  address: '123 Dartmouth Street Boston, United States',
})
</script>



<template>
    <navbarview2 />
    <div class="navigatorcontent">
        <img id="navigator-img" src="../../assets/products/navigatorcontent-bg.png" alt="">
        <div class="navigator-info-container">
            <div class="titlenavigator">
                <div data-aos="zoom-in-down" data-aos-duration="1000">
                    <p>ຜະລິດຕະພັນ ແລະ ການບໍລິການ</p>
                </div>
            </div>
            <div class="navigatorlink">
                <div data-aos="zoom-out-up" data-aos-duration="1000">
                    <p>ໜ້າຫຼັກ <span style="padding-right: 40px; padding-left: 40px;"><i
                                class="fa-solid fa-chevron-right"></i></span> ຜະລິດຕະພັນ ແລະ ການບໍລິການ <span
                            style="padding-right: 40px; padding-left: 40px;"><i class="fa-solid fa-chevron-right"></i>
                        </span> ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື</p>
                </div>
            </div>
        </div>
    </div>
    <div class="boxpadding"></div>
    <div class="conatinerproduct1-page1">
        <img id="bgproductpage1" src="../../assets/products/product4/productbg4.png" alt="">
        <div class="containerframe1">
            <div class="leftcontentpage1">
                <div class="producttitlepage1">
                    <p>ຜະລິດຕະພັນ ແລະ ການບໍລີການ</p>
                </div>
                <div class="headerproductpage1">
                    <p> ໂອນເງິນຂ້າມທະນາຄານ<br>ເທິງມືຖື</p>
                </div>
                <div class="titleinfopage1">
                    <p>ການໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື (Fund Transfer via Mobile <br> Application) ໂດຍນຳໃຊ້ລະບົບ LMPS
                        ໃນການເຊື່ອມໂຍງຜ່ານ <br>Applications ຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກຂອງບໍລິສັດລາວ
                        <br>ເນເຊີນນໍເພເມັ້ນ ເນັດເວີກ ໃຫ້ສາມາດໃຊ້ຟັງຊັ່ນການດຳເນີນທຸລະກຳໂອນ<br>ເງິນຂ້າມທະນາຄານໄດ້.</p>
                </div>
                <div class="btnproduct">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <button class="button-66" role="button"> <i class="fa-solid fa-caret-right"></i> ຜະລິດຕະພັນ ແລະ
                            ການບໍລິການ</button>
                    </div>
                </div>
            </div>
            <div class="rightcontentpage1">
                <div data-aos="fade-left" data-aos-duration="1400">
                    <img id="topbg" src="../../assets/products/product4/Rectangle 1.png" alt="">
                </div>
                <div data-aos="zoom-in" data-aos-duration="1200">
                    <img id="mobile" src="../../assets/products/product4/ip16.webp" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="contentproduct1-page2">
          <section class="landing-container">
    <div class="contact-card">
      <div class="brand">
        <div class="brand-icon"></div>
        <span class="brand-name">{{ brandName }}</span>
      </div>

      <h1 class="headline">
        {{ headline }}
      </h1>

      <div class="details">
        <p v-if="phone">{{ phone }}</p>
        <p v-if="email">{{ email }}</p>
        <p v-if="address">{{ address }}</p>
      </div>
    </div>
  </section>

    </div>
    <div class="condition">
        <div class="leftconditioncontainer">

            <h2>ຜະລິດຕະພັນ ແລະ ການບໍລິການ</h2>

            <h1>ເງື່ອນໄຂການບໍລິການ</h1>

            <p>ລຸກຄ້າສາມາດນຳໃຊ້ເລກບັນຊີທະນາຄານ ດຳເນີນທຸລະກຳເທິງມືຖື ໂດຍຜ່ານ Applications
                ຂອງແຕ່ລະທະນາຄານທຸລະກິດທີ່ເປັນສະມາຊິກຂອງບໍລິສັດ LAPNet
                ໄດ້ຟຣີໃນໄລຍະທີ່ເປີດຕົວຜະລິດຕະພັນການໂອນເງິນຂ້າມທະນາຄານເທິງມືຖືໃໝ່ ດັ່ງເນື້ອໃນລຸ່ມນີ້:</p>


            <h3><i class="fa-solid fa-play"></i>ການໂອນເງິນເທີງມືຖືໂດຍນຳໃຊ້ຮູບແບບການໂອນ ບັນຊີຫາບັນຊີ ຫຼື ເອີ້ນວ່າ Account
                Fund Transfer ແມ່ນມີສະມາຊິກທັງໝົດ 16 ທະນາຄານ ດັ່ງນີ້:</h3>
        </div>
        <div class="rightconditioncontainer">


            <floating_action></floating_action>

        </div>
    </div>

    <footer_memberservice_product4></footer_memberservice_product4>
    <div class="containerfee">
        <tablefee></tablefee>
    </div>
    <mainfooter></mainfooter>

</template>


<style scoped>
/* Full-page section */
.landing-container {
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  box-sizing: border-box;

  /* Space / stars background */
  background:
    radial-gradient(circle at 20% 10%, rgba(255, 255, 255, 0.18) 0, transparent 45%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.12) 0, transparent 40%),
    radial-gradient(circle at 10% 80%, rgba(0, 80, 255, 0.6) 0, #000814 60%);
  position: relative;
  color: #ffffff;
  overflow: hidden;
}

/* Star field hint */
.landing-container::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(1px 1px at 10% 20%, rgba(255, 255, 255, 0.7) 0, transparent 50%),
    radial-gradient(1px 1px at 30% 80%, rgba(255, 255, 255, 0.4) 0, transparent 50%),
    radial-gradient(1px 1px at 70% 30%, rgba(255, 255, 255, 0.5) 0, transparent 50%),
    radial-gradient(1px 1px at 90% 60%, rgba(255, 255, 255, 0.6) 0, transparent 50%);
  opacity: 0.35;
  pointer-events: none;
}

/* Main card */
.contact-card {
  position: relative;
  max-width: 960px;
  width: 100%;
  height: 100%;
  max-height: 520px;
  border-radius: 32px;
  padding: 72px 64px;
  box-sizing: border-box;
  text-align: center;

  background: radial-gradient(circle at bottom, #274bff 0, #050914 55%);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow:
    0 0 60px rgba(0, 0, 0, 0.8),
    0 0 40px rgba(70, 120, 255, 0.7);
  backdrop-filter: blur(26px);
}

/* Brand row */
.brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 40px;
}

.brand-icon {
  width: 18px;
  height: 18px;
  border-radius: 999px;
  border: 2px solid #ffffff;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
}

.brand-name {
  font-size: 14px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.85;
}

/* Headline */
.headline {
  max-width: 640px;
  margin: 0 auto 56px;
  font-size: 32px;
  line-height: 1.4;
  font-weight: 500;
}

/* Contact details */
.details {
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 14px;
  opacity: 0.9;
}

.details p {
  margin: 0;
}

/* Simple responsiveness */
@media (max-width: 768px) {
  .contact-card {
    padding: 48px 24px;
    max-height: none;
  }

  .headline {
    font-size: 24px;
  }
}
.contentproduct1-page2{
    width: 100%;
    height: 800px;
    border: 1px solid red;
}
.containerfee {
    width: 100%;
    height: 1100px;
    display: flex;
    align-items: center;
  

}

.leftconditioncontainer h3 i {
    font-size: 20px;
}

.leftconditioncontainer h3 {
    color: #0019FE;
    margin-top: 60px;
    font-size: 25px;

}

.leftconditioncontainer p {
    font-size: 25px;
    margin-top: 50px;

}

.leftconditioncontainer h1 {
    font-size: 80px;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;
    margin-top: 60px;
}

.leftconditioncontainer h2 {
    font-size: 27px;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;
    color: #2F27CE;
    margin-top: 120px;
}

.rightconditioncontainer {
    width: 50%;
    height: 100%;

    overflow: hidden;
}

.leftconditioncontainer {
    width: 50%;
    height: 100%;
    font-family: "Noto Sans Lao", sans-serif;



}

.condition {
    width: 95%;
    display: flex;
    height: 850px;
    margin: 0 auto;

}

.logomemberservice {
    width: 70%;
    margin-top: 80px;
    height: 60%;
    margin-left: 90px;

}

.titlememberservice p {
    font-size: 85px;
    font-family: notosanlao-black;
    padding-top: 50px;
    background: #008CFF;

    background: linear-gradient(to right, #008CFF 0%, #0019FE 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.rightbox-memberservice {
    width: 50%;
    height: 100%;

    margin-left: 20px;
}

.leftbox-memberservice h1+p {

    line-height: 0.9;
}

.leftbox-memberservice h1 {
    color: #fff;
    font-size: 190px;
    font-family: inter-black;

}

.leftbox-memberservice p {
    font-size: 90px;
    color: white;

    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;
}

.leftbox-memberservice {
    width: 50%;
    padding-left: 90px;
    height: 100%;

    padding-top: 120px;


}

.memberservicepage {
    width: 100%;
    height: 800px;
    display: flex;

}

#memberservice-bg {
    width: 100%;

    position: absolute;
    z-index: -1;
    height: 800px;

}


#mobile {
    width: 400px;
    height: 600px;
    position: relative;
    bottom: 400px;
    right: 100px;

}

#topbg {
    height: 600px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    top: -100px;
}

.boxpadding {
    width: 100%;
    height: 100px;
    background-color: #fff;
}



.titleinfopage1 p {
    font-size: 30px;
    font-family: "Noto Sans Lao", sans-serif;
    padding-top: 70px;
}

.producttitlepage1 p {
    font-size: 27px;
    color: #433bff;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;
    padding-top: 50px;

}

.headerproductpage1 p {
    padding-top: 70px;
    font-size: 83px;
    color: #000;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;
    line-height: 1.2;
}

.leftcontentpage1 {
    width: 50%;
    height: 100%;

    margin-left: 40px;
}

.rightcontentpage1 {
    width: 45%;
    height: 100%;

    margin-left: 90px;
}

#bgproductpage1 {
    width: 100%;
    height: 1100px;
    position: absolute;
    z-index: -1;

}

.containerframe1 {
    width: 95%;
    height: 1000px;

    margin: 0 auto;
    display: flex;


}

.conatinerproduct1-page1 {
    width: 100%;
    height: 1100px;
    display: flex;
    align-items: center;
}

.maincontent1 {
    width: 100%;
    height: 500px;
    background-color: red;
}

.maincontainer {
    width: 100%;
    height: 470px;
    border: 1px solid red;
}
</style>