<template>
  <div class="scrollingbar">
    <div class="titlemember">ທະນາຄານສະມາຊິກຂອງເຮົາ</div>

    <div class="wrapper">
      <div class="itemLeft item1">
        <img src="../../assets/Logomember- retangle/BCEL.png" alt="">
      </div>
      <div class="itemLeft item2">
        <img src="../../assets/logomember-circle/LDB.PNG" alt="">
      </div>
      <div class="itemLeft item3">
        <img src="../../assets/Logomember- retangle/APB.jpeg" alt="">
      </div>
      <div class="itemLeft item4">
        <img src="../../assets/Logomember- retangle/jdb.png" alt="">
      </div>
      <div class="itemLeft item5">
        <img src="../../assets/Logomember- retangle/MARU.jpg" alt="">
      </div>
      <div class="itemLeft item6">
        <img src="../../assets/Logomember- retangle/LVB.png" alt="">
      </div>
      <div class="itemLeft item7">
        <img src="../../assets/Logomember- retangle/ICBC.svg.png" alt="">
      </div>
      <div class="itemLeft item8">
        <img src="../../assets/Logomember- retangle/bboc.png" alt="">
      </div>
       <div class="itemLeft item9">
        <img src="../../assets/Logomember- retangle/y-nghia-sau-sac-dang-sau-thiet-ke-logo-vietinbank-0.png" alt="">
      </div>
      <div class="itemLeft item10">
        <img src="../../assets/Logomember- retangle/IB.png" alt="">
      </div>
    </div>
    <div class="wrapper-right">
      <div class="itemRight item1-right">
        <img src="../../assets/Logomember- retangle/mmoney.png" alt="">
      </div>
      <div class="itemRight item2-right">
        <img src="../../assets/Logomember- retangle/umoney.png" alt="">
      </div>
      <div class="itemRight item3-right">
        <img src="../../assets/Logomember- retangle/aceleda.png" alt="">
      </div>
      <div class="itemRight item4-right">
        <img src="../../assets/Logomember- retangle/BIC.png" alt="">
      </div>
      <div class="itemRight item5-right">
        <img src="../../assets/Logomember- retangle/sacombank.png" alt="">
      </div>
      <div class="itemRight item6-right">
        <img src="../../assets/Logomember- retangle/STB.jpg" alt="">
      </div>
      <div class="itemRight item7-right">
        <img src="../../assets/Logomember- retangle/kkbank.PNG" alt="">
      </div>
      <div class="itemRight item8-right">
        <img src="../../assets/Logomember- retangle/publicbank.png" alt="">
      </div>
      <div class="itemRight item9-right">
        <img src="../../assets/Logomember- retangle/BFL.png" alt="">
      </div>
      <div class="itemRight item10-right">
        <img src="../../assets/Logomember- retangle/psvb.PNG" alt="">
      </div>
      <div class="itemRight item11-right">
        <img src="../../assets/Logomember- retangle/mbbank.png" alt="">
      </div>
    </div>
  </div>
</template>



<style>
@import "tailwindcss";

.scrollingbar {
  width: 100%;
  height: 500px;
  
  margin: auto;

}

.titlemember {
  margin-top: 55px;
  padding-bottom: 50px;
  text-align: center;
  font-size: 50px;
         font-family: "Noto Sans Lao", sans-serif;
         font-weight: bold;
}

.scrolling {
  width: 100%;
  margin-top: 150px;
  height: 200px;
  border: 1px solid blue;
}

.wrapper {

  margin-top: 2rem;
  width: 90%;
  max-width: 1536px;
  margin-inline: auto;
  height: 100px;
  position: relative;
  overflow: hidden;
  mask-image: linear-gradient(to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0));
}

.wrapper-right {

  margin-top: 2rem;
  width: 100%;
  max-width: 1536;
  margin-inline: auto;
  height: 100px;
  position: relative;
  overflow: hidden;
  mask-image: linear-gradient(to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0));
}

@keyframes scrollLeft {
  to {
    left: -200px;
  }
}

@keyframes scrollRight {
  to {
    right: -200px;
  }
}

.itemLeft,
.itemRight {
  width: 200px;
  height: 100px;
  border-radius: 6px;
  display: flex;
  justify-content: center;

  align-items: center;
  position: absolute;
  animation-timing-function: linear;
  animation-duration: 30s;
  animation-iteration-count: infinite;
}
.itemLeft {
  padding-right: 60px;
}
.itemRight{
  padding-right: 30px;
}

.itemLeft {
  left: max(calc(200px * 8), 100%);
  animation-name: scrollLeft;
}

.itemRight {
  right: max(calc(200px * 11), calc(100% + 200px));
  animation-name: scrollRight;
}

.item1 {
  animation-delay: calc(30s / 10 * (10 - 1) * -1);
}

.item2 {
  animation-delay: calc(30s / 10 * (10 - 2) * -1);
}

.item3 {
  animation-delay: calc(30s / 10 * (10 - 3) * -1);
}

.item4 {
  animation-delay: calc(30s / 10 * (10 - 4) * -1);
}

.item5 {
  animation-delay: calc(30s / 10 * (10 - 5) * -1);
}

.item6 {
  animation-delay: calc(30s / 10 * (10 - 6) * -1);
}

.item7 {
  animation-delay: calc(30s / 10 * (10 - 7) * -1);
}

.item8 {
  animation-delay: calc(30s / 10 * (10 - 8) * -1);
}

.item9 {
  animation-delay: calc(30s / 10 * (10 - 9) * -1);
}

.item10 {
  animation-delay: calc(30s / 10 * (10 - 10) * -1);
}

/*--------------------------------------leftside-----------------*/

.item1-right {
  animation-delay: calc(30s / 11 * (11 - 1) * -1);
}

.item2-right {
  animation-delay: calc(30s / 11 * (11 - 2) * -1);
}

.item3-right {
  animation-delay: calc(30s / 11 * (11 - 3) * -1);
}

.item4-right {
  animation-delay: calc(30s / 11 * (11 - 4) * -1);
}

.item5-right {
  animation-delay: calc(30s / 11 * (11 - 5) * -1);
}

.item6-right {
  animation-delay: calc(30s / 11 * (11 - 6) * -1);
}

.item7-right {
  animation-delay: calc(30s / 11 * (11 - 7) * -1);
}

.item8-right {
  animation-delay: calc(30s / 11 * (11 - 8) * -1);
}
.item9-right {
  animation-delay: calc(30s / 11 * (11 - 9) * -1);
}
.item10-right {
  animation-delay: calc(30s / 11 * (11 - 10) * -1);
}
.item11-right {
  animation-delay: calc(30s / 11 * (11 - 11) * -1);
}



/*--------------------------- rgihtside-----------------------*/
.item1 img {
  width: 100px;
  height: 100px;
  margin-left: 30px;
}

.item2 img {
  height: 100%;
 
}

.item3 img {
  width: 100px;
  height: 100px;
}

.item4 img {
  width: 200px;
  
}

.item5 img {
  width: 200px;
}

.item6 img {
  width: 200px;

  
}



 /* -----------------img-leftside-------------- */
.item1-right img{
  width: 55%;
  border-radius: 10px;
  
}

.item2-right img{
  width: 80%;

}

.item6-right img{
  width: 150px;
  height: 100px;
 }

 .item7-right {
  margin-left: 20px;
 }

.item8-right img{
  width: 200px;
  
}
.item10-right img{
  width: 100px;
  height: 100px;
}
</style>



<script>

</script>