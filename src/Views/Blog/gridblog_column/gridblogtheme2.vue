<template>
  <navbarview2></navbarview2>

  <div class="navigatorcontent">
    <img id="navigator-img" src="../../../assets/Blog/bgnewsgrid.png" alt="" />
    <div class="navigator-info-container">
      <div class="titlenavigator">
        <div data-aos="zoom-in-down" data-aos-duration="1000">
          <p>ຂ່າວສານ ແລະ ກິດຈະກຳ</p>
        </div>
      </div>
      <div class="navigatorlink">
        <div data-aos="zoom-out-up" data-aos-duration="1000">
          <p>
            ໜ້າຫຼັກ
            <span style="padding-right: 40px; padding-left: 40px;">
              <i class="fa-solid fa-chevron-right"></i>
            </span>
            ຂ່າວສານ ແລະ ກິດຈະກຳ
            <span style="padding-right: 40px; padding-left: 40px;"></span>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="gridblogtheme1">
    <!-- TITLE -->
    <div class="blogtitle">
      <h1>ຂ່າວສານ ແລະ ກິດຈະກຳ</h1>
    </div>

    <!-- FILTER BAR -->
    <div class="searchbar">
      <div class="container-yearfilter">
        <h1>ປີ</h1>
        <yeardropdown v-model="selectedYear" />
      </div>

      <div class="container-monthfilter">
        <h1>ເດືອນ</h1>
        <Monthdropdown v-model="selectedMonth" />
      </div>

      <div class="searchbar-input">
        <div class="inputcontent">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="ຄົ້ນຫາຂ່າວສານ ແລະ ກິດຈະກຳ"
          />
        </div>
        <div class="iconsearch">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>

    <!-- GRID BLOG -->
    <div class="gridblogcontainer">
      <div class="gridbloglist">
        <router-link
          v-for="blog in filteredBlogs"
          :key="blog.id"
          :to="blog.route"
          class="card-link"
        >
          <div class="cardview">
            <div class="mainblogimage">
              <img
                :src="blog.image"
                alt=""
                class="zoom-image"
                :style="blog.imageStyle"
              />
            </div>

            <div class="infocontainer">
              <div class="datebar">
                <div class="date">
                  <h1>{{ blog.day }}</h1>
                  <h2>{{ blog.month }}</h2>
                </div>
                <div class="year">
                  <i class="fa-solid fa-calendar"></i>
                  <h2>Year {{ blog.year }}</h2>
                </div>
                <div class="tags">
                  <div class="border">
                    <i class="fa-solid fa-tag"></i>
                    <h1>{{ blog.tag }}</h1>
                  </div>
                </div>
              </div>

              <div class="headerblog">
                <p>{{ blog.title }}</p>
              </div>

              <div class="buttonbar">
                <button class="button-57" type="button">
                  <span class="text">
                    ອ່ານເພີ່ມເຕີ່ມ
                    <i class="fa-solid fa-arrow-right"></i>
                  </span>
                  <span>
                    <i class="fa-solid fa-arrow-right"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </router-link>

        <!-- ถ้าไม่เจอผลลัพธ์ -->
        <div v-if="filteredBlogs.length === 0" class="no-result">
          <p>ບໍ່ພົບຂ່າວສານຕາມເງື່ອນໄຂການຄົ້ນຫາ</p>
        </div>
      </div>

      <div class="pagination_gridblog">
        <Blogpagination />
      </div>
    </div>
  </div>

  <mainfooter></mainfooter>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import navbarview2 from '../../../components/navbar/navbarview2.vue'
import mainfooter from '../../../components/footer/mainfooter.vue'
import yeardropdown from '../../../components/Dropdown/yeardropdown.vue'
import Monthdropdown from '../../../components/Dropdown/monthdropdown.vue'
import Blogpagination from '../../../components/pagination/blogpagination.vue'

interface BlogItem {
  id: number
  route: string
  day: string
  month: string
  year: number
  tag: string
  title: string
  image: string
  imageStyle?: string
}

// ข้อมูลข่าว 10–18
const blogs = ref<BlogItem[]>([
  {
    id: 10,
    route: '/blogdetail10',
    day: '21',
    month: 'August',
    year: 2023,
    tag: 'Meetings',
    title:
      'ພິທີມອບ-ຮັບ ຕຳແໜ່ງ ປະທານສະພາບໍລິຫານ ແລະ ຜູ້ອຳນວຍການ ບໍລິສັດ ລາວເນເຊີນນໍ ເມັ້ນ ເນັດເວີກ ຈຳກັດ ລະຫວ່າງ ຜູ້ເກົ່າ ແລະ ຜູ້ໃໝ່.',
    image: '/images/10/1.jpg'
  },
  {
    id: 11,
    route: '/blogdetail11',
    day: '28',
    month: 'April',
    year: 2023,
    tag: 'Meetings',
    title:
      'LAPNet ໄດ້ສຳເລັດການຈັດກອງປະຊຸມສະພາບໍລິຫານສະໄໝສາມັນ ປະຈຳໄຕມາດ I ປະຈຳປີ 2023.',
    image: '/images/11/1.jpg'
  },
  {
    id: 12,
    route: '/blogdetail12',
    day: '05',
    month: 'April',
    year: 2023,
    tag: 'Contract',
    title: 'ພິທີມອບຮັບໃບຍ້ອງຍໍ ຈາກລັດຖະມົນຕີກະຊວງການເງິນ.',
    image: '/images/12/1.jpeg',
    imageStyle: 'object-fit: cover; object-position: center;'
  },
  {
    id: 13,
    route: '/blogdetail13',
    day: '11',
    month: 'March',
    year: 2023,
    tag: 'Activity',
    title: 'LAPNet trip 11-12 March 2023 at Vangvieng.',
    image: '/images/13/1.jpg'
  },
  {
    id: 14,
    route: '/blogdetail14',
    day: '21',
    month: 'December',
    year: 2022,
    tag: 'Contract',
    title:
      'ບໍລິສັດ LAPNet ໄດ້ເຂົ້າຮ່ວມງານ ສັບປະດາດິຈິຕ໋ອນລາວ ປະຈຳປີ 2022.',
    image: '/images/14/1.jpg'
  },
  {
    id: 15,
    route: '/blogdetail15',
    day: '06',
    month: 'October',
    year: 2022,
    tag: 'Contract',
    title:
      'ພິທີລົງນາມສັນຍາວ່າດ້ວຍການເປັນຄູ່ຮ່ວມມື ແລະ ພິທີເປີດໂຕການຊຳລະຂ້າມທະນາຄານຜ່ານ LAPNet QR Pay ໃນວັນທີ 06 ຕຸລາ 2022 ທີ່ຜ່ານມາ.',
    image: '/images/15/1.jpg'
  },
  {
    id: 16,
    route: '/blogdetail16',
    day: '18',
    month: 'December',
    year: 2021,
    tag: 'Meetings',
    title:
      'ເທດສະການສະຕາດອັບລາວ ບໍລິສັດ LAPNet ກໍໄດ້ຮັບກຽດໃຫ້ເຂົ້າຮ່ວມບັນຍາຍເພື່ອນຳສະເໜີກ່ຽວກັບ ບໍລິສັດ LAPNet.',
    image: '/images/16/1.jpg'
  },
  {
    id: 17,
    route: '/blogdetail17',
    day: '14',
    month: 'July',
    year: 2021,
    tag: 'Contract',
    title:
      'ພິທີເຊັນສັນຍາແຕ່ງຕັ້ງທີ່ປຶກສາດ້ານການເງິນ ລະຫວ່າງ ບໍລິສັດ ລາວເນເຊີນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ ແລະ ບໍລິສັດ ຫຼັກຊັບ ລ້ານຊ້າງ ມະຫາຊົນ.',
    image: '/images/17/1.jpeg'
  },
  {
    id: 18,
    route: '/blogdetail18',
    day: '30',
    month: 'June',
    year: 2021,
    tag: 'Meetings',
    title: 'ບໍລິສັດ LAPNet ໄດ້ຈັດພິທີມອບ-ຮັບໜ້າທີ່ປະທານສະພາບໍລິຫານຄົນໃຫມ່.',
    image: '/images/18/1.jpg'
  }
])

// state filter
const searchQuery = ref<string>('')
const selectedYear = ref<number | null>(null)
const selectedMonth = ref<string | null>(null)

// filter หลัก
const filteredBlogs = computed(() => {
  return blogs.value.filter((blog) => {
    const text = searchQuery.value.trim().toLowerCase()

    const matchText =
      !text ||
      blog.title.toLowerCase().includes(text) ||
      blog.tag.toLowerCase().includes(text) ||
      `${blog.day} ${blog.month} ${blog.year}`.toLowerCase().includes(text)

    const matchYear =
      !selectedYear.value || Number(selectedYear.value) === blog.year

    const matchMonth =
      !selectedMonth.value ||
      selectedMonth.value === 'all' ||
      blog.month === selectedMonth.value

    return matchText && matchYear && matchMonth
  })
})
</script>

<style scoped>
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

.gridblogtheme1 {
  width: 90%;
  margin: 0 auto;
  padding: 40px 0 80px;
}

.blogtitle {
  width: 100%;
  margin-top: 10px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
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

/* FILTER BAR */
.searchbar {
  width: 100%;
  height: 115px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.container-yearfilter,
.container-monthfilter {
  width: 23%;
  height: 100%;
}

.container-yearfilter h1,
.container-monthfilter h1 {
  font-size: 25px;
  font-family: "Noto Sans Lao", sans-serif;
}

.searchbar-input {
  width: 50%;
  height: 100%;
  display: flex;
  padding-bottom: 2px;
  align-items: flex-end;
}

.inputcontent {
  width: 90%;
  height: 70px;
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

.iconsearch {
  width: 10%;
  height: 70px;
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

/* GRID BLOG */
.gridblogcontainer {
  width: 100%;
  height: auto;
  margin-top: 60px;
  padding-bottom: 40px;
}

.gridbloglist {
  width: 100%;
  display: grid;
  /* 1 แถว 3 columns */
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
}

.card-link {
  text-decoration: none;
  color: inherit;
}

.cardview {
  border-radius: 15px;
  width: 100%;
  height: 600px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.cardview:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);
}

/* IMAGE */
.mainblogimage {
  width: 100%;
  height: 630px;
  overflow: hidden;
}

.mainblogimage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.zoom-image {
  width: 100%;
  height: 100%;
  object-position: top;
  object-fit: cover;
  transition: transform 0.5s ease, filter 0.3s ease;
}

.cardview:hover .zoom-image {
  transform: scale(1.15);
  filter: brightness(1.0);
}

/* INFO */
.infocontainer {
  width: 100%;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
}

.datebar {
  width: 90%;
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
  padding-top: 14px;
}

.date {
  width: 90px;
  height: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: background-color 0.35s ease;
}

.date h1 {
  font-size: 25px;
  color: #000000b5;
  font-weight: 500;
  font-family: "Inter";
}

.date h2 {
  font-family: "Inter";
  font-size: 17px;
  color: #000000b5;
}

.cardview:hover .date {
  background-color: #433bff;
}

.cardview:hover .date h1,
.cardview:hover .date h2 {
  color: #fff;
}

.year {
  width: 170px;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.year i {
  padding-right: 20px;
  font-size: 24px;
  color: #000000b5;
  transition: color 0.35s ease;
}

.year h2 {
  font-family: "Inter";
  font-size: 19px;
  color: #000000b5;
  transition: color 0.35s ease;
}

.year:hover i,
.year:hover h2 {
  color: #433bff;
}

.tags {
  width: 170px;
  height: 100%;
  display: flex;
  align-items: center;
}

.border {
  width: 100%;
  height: 50%;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #0000005b;
  transition: background-color 0.35s ease, color 0.35s ease, border-color 0.35s ease;
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

.border:hover {
  background-color: #433bff;
  border-color: #433bff;
}

.border:hover h1,
.border:hover i {
  color: #fff;
}

.headerblog {
  width: 90%;
  margin: 0 auto;
  min-height: 120px;
  padding-top: 12px;
}

.headerblog p {
  cursor: pointer;
  font-family: "Noto Sans Lao", sans-serif;
  font-weight: 600;
  color: #000000c1;
  font-size: 22px;
  line-height: 1.5;
  transition: color 0.35s ease;
}

.headerblog:hover p {
  color: #413bff;
}

/* BUTTON */
.buttonbar {
  width: 85%;
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
}

.button-57 {
  position: relative;
  overflow: hidden;
  font-family: "Noto Sans Lao", sans-serif;
  color: #433bff;
  display: inline-block;
  font-size: 18px;
  line-height: 15px;
  padding: 14px 18px 13px;
  text-decoration: none;
  cursor: pointer;
  background: #fff;
  user-select: none;
  border-radius: 10px;
  border: 1px solid #433bff;
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

/* PAGINATION */
.pagination_gridblog {
  width: 100%;
  margin-top: 60px;
  height: 120px;
}

/* NO RESULT */
.no-result {
  grid-column: 1 / -1;
  text-align: center;
  margin-top: 40px;
  font-family: "Noto Sans Lao", sans-serif;
  font-size: 20px;
  color: #6b7280;
}

/* RESPONSIVE */
@media (max-width: 1200px) {
  .gridbloglist {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .gridbloglist {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 1024px) {
  .searchbar {
    flex-wrap: wrap;
    height: auto;
    gap: 16px;
  }

  .container-yearfilter,
  .container-monthfilter {
    width: 48%;
  }

  .searchbar-input {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .blogtitle h1 {
    font-size: 40px;
    text-align: center;
  }

  .searchbar {
    margin-top: 20px;
  }
}
</style>
