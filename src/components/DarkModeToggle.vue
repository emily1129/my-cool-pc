<template>
  <div class="dark-mode-toggle" @click="toggleTheme">
    <span class="toggle-label">Dark Mode</span>
    <div class="toggle-switch" :class="{ 'dark-mode-active': isDarkMode }">
      <div
        class="toggle-circle"
        :class="{ 'circle-dark-mode': isDarkMode }"
      ></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: 'DarkModeToggle',
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

.toggle-label {
  margin-right: 8px;
  font-size: 18px;
  color: #fff;
}

.toggle-switch {
  width: 50px;
  height: 25px;
  background: #ccc;
  border-radius: 25px;
  position: relative;
  transition: background 0.3s;
}

.toggle-switch .toggle-circle {
  width: 23px;
  height: 23px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 1px;
  left: 1px;
  transition: left 0.3s;
}

.toggle-switch.dark-mode-active {
  background: #4a90e2;
}

.toggle-switch .circle-dark-mode {
  left: 26px;
}
body.dark {
  --bg-color: #333;
  --text-color: #fff;
  --border-color: #555;
}

body.light {
  --bg-color: #fff;
  --text-color: #000;
  --border-color: #ddd;
}
</style>
