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
            <div class="container-top">
                <h1>ຜົນປະໂຫຍດທີ່ໄດ້ຮັບ</h1>
                <p>ປະຢັດ​ເວລາ, ສະດວກ ໂດຍລູກຄ້າບໍ່ຕ້ອງລໍຖ້າການໃຊ້ບໍລິການ ຫຼື ຊອກຫາຕູ້​ເອທີ​ເອັມຂອງທະນາຄານຜູ້ອອກບັດ
                    ກໍ່ສາມາດ
                    ກວດຍອດເງິນຜ່ານຕູ້​ເອທີ​ເອັມຂອງບັນດາທະນາຄານທຸກລະກິດທີ່ເຊື່ອມຕໍ່ກັບລະບົບແລັບ.​​</p>

            </div>
            <div class="container-bottom">
                <h1>ເງື່ອນໄຂການໃຊ້ບໍລິການ</h1>
                <p>ລູກຄ້າ​ທີ່ມີ​ບັດ​ເອທີເອັມຂອງ​ທະນາຄານ​ທີ່​ເປັນ​ສະມາຊິກ​ຂອງ ແລັບເນັດ, ໂດຍສາມາດສັງເກດໄດ້ຈາກ
                    ສັນຍາ​ລັກແລັບເນັດທີ່
                    ຕິດຕາມຕູ້ເອທີເອັມ
                    ກໍສາມາດໃຊ້ຮ່ວມກັນໄດ້. ເຊິ່ງການກວດຍອດເງິນຂ້າມຕູ້ເອທີເອັມນີ້ແມ່ນບໍ່ເສຍຄ່າທຳນຽມໃດໆທັງນັ້ນ.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import updownanimation from '../../components/Image_floating/updownanimation2.vue'
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const videoSrc = '/videos/productvdo-background.mp4' // change to your video path
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
.container-bottom p{
    width: 900px;
    padding-top: 40px;
    margin: 0 auto;
    text-align: center;
    font-size: 20px;
       font-family: "Noto Sans Lao", sans-serif;
      
}
.container-bottom h1{
    font-size: 65px;
      font-family: "Noto Sans Lao", sans-serif;
      font-weight: bold;
      text-align: center;
       padding-top: 40px;
}
.container-top p{
    width: 900px;
    padding-top: 40px;
    margin: 0 auto;
    text-align: center;
    font-size: 20px;
       font-family: "Noto Sans Lao", sans-serif;
      
}
.container-top h1{
 font-size: 80px;
      font-family: "Noto Sans Lao", sans-serif;
      font-weight: bold;
      text-align: center;
      padding-top: 40px;
}
.container-bottom{
    width: 100%;
    height: 45%;

}
.container-top{
    width: 100%;
    
    height: 45%;
   
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
    width: 90%;
    height: 750px;
    position: relative;
    z-index: 3;
    
  
    
}
</style>
