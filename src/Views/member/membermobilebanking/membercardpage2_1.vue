<script setup lang="ts">
import navbarview2 from '../../../components/navbar/navbarview2.vue';
import mainfooter from '../../../components/footer/mainfooter.vue';
import paginationmember2 from '../../../components/pagination/paginationmember2.vue';
import footerLogoMember2 from '../../../components/footer/memberfooter/footer-logo-member2.vue';

import boxmemberbcel from '../../../components/boxmember/boxmemberbcel.vue';
import boxmemberldb from '../../../components/boxmember/boxmemberldb.vue';
import boxmemberapb from '../../../components/boxmember/boxmemberapb.vue';
import boxmemberjdb from '../../../components/boxmember/boxmemberjdb.vue';
import boxmembermaru from '../../../components/boxmember/boxmembermaru.vue';
import boxmemberlvb from '../../../components/boxmember/boxmemberlvb.vue';

import { onMounted, ref, computed, type Component } from 'vue';

onMounted(() => {
    window.scrollTo({
        top: 660,
        behavior: 'smooth'
    });
});


const searchTerm = ref('');


type ProductId =

    | 'mobile_transfer'  // ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື
    | 'qr_payment'       // ການຊຳລະເງິນຂ້າມທະນາຄານຜ່ານ QR
    | 'qr_crossborder';  // ຊຳລະຂ້າມແດນຜ່ານ QR Code


const productOptions: { id: ProductId; label: string }[] = [

    { id: 'mobile_transfer', label: 'ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື' },
    { id: 'qr_payment', label: 'ການຊຳລະເງິນຂ້າມທະນາຄານຜ່ານ QR' },
    { id: 'qr_crossborder', label: 'ຊຳລະຂ້າມແດນຜ່ານ QR Code' }
];


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
        id: 'bcel',
        name: 'ທະນາຄານ ການຄ້າຕ່າງປະເທດລາວ ມະຫາຊົນ Banque Pour Le Commerce Exterieur Lao Public (BCEL)',
        component: boxmemberbcel,
        image: '/Logomember/bcelretangle.png',
        link1: 'https://www.facebook.com/BCEL.Bank',
        link2: 'https://www.bcel.com.la',
        aosDuration: 500,

        products: [
            'mobile_transfer',
            'qr_payment',
            'qr_crossborder',

        ]
    },
    {
        id: 'ldb',
        name: 'ທະນາຄານ ພັດທະນາລາວ ຈຳກັດ Lao Development Bank (LDB)',
        component: boxmemberldb,
        image: '/Logomember/ldb-gold.png',
        link1: 'https://www.facebook.com/ldblao',
        link2: 'https://www.ldblao.la/',
        aosDuration: 600,
       products: [
            'mobile_transfer',
            'qr_payment',
            'qr_crossborder',

        ]
    },
    {
        id: 'apb',
        name: 'ທະນາຄານ ສົ່ງເສີມກະສິກໍາ ຈຳກັດ Agricultural Promotion Bank (APB)',
        component: boxmemberapb,
        image: '/Logomember/APBB.PNG',
        link1: 'https://www.facebook.com/APB.Bank/?locale=th_TH',
        link2: 'https://www.apb.com.la',
        aosDuration: 700,
      products: [
            'mobile_transfer',
            'qr_payment',
            'qr_crossborder',

        ]
    },
    {
        id: 'jdb',
        name: 'ທະນາຄານ ຮ່ວມພັດທະນາ Joint Development Bank (JDB)',
        component: boxmemberjdb,
        image: '/Logomember/JDBbank.png',
        link1: 'https://www.facebook.com/jdbbanklaos',
        link2: 'https://www.jdbbank.com.la/',
        aosDuration: 800,
       products: [
            'mobile_transfer',
            'qr_payment',
            'qr_crossborder',

        ]
    },
    {
        id: 'maru',
        name: 'ທະນາຄານ ມາຣູຮານ ເຈແປນ ລາວ ຈຳກັດ MARUHAN Japan Bank Lao (MJBL)',
        component: boxmembermaru,
        image: '/Logomember/MARU.jpg',
        link1: 'https://www.facebook.com/MaruhanJapanBankLao/',
        link2: 'https://maruhanjapanbanklao.com',
        aosDuration: 900,
      products: [
            'mobile_transfer',
            'qr_payment',
            'qr_crossborder',

        ]
    },
    {
        id: 'lvb',
        name: 'ທະນາຄານ ຮ່ວມທຸລະກິດ ລາວ-ຫວຽດ Laos - Vietnam Joint Venture Bank (LVB)',
        component: boxmemberlvb,
        image: '/Logomember/LVB.png',
        link1: 'https://www.facebook.com/LaoVietBank',
        link2: 'https://www.laovietbank.com.la/la/',
        aosDuration: 1100,
      products: [
            'mobile_transfer',
            'qr_payment',
            'qr_crossborder',

        ]
    }
]);

// ✅ filter follow search + checkbox
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

.pagination {
    width: 100%;
    height: 300px;
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
    margin-bottom: 30px;
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
    height:600px;
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
    padding-left: 0;
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
