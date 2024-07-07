<template>
  <div class="h-auto">
    <button
      @click="toggleCheckbox"
      class="flex justify-between items-center w-full sidebar-style"
    >
      <div class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 transition-transform duration-300 my-auto mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
          />
        </svg>

        Brand
      </div>
      <svg
        :class="{ 'transform rotate-180': isCheckboxOpen }"
        class="w-5 h-5 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </button>
    <ul
      v-if="isCheckboxOpen"
      class="border border-slate-200 bg-white dark:border-slate-600 dark:bg-slate-800 px-4"
    >
      <li
        v-for="(filter, index) in uniqueBrands"
        :key="index"
        class="flex items-center space-x-2 py-2"
      >
        <input
          type="checkbox"
          :id="filter"
          v-model="selectedFilters"
          :value="filter"
          class="form-checkbox h-4 w-4  text-slate-900 dark:text-slate-200"
        />
        <label :for="filter" class=" text-slate-900 dark:text-slate-200">{{ filter }}</label>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    uniqueBrands: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isCheckboxOpen: true,
      selectedFilters: [],
    };
  },
  watch: {
    selectedFilters(newFilters) {
      this.updateRoute(newFilters);
      this.$emit("brand-changed", newFilters);
    },
  },
  methods: {
    toggleCheckbox() {
      this.isCheckboxOpen = !this.isCheckboxOpen;
    },
    updateRoute(filters) {
      this.$router.push({
        query: { ...this.$route.query, brand: filters.join(",") },
      });
    },
  },
};
</script>
<style scoped>
.form-checkbox {
  appearance: none;
  border-radius: 0.25rem;
  border: 1.5px solid #374151;
  cursor: pointer;
}

.dark .form-checkbox {
  border: 1.5px solid #94a3b8;
}

.form-checkbox:checked {
  @apply bg-pc-dark-blue border-pc-dark-blue bg-center;
  background-size: 0.65rem;
}
.dark .form-checkbox:checked {
  @apply bg-sky-500 border-sky-500 bg-center;
  background-size: 0.65rem;
}
</style>
