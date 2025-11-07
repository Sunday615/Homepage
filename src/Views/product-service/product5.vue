<script setup lang="ts">

import navbarview2 from '../../components/navbar/navbarview2.vue';
import mainfooter from '../../components/footer/mainfooter.vue';

import { onMounted } from 'vue'

onMounted(() => {
    // เมื่อ component นี้ถูกโหลด → scroll ขึ้นบนสุด
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' // ทำให้เลื่อนนุ่มๆ
    })
})

</script>




<template>
    <navbarview2></navbarview2>
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
                        </span>ການຊໍາລະເງິນຂ້າມທະນາຄານຜ່ານ QR</p>
                </div>
            </div>
        </div>
    </div>
    <div class="boxpadding"></div>
    <div class="conatinerproduct1-page1">
        <img id="bgproductpage1" src="../../assets/products/product5/product5bg.png" alt="">
        <div class="containerframe1">
            <div class="leftcontentpage1">
                <div class="producttitlepage1">
                    <p>ຜະລິດຕະພັນ ແລະ ການບໍລີການ</p>
                </div>
                <div class="headerproductpage1">
                    <p> ການຊໍາລະເງິນຂ້າມ<br>ທະນາຄານຜ່ານ QR</p>
                </div>
                <div class="titleinfopage1">
                    <p>ການໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື (Fund Transfer via Mobile <br> Application) ໂດຍນຳໃຊ້ລະບົບ LMPS
                        ໃນການເຊື່ອມໂຍງຜ່ານ<br>Applications ຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກຂອງບໍລິສັດລາວ <br>
                        ເນເຊີນນໍເພເມັ້ນ ເນັດເວີກ ໃຫ້ສາມາດໃຊ້ຟັງຊັ່ນການດຳເນີນທຸລະກຳໂອນ <br>ເງິນຂ້າມທະນາຄານໄດ້.</p>
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
                    <img id="topbg" src="../../assets/products/product5/toppd5.png" alt="">
                </div>
                <div data-aos="zoom-in" data-aos-duration="1200">
                    <img id="atmmachine" src="../../assets/products/product5/mobilemockuppd5.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="contentproduct1-page2">
        <img id="bgpd1-page2" src="../../assets/products/product5/modernnew.png" alt="">
        <div class="headerpage2-box1">
            <div data-aos-duration="1000" data-aos="zoom-in-down">
                <h1>ຜົນປະໂຫຍດທີ່ໄດ້ຮັບ</h1>
                <h2>ດ້ານທະນາຄານສະມາຊິກ</h2>
                <p>ຊ່ວຍຫຼຸດຜ່ອນຕົ້ນທຶນທາງດ້ານບຸກຄະລາກອນທີ່ໃຫ້ບໍລິການໂອນເງິນຂ້າມທະນາຄານຜ່ານໜ່ວຍງານບໍລິການ ຫຼື ຕູ້ ATM
                    ຂອງແຕ່ລະ<br>ທະນາຄານທຸລະກິດທີ່ເປັນສະມາຊິກຂອງບໍລິສັດ LAPNet ນັ້ນ, ໃຫ້ລູກຄ້າຫັນມານຳໃຊ້
                    ການໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື ໃນການ<br>ດຳເນີນທຸລະກຳ.

                </p>
            </div>
        </div>
        <div class="headerpage2-box1">
            <div data-aos-duration="1000" data-aos="zoom-in-down">
                <h2>ດ້ານລູກຄ້າຂອງທະນາຄານ</h2>
                <p>ຜະລິດຕະພັນ ການໂອນເງິນຂ້າມທະນາຄານເທິງມືຖືນີ້
                    ຈະຊ່ວຍອຳນວຍຄວາມສະດວກໃຫ້ແກ່ມວນຊົນໃນການດຳເນີນທຸລະກຳທາງການເງິນ<br>ຢູ່ເທິງມືຖືໄດ້ງ່າຍ ແລະ ວ່ອງໄວຂື້ນ
                    ໂດຍນຳໃຊ້ Applications ຂອງແຕ່ລະທະນາຄານທຸລະກິດທີ່ເປັນສະມາຊິກຂອງບໍລິສັດ LAPNet,<br>
                    ຕາມຄຳຂວັນທີ່ກ່າວໄວ້ວ່າ:
                    “ ທຸກທີ່ ທຸກເວລາ ທຸກຊ່ອງທາງການຊຳລະ”

                </p>
            </div>
        </div>

    </div>
    <div class="memberservice">
        <img id="bgmember" src="../../assets/products/product5/product5-bg-2.png" alt="">
        <div data-aos="zoom-out-up" data-aos-duration="1000">
            <h1>ທະນາຄານທີ່ເປັນສະມາຊິກຂອງການບໍລິການ<br>ຊຳລະເງິນຂ້າມທະນາຄານຜ່ານ LAPNet QR Payment</h1>
        </div>

        <div class="logoboxcontainer">

            <div class="logoline1">
                <div data-aos="fade-down" data-aos-duration="800">
                    <div class="logobox">
                        <img style="width: 160px;" src="../../assets/Logomember- retangle/bcelretangle.png" alt="">
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-duration="800">
                    <div class="logobox">
                        <img style="width:195px" src="../../assets/Logomember- retangle/ldbwithborder.png" alt="">

                    </div>
                </div>
                <div data-aos="fade-down" data-aos-duration="800">
                    <div class="logobox">
                        <img style="width:150px" src="../../assets/Logomember- retangle/apbpng.png" alt="">

                    </div>
                </div>
                <div data-aos="fade-down" data-aos-duration="800">
                    <div class="logobox">
                        <img style="width:190px" src="../../assets/Logomember- retangle/jdb.png" alt="">
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-duration="800">
                    <div class="logobox">
                        <img style="width:180px" src="../../assets/Logomember- retangle/MARU.jpg" alt=""></img>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-duration="800">
                    <div class="logobox">
                        <img style="width:190px" src="../../assets/Logomember- retangle/LVB.png" alt="">
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-duration="800">
                    <div class="logobox">
                        <img style="width:190px" src="../../assets/Logomember- retangle/BIC.png" alt=""></img>
                    </div>
                </div>
            </div>
            <div class="logoline2">
                <div data-aos="fade-down" data-aos-duration="900" data-aos-delay="500">
                    <div class="logobox">
                        <img style="width:190px" src="../../assets/Logomember- retangle/ICBC.svg.png" alt="">
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-duration="900" data-aos-delay="500">
                    <div class="logobox">
                        <img style="width:190px" src="../../assets/Logomember- retangle/bboc.png" alt="">
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-duration="900" data-aos-delay="500">
                    <div class="logobox">
                        <img style="width:190px"
                            src="../../assets/Logomember- retangle/y-nghia-sau-sac-dang-sau-thiet-ke-logo-vietinbank-0.png"
                            alt="">
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-duration="900" data-aos-delay="500">
                    <div class="logobox">
                        <img style="width:190px" src="../../assets/Logomember- retangle/IB.png" alt=""></img>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-duration="900" data-aos-delay="500">
                    <div class="logobox">
                        <img style="width:190px" src="../../assets/Logomember- retangle/aceleda.png" alt="">
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-duration="900" data-aos-delay="500">
                    <div class="logobox">
                        <img style="width:190px" src="../../assets/Logomember- retangle/sacombank.png" alt="">
                    </div>
                </div>
            </div>
            <div class="logoline3">
                <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="900">
                    <div class="logobox">
                        <img style="width:160px" src="../../assets/Logomember- retangle/Stbretangle.png" alt="">
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="900">
                    <div class="logobox">
                        <img style="width:160px" src="../../assets/Logomember- retangle/kbank.jpg" alt="">
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="900">
                    <div class="logobox">
                        <img style="width:160px" src="../../assets/Logomember- retangle/bflbank.png" alt="">
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="900">
                    <div class="logobox">
                        <img style="width:180px" src="../../assets/Logomember- retangle/psvb.PNG" alt="">
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="900">
                    <div class="logobox">
                        <img style="width:170px" src="../../assets/Logomember- retangle/mbbgblue.jpg" alt=""></img>
                    </div>
                </div>

            </div>
        </div>
    </div>


    <mainfooter></mainfooter>


</template>



<style scoped>
#bgpd1-page2 {
    width: 100%;
    height: 900px;
}

.logobox {
    width: 209px;
    margin-left: 6px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
}

.logoline3 {
    width: 100%;
    height: 32%;
    display: flex;
    justify-content: center;
    margin-top: 5px;
}

.logoline2 {
    width: 100%;
    height: 32%;
    display: flex;
    justify-content: center;
    margin-top: 5px;


}

.logoline1 {
    width: 100%;
    height: 32%;
    display: flex;
    justify-content: center;

}

.logoboxcontainer {
    width: 90%;
    height: 630px;

    margin-left: 5%;
    margin-top: 50px;


}

.memberservice h1 {
    font-size: 55px;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;
    line-height: 1.5;
    color: #fff;
    text-align: center;
    padding-top: 70px;
}

#bgmember {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
}

.memberservice {
    width: 100%;
    height: 960px;

}

.boxpadding {
    width: 100%;
    height: 100px;
}

.headerpage2-box1 {
    width: 57%;
    height: 390px;


    padding-top: 80px;
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
    font-size: 19px;
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

.contentproduct1-page2 {
    width: 100%;
    height: 900px;



}


#atmmachine {
    width: 700px;
    height: 800px;
    position: relative;
    z-index: 1;
    bottom: 580px;
    right: 400px;

}

#topbg {
    width: 550px;
    height: 550px;
    border-radius: 10px;
    position: relative;
    top: -70px;
    right: -150px;


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
    margin-top: 100px;
}

.button-66 {
    font-family: "Noto Sans Lao", sans-serif;
    background-color: #433bff;
    border-radius: 10px;
    border: 0;
    box-shadow: rgba(1, 60, 136, .5) 0 -1px 3px 0 inset, rgba(0, 44, 97, .1) 0 3px 6px 0;
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
    transition: all .2s cubic-bezier(.22, .61, .36, 1);
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