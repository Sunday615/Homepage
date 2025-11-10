<script setup="ts">

import navbarview2 from '../../components/navbar/navbarview2.vue';
import mainfooter from '../../components/footer/mainfooter.vue';
import infinitescrolling from '../../components/Infinitescrolling/infinitescrolling.vue';

import { onMounted } from 'vue'

onMounted(() => {
 
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' 
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
                        </span> ຖອນເງິນສົດຂ້າມທະນາຄານຜ່ານຕູ້ ATM</p>
                </div>
            </div>
        </div>
    </div>
    <div class="boxpadding"></div>
    <div class="conatinerproduct1-page1">
        <img id="bgproductpage1" src="../../assets/products/product2/bgtemplete-2.png" alt="">
        <div class="containerframe1">
            <div class="leftcontentpage1">
                <div class="producttitlepage1">
                    <p>ຜະລິດຕະພັນ ແລະ ການບໍລີການ</p>
                </div>
                <div class="headerproductpage1">
                    <p> ຖອນເງິນສົດຂ້າມ<br>ທະນາຄານຜ່ານຕູ້ ATM</p>
                </div>
                <div class="titleinfopage1">
                    <p>ການຖອນເງິນສົດຜ່ານຕູ້ເອທີເອັມ
                        ແມ່ນນຳໃຊ້ລະບົບແລັບໃນການ<br>ເຊື່ອມໂຍງຕູ້ເອທີເອັມຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກຂອງ<br>ບໍລິສັດລາວ
                        ເນເຊີນນໍເພເມັ້ນ ເນັດເວີກ ໃຫ້ສາມາດໃຊ້ຟັງຊັ່ນການຖອນ<br>ເງິນຂ້າມທະນາຄານໄດ້.</p>
                </div>
                <div class="btnproduct">
                    <div data-aos="fade-up" data-aos-once="true">
                        <button class="button-66" role="button"> <i class="fa-solid fa-caret-right"></i> ຜະລິດຕະພັນ ແລະ
                            ການບໍລິການ</button>
                    </div>
                </div>
            </div>
            <div class="rightcontentpage1">
                <div data-aos="fade-left" data-aos-duration="1400">
                    <img id="topbg" src="../../assets/products/product2/jan-antonin-kolar-Sc5HUu4XzTk-unsplash.jpg"
                        alt="">
                </div>
                <div data-aos="zoom-in" data-aos-duration="1200">
                    <img id="atmmachine" src="../../assets/products/product2/ATMproduct2.PNG" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="contentproduct1-page2">
        <img id="bgpd1-page2" src="../../assets/products/product2/product2detailbg.png" alt="">
        <div class="headerpage2-box1">
            <div data-aos="zoom-in-down" data-aos-duration="1000">
                <h1>ຜົນປະໂຫຍດທີ່ໄດ້ຮັບ</h1>
                <h2>ດ້ານທະນາຄານສະມາຊິກ</h2>
                <p>ປະຢັດຄ່າໃຊ້ຈ່າຍໃນການລົງທຶນເຊັ່ນ: ຫຼດຜ່ອນຄ່າໃຊ້ຈ່າຍໃນການຂະຫຍາຍຕູ້ ATM ແລະ
                    ຄ່າບຳລຸງຮັກສາທີ່ຕິດພັນກັບການ<br>ຂະຫຍາຍຕູ້ ATM; ເພີ່ມຈຸດບໍລິການຕູ້ ATM
                    ແກ່ລູກຄ້າຂອງທະນາຄານທີ່ເຂົ້າເປັນສະມາຊິກ ຊຶ່ງສາມາດບໍລິການລູກຄ້າໄດ້ທົ່ວປະເທດ<br>
                    ດ້ວຍຄ່າໃຊ້ຈ່າຍໃນການລົງທຶນຕໍ່າ. </p>
            </div>



        </div>
        <div class="headerpage2-box1">
            <div data-aos="zoom-in-down" data-aos-duration="1000">
                <h2>ດ້ານລູກຄ້າຂອງທະນາຄານ</h2>
                <p>ລູກຄ້າສາມາດນໍາໃຊ້ຕູ້ ATM ຂອງທຸກທະນາຄານທີ່ເປັນສະມາຊິກ ຂອງລະບົບ LAPS
                    ຊຶ່ງປັດຈຸບັນມີທະນາຄານສະມາຊິກທັງໝົດ<br>
                    16 ທະນາຄານ ເປັນການອຳນວຍຄວາມສະດວກ ແລະ ປະຢັດເວລາ ໂດຍລູກຄ້າບໍ່ຈໍາເປັນຕ້ອງລໍຖ້າການໃຊ້ບໍລິການ ຫຼື
                    ຊອກຫາຕູ້ເອທີເອັມ<br>ຂອງທະນາຄານຜູ້ອອກບັດເທົ່ານັ້ນ.

                </p>
            </div>
        </div>

    </div>
    <div class="condition">
        <div class="infocondition">
            <div class="titlecondition">
                <h1> ເງື່ອນໄຂການບໍລິການ</h1>
                <p>ລູກຄ້າທີ່ມີບັດ ATM ຂອງທະນາຄານທີ່ເປັນສະມາຊິກຂອງ
                    LAPNet <br>ສາມາດຖອນເງິນສົດຂ້າມທະນາຄານຜ່ານຕູ້ ATM ຂອງທະນາຄານສະມາຊິກ <br> ໂດຍສາມາດສັງເກດໄດ້ຈາກສັນຍາລັກ
                    LAPNet ວົງມົນສີຟ້າທີ່ຕິດຢູ່ໜ້າຕູ້ <br>ATM.</p>

                <p style="color:blue; margin-top: 5px;font-size: 27px;">
                    ເຊິ່ງການຖອນເງິນສົດຂ້າມຕູ້ເອທີເອັມນີ້ແມ່ນຈະຕ້ອງໄດ້ເສຍຄ່າທຳນຽມ 2,000 ກີບ ຕໍ່ ຄັ້ງ.</p>

            </div>

            <div class="btnproduct">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <button class="button-66" role="button"> <i class="fa-solid fa-caret-right"></i> ຜະລິດຕະພັນ ແລະ
                        ການບໍລິການ</button>
                </div>
            </div>

        </div>
        <div class="cardswiper">
            <infinitescrolling></infinitescrolling>
        </div>
    </div>
    <div class="memberservicepage">
        <img id="memberservice-bg" src="../../assets/products/product2/memberserviepd2.png" alt="">
        <div class="leftbox-memberservice">

        </div>
        <div class="rightbox-memberservice">
            <div class="titlememberservice">
                <p>ທະນາຄານທີ່ໃຫ້ບໍລິການ</p>
            </div>

        </div>
    </div>
    <mainfooter></mainfooter>
</template>



<style scoped>
.logomemberservice {
    width: 70%;
    margin-top: 80px;
    height: 60%;
    margin-left: 90px;

}

.titlememberservice p {
    font-size: 85px;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;
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

.titlecondition p {
    font-family: "Noto Sans Lao", sans-serif;
    font-size: 27px;
}

.titlecondition h1 {
    font-size: 90px;
    color: #000;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;
    padding-bottom: 30px;
}

.cardswiper {
    width: 40%;
    height: 100%;

    display: flex;
    justify-content: center;


}

.infocondition {
    width: 60%;
    height: 100%;
    padding-left: 140px;
    padding-top: 60px;

}

.condition {
    width: 100%;
    display: flex;
    margin-top: 20px;
    height: 800px;

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

.contentproduct1-page2 {
    width: 100%;
    height: 800px;

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