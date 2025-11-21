<script setup lang="ts">
import navbarview2 from '../../../components/navbar/navbarview2.vue';
import mainfooter from '../../../components/footer/mainfooter.vue';
import paginationmember2 from '../../../components/pagination/paginationmember2.vue';
import footerLogoMember2 from '../../../components/footer/memberfooter/footer-logo-member2.vue';

import boxmembersacom from '../../../components/boxmember/boxmembersacom.vue';
import boxmemberstb from '../../../components/boxmember/boxmemberstb.vue';
import boxmemberkbank from '../../../components/boxmember/boxmemberkbank.vue';
import boxmemberbfl from '../../../components/boxmember/boxmemberbfl.vue';
import boxmemberpsvb from '../../../components/boxmember/boxmemberpsvb.vue';
import boxmembermb from '../../../components/boxmember/boxmembermb.vue';

import { onMounted, ref, computed, type Component } from 'vue';

onMounted(() => {
    window.scrollTo({
        top: 660,
        behavior: 'smooth'
    });
});

// 🔍 state สำหรับ Search
const searchTerm = ref('');

// 🧩 ประเภทผลิตภัณฑ์
type ProductId =

    | 'mobile_transfer'  // ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື
    | 'qr_payment'       // ການຊຳລະເງິນຂ້າມທະນາຄານຜ່ານ QR
    | 'qr_crossborder';  // ຊຳລະຂ້າມແດນຜ່ານ QR Code

// 🗂 ข้อมูลตัวเลือก checkbox ด้านขวา
const productOptions: { id: ProductId; label: string }[] = [

    { id: 'mobile_transfer', label: 'ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື' },
    { id: 'qr_payment', label: 'ການຊຳລະເງິນຂ້າມທະນາຄານຜ່ານ QR' },
    { id: 'qr_crossborder', label: 'ຊຳລະຂ້າມແດນຜ່ານ QR Code' }
];


// ✅ product ที่เลือกอยู่
const selectedProducts = ref<ProductId[]>([]);

const isProductSelected = (id: ProductId) =>
    selectedProducts.value.includes(id);

const toggleProduct = (id: ProductId) => {
    const index = selectedProducts.value.indexOf(id);
    if (index === -1) {
        selectedProducts.value.push(id);
    } else {
        selectedProducts.value.splice(index, 1);
    }
};

// ✅ All checkbox logic
const allProductIds = productOptions.map((p) => p.id);

const isAllSelected = computed(
    () =>
        selectedProducts.value.length === allProductIds.length &&
        allProductIds.every((id) => selectedProducts.value.includes(id))
);

const toggleAll = () => {
    if (isAllSelected.value) {
        selectedProducts.value = [];
    } else {
        selectedProducts.value = [...allProductIds];
    }
};

// 🔁 config ธนาคารบนหน้านี้
interface Member {
    id: string;
    name: string;
    component: Component;
    image: string;
    link1?: string;
    link2?: string;
    aosDuration: number;
    products: ProductId[];
}

const members = ref<Member[]>([
    {
        id: 'sacom',
        name: 'ທະນາຄານ ໄຊງ່ອນເທືອງຕິ່ນ ລາວ Saigon Thuong Tin Commercial Joint Stock Bank (SACOM)',
        component: boxmembersacom,
        image: '/Logomember/sacom.png',
        link1: 'https://www.facebook.com/SacombankLao',
        link2: 'https://www.sacombank.com.la',
        aosDuration: 600,

        products: [
            'mobile_transfer',
            'qr_payment',
            'qr_crossborder',

        ]
    },
    {
        id: 'stb',
        name: 'ທະນາຄານ ເອັສທີ ຈຳກັດ ST Bank Limited (ST)',
        component: boxmemberstb,
        image: '/Logomember/STB.jpg',
        link1: 'https://www.facebook.com/STBankLaos',
        link2: 'https://www.stbanklaos.la',
        aosDuration: 800,

        products: [
            'mobile_transfer',
            'qr_payment',
            'qr_crossborder',

        ]
    },
    {
        id: 'kbank',
        name: 'ທະນາຄານ ກະສິກອນໄທ ຈຳກັດ KASIKORNBANK Public Company Limited (KBANK)',
        component: boxmemberkbank,
        image: '/Logomember/kbank.jpg',
        link1: 'https://www.facebook.com/KBankLaos/',
        link2: 'https://www.kasikornbank.com.la',
        aosDuration: 900,

        products: [
            'mobile_transfer',
            'qr_payment',
            'qr_crossborder',

        ]
    },
    {
        id: 'bfl',
        name: 'ທະນາຄານ ລາວ-ຝລັ່ງ ຈຳກັດ Banque Franco-Lao (BFL)',
        component: boxmemberbfl,
        image: '/Logomember/bflbank.png',
        link1: 'https://www.facebook.com/bflbank',
        link2: 'https://bfl-bred.com',
        aosDuration: 1000,

        products: [
            'mobile_transfer',
            'qr_payment',
            'qr_crossborder',

        ]
    },
    {
        id: 'psvb',
        name: 'ທະນາຄານ ພົງສະຫວັນ ຈໍາກັດ Phongsavanh Bank (PSVB)',
        component: boxmemberpsvb,
        image: '/Logomember/psvb.PNG',
        link1: 'https://www.facebook.com/phongsavanhbankltd',
        link2: 'https://www.phongsavanhbank.com',
        aosDuration: 1200,

        products: [
            'mobile_transfer',
            'qr_payment',
            'qr_crossborder',

        ]
    },
    {
        id: 'mb',
        name: 'ທະນາຄານ ຫຸ້ນສ່ວນການຄ້າທະຫານ ສາຂາລາວ Military Commercial Joint Stock Bank (MB) ',
        component: boxmembermb,
        image: '/Logomember/mbbgblue.jpg',
        link1: 'https://www.facebook.com/MBBANKLAOS',
        link2: 'https://mbbank.com.la',
        aosDuration: 1400,

        products: [
            'mobile_transfer',
            'qr_payment',
            'qr_crossborder',

        ]
    }
]);

// ✅ filter ตาม search + checkbox
const filteredMembers = computed(() => {
    const keyword = searchTerm.value.trim().toLowerCase();
    let list = members.value;

    if (keyword) {
        list = list.filter((m) => m.name.toLowerCase().includes(keyword));
    }

    const shouldFilterByProduct =
        selectedProducts.value.length > 0 && !isAllSelected.value;

    if (shouldFilterByProduct) {
        list = list.filter((m) =>
            selectedProducts.value.every((p) => m.products.includes(p))
        );
    }

    return list;
});
</script>

<template>
    <navbarview2 />
    <div class="containerhiden">
        <div class="navigatorcontent">
            <img id="navigator-img" src="../../../assets/Member/membercrd-2.png" alt="">
            <div class="navigator-info-container">
                <div class="titlenavigator">
                    <div data-aos="zoom-in-down" data-aos-duration="1000">
                        <p>ສະມາຊິກລະບົບຊຳລະຂ້າມທະນາຄານເທິງມືຖື</p>
                    </div>
                </div>
                <div class="navigatorlink">
                    <div data-aos="zoom-out-up" data-aos-duration="1000">
                        <p>
                            ໜ້າຫຼັກ
                            <span style="padding-right: 40px; padding-left: 40px;">
                                <i class="fa-solid fa-chevron-right"></i>
                            </span>
                            ສະມາຊິກ
                            <span style="padding-right: 40px; padding-left: 40px;">
                                <i class="fa-solid fa-chevron-right"></i>
                            </span>
                            ສະມາຊິກລະບົບບັດທະນາຄານຮ່ວມກັນ
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="cardviewcontainer">
            <!-- 🔹 ซ้าย: ใช้ filteredMembers -->
            <div class="leftsidecontainer">
                <div v-for="member in filteredMembers" :key="member.id" data-aos="fade-right"
                    :data-aos-duration="member.aosDuration">
                    <component :is="member.component" :image="member.image" :link1="member.link1"
                        :link2="member.link2" />
                </div>

                <div v-if="filteredMembers.length === 0"
                    style="margin-top: 20px; font-family: 'Noto Sans Lao', sans-serif;">
                    ບໍ່ພົບທະນາຄານທີ່ກົງກັບຄຳຄົ້ນຫາ / ການເລືອກບໍລິການ
                </div>
            </div>

            <!-- 🔹 ขวา: Search + checkbox -->
            <div class="rightsidecontainer">
                <div class="searchbar">
                    <div class="searchblog">
                        <h4>ຄົ້ນຫາຂໍ້ມູນຂ່າວສານ</h4>
                    </div>
                    <div class="inputsearchblog">
                        <input type="text" placeholder="Search" v-model="searchTerm">
                        <div class="btnsubmit" @click.prevent>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                </div>

                <div class="groupshortmember">
                    <div class="title-group">
                        <h1>ໝວດໝູ່ທະນາຄານສະມາຊິກ</h1>
                    </div>
                    <div class="checkboxshort">
                        <!-- ✅ All -->
                        <div class="checkbox1" @click="toggleAll">
                            <div class="boxcheck" :class="{ active: isAllSelected }">
                                <i class="fa-solid fa-check check-icon"></i>
                            </div>
                            <p :class="{ active: isAllSelected }">All</p>
                        </div>

                        <!-- options -->
                        <div v-for="option in productOptions" :key="option.id" class="checkbox1"
                            @click="toggleProduct(option.id)">
                            <div class="boxcheck" :class="{ active: isProductSelected(option.id) }">
                                <i class="fa-solid fa-check check-icon"></i>
                            </div>
                            <p :class="{ active: isProductSelected(option.id) }">
                                {{ option.label }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="pagination">
            <paginationmember2 />
        </div>
        <footerLogoMember2 />
        <mainfooter />
    </div>
</template>

<style scoped>
.containerhiden {
    width: 100%;
    height: auto;
    overflow: hidden;
}

.titlenavigator p {
    font-size: 65px;
}

/* ===== checkbox + animation ===== */
.boxcheck {
    width: 30px;
    height: 30px;
    border: 1px solid #433bff;
    border-radius: 5px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    cursor: pointer;
    transition:
        background-color 0.2s ease,
        transform 0.15s ease,
        box-shadow 0.2s ease,
        border-color 0.2s ease;
}

.boxcheck.active {
    background: #433bff;
    border-color: #433bff;
    box-shadow: 0 0 0 4px rgba(67, 59, 255, 0.18);
    transform: translateY(-1px) scale(1.02);
}

.check-icon {
    font-size: 18px;
    color: #ffffff;
    opacity: 0;
    transform: scale(0.3);
    transition:
        opacity 0.18s ease,
        transform 0.18s ease;
}

.boxcheck.active .check-icon {
    opacity: 1;
    transform: scale(1);
}

.checkbox1 p {
    padding-left: 20px;
    font-size: 22px;
    color: #0000009c;
}

.checkbox1 p.active {
    color: #433bff;
    font-weight: 600;
}

.checkbox1 {
    width: 470px;
    margin-left: 50px;
    display: flex;
    align-items: center;
    background-color: #fff;
    height: 80px;
    font-family: "Noto Sans Lao", sans-serif;
    border-radius: 7px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: background-color 0.15s ease, transform 0.1s ease;
}

.checkbox1:hover {
    background-color: #f4f5ff;
    transform: translateY(-1px);
}

.checkboxshort {
    width: 100%;
    height: 800px;
    margin-top: 60px;
    display: inline;
}

.title-group h1 {
    font-size: 30px;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;
    padding-left: 40px;
    padding-top: 30px;
    color: #040072;
}

.title-group {
    width: 100%;
    height: 100px;
    margin-bottom: 30px;
}

.groupshortmember {
    width: 100%;
    height: 600px;
    background-color: #ebebeb;
    margin-top: 60px;
    border-radius: 15px;
}

/* Search bar */
.searchbar {
    width: 100%;
    height: 240px;
    background-color: #ebebeb;
    border-radius: 15px;
}

.btnsubmit i {
    font-size: 35px;
    color: white;
}

.btnsubmit {
    width: 110px;
    height: 100%;
    background-color: #433bff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-right-radius: 20px;
}

.inputsearchblog input::placeholder {
    font-size: 20px;
}

.inputsearchblog input {
    width: 500px;
    height: 100%;
    border-bottom-left-radius: 7px;
    border-top-left-radius: 7px;
    background-color: #fff;
    padding-left: 30px;
    font-size: 20px;
}

.inputsearchblog {
    width: 80%;
    margin: 0 auto;
    height: 80px;
    margin-top: 20px;
    display: flex;
}

.searchblog h4 {
    font-size: 30px;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;
    padding-top: 30px;
    padding-left: 40px;
    color: #040072;
}

.searchblog {
    width: 100%;
    height: 35%;
}

/* ==== card style เดิม ๆ (bank แต่ละเจ้า) ==== */

.nameofbank-bfl {
    width: 750px;
    height: 200px;
    background: linear-gradient(#006dbd, #183a67) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat,
        linear-gradient(321deg, transparent 0%, #b88a44 100%),
        linear-gradient(26deg, transparent 0%, #faf398 100%),
        linear-gradient(172deg, transparent 0%, #e0aa4e 100%),
        linear-gradient(270deg, transparent 0%, #f9f295 100%);
    padding: 23px;
    box-sizing: border-box;
    margin-left: 200px;
}

.logobox-bfl img {
    width: 300px;
    height: 300px;
}

.logobox-bfl {
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
    position: absolute;
    z-index: 0;
    border: 1px solid #00000025;
    border-radius: 10px;
}

.cardmember-bfl {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

/*##########################*/
.nameofbank-psvb {
    width: 750px;
    height: 200px;
    background: linear-gradient(#04ca63, #0b9444) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat,
        linear-gradient(321deg, transparent 0%, #b88a44 100%),
        linear-gradient(26deg, transparent 0%, #faf398 100%),
        linear-gradient(172deg, transparent 0%, #e0aa4e 100%),
        linear-gradient(270deg, transparent 0%, #f9f295 100%);
    padding: 23px;
    box-sizing: border-box;
    margin-left: 200px;
}

.logobox-psvb img {
    width: 300px;
    height: 300px;
}

.logobox-psvb {
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
    position: absolute;
    z-index: 0;
    border: 1px solid #00000025;
    background-color: #ffffff;
    border-radius: 10px;
}

.cardmember-psvb {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

/*##########################*/
.nameofbank-mb {
    width: 750px;
    height: 200px;
    background: linear-gradient(#004e92, #000428) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat,
        linear-gradient(321deg, transparent 0%, #b88a44 100%),
        linear-gradient(26deg, transparent 0%, #faf398 100%),
        linear-gradient(172deg, transparent 0%, #e0aa4e 100%),
        linear-gradient(270deg, transparent 0%, #f9f295 100%);
    padding: 23px;
    box-sizing: border-box;
    margin-left: 200px;
}

.logobox-mb img {
    width: 300px;
    height: 120px;
}

.logobox-mb {
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
    position: absolute;
    z-index: 0;
    border: 1px solid #00000025;
    background-color: #ffffff;
    border-radius: 10px;
}

.cardmember-mb {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

/*##########################*/

.pagination {
    width: 100%;
    height: 190px;
    margin-bottom: 30px;
}

.nameofbank-sacom {
    width: 750px;
    height: 200px;
    background: linear-gradient(#18479e, #232299) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat,
        linear-gradient(321deg, transparent 0%, #b88a44 100%),
        linear-gradient(26deg, transparent 0%, #faf398 100%),
        linear-gradient(172deg, transparent 0%, #e0aa4e 100%),
        linear-gradient(270deg, transparent 0%, #f9f295 100%);
    padding: 23px;
    box-sizing: border-box;
    margin-left: 200px;
}

.logobox-sacom img {
    width: 300px;
    height: 60px;
}

.logobox-sacom {
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
    position: absolute;
    z-index: 0;
    border: 1px solid #00000025;
    background-color: #ffffff;
    border-radius: 10px;
}

.cardmember-sacom {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

/*##########################*/

.nameofbank-stb {
    width: 750px;
    height: 200px;
    background: linear-gradient(#0903ff, #010098) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat,
        linear-gradient(321deg, transparent 0%, #b88a44 100%),
        linear-gradient(26deg, transparent 0%, #faf398 100%),
        linear-gradient(172deg, transparent 0%, #e0aa4e 100%),
        linear-gradient(270deg, transparent 0%, #f9f295 100%);
    padding: 23px;
    box-sizing: border-box;
    margin-left: 200px;
}

.logobox-stb img {
    width: 300px;
    height: 300px;
}

.logobox-stb {
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
    position: absolute;
    z-index: 0;
    border: 1px solid #00000025;
    background-color: #fff;
    border-radius: 10px;
}

.cardmember-stb {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

/*###################################*/
.nameofbank-kbank {
    width: 750px;
    height: 200px;
    background: linear-gradient(#00a850, #006530) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat,
        linear-gradient(321deg, transparent 0%, #b88a44 100%),
        linear-gradient(26deg, transparent 0%, #faf398 100%),
        linear-gradient(172deg, transparent 0%, #e0aa4e 100%),
        linear-gradient(270deg, transparent 0%, #f9f295 100%);
    padding: 23px;
    box-sizing: border-box;
    margin-left: 200px;
}

.logobox-kbank img {
    width: 250px;
    height: 250px;
}

.logobox-kbank {
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
    position: absolute;
    z-index: 0;
    border: 1px solid #00000025;
    background-color: #01a952;
    border-radius: 10px;
}

.cardmember-kbank {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.cardnamestyle {
    line-height: 1.7;
}

.cardnamestyle p {
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    padding-left: 143px;
}

.cardnamestyle h1 {
    padding-left: 140px;
    font-size: 30px;
    margin-top: 30px;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;
    color: #fff;
}

/* layout ซ้าย-ขวา */
.rightsidecontainer {
    width: 38%;
    height: 1400px;
    margin-left: 2%;
    margin-top: 100px;
}

.leftsidecontainer {
    width: 60%;
    height: 1400px;
    margin-top: 100px;
}

.cardviewcontainer {
    width: 90%;
    display: flex;
    height: auto;
    margin: 0 auto;
    height: 2100px;
}
</style>
