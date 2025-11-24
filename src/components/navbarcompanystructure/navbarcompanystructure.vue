<template>
  <nav>
         <router-link 
      to="/companystructure"
      class="nav-link"
      active-class="active"
    >
      ໂຄງຮ່າງການຈັດຕັ້ງ
    </router-link>
     <router-link 
      to="/companystructure/ceo-coo"
      class="nav-link"
      active-class="active"
    >
      ຄະນະອຳນວຍການ
    </router-link>
    <router-link 
      to="/companystructure/office"
      class="nav-link"
      active-class="active"
    >
      ພະແນກຫ້ອງການ
    </router-link>

    <router-link 
      to="/companystructure/finance"
      class="nav-link"
      active-class="active"
    >
      ພະແນກບັນຊີ ແລະ ການເງິນ
    </router-link>

    <router-link 
      to="/companystructure/it"
      class="nav-link"
      active-class="active"
    >
      ພະແນກໄອທີ
    </router-link>

    <router-link 
      to="/companystructure/operation"
      class="nav-link"
      active-class="active"
    >
      ພະແນກດຳເນີນງານ
    </router-link>

    <router-link 
      to="/companystructure/audit"
      class="nav-link"
      active-class="active"
    >
      ພະແນກກວດສອບພາຍໃນ
    </router-link>
  </nav>
</template>

<script setup>

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
