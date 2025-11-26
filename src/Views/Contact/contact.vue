<script setup>
import navbarview2 from '../../components/navbar/navbarview2.vue'
import mainfooter from '../../components/footer/mainfooter.vue'


const openMap = () => {
  const mapUrl = 'https://maps.app.goo.gl/TzSSbm5NQWCWNsrx7'
  window.open(mapUrl, '_blank')
}
</script>

<template>
  <navbarview2 />

  <div class="navigatorcontact">
    <div class="titlenavigator">
      <div class="bigheader">
        <h1>CONTACT US</h1>
      </div>

      <div class="titleinfowebsite">
        <div class="leftbox">
          <p>wwww.lapnet.com.la</p>
        </div>
        <div class="rightbox" />
      </div>

      <div class="descriptionlapnet">
        <p>
          Any Where Anytime <br />
          Payment Chanel
        </p>
      </div>
    </div>
  </div>

  <div class="containercontact">
    <div class="boxcontainer">
      <div data-aos="fade-right" data-aos-duration="1300">
        <div class="leftboxcontainer">
          <div class="logo-title">
            <img src="../../assets/Logo-lapnet/logolapnet.PNG" alt="LAPNet Logo" />
            <p>Contact Us</p>
          </div>

          <div class="headercontact">
            <h1>
              Anywhere Anytime <br />
              Any Payment Chanel
            </h1>
          </div>

          <div class="infoboxcontainer">
            <div data-aos="fade-down" data-aos-duration="1200" data-aos-delay="500" data-aos-once="true">
              <div class="box1" @click="openMap" style="cursor: pointer">
                <div class="flexboxcontainer">
                  <div class="icon">
                    <i class="fa-solid fa-location-dot" />
                  </div>
                  <div class="infotitle">
                    <h2>Our Office Address</h2>
                    <p>XJHH+FFM, Vientiane</p>
                    <p>LAOS</p>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-down" data-aos-duration="1300" data-aos-delay="500" data-aos-once="true">
              <div class="box2" style="cursor: pointer">
                <div class="flexboxcontainer">
                  <div class="icon">
                    <i class="fa-solid fa-phone" />
                  </div>
                  <div class="infotitle">
                    <h2>Call Us</h2>
                    <p>030 568 7610</p>
                    <p>021 417 915</p>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-down" data-aos-duration="1300" data-aos-delay="500" data-aos-once="true">
              <div class="box3" style="cursor: pointer" >
                <div class="flexboxcontainer">
                  <div id="emailicon" class="icon">
                    <i class="fa-solid fa-inbox" />
                  </div>
                  <div class="infotitle">
                    <h2>Our Email</h2>
                    <p>info@lapnet.com.la</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-left" data-aos-duration="1300">
        <div class="rightboxcontainer">
          <div class="boxsendemail">
            <div class="titlesendmail">
              <h1>Make an Appointment</h1>
              <p>feel free to contact with us, we don't spam your email</p>
            </div>

            <div class="boxinputname">
              <input type="text" placeholder="Full Name *" />
            </div>

            <div class="boxinputemail">
              <input type="text" placeholder="Email Here *" />
            </div>

            <div class="boxinputmessage">
              <textarea placeholder="Your Message *" />
            </div>

            <div class="btnsubmit">
              <button>Submit Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="maps">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.0006600873685!2d102.62610377608371!3d17.97870628301288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x312467f0b486944f%3A0x84af2329498cb982!2sLao%20National%20Payment%20Network%20.%2C%20CO!5e0!3m2!1sth!2sla!4v1760583737341!5m2!1sth!2sla"
      width="100%"
      height="900"
      style="border: 0"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />
  </div>

  <mainfooter />
</template>

<style scoped>
.descriptionlapnet p {
  font-size: 40px;
  font-weight: 500;
}

.descriptionlapnet {
  width: 100%;
  margin-top: 20px;
  height: 150px;
}

.leftbox p {
  font-size: 23px;
  font-family: 'Inter';
  color: #fff;
  font-weight: 300;
  margin-top: 68px;
}

.rightbox {
  width: 30%;
  border-bottom: 2px solid #fff;
  height: 100%;
}

.leftbox {
  width: 40%;
  height: 100%;
}

.titleinfowebsite {
  display: flex;
  width: 100%;
  height: 90px;
}

.bigheader h1 {
  padding-top: 30px;
  font-size: 110px;
  font-weight: 900;
  font-family: 'Inter';
  color: #fff;
}

.bigheader {
  width: 100%;
  height: 190px;
}

.titlenavigator {
  width: 50%;
  height: 100%;
  float: right;
}

.maps {
  margin-top: 100px;
  width: 100%;
  overflow: hidden;
  height: 900px;
}

.btnsubmit button {
  width: 100%;
  height: 100%;
  background-color: #000561;
  color: #fff;
  font-size: 20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
}

.btnsubmit {
  width: 280px;
  height: 80px;
  margin-left: 70px;
  margin-top: 30px;
}

.boxinputmessage textarea::placeholder {
  padding-top: 20px;
  padding-left: 20px;
  font-size: 20px;
}

.boxinputmessage textarea {
  width: 100%;
  height: 200px;
  background-color: #fff;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.boxinputmessage {
  width: 80%;
  height: 200px;
  margin-left: 70px;
  margin-top: 30px;
}

.boxinputemail input::placeholder {
  padding-left: 20px;
  font-size: 20px;
}

.boxinputemail input {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.boxinputemail {
  width: 80%;
  height: 80px;
  margin-left: 70px;
  margin-top: 30px;
}

.boxinputname input::placeholder {
  padding-left: 20px;
  font-size: 20px;
}

.boxinputname input {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.boxinputname {
  width: 80%;
  height: 80px;
  margin-left: 70px;
  margin-top: 80px;
}

.titlesendmail p {
  font-size: 18px;
  color: #fff;
}

.titlesendmail h1 {
  font-size: 50px;
  color: #fff;
}

.titlesendmail {
  width: 80%;
  height: 100px;
  padding-top: 40px;
  margin-left: 70px;
}

.boxsendemail {
  width: 90%;
  height: 100%;
  margin-left: 10%;
  background-color: #0d00ff;
  border-top-left-radius: 60px;
  border-bottom-right-radius: 60px;
}

.infotitle p {
  font-size: 20px;
  line-height: 1.2;
  margin-top: 5px;
}

.infotitle h2 {
  font-size: 25px;
  font-weight: bold;
}

.infotitle {
  width: 100%;
  height: 90%;
  margin-top: 5px;
  padding-left: 25px;
}

.icon i {
  font-size: 60px;
  color: #ffffff;
  background-color: #453bff;
  padding: 30px 85px 30px 40px;
  border-radius: 5px;
  box-shadow:
    rgba(20, 0, 235, 0.3) 0 1px 2px 0,
    rgba(18, 0, 219, 0.3) 0 2px 6px 2px;
}

.flexboxcontainer {
  width: 100%;
  height: 120px;
  margin-top: 15px;
  display: flex;
}

.box3,
.box2,
.box1 {
  width: 450px;
  height: 150px;
  border-radius: 10px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
}

.box1 {
  margin-top: 40px;
}

.box2 {
  margin-top: 20px;
}

.box3 {
  margin-top: 20px;
}

.infoboxcontainer {
  width: 100%;
  height: 500px;
}

.headercontact h1 {
  font-size: 55px;
  font-weight: bold;
  line-height: 1.2;
}

.headercontact {
  width: 100%;
  height: 150px;
  margin-top: 30px;
}

.logo-title p {
  font-size: 27px;
  padding-left: 10px;
}

.logo-title img {
  width: 50px;
  height: 50px;
}

.logo-title {
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
}

.rightboxcontainer {
  width: 770px;
  height: 780px;
  margin-top: 70px;
}

.leftboxcontainer {
  width: 600px;
  height: 750px;
  margin-left: 70px;
  margin-top: 70px;
}

.boxcontainer {
  width: 100%;
  height: 930px;
  display: flex;
  border-radius: 40px;
  margin-top: 200px;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0 4px 6px -2px;
}

.containercontact {
  width: 90%;
  height: 1000px;
  margin: 0 auto;
}

.navigatorcontact {
  width: 100%;
  height: 450px;
  background-image: url(../../assets/Contact/contactnav.webp);
  background-repeat: no-repeat;
  background-size: cover;
}

.navigatorcontact img {
  width: 100%;
  height: 100%;
}
</style>
