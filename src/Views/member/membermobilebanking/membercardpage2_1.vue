<script setup lang="ts">

import navbarview2 from '../../../components/navbar/navbarview2.vue';
import mainfooter from '../../../components/footer/mainfooter.vue';
import paginationmember2 from '../../../components/pagination/paginationmember2.vue';
import footerLogoMember2 from '../../../components/footer/memberfooter/footer-logo-member2.vue';

import { onMounted } from 'vue';

onMounted(() => {

  window.scrollTo({
    top: 660, 
    behavior: 'smooth'
  })
})
</script>



<template>

    <navbarview2></navbarview2>
     <div class="navigatorcontent">
        <img id="navigator-img" src="../../../assets/Member/membercrd-2.png" alt="">
        <div class="navigator-info-container">
            <div class="titlenavigator">
                <div data-aos="zoom-in-down" data-aos-duration="1000">
                    <p>ສະມາຊິກລະບົບບັດທະນາຄານຮ່ວມກັນ</p>
                </div>




            </div>
            <div class="navigatorlink">
                <div data-aos="zoom-out-up" data-aos-duration="1000">
                    <p>ໜ້າຫຼັກ <span style="padding-right: 40px; padding-left: 40px;"><i
                                class="fa-solid fa-chevron-right"></i></span> ສະມາຊິກ<span
                            style="padding-right: 40px; padding-left: 40px;"><i class="fa-solid fa-chevron-right"></i>
                        </span> ສະມາຊິກລະບົບບັດທະນາຄານຮ່ວມກັນ</p>
                </div>




            </div>
        </div>
    </div>
    <div class="cardviewcontainer">
        <div class="leftsidecontainer">
            <div data-aos="fade-right" data-aos-duration="800">
                <div class="cardmember-bcel">
                    <div class="logobox-bcel">
                        <img src="../../../assets/logomember-circle/BCEL.png" alt="">
                    </div>
                    <div class="cardnamestyle nameofbank-bcel">

                        <h1>ທະນາຄານ ການຄ້າຕ່າງປະເທດລາວ ມະຫາຊົນ </h1>
                        <p>Banque Pour Le Commerce Exterieur Lao Public</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="500">
                <div class="cardmember-ldb">
                    <div class="logobox-ldb">
                        <img src="../../../assets/logomember-circle/ldb-gold.png" alt="">
                    </div>
                    <div class="nameofbank-ldb cardnamestyle">
                        <h1>ທະນາຄານ ພັດທະນາລາວ ຈຳກັດ </h1>
                        <p>Lao Development Bank </p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="600">
                <div class="cardmember-apb">
                    <div class="logobox-apb">
                        <img src="../../../assets/Logomember- retangle/APB.jpeg" alt="">
                    </div>
                    <div class="nameofbank-apb cardnamestyle">
                        <h1>ທະນາຄານ ສົ່ງເສີມກະສິກໍາ ຈຳກັດ </h1>
                        <p>Agricultural Promotion Bank </p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="700">
                <div class="cardmember-jdb">
                    <div class="logobox-jdb">
                        <img src="../../../assets/logomember-circle/JDBbank.png" alt="">
                    </div>
                    <div class="nameofbank-jdb cardnamestyle">
                        <h1>ທະນາຄານ ຮ່ວມພັດທະນາ</h1>
                        <p>Joint Development Bank </p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="800">
                <div class="cardmember-maru">
                    <div class="logobox-maru">
                        <img src="../../../assets/Logomember- retangle/MARU.jpg" alt="">
                    </div>
                    <div class="nameofbank-maru cardnamestyle">
                        <h1>ທະນາຄານ ມາຣູຮານ ເຈແປນ ລາວ ຈຳກັດ </h1>
                        <p>MARUHAN Japan Bank Lao </p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="900">
                <div class="cardmember-lvb">
                    <div class="logobox-lvb">
                        <img src="../../../assets/logomember-circle/lvb.PNG" alt="">
                    </div>
                    <div class="nameofbank-lvb cardnamestyle">
                        <h1>ທະນາຄານ ຮ່ວມທຸລະກິດ ລາວ-ຫວຽດ</h1>
                        <p>Laos - Vietnam Joint Venture Bank</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="rightsidecontainer">
            <div class="searchbar">
                <div class="searchblog">
                    <h4>ຄົ້ນຫາຂໍ້ມູນຂ່າວສານ</h4>
                </div>
                <div class="inputsearchblog">
                    <input type="text" placeholder="Search">
                    <div class="btnsubmit">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>

            <div class="groupshortmember">
                <div class="title-group">
                    <h1>ໝວດໝູ່ທະນາຄານສະມາຊິກ</h1>
                </div>
                <div class="checkboxshort">
                    <div class="checkbox1">
                        <div class="boxcheck"></div>
                        <p>All</p>
                    </div>
                    <div class="checkbox1">
                        <div class="boxcheck"></div>
                        <p>ກວດສອບຍອດເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM</p>
                    </div>
                    <div class="checkbox1">
                        <div class="boxcheck"></div>
                        <p>ຖອນເງິນສົດຂ້າມທະນາຄານຜ່ານຕູ້ ATM</p>
                    </div>
                    <div class="checkbox1">
                        <div class="boxcheck"></div>
                        <p>ໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM</p>
                    </div>
                    <div class="checkbox1">
                        <div class="boxcheck"></div>
                        <p>ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື</p>
                    </div>
                    <div class="checkbox1">
                        <div class="boxcheck"></div>
                        <p>ການຊຳລະເງິນຂ້າມທະນາຄານຜ່ານ QR</p>
                    </div>
                    <div class="checkbox1">
                        <div class="boxcheck"></div>
                        <p>ຊຳລະຂ້າມແດນຜ່ານ QR Code</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="pagination">
        <paginationmember2></paginationmember2>
    </div>
    <footer-logo-member2></footer-logo-member2>
    <mainfooter></mainfooter>
</template>



<style scoped>
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
    font-family: "Noto Sans Lao", sans-serif;
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
    padding-left: 30px;
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

/*##########################*/

.nameofbank-maru {
    width: 750px;
    height: 200px;

    background: linear-gradient(#eb1c24, #6d0302) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat,
        linear-gradient(321deg, transparent 0%, #b88a44 100%),
        linear-gradient(26deg, transparent 0%, #faf398 100%),
        linear-gradient(172deg, transparent 0%, #e0aa4e 100%),
        linear-gradient(270deg, transparent 0%, #f9f295 100%);

    padding: 23px;
    box-sizing: border-box;
    margin-left: 200px;


}

.logobox-maru img {
    width: 300px;
    height: 300px;


}

.logobox-maru {
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

.cardmember-maru {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;

    margin-bottom: 10px;

}

/*###################################*/
.nameofbank-jdb {
    width: 750px;
    height: 200px;

    background: linear-gradient(#106cfc, #0c51d1) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat,
        linear-gradient(321deg, transparent 0%, #b88a44 100%),
        linear-gradient(26deg, transparent 0%, #faf398 100%),
        linear-gradient(172deg, transparent 0%, #e0aa4e 100%),
        linear-gradient(270deg, transparent 0%, #f9f295 100%);

    padding: 23px;
    box-sizing: border-box;
    margin-left: 200px;


}

.logobox-jdb img {
    width: 280px;
    height: 280px;


}

.logobox-jdb {
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
    position: absolute;
    z-index: 0;
    border: 1px solid #00000025;
    background-color: #0954a0;
    border-radius: 10px;



}

.cardmember-jdb {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;

    margin-bottom: 10px;

}

/* ########################### */
.nameofbank-apb {
    width: 750px;
    height: 200px;

    background: linear-gradient(#379685, #215a50) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat,
        linear-gradient(321deg, transparent 0%, #b88a44 100%),
        linear-gradient(26deg, transparent 0%, #faf398 100%),
        linear-gradient(172deg, transparent 0%, #e0aa4e 100%),
        linear-gradient(270deg, transparent 0%, #f9f295 100%);

    padding: 23px;
    box-sizing: border-box;
    margin-left: 200px;


}

.logobox-apb img {
    width: 280px;
    height: 280px;


}

.logobox-apb {
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

.cardmember-apb {
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

.nameofbank-ldb {
    width: 750px;
    height: 200px;

    background: linear-gradient(#2c5195, #1c335f) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat,
        linear-gradient(321deg, transparent 0%, #b88a44 100%),
        linear-gradient(26deg, transparent 0%, #faf398 100%),
        linear-gradient(172deg, transparent 0%, #e0aa4e 100%),
        linear-gradient(270deg, transparent 0%, #f9f295 100%);

    padding: 23px;
    box-sizing: border-box;
    margin-left: 200px;


}

.logobox-ldb img {
    width: 300px;
    height: 300px;


}

.logobox-ldb {
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
    position: absolute;
    z-index: 0;
    background-color: #1c335f;
    border-radius: 10px;



}

.cardmember-ldb {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;

    margin-bottom: 10px;

}



.nameofbank-bcel {
    width: 750px;
    height: 200px;


    background: linear-gradient(#ed1c24, #6d0302) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat,
        linear-gradient(321deg, transparent 0%, #b88a44 100%),
        linear-gradient(26deg, transparent 0%, #faf398 100%),
        linear-gradient(172deg, transparent 0%, #e0aa4e 100%),
        linear-gradient(270deg, transparent 0%, #f9f295 100%);

    padding: 23px;
    box-sizing: border-box;
    margin-left: 200px;


}

.nameofbank-bcel {
    width: 750px;
    height: 200px;
    background-color: red;
    background: linear-gradient(#ed1c24, #6d0302) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat,
        linear-gradient(321deg, transparent 0%, #b88a44 100%),
        linear-gradient(26deg, transparent 0%, #faf398 100%),
        linear-gradient(172deg, transparent 0%, #e0aa4e 100%),
        linear-gradient(270deg, transparent 0%, #f9f295 100%);

    padding: 23px;
    box-sizing: border-box;
    margin-left: 200px;


}

.logobox-bcel img {
    width: 250px;
    height: 250px;


}

.logobox-bcel {
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 0;
    background-color: red;
    border-radius: 10px;

}

.cardmember-bcel {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;

    margin-bottom: 10px;

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