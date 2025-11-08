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
                <div class="cardmember-sacom">
                    <div class="logobox-sacom">
                        <img src="../../../assets/Logomember- retangle/sacombank.png" alt="">
                    </div>
                    <div class="cardnamestyle nameofbank-sacom">

                        <h1>ທະນາຄານ ໄຊງ່ອນເທືອງຕິ່ນ ລາວ </h1>
                        <p>Saigon Thuong Tin Commercial Joint Stock Bank</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="500">
                <div class="cardmember-stb">
                    <div class="logobox-stb">
                        <img src="../../../assets/Logomember- retangle/STB.jpg" alt="">
                    </div>
                    <div class="nameofbank-stb cardnamestyle">
                        <h1>ທະນາຄານ ເອັສທີ ຈຳກັດ</h1>
                        <p>ST Bank Limited</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="700">
                <div class="cardmember-kbank">
                    <div class="logobox-kbank">
                        <img src="../../../assets/Logomember- retangle/kbank.jpg" alt="">
                    </div>
                    <div class="nameofbank-kbank cardnamestyle">
                        <h1>ທະນາຄານ ກະສິກອນໄທ ຈຳກັດ</h1>
                        <p>KASIKORNBANK Public Company Limited</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="800">
                <div class="cardmember-bfl">
                    <div class="logobox-bfl">
                        <img src="../../../assets/Logomember- retangle/bflbank.png" alt="">
                    </div>
                    <div class="nameofbank-bfl cardnamestyle">
                        <h1>ທະນາຄານ ລາວ-ຝລັ່ງ ຈຳກັດ</h1>
                        <p>Banque Franco-Lao</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="900">
                <div class="cardmember-psvb">
                    <div class="logobox-psvb">
                        <img src="../../../assets/Logomember- retangle/psvb.PNG" alt="">
                    </div>
                    <div class="nameofbank-psvb cardnamestyle">
                        <h1>ທະນາຄານ ພົງສະຫວັນ ຈໍາກັດ</h1>
                        <p>Phongsavanh Bank</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000">
                <div class="cardmember-mb">
                    <div class="logobox-mb">
                        <img src="../../../assets/Logomember- retangle/mbbank.png" alt="">
                    </div>
                    <div class="nameofbank-mb cardnamestyle">
                        <h1>ທະນາຄານ ຫຸ້ນສ່ວນການຄ້າທະຫານ ສາຂາລາວ</h1>
                        <p>Military Commercial Joint Stock Bank</p>
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
    margin-bottom: 20px;
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

/* ########################### */
.nameofbank-pub {
    width: 750px;
    height: 200px;

    background: linear-gradient(#f32b24, #c32c2c) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat,
        linear-gradient(321deg, transparent 0%, #b88a44 100%),
        linear-gradient(26deg, transparent 0%, #faf398 100%),
        linear-gradient(172deg, transparent 0%, #e0aa4e 100%),
        linear-gradient(270deg, transparent 0%, #f9f295 100%);

    padding: 23px;
    box-sizing: border-box;
    margin-left: 200px;


}

.logobox-pub img {
    width: 300px;
    height: 300px;


}

.logobox-pub {
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

.cardmember-pub {
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

.nameofbank-acl {
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

.logobox-acl img {
    width: 300px;
    height: 90px;


}

.logobox-acl {
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
    position: absolute;
    z-index: 0;
    background-color: #fff;
    border: 1px solid #00000025;
    border-radius: 10px;



}

.cardmember-acl {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;

    margin-bottom: 10px;

}



.nameofbank-bic {
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

.nameofbank-bic {
    width: 750px;
    height: 200px;
    background-color: red;
    background: linear-gradient(#4867aa, #213051) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat,
        linear-gradient(321deg, transparent 0%, #b88a44 100%),
        linear-gradient(26deg, transparent 0%, #faf398 100%),
        linear-gradient(172deg, transparent 0%, #e0aa4e 100%),
        linear-gradient(270deg, transparent 0%, #f9f295 100%);

    padding: 23px;
    box-sizing: border-box;
    margin-left: 200px;


}

.logobox-bic img {
    width: 300px;
    height: 300px;


}

.logobox-bic {
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    overflow: hidden;
    z-index: 0;
    background-color: red;
    border-radius: 10px;

}

.cardmember-bic {
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