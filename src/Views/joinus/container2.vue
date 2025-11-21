<template>
  <div class="containerhomepage2">
    <!-- รูปฝั่งซ้าย -->
    <div class="cardview">
      <img src="../../assets/Homepage/newmission-2.png" alt="">
    </div>

    <!-- ข้อความฝั่งขวา -->
    <div class="titlecontainer">
      <div class="header">
        <h1>ວິໄສທັດຂອງພວກເຮົາ</h1>
      </div>

      <!-- กล่อง 01 -->
      <div class="boxinfo first-box">
        <div class="number">
          <p>01</p>
        </div>
        <div class="infovision">
          <h2>ວິໄສທັດ</h2>
          <p>
            ພັດທະນາລະບົບການຊໍາລະທຸລະກຳຍ່ອຍໃຫ້ເປັນສູນກາງການຊໍາລະຂອງບັນດາຜູ້ໃຫ້ບໍລິການ<br>
            ຊໍາລະ ທັງພາຍໃນ ແລະ ສາກົນ,
            ແນໃສ່ໃຫ້ປະຊາຊົນລາງໄດ້ໃຊ້ບໍລິການຊໍາລະທີ່ສະດວກວ່ອງໄວ,<br>
            ທັນສະໄໝ, ປອດໄພ, ຕົ້ນທືນຕໍາ ແລະ
            ເພື່ອໃຫ້ບໍລິສັດການເປັນໂຄງຮ່າງພື້ນຖານໃຫ້ແກ່ການ<br>
            ຊໍາລະໃນ ສປປ ລາວ.
          </p>
        </div>
      </div>

      <!-- กล่อง 02 -->
      <div class="boxinfo">
        <div class="number">
          <p>02</p>
        </div>
        <div class="infovision">
          <h2>ພາລະກິດ</h2>
          <p>
            ພັດທະນາລະບົບການຊໍາລະໃຫ້ມີຄວາມຫຼາກຫຼາຍ, ທັນສະໄໝ, ຕອບຮັບໄດ້ທຸກຊ່ອງທາງ<br>
            ການຊໍາລະທີ່ເກີດຂື້ນ, ເຕົ້າໂຮມເອົາບັນດາທະນາຄານທຸລະກິດ, ສະຖາບັນການເງິນ ແລະ ບໍລິສັດ<br>
            Fintech ທີ່ເປັນຜູ້ໃຫ້ບໍລິການຊໍາລະ ໃຫ້ເຂົ້າມາເປັນສະມາຊີກຂອງບໍລິສັດ ເພື່ອພ້ອມກັນໃຫ້<br>
            ບໍລິການລະບົບການຊໍາລະແກ່ສັງຄົມ, ຫັນເອົາການເຊື່ອມຕໍ່ສາກົນທີ່ມີລັກສະນະກະແຈກກະຈາຍ<br>
            ລວມສູນເຂົ້າມາເຊື່ອມຕໍ່ເປັນຮູບແບບລະບົບປະຕູດຽວເພື່ອຫຼຸດຜ່ອນຕົ້ນທືນລວມຂອງທົ່ວ<br>
            ລະບົບ, ເສີມຂະຫຍາຍຄວາມຮູ້-ເຂົ້າໃຈໃຫ້ແກ່ມວນຊົນໄດ້ຮັບຮູ້ເຖິງຄວາມສຳຄັນ ແລະ
            ປະໂຫຍກ<br>
            ຂອງການນຳໃຊ້ລະບົບການຊໍາລະເອເລັກໂຕຣນິກຢ່າງຖ່ອງແທ້ ເພື່ອເຮັດໃຫ້ມວນຊົນໄດ້ນຳໃຊ້<br>
            ລະບົບການຊໍາລະຢ່າງຖືກຕ້ອງ ແລະ ປອດໄພ ເປັນການເສີມສ້າງຄວາມໝັ້ນໃຈໃຫ້ແກ່ມວນຊົນ.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.containerhomepage2 {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 16px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  box-sizing: border-box;
}

/* ภาพฝั่งซ้าย */
.cardview {
  flex: 0 1 45%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cardview img {
  width: 100%;
  max-width: 700px;
  height: auto;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: block;
}

/* กล่องข้อความฝั่งขวา */
.titlecontainer {
  flex: 1 1 55%;
  margin-top: 20px;
}

.header {
  width: 100%;
  margin-bottom: 32px;
}

.header h1 {
  font-size: 70px;
  font-weight: bold;
  font-family: "Noto Sans Lao", sans-serif;
  color: #000CF0;
  background-image: linear-gradient(45deg, #000CF0, #0055E8 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

/* กล่องวิสัยทัศน์/ภารกิจ */
.boxinfo {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 32px;
  gap: 16px;
}

.first-box {
  margin-top: 24px;
}

.number {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
}

.number p {
  width: 100%;
  height: 100%;
  background: linear-gradient(153deg, rgba(4, 50, 198, 1) 0%, rgba(2, 24, 96, 1) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Inter";
  font-weight: bold;
  font-size: 20px;
}

.infovision {
  flex: 1 1 auto;
  max-width: 720px;
}

.infovision h2 {
  font-size: 29px;
  color: #00089b;
  font-weight: bold;
  font-family: "Noto Sans Lao", sans-serif;
}

.infovision p {
  font-size: 19px;
  font-family: "Noto Sans Lao", sans-serif;
  padding-top: 16px;
  line-height: 1.7;
}

/* ---------- RESPONSIVE ---------- */

/* Tablet ลงมา */
@media (max-width: 1024px) {
  .containerhomepage2 {
    flex-direction: column;
    align-items: center;
    padding: 40px 16px;
  }

  .cardview {
    flex: 0 0 auto;
    width: 100%;
  }

  .titlecontainer {
    width: 100%;
    margin-top: 32px;
  }

  .header h1 {
    font-size: 48px;
  }
}

/* มือถือ */
@media (max-width: 768px) {
  .containerhomepage2 {
    padding: 32px 16px;
  }

  .header h1 {
    font-size: 34px;
    text-align: center;
  }

  .boxinfo {
    align-items: flex-start;
    gap: 12px;
  }

  .number {
    width: 60px;
    height: 60px;
  }

  .number p {
    font-size: 18px;
  }

  .infovision h2 {
    font-size: 24px;
  }

  .infovision p {
    font-size: 16px;
  }
}

/* มือถือจอเล็กมาก */
@media (max-width: 480px) {
  .containerhomepage2 {
    padding: 24px 12px;
  }

  .header h1 {
    font-size: 28px;
  }

  .boxinfo {
    flex-direction: row;
  }

  .infovision p {
    font-size: 15px;
  }
}
</style>
