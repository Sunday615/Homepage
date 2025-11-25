<!-- Product4.vue -->
<script setup lang="ts">
import navbarview2 from '../../components/navbar/navbarview2.vue'
import footer_memberservice_product4 from '../../components/memberfooter/footer_memberservice_product4.vue'
import mainfooter from '../../components/footer/mainfooter.vue'
import newfloatingicon from '../../components/floatingicon/newfloatingicon.vue'
import tablefee from '../../components/table/tablefee.vue'
import techproduct4 from '../../components/Landingage/techproduct4.vue'
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
})
</script>

<template>
  <navbarview2 />

  <div class="navigatorcontent">
    <img id="navigator-img" src="/navbar/navigatorcontent-bg.png" alt="" />
    <div class="navigator-info-container">
      <div class="titlenavigator">
        <div data-aos="zoom-in-down" data-aos-duration="1000">
          <p>ຜະລິດຕະພັນ ແລະ ການບໍລິການ</p>
        </div>
      </div>
      <div class="navigatorlink">
        <div data-aos="zoom-out-up" data-aos-duration="1000">
          <p>
            ໜ້າຫຼັກ
            <span style="padding-right: 40px; padding-left: 40px">
              <i class="fa-solid fa-chevron-right"></i>
            </span>
            ຜະລິດຕະພັນ ແລະ ການບໍລິການ
            <span style="padding-right: 40px; padding-left: 40px">
              <i class="fa-solid fa-chevron-right"></i>
            </span>
            ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="boxpadding"></div>

  <div class="conatinerproduct1-page1">
    <img id="bgproductpage1" src="/product4/productbg4.png" alt="" />
    <div class="containerframe1">
      <div class="leftcontentpage1">
        <div class="producttitlepage1">
          <p>ຜະລິດຕະພັນ ແລະ ການບໍລີການ</p>
        </div>
        <div class="headerproductpage1">
          <p>
            ໂອນເງິນຂ້າມທະນາຄານ<br />
            ເທິງມືຖື
          </p>
        </div>
        <div class="titleinfopage1">
          <p>
            ການໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື (Fund Transfer via Mobile<br />
            Application) ໂດຍນຳໃຊ້ລະບົບ LMPS ໃນການເຊື່ອມໂຍງຜ່ານ<br />
            Applications ຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກຂອງບໍລິສັດລາວ<br />
            ເນເຊີນນໍເພເມັ້ນ ເນັດເວີກ ໃຫ້ສາມາດໃຊ້ຟັງຊັ່ນການດຳເນີນທຸລະກຳໂອນ<br />
            ເງິນຂ້າມທະນາຄານໄດ້.
          </p>
        </div>
        <div class="btnproduct">
          <div data-aos="fade-up" data-aos-once="true" data-aos-duration="800">
            <button class="button-66" role="button">
              <i class="fa-solid fa-caret-right"></i>
              ຜະລິດຕະພັນ ແລະ ການບໍລິການ
            </button>
          </div>
        </div>
      </div>

      <div class="rightcontentpage1">
        <div data-aos="fade-left" data-aos-duration="1400">
          <img id="topbg" src="/product4/Rectangle 1.png" alt="" />
        </div>
        <div data-aos="zoom-in" data-aos-duration="1200">
          <img id="mobile" src="/product4/ip16.webp" alt="" />
        </div>
      </div>
    </div>
  </div>

  <div class="contentproduct1-page2">
    <techproduct4 />
  </div>

  <div class="condition">
    <div class="leftconditioncontainer">
      <h2>ຜະລິດຕະພັນ ແລະ ການບໍລິການ</h2>

      <h1>ເງື່ອນໄຂການບໍລິການ</h1>

      <p>
        ລຸກຄ້າສາມາດນຳໃຊ້ເລກບັນຊີທະນາຄານ ດຳເນີນທຸລະກຳເທິງມືຖື ໂດຍຜ່ານ Applications
        ຂອງແຕ່ລະທະນາຄານທຸລະກິດທີ່ເປັນສະມາຊິກຂອງບໍລິສັດ LAPNet
        ໄດ້ຟຣີໃນໄລຍະທີ່ເປີດຕົວຜະລິດຕະພັນການໂອນເງິນຂ້າມທະນາຄານເທິງມືຖືໃໝ່ ດັ່ງເນື້ອໃນລຸ່ມນີ້:
      </p>

      <h3>
        <i class="fa-solid fa-play"></i>
        ການໂອນເງິນເທີງມືຖືໂດຍນຳໃຊ້ຮູບແບບການໂອນ ບັນຊີຫາບັນຊີ ຫຼື ເອີ້ນວ່າ Account Fund Transfer
        ແມ່ນມີສະມາຊິກທັງໝົດ 16 ທະນາຄານ ດັ່ງນີ້:
      </h3>
    </div>

    <div class="rightconditioncontainer">
      <newfloatingicon />
    </div>
  </div>

  <footer_memberservice_product4 />

  <div class="containerfee">
    <tablefee />
  </div>

  <mainfooter />
</template>

<style scoped>
.btnproduct button {
  font-family: "Noto Sans Lao", sans-serif;
  margin-top: 100px;
}

.button-66 {
  font-family: "Noto Sans Lao", sans-serif;
  background-color: #433bff;
  border-radius: 10px;
  border: 0;
  box-shadow: rgba(1, 60, 136, 0.5) 0 -1px 3px 0 inset,
    rgba(0, 44, 97, 0.1) 0 3px 6px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inherit;
  font-size: 27px;
  font-weight: 500;
  line-height: 24px;
  margin: 0;
  min-height: 70px;
  min-width: 820px;
  padding: 50px 30px;
  position: relative;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  transition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.button-66:hover {
  background-color: #514bff;
  transform: translateY(-2px);
}

@media (min-width: 768px) {
  .button-66 {
    padding: 16px 44px;
    min-width: 150px;
  }
}

.contentproduct1-page2 {
  width: 100%;
  height: 650px;
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
  color: #0019fe;
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
  color: #2f27ce;
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

#mobile {
  width: 400px;
  height: 550px;
  position: relative;
  bottom: 340px;
  right: 100px;
}

#topbg {
  height: 600px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  top: -100px;
  margin-left: 160px;
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
</style>
