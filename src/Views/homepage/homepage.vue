<script setup>
import search from '../../components/search/search.vue';
import vdo from './videohomepage.vue'
</script>

<template>
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
                    <li>ຜະລິດຕະພັນ ແລະ ການບໍລິການ<i class="fa-solid fa-sort-down"></i></li>
                    <li>ສະມາຊິກ<i class="fa-solid fa-sort-down"></i></li>
                    <li>ຂ່າວ ແລະ ກິດຈະກຳ</li>
                    <li>ຮ່ວມງານກັບເຮົາ</li>
                    <li>ກ່ຽວກັບພວກເຮົາ<i class="fa-solid fa-sort-down"></i></li>
                    <li>ຕິດຕໍ່ພວກເຮົາ</li>
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
            <h1>ການຊຳລະເງິນຂ້າມ <br> ທະນາຄານຜ່ານ QR</h1>
            <p>ການຊໍາລະຂ້າມທະນາຄານຜ່ານ LAPNet QRPay ໂດຍນຳໃຊ້ລະບົບ LMPS ໃນການເຊື່ອມໂຍງຜ່ານ<br> Applications
                ຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກຂອງບໍລິສັດ LAPNet ໃຫ້ສາມາດນຳໃຊ້ຟັງຊັ່ນການ <br> ດຳເນີນທຸລະກຳຊໍາລະຜ່ານ QR
                ຂອງທະນາຄານອື່ນໄດ້.

            </p>
            <!-- HTML !-->
            <button class="button-36" role="button"><i class="fa-solid fa-caret-right"></i>ຜະລິດຕະພັນ ແລະ
                ການບໍລິການ</button>
        </div>

    </div>
    <div class="containerhomepage2">
        <div class="missionimgcontainer">
            <img src="../../assets/Homepage/newmission-2.png" alt="">

        </div>
        <div class="titlemission">
            <div class="textaligh">
                <div class="titleinfo">
                    <h1>ວິໄສທັດ ແລະ ພາລະກິດ ຂອງພວກເຮົາ</h1>
                </div>
                <div class="missionbox">
                    <div class="number">
                        <h1>01</h1>
                    </div>
                    <div class="infovision">
                        <h1>ວິໄສທັດ</h1>
                        <p>ພັດທະນາລະບົບການຊໍາລະທຸລະກຳຍ່ອຍໃຫ້ເປັນສູນກາງການຊໍາລະຂອງບັນດາຜູ້ໃຫ້ບໍລິການ<br>ຊໍາລະ ທັງພາຍໃນ
                            ແລະ ສາກົນ, ແນໃສ່ໃຫ້ປະຊາຊົນລາງໄດ້ໃຊ້ບໍລິການຊໍາລະທີ່ສະດວກວ່ອງໄວ,<br> ທັນສະໄໝ, ປອດໄພ,
                            ຕົ້ນທືນຕໍາ ແລະ ເພື່ອໃຫ້ບໍລິສັດການເປັນໂຄງຮ່າງພື້ນຖານໃຫ້ແກ່ການ<br>ຊໍາລະໃນ ສປປ ລາວ.</p>
                    </div>
                </div>
                <div class="missionbox1">
                    <div class="number">
                        <h1>02</h1>
                    </div>
                    <div class="infovision">
                        <h1>ພາລະກິດ</h1>
                        <p>ພັດທະນາລະບົບການຊໍາລະໃຫ້ມີຄວາມຫຼາກຫຼາຍ, ທັນສະໄໝ, ຕອບຮັບໄດ້ທຸກຊ່ອງທາງການຊໍາລະທີ່ເກີດຂື້ນ,
                            ເຕົ້າໂຮມເອົາບັນດາທະນາຄານທຸລະກິດ, ສະຖາບັນການເງິນ ແລະ ບໍລິສັດ Fintech
                            ທີ່ເປັນຜູ້ໃຫ້ບໍລິການຊໍາລະ ໃຫ້ເຂົ້າມາເປັນສະມາຊີກຂອງບໍລິສັດ
                            ເພື່ອພ້ອມກັນໃຫ້ບໍລິການລະບົບການຊໍາລະແກ່ສັງຄົມ,
                            ຫັນເອົາການເຊື່ອມຕໍ່ສາກົນທີ່ມີລັກສະນະກະແຈກກະຈາຍລວມສູນເຂົ້າມາເຊື່ອມຕໍ່ເປັນຮູບແບບລະບົບປະຕູດຽວເພື່ອຫຼຸດຜ່ອນຕົ້ນທືນລວມຂອງທົ່ວລະບົບ,
                            ເສີມຂະຫຍາຍຄວາມຮູ້-ເຂົ້າໃຈໃຫ້ແກ່ມວນຊົນໄດ້ຮັບຮູ້ເຖິງຄວາມສຳຄັນ ແລະ
                            ປະໂຫຍກຂອງການນຳໃຊ້ລະບົບການຊໍາລະເອເລັກໂຕຣນິກຢ່າງຖ່ອງແທ້
                            ເພື່ອເຮັດໃຫ້ມວນຊົນໄດ້ນຳໃຊ້ລະບົບການຊໍາລະຢ່າງຖືກຕ້ອງ ແລະ ປອດໄພ
                            ເປັນການເສີມສ້າງຄວາມໝັ້ນໃຈໃຫ້ແກ່ມວນຊົນ.

                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="homepagecontent3">
        <vdo></vdo>
    </div>
    <div class="homepagecontent4">

        <img id="pdcontent4" src="../../assets/Homepage/pdcontent4-2.png" alt="">
        <div class="center">

        </div>
        <div class="mockuppd4">
            <img src="../../assets/Homepage/mobilemockup4-2.png" alt="">
        </div>
        <div class="titlepd4">
            <h1>ໂອນເງິນຂ້າມທະນາຄານ<br>ເທິງມືຖືຜ່ານແອັບ</h1>
            <p>ການໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື (Fund Transfer via Mobile Application) <br> ໂດຍນຳໃຊ້ລະບົບ LMPS
                ໃນການເຊື່ອມໂຍງຜ່ານ Applications ຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກ <br> ຂອງບໍລິສັດລາວ ເນເຊີນນໍເພເມັ້ນ ເນັດເວີກ
                ໃຫ້ສາມາດໃຊ້ຟັງຊັ່ນການດຳເນີນທຸລະກຳໂອນເງິນຂ້າມທະນາຄານໄດ້.</p>
            <button class="button-36" role="button"><i class="fa-solid fa-caret-right"></i>ຜະລິດຕະພັນ ແລະ
                ການບໍລິການ</button>
        </div>

    </div>
</template>


<style scoped>
.titlepd4 p{
    font-size: 22px;
    font-family: "Noto Sans Lao", sans-serif;
    padding-top: 60px;
    padding-bottom: 100px;
}
.titlepd4 h1{
        font-family: "Noto Sans Lao", sans-serif;
        font-size: 80px;
    color: #fff;
    line-height: 1.5;
    padding-top: 120px;
}
.titlepd4 {
    width: 60%;
    height: 100%;
    border: 1px solid blue;
    padding-left: 50px;
  
}

.mockuppd4 img {
    width: 680px;
    height: 700px;
    position: relative;
    top: 100px;
    left: 50px;

}

.mockuppd4 {
    width: 40%;
    height: 100%;
    border: 1px solid red;
    

}

#pdcontent4 {
    width: 100%;
    height: 900px;
    position: absolute;
    z-index: -1;
}

.homepagecontent4 {
    width: 90%;
    height: 900px;
    display: flex;



}

.homepagecontent3 {
    width: 100%;
    height: 900px;


}

.infovision p {
    color: #000000;
    font-family: "Noto Sans Lao", sans-serif;
}

.infovision h1 {
    font-size: 30px;
    font-family: "Noto Sans Lao", sans-serif;
    color: #2200e3;
}

.infovision {
    width: 600px;
    height: 200px;
    border: 1px solid red;
}

.number {
    width: 90px;
    display: flex;
    color: #fff;
    justify-content: center;
    margin-right: 30px;
    align-items: center;
    height: 90px;
    font-family: "Inter", sans-serif;
    background: linear-gradient(153deg, rgb(6, 0, 187) 0%, rgba(2, 24, 96, 1) 100%);

}

.titleinfo h1 {
    font-size: 55px;
    font-family: "Noto Sans Lao", sans-serif;
    color: #2200e3;
}

.missionbox1 {
    width: 95%;
    height: 200px;

    display: flex;
}

.missionbox {
    width: 95%;
    height: 200px;
    margin-top: 50px;
    display: flex;
}

.textaligh {
    width: 90%;

    height: 700px;
    border: 1px solid blue;

}

.titlemission {
    width: 50%;
    height: 100%;
    border: 1px solid red;
    display: flex;
    justify-content: start;
    align-items: center;
}

.missionimgcontainer img {
    width: 650px;
    height: 700px;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.missionimgcontainer {
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;


}

.containerhomepage2 {
    width: 100%;
    height: 900px;
    display: flex;
    border: 1px solid red;
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

}

.titlecontent {
    width: 900px;
    height: 700px;
    border: 1px solid red;
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
    border: 1px solid blue;
}

.navbarlist ul li {
    font-family: "Noto Sans Lao", sans-serif;
    font-size: 20px;
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
    border: 1px solid green;

}

.logolapnet img {
    width: 90px;
    height: 90px;

}

.logolapnet {
    width: 140px;
    height: 100%;
    border: 1px solid blue;
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
    border: 1px solid blue;
}

.navbar {
    width: 90%;
    height: 100px;
    display: flex;
    position: relative;
    top: 20px;
    border: 1px solid red;
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
    border: 1px solid red;
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