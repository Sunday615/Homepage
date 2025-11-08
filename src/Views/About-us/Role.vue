<script setup lang="ts">
import navbartemplete from '../Navbar-footer/navbartemplete.vue';
import ft from '../Navbar-footer/ft.vue';
import typing from '../Typingfunction/typing.vue';


</script>


<template>

    <navbartemplete></navbartemplete>
    <div class="navigatorcontent">
        <img id="navigator-img" src="../../assets/Vision-bg/navigatormission-bg.png" alt="">
        <div class="navigator-info-container">
            <div class="titlenavigator">
                    <div data-aos="zoom-in-down" data-aos-duration="1000">
                         <p>ພາລະບົດບາດ</p>
                    </div>
               
            </div>
            <div class="navigatorlink">
                  <div data-aos="zoom-out-up" data-aos-duration="1000">
                <p>ໜ້າຫຼັກ <span style="padding-right: 40px; padding-left: 40px;"><i
                            class="fa-solid fa-chevron-right"></i></span> ກ່ຽວກັບພວກເຮົາ <span
                        style="padding-right: 40px; padding-left: 40px;"><i class="fa-solid fa-chevron-right"></i>
                    </span> ພາລະບົດບາດ</p>
                    </div>
            </div>
        </div>
    </div>
    <div class="inforole">
        <img id="bg-role" src="../../assets/Aboutusasset/3.png" alt="">
        <div class="gradient-border" id="box">
            <div class="titlebox">
                <h1>ພາລະບົດບາດ</h1>
            </div>

            <div class="inforolep">
                <p>ບໍລິສັດ ລາວເນ ເຊີນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ (LAPNet) ເຊິ່ງບໍລິສັດ LAPNet ເປັນຜູ້ໃຫ້ບໍລິການລະບົບ
                    ການຊໍາລະທຸລະກໍາຍ່ອຍ ຕາມທີ່ໄດ້ກໍານົດໄວ້ໃນກົດໝາຍວ່າດ້ວຍລະບົບ ການຊໍາລະ. ຊຶ່ງເຮັດໜ້າທີ່ເປັນໂຕກາງໃນການ
                    ເຊື່ອມໂຍງກັບທຸກຂະແໜງການຊຳລະທີ່ເປັນທະນາຄານ, ສະຖາບັນການເງິນ ແລະ ຜູ້ໃຫ້ບໍລິການ ການຊຳລະແຫ່ງດຽວໃນ ສປປ
                    ລາວ;</p>
                <p>ເພື່ອອໍານວຍຄວາມສະດວກໃຫ້ລູກຄ້າຂອງບັນດາທະນາຄານທີ່ເຂົ້າມາເປັນສະມາຊິກສາມາດນໍາໃຊ້ບັດສິນເຊື່ອ, ບັດເງິນຝາກ
                    ແລະ ບັດ ATM ໃນ ການເຮັດທຸລະກໍາດ້ານການເງິນຜ່ານຕູ້ ATM ແລະ ເຄື່ອງ (POS) ຮ່ວມກັນລະຫວ່າງທະນາຄານ,
                    ໄດ້ຢ່າງສະດວກ ທຸກທີ່ ທຸກເວລາ.</p>
            </div>

            <div class="productreview">
                <div class="headerproduct">
                    <h1>ຜະລິດຕະພັນການໃຫ້ບໍລິການມີດັ່ງນີ້:</h1>
                </div>
                <div class="productlist">
                    <ul>
                                    <typing></typing>
                    
                   
                    </ul>
             
                </div>
            </div>
        </div>
    </div>
    <ft></ft>
</template>


<style lang="css" scoped>
.productlist ul {
    margin-top: 20px;
}

.productlist ul li {
    font-family: notosanlao;
    font-size: 27px;
    margin-bottom: 20px;
}

.productlist {
    width: 100%;
    height: 430px;

}

.headerproduct h1 {
    font-size: 35px;
    font-family: notosanlao-bold;
}

.headerproduct {
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
}

.productreview {
    width: 60%;
    height: 500px;

    margin-top: 30px;
    margin-left: 5%;

}

.inforolep p {
    font-size: 23px;
    font-family: notosanlao;
    padding-bottom: 40px;
}

.inforolep {
    width: 90%;

    height: 200px;

    margin: 0 auto;

}

.titlebox h1 {
    font-size: 60px;
    font-family: notosanlao-bold;
    text-align: center;


}

.titlebox {
    margin-top: 10px;
    width: 100%;
    height: 100px;

    margin-bottom: 30px;

}

#box {
    font-family: notosanlao;
    width: 95%;
    height: 90%;
    color: white;
    font-family: 'Raleway';
    font-size: 2.5rem;
}

.gradient-border {
    --borderWidth: 3px;
    background: #000000;

    position: relative;
    border-radius: var(--borderWidth);
}

.gradient-border:after {
    content: '';
    position: absolute;
    top: calc(-1 * var(--borderWidth));
    left: calc(-1 * var(--borderWidth));
    height: calc(100% + var(--borderWidth) * 2);
    width: calc(100% + var(--borderWidth) * 2);
    background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
    border-radius: calc(2 * var(--borderWidth));
    z-index: -1;
    -webkit-animation: animatedgradient 3s ease alternate infinite;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
}


@-webkit-keyframes animatedgradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}


@keyframes animatedgradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}



.boxtitle {
    width: 95%;
    height: 90%;
    background-color: #000;
    opacity: 0.4;
    border-radius: 10px;
    border: 2px solid rgb(0, 204, 255);
}

#bg-role {
    width: 1920px;
    height: 950px;
    position: absolute;
    z-index: -1;


}

.inforole {
    width: 100%;
    height: 950px;

    display: flex;
    align-items: center;

    justify-content: center;


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
    font-family: notosanlao-bold;
    padding-bottom: 70px;
}

.navigatorlink p {
    color: #fff;
    font-size: 20px;

    font-family: notosanlao;
}
</style>