<template>
  <div class="dark-mode-toggle" @click="toggleTheme">
    <div class="icon-container">
      <span class="tooltip">
        <svg
          v-if="isDarkMode"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
        <span class="tooltiptext text-xs">Switch to Light Mode</span>
      </span>
      <span class="tooltip">
        <svg
          v-if="!isDarkMode"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
        <span class="tooltiptext text-xs">Switch to Dark Mode</span>
      </span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "DarkModeToggle",
  setup() {
    const isDarkMode = ref(false);

    const toggleTheme = () => {
      isDarkMode.value = !isDarkMode.value;
      if (isDarkMode.value) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    };

    onMounted(() => {
      const selectedTheme = localStorage.getItem("theme");
      if (selectedTheme) {
        document.body.classList.add(selectedTheme);
        isDarkMode.value = selectedTheme === "dark";
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark");
        isDarkMode.value = true;
      } else {
        document.body.classList.add("light");
      }
    });

    return {
      isDarkMode,
      toggleTheme,
    };
  },
};
</script>

<style scoped>
.dark-mode-toggle {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.icon-container {
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  width: 24px;
  height: 24px;
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #f1f5f9;
  color: #334155;
  text-align: center;
  border-radius: 6px;
  padding: 4px 0;
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: 120%;
  left: 50%;
  margin-left: -60px;
}
.tooltip .tooltiptext:nth-of-type(1) {
  top: 30px;
}

.tooltip .tooltiptext:nth-of-type(2) {
  top: 40px;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
