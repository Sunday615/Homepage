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
            <div class="mobilemockup">
           <updownanimation></updownanimation>
        </div>
        <div class="titleproduct">
            <div data-aos="fade-left" data-aos-duration="1000">
          <h1>ໂອນເງິນຂ້າມທະນາຄານ<br>ເທິງມືຖືຜ່ານແອັບ</h1>
          <p>ການໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື (Fund Transfer via Mobile Application) ໂດຍນຳໃຊ້ລະບົບ LMPS ໃນການເຊື່ອມໂຍງຜ່ານ Applications ຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກຂອງບໍລິສັດລາວ ເນເຊີນນໍເພເມັ້ນ ເນັດເວີກ ໃຫ້ສາມາດໃຊ້ຟັງຊັ່ນການດຳເນີນທຸລະກຳໂອນເງິນຂ້າມທະນາຄານໄດ້.</p></div>
            <div data-aos="fade-left" data-aos-duration="1200"> <button class="button-36" role="button"><i class="fa-solid fa-caret-right"></i>ຜະລິດຕະພັນ ແລະ ການບໍລິການ</button></div>
        </div>
    
    </div>
  </div>
</template>

<script setup>
import updownanimation from '../../components/Image_floating/updownanimation2.vue'
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const videoSrc = '/videos/tesvdo.mp4' // change to your video path
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
.titleproduct p{
      font-family: "Noto Sans Lao", sans-serif;
      padding-top: 30px;
      font-size: 1.2rem;
      padding-bottom: 90px;
}
.titleproduct h1{
  padding-top: 100px;
  font-size: 90px;
  line-height: 1.3;
  font-family: "Noto Sans Lao", sans-serif;
  
      font-weight: bold;
}
.titleproduct{
  width: 55%;
  height: 100%;
 
}

.mobilemockup{
  width: 45%;
  height: 100%;


}
.button-36 {
    background-image: linear-gradient(92.88deg, #ffffff 9.16%, #ffffff 43.89%, #ffffff 64.72%);
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #0c2a6a;
    font-weight: 600;
    cursor: pointer;
    flex-shrink: 0;
    font-family: "Noto Sans Lao", sans-serif;
    font-size: 19px;
    font-weight: bold;
    height: 4rem;
    padding: 0 1.6rem;
    text-align: center;
    text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
    transition: all .5s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.button-36:hover {
    box-shadow: rgba(173, 173, 173, 0.5) 0 1px 30px;
    transition-duration: .1s;
}

@media (min-width: 768px) {
    .button-36 {
        padding: 0 2.6rem;
    }
}


.video-background-container {
  position: relative;
  width: 100%;
  height: 100%;

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
  filter: brightness(70%);
  z-index: 1;
}


.content {
  width: 90%;
  height: 750px;
  position: relative;
  z-index: 3;

  display: flex;
}




</style>
