<script setup lang="ts">
import navbarview2 from '../../../components/navbar/navbarview2.vue';
import pagination from '../../../components/pagination/paginationmember3.vue'
import mainfooter from '../../../components/footer/mainfooter.vue';
import boxmemberbcel from '../../../components/boxmember/boxmemberbcel.vue';
import boxmemberldb from '../../../components/boxmember/boxmemberldb.vue';
import boxmemberapb from '../../../components/boxmember/boxmemberapb.vue';
import boxmemberjdb from '../../../components/boxmember/boxmemberjdb.vue';
import boxmembermaru from '../../../components/boxmember/boxmembermaru.vue';
import boxmemberlvb from '../../../components/boxmember/boxmemberlvb.vue';
import footerLogoMember1 from '../../../components/footer/memberfooter/footer-logo-member1.vue';

import { onMounted, ref, computed, type Component } from 'vue';
import Boxmembervtb from '../../../components/boxmember/boxmembervtb.vue';
import Boxmemberib from '../../../components/boxmember/boxmemberib.vue';
import Boxmemberaceleda from '../../../components/boxmember/boxmemberaceleda.vue';
import Boxmemberbic from '../../../components/boxmember/boxmemberbic.vue';
import Boxmembersacom from '../../../components/boxmember/boxmembersacom.vue';
import Boxmemberstb from '../../../components/boxmember/boxmemberstb.vue';

onMounted(() => {
    window.scrollTo({
        top: 660,
        behavior: 'smooth'
    });
});

// 🔍 search
const searchTerm = ref('');

// product id
type ProductId =
    | 'cross_border_payment_KHLA'
    | 'cross_border_payment_LAKH'
    | 'cross_border_payment_THLA'
    | 'cross_border_payment_LATH'
    | 'cross_border_payment_VNLA'
    | 'cross_border_payment_CHLA';

// country code สำหรับ FlagCDN
type CountryCode = 'kh' | 'la' | 'th' | 'vn' | 'cn';

// option type
type ProductOption = {
    id: ProductId;
    label: string;
    from: CountryCode; // ประเทศต้นทาง
    to: CountryCode;   // ประเทศปลายทาง
};

// helper สร้าง URL ธงจาก FlagCDN
const flagUrl = (code: CountryCode) => `https://flagcdn.com/w40/${code}.png`;

// information checkbox right container
const productOptions: ProductOption[] = [
    {
        id: 'cross_border_payment_KHLA',
        label: 'ກຳປູເຈຍ ສະແກນຊຳລະ ລາວ',
        from: 'kh', // 🇰🇭
        to: 'la'    // 🇱🇦
    },
    {
        id: 'cross_border_payment_LAKH',
        label: 'ລາວ ສະແກນຊຳລະ ກຳປູເຈຍ',
        from: 'la', // 🇱🇦
        to: 'kh'    // 🇰🇭
    },
    {
        id: 'cross_border_payment_THLA',
        label: 'ໄທ ສະແກນຊຳລະ ລາວ',
        from: 'th', // 🇹🇭
        to: 'la'    // 🇱🇦
    },
    {
        id: 'cross_border_payment_LATH',
        label: 'ລາວ ສະແກນຊຳລະ ໄທ',
        from: 'la', // 🇱🇦
        to: 'th'    // 🇹🇭
    },
    {
        id: 'cross_border_payment_VNLA',
        label: 'ຫວຽດນາມ ສະແກນຊຳລະ ລາວ',
        from: 'vn', // 🇻🇳
        to: 'la'    // 🇱🇦
    },
    {
        id: 'cross_border_payment_CHLA',
        label: 'ຈີນ ສະແກນຊຳລະ ລາວ',
        from: 'cn', // 🇨🇳
        to: 'la'    // 🇱🇦
    }
];

// ✅ product selected
const selectedProducts = ref<ProductId[]>([]);

// toggle checkbox toggle select once checkbox
const toggleProduct = (id: ProductId) => {
    const index = selectedProducts.value.indexOf(id);
    if (index === -1) {
        selectedProducts.value.push(id);
    } else {
        selectedProducts.value.splice(index, 1);
    }
};

// check product ture or false
const isProductSelected = (id: ProductId) =>
    selectedProducts.value.includes(id);

// ✅ All checkbox: slected / clear all
const allProductIds = productOptions.map((p) => p.id);

const isAllSelected = computed(
    () =>
        selectedProducts.value.length === allProductIds.length &&
        allProductIds.every((id) => selectedProducts.value.includes(id))
);

const toggleAll = () => {
    if (isAllSelected.value) {
        // if checkbox all อยู่ → clear all checkbox
        selectedProducts.value = [];
    } else {
        // if not  all → selected
        selectedProducts.value = [...allProductIds];
    }
};

// 🔁 config all banks member
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
        id: 'vtb',
        name: 'ທະນາຄານ ຫວຽດຕິນ ລາວ ຈຳກັດ VietinBank LAO (VTB)',
        component: Boxmembervtb,
        image: '/Logomember/vtb.png',
        link1: 'https://www.facebook.com/vtblao',
        link2: 'https://laoefast.vietinbank.com.la',
        aosDuration: 500,
        products: ['cross_border_payment_KHLA']





    },
    {
        id: 'ib',
        name: 'ທະນາຄານ ອິນໂດຈີນ ຈຳກັດ Indochina Bank (IB)',
        component: Boxmemberib,
        image: '/Logomember/IBbankk.JPG',
        link1: 'https://www.facebook.com/indochina.bank.page',
        link2: 'https://iblaos.com',
        aosDuration: 600,
        products: ['cross_border_payment_KHLA']
    },

    {
        id: 'acleda',
        name: 'ທະນາຄານ ເອຊີລີດາລາວ ຈໍາກັດ ACLEDA BANK LAO (ACLEDA)',
        component: Boxmemberaceleda,
        image: '/Logomember/ACL-bg.png',
        link1: 'https://www.facebook.com/acledabanklao',
        link2: 'https://www.acledabank.com.la/la/lao/',
        aosDuration: 700,
        products: ['cross_border_payment_KHLA']
    },

    {
        id: 'bic',
        name: 'ທະນາຄານ ບີໄອຊີ ລາວ ຈໍາກັດ BIC Bank Lao (BIC)',
        component: Boxmemberbic,
        image: '/Logomember/BIC.png',
        link1: 'https://www.facebook.com/BICBANKLAO',
        link2: 'https://www.biclaos.com',
        aosDuration: 800,
        products: ['cross_border_payment_KHLA']
    },
     



    {
        id: 'sacom',
        name: 'ທະນາຄານ ໄຊງ່ອນເທືອງຕິ່ນ ລາວ Saigon Thuong Tin Commercial Joint Stock Bank (SACOM)',
        component: Boxmembersacom,
        image: '/Logomember/sacom.png',
        link1: 'https://www.facebook.com/SacombankLao',
        link2: 'https://www.sacombank.com.la',
        aosDuration: 900,
        products: ['cross_border_payment_KHLA']
    },


    {
        id: 'stb',
        name: 'ທະນາຄານ ເອັສທີ ຈຳກັດ ST Bank Limited (STB)',
        component: Boxmemberstb,
        image: '/Logomember/STB.jpg',
        link1: 'https://www.facebook.com/STBankLaos',
        link2: 'https://www.stbanklaos.la',
        aosDuration: 1100,
        products: ['cross_border_payment_KHLA']
    }


]);

// ✅ filter follow search + checkbox
const filteredMembers = computed(() => {
    const keyword = searchTerm.value.trim().toLowerCase();

    let list = members.value;

    if (keyword) {
        list = list.filter((m) => m.name.toLowerCase().includes(keyword));
    }

    // if selected All (checkbox up side) → not have filter follow product
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
            <img id="navigator-img" src="../../../assets/Member/membercrd-2.png" alt="" />
            <div class="navigator-info-container">
                <div class="titlenavigator">
                    <div data-aos="zoom-in-down" data-aos-duration="1000">
                        <p>ສະມາຊິກລະບົບຊຳລະຂ້າມແດນໃນຮູບແບບ QR Code ລະຫວ່າງປະເທດ</p>
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
                            ສະມາຊິກລະບົບຊຳລະຂ້າມແດນໃນຮູບແບບ QR Code ລະຫວ່າງປະເທດ
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="cardviewcontainer">

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


            <div class="rightsidecontainer">

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
                        <!-- ✅ All up side  -->
                        <div class="checkbox1" @click="toggleAll">
                            <div class="boxcheck" :class="{ active: isAllSelected }">
                                <i class="fa-solid fa-check check-icon"></i>
                            </div>
                            <p :class="{ active: isAllSelected }">ເລືອກທັງໝົດ</p>
                        </div>

                        <!-- if select other checkbox -->
                        <div v-for="option in productOptions" :key="option.id" class="checkbox1"
                            @click="toggleProduct(option.id)">
                            <div class="boxcheck" :class="{ active: isProductSelected(option.id) }">
                                <i class="fa-solid fa-check check-icon"></i>
                            </div>

                            <p :class="{ active: isProductSelected(option.id) }">
                                {{ option.label }}
                            </p>


                            <div class="flag-pair">
                                <img class="flag-icon" :src="flagUrl(option.from)" :alt="option.from + ' flag'" />
                                <i class="fa-solid fa-right-long"></i>
                                <img class="flag-icon" :src="flagUrl(option.to)" :alt="option.to + ' flag'" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="pagination">
            <pagination />
        </div>
        <footerLogoMember1 />
        <mainfooter />
    </div>
</template>

<style scoped>
.flag-pair {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 15px;
    gap: 8px;
}

.flag-icon {
    width: 36px;
    height: 24px;
    object-fit: cover;
    border-radius: 3px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
}

.flag-arrow {
    font-size: 16px;
    color: #777;
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
    object-fit: cover;
}

.titlenavigator p {
    font-size: 70px;
    text-align: center;
    color: #fff;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;
    padding-bottom: 70px;
}

.navigatorlink p {
    color: #fff;
    font-size: 20px;
    font-family: "Noto Sans Lao", sans-serif;
}

.pagination {
    width: 100%;
    height: 300px;
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

/* แถว checkbox */
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
    height: 1000px;
    background-color: #ebebeb;
    margin-top: 60px;
    border-radius: 15px;
}

/* ===== search bar ===== */

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

.inputsearchblog input {
    width: 500px;
    height: 100%;
    border-bottom-left-radius: 7px;
    border-top-left-radius: 7px;
    background-color: #fff;
    padding-left: 30px;
    font-size: 20px;
}

.inputsearchblog input::placeholder {
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
