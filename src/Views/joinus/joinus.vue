<script setup lang="ts">
import navbarview2 from '../../components/navbar/navbarview2.vue';
import mainfooter from '../../components/footer/mainfooter.vue';
import positionDropdown from '../../components/Dropdown/position-dropdown.vue';
import department from '../../components/Dropdown/department.vue';
import levels from '../../components/Dropdown/levels.vue';
import imageswiper from '../../components/autoscrolling/imageswiper.vue';
</script>


<template>
    <navbarview2></navbarview2>
    <div class="navigatorcontent">
        <img id="navigator-img" src="../../assets/joinus/navigatorjoinus.png" alt="">
        <div class="navigator-info-container">
            <div class="titlenavigator">
                <div data-aos="zoom-in-down" data-aos-duration="1000">
                    <p>ຮ່ວມງານກັບພວກເຮົາ</p>
                </div>
            </div>
            <div class="navigatorlink">
                <div data-aos="zoom-out-up" data-aos-duration="1000">
                    <p>ໜ້າຫຼັກ <span style="padding-right: 40px; padding-left: 40px;"><i
                                class="fa-solid fa-chevron-right"></i></span> ຮ່ວມງານກັບພວກເຮົາ
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="whyuscontainer">
        <img id="whyusbg" src="../../assets/joinus/bcakgroundcontent1.png" alt="">
        <div class="infotitle">
            <div class="logo">
                <img src="../../assets/Logo-lapnet/logolapnet.PNG" alt="">
                <p>LAPNet</p>
            </div>
            <div class="header">
                <div data-aos="fade-right" data-aos-duration="1000">
                    <h1> WHY US?</h1>
                </div>
            </div>
            <div class="title">
                <div data-aos="fade-up" data-aos-duration="1200">

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

            </div>
            <div data-aos="fade-up" data-aos-duration="1200">
                <div class="contact">
                    <div class="facebook">
                        <i class="fa-brands fa-facebook"></i>
                        <a href="https://www.facebook.com/laonationalpaymentnetwork"> <p>Lao National Payment Network</p></a>
                       
                    </div>
                    <div class="website">
                        <i class="fa-solid fa-earth-americas"></i>
                        <a href="https://www.lapnet.com.la">
                            <p>www.lapnet.com.la</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="swipercontainer">
            <img id="swiperbackground" src="../../assets/joinus/swiper.png" alt="">
            <div class="leftboxinfo">
                <div class="lifeatlapnetlogo">
                    <img src="../../assets/Logo-lapnet/logolapnet.PNG" alt="">
                    <p>Lao National Payment Network</p>
                </div>
                <div class="flexdisplaypreview">
                    <div class="headerswiper">
                        <div data-aos="fade-right" data-aos-duration="200">
                            <h1>LIFT AT</h1>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="400">
                            <p>LAPNet</p>
                        </div>


                    </div>
                    <div class="swiperdotpreview">
                        <imageswiper></imageswiper>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">

        <div class="position">
            <div class="headerposition">
                <h1> POSITION</h1>
            </div>
            <div class="dropdowncontent">
                <position-dropdown></position-dropdown>
                <department></department>
                <levels></levels>
            </div>
        </div>
    </div>
    <mainfooter></mainfooter>

</template>


<style scoped>
.dropdowncontent {
    width: 80%;

    height: 200px;
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
}

.headerposition h1 {
    font-size: 90px;
        font-family: "Inter";
    font-weight: bold;
    color: #2855bf;
    background-image: linear-gradient(45deg, #2855bf, #416bd0 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
}

.headerposition {

    width: 100%;
    height: 210px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.position {
    width: 100%;
    height: 1000px;
    margin-top: 1000px;


}

.positioncontainer {
    width: 100%;
    height: 900px;



}

.flexdisplaypreview {
    display: flex;

}

.swiperdotpreview {
    width: 1090px;
    height: 1900px;
    position: relative;
    left: 262px;
    top: -120px;

}

.headerswiper p {
        font-family: "Inter";
    color: #2855bf;
    background-image: linear-gradient(45deg, #2855bf, #416bd0 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
}

.headerswiper {
        font-family: "Inter";
    padding-top: 50px;
    width: 350px;
    height: 300px;
    line-height: 1.2;
    margin-left: 50px;
    margin-top: 165px;


}

.headerswiper {
    font-size: 80px;
    font-weight: bold;

}

.lifeatlapnetlogo p {
    font-size: 30px;
    color: #fff;
        font-family: "Inter";
}

.lifeatlapnetlogo img {
    width: 80px;
    height: 80px;
}

.lifeatlapnetlogo {
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 120px;

    display: flex;
}

.leftboxinfo {
    width: 45%;
    height: 800px;


}

#swiperbackground {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
}

.swipercontainer {
    width: 100%;
    height: 930px;

    margin-top: 130px;
}

.website p {
    font-size: 25px;
    margin-left: 10px;
}

.website i {
    font-size: 35px;
    color: rgb(28, 0, 213);
}

.facebook p {
    font-size: 25px;
    margin-left: 10px;
}

.facebook i {
    font-size: 35px;
    color: rgb(28, 0, 213);
}

.facebook {
    display: flex;
    align-items: center;
    padding-top: 40px;
}

.website {
    display: flex;
    align-items: center;
    margin-top: 20px;
}

.contact {
    width: 100%;
    height: 170px;
    font-family: "Inter";
    margin-top: 60px;
}

.title p {
    font-size: 20px;
    font-family: "Noto Sans Lao", sans-serif;
    line-height: 2.2;

}

.title {
    width: 100%;
    height: 300px;

}

.header h1 {
    font-size: 100px;
    font-weight: bold;
    font-family: "Inter";
    font-weight: bold;

}

.header {
    width: 100%;
    height: 170px;
    margin-top: 50px;

}

.logo p {
    font-size: 25px;
    font-weight: bold;
    font-family: "Inter";
}

.logo img {
    width: 80px;
    height: 80px;
    margin-right: 10px;

}

.logo {
    width: 20%;
    height: 60px;

    display: flex;
    align-items: center;

}

.infotitle {
    width: 53%;
    height: 90%;
    margin-top: 50px;
    margin-left: 130px;

}

#whyusbg {
    position: absolute;
    z-index: -2;
}

.whyuscontainer {
    width: 100%;
    height: 900px;



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
    object-fit: cover;
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
</style>