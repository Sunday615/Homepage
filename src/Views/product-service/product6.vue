<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { gsap } from "gsap";

import navbarview2 from "../../components/navbar/navbarview2.vue";
import mainfooter from "../../components/footer/mainfooter.vue";
import vdoproduct6 from "../../components/vdoproductbg/vdoproduct6.vue";
import crossborder from "../../components/Swipercrossborder/crossborder.vue";
import routerbuttonarea from "../../components/Router Navigation/routerbuttonarea.vue";


import vdoproductcrossborderKH_LA from "../../components/vdoproductbg/crossborder/vdoproductcrossborderKH_LA.vue";
import vdoproductcrossborderLA_KH from "../../components/vdoproductbg/crossborder/vdoproductcrossborderLA_KH.vue";
import vdoproductcrossborderTH_LA from "../../components/vdoproductbg/crossborder/vdoproductcrossborderTH_LA.vue";
import vdoproductcrossborderLA_TH from "../../components/vdoproductbg/crossborder/vdoproductcrossborderLA_TH.vue";
import vdoproductcrossborderVN_LA from "../../components/vdoproductbg/crossborder/vdoproductcrossborderVN_LA.vue";
import vdoproductcrossborderCN_LA from '../../components/vdoproductbg/crossborder/vdoproductcrossborderCN_LA.vue'



const route = useRoute();


const videoBox = ref<HTMLElement | null>(null);


const currentVideoComponent = computed(() => {
    const path = route.path;

    switch (path) {
        case "/crossborder/kh-la":
            return vdoproductcrossborderKH_LA;
        case "/crossborder/la-kh":
            return vdoproductcrossborderLA_KH;
        case "/crossborder/th-la":
            return vdoproductcrossborderTH_LA;
        case "/crossborder/la-th":
            return vdoproductcrossborderLA_TH;
        case "/crossborder/vn-la":
            return vdoproductcrossborderVN_LA;
        case "/crossborder/la-vn":
            return vdoproductcrossborderVN_LA;
        case "/crossborder/ch-la":
            return vdoproductcrossborderCN_LA;
        case "/crossborder/la-ch":
            return vdoproductcrossborderCN_LA;
        default:
            return vdoproductcrossborderKH_LA;
    }
});


watch(
    () => route.path,
    () => {
        if (!videoBox.value) return;


        gsap.fromTo(
            videoBox.value,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 2.0,
                ease: "power3.out",
            }
        );
    },
    { immediate: true }
);
</script>


<template>
    <navbarview2> </navbarview2>
    <div class="navigatorcontent">
        <img id="navigator-img" src="../../assets/products/navigatorcontent-bg.png" alt="" />
        <div class="navigator-info-container">
            <div class="titlenavigator">
                <div data-aos="zoom-in-down" data-aos-duration="1000">
                    <p>ຜະລິດຕະພັນ ແລະ ການບໍລິການ</p>
                </div>
            </div>
            <div class="navigatorlink">
                <div data-aos="zoom-in" data-aos-duration="1200">
                    <p>
                        ໜ້າຫຼັກ
                        <span style="padding-right: 40px; padding-left: 40px"><i
                                class="fa-solid fa-chevron-right"></i></span> ຜະລິດຕະພັນ ແລະ ການບໍລິການ
                        <span style="padding-right: 40px; padding-left: 40px"><i class="fa-solid fa-chevron-right"></i>
                        </span>ຊຳລະຂ້າມແດນໃນຮູບແບບ QR CODE ລະຫວ່າງປະເທດ
                    </p>

                </div>
            </div>
        </div>
    </div>
    <div class="boxpadding"></div>
    <div class="conatinerproduct1-page1">
        <img id="bgproductpage1" src="../../assets/products/product6/product6bg.png" alt="" />
        <div class="containerframe1">
            <div class="leftcontentpage1">
                <div class="producttitlepage1">
                    <p>ຜະລິດຕະພັນ ແລະ ການບໍລີການ</p>
                </div>
                <div class="headerproductpage1">
                    <p>ຊຳລະເງິນຂ້າມແດນໃນຮູບແບບ<br />QR Code ລະຫວ່າງປະເທດ</p>
                </div>
                <div class="titleinfopage1">
                    <p>
                        ບໍລິສັດ LAPNet ໄດ້ຕໍ່ຍອດການພັດທະນາລະບົບຊຳລະຂ້າມທະນາຄານເທິງມືຖື <br />(LMPS)
                        ເພື່ອຂະຫຍາຍຜະລິດຕະພັນ ຊຳລະຂ້າມທະນາຄານ ໃຫ້ສາມາດຮອງຮັບການ<br />ຊຳລະ ຄ່າສິນຄ້າ -
                        ບໍລິການ ລະຫວ່າງປະເທດ, ໂດຍຜູ້ໃຊ້ Mobile banking ຂອງ<br />ທະນາຄານທີ່ເຂົ້າຮ່ວມໂຄງການ
                        ໃນ ສປປ ລາວ ສາມາດເຮັດທຸລະກຳ
                        ຊຳລະຂ້າມແດນໄປຍັງປະເທດທີ່ເຮັດການເຊື່ອມໂຍງລະບົບຊຳລະຂ້າມແດນ ລະຫວ່າງກັນ ແລະ
                        ຮ້ານຄ້າທີ່ເປີດບັນຊີນຳທະນາຄານທີ່ເຂົ້າຮ່ວມໂຄງການໃນ ສປປ ລາວ
                        ກໍ່ສາມາດຮັບການຊຳລະຄ່າສິນຄ້າ - ບໍລິການ ຈາກນັກທ່ອງທ່ຽວຕ່າງປະເທດທີ່ເຂົ້າມາ ສ ປປ
                        ລາວ, ປັດຈຸບັນ LAPNet ໄດ້ຮ່ວມໂຄງການກັບ 4 ປະເທດຄື: ປະເທດກຳປູເຈຍ, ປະເທດໄທ,
                        ປະເທດຈີນ ແລະ ປະເທດຫວຽດນາມ.
                    </p>
                </div>
                <div data></div>
                <div class="btnproduct">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <button class="button-66" role="button">
                            <i class="fa-solid fa-caret-right"></i> ຜະລິດຕະພັນ ແລະ ການບໍລິການ
                        </button>
                    </div>
                </div>
            </div>
            <div class="rightcontentpage1">
                <div data-aos="fade-left" data-aos-duration="1400">
                    <img id="topbg" src="../../assets/products/product6/topimg.png" alt="" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1200">
                    <img id="atmmachine" src="../../assets/products/product6/mbmockup.png" alt="" />
                </div>
            </div>
        </div>
    </div>
    <div class="contentproduct1-page2">
        <vdoproduct6></vdoproduct6>
    </div>
    <div class="infomationcorss-border">
        <div class="swiperinfo">
            <crossborder></crossborder>
        </div>
        <div class="inputcontainer">
            <h1>ທະນາຄານສະມາຊິກທີ່ເຂົ້າຮ່ວມ</h1>
            <div class="buttonchange">
                <routerbuttonarea></routerbuttonarea>
            </div>
        </div>

        <div class="videocorssbordershow" ref="videoBox">

            <component :is="currentVideoComponent" :key="$route.path" />
        </div>
        <div class="descriptionforcustomer">
            
        </div>
    </div>

    <mainfooter></mainfooter>
</template>

<style scoped>



.descriptionforcustomer {
    width: 100%;
    height: 800px;

    border: 1px solid red;
    margin-top: 50px;

}

.videocorssbordershow {
    margin-top: 40px;
    width: 100%;
    height: 830px;



}

.buttonchange {

    width: 100%;
    display: flex;
    justify-content: center;

    align-items: center;
    height: 150px;
}

.inputcontainer h1 {
    font-size: 90px;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: 700;
    padding-top: 150px;
    text-align: center;
    color: #001072;
    background-image: linear-gradient(90deg, #001072 0%, #5ab3dd 89%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    width: 100%;
    margin: 0 auto;
}

.inputcontainer {
    width: 100%;
    height: auto;
}

.swiperinfo {
    width: 100%;
    height: 600px;

}

.countryswap {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;

}

.infomationcorss-border {
    width: 100%;
    height: auto;

    border: 1px solid rgb(0, 13, 255);

}

#bgpd1-page2 {
    width: 100%;
    height: 820px;
    position: absolute;
    z-index: -1;
}

.headerpage2-box1 {
    width: 100%;
    height: 390px;
    padding-top: 180px;
}

.headerpage2-box1 h2 {
    color: #fff;
    font-size: 30px;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;
    margin-top: 40px;
    text-align: center;
}

.headerpage2-box1 p {
    color: #fff;
    font-size: 23px;
    font-family: "Noto Sans Lao", sans-serif;
    padding-top: 70px;
    text-align: center;
}

.headerpage2-box1 h1 {
    font-size: 60px;
    color: #fff;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;
    text-align: center;
}

.contentproduct1-page2 img {}

.contentproduct1-page2 {
    width: 100%;
    height: auto;
}

.boxpadding {
    width: 100%;
    height: 100px;
    background-color: #fff;
}

#atmmachine {
    width: 650px;
    height: 650px;
    position: relative;
    z-index: 1;
    bottom: 400px;
    right: 250px;
}

#topbg {
    width: 600px;
    height: 500px;
    border-radius: 10px;
    position: relative;
    top: -30px;
    right: -100px;
}

.titleinfopage1 p {
    font-size: 25px;
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
    font-size: 70px;
    color: #000;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;
    line-height: 1.3;
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
    margin-top: 100px;
}

.button-66 {
    font-family: "Noto Sans Lao", sans-serif;
    background-color: #433bff;
    border-radius: 10px;
    border: 0;
    box-shadow: rgba(1, 60, 136, 0.5) 0 -1px 3px 0 inset, rgba(0, 44, 97, 0.1) 0 3px 6px 0;
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
