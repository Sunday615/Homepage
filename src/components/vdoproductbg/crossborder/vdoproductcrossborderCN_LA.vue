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
                <div class="topcontainer">
                    <h1>
                        ຈີນ <img src="https://flagcdn.com/cn.svg" alt="" /> ສະແກນຊຳລະ ລາວ
                        <img src="https://flagcdn.com/la.svg" alt="" />: ນັກທ່ອງທ່ຽວຈີນ (ແລະ ອື່ນໆ) ຊຳລະຢູ່ລາວ
                    </h1>
                </div>
                <div class="centercontainer">
                    <div class="headercondition">

                        <p>ເບື້ອງລາວ (ຮັບການຊຳລະ) : 10 ທະນາຄານສະມາຊິກ.</p>
                    </div>
                    <div class="logomember">
                        <div class="row1">
                            <img src="../../../assets/Logomember- retangle/BCEL.png" alt="" />
                            <img src="../../../assets/Logomember- retangle/LDBnew.png" alt="" />
                            <img src="../../../assets/Logomember- retangle/jdbnew.png" alt="" />
                            <img src="../../../assets/Logomember- retangle/APB.Png" alt="" />
                            <img src="../../../assets/Logomember- retangle/STB.jpg" alt="" />
                            <img src="../../../assets/Logomember- retangle/mjbl.jpeg" alt="" />
                            <img src="../../../assets/Logomember- retangle/ACL.jpg" alt="" />
                            <img src="../../../assets/Logomember- retangle/psvb.PNG" alt="" />
                            <img src="../../../assets/Logomember- retangle/LVBnew.png" alt="" />
                            <img src="../../../assets/Logomember- retangle/MB.png" alt="" />

                        </div>
                    </div>
                </div>
                <div class="bottomcontainer">
                    <div class="headercondition">
                        <p style="font-size: 29px">
                            ເບື້ອງຈີນ/ສາກົນ (ສະແກນຊຳລະ) : ຜ່ານເຄືອຂ່າຍ UnionPay
                        </p>
                        <img src="../../../assets/Logomember- retangle/UnionPay_logo.svg.png" alt="">
                    </div>

                    <div class="logomember">
                        <div class="dropdownchoosecountry">
                            <!-- รับ event จาก dropdown -->
                            <CHLA_crossborderdropdown @change-country="onChangeCountry" />
                        </div>

                        <!-- ============ CHINA VIEW ============ -->
                        <template v-if="selectedCountry === 'china'">
                            <div class="row2" ref="row2Ref">
                                <img src="../../../assets/Logomember- retangle/BOCB.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/ICBCB.jpeg" alt="" />
                                <img src="../../../assets/Logomember- retangle/ABC.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/CCB.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/BOCOM.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/PSBC.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/Pingan.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/STP.png" alt="" />
                                      <img src="../../../assets/Logomember- retangle/CIB.png" alt="" />
                                                 <img src="../../../assets/Logomember- retangle/CMB.jpeg" alt="" />
                             
               
                            </div>

                            <div class="row3" ref="row3Ref" style="margin-top: 10px;">
                             
                                <img src="../../../assets/Logomember- retangle/CCCB.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/CEB.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/Shinhancard.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/DBS.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/boost.webp" alt="" />
                                <img src="../../../assets/Logomember- retangle/GOPAY.png" alt="" />
                            </div>
                        </template>

                        <!-- ============ KOREA VIEW ============ -->
                        <template v-else-if="selectedCountry === 'korea'">
                            <div class="row2" ref="row2Ref">
                                <img src="../../../assets/Logomember- retangle/hanapay.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/KBPAY.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/Tmoney.webp" alt="" />
                                <img src="../../../assets/Logomember- retangle/PAYBOOC.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/Npay.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/Woori.png" alt="" />
                                                        <img src="../../../assets/Logomember- retangle/NHPay.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/hyundai.png" alt="" />
                  
                            </div>

                            <div class="row3" ref="row3Ref" style="margin-top: 10px;">
                     
                                <img src="../../../assets/Logomember- retangle/Shinhancard.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/Koreapost.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/IBK.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/Lotte.png" alt="" />
                            </div>
                        </template>

                        <!-- ============ SEA VIEW ============ -->
                        <template v-else-if="selectedCountry === 'sea'">
                            <div class="row2" ref="row2Ref">
                                <img src="../../../assets/Logomember- retangle/Kplus.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/BBL-Logo-TH.jpg" alt="" />
                                <img src="../../../assets/Logomember- retangle/KTC.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/Bewallet.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/Kringthai.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/DBS.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/OCBC.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/Aleta.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/boost.webp" alt="" />
                                <img src="../../../assets/Logomember- retangle/wannapay.png" alt="" />
                       
                            </div>

                            <div class="row3" ref="row3Ref" style="margin-top: 10px;">
                                 <img src="../../../assets/Logomember- retangle/GOPAY.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/Spay.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/amk.jpeg" alt="" />
                                <img src="../../../assets/Logomember- retangle/Bongloy.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/OK$.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/UAB.png" alt="" />
                                <img src="../../../assets/Logomember- retangle/Omni.png" alt="" />
                             
                            </div>
                        </template>
                    </div>
                </div>


            </div>
        </div>
    </div>
   
</template>

<style scoped>
.dropdownchoosecountry {
    width: 100%;
    height: auto;

    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}

.imgqrpayment img {
    width: 100%;
    height: 100%;

}

.imgqrpayment {
    width: 30%;
    height: 190px;

    margin: 0 auto;
    margin-top: 20px;
}

.bottomcontainer {
    margin-top: 30px;
    width: 100%;
    height: 350px;

}

.row3 img {
    width: 120px;
    height: 120px;
    margin-left: 10px;
}

.row3 {
    display: flex;

    width: 50%;
    justify-content: center;
    align-items: center;
    height: auto;

    margin: 0 auto;
}

.row2 img {
    width: 120px;
    height: 120px;
    margin-left: 10px;
}

.row2 {
    display: flex;

    width: 100%;
    justify-content: center;
    align-items: center;
    height: auto;

    margin: 0 auto;
}

.row1 img {
    width: 120px;
    height: 120px;
    margin-left: 10px;
}

.row1 {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: auto;

    margin: 0 auto;
}

.logomember {
    width: 100%;
    height: auto;
    margin-top: 30px;
}

.headercondition p {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
}

.headercondition img {
    width: 90px;
    margin-left: 10px;
}

.headercondition {
    width: 100%;

    height: 80px;
    display: flex;
    justify-content: center;

    align-items: center;
}

.centercontainer {
    margin-top: 20px;
    width: 100%;
    height: auto;

}

.topcontainer img {
    width: 45px;
    height: 35px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 3px;
    margin-left: 10px;
    margin-right: 10px;
}

.topcontainer h1 {
    font-size: 40px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    display: flex;
    color: #fff;
}

.topcontainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;

}

.glass-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
}

.glass-card::after {
    content: "";
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

.glass-card {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5),
        inset 0 -1px 0 rgba(255, 255, 255, 0.1), inset 0 0 0px 0px rgba(255, 255, 255, 0);
    position: relative;
    overflow: hidden;
}

.video-background-container {
    position: relative;
    width: 100%;
    height: 1100px;
  
    /* ⬅️ changed from 100% to 1100px */

    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
   
    color: #fff;
    font-family: "Poppins", sans-serif;

}


.video-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /* ✅ already full width */
    height: 100%;
    /* ✅ will now be 1100px because parent is 1100px */
    object-fit: cover;
    object-position: top;
    filter: brightness(70%);
    z-index: 1;
}

.content {
    width: 90%;
    height: 1000px;
    /* ⬅️ changed from 750px to 1100px */

    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 3;
}
</style>
<script setup>
import { ref, onMounted, watch, nextTick } from "vue";
import { gsap } from "gsap";
import CHLA_crossborderdropdown from "../../Dropdown/CHLA_crossborderdropdown.vue";

const videoSrc = "/videos/testcrossborder.mp4";
const videoRef = ref(null);
const titleRef = ref(null);
const subtitleRef = ref(null);
const buttonRef = ref(null);

// country จาก dropdown
const selectedCountry = ref("china");

// refs สำหรับแถว logo
const row2Ref = ref(null);
const row3Ref = ref(null);

const onChangeCountry = (countryId) => {
    if (selectedCountry.value === countryId) return; // เลือกซ้ำไม่ต้อง animate
    selectedCountry.value = countryId;
};

// ฟังก์ชัน GSAP สำหรับ animate row2 / row3
const animateRows = () => {
    if (row2Ref.value) {
        gsap.fromTo(
            row2Ref.value,
            { opacity: 0, y: 25 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
            }
        );
    }

    if (row3Ref.value) {
        gsap.fromTo(
            row3Ref.value,
            { opacity: 0, y: 35 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
                delay: 0.08,
            }
        );
    }
};

onMounted(() => {
    // GSAP intro animation เดิม
    gsap.from(titleRef.value, { y: -50, opacity: 0, duration: 1, ease: "power3.out" });
    gsap.from(subtitleRef.value, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
    });
    gsap.from(buttonRef.value, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 1,
        ease: "back.out(1.7)",
    });

    // animate row ตอนแรก (ค่า default china)
    animateRows();
});

// พอประเทศเปลี่ยน → รอ DOM update แล้วค่อย animate
watch(selectedCountry, async () => {
    await nextTick();
    animateRows();
});

function playAnimation() {
    gsap.to(buttonRef.value, {
        scale: 0.9,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
    });
}
</script>
