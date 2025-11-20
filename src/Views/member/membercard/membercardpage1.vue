<script setup lang="ts">
import navbarview2 from '../../../components/navbar/navbarview2.vue';
import pagination from '../../../components/pagination/paginationmember1.vue';
import mainfooter from '../../../components/footer/mainfooter.vue';
import boxmemberbcel from '../../../components/boxmember/boxmemberbcel.vue';
import boxmemberldb from '../../../components/boxmember/boxmemberldb.vue';
import boxmemberapb from '../../../components/boxmember/boxmemberapb.vue';
import boxmemberjdb from '../../../components/boxmember/boxmemberjdb.vue';
import boxmembermaru from '../../../components/boxmember/boxmembermaru.vue';
import boxmemberlvb from '../../../components/boxmember/boxmemberlvb.vue';
import footerLogoMember1 from '../../../components/footer/memberfooter/footer-logo-member1.vue';

import { onMounted, ref, computed, type Component } from 'vue';

onMounted(() => {
    window.scrollTo({
        top: 660,
        behavior: 'smooth'
    });
});

// 🔍 state สำหรับ Search ชื่อธนาคาร
const searchTerm = ref('');

// 🧩 ประเภทผลิตภัณฑ์ (ตั้ง id ไว้ใช้ร่วมกัน)
type ProductId =
    | 'atm_inquiry'      // ກວດສອບຍອດເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM
    | 'atm_withdraw'     // ถອນເງິນສົດຂ້າມທະນາຄານຜ່ານຕູ້ ATM
    | 'atm_transfer'     // ໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM
    | 'mobile_transfer'  // ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື
    | 'qr_payment'       // ຊຳລະເງິນຂ້າມທະນາຄານຜ່ານ QR
    | 'qr_crossborder';  // ຊຳລະຂ້າມແດນຜ່ານ QR Code

// 🗂 ข้อมูลตัวเลือก checkbox ด้านขวา
const productOptions: { id: ProductId; label: string }[] = [
    { id: 'atm_inquiry', label: 'ກວດສອບຍອດເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM' },
    { id: 'atm_withdraw', label: 'ຖອນເງິນສົດຂ້າມທະນາຄານຜ່ານຕູ້ ATM' },
    { id: 'atm_transfer', label: 'ໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM' },
    { id: 'mobile_transfer', label: 'ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື' },
    { id: 'qr_payment', label: 'ການຊຳລະເງິນຂ້າມທະນາຄານຜ່ານ QR' },
    { id: 'qr_crossborder', label: 'ຊຳລະຂ້າມແດນຜ່ານ QR Code' }
];

// ✅ product ที่ผู้ใช้ติ๊กอยู่
const selectedProducts = ref<ProductId[]>([]);

// helper function
const toggleProduct = (id: ProductId) => {
    const index = selectedProducts.value.indexOf(id);
    if (index === -1) {
        selectedProducts.value.push(id);
    } else {
        selectedProducts.value.splice(index, 1);
    }
};

const isProductSelected = (id: ProductId) =>
    selectedProducts.value.includes(id);

const clearProducts = () => {
    selectedProducts.value = [];
};

const isAllSelected = computed(() => selectedProducts.value.length === 0);

// 🔁 config ธนาคารทั้งหมด
interface Member {
    id: string;
    name: string;          // ใช้ค้นหา
    component: Component;
    image: string;
    link1?: string;
    link2?: string;
    aosDuration: number;
    products: ProductId[]; // ✅ ระบุว่าธนาคารนี้มีผลิตภัณฑ์อะไรบ้าง
}

const members = ref<Member[]>([
    {
        id: 'bcel',
        name: 'BCEL ທະນາຄານ ການຄ້າຕ່າງປະເທດລາວ ມະຫາຊົນ',
        component: boxmemberbcel,
        image: '/Logomember/bcelretangle.png',
        link1: 'https://www.facebook.com/BCEL.Bank',
        link2: 'https://www.bcel.com.la',
        aosDuration: 800,
        // ⬇ ตัวอย่าง: มีเฉพาะ product 1–3
        products: ['atm_inquiry', 'atm_withdraw', 'atm_transfer']
    },
    {
        id: 'ldb',
        name: 'LDB Lao Development Bank ທະນາຄານພັດທະນາລາວ',
        component: boxmemberldb,
        image: '/Logomember/ldb-gold.png',
        link1: 'https://www.facebook.com/ldblao',
        link2: 'https://www.ldblao.la/',
        aosDuration: 400,
        products: ['atm_inquiry', 'atm_withdraw', 'atm_transfer', 'mobile_transfer']
    },
    {
        id: 'apb',
        name: 'APB Agricultural Promotion Bank ທະນາຄານສົ່ງເສີມການເກດຕະກຳ',
        component: boxmemberapb,
        image: '/Logomember/APBB.PNG',
        link1: 'https://www.facebook.com/APB.Bank/?locale=th_TH',
        link2: 'https://www.apb.com.la',
        aosDuration: 500,
        products: ['atm_inquiry', 'atm_withdraw', 'qr_payment']
    },
    {
        id: 'jdb',
        name: 'JDB Joint Development Bank',
        component: boxmemberjdb,
        image: '/Logomember/JDBbank.png',
        link1: 'https://www.facebook.com/jdbbanklaos',
        link2: 'https://www.jdbbank.com.la/',
        aosDuration: 700,
        products: ['atm_inquiry', 'atm_transfer', 'mobile_transfer', 'qr_payment']
    },
    {
        id: 'maru',
        name: 'Maruhan Japan Bank Lao',
        component: boxmembermaru,
        image: '/Logomember/MARU.jpg',
        link1: 'https://www.facebook.com/MaruhanJapanBankLao/',
        link2: 'https://maruhanjapanbanklao.com',
        aosDuration: 900,
        products: ['atm_inquiry', 'atm_withdraw']
    },
    {
        id: 'lvb',
        name: 'LVB Lao Viet Bank',
        component: boxmemberlvb,
        image: '/Logomember/LVB.png',
        link1: 'https://www.facebook.com/LaoVietBank',
        link2: 'https://www.laovietbank.com.la/la/',
        aosDuration: 1100,
        products: ['atm_inquiry', 'atm_withdraw', 'atm_transfer', 'qr_payment', 'qr_crossborder']
    }
]);

// ✅ filter ตาม search + checkbox
const filteredMembers = computed(() => {
    const keyword = searchTerm.value.trim().toLowerCase();

    let list = members.value;

    // filter ตามคำค้นหา
    if (keyword) {
        list = list.filter((m) => m.name.toLowerCase().includes(keyword));
    }

    // filter ตาม product (ต้องมีครบทุกอันที่เลือก)
    if (selectedProducts.value.length > 0) {
        list = list.filter((m) =>
            selectedProducts.value.every((p) => m.products.includes(p))
        );
    }

    return list;
});
</script>


<template>
    <navbarview2></navbarview2>
    <div class="containerhiden">
        <div class="navigatorcontent">
            <img id="navigator-img" src="../../../assets/Member/membercrd-2.png" alt="" />
            <div class="navigator-info-container">
                <div class="titlenavigator">
                    <div data-aos="zoom-in-down" data-aos-duration="1000">
                        <p>ສະມາຊິກລະບົບບັດທະນາຄານຮ່ວວມກັນ</p>
                    </div>
                </div>
                <div class="navigatorlink">
                    <div data-aos="zoom-out-up" data-aos-duration="1000">
                        <p>
                            ໜ້າຫຼັກ
                            <span style="padding-right: 40px; padding-left: 40px">
                                <i class="fa-solid fa-chevron-right"></i>
                            </span>
                            ສະມາຊິກ
                            <span style="padding-right: 40px; padding-left: 40px">
                                <i class="fa-solid fa-chevron-right"></i>
                            </span>
                            ສະມາຊິກລະບົບບັດທະນາຄານຮ່ວມກັນ
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="cardviewcontainer">
            <!-- 🔹 ฝั่งซ้าย: รายการธนาคาร (ผูกกับ filteredMembers) -->
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


            <!-- 🔹 ฝั่งขวา: Search + หมวดหมู่ -->
            <div class="rightsidecontainer">
                <!-- 🔎 Search -->
                <div class="searchbar">
                    <div class="searchblog">
                        <h4>ຄົ້ນຫາຂໍ້ມູນຂ່າວສານ</h4>
                    </div>
                    <div class="inputsearchblog">
                        <input type="text" placeholder="Search" v-model="searchTerm" />
                        <div class="btnsubmit" @click.prevent>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                </div>

                <!-- ✅ Checkbox filter -->
                <div class="groupshortmember">
                    <div class="title-group">
                        <h1>ໝວດໝູ່ທະນາຄານສະມາຊິກ</h1>
                    </div>
                    <div class="checkboxshort">



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
            <pagination></pagination>
        </div>
        <footerLogoMember1></footerLogoMember1>
        <mainfooter></mainfooter>
    </div>
</template>

<style scoped>
/* style ของคุณ เหมือนเดิมทั้งหมด ไม่ได้เปลี่ยนอะไร */
.boxcheck.active {
    background-color: #433bff;
}

.checkbox1 p.active {
    color: #433bff;
}

.containerhiden {
    width: 100%;
    height: auto;
    overflow: hidden;
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
    font-family: 'Noto Sans Lao', sans-serif;
    font-weight: bold;
    padding-bottom: 70px;
}

.navigatorlink p {
    color: #fff;
    font-size: 20px;
    font-family: 'Noto Sans Lao', sans-serif;
}

.pagination {
    width: 100%;
    height: 300px;
}

.boxcheck.active {
    background: #433bff;
    border-color: #433bff;
    box-shadow: 0 0 0 4px rgba(67, 59, 255, 0.18);
    transform: translateY(-1px) scale(1.02);
}

/* icon โผล่มาพร้อม zoom นิดๆ */
.boxcheck.active .check-icon {
    opacity: 1;
    transform: scale(1);
}

/* ข้อความเวลาติ๊กแล้วให้สีชัดขึ้น */
.checkbox1 p.active {
    color: #433bff;
    font-weight: 600;
}

/* ถ้าอยากให้ทั้งแถวคลิกง่าย ใช้ hover เพิ่ม feedback หน่อย */
.checkbox1 {
    width: 470px;
    margin-left: 50px;
    display: flex;
    align-items: center;
    background-color: #fff;
    height: 80px;
    font-family: "Noto Sans Lao", sans-serif;
    border-radius: 7px;
    margin-bottom: 30px;
    cursor: pointer;
    transition: background-color 0.15s ease, transform 0.1s ease;
}

.checkbox1:hover {
    background-color: #f4f5ff;
    transform: translateY(-1px);
}

/* icon ด้านใน */
.check-icon {
    font-size: 18px;
    color: #ffffff;

    opacity: 0;
    transform: scale(0.3);
    transition:
        opacity 0.18s ease,
        transform 0.18s ease;
}

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

    /* 🎬 smooth animation */
    transition:
        background-color 0.2s ease,
        transform 0.15s ease,
        box-shadow 0.2s ease,
        border-color 0.2s ease;
}

.checkbox1 p {
    padding-left: 20px;
    font-size: 22px;
    color: #0000009c;
}

.checkbox1 {
    width: 470px;
    margin-left: 50px;
    display: flex;
    align-items: center;
    background-color: #fff;
    height: 80px;
    font-family: 'Noto Sans Lao', sans-serif;
    border-radius: 7px;
    margin-bottom: 30px;
}

.checkboxshort {
    width: 100%;
    height: 800px;
    margin-top: 60px;
    display: inline;
}

.title-group h1 {
    font-size: 30px;
    font-family: 'Noto Sans Lao', sans-serif;
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
    height: 900px;
    background-color: #ebebeb;
    margin-top: 60px;
    border-radius: 15px;
}

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
.inputsearchblog input{
    padding-left: 30px;
    font-size: 20px;
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
    font-family: 'Noto Sans Lao', sans-serif;
    font-weight: bold;
    padding-top: 30px;
    padding-left: 40px;
    color: #040072;
}

.searchblog {
    width: 100%;
    height: 35%;
}

/* ด้านล่างยังคง style เดิมของคุณทั้งหมด (ตัดมาจากโค้ดเดิม) */
.nameofbank-lvb {
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

.logobox-lvb img {
    width: 300px;
    height: 300px;
}

.logobox-lvb {
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
    position: absolute;
    z-index: 0;
    border: 1px solid #00000025;
    background-color: #1c4691;
    border-radius: 10px;
}

.cardmember-lvb {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

/* ... (style อื่น ๆ จากโค้ดเดิมของคุณต่อเหมือนเดิม) ... */

.rightsidecontainer {
    width: 38%;
    height: 1400px;
    margin-left: 2%;
    margin-top: 100px;
}

.leftsidecontainer {
    width: 60%;
    height: auto;
    margin-top: 100px;
}

.cardviewcontainer {
    width: 90%;
    display: flex;
    margin: 0 auto;
    height: 2000px;
}
</style>
