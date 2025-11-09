<template>
    <div class="marvel-container">
        <h1 class="main-title" >ຜະລິດຕະພັນ ແລະ ການບໍລິການ ທັງຫມົດຂອງ LAPNet</h1>

        <swiper :modules="[Autoplay, EffectFade, Pagination]" effect="fade" :fade-effect="{ crossFade: true }"
            :loop="true" :autoplay="{ delay: 3000, disableOnInteraction: false }" :pagination="{
                clickable: true,
                el: '.swiper-pagination'
            }" class="marvel-swiper" @slideChange="onSlideChange">
            <!-- Slides -->
            <swiper-slide v-for="(item, index) in slides" :key="index" class="slide" ref="cards">
                <div class="image-wrapper">

                    <img :src="item.image" alt="marvel image" class="slide-img" />

                    <!-- Overlay -->
                    <div class="overlay">
                        <div class="text-box">
                            <h2 class="slide-header">{{ item.header }}</h2>
                            <p class="slide-title">{{ item.title }}</p>
                        </div>
                    </div>

                    <!-- Status Bar -->
                    <div class="status-bar">
                        {{ currentSlide + 1 }} / {{ slides.length }}
                    </div>

                </div>
            </swiper-slide>

            <!-- ✅ Pagination Bullets -->
            <div class="swiper-pagination"></div>
        </swiper>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { gsap } from 'gsap'

/* 🖼️ Replace these URLs with your own */
const slides = [
    {
        image: 'slides/slide1.png',
        header: 'ກວດຍອດເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM',
        title: 'ການກວດຍອດເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM ແມ່ນນຳໃຊ້ລະບົບແລັບໃນການເຊື່ອມໂຍງຕູ້ເອທີເອັມຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກຂອງບໍລິສັດລາວ ເນເຊີນນໍເພເມັ້ນ ເນັດເວີກ.'
    },
    {
        image: 'slides/slide2.png',
        header: 'ຖອນເງິນສົດຂ້າມທະນາຄານຜ່ານຕູ້ ATM',
        title: 'ການຖອນເງິນສົດຜ່ານຕູ້ເອທີເອັມ ແມ່ນນຳໃຊ້ລະບົບແລັບໃນການເຊື່ອມໂຍງຕູ້ເອທີເອັມຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກຂອງບໍລິສັດລາວ ເນເຊີນນໍເພເມັ້ນ ເນັດເວີກ ໃຫ້ສາມາດໃຊ້ຟັງຊັ່ນການຖອນເງິນຂ້າມທະນາຄານໄດ້.'
    },
    {
        image: 'slides/slide3.png',
        header: 'ໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM',
        title: 'ການໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM ແມ່ນນຳໃຊ້ລະບົບແລັບໃນການເຊື່ອມໂຍງຕູ້ເອທີເອັມຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກຂອງບໍລິສັດລາວ ເນເຊີນນໍເພເມັ້ນ ເນັດເວີກ ໃຫ້ສາມາດໃຊ້ຟັງຊັ່ນການໂອນເງິນຂ້າມທະນາຄານໄດ້.'
    },
    {
        image: 'slides/slide4.png',
        header: 'ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື',
        title: 'ການໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື (Fund Transfer via Mobile Application) ໂດຍນຳໃຊ້ລະບົບ LMPS ໃນການເຊື່ອມໂຍງຜ່ານ Applications ຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກຂອງບໍລິສັດລາວ ເນເຊີນນໍເພເມັ້ນ ເນັດເວີກ ໃຫ້ສາມາດໃຊ້ຟັງຊັ່ນການດຳເນີນທຸລະກຳໂອນເງິນຂ້າມທະນາຄານໄດ້.'
    },
    {
        image: 'slides/slide5.png',
        header: 'ການຊໍາລະເງິນຂ້າມທະນາຄານຜ່ານ QR',
        title: 'ການຊໍາລະຂ້າມທະນາຄານຜ່ານ LAPNet QRPay ໂດຍນຳໃຊ້ລະບົບ LMPS ໃນການເຊື່ອມໂຍງຜ່ານ Applications ຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກຂອງບໍລິສັດ LAPNet ໃຫ້ສາມາດນຳໃຊ້ຟັງຊັ່ນການດຳເນີນທຸລະກຳຊໍາລະຜ່ານ QR ຂອງທະນາຄານອື່ນໄດ້.'
    },
    {
        image: 'slides/slide6.png',
        header: 'ຊຳລະຂ້າມແດນໃນຮູບແບບ QR CODE ລະຫວ່າງປະເທດ',
        title: '  ບໍລິສັດ LAPNet ໄດ້ຕໍ່ຍອດການພັດທະນາລະບົບຊຳລະຂ້າມທະນາຄານເທິງມືຖື (LMPS) ເພື່ອຂະຫຍາຍຜະລິດຕະພັນ ຊຳລະຂ້າມທະນາຄານ ໃຫ້ສາມາດຮອງຮັບການຊຳລະ ຄ່າສິນຄ້າ - ບໍລິການ ລະຫວ່າງປະເທດ.'
    }
]

const cards = ref([])
const currentSlide = ref(0)

const onSlideChange = (swiper) => {
    currentSlide.value = swiper.realIndex
}

onMounted(() => {
    cards.value = Array.from(document.querySelectorAll('.text-box'))
    gsap.from(cards.value, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out'
    })
})
</script>

<style scoped>
.marvel-container {
    width: 90%;
    margin: 60px auto;
    text-align: center;
    background: radial-gradient(circle at 50% 50%, #2425b8, #241e87 33%, #1f1758 67%, #16102e 100%, #000000 133%);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    overflow: hidden;
}

.main-title {
    color: white;
        font-family: "Noto Sans Lao", sans-serif;
        font-weight: bold;
    font-size: 2.5rem;
    margin-bottom: 30px;
   
}

.marvel-swiper {
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
}

.slide {
    position: relative;
    width: 100%;
    height: 500px;
}

.image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
}

.slide-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: transform 2s ease;
}

.slide:hover .slide-img {
    transform: scale(1.05);
}

.overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 40px;
    box-sizing: border-box;
}

.text-box {
    color: #fff;
    text-align: center;
    animation: fadeInUp 1s ease;
}

.slide-header {
    font-size: 2rem;
    font-weight: 700;
    font-family: "Noto Sans Lao", sans-serif;
    margin-bottom: 10px;
}

.slide-title {
    font-size: 1.1rem;
    width: 850px;
    font-family: "Noto Sans Lao", sans-serif;
    opacity: 0.9;
}

/* ✅ Status Bar */
.status-bar {
    position: absolute;
    top: 15px;
    right: 25px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 8px 15px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 0.9rem;
}

/* ✅ Pagination Bullets */
.swiper-pagination-bullets {
    bottom: 15px !important;
}

.swiper-pagination-bullet {
    background: white !important;
    opacity: 0.6;
    width: 10px;
    height: 10px;
    margin: 0 6px !important;
    transition: 0.3s ease;
}

.swiper-pagination-bullet-active {
    background: #fff !important;
    transform: scale(1.3);
    opacity: 1;
}

@keyframes fadeInUp {
    from {
        transform: translateY(20px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>
