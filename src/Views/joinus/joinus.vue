<script setup lang="ts">
import navbarview2 from '../../components/navbar/navbarview2.vue'
import mainfooter from '../../components/footer/mainfooter.vue'
import positionDropdown from '../../components/Dropdown/position-dropdown.vue'
import department from '../../components/Dropdown/department.vue'
import levels from '../../components/Dropdown/levels.vue'
import imageswiper from '../../components/autoscrolling/imageswiper.vue'
</script>

<template>
  <navbarview2 />

  <!-- Navigator -->
  <div class="navigatorcontent">
    <img id="navigator-img" src="/Joinus/navigatorjoinus.png" alt="" />
    <div class="navigator-info-container">
      <div class="titlenavigator" data-aos="zoom-in-down" data-aos-duration="1000">
        <p>ຮ່ວມງານກັບພວກເຮົາ</p>
      </div>
      <div class="navigatorlink" data-aos="zoom-out-up" data-aos-duration="1000">
        <p>
          ໜ້າຫຼັກ
          <span style="padding-right: 40px; padding-left: 40px">
            <i class="fa-solid fa-chevron-right"></i>
          </span>
          ຮ່ວມງານກັບພວກເຮົາ
        </p>
      </div>
    </div>
  </div>

  <!-- WHY US -->
  <div class="whyuscontainer">
    <div class="infotitle">
      <div class="logo">
        <img src="../../assets/Logo-lapnet/logolapnet.PNG" alt="" />
        <p>LAPNet</p>
      </div>

      <div class="header" data-aos="fade-right" data-aos-duration="1000">
        <h1>WHY US?</h1>
      </div>

      <div class="title" data-aos="fade-up" data-aos-duration="1200">
        <p>
          ພັດທະນາລະບົບການຊໍາລະໃຫ້ມີຄວາມຫຼາກຫຼາຍ, ທັນສະໄໝ, ຕອບຮັບໄດ້ທຸກຊ່ອງທາງການຊໍາລະທີ່ເກີດຂື້ນ,
          ເຕົ້າໂຮມເອົາບັນດາທະນາຄານທຸລະກິດ, ສະຖາບັນການເງິນ ແລະ ບໍລິສັດ Fintech ທີ່ເປັນຜູ້ໃຫ້ບໍລິການຊໍາລະ
          ໃຫ້ເຂົ້າມາເປັນສະມາຊີກຂອງບໍລິສັດ ເພື່ອພ້ອມກັນໃຫ້ບໍລິການລະບົບການຊໍາລະແກ່ສັງຄົມ,
          ຫັນເອົາການເຊື່ອມຕໍ່ສາກົນທີ່ມີລັກສະນະກະແຈກກະຈາຍລວມສູນເຂົ້າມາເຊື່ອມຕໍ່ເປັນຮູບແບບລະບົບປະຕູດຽວເພື່ອຫຼຸດຜ່ອນຕົ້ນທືນລວມຂອງທົ່ວລະບົບ,
          ເສີມຂະຫຍາຍຄວາມຮູ້-ເຂົ້າໃຈໃຫ້ແກ່ມວນຊົນໄດ້ຮັບຮູ້ເຖິງຄວາມສຳຄັນ ແລະ
          ປະໂຫຍກຂອງການນຳໃຊ້ລະບົບການຊໍາລະເອເລັກໂຕຣນິກຢ່າງຖ່ອງແທ້
          ເພື່ອເຮັດໃຫ້ມວນຊົນໄດ້ນຳໃຊ້ລະບົບການຊໍາລະຢ່າງຖືກຕ້ອງ ແລະ ປອດໄພ
          ເປັນການເສີມສ້າງຄວາມໝັ້ນໃຈໃຫ້ແກ່ມວນຊົນ.
        </p>
      </div>

      <div class="contact" data-aos="fade-up" data-aos-duration="1200">
        <div class="facebook">
          <i class="fa-brands fa-facebook"></i>
          <a href="https://www.facebook.com/laonationalpaymentnetwork" target="_blank" rel="noreferrer">
            <p>Lao National Payment Network</p>
          </a>
        </div>
        <div class="website">
          <i class="fa-solid fa-earth-americas"></i>
          <a href="https://www.lapnet.com.la" target="_blank" rel="noreferrer">
            <p>www.lapnet.com.la</p>
          </a>
        </div>
      </div>
    </div>

    <div class="paddingbox"></div>
    <imageswiper />
  </div>

  <!-- POSITION -->
  <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
    <div class="position">
      <div class="headerposition">
        <h1>POSITION</h1>
      </div>
      <div class="dropdowncontent">
        <position-dropdown />
        <department />
        <levels />
      </div>
    </div>
  </div>

  <mainfooter />
</template>

<style scoped>
/* ---------- Layout: Position section ---------- */
.position {
  width: 100%;
  height: 800px;
  margin-top: 800px;

}

.headerposition {
  width: 100%;
  height: 140px;


  display: flex;
  justify-content: center;
  align-items: center;
}

.headerposition h1 {
  font-size: 90px;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  color: #2855bf;
  background-image: linear-gradient(45deg, #2855bf, #416bd0 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.dropdowncontent {
  width: 80%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 70px auto 0;
}

/* ---------- WHY US section ---------- */
.whyuscontainer {
  width: 100%;
  height: 900px;
  background-image: url('/Joinus/bcakgroundcontent1.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.infotitle {
  width: 53%;
  height: 90%;
  margin-top: 50px;
  margin-left: 130px;
}

.logo {
  width: 20%;
  height: 60px;
  display: flex;
  align-items: center;
}

.logo img {
  width: 80px;
  height: 80px;
  margin-right: 10px;
}

.logo p {
  font-size: 25px;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
}

.header {
  width: 100%;
  height: 170px;
  margin-top: 50px;
}

.header h1 {
  font-size: 100px;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
}

.title {
  width: 100%;
  height: 300px;
}

.title p {
  font-size: 20px;
  font-family: 'Noto Sans Lao', sans-serif;
  line-height: 2.2;
}

.contact {
  width: 100%;
  height: 170px;
  font-family: 'Inter', sans-serif;
  margin-top: 60px;
}

.facebook,
.website {
  display: flex;
  align-items: center;
}

.facebook {
  padding-top: 40px;
}

.website {
  margin-top: 20px;
}

.facebook i,
.website i {
  font-size: 35px;
  color: rgb(28, 0, 213);
}

.facebook p,
.website p {
  font-size: 25px;
  margin-left: 10px;
}

.contact a {
  text-decoration: none;
  color: inherit;
}

.paddingbox {
  height: 90px;
}

/* ---------- Navigator ---------- */
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
  object-fit: cover;
  position: absolute;
  z-index: -1;
}

.titlenavigator p {
  font-size: 70px;
  color: #fff;
  font-family: 'Noto Sans Lao', sans-serif;
  font-weight: bold;
  padding-bottom: 70px;
}

.navigatorlink p {
  color: #fff;
  font-size: 20px;
  font-family: 'Noto Sans Lao', sans-serif;
}

/* -------------------- RESPONSIVE -------------------- */

/* <= 1200px */
@media (max-width: 1200px) {
  .infotitle {
    width: 80%;
    margin: 50px auto 0;
  }

  .logo {
    width: 100%;
    height: auto;
    margin-bottom: 16px;
  }

  .header h1 {
    font-size: 70px;
  }

  .title p {
    font-size: 18px;
  }

  .position {
    margin-top: 400px;
    height: auto;
  }

  .dropdowncontent {
    height: auto;
  }
}

/* <= 992px */
@media (max-width: 992px) {
  .navigator-info-container {
    width: 90%;
  }

  .titlenavigator p {
    font-size: 50px;
    padding-bottom: 40px;
    text-align: center;
  }

  .header h1 {
    font-size: 50px;
  }

  .infotitle {
    width: 90%;
    margin: 40px auto 0;
  }

  .dropdowncontent {
    width: 90%;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }

  .headerposition h1 {
    font-size: 60px;
  }

  .position {
    margin-top: 250px;
  }
}

/* <= 768px */
@media (max-width: 768px) {
  .navigatorcontent {
    height: 360px;
  }

  #navigator-img {
    height: 360px;
  }

  .titlenavigator p {
    font-size: 34px;
    padding-bottom: 24px;
  }

  .navigatorlink p {
    font-size: 16px;
    text-align: center;
  }

  .whyuscontainer {
    height: auto;
    padding: 40px 16px;
  }

  .infotitle {
    width: 100%;
    margin: 0;
  }

  .logo {
    width: 100%;
    margin-bottom: 16px;
  }

  .logo img {
    width: 60px;
    height: 60px;
  }

  .logo p {
    font-size: 20px;
  }

  .header {
    height: auto;
    margin-top: 24px;
  }

  .header h1 {
    font-size: 36px;
  }

  .title {
    height: auto;
    margin-top: 16px;
  }

  .title p {
    font-size: 16px;
    line-height: 1.9;
  }

  .contact {
    margin-top: 32px;
  }

  .facebook p,
  .website p {
    font-size: 18px;
  }

  .facebook i,
  .website i {
    font-size: 26px;
  }

  .dropdowncontent {
    flex-direction: column;
    width: 100%;
    align-items: stretch;
    margin-top: 24px;
  }

  .headerposition {
    height: auto;
    padding: 32px 0 8px;
  }

  .headerposition h1 {
    font-size: 40px;
  }

  .position {
    margin-top: 120px;
    height: auto;
    padding-bottom: 40px;
  }
}
</style>
