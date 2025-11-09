<template>
  <nav>
    <a 
      href="/director0"
      :class="{ active: activeItem === 'Home' }"
      @click.prevent="setActive('Home')"
    >
      ຄະນະສະພາຜູ້ບໍລິຫານ
    </a>

    <a 
      href="/director1"
      :class="{ active: activeItem === 'director1' }"
      @click.prevent="setActive('director1')"
    >
      ຄະນະກຳມະການກວດກາ
    </a>

    <a 
      href="/director2"
      :class="{ active: activeItem === 'director2' }"
      @click.prevent="setActive('director2')"
    >
      ຄະນະກຳມະການຄົ້ນຄວ້ານະໂຍບາຍ
    </a>

    <a 
      href="/director3"
      :class="{ active: activeItem === 'director3' }"
      @click.prevent="setActive('director3')"
    >
      ຄະນະກຳມະການຄຸ້ມຄອງຄວາມສ່ຽງ
    </a>
    <a 
      href="/director4"
      :class="{ active: activeItem === 'director4' }"
      @click.prevent="setActive('director4')"
    >
      ຄະນະກຳມະການຕິດຕາມການພັດທະນາລະບົບ
    </a>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const activeItem = ref('Home')

function setActive(name) {
  activeItem.value = name
  // ตัวอย่าง: ถ้าอยากให้ไปหน้าจริงใน Vue Router
  router.push(`/${name.toLowerCase()}`)
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 70px;
  padding: 20px;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

a {
  position: relative;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding-bottom: 5px;
  transition: color 0.3s ease;
  font-size: 22px;
     font-family: "Noto Sans Lao", sans-serif;
}

/* เส้น gradient */
a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 3px;
  background: linear-gradient(90deg, #47a6ff, #002de3);
  transition: width 0.3s ease;
  border-radius: 2px;
}

/* แสดงตอน hover */
a:hover::after {
  width: 100%;
}

/* แสดงตอน active */
a.active::after {
  width: 100%;
}

/* เปลี่ยนสีข้อความเมื่อ hover */
a:hover {
  color: #002de3;
}
</style>