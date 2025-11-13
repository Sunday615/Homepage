<script setup lang="ts">

import navbarview2 from '../../../components/navbar/navbarview2.vue';
import pagination from '../../../components/pagination/paginationmember1.vue';
import mainfooter from '../../../components/footer/mainfooter.vue';
import boxmemberbcel from '../../../components/boxmember/boxmemberbcel.vue'
import boxmemberldb from '../../../components/boxmember/boxmemberldb.vue'
import boxmemberapb from '../../../components/boxmember/boxmemberapb.vue'
import boxmemberjdb from '../../../components/boxmember/boxmemberjdb.vue'
import boxmembermaru from '../../../components/boxmember/boxmembermaru.vue'
import boxmemberlvb from '../../../components/boxmember/boxmemberlvb.vue'
import footerLogoMember1 from '../../../components/footer/memberfooter/footer-logo-member1.vue';

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
                        <p>ສະມາຊິກລະບົບບັດທະນາຄານຮ່ວມກັນ</p>
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
                <div data-aos="fade-right" data-aos-duration="800">
                    <boxmemberbcel image="/Logomember/bcelretangle.png" link1="https://www.facebook.com/BCEL.Bank" link2="https://www.bcel.com.la"></boxmemberbcel>
                </div>

                <div data-aos="fade-right" data-aos-duration="400">
                    <boxmemberldb image="/Logomember/ldb-gold.png"
                    link2="https://www.ldblao.la/"
                    link1="https://www.facebook.com/ldblao"
                    ></boxmemberldb>
                </div>
                <div data-aos="fade-right" data-aos-duration="500">
                    <boxmemberapb image="/Logomember/APBB.PNG" 
                    link1="https://www.facebook.com/APB.Bank/?locale=th_TH"
                    link2="https://www.apb.com.la"
                    ></boxmemberapb>
                </div>
                <div data-aos="fade-right" data-aos-duration="700">
                    <boxmemberjdb image="/Logomember/JDBbank.png"
                    link1="https://www.facebook.com/jdbbanklaos"
                    link2="https://www.jdbbank.com.la/"
                    ></boxmemberjdb>
                </div>
                <div data-aos="fade-right" data-aos-duration="900">
                   <boxmembermaru image="/Logomember/MARU.jpg" link1="https://www.facebook.com/MaruhanJapanBankLao/" link2="https://maruhanjapanbanklao.com" >

                   </boxmembermaru>
                </div>
                <div data-aos="fade-right" data-aos-duration="1100">
                   <boxmemberlvb image="/Logomember/LVB.png" link1="https://www.facebook.com/LaoVietBank" link2="https://www.laovietbank.com.la/la/"></boxmemberlvb>
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
            <pagination></pagination>
        </div>
        <footerLogoMember1></footerLogoMember1>
        <mainfooter></mainfooter>
    </div>

</template>



<style scoped>
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

.cardnamestyle:hover h1 {
    
    transition: 0.5s;
    opacity: 0.5s;
    display: none;
}

.cardnamestyle:hover p {
    transition: 0.5s;
    opacity: 0.5s;
    display: none;
}

.nameofbank-bcel:hover {
    transition: 0.5s;
    background: linear-gradient(#ed1c24, #6d0302) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat,
        linear-gradient(321deg, transparent 0%, #b88a44 100%),
        linear-gradient(26deg, transparent 0%, #faf398 100%),
        linear-gradient(172deg, transparent 0%, #e0aa4e 100%),
        linear-gradient(270deg, transparent 0%, #f9f295 100%);


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
    cursor: pointer;

    align-items: center;
    border: 1px solid blue;
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