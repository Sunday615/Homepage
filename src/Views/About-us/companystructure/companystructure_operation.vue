<script setup lang="ts">
import navbarview2 from '../../../components/navbar/navbarview2.vue';
import mainfooter from '../../../components/footer/mainfooter.vue';
import navbarcompanystructure from '../../../components/navbarcompanystructure/navbarcompanystructure.vue';
</script>

<template>



    <navbarview2></navbarview2>
    <div class="navigatorcontent">
        <img id="navigator-img" src="../../../assets/Aboutus/Company/navigatormission-bg.png" alt="">
        <div class="navigator-info-container">
            <div class="titlenavigator">
                <div data-aos="zoom-in-down" data-aos-duration="1000">
                    <p>ໂຄງຮ່າງການຈັດຕັ້ງ</p>
                </div>
            </div>
            <div class="navigatorlink">
                <div data-aos="zoom-out-up" data-aos-duration="1000">
                    <p>ໜ້າຫຼັກ <span style="padding-right: 40px; padding-left: 40px;"><i
                                class="fa-solid fa-chevron-right"></i></span> ກ່ຽວກັບພວກເຮົາ <span
                            style="padding-right: 40px; padding-left: 40px;"><i class="fa-solid fa-chevron-right"></i>
                        </span> ໂຄງຮ່າງການຈັດຕັ້ງ<i class="fa-solid fa-chevron-right"
                            style="padding-left: 40px; padding-right: 40px;"></i> ພະແນກດຳເນີນງານ </p>
                </div>
            </div>
        </div>
    </div>
    <div class="navbarcompany">
        <navbarcompanystructure></navbarcompanystructure>
    </div>
    <div class="companystructure">
        <div data-aos="fade-up" data-aos-duration="1200">
            <img src="../../../assets/Aboutus/Company/Operation.png" alt="">
        </div>
    </div>
    <mainfooter></mainfooter>
</template>


<style scoped>
.navbarcompany {
    width: 100%;
    height: 170px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.companystructure img {
    width: 100%;
    height: 100%;
}

.companystructure {
    width: 100%;
    height: auto;

}

.navigatorcontent {
    width: 100%;
    height: 300px;

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