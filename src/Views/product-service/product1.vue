<script setup>
import navbarview2 from "../../components/navbar/navbarview2.vue";
import mainfooter from "../../components/footer/mainfooter.vue";
import vdoproduct1 from "../../components/vdoproductbg/vdoproduct1.vue";
import { onMounted } from "vue";

onMounted(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
</script>

<template>
  <navbarview2 />
  <div class="navigatorcontent">
    <img
      id="navigator-img"
      src="../../assets/Products/navigatorcontent-bg.png"
      alt=""
    />
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
            ກວດຍອດເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="boxpadding"></div>

  <div class="conatinerproduct1-page1">
    <img
      id="bgproductpage1"
      src="../../assets/Products/product1/bgpd1-1.png"
      alt=""
    />
    <div class="containerframe1">
      <div class="leftcontentpage1">
        <div class="producttitlepage1">
          <div>
            <p>ຜະລິດຕະພັນ ແລະ ການບໍລິການ</p>
          </div>
        </div>
        <div class="headerproductpage1">
          <div>
            <p>
              ກວດຍອດເງິນຂ້າມ<br />ທະນາຄານຜ່ານຕູ້ ATM
            </p>
          </div>
        </div>
        <div class="titleinfopage1">
          <div>
            <p>
              ການກວດຍອດເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM ແມ່ນນຳໃຊ້ລະບົບ<br />
              ແລັບໃນການເຊື່ອມໂຍງຕູ້ເອທີເອັມຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກ<br />
              ຂອງບໍລິສັດລາວ ເນເຊີນນໍເພເມັ້ນ ເນັດເວີກ ໃຫ້ສາມາດໃຊ້ຟັງຊັ່ນການກວດ<br />
              ຍອດເງິນຂ້າມທະນາຄານໄດ້.
            </p>
          </div>
        </div>
        <div class="btnproduct">
          <div data-aos="fade-up" data-aos-once="true">
            <button class="button-66" role="button">
              <i class="fa-solid fa-caret-right"></i>
              ຜະລິດຕະພັນ ແລະ ການບໍລິການ
            </button>
          </div>
        </div>
      </div>

      <div class="rightcontentpage1">
        <div data-aos="fade-left" data-aos-duration="1400">
          <img
            id="topbg"
            src="../../assets/Products/product1/pd1bg.webp"
            alt=""
          />
        </div>
        <div data-aos="zoom-in" data-aos-duration="1200">
          <img
            id="atmmachine"
            src="../../assets/Products/product1/atmpd1.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>

  <div class="contentproduct1-page2">
    <vdoproduct1 />
  </div>

  <div class="memberservicepage">
    <div class="titleleftbox">
      <h1>FREE</h1>
      <h2>ຄ່າທຳນຽມ 0 ກີບ</h2>
    </div>
    <div class="memberbank">
      <div class="titlemember">
        <h1>ທະນາຄານທີ່ໃຫ້ບໍລິການ</h1>
      </div>
      <div class="memberservice">
        <div class="memberrow">
          <img src="../../assets/logomember-circle/BCEL.png" alt="" />
          <img src="../../assets/logomember-circle/LDB.PNG" alt="" />
          <img src="../../assets/logomember-circle/APBB.PNG" alt="" />
          <img src="../../assets/logomember-circle/JDB.png" alt="" />
          <img src="../../assets/logomember-circle/Maruhan.png" alt="" />
          <img src="/Logomember/lvb1.PNG" alt="" />
        </div>
        <div class="memberrow">
          <img src="../../assets/logomember-circle/ICBC.png" alt="" />
          <img src="../../assets/logomember-circle/BOC.png" alt="" />
          <img src="../../assets/logomember-circle/VTB.png" alt="" />
          <img src="../../assets/logomember-circle/IB.png" alt="" />
          <img src="../../assets/logomember-circle/ACLB.png" alt="" />
          <img src="../../assets/logomember-circle/BIC.png" alt="" />
        </div>
        <div class="memberrow">
          <img src="../../assets/logomember-circle/SACOM.PNG" alt="" />
          <img src="/Logomember/STB.png" alt="" />
          <img src="../../assets/logomember-circle/Kasikorn.png" alt="" />
          <img src="../../assets/logomember-circle/PUB.png" alt="" />
        </div>
      </div>
    </div>
  </div>

  <mainfooter />
</template>

<style scoped>
.memberrow img {
  width: 100px;
  height: 100px;
  margin-right: 10px;
}

.memberrow {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 20%;
}

.memberservice {
  width: 80%;
  height: 80%;
  padding-top: 50px;
  margin: 0 auto;
}

.titlemember h1 {
  font-size: 89px;
  background-image: linear-gradient(45deg, #0011ff, #00bfff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.titlemember {
  width: 100%;
  height: 10rem;
}

.memberbank {
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.titleleftbox h2 {
  font-size: 6.2rem;
  color: #fff;
  font-weight: bold;
  padding-left: 50px;
  font-family: "Noto Sans Lao", sans-serif;
}

.titleleftbox h1 {
  font-size: 13.5rem;
  color: #fff;
  font-family: "Inter";
  font-weight: 900;
  padding-left: 50px;
  padding-top: 200px;
}

.titleleftbox {
  width: 45%;
  line-height: 1.2;
  height: 890px;
}

.memberservicepage {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 50rem;
  background-image: url(../../assets/Products/product1/bgofproduct.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.contentproduct1-page2 {
  width: 100%;
  height: 900px;
}

.boxpadding {
  width: 100%;
  height: 100px;
  background-color: #fff;
}

#atmmachine {
  width: 700px;
  height: 700px;
  position: relative;
  z-index: 1;
  bottom: 280px;
  right: 220px;
}

#topbg {
  width: 550px;
  height: 460px;
  border-radius: 10px;
  position: relative;
  top: 30px;
  object-fit: cover;
  right: -150px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
  font-weight: bold;
  padding-bottom: 70px;
}

.navigatorlink p {
  color: #fff;
  font-size: 20px;
  font-family: "Noto Sans Lao", sans-serif;
}

.btnproduct button {
  font-family: "Noto Sans Lao", sans-serif;
  margin-top: 120px;
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
</style>
