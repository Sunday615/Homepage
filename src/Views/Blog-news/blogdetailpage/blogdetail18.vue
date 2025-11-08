<script setup lang="ts">
import navbartemplete from '../../Navbar-footer/navbartemplete.vue';
import ft from '../../Navbar-footer/ft.vue';
</script>



<template>
    <navbartemplete></navbartemplete>

    <div class="navigatorcontent">
        <img id="navigator-img" src="../../../assets/newsassets/bgblogdetail.png" alt="">
        <div class="navigator-info-container">
            <div class="titlenavigator">
                <p>ຂ່າວສານ ແລະ ກິດຈະກຳ</p>
            </div>
            <div class="navigatorlink">
                <p>ໜ້າຫຼັກ <span style="padding-right: 40px; padding-left: 40px;"><i
                            class="fa-solid fa-chevron-right"></i></span> ຂ່າວສານ ແລະ ກິດຈະກຳ <span
                        style="padding-right: 40px; padding-left: 40px;"><i class="fa-solid fa-chevron-right"></i>
                    </span>ລາຍລະອຽດ ຂ່າວສານ ແລະ ກິດຈະກຳ</p>
            </div>
        </div>
    </div>
    <div class="backbtn">
        <router-link to="/newsgridpage3"><button><i class="fa-solid fa-angle-left" style=""></i> ກັບຄືນ</button></router-link>
    </div>
    <div class="container">
        <div class="left-blog-container">
            <div class="blogdetailimg">
                <img src="../../../../public/images/19/1.png" alt="">
            </div>
            <div class="aboutblog">
                <span>
                    <p><i class="fa-solid fa-calendar"></i> 17 June 2021</p>
                </span>
                <span class="padding-icon">
                    <p><i class="fa-solid fa-bookmark"></i> Contract</p>
                </span>
                <span class="padding-icon">
                    <p><i class="fa-solid fa-eye"></i> ໂພສເມື່ອ 4 Year ago</p>
                </span>
            </div>
            <div class="headerblogdetail">
                <div class="box-background">
                    <div class="iconheader">
                        <i class="fa-solid fa-quote-right"></i>
                    </div>
                    <div class="titleheader">
                        <h1>ລາຍຊື່ ຜູ້ຄວບຄຸມລະບົບການຊຳລະທຸລະກຳຍ່ອຍ ຜູ້ໃຫ້ບໍລິການຊຳລະ ທີ່ໄດ້ຮັບອະນຸຍາດ ຈາກ ທະນາຄານແຫ່ງ ສ ປປ ລາວ.</h1>
                    </div>
                </div>
            </div>
            <div class="descriptionline1">
                <p>     ລາຍຊື່ ຜູ້ຄວບຄຸມລະບົບການຊໍາລະທຸລະກຳຍ່ອຍ ຜູ້ໃຫ້ບໍລິການຊໍາລະ ທີ່ໄດ້ຮັບອະນຸຍາດ ຈາກ ທະນາຄານແຫ່ງ ສປປ ລາວ
                </p>
             
               
            </div>
            <div class="imageinfo">
                <img src="../../../../public/images/19/1.png" alt="">
            </div>
            <div class="descriptionline2">
               

            </div>
            <div class="tag">
                <div class="tagblog">
                    <p style="font-size: 25px; font-weight: bold; color:#040072">Tags:</p>
                    <div class="tagbox1">Contract</div>
                    <div class="tagbox2">Meetings</div>
                </div>
                <div class="social">
                    <p style="font-size: 25px; font-weight: bold; color:#040072">Share:</p>
                    <div class="facebook"><i class="fa-brands fa-facebook-f"></i></div>
                    <div class="x"><i class="fa-brands fa-x-twitter"></i></div>
                    <div class="ig"><i class="fa-brands fa-instagram"></i></div>
                </div>
            </div>
        </div>
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
                </div>
            </div>
            <div class="postrecent">
                <div class="postrecenttitle">
                    <h4>Post ລ່າສຸດ</h4>
                </div>
                <div class="cardpostrecent">
                    <div class="imgrecentbox">
                        <img src="../../../assets/newsassets/2.png" alt="">
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
                        <img src="../../../assets/newsassets/3.jpg" alt="">
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
                        <img src="../../../assets/newsassets/4.png" alt="">
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
                        <img src="../../../assets/newsassets/5.jpg" alt="">
                    </div>
                    <div class="titlerecentbox">
                        <h2>ພິທີ ເຊັນສັນຍາວ່າດ້ວຍການຮ່ວມມືທາງດ້ານການເຊື່ອມຕໍ່ລະບົບຊຳລະຂ້າມແດນ QR CODE ລະຫວ່າງ ສປປ ລາວ ແລະ ປະເທດໄທ</h2>
                        <div class="recenttimepost">
                            <i class="fa-solid fa-calendar"></i>
                            <p>14 March 2024</p>
                        </div>
                    </div>
                </div>
                 <div class="cardpostrecent">
                    <div class="imgrecentbox">
                        <img src="../../../assets/newsassets/6.jpg" alt="">
                    </div>
                    <div class="titlerecentbox">
                        <h2>ບໍລິສັດ ລາວເນເຊີນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ ເດີນທາງໄປແລກປ່ຽນບົດຮຽນທາງດ້ານການໃຫ້ບໍລິການເງິນທີ່ປະເທດສິງກະໂປ</h2>
                        <div class="recenttimepost">
                            <i class="fa-solid fa-calendar"></i>
                            <p>26 September 2023</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <ft></ft>
</template>


<style scoped>
.recenttimepost i{
    font-size: 19px;
    color: #433bff;
}
.recenttimepost{
    width: 50%;
    height: 30%;

    margin-top: 30px;
    display: flex;
    align-items: center;
    
}
.titlerecentbox{
   
    width: 100%;
    height: 100%;
  
    margin-left: 20px;
}
.titlerecentbox h2{
    font-size: 20px;
    color:#040072;
    font-family: notosanlao-bold;

    
}
.imgrecentbox img{
    width: 100%;
    height: 100%;
    object-fit:cover;
}
.imgrecentbox{
    width: 40%;
    height: 100%;

    overflow: hidden;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
}
.cardpostrecent{
    width: 90%;
    height: 150px;
    margin: 0 auto;
    display: flex;

    margin-bottom: 40px;
    
    
}
.postrecenttitle h4{
    font-size: 30px;
    font-family: notosanlao-bold;
    padding-top: 30px;
    padding-left: 40px;
    color: #040072;
}
.postrecenttitle{
    width: 100%;
    height: 120px;

}
.shortbygroup{
    width: 80%;
    height: 500px;
    margin: 0 auto;

    margin-top: 30px;
}
.shortbox p{
    font-size: 25px;
    color: #00000091;
}
.shortbox{
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
.titlegroupblog h4{
    font-size: 30px;
    font-family: notosanlao-bold;
    padding-top: 30px;
    padding-left: 40px;
    color: #040072;
}
.titlegroupblog{
    width: 100%;
    height: 90px;
  
}
.btnsubmit i{
    font-size: 35px;
    color: white;
}
.btnsubmit{
    width: 110px;
    height: 100%;
    background-color: #433bff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-right-radius: 20px;
}
.inputsearchblog input::placeholder{
    padding-left: 30px;
    font-size: 20px;
}
.inputsearchblog input{
    width: 500px;
    height: 100%;
    border-bottom-left-radius: 7px;
    border-top-left-radius: 7px;
    background-color: #fff;
}
.inputsearchblog{
    width: 80%;
    margin: 0 auto;
    height: 80px;
    margin-top: 20px;
    display: flex;
}
.searchblog h4{
    font-size: 30px;
    font-family: notosanlao-bold;
    padding-top: 30px;
    padding-left: 40px;
    color: #040072;
}
.searchblog{
    width: 100%;
    height: 35%;

}
.postrecent{
    width: 100%;
    height: 1150px;
    border-radius: 15px;
    background-color: #ebebeb;
    margin-top: 30px;
}
.groupblog{
    width: 100%;
    height: 600px;
    background-color: #ebebeb;
    margin-top: 25px;
    border-radius: 15px;
}
.searchbar{
    width: 100%;
    height: 240px;
    background-color: #ebebeb;
    border-radius: 15px;
}
.social div{
    font-size: 35px;
    color: #040072;
}
.tagbox2{
    width: 165px;
    height: 60px;
    border: 1px solid #939393b1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
}
.tagbox1{
    width: 165px;
    height: 60px;
    border: 1px solid #939393b1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
}
.social{
    width: 50%;
    height: 100%;
   
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 50px;
}
.tagblog{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    height: 100%;
    
}
.tag{
    width: 97%;
    height: 160px;
    display: flex;
    border-top: 1px solid #6666666c;
    border-bottom:1px solid #6666666c ;

}
.descriptionline2 p {
    font-size: 19px;
    padding-top: 40px;
    font-family: notosanlao;
    padding-bottom: 20px;
}

.descriptionline2 {
    width: 97%;
    height: 200px;

}

.imageinfo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;

}

.imageinfo {
    width: 97%;
    height: 500px;
  
}

.descriptionline1 P {
    font-size: 19px;
    font-family: notosanlao;
    padding-bottom: 50px;
    line-height: 1.7;
}

.descriptionline1 {
    width: 97%;
    height: 460px;
    padding-top: 40px;
  
}

.titleheader h1 {
    font-size: 28px;
    color: #fff;
    font-family: notosanlao-bold;
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
    font-family: notosanlao;
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
    object-fit: cover;
    object-position: top;
    border-top-left-radius: 60px;
    border-bottom-right-radius: 60px;
    border: 1px solid rgba(0, 0, 0, 0.488);
}

.blogdetailimg {
    width: 97%;
    height: 580px;

}

.right-blog-container {
    width: 40%;
    height: auto;
 
}

.left-blog-container {
    width: 60%;
    height: 2400px;

}

.container {
    width: 90%;
    padding-top: 35px;
    margin: 0 auto;
    height: auto;
    display: flex;
  

}

.backbtn button {
    width: 250px;
    font-family: notosanlao;
    height: 70px;
    background-color: #433bff;
    color: #fff;
    border-radius: 10px;
    font-size: 24px;
    margin-top: 80px;
}

.backbtn {
    width: 90%;
    margin: 0 auto;
    height: 150px;
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
    font-family: notosanlao-bold;
    padding-bottom: 70px;
}

.navigatorlink p {
    color: #fff;
    font-size: 20px;

    font-family: notosanlao;
}
</style>