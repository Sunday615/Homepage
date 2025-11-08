<template>
  <div class="button-container">
    <button class="nav-btn" @click="prevPage">Prev</button>

    <div class="button-group">
      <!-- ปุ่ม Page 1 -->
      <router-link
        to="/membermobilebanking/member2_1"
        class="btn"
        :class="{ active: $route.path === '/membermobilebanking/member2_1' }"
      >
        Page 1
      </router-link>

      <!-- ปุ่ม Page 2 -->
      <router-link
        to="/membermobilebanking/member2_2"
        class="btn"
        :class="{ active: $route.path === '/membermobilebanking/member2_2' }"
      >
        Page 2
      </router-link>
      <router-link
        to="/membermobilebanking/member2_3"
        class="btn"
        :class="{ active: $route.path === '/membermobilebanking/member2_3' }"
      >
        Page 3
      </router-link>
    </div>

    <button class="nav-btn" @click="nextPage">Next</button>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// รายชื่อ path
const pages = ['/membermobilebanking/member2_1' ,'/membermobilebanking/member2_2','/membermobilebanking/member2_3']


function nextPage() {
  const currentIndex = pages.indexOf(route.path)
  const nextIndex = (currentIndex + 1) % pages.length
  router.push(pages[nextIndex])
}

function prevPage() {
  const currentIndex = pages.indexOf(route.path)
  const prevIndex = (currentIndex - 1 + pages.length) % pages.length
  router.push(pages[prevIndex])
}
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 50px;
  width: 100%;
  height: 200px;

}

/* กลุ่มปุ่ม */
.button-group {
  display: flex;
  border-radius: 8px;
  overflow: hidden;
}

/* ปุ่ม router-link */
.btn {
  background: transparent;
  border: 2px solid #433bff;
  color: #433bff;
  padding: 10px 25px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  width: 150px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-right: none;
  transition: all 0.3s ease;
}

.btn:last-child {
  border-right: 2px solid #433bff;
}

/* hover */
.btn:hover {
  background: #433bff;
  color: white;
}

/* active (หน้าอยู่ปัจจุบัน) */
.btn.active {
  background: #433bff;
  color: white;
}

/* ปุ่ม Prev / Next */
.nav-btn {
  background: #433bff;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
  transition: background 0.3s ease;
}

.nav-btn:hover {
  background: #2a23d0;
}
</style>