<template>
  <header class="lap-navbar">
    <!-- Left: logo area -->
    <div class="lap-navbar__left">
      <!-- Replace with your own logo paths -->
      <img
        src="../../assets/navbar-bg.png"
        alt="LAP Net logo"
        class="lap-navbar__logo-circle"
      />
      <img
        src="../../assets/navbar-bg.png"
        alt="LAP Net"
        class="lap-navbar__logo-text"
      />
    </div>

    <!-- Blue diagonal -->
    <div class="lap-navbar__triangle"></div>

    <!-- Right: nav area -->
    <div class="lap-navbar__right">
      <!-- Hamburger (mobile) -->
      <button
        class="lap-navbar__toggle"
        @click="isOpen = !isOpen"
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Nav links -->
      <nav :class="['lap-navbar__nav', { 'lap-navbar__nav--open': isOpen }]">
        <a href="#" class="lap-navbar__link">
          ຜະລິດຕະພັນ ແລະ ງານບໍລິການ
          <span class="lap-navbar__caret">▾</span>
        </a>
        <a href="#" class="lap-navbar__link">
          ສະມາຊິກ
          <span class="lap-navbar__caret">▾</span>
        </a>
        <a href="#" class="lap-navbar__link">
          ຂ່າວສານ ແລະ ກິດຈະກຳ
        </a>
        <a href="#" class="lap-navbar__link">
          ຮ່ວມງານກັບເຮົາ
        </a>
        <a href="#" class="lap-navbar__link">
          ພວກເຮົາ
          <span class="lap-navbar__caret">▾</span>
        </a>
        <a href="#" class="lap-navbar__link">
          ຕິດຕໍ່ພວກເຮົາ
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style scoped>
/* Layout container */
.lap-navbar {
  display: flex;
  align-items: stretch;
  width: 100%;
  background: #ffffff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  border-bottom: 1px solid #d9d9d9;
}

/* Left logo block */
.lap-navbar__left {
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: #ffffff;
  gap: 1rem;
  z-index: 2;
}

.lap-navbar__logo-circle {
  height: 64px;
  width: 64px;
  object-fit: contain;
}

.lap-navbar__logo-text {
  height: 42px;
  object-fit: contain;
}

/* Blue diagonal section */
.lap-navbar__triangle {
  width: 130px;
  background: #0338a6; /* adjust to your blue */
  clip-path: polygon(0 0, 100% 0, 0 100%);
}

/* Right (dark) nav area */
.lap-navbar__right {
  flex: 1;
  display: flex;
  align-items: center;
  background: #010921; /* deep navy */
  color: #ffffff;
  position: relative;
  padding-right: 1.25rem;
}

/* Desktop nav */
.lap-navbar__nav {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  gap: 2.5rem;
  font-size: 1rem;
  white-space: nowrap;
}

.lap-navbar__link {
  color: #ffffff;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  letter-spacing: 0.02em;
}

.lap-navbar__link:hover {
  text-decoration: underline;
}

.lap-navbar__caret {
  font-size: 0.75em;
}

/* Hamburger button (hidden on desktop) */
.lap-navbar__toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  border: none;
  background: transparent;
  padding: 0;
  margin-left: auto;
  cursor: pointer;
}

.lap-navbar__toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: #ffffff;
}

/* ---------- Responsive ---------- */

@media (max-width: 900px) {
  .lap-navbar__triangle {
    display: none;
  }

  .lap-navbar__right {
    padding: 0 1rem;
  }

  .lap-navbar__nav {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    background: #010921;
    flex-direction: column;
    gap: 0;
    padding: 0.5rem 1rem 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: none;
  }

  .lap-navbar__nav--open {
    display: flex;
  }

  .lap-navbar__link {
    padding: 0.5rem 0;
  }

  .lap-navbar__toggle {
    display: flex;
  }
}

@media (max-width: 600px) {
  .lap-navbar__left {
    padding: 0.5rem 1rem;
  }

  .lap-navbar__logo-circle {
    height: 52px;
    width: 52px;
  }

  .lap-navbar__logo-text {
    height: 34px;
  }
}
</style>
