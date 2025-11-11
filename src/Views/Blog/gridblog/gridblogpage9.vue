<script setup>


import navbarview2 from '../../../components/navbar/navbarview2.vue';
import mainfooter from '../../../components/footer/mainfooter.vue';
import blogpagination from '../../../components/pagination/blogpagination.vue';
import { onMounted } from 'vue';
onMounted(() => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})

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
    <div class="containergridblog">
        <div class="cardviewleftcontent">
            <router-link to="/blogdetail1">
                <div class="blogcardview">
                    <div class="imgbox">
                        <div class="image-container">
                            <img src="../../../../public/images/25/25.jpg" alt="Zoom Image" class="zoom-image" />
                        </div>

                        <div class="allinfo">
                            <div class="datetimecontainer">
                                <div class="date">
                                    <h1>22</h1>
                                    <p>August</p>
                                </div>
                                <div class="postby">
                                    <i class="fa-solid fa-calendar"></i>
                                    <p>Year 2020</p>
                                </div>
                                <div class="tagblog">
                                      <div class="bordertag">
                                        <h1>Meetings</h1>
                                    </div>
                                   
                                </div>
                            </div>
                            <div class="headerblog">
                                <h1>
                                    ບໍລິສັດ ລາວເນເຊີນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ ຕ້ອນຮັບຄະນະນັກສຶກສາ ຈາກວິທະຍາໄລສຸດສະກະ
                                </h1>
                            </div>
                            <div class="btnblog">
                                <button class="button-57" role="button"><span class="text">ອ່ານເພີ່ມເຕີ່ມ <i
                                            class="fa-solid fa-arrow-right"></i></span><span> <i
                                            class="fa-solid fa-arrow-right"></i></span></button>

                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
            <div class="blogcardview">
                <div class="imgbox">
                    <div class="image-container">
                        <img src="../../../../public/images/26/26.jpg" alt="Zoom Image" class="zoom-image" />
                    </div>

                    <div class="allinfo">
                        <div class="datetimecontainer">
                            <div class="date">
                                <h1>14</h1>
                                <p>January</p>
                            </div>
                            <div class="postby">
                                <i class="fa-solid fa-calendar"></i>
                                <p>Year 2020</p>
                            </div>
                            <div class="tagblog">
                                <div class="bordertag">
                                    <h1>Notification</h1>
                                </div>
                              
                            </div>
                        </div>
                        <div class="headerblog">
                            <h1>
                          ແຈ້ງການປະມູນ
                            </h1>
                        </div>
                        <div class="btnblog">
                            <button class="button-57" role="button"><span class="text">ອ່ານເພີ່ມເຕີ່ມ <i
                                        class="fa-solid fa-arrow-right"></i></span><span> <i
                                        class="fa-solid fa-arrow-right"></i></span></button>

                        </div>
                    </div>
                </div>
            </div>
            <div class="blogcardview">
                <div class="imgbox">
                    <div class="image-container">
                        <img  style="object-position: center;" src="../../../../public/images/27/27.1.jpg" alt="Zoom Image" class="zoom-image" />
                    </div>

                    <div class="allinfo">
                        <div class="datetimecontainer">
                            <div class="date">
                                <h1>25</h1>
                                <p>November</p>
                            </div>
                            <div class="postby">
                                <i class="fa-solid fa-calendar"></i>
                                <p>Year 2019</p>
                            </div>
                            <div class="tagblog">
                                <div class="bordertag">
                                    <h1>Grand Openning</h1>
                                </div>
                                <div class="bordertag">
                                    <h1>Meetings</h1>
                                </div>
                            </div>
                        </div>
                        <div class="headerblog">
                            <h1>
                              ພິທີເປີດບໍລິສັດ ລາວເນເຊີນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ
                            </h1>
                        </div>
                        <div class="btnblog">
                            <button class="button-57" role="button"><span class="text">ອ່ານເພີ່ມເຕີ່ມ <i
                                        class="fa-solid fa-arrow-right"></i></span><span> <i
                                        class="fa-solid fa-arrow-right"></i></span></button>

                        </div>
                    </div>
                </div>
            </div>

            <div class="pagination">
                <blogpagination></blogpagination>
            </div>
        </div>


        <div class="titlerightcontent">
            <div class="right-blog-container">
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
                <div class="groupblog">
                    <div class="titlegroupblog">
                        <h4>ໝວດໝູ່ຂ່າວສານ</h4>
                    </div>
                    <div class="shortbygroup">
                        <div class="shortbox">
                            <p>Contract</p>
                            <p>(05)</p>
                        </div>
                        <div class="shortbox">
                            <p>Meetings</p>
                            <p>(01)</p>
                        </div>
                        <div class="shortbox">
                            <p>Grand Opening</p>
                            <p>(07)</p>
                        </div>
                        <div class="shortbox">
                            <p>Activity</p>
                            <p>(02)</p>
                        </div>
                        <div class="shortbox">
                            <p>Notification</p>
                            <p>(02)</p>
                        </div>
                    </div>
                </div>
                <div class="postrecent">
                    <div class="postrecenttitle">
                        <h4>Post ລ່າສຸດ</h4>
                    </div>
                    <div class="cardpostrecent">
                        <div class="imgrecentbox">
                            <img src="../../../../public/images/2/2.png" alt="">
                        </div>
                        <div class="titlerecentbox">
                            <h2>ແຈ້ງເຊີນເຂົ້າຮ່ວມປະມູນຍື່ນຊອງລາຄາ ການບຳລຸງຮັກສາອຸປະກອນເຄືອຂ່າຍ</h2>
                            <div class="recenttimepost">
                                <i class="fa-solid fa-calendar"></i>
                                <p>12 August 2024</p>
                            </div>
                        </div>
                    </div>

                    <div class="cardpostrecent">
                        <div class="imgrecentbox">
                            <img src="../../../../public/images/3/3.jpg" alt="">
                        </div>
                        <div class="titlerecentbox">
                            <h2>ແຈ້ງເຊີນປະມູນ ອຸປະກອນ HARDWARE ເພື່ອສ້າງສູນສຳຮອງຂໍ້ມູນຂອງບໍລິສັດ LAPNET</h2>
                            <div class="recenttimepost">
                                <i class="fa-solid fa-calendar"></i>
                                <p>15 May 2024</p>
                            </div>
                        </div>
                    </div>
                    <div class="cardpostrecent">
                        <div class="imgrecentbox">
                            <img src="../../../../public/images/4.png" alt="">
                        </div>
                        <div class="titlerecentbox">
                            <h2>ພິທີເປີດໂຕການນຳໃຊ້ລະບົບຊຳລະຂ້າມແດນໃນຮູບແບບ QR CODE ລະຫວ່າງ ລາວ - ໄທ</h2>
                            <div class="recenttimepost">
                                <i class="fa-solid fa-calendar"></i>
                                <p>03 April 2024</p>
                            </div>
                        </div>
                    </div>
                    <div class="cardpostrecent">
                        <div class="imgrecentbox">
                            <img src="../../../../public/images/5.jpg" alt="">
                        </div>
                        <div class="titlerecentbox">
                            <h2>ພິທີ ເຊັນສັນຍາວ່າດ້ວຍການຮ່ວມມືທາງດ້ານການເຊື່ອມຕໍ່ລະບົບຊຳລະຂ້າມແດນ QR CODE ລະຫວ່າງ ສປປ
                                ລາວ ແລະ ປະເທດໄທ</h2>
                            <div class="recenttimepost">
                                <i class="fa-solid fa-calendar"></i>
                                <p>14 March 2024</p>
                            </div>
                        </div>
                    </div>
                    <div class="cardpostrecent">
                        <div class="imgrecentbox">
                            <img src="../../../../public/images/6.jpg" alt="">
                        </div>
                        <div class="titlerecentbox">
                            <h2>ບໍລິສັດ ລາວເນເຊີນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ
                                ເດີນທາງໄປແລກປ່ຽນບົດຮຽນທາງດ້ານການໃຫ້ບໍລິການເງິນທີ່ປະເທດສິງກະໂປ</h2>
                            <div class="recenttimepost">
                                <i class="fa-solid fa-calendar"></i>
                                <p>26 September 2023</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>


    <mainfooter></mainfooter>





</template>
<style scoped>
.headerblog:hover h1 {
    color: #433bff;
    transition: 0.5s;

}

.blogcardview:hover .date p {
    color: #fff;
    transition: 0.5s;
}

.blogcardview:hover .date h1 {
    color: #fff;
    transition: 0.5s;
}

.blogcardview:hover .date {
    transition: 0.5s;
    background-color: #433bff;
}

.image-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 16px;
    cursor: pointer;

    transition: transform 0.3s ease;
}

.zoom-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease, filter 0.3s ease;
}

/* Hover zoom effect */
.blogcardview:hover .zoom-image {
    transform: scale(1.15);
    filter: brightness(1.0);
}

.pagination {
    width: 100%;
    height: 150px;

}
.cardpostrecent:hover .recenttimepost i{
    color: #fff;
    
}
.recenttimepost i {
    font-size: 19px;
    color: #0b092bbc;
    
}

.recenttimepost {
    width: 50%;
    height: 30%;

    margin-top: 30px;
    display: flex;
    align-items: center;

}

.titlerecentbox {

    width: 100%;
    height: 100%;

    margin-left: 20px;
}

.titlerecentbox h2 {
    font-size: 20px;
    color: #040072;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;


}

.imgrecentbox img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
}

.imgrecentbox {
    width: 40%;
    height: 100%;

    overflow: hidden;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
}

.cardpostrecent:hover .recenttimepost {
    color: #fff;
}

.cardpostrecent:hover h2 {
    color: #fff;
}


.cardpostrecent:hover {
    background-color: #433bff;
    transition: 0.5s;

}



.cardpostrecent {
    width: 90%;
    height: 150px;
    margin: 0 auto;
    display: flex;
    border-top-left-radius: 20px;
    margin-bottom: 40px;


}

.postrecenttitle h4 {
    font-size: 30px;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;
    padding-top: 30px;
    padding-left: 40px;
    color: #040072;
}

.postrecenttitle {
    width: 100%;
    height: 120px;

}

.shortbygroup {
    width: 80%;
    height: 900px;
    margin: 0 auto;

    margin-top: 30px;
}

.shortbox p {
    font-size: 25px;
    color: #00000091;
}
.shortbox:hover p{
    color: #fff;
    transition: 0.5s;
}
.shortbox:hover {
    background-color: #433bff;
    transition: 0.5s;
   
}
.shortbox {
    cursor: pointer;
    width: 100%;
    height: 80px;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding-left: 40px;
    border-radius: 7px;
    justify-content: space-between;
    padding-right: 30px;
    margin-bottom: 30px;
}

.titlegroupblog h4 {
    font-size: 30px;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;
    padding-top: 30px;
    padding-left: 40px;
    color: #040072;
}

.titlegroupblog {
    width: 100%;
    height: 90px;

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

.postrecent {
    width: 100%;
    height: 1150px;
    border-radius: 15px;
    background-color: #f6f6f6;
    margin-top: 30px;
}

.groupblog {
    width: 100%;
    height: 700px;
    background-color: #f6f6f6;
    margin-top: 25px;
    border-radius: 15px;
}

.searchbar {
    width: 100%;
    height: 240px;
    background-color: #f6f6f6;
    border-radius: 15px;
}

.social div {
    font-size: 35px;
    color: #040072;
}

.tagbox2 {
    width: 165px;
    height: 60px;
    border: 1px solid #939393b1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
}

.tagbox1 {
    width: 165px;
    height: 60px;
    border: 1px solid #939393b1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
}

.social {
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 50px;
}

.tagblog {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    height: 100%;

}

.tag {
    width: 97%;
    height: 160px;
    display: flex;
    border-top: 1px solid #6666666c;
    border-bottom: 1px solid #6666666c;

}

.descriptionline2 p {
    font-size: 19px;
    padding-top: 40px;
    font-family: "Noto Sans Lao", sans-serif;
    padding-bottom: 20px;
}

.descriptionline2 {
    width: 97%;
    height: 600px;

}

.imageinfo img {
    width: 100%;
    height: 100%;

}

.imageinfo {
    width: 97%;
    height: 500px;

}

.descriptionline1 P {
    font-size: 19px;
    font-family: "Noto Sans Lao", sans-serif;
    padding-bottom: 50px;
}

.descriptionline1 {
    width: 97%;
    height: 460px;
    padding-top: 40px;

}

.titleheader h1 {
    font-size: 28px;
    color: #fff;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;
    padding-left: 35px;
    line-height: 2.2;

}

.titleheader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

}

.iconheader i {
    font-size: 90px;
    color: #fff;
}

.iconheader {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100%;

}

.box-background {
    margin-top: 20px;
    display: flex;
    width: 97%;
    border-radius: 10px;
    height: 220px;
    background-color: #433bff;
}

.padding-icon {
    padding-left: 60px;
}

.aboutblog p i {
    color: #433bff;
    font-size: 30px;
}

.aboutblog p {
    font-size: 25px;
    font-family: "Noto Sans Lao", sans-serif;
}

.aboutblog {
    display: flex;

    align-items: center;
    width: 97%;
    height: 120px;
    border-bottom: 1px solid #0000003e;
}

.blogdetailimg img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 60px;
    border-bottom-right-radius: 60px;
    border: 1px solid rgba(0, 0, 0, 0.488);
}

.blogdetailimg {
    width: 97%;
    height: 580px;

}

.right-blog-container {
    width: 100%;
    height: auto;

}

.btnblog {
    width: 80%;
    margin: 0 auto;

}

.headerblog h1 {
    font-size: 45px;
    font-family: "Noto Sans Lao", sans-serif;
    font-weight: bold;
    color: rgba(40, 40, 40, 0.917);
}

.headerblog {
    width: 90%;
    margin: 0 auto;
    height: 200px;
    margin-top: 20px;

}

.bordertag:hover {
    background-color: #433bff;
    color: #fff;
    transition: 0.5s;
}

.bordertag {
    width: 170px;
    height: 50%;
    border: 1px solid #969696;
    border-radius: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Inter";
}

.tagblog {
    width: 400px;
    height: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;

}

.postby:hover i {
    color: #433bff;
    transition: 0.5s;
}

.postby:hover p {
    color: #433bff;
    transition: 0.5s;
}

.postby p {
    font-size: 20px;
    font-family: "Inter";
    color: #636363;
    padding-left: 5px;

}

.postby i {
    font-size: 25px;
    color: #636363;
}

.postby {
    width: 200px;
    height: 100%;

    display: flex;
    justify-content: center;
    margin-left: 50px;

    align-items: center;
}






.date p {
    font-size: 20px;
    color: #313131;
}

.date h1 {
    font-size: 25px;
    font-weight: 500;
    font-family: "Inter";
    margin-top: 10px;
    color: #313131;
}

.date {
    text-align: center;
    width: 100px;
    height: 100%;
    background-color: #f6f6f6;
    margin-left: 50px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
}

.datetimecontainer {
    width: 100%;
    height: 100px;

    display: flex;

}

.allinfo {
    width: 100%;
    height: 390px;


}

.imgbox {
    width: 100%;
    height: 550px;

}

.imgbox img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
}

.blogcardview {
    width: 95%;
    height: 950px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 10px;
    margin-bottom: 50px;
}

.titlerightcontent {
    width: 40%;
    height: 2500px;
    margin-top: 130px;

}

.cardviewleftcontent {
    width: 60%;
    margin-top: 130px;
    height: 3200px;


}

.containergridblog {
    width: 90%;
    height: 3500px;

    margin: 0 auto;

    display: flex;
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