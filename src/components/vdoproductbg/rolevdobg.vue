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
            <div class="glass-card">
                <div class="containerinblur">
                    <div class="headerrow">
                        <h1>ພາລະບົດບາດຂອງ LAPNet
                        </h1>
                        <img style="margin-left:10px" src="../../assets/Logo-lapnet/logolapnet.PNG" alt="">
                    </div>
                    <div class="descriptionrole">
                        <p>ບໍລິສັດ ລາວເນ ເຊີນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ (LAPNet) ເຊິ່ງບໍລິສັດ LAPNet
                            ເປັນຜູ້ໃຫ້ບໍລິການລະບົບ ການຊໍາລະທຸລະກໍາຍ່ອຍ ຕາມທີ່ໄດ້ກໍານົດໄວ້ໃນກົດໝາຍວ່າດ້ວຍລະບົບ ການຊໍາລະ.
                            ຊຶ່ງເຮັດໜ້າທີ່ເປັນໂຕກາງໃນການ ເຊື່ອມໂຍງກັບທຸກຂະແໜງການຊຳລະທີ່ເປັນທະນາຄານ, ສະຖາບັນການເງິນ ແລະ
                            ຜູ້ໃຫ້ບໍລິການ ການຊຳລະແຫ່ງດຽວໃນ ສປປ ລາວ;</p>
                        <p>ເພື່ອອໍານວຍຄວາມສະດວກໃຫ້ລູກຄ້າຂອງບັນດາທະນາຄານທີ່ເຂົ້າມາເປັນສະມາຊິກສາມາດນໍາໃຊ້ບັດສິນເຊື່ອ,
                            ບັດເງິນຝາກ ແລະ ບັດ ATM ໃນ ການເຮັດທຸລະກໍາດ້ານການເງິນຜ່ານຕູ້ ATM ແລະ ເຄື່ອງ (POS)
                            ຮ່ວມກັນລະຫວ່າງທະນາຄານ, ໄດ້ຢ່າງສະດວກ ທຸກທີ່ ທຸກເວລາ.</p>
                    </div>
                    <div class="productlist">
                        <div class="headerproductlist">
                            <h1>ຜະລິດຕະພັນການໃຫ້ບໍລິການມີດັ່ງນີ້ :</h1>
                        </div>
                        <div class="typingfuc">
                            <typing></typing>
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
.typingfuc{
    width: 100%;
    height: 500px ;
 
}
.headerproductlist h1{
        font-weight: bold;
        font-size: 25px;
}
.headerproductlist{
width: 100%;
height: auto;
margin-bottom: 5px;


 
}
.productlist{
     width: 80%;
    margin: 0 auto;
    height: 380px;
    margin-top: 70px;
  
   
}
.descriptionrole p{
    font-size: 23px;
    margin-bottom: 40px;
}
.descriptionrole {
    width: 80%;
    margin: 0 auto;
    height: 190px;
    margin-top: 50px;
    
}

.headerrow h1 {
    font-size: 60px;
    font-weight: bold;
    text-align: center;
}

.headerrow {
    width: 100%;
    height: 70px;
    display: flex;

    justify-content: center;

}

.containerinblur {
    width: 95%;
    height: 90%;

}

.glass-card {
    width: 1600px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow:
        0 8px 32px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.5),
        inset 0 -1px 0 rgba(255, 255, 255, 0.1),
        inset 0 0 10px 5px rgba(255, 255, 255, 0.5);
    position: relative;
    overflow: hidden;
}


.glass-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg,
            transparent,
            rgba(255, 255, 255, 0.8),
            transparent);
}

.glass-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg,
            rgba(255, 255, 255, 0.8),
            transparent,
            rgba(255, 255, 255, 0.3));
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
