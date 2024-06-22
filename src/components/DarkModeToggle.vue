<template>
  <button @click="toggleTheme" class="toggle-button">
    Toggle Theme
  </button>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const isDarkMode = ref(false);

    const toggleTheme = () => {
      isDarkMode.value = !isDarkMode.value;
      if (isDarkMode.value) {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    };

    onMounted(() => {
      const selectedTheme = localStorage.getItem('theme');
      if (selectedTheme) {
        document.body.classList.add(selectedTheme);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.add('light');
      }
    });

    return {
      toggleTheme,
    };
  },
};
</script>

<style scoped>
.toggle-button {
  background-color: var(--bg-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
