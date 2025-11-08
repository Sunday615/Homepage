<script setup lang="ts">
import { onMounted } from 'vue';
import navbartemplete from '../../Navbar-footer/navbartemplete.vue';
import ft from '../../Navbar-footer/ft.vue';

import year from '../../Dropdown/yeardropdown.vue';
import monthdropdown from '../../Dropdown/monthdropdown.vue';

import pagination from '../pagiantion-blog/blogbtnpage.vue';



onMounted(() => {

  window.scrollTo({
    top: 650, 
    behavior: 'smooth'
  })
})
  
 
</script>


<template>
    <navbartemplete></navbartemplete>

    <div class="navigatorcontent">
        <img id="navigator-img" src="../../../assets/newsassets/bgnewsgrid.png" alt="">
        <div class="navigator-info-container">
            <div class="titlenavigator">
                <p>ຂ່າວສ່ານ ແລະ ກິດຈະກຳ</p>

            </div>
            <div class="navigatorlink">
                <p>ໜ້າຫຼັກ <span style="padding-right: 40px; padding-left: 40px;"><i
                            class="fa-solid fa-chevron-right"></i></span> ຂ່າວສານ ແລະ ກິດຈະກຳ <span
                        style="padding-right: 40px; padding-left: 40px;"></span></p>
            </div>
        </div>
    </div>
    <div class="newsblogcontainer">
        <div class="searchbar">
            <div class="titlesearchbar">
                <p>ຂ່າວສານ ແລະ ກິດຈະກຳ</p>
            </div>
            <div class="searchbarinput">
                <div class="yaerinput">
                    <p>ປີ</p>
                    <year></year>
                </div>
                <div class="monthinput">
                    <p>ເດືອນ</p>
                    <monthdropdown></monthdropdown>
                </div>
                <div class="searchinput">


                    <div class="input-group">
                        <input type="Text" class="input" id="Email" name="Email" placeholder="ຄົ້ນຫາຂ່າວສານ ແລະ ກິດຈະກຳ"
                            autocomplete="off">
                        <input class="button--submit" value="Search" type="submit">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="blogcontainer">
        <div data-aos="fade-down" data-aos-duration="800" data-aos-once="true">
            <div class="blogrow">
                <router-link to="/blogdetail10">
                    <div class="cardblog">
                        <div class="cardimg">
                            <img src="../../../../public/images/10/1.jpg" alt="">
                        </div>
                        <div class="tagdetail">
                            <p>ຂ່າວບໍລິສັດ - 21 August 2023</p>
                        </div>
                        <div class="headerblog">
                            <p>ພິທີມອບ-ຮັບ ຕຳແໜ່ງ ປະທານສະພາບໍລິຫານ ແລະ ຜູ້ອຳນວຍການ ບໍລິສັດ ລາວເນເຊີນນໍ ເມັ້ນ ເນັດເວີກ ຈຳກັດ ລະຫວ່າງ ຜູ້ເກົ່າ ແລະ ຜູ້ໃໝ່</p>
                        </div>
                        <div class="readmore">
                            <p>ອ່ານເພີ່ມເຕີ່ມ <i class="fa-solid fa-circle-arrow-right"></i></p>
                        </div>
                    </div>
                </router-link>
                <router-link to="blogdetail11">
                 <div class="cardblog">
                        <div class="cardimg">
                            <img src="../../../assets/newsassets/10.jpg" alt="">
                        </div>
                        <div class="tagdetail">
                            <p>ຂ່າວບໍລິສັດ - 28 April 2023</p>
                        </div>
                        <div class="headerblog">
                            <p>LAPNet ໄດ້ສຳເລັດການຈັດກອງປະຊຸມສະພາບໍລິຫານສະໄໝສາມັນ ປະຈຳໄຕມາດ I ປະຈຳປີ 2023</p>
                        </div>
                        <div class="readmore">
                            <p>ອ່ານເພີ່ມເຕີ່ມ <i class="fa-solid fa-circle-arrow-right"></i></p>
                        </div>
                    </div></router-link>
                    <router-link to="/blogdetail12">
                <div class="cardblog">
                    <div class="cardimg">
                        <img src="../../../assets/newsassets/11.jpeg" alt="">
                    </div>
                    <div class="tagdetail">
                        <p>ຂ່າວບໍລິສັດ - 05 April 2023</p>
                    </div>
                    <div class="headerblog">
                        <p>ພິທີມອບຮັບໃບຍ້ອງຍໍ ຈາກລັດຖະມົນຕີກະຊວງການເງິນ</p>
                    </div>
                    <div class="readmore">
                        <p>ອ່ານເພີ່ມເຕີ່ມ <i class="fa-solid fa-circle-arrow-right"></i></p>
                    </div>
                </div></router-link>
                
            </div>

        </div>

        <!-- ################ Row2 #################### -->
        <div data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
            <div class="blogrow">
                <router-link to="/blogdetail13">
                <div class="cardblog">
                    <div class="cardimg">
                        <img src="../../../assets/newsassets/12.jpg" alt="">
                    </div>
                    <div class="tagdetail">
                        <p>ຂ່າວບໍລິສັດ - 12 March 2023</p>
                    </div>
                    <div class="headerblog">
                        <p>LAPNet trip 11-12 March 2023 at Vangvieng</p>
                    </div>
                    <div class="readmore">
                        <p>ອ່ານເພີ່ມເຕີ່ມ <i class="fa-solid fa-circle-arrow-right"></i></p>
                    </div>
                </div></router-link>
                <router-link to="/blogdetail14">
                <div class="cardblog">
                    <div class="cardimg">
                        <img src="../../../assets/newsassets/13.jpg" alt="">
                    </div>
                    <div class="tagdetail">
                        <p>ຂ່າວບໍລິສັດ - 21 December 2022</p>
                    </div>
                    <div class="headerblog">
                        <p>ບໍລິສັດ LAPNet ໄດ້ເຂົ້າຮ່ວມງານ ສັບປະດາດິຈິຕ໋ອນລາວ ປະຈຳປີ 2022</p>
                    </div>
                    <div class="readmore">
                        <p>ອ່ານເພີ່ມເຕີ່ມ <i class="fa-solid fa-circle-arrow-right"></i></p>
                    </div>
                </div></router-link>
                <router-link to="/blogdetail15">
                <div class="cardblog">
                    <div class="cardimg">
                        <img src="../../../assets/newsassets/14.jpg" alt="">
                    </div>
                    <div class="tagdetail">
                        <p>ຂ່າວບໍລິສັດ - 06 October 2022</p>
                    </div>
                    <div class="headerblog">
                        <p>ພິທີລົງນາມສັນຍາວ່າດ້ວຍການເປັນຄູ່ຮ່ວມມື ແລະ ພິທີເປີດໂຕການຊຳລະຂ້າມທະນາຄານຜ່ານ LAPNet QR Pay
                            ໃນວັນທີ 06 ຕຸລາ 2022 ທີ່ຜ່ານມາ</p>
                    </div>
                    <div class="readmore">
                        <p>ອ່ານເພີ່ມເຕີ່ມ <i class="fa-solid fa-circle-arrow-right"></i></p>
                    </div>
                </div>
                </router-link>
            </div>
        </div>



        <!-- ################ Row3 #################### -->

        <div data-aos="fade-down" data-aos-duration="1200" data-aos-once="true">
            <div class="blogrow">
                <router-link to="blogdetail15">
                <div class="cardblog">
                    <div class="cardimg">
                        <img src="../../../assets/newsassets/15.jpg" alt="">
                    </div>
                    <div class="tagdetail">
                        <p>ຂ່າວບໍລິສັດ - 18 December 2021</p>
                    </div>
                    <div class="headerblog">
                        <p>ເທດສະການສະຕາດອັບລາວ ບໍລິສັດ LAPNet ກໍໄດ້ຮັບກຽດໃຫ້ເຂົ້າຮ່ວມບັນຍາຍເພື່ອນຳສະເໜີກ່ຽວກັບ ບໍລິສັດ
                            LAPNet</p>
                    </div>
                    <div class="readmore">
                        <p>ອ່ານເພີ່ມເຕີ່ມ <i class="fa-solid fa-circle-arrow-right"></i></p>
                    </div>
                </div></router-link>
                <router-link to="/blogdetail16">
                <div class="cardblog">
                    <div class="cardimg">
                        <img src="../../../assets/newsassets/16.jpeg" alt="">
                    </div>
                    <div class="tagdetail">
                        <p>ຂ່າວບໍລິສັດ - 14 July 2021</p>
                    </div>
                    <div class="headerblog">
                        <p>ພິທີເຊັນສັນຍາແຕ່ງຕັ້ງທີ່ປຶກສາດ້ານການເງິນ ລະຫວ່າງ ບໍລິສັດ ລາວເນເຊີນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ
                            ແລະ ບໍລິສັດ ຫຼັກຊັບ ລ້ານຊ້າງ ມະຫາຊົນ</p>
                    </div>
                    <div class="readmore">
                        <p>ອ່ານເພີ່ມເຕີ່ມ <i class="fa-solid fa-circle-arrow-right"></i></p>
                    </div>
                </div></router-link>
                <router-link to="/blogdetail17">
                <div class="cardblog">
                    <div class="cardimg">
                        <img src="../../../assets/newsassets/17.jpg" alt="">
                    </div>
                    <div class="tagdetail">
                        <p>ຂ່າວບໍລິສັດ - 30 June 2021</p>
                    </div>
                    <div class="headerblog">
                        <p>ບໍລິສັດ LAPNet ໄດ້ຈັດພິທີມອບ-ຮັບໜ້າທີ່ປະທານສະພາບໍລິຫານຄົນໃຫມ່</p>
                    </div>
                    <div class="readmore">
                        <p>ອ່ານເພີ່ມເຕີ່ມ <i class="fa-solid fa-circle-arrow-right"></i></p>
                    </div>
                </div></router-link>
                
            </div>
        </div>
        <div class="paginationbtn">

            <div class="btn">

                <pagination></pagination>
            </div>
        </div>
    </div>


    <ft></ft>




</template>

<style>
.btn {
    width: 500px;
    height: 120px;

    margin: 0 auto;
}

.blogcontainer {
    width: 90%;
    height: 2500px;
    margin: 0 auto;
    font-family: notosanlao;
    margin-top: 30px;
}

.paginationbtn {
    width: 100%;
    height: 120px;

    margin-top: 100px;

}

.input::placeholder {
    font-size: 20px;

}

.input-group {
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;

    font-family: notosanlao;
    margin-top: 60px;
}

.input {
    min-height: 70px;
    width: 650px;
    padding: 0 1rem;
    color: #000000;
    font-size: 20px;
    border: 1px solid #433bff;
    border-radius: 6px 0 0 6px;
    background-color: transparent;
}

.button--submit {

    min-height: 70px;
    width: 120px;
    padding: .1em 1em;
    border: none;
    border-radius: 0 6px 6px 0;
    background-color: #433bff;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    transition: background-color .3s ease-in-out;
}

.button--submit:hover {
    background-color: #5e5dcd;
}

.input:focus,
.input:focus-visible {
    border-color: #3898EC;
    outline: none;
}







.headerblog p {
    font-size: 20px;
    font-family: notosanlao-bold;
    color: #040072;
}

.tagdetail p {
    font-size: 18px;
    color: #0000007e;
}

.readmore p {
    font-size: 20px;
    color: #433bff;
}

.headerblog {
    width: 90%;
    height: 170px;

    margin-top: 20px;
}

.tagdetail {
    width: 100%;
    height: 50px;

    margin-top: 20px;
}

.cardimg img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-top-left-radius: 45px;
    border: 0.5px solid #00000071;

}

.cardimg {
    width: 100%;
    height: 350px;
    overflow: hidden;

}

.cardblog {
    width: 490px;
    height: 100%;


}

.blogrow {
    width: 100%;
    height: 720px;
    display: flex;
    justify-content: space-between;
}

.monthinput p {
    font-size: 30px;
    font-family: notosanlao;
}

.monthinput input {
    width: 100%;
    height: 70px;
    border-radius: 10px;
    border: 1px solid #00000080;
    margin-top: 15px;
}

.yaerinput p {
    font-size: 30px;
    font-family: notosanlao;
}

.yaerinput input {
    width: 100%;
    height: 70px;
    border-radius: 10px;
    border: 1px solid rgb(0, 0, 0);

    margin-top: 15px;
}

.newsblogcontainer {
    width: 90%;
    height: auto;

    margin: 0 auto;
}

.yaerinput {
    width: 400px;
    height: 120px;

    margin-top: 170px;

}

.monthinput {
    width: 450px;
    height: 120px;
    margin-top: 170px;

}

.searchinput {
    width: 600px;
    height: 120px;

    margin-top: 160px;
    display: flex;

}

.searchbarinput {
    width: 100%;
    height: 430px;
    display: flex;
    justify-content: space-between;

}

.titlesearchbar p {
    font-size: 90px;
    font-family: notosanlao-bold;
    padding-top: 70px;
    margin-left: 400px;


    color: #0095ff;
    background-image: linear-gradient(100deg, #0095ff, #003dad 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
}


.searchbar {
    width: 100%;
    height: 600px;

}

.navigatorcontent {
    width: 100%;
    height: 470px;
    overflow: hidden;


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