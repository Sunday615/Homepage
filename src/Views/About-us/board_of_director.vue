<script setup lang="ts">
import navbartemplete from '../Navbar-footer/navbartemplete.vue';
import ft from '../Navbar-footer/ft.vue';
import navbar from './navbarboarddirector/navbardirector.vue';
</script>


<template>


    <navbartemplete></navbartemplete>
    <div class="navigatorcontent">
        <img id="navigator-img" src="../../assets/Vision-bg/navigatormission-bg.png" alt="">
        <div class="navigator-info-container">
            <div class="titlenavigator">
                      <div data-aos="zoom-in-down" data-aos-duration="1000">
                <p>ສະພາຜູ້ບໍລິຫານ</p></div>
            </div>
            <div class="navigatorlink">
                      <div data-aos="zoom-out-up" data-aos-duration="1000">
                <p>ໜ້າຫຼັກ <span style="padding-right: 40px; padding-left: 40px;"><i
                            class="fa-solid fa-chevron-right"></i></span> ກ່ຽວກັບພວກເຮົາ <span
                        style="padding-right: 40px; padding-left: 40px;"><i class="fa-solid fa-chevron-right"></i>
                    </span> ສະພາຜູ້ບໍລິຫານ </p></div>
            </div>
        </div>
    </div>
    <div class="nav_board_of_derictor">
        <navbar></navbar>
        <!-- <ul>
            <li><a href="#">ຄະນະສະພາຜູ້ບໍລິຫານ</a></li>
            <li><a href="#">ຄະນະກຳມະການກວດກາ</a></li>
            <li><a href="#">ຄະນະກຳມະການຄົ້ນຄວ້ານະໂຍບາຍ</a></li>
            <li><a href="#">ຄະນະກຳມະການຄຸ້ມຄອງຄວາມສ່ຽງ</a></li>
            <li><a href="#">ຄະນະກຳມະການຕິດຕາມການພັດທະນາລະບົບ</a></li>
        </ul> -->
    </div>
    <div class="boardofdirectorimg">
        <img src="../../assets/Aboutusasset/director-2.png" alt="">
    </div>
    <ft></ft>
</template>




<style scoped>
ul {

    padding: 0;
    list-style: none;
    display: table;
    width: 1600px;
    text-align: center;
}

li {
    display: table-cell;
    position: relative;
    padding: 15px 0;
}

a {
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;

    font-family: notosanlao;
    font-size: 19px;
    color: #000;
    display: inline-block;
    padding: 15px 20px;
    position: relative;
}

a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 5px;
    left: 50%;
    border-radius: 3px;
    position: absolute;
    background-image: linear-gradient(to right, #47a6ff, #008dff, #0071fb, #0053f2, #002de3);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
}

a:hover:after {
    width: 100%;
    left: 0;
}

@media screen and (max-height: 300px) {
    ul {
        margin-top: 40px;
    }
}

.boardofdirectorimg img {
    width: 100%;
    height: 100%;
}

.boardofdirectorimg {
    width: 100%;
    height: 1300px;

}

.box_navbar h1 {
    font-size: 19px;
    font-family: notosanlao;
    cursor: pointer;
}

.box_navbar {
    width: 300px;
    height: 100px;


}

.nav_board_of_derictor {
    width: 95%;
    height: 280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;


}

.navigatorcontent {
    width: 100%;
    height: 300px;

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
    font-size: 80px;
    color: #fff;
    font-family: notosanlao-bold;
    padding-bottom: 70px;
}

.navigatorlink p {
    color: #fff;
    font-size: 20px;

    font-family: notosanlao;
}
</style>