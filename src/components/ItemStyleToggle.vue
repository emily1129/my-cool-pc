<template>
  <div
    class="flex text-slate-700 justify-center items-center h-8 border border-slate-300 dark:border-slate-400 bg-neutral-100 dark:bg-slate-800 rounded-lg overflow-hidden"
  >
    <button
      @click="toggleView('list')"
      :class="['toggle-button', viewMode === 'list' ? 'active' : '']"
      class="flex items-center justify-center w-24 h-12"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
    </button>
    <button
      @click="toggleView('card')"
      :class="['toggle-button', viewMode === 'card' ? 'active' : '']"
      class="flex items-center justify-center w-24 h-12"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "ItemStyleToggle",
  data() {
    return {
      viewMode: "card", // Default view mode
    };
  },
  methods: {
    toggleView(mode) {
      this.viewMode = mode;
      this.$emit("view-mode-changed", mode);
    },
  },
};
</script>

<style scoped>
.toggle-button {
  @apply text-slate-800 dark:text-slate-300 border-slate-300 dark:border-slate-400;
  transition: background-color 0.3s ease;
}

.toggle-button.active {
  @apply text-slate-100 dark:text-slate-700 dark:bg-slate-400;
  background-color: var(--pc-dark-blue);
}

.toggle-button:hover {
  @apply text-slate-300;
  background-color: #1b2459c7;
}
</style>
