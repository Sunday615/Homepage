<template>
    <section class="landing-tech" ref="section">
        <!-- glow background -->
        <div class="glow glow-top"></div>
        <div class="glow glow-bottom"></div>

        <div class="landing-inner">
            <!-- LOGO -->
            <div class="logolapnet">
                <img src="../../assets/Logo-lapnet/logolapnet.PNG" alt="" />
                <img src="../../assets/Logo-lapnet/textlogowhite.PNG" alt="" />
            </div>

            <!-- TITLE -->
            <header class="landing-header">
                <p class="kicker">Lao National Payment Network</p>
                <h1>ຄຳອະທິບາຍເພີ່ມເຕີມສຳລັບລູກຄ້າ</h1>
            </header>

            <!-- SLIDER WRAPPER -->
            <div class="slider">
                <!-- ปุ่มซ้าย -->
                <button class="nav-arrow nav-arrow--left" @click="handlePrev">
                    ‹
                </button>

                <div class="slider-window">
                    <!-- TRACK ที่เลื่อน -->
                    <div class="slider-track" :style="{ transform: `translateX(-${currentPage * 100}%)` }">
                        <!-- PAGE 1 : การ์ดเดิม 3 ใบ -->
                        <div class="slider-page">
                            <div class="features">
                                <!-- BLOCK 1 : QR CODE BG -->
                                <div class="card feature-card feature-card--qr">
                                    <h3>QR Code ທີ່ໃຊ້:</h3>
                                    <p>
                                        ທ່ານສາມາດຊໍາລະໄດ້ໂດຍການສະແກນ LAO QR ທີ່ຮ້ານຄ້າໃນລາວ ຫຼື
                                        ສະແກນ QR ຂອງປະເທດຄູ່ຮ່ວມ ທີ່ຮ້ານຄ້າໃນຕ່າງປະເທດ.
                                    </p>
                                    <div class="feature-icon">
                                        <span>
                                            <img style="border-radius: 5px"
                                                src="../../assets/Products/product6/qrcode.svg" alt="" />
                                        </span>
                                    </div>
                                </div>

                                <!-- BLOCK 2 : FOREIGN CURRENCY BG -->
                                <div class="card feature-card feature-card--fx">
                                    <h3>ສະກຸນເງິນ:</h3>
                                    <p>
                                        ນັກທ່ອງທ່ຽວຈະຖືກຫັກເງິນໃນບັນຊີຂອງປະເທດຕົນເອງ,
                                        ສ່ວນຮ້ານຄ້າໃນລາວຈະໄດ້ຮັບເປັນເງິນ ກີບລາວ (LAK)
                                        ໂດຍອັດຕະໂນມັດ.
                                    </p>
                                    <div class="chip-row">
                                        <div class="chip">
                                            KHR
                                            <img src="https://flagcdn.com/kh.svg" style="width: 20px; margin-left: 3px"
                                                alt="" />
                                        </div>
                                        <div class="chip">
                                            THB
                                            <img src="https://flagcdn.com/th.svg" style="width: 20px; margin-left: 3px"
                                                alt="" />
                                        </div>
                                        <div class="chip">
                                            VND
                                            <img src="https://flagcdn.com/vn.svg" style="width: 20px; margin-left: 3px"
                                                alt="" />
                                        </div>
                                        <div class="chip">
                                            CNY
                                            <img src="https://flagcdn.com/cn.svg" style="width: 20px; margin-left: 3px"
                                                alt="" />
                                        </div>
                                    </div>
                                </div>

                                <!-- BLOCK 3 : EXCHANGE / ARROW BG -->
                                <div class="card feature-card feature-card--exchange">
                                    <h3>ອັດຕາແລກປ່ຽນ:</h3>
                                    <p>
                                        ແມ່ນອີງຕາມອັດຕາແລກປ່ຽນທີ່ຖືກກໍານົດໃນລະບົບໃນເວລາເຮັດທຸລະກໍາ.
                                    </p>
                                    <div class="chat-bubbles">
                                        <div class="bubble bubble-secondary">LAK ⇄ KHR</div>
                                        <div class="bubble bubble-secondary">LAK ⇄ THB</div>
                                        <div class="bubble bubble-secondary">LAK ⇄ VND</div>
                                        <div class="bubble bubble-secondary">LAK ⇄ CNY</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- PAGE 2 : การ์ดใหม่ 3 ใบ -->
                        <div class="slider-page">
                            <div class="features">
                                <div class="card feature-card feature-card--qr">
                                    <h3>ວິທີການຊຳລະ ກຳປູເຈຍ🇰🇭 ສະແກນຊຳລະ ລາວ🇱🇦</h3>
                                    <p>
                                        ນັກທ່ອງທ່ຽວກຳປູເຈຍໃຊ້ Bakong Mobile App ຫຼື ACLEDA Mobile App ສະແກນ LAO QR
                                        ທີ່ຮ້ານຄ້າໃນລາວ.
                                    </p>
                                    <div class="flexicon">
                                        <div class="feature-icon">
                                            <span>
                                                <img style="border-radius: 5px; width:75px; height:75px;"
                                                    src="../../assets/Logomember- retangle/bakongmbb.png" alt="" />

                                            </span>
                                        </div>
                                        <div class="feature-icon">
                                            <span>
                                                <img style="border-radius: 5px; width:75px; height:75px;"
                                                    src="../../assets/Logomember- retangle/ACL.jpg" alt="" />

                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="card feature-card feature-card--fx">
                                    <h3>ວິທີການຊຳລະ ລາວ🇱🇦 ສະແກນຊຳລະ ກຳປູເຈຍ🇰🇭</h3>
                                    <p>
                                        ນັກທ່ອງທ່ຽວລາວໃຊ້ Mobile Banking App ຂອງທະນາຄານລາວທີ່ເຂົ້າຮ່ວມ ສະແກນ QR ຂອງ
                                        Bakong ຫຼື ACLEDA QR ຢູ່ກຳປູເຈຍ.
                                    </p>
                                    <div class="flexicon">
                                        <div class="feature-icon">
                                            <span>
                                                <img style="border-radius: 5px; width:75px; height:75px;"
                                                    src="../../assets/Logomember- retangle/balongqr.png" alt="" />

                                            </span>
                                        </div>
                                        <div class="feature-icon">
                                            <span>
                                                <img style="border-radius: 5px; width:75px; height:75px;"
                                                    src="../../assets/Logomember- retangle/aceledaqr.jpeg" alt="" />

                                            </span>
                                        </div>
                                    </div>
                                </div>


                                <div class="card feature-card feature-card--exchange">
                                    <h3>ວິທີການຊຳລະ ໄທ🇹🇭 ສະແກນຊຳລະ ລາວ🇱🇦</h3>
                                    <p>
                                        ນັກທ່ອງທ່ຽວໄທໃຊ້ Mobile Banking App ຂອງທະນາຄານໄທທີ່ເຂົ້າຮ່ວມ ສະແກນ LAO QR
                                        ທີ່ຮ້ານຄ້າໃນລາວ.
                                    </p>

                                    <div class="feature-icon">
                                        <span>
                                            <img style="border-radius: 5px; width:75px;"
                                                src="../../assets/Logomember- retangle/LAOQR.png" alt="" />


                                        </span>
                                    </div>


                                </div>

                            </div>
                        </div>

                        <!-- PAGE 3 : การ์ดใหม่ 3 ใบ -->
                        <div class="slider-page">
                            <div class="features">
                                <div class="card feature-card feature-card--qr">
                                    <h3>ວິທີການຊຳລະ ລາວ🇱🇦 ສະແກນຊຳລະ ໄທ🇹🇭</h3>
                                    <p>
                                        ນັກທ່ອງທ່ຽວລາວໃຊ້ Mobile Banking App ຂອງທະນາຄານລາວທີ່ເຂົ້າຮ່ວມ ສະແກນ Thai QR
                                        ຢູ່ຮ້ານຄ້າໃນໄທ.
                                    </p>
                                    <div class="feature-icon">
                                        <span>
                                            <img style="border-radius: 5px; width:75px;"
                                                src="../../assets/Logomember- retangle/Thaiqrnew.png" alt="" />

                                        </span>
                                    </div>
                                </div>

                                <div class="card feature-card feature-card--fx">
                                    <h3>ວິທີການຊຳລະ ຫວຽດນາມ🇻🇳 ສະແກນຊຳລະ ລາວ🇱🇦</h3>
                                    <p>
                                        ນັກທ່ອງທ່ຽວຫວຽດນາມໃຊ້ Mobile Banking App ຂອງທະນາຄານຫວຽດນາມທີ່ເຂົ້າຮ່ວມ ສະແກນ LAO QR ທີ່ຮ້ານຄ້າໃນລາວ.
                                    </p>
                                     <div class="feature-icon">
                                        <span>
                                            <img style="border-radius: 5px; width:75px;"
                                                src="../../assets/Logomember- retangle/LAOQR.png" alt="" />

                                        </span>
                                    </div>
                                </div>

                                <div class="card feature-card feature-card--exchange">
                                    <h3>ວິທີການຊຳລະ ຈີນ🇨🇳 ສະແກນຊຳລະ ລາວ🇱🇦</h3>
                                    <p>
                                       ນັກທ່ອງທ່ຽວໃຊ້ Mobile App ຂອງເຄືອຂ່າຍທີ່ເຊື່ອມຕໍ່ກັບ UnionPay ຫຼື ຜູ້ໃຫ້ບໍລິການທີ່ກ່າວມາຂ້າງເທິງ ສະແກນ LAO QR ທີ່ຮ້ານຄ້າໃນລາວ.
                                    </p>
                                    <div class="upitolaoqr">
                                            <div class="logocontainer">
                                                <img style=" width: 75px; height:75px; box-shadow: 0 0 25px #3b82f6e6;" src="../../assets/Logomember- retangle/UPIwithbg.png" alt="">
                                                <i class="fa-solid fa-right-long"></i>
                                                <img style="width: 75px; height:75px;  box-shadow: 0 0 25px #3b82f6e6;" src="../../assets/Logomember- retangle/LAOQR.png" alt="">
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ปุ่มขวา -->
                <button class="nav-arrow nav-arrow--right" @click="handleNext">
                    ›
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import { gsap } from "gsap"

const section = ref(null)
const currentPage = ref(0)
const totalPages = 3 // มี 3 หน้า (3x3 = 9 การ์ด)

let autoTimer = null

const nextPage = () => {
    currentPage.value = (currentPage.value + 1) % totalPages
}
const prevPage = () => {
    currentPage.value = (currentPage.value - 1 + totalPages) % totalPages
}

const stopAuto = () => {
    if (autoTimer) {
        clearInterval(autoTimer)
        autoTimer = null
    }
}

const startAuto = () => {
    stopAuto()
    autoTimer = setInterval(() => {
        nextPage()
    }, 99999) // auto scroll ทุก 6 วิ
}

const handleNext = () => {
    nextPage()
    startAuto()
}

const handlePrev = () => {
    prevPage()
    startAuto()
}

onMounted(() => {
    gsap.from(section.value, {
        opacity: 0,
        y: 40,
        duration: 1.1,
        ease: "power3.out"
    })

    gsap.from(".card", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.08,
        delay: 0.2,
        ease: "power3.out"
    })

    startAuto()
})

onBeforeUnmount(() => {
    stopAuto()
})
</script>

<style scoped>
.logocontainer img{
    width: 75px;
    height: 50px;

 

}
.logocontainer i {
    font-size: 23px;
}
.logocontainer{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 60%;
  
    margin: 0 auto;
    height: auto;

}
.upitolaoqr{
    width: 100%;
    display: flex;
    align-items: center;
    height: 150px;

}
.flexicon {
    width: 100%;
    height: 70px;
    margin: 0 auto;
    display: flex;




}

.logolapnet {
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-bottom: 6px;
}

.logolapnet img {
    width: 80px;
    height: 80px;
    object-fit: contain;
}

/* CONTAINER 100% x 800px */
.landing-tech {
    width: 100%;
    height: 800px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at top, #1e293b 0, #020617 55%, #000 100%);
    color: #e5edff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Noto Sans Lao",
        sans-serif;
}

/* Glowing background blobs */
.glow {
    position: absolute;
    width: 480px;
    height: 480px;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.75;
    pointer-events: none;
}

.glow-top {
    background: rgba(59, 130, 246, 0.9);
    top: -160px;
    left: 6%;
}

.glow-bottom {
    background: rgba(56, 189, 248, 0.85);
    bottom: -220px;
    right: 0;
}

.landing-inner {
    position: relative;
    width: 100%;
    max-width: 1180px;
    padding: 32px 32px 40px;
    z-index: 1;
}

/* HEADER */
.landing-header {
    text-align: center;
    margin-bottom: 22px;
}

.kicker {
    font-size: 14px;
    color: #9ca3af;
    margin-bottom: 6px;
}

.landing-header h1 {
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 0.04em;
}

/* SLIDER STRUCTURE */
.slider {
    position: relative;
    margin-top: 8px;
}

.slider-window {
    overflow: hidden;
}

.slider-track {
    display: flex;
    width: 100%;
    transition: transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.slider-page {
    min-width: 100%;
}

/* 3 CARDS GRID */
.features {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
}

/* Arrow buttons */
.nav-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 38px;
    height: 38px;
    border-radius: 999px;
    border: 1px solid rgba(148, 163, 184, 0.6);
    background: rgba(15, 23, 42, 0.9);
    color: #e5edff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    backdrop-filter: blur(10px);
    z-index: 2;
    transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
}

.nav-arrow--left {
    left: -10px;
}

.nav-arrow--right {
    right: -10px;
}

.nav-arrow:hover {
    background: rgba(37, 99, 235, 0.95);
    box-shadow: 0 0 18px rgba(59, 130, 246, 0.8);
    transform: translateY(-50%) translateY(-1px);
}

/* BASE CARD */
.card {
    height: 300px;
    border-radius: 20px;
    padding: 18px 18px 20px;
    background: radial-gradient(circle at top left,
            rgba(59, 130, 246, 0.35),
            rgba(15, 23, 42, 0.95));
    border: 1px solid rgba(148, 163, 184, 0.55);
    box-shadow: 0 20px 45px rgba(15, 23, 42, 0.9);
    backdrop-filter: blur(18px);
    position: relative;
    overflow: hidden;
}

/* BG per card type */
.feature-card--qr::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("../../assets/landing/qr-bg.png");
    /* ปรับ path เองได้ */
    background-size: cover;
    background-position: center;
    opacity: 0.18;
    mix-blend-mode: screen;
    pointer-events: none;
}

.feature-card--fx::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("../../assets/landing/currency-bg.png");
    background-size: cover;
    background-position: center;
    opacity: 0.22;
    mix-blend-mode: screen;
    pointer-events: none;
}

.feature-card--exchange::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("../../assets/landing/exchange-bg.png");
    background-size: cover;
    background-position: center;
    opacity: 0.2;
    mix-blend-mode: screen;
    pointer-events: none;
}

.feature-card h3 {
    font-size: 18px;
    margin-bottom: 8px;
    position: relative;
    z-index: 1;
}

.feature-card p {
    font-size: 13px;
    color: #cbd5f5;
    max-width: 260px;
    position: relative;
    z-index: 1;
}

.feature-icon {
    margin-top: 26px;
    width: 70px;
    height: 70px;

    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #020617;
    font-weight: 700;
    font-size: 20px;
    box-shadow: 0 0 25px #3b82f6e6;
    position: relative;
    z-index: 1;
}

.feature-center {
    text-align: center;
}

.chip-row {
    margin-top: 18px;
    display: flex;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
}

.chip {
    display: flex;
    align-items: center;
    padding: 6px 10px;
    border-radius: 999px;
    font-size: 11px;
    background: rgba(15, 23, 42, 0.9);
    border: 1px solid rgba(148, 163, 184, 0.7);
}

.btn-chip {
    background: linear-gradient(135deg, #3b82f6, #60a5fa);
    border: none;
    color: #0b1120;
    font-weight: 600;
}

.chat-bubbles {
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    position: relative;
    z-index: 1;
}

.bubble {
    font-size: 9px;
    padding: 6px 10px;
    border-radius: 12px;
    background: rgba(15, 23, 42, 0.85);
    border: 1px solid rgba(79, 70, 229, 0.6);
}

.bubble-secondary {
    background: rgba(56, 189, 248, 0.12);
    border-color: rgba(56, 189, 248, 0.7);
}

/* RESPONSIVE */
@media (max-width: 1024px) {
    .features {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 768px) {
    .landing-inner {
        padding: 24px 18px;
    }

    .landing-header h1 {
        font-size: 26px;
    }

    .features {
        grid-template-columns: 1fr;
    }

    .nav-arrow--left {
        left: -4px;
    }

    .nav-arrow--right {
        right: -4px;
    }
}
</style>
