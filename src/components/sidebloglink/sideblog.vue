<script setup>



</script>

<template>

    <div class="postrecent">
        <div class="postrecenttitle">
            <h4>Post ລ່າສຸດ</h4>
        </div>
        <router-link to="/blogdetail2">
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
        </router-link>
        <router-link to="/blogdetail3">
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
        </router-link>
        <router-link to="/blogdetail4">
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
        </router-link>
        <router-link to="/blogdetail5">
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
        </router-link>
        <router-link to="/blogdetail6">
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
        </router-link>
    </div>


</template>
<style scoped>
.postrecent {
    width: 100%;
    height: 1150px;
    border-radius: 15px;
    background-color: #f6f6f6;
    margin-top: 30px;
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

.cardpostrecent:hover .recenttimepost i {
    color: #fff;

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

.recenttimepost {
    width: 50%;
    height: 30%;

    margin-top: 30px;
    display: flex;
    align-items: center;

}
</style>