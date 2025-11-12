<template>
  <nav>
    <router-link 
      to="/board_of_director"
      class="nav-link"
      active-class="active"
    >
      ຄະນະສະພາຜູ້ບໍລິຫານ
    </router-link>

    <router-link 
      to="/board_of_director/member1"
      class="nav-link"
      active-class="active"
    >
      ຄະນະກຳມະການກວດກາ
    </router-link>

    <router-link 
      to="/board_of_director/member2"
      class="nav-link"
      active-class="active"
    >
      ຄະນະກຳມະການຄົ້ນຄວ້ານະໂຍບາຍ
    </router-link>

    <router-link 
      to="/board_of_director/member3"
      class="nav-link"
      active-class="active"
    >
      ຄະນະກຳມະການຄຸ້ມຄອງຄວາມສ່ຽງ
    </router-link>

    <router-link 
      to="/board_of_director/member4"
      class="nav-link"
      active-class="active"
    >
      ຄະນະກຳມະການຕິດຕາມການພັດທະນາລະບົບ
    </router-link>
  </nav>
</template>

<script setup>
// ไม่ต้อง import useRouter/useRoute เพราะใช้ router-link แล้ว
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

/* ตั้งชื่อ class ให้ router-link */
.nav-link {
  position: relative;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding-bottom: 5px;
  transition: color 0.3s ease;
  font-size: 22px;
  font-family: "Noto Sans Lao", sans-serif;
}

/* เส้น gradient ด้านล่าง */
.nav-link::after {
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

/* Hover effect */
.nav-link:hover::after {
  width: 100%;
}

/* Active link */
.nav-link.active::after {
  width: 100%;
}

.nav-link:hover {
  color: #002de3;
}
</style>
