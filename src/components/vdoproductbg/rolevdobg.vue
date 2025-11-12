<template>
    <div class="video-background-container">
        <!-- Background Video -->
        <video ref="videoRef" class="video-bg" autoplay muted loop playsinline>
            <source :src="videoSrc" type="video/mp4" />
            Your browser does not support HTML5 video.
        </video>

        <!-- Overlay -->


        <!-- Center Content -->
        <div class="content">
            <div class="inforole">
 
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
        </div>
    </div>
</template>

<script setup>
import updownanimation from '../../components/Image_floating/updownanimation2.vue'
import typing from '../Typingfunction/typing.vue'
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const videoSrc = '/videos/newrolevdo.mp4' // change to your video path
const videoRef = ref(null)
const titleRef = ref(null)
const subtitleRef = ref(null)
const buttonRef = ref(null)

onMounted(() => {
    // GSAP intro animation
    gsap.from(titleRef.value, { y: -50, opacity: 0, duration: 1, ease: 'power3.out' })
    gsap.from(subtitleRef.value, { y: 50, opacity: 0, duration: 1, delay: 0.5, ease: 'power3.out' })
    gsap.from(buttonRef.value, { scale: 0, opacity: 0, duration: 0.8, delay: 1, ease: 'back.out(1.7)' })
})

function playAnimation() {
    // Example GSAP button click animation
    gsap.to(buttonRef.value, {
        scale: 0.9,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: 'power1.inOut'
    })
}
</script>

<style scoped>
.inforole {
    width: 100%;
    height: 950px;

    display: flex;
    align-items: center;

    justify-content: center;


}

.productlist ul {
    margin-top: 20px;
}

.productlist ul li {
    font-family: "Noto Sans Lao", sans-serif;
    font-size: 27px;
    margin-bottom: 20px;
}

.productlist {
    width: 100%;
    height: 430px;

}

.headerproduct h1 {
    font-size: 35px;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;
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
    font-family: "Noto Sans Lao", sans-serif;
    padding-bottom: 40px;
}

.inforolep {
    width: 90%;

    height: 200px;

    margin: 0 auto;

}

.titlebox h1 {
    font-size: 60px;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;
    text-align: center;


}

.titlebox {
    margin-top: 10px;
    width: 100%;
    height: 100px;

    margin-bottom: 30px;

}

#box {
    font-family: "Noto Sans Lao", sans-serif;
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

.video-background-container {
    position: relative;
    width: 100%;
    height: 900px;

    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: 'Poppins', sans-serif;
}

.video-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    filter: brightness(70%);
    z-index: 1;
}


.content {
    width: auto;
    height: auto;
    position: relative;
    z-index: 3;



}
</style>
