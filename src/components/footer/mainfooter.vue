<script setup lang="ts">
import { RouterLink,  } from 'vue-router';
import footerdropdown from '../footer/footerdropdown.vue';

function goTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>


<template>
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
                                <p>030 568 7610</p>
                          
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
                            <li>ເບີໂທ: 021 417 915</li>
                            <li>ອີເມວ: info@lapnet.com.la</li>

                        </ul>
                    </div>
                    <div class="facebookbtnfooter">
                        <i class="fa-brands fa-facebook"></i>
                        <span><a href="https://www.facebook.com/laonationalpaymentnetwork" target="_blank">Lao National
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
</template>


<style scoped>
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
.menuboxnonline:hover{
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
.menubox:hover{
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
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;


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
    font-family: "Inter";
    border: 1px solid #fff;
    border-radius: 40px;
    display: flex;
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
   font-weight: bold;
    font-size: 40px;
    padding-bottom: 60px;
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
   
    font-family: 'Inter';
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
    font-family: 'Inter';
}

.iconemail i {
    font-size: 60px;
    color: #433bff;
}

.titleemail p {
    font-size: 23px;
     font-family: 'Inter';
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
     font-family: 'Inter';
    color: white;
}

.infofooter {
    width: 100%;
    height:960px;
    display: flex;
    justify-content: space-evenly;
    




}

.infofooter img {
    width: 100%;
    height: 1100px;
    position: absolute;
    z-index: -1;
    

}
</style>