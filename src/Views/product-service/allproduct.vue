<script setup>
import navbarview2 from '../../components/navbar/navbarview2.vue';
import mainfooter from '../../components/footer/mainfooter.vue';

</script>

<template>
    <navbarview2 />
    <div class="allproductcontainer">
        <div class="navigatorcontent">
            <img id="navigator-img" src="/navbar/navigatorcontent-bg.png" alt="" />
            <div class="navigator-info-container">
                <div class="titlenavigator">
                    <div data-aos="zoom-in-down" data-aos-duration="1000">
                        <p>ຜະລິດຕະພັນ ແລະ ການບໍລິການ ທັງຫມົດ</p>
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
                            ຜະລິດຕະພັນ ແລະ ການບໍລິການ ທັງຫມົດ
                        </p>
                    </div>
                </div>
            </div>
        </div>


    </div>
    <div class="maincontent">

    </div>



    <mainfooter />

</template>



<style scoped>
.maincontent{
    width: 100%;
    height: 500px;
    border: 1px solid blue;
}
.allproductcontainer {
    width: 100%;
    height: auto;
    border: 1px solid red;

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
    font-size: 60px;
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
</style>