<template>
  <nav class="pagination-container" aria-label="Pagination">
    <!-- Prev -->
    <router-link
      :to="getPageLink(prevPage)"
      class="nav-btn"
      :class="{ disabled: isFirst }"
      :aria-disabled="isFirst ? 'true' : 'false'"
      tabindex="0"
    >
      Prev
    </router-link>

    <!-- ตัวเลขหน้า -->
    <div class="page-group">
      <router-link
        v-for="page in visiblePages"
        :key="page"
        :to="getPageLink(page)"
        class="page-btn"
        :class="{ active: page === currentPage }"
      >
        {{ page }}
      </router-link>

      <span v-if="showLeftEllipsis" class="dots">...</span>

      <!-- Always show first page if not included -->
      <router-link
        v-if="showFirst"
        :to="getPageLink(1)"
        class="page-btn"
        :class="{ active: currentPage === 1 }"
      >
        1
      </router-link>

      <!-- Middle (already rendered) -->

      <span v-if="showRightEllipsis" class="dots">...</span>

      <!-- Always show last page if not included -->
      <router-link
        v-if="showLast"
        :to="getPageLink(totalPages)"
        class="page-btn"
        :class="{ active: currentPage === totalPages }"
      >
        {{ totalPages }}
      </router-link>
    </div>

    <!-- Next -->
    <router-link
      :to="getPageLink(nextPage)"
      class="nav-btn"
      :class="{ disabled: isLast }"
      :aria-disabled="isLast ? 'true' : 'false'"
      tabindex="0"
    >
      Next
    </router-link>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  totalPages: { type: Number, default: 16 },
});

const route = useRoute();

/* currentPage อ่านจาก route param /page/:id */
const currentPage = computed(() => {
  const raw = route.params.id ?? route.params.pageId ?? "1";
  const n = parseInt(raw + "", 10);
  return isNaN(n) ? 1 : Math.min(Math.max(n, 1), props.totalPages);
});

/* boundaries */
const isFirst = computed(() => currentPage.value === 1);
const isLast = computed(() => currentPage.value === props.totalPages);
const prevPage = computed(() => Math.max(1, currentPage.value - 1));
const nextPage = computed(() => Math.min(props.totalPages, currentPage.value + 1));

/* visible page logic: show up to 3 in center (same logic as before but robust) */
const visiblePages = computed(() => {
  const t = props.totalPages;
  const c = currentPage.value;

  if (t <= 5) return Array.from({ length: t }, (_, i) => i + 1);

  // center window size 3
  if (c <= 3) return [1, 2, 3];
  if (c >= t - 2) return [t - 2, t - 1, t];
  return [c - 1, c, c + 1];
});

const showLeftEllipsis = computed(() => {
  // show "..." on left when first visible page > 2
  const firstVisible = visiblePages.value[0];
  return firstVisible > 2;
});
const showRightEllipsis = computed(() => {
  const lastVisible = visiblePages.value[visiblePages.value.length - 1];
  return lastVisible < props.totalPages - 1;
});
const showFirst = computed(() => visiblePages.value[0] !== 1);
const showLast = computed(() => visiblePages.value[visiblePages.value.length - 1] !== props.totalPages);

function getPageLink(page) {
  // always return a valid path (bounded)
  const p = Math.min(Math.max(Number(page) || 1, 1), props.totalPages);
  return `/page/${p}`;
}
</script>

<style scoped>
.pagination-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 20px 0;
  font-family: "Segoe UI", Tahoma, sans-serif;
}

/* Prev / Next */
.nav-btn {
  background-color: #6a21d9; /* purple */
  color: #fff;
  font-weight: 600;
  padding: 12px 34px;
  border-radius: 999px;
  text-decoration: none;
  transition: background-color 0.16s ease, transform 0.12s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.nav-btn:hover {
  background-color: #4f14b0;
  transform: translateY(-2px);
}

.nav-btn.disabled {
  opacity: 0.45;
  pointer-events: none;
  transform: none;
}

/* page group container */
.page-group {
  display: flex;
  align-items: center;
  background: #f0f0f0;
  border-radius: 999px;
  padding: 10px 18px;
  gap: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.03);
}

/* page buttons */
.page-btn {
  width: 44px;
  height: 44px;
  background: #ffffff;
  color: #333;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.12s ease, transform 0.12s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
}

.page-btn:hover {
  background-color: #eaeaea;
  transform: translateY(-2px);
}

.page-btn.active {
  background-color: #6a21d9;
  color: white;
  transform: translateY(-2px);
}

/* dots */
.dots {
  font-weight: 700;
  color: #666;
  font-size: 18px;
  padding: 0 4px;
}
</style>
