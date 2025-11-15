<template>
  <div class="pagination"  @click="goTop()">
    <router-link
      :to="getPageLink(currentPage - 1)"
      class="nav-btn"
      :class="{ disabled: currentPage === 1 }"
    >
      Prev
    </router-link>

    <div class="pages" @click="goTop()">
      <router-link 
        v-for="page in totalPages"
        :key="page"
        :to="getPageLink(page)"
        class="page"
        :class="{ active: currentPage === page }"
      >
        {{ page }}
      </router-link>
    </div>

    <router-link
      :to="getPageLink(currentPage + 1)"
      class="nav-btn " 
      :class="{ disabled: currentPage === totalPages }"
      >
      Next
    </router-link>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  totalPages: { type: Number, default: 5 },
});

const route = useRoute();

// อ่านหมายเลขหน้า จาก path เช่น "/page/3" → 3
const currentPage = computed(() => {
  const match = route.path.match(/\/page\/(\d+)/);
  return match ? parseInt(match[1]) : 1;
});

function getPageLink(page) {
  if (page < 1) return "/page/1";
  if (page > props.totalPages) return `/page/${props.totalPages}`;
  return `/page/${page}`;
}

function goTop() {
    window.scrollTo({ top: 660, behavior: 'smooth' })
}

</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  font-family: "Segoe UI", sans-serif;
}

/* ปุ่ม prev/next */
.nav-btn {
  background: #433bff;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 24px;
  border-radius: 999px;
  transition: all 0.2s ease;
}
.nav-btn:hover { background: #433bff; }
.nav-btn.disabled { opacity: 0.5; pointer-events: none; }

/* กล่องเลข */
.pages {
  display: flex;
  gap: 10px;
  background: #f2f2f2;
  border-radius: 999px;
  padding: 10px 20px;
}

/* ปุ่มเลข */
.page {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: white;
  color: #333;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
}
.page:hover { background: #e0e0e0; transform: translateY(-3px); }
.page.active {
  background: #433bff;
  color: white;
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(102, 16, 242, 0.3);
}
</style>
