<script setup>
import search from '../../components/search/search.vue';
import vdo from './videohomepage.vue'
import memberscrolling from './memberscrolling.vue';
import footerdropdown from '../../components/footer/footerdropdown.vue';
import productDropdown from './navbar-homepage/product-dropdown.vue';
import memberdropdown from './navbar-homepage/memberdropdown.vue';
import aboutusdropdown from './navbar-homepage/aboutusdropdown.vue';
import vdocontainer4 from './vdocontainer4.vue';
import homepageproduct from '../../components/autoscrolling/homepageproduct.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';




import 'swiper/css';
import 'swiper/css/navigation';

const newsItems = [
    {
        image: '/images/1.jpg',
        date: '19 ທັນວາ 2024',
        title: 'ພິທີລົງນາມເຊັນສັນຍາໂຄງການຊຳລະຂ້າມແດນລາວ-ຈີນ',
        link: '/news/1'
    },
    {
        image: '/images/2.png',
        date: '19 ສິງຫາ 2024',
        title: 'ແຈ້ງເຊີນເຂົ້າຮ່ວມປະມູນຍື່ນຊອງລາຄາ ການບຳລຸງຮັກສາອຸປະກອນເຄືອຂ່າຍ',
        link: '/news/2'
    },
    {
        image: '/images/3.jpg',
        date: '30 ພຶດສະພາ 2024',
        title: 'ແຈ້ງເຊີນປະມູນ ອຸປະກອນ HARDWARE ເພື່ອສ້າງສູນສຳຮອງຂໍ້ມູນຂອງບໍລິສັດ LAPNET',
        link: '/news/3'
    },
    {
        image: '/images/4.png',
        date: '03 ເມສາ 2024',
        title: 'ພິທີເປີດໂຕການນຳໃຊ້ລະບົບຊຳລະຂ້າມແດນໃນຮູບແບບ QR CODE ລະຫວ່າງ ລາວ - ໄທ',
        link: '/news/4'
    },
    {
        image: '/images/5.jpg',
        date: '14 ມີນາ 2024',
        title: 'ພິທີ ເຊັນສັນຍາວ່າດ້ວຍການຮ່ວມມືທາງດ້ານການເຊື່ອມຕໍ່ລະບົບຊຳລະຂ້າມແດນ QR CODE ລະຫວ່າງ ສປປ ລາວ ແລະ ປະເທດໄທ',
        link: '/news/5'
    },
    {
        image: '/images/6.jpg',
        date: '29 ກັນຍາ 2023',
        title: 'ບໍລິສັດ ລາວເນເຊີນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ ເດີນທາງໄປແລກປ່ຽນບົດຮຽນທາງດ້ານການໃຫ້ບໍລິການເງິນທີ່ປະເທດສິງກະໂປ',
        link: '/news/6'
    }
]

const autoplayDelay = 3000

function goTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
    <div class="containerhiden">
        <div class="memberlogin">
            <div class="centercontainer">
                <div class="locationcompany">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>Kaysone Phomvihane Avenue, Vientiane, Laos</p>
                </div>
                <div class="contact">
                    <div class="socialicon">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-solid fa-globe"></i>
                    </div>
                    <div class="registercontainer">
                        <i class="fa-solid fa-user"></i>
                        <p>Register</p>
                    </div>
                    <div class="logincontainer">
                        <i class="fa-solid fa-lock"></i>
                        <p>Login</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="backgroundimg">
            <img id="backgroundhomepage" src="../../assets/Homepage/bg-page1.png" alt="">
            <div class="navbar">
                <div class="logolapnet">
                    <img src="../../assets/Logo-lapnet/logolapnet.PNG" alt="LapnetLogo">
                </div>
                <div class="navbarlist">
                    <ul>
                        <li @click="goTop()">
                            <productDropdown></productDropdown>
                        </li>
                        <li @click="goTop()">
                            <memberdropdown></memberdropdown>
                        </li>
                        <li @click="goTop()">ຂ່າວ ແລະ ກິດຈະກຳ</li>
                        <router-link to="/joinus">
                            <li @click="goTop()" style="padding-left: 25px;">ຮ່ວມງານກັບເຮົາ</li>
                        </router-link>
                        <li @click="goTop()">
                            <aboutusdropdown></aboutusdropdown>
                        </li>
                         <router-link to="/contact"><li>ຕິດຕໍ່ພວກເຮົາ</li></router-link>
                    </ul>
                </div>
                <div class="searchbar">
                    <a style=" padding-right: 10px; margin-left: 60px;" href="">EN</a>
                    <p>/</p>
                    <a style=" padding-left: 10px;" href="">LA</a>
                    <search style="padding-left: 20px;"></search>
                </div>

            </div>

            <div class="titlecontent">
                <div data-aos="fade-right" data-aos-duration="800">
                    <h1>ການຊຳລະເງິນຂ້າມ <br> ທະນາຄານຜ່ານ QR</h1>
                </div>
                <div data-aos="fade-right" data-aos-duration="1200">
                    <p>ການຊໍາລະຂ້າມທະນາຄານຜ່ານ LAPNet QRPay ໂດຍນຳໃຊ້ລະບົບ LMPS ໃນການເຊື່ອມໂຍງຜ່ານ<br> Applications
                        ຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກຂອງບໍລິສັດ LAPNet ໃຫ້ສາມາດນຳໃຊ້ຟັງຊັ່ນການ <br>
                        ດຳເນີນທຸລະກຳຊໍາລະຜ່ານ QR
                        ຂອງທະນາຄານອື່ນໄດ້.

                    </p>
                </div>
                <!-- HTML !-->
                <div data-aos="fade-up" data-aos-duration="1000">
                    <button class="button-36" role="button"><i class="fa-solid fa-caret-right"></i>ຜະລິດຕະພັນ ແລະ
                        ການບໍລິການ</button>
                </div>
            </div>


        </div>

        <div class="containerhomepage2">
            <div class="cardview">
                <img src="../../assets/Homepage/newmission-2.png" alt=""></img>
            </div>
            <div class="titlecontainer">
                <div class="header">
                    <div data-aos="fade-right" data-aos-duration="800">
                        <h1>ວິໄສທັດຂອງພວກເຮົາ</h1>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="1200">
                    <div class="boxinfo" style="margin-top: 80px;">

                        <div class="number">
                            <p>01</p>
                        </div>
                        <div class="infovision">
                            <h2>ວິໄສທັດ</h2>
                            <p style="color: #000;">
                                ພັດທະນາລະບົບການຊໍາລະທຸລະກຳຍ່ອຍໃຫ້ເປັນສູນກາງການຊໍາລະຂອງບັນດາຜູ້ໃຫ້ບໍລິການຊໍາລະ
                                ທັງພາຍໃນ ແລະ
                                ສາກົນ,
                                ແນໃສ່ໃຫ້ປະຊາຊົນລາງໄດ້ໃຊ້ບໍລິການຊໍາລະທີ່ສະດວກວ່ອງໄວ, ທັນສະໄໝ, ປອດໄພ, ຕົ້ນທືນຕໍາ ແລະ
                                ເພື່ອໃຫ້ບໍລິສັດການເປັນໂຄງຮ່າງພື້ນຖານໃຫ້ແກ່ການຊໍາລະໃນ ສປປ ລາວ.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="1200">
                    <div class="boxinfo2">
                        <div class="number">
                            <p>02</p>
                        </div>
                        <div class="infovision">
                            <h2>ພາລະກິດ</h2>
                            <p style="color: #000;">ພັດທະນາລະບົບການຊໍາລະໃຫ້ມີຄວາມຫຼາກຫຼາຍ, ທັນສະໄໝ,
                                ຕອບຮັບໄດ້ທຸກຊ່ອງທາງການຊໍາລະທີ່ເກີດຂື້ນ,
                                ເຕົ້າໂຮມເອົາບັນດາທະນາຄານທຸລະກິດ, ສະຖາບັນການເງິນ ແລະ ບໍລິສັດ Fintech
                                ທີ່ເປັນຜູ້ໃຫ້ບໍລິການຊໍາລະ
                                ໃຫ້ເຂົ້າມາເປັນສະມາຊີກຂອງບໍລິສັດ ເພື່ອພ້ອມກັນໃຫ້ບໍລິການລະບົບການຊໍາລະແກ່ສັງຄົມ,
                                ຫັນເອົາການເຊື່ອມຕໍ່ສາກົນທີ່ມີລັກສະນະກະແຈກກະຈາຍລວມສູນເຂົ້າມາເຊື່ອມຕໍ່ເປັນຮູບແບບລະບົບປະຕູດຽວເພື່ອຫຼຸດຜ່ອນຕົ້ນທືນລວມຂອງທົ່ວລະບົບ,
                                ເສີມຂະຫຍາຍຄວາມຮູ້-ເຂົ້າໃຈໃຫ້ແກ່ມວນຊົນໄດ້ຮັບຮູ້ເຖິງຄວາມສຳຄັນ ແລະ
                                ປະໂຫຍກຂອງການນຳໃຊ້ລະບົບການຊໍາລະເອເລັກໂຕຣນິກຢ່າງຖ່ອງແທ້
                                ເພື່ອເຮັດໃຫ້ມວນຊົນໄດ້ນຳໃຊ້ລະບົບການຊໍາລະຢ່າງຖືກຕ້ອງ ແລະ ປອດໄພ
                                ເປັນການເສີມສ້າງຄວາມໝັ້ນໃຈໃຫ້ແກ່ມວນຊົນ.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="homepagecontent3">
            <vdo></vdo>
        </div>
        <div class="allproducts">


            <!-- #all product now! -->
            <homepageproduct></homepageproduct>


        </div>
        <div class="homepagecontent4">


            <vdocontainer4></vdocontainer4>
        </div>
        <memberscrolling></memberscrolling>

        <div class="container-blog">
            <div class="upsideblog">
                <img id="blogupperimg" src="../../assets/Homepage/blog-bg.png" alt="">
                <div class="logoupperblog">
                    <img src="../../assets/Logo-lapnet/logolapnet.PNG" alt="">
                    <img src="../../assets/Logo-lapnet/textlogo.PNG" alt="">
                </div>
                <div class="title-blog">

                    <div data-aos="zoom-out">
                        <p>ຂ່າວສານ ແລະ ກິດຈະກຳ</p>
                    </div>

                </div>
                <div class="downblog">

                    <div class="news-swiper-container">
                        <Swiper :modules="[Navigation, Autoplay]" :slides-per-view="2" :space-between="30" :loop="true"
                            :autoplay="{
                                delay: autoplayDelay,
                                disableOnInteraction: false
                            }" navigation class="news-swiper">
                            <SwiperSlide v-for="(item, index) in newsItems" :key="index" class="news-card">
                                <div class="card">
                                    <img :src="item.image" alt="news" class="card-img" />
                                    <div class="card-content">
                                        <p class="date">{{ item.date }}</p>
                                        <h3 class="title">{{ item.title }}</h3>
                                        <a :href="item.link" class="read-more" target="_blank">
                                            ອ່ານເພີ່ມເຕີ່ມ →
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div class="boxcontianer"></div>

        </div>
        <div class="footercontainer">
            <div class="upfooter">
                <div class="logofooterimg">
                    <div class="bg">
                        <img src="../../assets/footer/footer-info.png" alt="">

                        <div class="logoft">
                            <img src="../../assets/Logo-lapnet/logolapnet.PNG" alt="">
                            <img src="../../assets/Logo-lapnet/textlogowhite.PNG" alt="">
                        </div>
                        <div class="infoft">
                            <div class="block1">
                                <div class="iconphone">
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                                <div class="titlephone">
                                    <p>021 417915</p>
                                </div>
                            </div>
                            <div class="block1">
                                <div class="iconemail">
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                                <div class="titleemail">
                                    <p>info@lapnet.com.la</p>
                                </div>
                            </div>
                            <div class="block1">
                                <div class="iconlocation">
                                    <i class="fa-solid fa-location-dot"></i>
                                </div>
                                <div class="titlelocation">
                                    <p>XJHH+FFM, Vientiane</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="infofooter">
                    <img src="../../assets/footer/footerbg.png" alt="">
                    <div class="infoftleft">
                        <div class="titlefooterleft">
                            <p>ກ່ຽວກັບບໍລິສັດ</p>
                        </div>
                        <div class="infofooterleft">
                            <ul>
                                <li>ບ້ານໂພນສະອາດ, ຈັນທະບູລີ, ນະຄອນຫຼວງວຽງຈັນ</li>
                                <li>ເບີໂທ: 030 568 7610</li>
                                <li>ເບີໂທ: 021 417915</li>
                                <li>ອີເມວ: info@lapnet.com.la</li>

                            </ul>
                        </div>
                        <div class="facebookbtnfooter">
                            <i class="fa-brands fa-facebook"></i>
                            <span><a href="https://www.facebook.com/laonationalpaymentnetwork" target="_blank">Lao
                                    National
                                    Payment Network</a></span>
                        </div>
                    </div>
                    <div class="infocenter">
                        <div class="titlecenter">
                            <p>ຜະລິດຕະພັນ ແລະ ການບໍລິການ</p>
                        </div>
                        <div class="menufootercenter">
                            <router-link to="/products-service/products-1">
                                <div class="menubox" @click="goTop()">
                                    <i class="fa-solid fa-chevron-right"></i>
                                    <span>
                                        <p>ກວດເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM</p>
                                    </span>
                                </div>
                            </router-link>
                            <router-link to="/products-service/products-2">
                                <div class="menubox" @click="goTop()">
                                    <i class="fa-solid fa-chevron-right"></i>
                                    <span>
                                        <p>ຖອນເງິນສົດຂ້າມທະນາຄານຜ່ານຕູ້ ATM</p>
                                    </span>
                                </div>
                            </router-link>
                            <router-link to="/products-service/products-3">
                                <div class="menubox" @click="goTop()">
                                    <i class="fa-solid fa-chevron-right"></i>
                                    <span>
                                        <p>ໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM</p>
                                    </span>
                                </div>
                            </router-link>
                            <router-link to="/products-service/products-4">
                                <div class="menubox" @click="goTop()">
                                    <i class="fa-solid fa-chevron-right"></i>
                                    <span>
                                        <p>ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື</p>
                                    </span>
                                </div>
                            </router-link>
                            <router-link to="/products-service/products-5">
                                <div class="menubox" @click="goTop()">
                                    <i class="fa-solid fa-chevron-right"></i>
                                    <span>
                                        <p>ການຊຳລະເງິນຂ້າມທະນາຄານຜ່ານ QR</p>
                                    </span>
                                </div>
                            </router-link>
                            <router-link to="/products-service/products-6">
                                <div class="menuboxnonline" @click="goTop()">
                                    <i class="fa-solid fa-chevron-right"></i>
                                    <span>
                                        <p>ຊຳລະຂ້າມແດນຜ່ານ QR</p>
                                    </span>
                                </div>
                            </router-link>
                        </div>


                    </div>
                    <div class="infofright">
                        <div class="titlecenter">
                            <p>ເມນູ</p>
                        </div>
                        <div class="menufootercenter">

                            <footerdropdown></footerdropdown>
                        </div>

                    </div>
                </div>

                <div class="copyright">
                    <p>Copright © 2020 LAPNet Co., Ltd.</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.allproducts {
    width: 100%;
    height: 850px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.infovision p {
    font-size: 19px;
    font-family: "Noto Sans Lao", sans-serif;
    padding-top: 20px;
    line-height: 1.7;

}

.infovision h2 {
    font-size: 29px;
    color: #00089b;
    font-weight: bold;
    font-family: "Noto Sans Lao", sans-serif;
}

.number p {
    width: 100%;
    height: 100%;
    background: #0432C6;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: "Inter";
    font-weight: bold;
    font-size: 20px;
    background: linear-gradient(153deg, rgba(4, 50, 198, 1) 0%, rgba(2, 24, 96, 1) 100%);
}

.header h1 {
    font-size: 60px;
    font-weight: bold;
    padding-top: 30px;
    font-family: "Noto Sans Lao", sans-serif;
    color: #000CF0;
    background-image: linear-gradient(360deg, #0043fa, #0080ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
}

.infovision {
    width: 720px;
    height: 300px;
    margin-left: 30px;

}

.number {
    width: 80px;
    height: 80px;


}

.boxinfo2 {
    width: 800px;
    height: 300px;
    display: flex;

}

.boxinfo {
    width: 800px;
    height: 240px;
    display: flex;

}

.header {
    width: 800px;
    height: 100px;

}

.cardview img {
    width: 700px;
    height: 700px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
}

.titlecontainer {
    width: 50%;
    height: 100%;
    margin-left: 3rem;
    margin-top: 50px;

}

.cardview {
    width: 45%;
    height: 100%;
    display: flex;

    justify-content: center;
    align-items: center;


}

.containerhomepage2 {
    width: 100%;
    height: 950px;
    display: flex;

}

.containerhiden {
    width: 100%;
    overflow: hidden;
    height: auto;
}

.copyright {
    width: 80%;
    height: 130px;
    border-top: 0.1px solid rgb(118, 118, 118);
    margin: 0 auto;


}

.copyright p {
    font-size: 20px;
    color: rgb(118, 118, 118);
    display: flex;
    justify-content: center;
    margin-top: 35px;

}

.menufootercenter {
    width: 400px;
    height: 540px;
    margin-top: 30px;



}

.menuboxnonline p {
    color: #fff;
    font-family: "Noto Sans Lao", sans-serif;
    font-size: 20px;
    margin-left: 20px;
}

.menuboxnonline i {
    font-size: 30px;
    color: #fff;
}

.menuboxnonline:hover {
    background: rgba(255, 255, 255, 0.08);

}

.menuboxnonline {
    width: 350px;
    height: 90px;


    display: flex;
    justify-content: start;
    align-items: center;
}

.menubox {
    width: 350px;
    height: 90px;
    display: flex;
    justify-content: start;
    align-items: center;
    border-bottom: 1px solid #bebebe;

}

.menubox:hover {
    background: rgba(255, 255, 255, 0.08);

}

.menubox span p {
    color: #fff;
    font-family: "Noto Sans Lao", sans-serif;
    font-size: 20px;
    margin-left: 20px;
}

.menubox i {
    font-size: 30px;
    color: #fff;

}

.titlecenter p {
    font-size: 40px;
    color: #fff;
    font-weight: bold;
    font-family: "Noto Sans Lao", sans-serif;


}

.infofright {
    width: 600px;
    height: 600px;

    padding-left: 90px;
    margin-top: 100px;

}

.infocenter {
    width: 600px;
    height: 600px;
    margin-top: 100px;
    padding-left: 50px;


}

.facebookbtnfooter {
    margin-top: 30px;
    width: 320px;
    height: 50px;
    border: 1px solid #fff;
    border-radius: 40px;
    display: flex;
    font-family: 'Inter';
    justify-content: start;
    align-items: center;
    cursor: pointer;


}

.facebookbtnfooter i {
    font-size: 40px;

    color: #fff;
}

.facebookbtnfooter span a {
    color: #fff;
    font-size: 17px;
}

.titlefooterleft p {
    color: #fff;
    font-family: "Noto Sans Lao", sans-serif;
    font-size: 40px;
    padding-bottom: 60px;
    font-weight: bold;
}

.infofooterleft ul {
    color: #fff;
    font-family: "Noto Sans Lao", sans-serif;
}

.infofooterleft ul li {
    margin-bottom: 15px;
    font-size: 20px;
}

.infoftleft {
    width: 600px;
    height: 600px;
    margin-top: 100px;

    padding-left: 140px;



}

.footercontainer {
    width: 100%;
    height: 1100px;


}

.logofooterimg img {
    width: 150px;
    height: 150px;
    position: absolute;


}

.bg {
    width: 100%;
    height: 150px;
    display: flex;
}

.bg img {
    width: 100%;
    height: 150px;
    position: absolute;
    z-index: -1;

}

.leftsideft {
    width: 35%;
    height: 120px;

}

.rightsideft {
    width: 65%;
    height: 120px;

}

.logoft {
    width: 32%;
    height: 150px;

    display: flex;
    justify-content: end;
}

.logoft img {
    width: 140px;
    margin-top: 3px;
    position: relative;
    height: 140px;

}

.infoft {

    width: 68%;
    height: 150px;
    display: flex;
    margin-left: 150px;
    justify-content: space-around;
    align-items: center;


}

.block1 {
    width: 300px;
    height: 100px;
    display: flex;

    align-items: center;


}

.iconphone {
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: -15px -15px 3px 0px #000;
}

.iconphone i {
    font-size: 60px;
    color: #433bff;
}

.titlephone {
    margin-left: 10px;
    font-size: 23px;
    color: #fff;
}

.iconemail {

    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: -15px -15px 3px 0px #000;
}

.iconemail i {
    font-size: 60px;
    color: #433bff;
}

.titleemail p {
    font-size: 23px;
    margin-left: 10px;
    color: white;
}

.iconlocation {
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: -15px -15px 3px 0px #000;
}

.iconlocation i {
    font-size: 60px;
    color: #433bff;
}

.titlelocation p {
    font-size: 20px;
    margin-left: 10px;
    color: white;
}

.infofooter {
    width: 100%;
    height: 960px;
    display: flex;
    justify-content: space-evenly;





}

.infofooter img {
    width: 100%;
    height: 1100px;
    position: absolute;
    z-index: -1;


}

.footer {
    width: 100%;
    height: 900px;
    background-color: red;
}

.news-swiper-container {
    width: 100%;
    max-width: 1500px;

    margin: 0 auto;
    padding: 40px 0;
}

.card {
    background: #19175a;
    height: 650px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform .3s;

}

.card:hover {
    transform: translateY(-5px);
}

.card-img {
    width: 100%;
    height: 450px;
    object-fit: cover;

}

.card-content {
    padding: 15px 20px;

}

.date {
    color: #ffffff;
    font-size: 1.3rem;
    margin-bottom: 5px;
    font-family: "Noto Sans Lao", sans-serif;
}

.title {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 25px;
    color: #fff;
    margin-top: 15px;
    font-family: "Noto Sans Lao", sans-serif;

}

.read-more {
    font-size: 1.1rem;
    color: #ffffff;
    text-decoration: none;
    background-color: #433BFF;
    padding: 10px 10px 10px 10px;
    font-family: "Noto Sans Lao", sans-serif;
    border-radius: 7px;


}

.read-more:hover {
    text-decoration: underline;
}

.swiper-button-next,
.swiper-button-prev {
    color: #ffffff;
    transition: color .3s;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
    color: #063e9d;
}

.boxcontianer {
    width: 100%;
    height: 200px;
    background-color: #fff;
}

.container-blog {
    width: 100%;
    height: 1300px;


}

.upsideblog {
    width: 100%;
    height: 70%;
}

#blogupperimg {
    width: 98%;
    height: 100%;
    position: absolute;
    z-index: -1;
    margin-left: 15px;

    border-radius: 35px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.logoupperblog {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;

}

.logoupperblog img {
    width: 150px;
    height: 150px;

}

.title-blog p {
    text-align: center;
    font-size: 70px;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;
    color: #000;
}

.downblog {
    width: 100%;
    height: 750px;
    margin-top: 60px;


}

.titlepd4 p {
    font-size: 21px;
    font-family: "Noto Sans Lao", sans-serif;
    padding-top: 60px;
    padding-bottom: 100px;
}

.titlepd4 h1 {
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;
    font-size: 80px;
    color: #fff;
    line-height: 1.5;
    padding-top: 120px;
}

.titlepd4 {
    width: 60%;
    height: 100%;

    padding-left: 50px;

}

.mockuppd4 img {
    width: 900px;
    height: 650px;
    position: relative;
    top: 120px;
    left: 50px;

}

.mockuppd4 {
    width: 45%;
    height: 100%;
 


}

#pdcontent4 {
    width: 100%;
    height: 900px;
    position: absolute;
    z-index: -1;
}

.homepagecontent4 {
    width: 100%;
    height: 900px;
    display: flex;



}

.homepagecontent3 {
    width: 100%;
    height: 900px;


}




.containerhomepage2 {
    width: 100%;
    height: 900px;
    display: flex;
   
}

.button-36 {
    background-image: linear-gradient(92.88deg, #ffffff 9.16%, #ffffff 43.89%, #ffffff 64.72%);
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #0c2a6a;
    font-weight: 600;
    cursor: pointer;
    flex-shrink: 0;
    font-family: "Noto Sans Lao", sans-serif;
    font-size: 19px;
    font-weight: bold;
    height: 4rem;
    padding: 0 1.6rem;
    text-align: center;
    text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
    transition: all .5s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.button-36:hover {
    box-shadow: rgba(173, 173, 173, 0.5) 0 1px 30px;
    transition-duration: .1s;
}

@media (min-width: 768px) {
    .button-36 {
        padding: 0 2.6rem;
    }
}

.titlecontent p {
    font-family: "Noto Sans Lao", sans-serif;
    padding-top: 50px;
    padding-bottom: 90px;
    font-size: 23px;
}

.titlecontent h1 {
    color: #fff;
    font-family: "Noto Sans Lao", sans-serif;
    line-height: 1.3;
    font-size: 90px;
    font-weight: bold;

}

.titlecontent {
    width: 900px;
    height: 700px;
  
    position: relative;
    top: 90px;
    left: 170px;
}

.searchbar a {
    text-decoration: none;

}

.searchbar a,
p {
    font-size: 19px;
    color: #fff;
    font-family: "Inter", sans-serif;

}

.searchbar {
    width: 250px;
    display: flex;
    height: 100%;
    align-items: center;
    padding-left: 20px;
   
}

.navbarlist ul li {
    font-family: "Noto Sans Lao", sans-serif;
    font-size: 20px;
    font-weight: 400;
}

.navbarlist ul {
    color: #fff;
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;


}

.navbarlist {
    width: 1150px;
    height: 100%;


}

.logolapnet img {
    width: 90px;
    height: 90px;

}

.logolapnet {
    width: 140px;
    height: 100%;
 
}

#backgroundhomepage {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;


}

.backgroundimg {
    width: 100%;
    height: 963px;
    overflow: hidden;

}

.navbar {
    width: 90%;
    height: 100px;
    display: flex;
    position: relative;
    top: 20px;

    margin: 0 auto;
}

.logincontainer {
    width: 30%;
    height: 40%;

    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: "Inter", sans-serif;
}

.registercontainer {
    width: 30%;
    font-family: "Inter", sans-serif;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-right: 1px solid #fff;
}

.socialicon {
    width: 90px;
    height: 40%;
    display: flex;
    align-items: center;
    border-right: 1px solid #fff;




}

.contact i {
    color: #fff;
    padding-right: 40px;
    font-size: 20px;

}

.contact {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: end;

    align-items: center;
}

.centercontainer {
    width: 90%;
    height: 100%;

    margin: 0 auto;
    display: flex;

    justify-content: space-between;
}

.locationcompany i {
    font-size: 20px;
}

.locationcompany p {
    font-size: 19px;
    font-family: "Inter", sans-serif;
    padding-left: 10px;
}

.locationcompany {
    width: 30%;
    height: 100%;

    color: #fff;
    display: flex;
    align-items: center;
}

.memberlogin {
    width: 100%;
    height: 80px;
    background-color: #020923;
}
</style>