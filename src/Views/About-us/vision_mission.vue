<script setup lang="ts">
import navbarview2 from '../../components/navbar/navbarview2.vue';
import mainfooter from '../../components/footer/mainfooter.vue';
</script>


<template>
    <navbarview2></navbarview2>
    <div class="navigatorcontent">
        <img id="navigator-img" src="../../assets/Aboutus/Vision-mission/navigatormission-bg.png" alt="">
        <div class="navigator-info-container">
            <div class="titlenavigator">
                <div data-aos="zoom-in-down" data-aos-duration="1000">
                    <p>ວິໄສທັດ ແລະ ພາລະກິດ</p>
                </div>

            </div>
            <div class="navigatorlink">
                <div data-aos="zoom-out-up" data-aos-duration="1000">
                    <p>ໜ້າຫຼັກ <span style="padding-right: 40px; padding-left: 40px;"><i
                                class="fa-solid fa-chevron-right"></i></span> ກ່ຽວກັບພວກເຮົາ <span
                            style="padding-right: 40px; padding-left: 40px;"><i class="fa-solid fa-chevron-right"></i>
                        </span> ວິໄສທັດ ແລະ ພາລະກິດ</p>
                </div>
            </div>
        </div>
    </div>
    <div class="infocontainer">
        <div class="infodetail-vision">
            <div data-aos="fade-right" data-aos-duration="1000">
                <h1>ວິໄສທັດ</h1>
            </div>
            <div data-aos="fade-up" data-aos-duration="1200">
                <p>ພັດທະນາລະບົບການຊໍາລະທຸລະກຳຍ່ອຍໃຫ້ເປັນສູນກາງການຊໍາລະຂອງບັນດາຜູ້ໃຫ້ບໍລິການຊໍາລະ ທັງພາຍໃນ ແລະ ສາກົນ,
                    ແນໃສ່ໃຫ້ປະຊາຊົນລາງໄດ້ໃຊ້ບໍລິການຊໍາລະທີ່ສະດວກວ່ອງໄວ, ທັນສະໄໝ, ປອດໄພ, ຕົ້ນທືນຕໍາ ແລະ
                    ເພື່ອໃຫ້ບໍລິສັດການເປັນໂຄງຮ່າງພື້ນຖານໃຫ້ແກ່ການຊໍາລະໃນ ສປປ ລາວ.</p>
            </div>

        </div>

        <div class="imgvision-bg">
            <div data-aos="fade-left" data-aos-duration="1500">
                <img src="../../assets/Aboutus/Vision-mission/Vision.png" alt="">
            </div>

        </div>


    </div>
    <div class="infodetail-mission">
        <div class="bg-mission">
            <div data-aos="fade-right" data-aos-duration="1000">
                <img src="../../assets/Aboutus/Vision-mission/mission.jpg" alt="">
            </div>
        </div>
        <div class="titlemission">
            <div data-aos="fade-left" data-aos-duration="1200">
                <h1>ພາລະກິດ</h1>
            </div>
            <div data-aos="fade-up" data-aos-duration="1400">
                <p>ພັດທະນາລະບົບການຊໍາລະໃຫ້ມີຄວາມຫຼາກຫຼາຍ, ທັນສະໄໝ, ຕອບຮັບໄດ້ທຸກຊ່ອງທາງການຊໍາລະທີ່ເກີດຂື້ນ,
                    ເຕົ້າໂຮມເອົາບັນດາທະນາຄານທຸລະກິດ, ສະຖາບັນການເງິນ ແລະ ບໍລິສັດ Fintech ທີ່ເປັນຜູ້ໃຫ້ບໍລິການຊໍາລະ
                    ໃຫ້ເຂົ້າມາເປັນສະມາຊີກຂອງບໍລິສັດ ເພື່ອພ້ອມກັນໃຫ້ບໍລິການລະບົບການຊໍາລະແກ່ສັງຄົມ,
                    ຫັນເອົາການເຊື່ອມຕໍ່ສາກົນທີ່ມີລັກສະນະກະແຈກກະຈາຍລວມສູນເຂົ້າມາເຊື່ອມຕໍ່ເປັນຮູບແບບລະບົບປະຕູດຽວເພື່ອຫຼຸດຜ່ອນຕົ້ນທືນລວມຂອງທົ່ວລະບົບ,
                    ເສີມຂະຫຍາຍຄວາມຮູ້-ເຂົ້າໃຈໃຫ້ແກ່ມວນຊົນໄດ້ຮັບຮູ້ເຖິງຄວາມສຳຄັນ ແລະ
                    ປະໂຫຍກຂອງການນຳໃຊ້ລະບົບການຊໍາລະເອເລັກໂຕຣນິກຢ່າງຖ່ອງແທ້
                    ເພື່ອເຮັດໃຫ້ມວນຊົນໄດ້ນຳໃຊ້ລະບົບການຊໍາລະຢ່າງຖືກຕ້ອງ ແລະ ປອດໄພ ເປັນການເສີມສ້າງຄວາມໝັ້ນໃຈໃຫ້ແກ່ມວນຊົນ.
                </p>
            </div>
        </div>
    </div>
    <mainfooter></mainfooter>
</template>

<style>
.titlemission p {
    font-size: 23px;
    font-family: "Noto Sans Lao", sans-serif;
    line-height: 2.0;
    padding-right: 70px;
    padding-top: 40px;
}

.titlemission h1 {
    padding-top: 80px;
    font-size: 110px;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;
    color: #0066ff;
    background-image: linear-gradient(45deg, #3284ff, #0066ff 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
}

.titlemission {
    width: 55%;
    height: 100%;

}

.bg-mission {
    width: 43%;
    height: 100%;

}

.bg-mission img {
    padding-top: 50px;
}

.infodetail-mission {
    width: 97%;
    margin-left: 3%;
    height: 800px;

    display: flex;
}

.infodetail-vision {
    padding-top: 100px;
}

.infodetail-vision p {
    font-size: 23px;
    font-family: "Noto Sans Lao", sans-serif;
    padding-right: 70px;
    padding-top: 40px;
    line-height: 2.0;
}

.infodetail-vision h1 {
    padding-top: 20px;
    font-size: 110px;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;
    color: #0066ff;
    background-image: linear-gradient(45deg, #3284ff, #0066ff 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
}


.imgvision-bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.imgvision-bg {
    width: 40%;
    height: 100%;

}

.infodetail-vision {
    width: 50%;

    margin-left: 10%;

}

.infocontainer {
    width: 100%;
    height: 680px;

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
    font-size: 80px;
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
</style>
