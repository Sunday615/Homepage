<script setup lang="ts">

import navbarview2 from '../../../components/navbar/navbarview2.vue';
import mainfooter from '../../../components/footer/mainfooter.vue';
import paginationmember2 from '../../../components/pagination/paginationmember2.vue';
import footerLogoMember2 from '../../../components/footer/memberfooter/footer-logo-member2.vue';

import boxmembericbc from '../../../components/boxmember/boxmembericbc.vue';
import boxmemberboc from '../../../components/boxmember/boxmemberboc.vue';
import boxmembervtb from '../../../components/boxmember/boxmembervtb.vue';
import boxmemberib from '../../../components/boxmember/boxmemberib.vue';
import boxmemberaceleda from '../../../components/boxmember/boxmemberaceleda.vue';
import boxmemberbic from '../../../components/boxmember/boxmemberbic.vue';
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
                        <p>ໜ້າຫຼັກ <span style="padding-right: 40px; padding-left: 40px;"><i
                                    class="fa-solid fa-chevron-right"></i></span> ສະມາຊິກ<span
                                style="padding-right: 40px; padding-left: 40px;"><i
                                    class="fa-solid fa-chevron-right"></i>
                            </span> ສະມາຊິກລະບົບບັດທະນາຄານຮ່ວມກັນ</p>
                    </div>




                </div>
            </div>
        </div>
        <div class="cardviewcontainer">
           <div class="leftsidecontainer">
                <div data-aos="fade-right" data-aos-duration="200">
                  <boxmembericbc image="/Logomember/ICBC.png" link1="https://www.facebook.com/icbcglobal/" link2="https://vientiane.icbc.com.cn/en/column/1438058341816746015.html"></boxmembericbc>
                </div>
                <div data-aos="fade-right" data-aos-duration="400">
                   <boxmemberboc image="/Logomember/bboc.png" link1="https://www.facebook.com/profile.php?id=100066833677650" link2="https://www.boc.cn/en/"></boxmemberboc>
                </div>
                <div data-aos="fade-right" data-aos-duration="500">
                    <boxmembervtb image="/Logomember/vtb.png" link1="https://www.facebook.com/vtblao" link2="https://laoefast.vietinbank.com.la"></boxmembervtb>
                    
                </div>
                <div data-aos="fade-right" data-aos-duration="700">

                    <boxmemberib image="/Logomember/IBbankk.JPG" link1="https://www.facebook.com/indochina.bank.page" link2="https://iblaos.com"></boxmemberib>
                </div>
                <div data-aos="fade-right" data-aos-duration="900">
                    <boxmemberaceleda image="/Logomember/ACL-bg.png" link1="https://www.facebook.com/acledabanklao" link2="https://www.acledabank.com.la/la/lao/"></boxmemberaceleda>
                </div>
                <div data-aos="fade-right" data-aos-duration="1100">
                    <boxmemberbic image="/Logomember/BIC.png" link1="https://www.facebook.com/BICBANKLAO" link2="https://www.biclaos.com"></boxmemberbic>
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

.nameofbank-icbc {
    width: 750px;
    height: 200px;

    background: linear-gradient(#cb0202, #a71f33) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat,
        linear-gradient(321deg, transparent 0%, #b88a44 100%),
        linear-gradient(26deg, transparent 0%, #faf398 100%),
        linear-gradient(172deg, transparent 0%, #e0aa4e 100%),
        linear-gradient(270deg, transparent 0%, #f9f295 100%);

    padding: 23px;
    box-sizing: border-box;
    margin-left: 200px;


}

.logobox-icbc img {
    width: 300px;
    height: 300px;


}

.logobox-icbc {
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

.cardmember-icbc {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;

    margin-bottom: 10px;

}

/*##########################*/

.nameofbank-boc {
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

.logobox-boc img {
    width: 300px;
    height: 300px;


}

.logobox-boc {
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

.cardmember-boc {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;

    margin-bottom: 10px;

}

/*###################################*/
.nameofbank-vtb {
    width: 750px;
    height: 200px;

    background: linear-gradient(#0086e7, #0c51d1) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat,
        linear-gradient(321deg, transparent 0%, #b88a44 100%),
        linear-gradient(26deg, transparent 0%, #faf398 100%),
        linear-gradient(172deg, transparent 0%, #e0aa4e 100%),
        linear-gradient(270deg, transparent 0%, #f9f295 100%);

    padding: 23px;
    box-sizing: border-box;
    margin-left: 200px;


}

.logobox-vtb img {
    width: 300px;
    height: 90px;


}

.logobox-vtb {
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

.cardmember-vtb {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;

    margin-bottom: 10px;

}

/* ########################### */
.nameofbank-ib {
    width: 750px;
    height: 200px;

    background: linear-gradient(#8828d1, #430076) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat,
        linear-gradient(321deg, transparent 0%, #b88a44 100%),
        linear-gradient(26deg, transparent 0%, #faf398 100%),
        linear-gradient(172deg, transparent 0%, #e0aa4e 100%),
        linear-gradient(270deg, transparent 0%, #f9f295 100%);

    padding: 23px;
    box-sizing: border-box;
    margin-left: 200px;


}

.logobox-ib img {
    width: 300px;
    height: 300px;


}

.logobox-ib {
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
    position: absolute;
    z-index: 0;


    border-radius: 10px;



}

.cardmember-ib {
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