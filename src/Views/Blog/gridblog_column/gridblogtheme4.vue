<script setup>


import navbarview2 from '../../../components/navbar/navbarview2.vue';
import mainfooter from '../../../components/footer/mainfooter.vue';
import yeardropdown from '../../../components/Dropdown/yeardropdown.vue';
import Monthdropdown from '../../../components/Dropdown/monthdropdown.vue';
import blogpagination from '../../../components/pagination/blogpagination.vue';


</script>


<template>
    <navbarview2></navbarview2>
    <div class="navigatorcontent">
        <div class="image-zoom" @mouseenter="zoomIn" @mouseleave="zoomOut" ref="container">
            <img :src="src" :alt="alt" ref="image" />
        </div>
        <img id="navigator-img" src="../../../assets/Blog/bgnewsgrid.png" alt="">
        <div class="navigator-info-container">
            <div class="titlenavigator">
                <div data-aos="zoom-in-down" data-aos-duration="1000">
                    <p>ຂ່າວສານ ແລະ ກິດຈະກຳ</p>
                </div>




            </div>
            <div class="navigatorlink">
                <div data-aos="zoom-out-up" data-aos-duration="1000">
                    <p>ໜ້າຫຼັກ <span style="padding-right: 40px; padding-left: 40px;"><i
                                class="fa-solid fa-chevron-right"></i></span>ຂ່າວສານ ແລະ ກິດຈະກຳ<span
                            style="padding-right: 40px; padding-left: 40px;">
                        </span> </p>
                </div>
            </div>
        </div>
    </div>
    <div class="maincontainer">
        <div class="blogtitle">
            <h1>ຂ່າວສານ ແລະ ກິດຈະກຳ</h1>
        </div>
        <div class="searchbar">
            <div class="container-yearfilter">
                <h1>ປີ</h1>
                <yeardropdown></yeardropdown>
            </div>
            <div class="container-monthfilter">
                <h1>ເດືອນ</h1>
                <Monthdropdown></Monthdropdown>
            </div>
            <div class="searchbar-input">
                <div class="inputcontent">
                    <input type="text" placeholder="ຄົ້ນຫາຂ່າວສານ ແລະ ກິດຈະກຳ">
                </div>
                <div class="iconsearch">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
        <div class="gridblogcontainer">
            <div class="gridblogrow1">
                <router-link to="/blogdetail28">
                    <div class="cardview">
                        <div class="mainblogimage">
                            <img src="/images/28/28.1.jpeg" alt="" class="zoom-image" />
                        </div>
                        <div class="infocontainer">
                            <div class="datebar">
                                <div class="date">
                                    <h1>22</h1>
                                    <h2>November</h2>
                                </div>
                                <div class="year">
                                    <i class="fa-solid fa-calendar"></i>
                                    <h2>Year 2019</h2>
                                </div>
                                <div class="tags">
                                    <div class="border">
                                        <i class="fa-solid fa-tag"></i>
                                        <h1>Contract</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="headerblog">
                                <p>ພິທີລົງນາມໃນສັນຍາການຮ່ວມທຶນຂອງ ບໍລິສັດ ລາວ ເນເຊິນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ.</p>
                            </div>
                            <div class="buttonbar">
                                <button class="button-57" role="button"><span class="text">ອ່ານເພີ່ມເຕີ່ມ <i
                                            class="fa-solid fa-arrow-right"></i></span><span> <i
                                            class="fa-solid fa-arrow-right"></i></span></button>
                            </div>

                        </div>


                    </div>
                </router-link>

            </div>


            <div class="pagination_gridblog">
                <blogpagination></blogpagination>
            </div>
        </div>

    </div>
    <mainfooter></mainfooter>
</template>
<style scoped>
.pagination_gridblog {
    width: 100%;
    margin-top: 100px;
    border: 1px solid red;
    height: 120px;


}

.buttonbar {
    width: 85%;

    margin: 0 auto;
    height: 90px;
    display: flex;
    align-items: center;
}

.headerblog:hover p {
    color: #413bff;
    transition: 0.5s;
}

.headerblog p {
    cursor: pointer;
    padding-top: 20px;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: 600;
    color: #000000c1;
    font-size: 25px;
}

.headerblog {
    width: 90%;
    margin: 0 auto;
    height: 160px;


}

.border:hover h1 {
    color: #fff;
    transition: 0.5s;
}

.border:hover i {
    color: #fff;
    transition: 0.5s;
}

.border:hover {
    background-color: #433bff;
    transition: 0.5s;
}

.border h1 {
    font-family: "Inter";
    font-size: 19px;
    color: #000000b5;
}

.border i {
    padding-right: 20px;
    color: #000000b5;
    font-size: 24px;
}

.border {
    width: 100%;
    height: 50%;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #0000005b;
}

.tags {
    width: 170px;
    height: 100%;
    display: flex;
    align-items: center;

}

.year:hover i {
    color: #433bff;
    transition: 0.5s;
}

.year:hover h2 {
    color: #433bff;
    transition: 0.5s;
}

.year i {
    padding-right: 20px;
    font-size: 24px;
    color: #000000b5;
}

.year h2 {
    font-family: "Inter";
    font-size: 19px;
    color: #000000b5;
}

.year {
    width: 170px;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}

.date h2 {
    font-family: "Inter";
    font-size: 17px;
    color: #000000b5;
}

.date h1 {
    font-size: 25px;
    color: #000000b5;
    font-weight: 500;
    font-family: "Inter";
}

.date {
    width: 90px;
    height: 100%;
    border-bottom-left-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-bottom-right-radius: 10px;
    background-color: #f6f6f6;

}

.datebar {
    width: 90%;
    margin: 0 auto;

    height: 30%;
    display: flex;

}

.infocontainer {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;

}

.mainblogimage img {
    width: 100%;
    height: 100%;
    object-fit: cover;


}

.mainblogimage {
    width: 100%;
    height: 50%;
    overflow: hidden;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
}

.zoom-image {
    width: 100%;
    height: 100%;
    object-position: top;
    object-fit: cover;
    transition: transform 0.5s ease, filter 0.3s ease;
}

/* Hover zoom effect */
.cardview:hover .zoom-image {
    transform: scale(1.15);
    filter: brightness(1.0);
}






.cardview:hover .date h2 {

    color: #fff;
    transition: 0.5s;
}

.cardview:hover .date h1 {

    color: #fff;
    transition: 0.5s;
}

.cardview:hover .date {
    background-color: #433bff;

    transition: 0.5s;
}

.cardview {
    border-radius: 15px;
    width: 480px;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

}

.gridblogrow1 {
    width: 100%;
    display: flex;
    margin-bottom: 30px;
    justify-content: space-between;
    height: 700px;

}

.gridblogcontainer {
    width: 100%;
    height: auto;
    margin-top: 100px;
    padding-bottom: 200px;
    margin-bottom: 30px;

}

.inputcontent input {
    width: 100%;
    font-size: 19px;
    height: 100%;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    font-family: "Noto Sans Lao", sans-serif;
    padding-left: 20px;
    border: 1px solid #00000064;
}

.iconsearch i {
    width: 100%;
    height: 100%;
    display: flex;
    font-size: 30px;
    color: #fff;
    border-bottom-right-radius: 20px;
    justify-content: center;
    align-items: center;
    background-color: #433bff;
}

.iconsearch {
    width: 10%;
    height: 70px;

}

.inputcontent {
    width: 90%;
    height: 70px;


}

.container-yearfilter h1 {
    font-size: 25px;
    font-family: "Noto Sans Lao", sans-serif;
}

.container-monthfilter h1 {
    font-size: 25px;
    font-family: "Noto Sans Lao", sans-serif;
}

.searchbar-input {
    width: 50%;
    height: 100%;
    display: flex;

    padding-bottom: 2px;
    align-items: end;


}

.container-monthfilter {
    width: 23%;
    height: 100%;

}

.container-yearfilter {
    width: 23%;
    height: 100%;

}

.blogtitle h1 {
    font-size: 70px;
    font-weight: bold;
    font-family: "Noto Sans Lao", sans-serif;
    color: #2043cf;
    background-image: linear-gradient(45deg, #00a2e7, #2043cf 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
}

.blogtitle {
    width: 100%;
    margin-top: 50px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;

}

.searchbar {
    width: 100%;
    height: 115px;
    display: flex;
    justify-content: space-between;
    margin-top: 100px;

}

.maincontainer {
    width: 90%;
    margin: 0 auto;
    height: auto;

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

.button-57 {
    position: relative;
    overflow: hidden;
    font-family: "Noto Sans Lao", sans-serif;
    color: #433bff;
    display: inline-block;
    font-size: 20px;
    line-height: 15px;
    padding: 18px 18px 17px;
    text-decoration: none;
    cursor: pointer;
    background: #fff;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    border-radius: 10px;
}

.button-57 span:first-child {
    position: relative;
    transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);
    z-index: 10;
    border-radius: 10px;
}

.button-57 span:last-child {
    color: white;
    display: block;
    position: absolute;
    bottom: 0;
    transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);
    z-index: 100;
    opacity: 0;
    top: 50%;
    left: 50%;
    transform: translateY(225%) translateX(-50%);
    height: 14px;
    line-height: 13px;
    border-radius: 10px;
}

.button-57:after {
    content: "";
    position: absolute;
    bottom: -50%;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: #433bff;
    transform-origin: bottom center;
    transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);
    transform: skewY(9.3deg) scaleY(0);
    z-index: 50;
}

.button-57:hover:after {
    transform-origin: bottom center;
    transform: skewY(9.3deg) scaleY(2);
}

.button-57:hover span:last-child {
    transform: translateX(-50%) translateY(-100%);
    opacity: 1;
    transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
}
</style>