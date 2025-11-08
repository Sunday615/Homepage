<script setup lang="ts">
import navbartemplete from '../../Navbar-footer/navbartemplete.vue';
import ft from '../../Navbar-footer/ft.vue';
import { onMounted } from 'vue';

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
                <router-link to="/blogdetail18">
                    <div class="cardblog">
                        <div class="cardimg">
                            <img style="object-position: top;" src="../../../../public/images/19.png" alt="">
                        </div>
                        <div class="tagdetail">
                            <p>ຂ່າວບໍລິສັດ - 17 June 2021</p>
                        </div>
                        <div class="headerblog">
                            <p>ລາຍຊື່ ຜູ້ຄວບຄຸ່ມລະບົບການຊຳລະທຸລະກຳຍ່ອຍ ຜູ້ໃຫ້ບໍລິການຊຳລະ ທີ່ໄດ້ ຮັບອະນຸຍາດຈາກ ທະນາຄານແຫ່ງ ສປປ ລາວ</p>
                        </div>
                        <div class="readmore">
                            <p>ອ່ານເພີ່ມເຕີ່ມ <i class="fa-solid fa-circle-arrow-right"></i></p>
                        </div>
                    </div>
                </router-link>
                <router-link to="blogdetail19">
                 <div class="cardblog">
                        <div class="cardimg">
                            <img src="../../../../public/images/20.jpeg" alt="">
                        </div>
                        <div class="tagdetail">
                            <p>ຂ່າວບໍລິສັດ - 30 April 2021</p>
                        </div>
                        <div class="headerblog">
                            <p>ບໍລິສັດ LAPNet ໄດ້ຮັບມອບຜ້າປິດປາກ ຈາກບໍລິສັດ Viet Card International Technology Corporation</p>
                        </div>
                        <div class="readmore">
                            <p>ອ່ານເພີ່ມເຕີ່ມ <i class="fa-solid fa-circle-arrow-right"></i></p>
                        </div>
                    </div></router-link>
                    <router-link to="/blogdetail20">
                <div class="cardblog">
                    <div class="cardimg">
                        <img src="../../../../public/images/21.jpg" alt="">
                    </div>
                    <div class="tagdetail">
                        <p>ຂ່າວບໍລິສັດ - 12 March 2021</p>
                    </div>
                    <div class="headerblog">
                        <p>LAPNet ຈັດກອງປະຊຸມສະພາບໍລິຫານ ສະໄໝສາມັນ ແລະ ກອງປະຊຸມຜູ້ຖືຮຸ້ນ ສະໄໝສາມັນ ຄັ້ງທີ I ປະຈໍາປີ 2021</p>
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
              
                <router-link to="/blogdetail14">
                <div class="cardblog">
                    <div class="cardimg">
                        <img src="../../../../public/images/22.jpg" alt="">
                    </div>
                    <div class="tagdetail">
                        <p>ຂ່າວບໍລິສັດ - 08 December 2020</p>
                    </div>
                    <div class="headerblog">
                        <p>ພິທີເປີດໂຕຜະລິດຕະພັນ ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື</p>
                    </div>
                    <div class="readmore">
                        <p>ອ່ານເພີ່ມເຕີ່ມ <i class="fa-solid fa-circle-arrow-right"></i></p>
                    </div>
                </div></router-link>
                <router-link to="/blogdetail15">
                <div class="cardblog">
                    <div class="cardimg">
                        <img src="../../../../public/images/23.png" alt="">
                    </div>
                    <div class="tagdetail">
                        <p>ຂ່າວບໍລິສັດ - 22 October 2020</p>
                    </div>
                    <div class="headerblog">
                        <p>ກິດຈະກຳກິລາບານເຕະມິດຕະພາບ ລະຫວ່າງບໍລິສັດ LAPNET ຮ່ວມກັບກົມຄຸ້ມຄອງລະບົບຊຳລະສະສາງ</p>
                    </div>
                    <div class="readmore">
                        <p>ອ່ານເພີ່ມເຕີ່ມ <i class="fa-solid fa-circle-arrow-right"></i></p>
                    </div>
                </div>
                </router-link>
                  <router-link to="/blogdetail13">
                <div class="cardblog">
                    <div class="cardimg">
                        <img src="../../../../public/images/24.jpg" alt="">
                    </div>
                    <div class="tagdetail">
                        <p>ຂ່າວບໍລິສັດ - 11 September 2020</p>
                    </div>
                    <div class="headerblog">
                        <p>ກິດຈະກຳກິລາບານເຕະມິດຕະພາບ ລະຫວ່າງບໍລິສັດ LAPNET ຮ່ວມກັບທະນາຄານ JDB Bank</p>
                    </div>
                    <div class="readmore">
                        <p>ອ່ານເພີ່ມເຕີ່ມ <i class="fa-solid fa-circle-arrow-right"></i></p>
                    </div>
                </div></router-link>
            </div>
        </div>



        <!-- ################ Row3 #################### -->

        <div data-aos="fade-down" data-aos-duration="1200" data-aos-once="true">
            <div class="blogrow">
                <router-link to="blogdetail15">
                <div class="cardblog">
                    <div class="cardimg">
                        <img src="../../../../public/images/25.jpg" alt="">
                    </div>
                    <div class="tagdetail">
                        <p>ຂ່າວບໍລິສັດ - 16 December 2020</p>
                    </div>
                    <div class="headerblog">
                        <p>ບໍລິສັດ ລາວເນເຊິນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ ຕ້ອນຮັບຄະນະນັກສຶກສາຈາກວິທະຍາໄລສຸດສະກະ</p>
                    </div>
                    <div class="readmore">
                        <p>ອ່ານເພີ່ມເຕີ່ມ <i class="fa-solid fa-circle-arrow-right"></i></p>
                    </div>
                </div></router-link>
                <router-link to="/blogdetail16">
                <div class="cardblog">
                    <div class="cardimg">
                        <img style="object-position: top;" src="../../../../public/images/26.jpg" alt="">
                    </div>
                    <div class="tagdetail">
                        <p>ຂ່າວບໍລິສັດ - 14 January 2020</p>
                    </div>
                    <div class="headerblog">
                        <p>ແຈ້ງການປະມູນ</p>
                    </div>
                    <div class="readmore">
                        <p>ອ່ານເພີ່ມເຕີ່ມ <i class="fa-solid fa-circle-arrow-right"></i></p>
                    </div>
                </div></router-link>
                <router-link to="/blogdetail17">
                <div class="cardblog">
                    <div class="cardimg">
                        <img src="../../../../public/images/27.jpg" alt="">
                    </div>
                    <div class="tagdetail">
                        <p>ຂ່າວບໍລິສັດ - 30 June 2021</p>
                    </div>
                    <div class="headerblog">
                        <p>ພິທີເປີດບໍລິສັດ ລາວເນເຊີນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ</p>
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