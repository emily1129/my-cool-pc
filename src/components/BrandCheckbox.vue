<template>
  <div class="h-auto mx-5 md:mx-1">
    <button
      @click="toggleCheckbox"
      class="flex justify-between items-center w-full bg-neutral-50 text-left text-lg font-bold border border-slate-200 text-slate-800 hover:text-sky-600 p-3 shadow-sm dark:border dark:border-slate-500 dark:bg-slate-800 dark:text-white"
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
      class="border-t border-slate-200 bg-white dark:border dark:border-slate-500 dark:bg-slate-800 p-4"
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
          class="form-checkbox h-5 w-5 text-blue-600"
        />
        <label :for="filter" class="text-slate-800 dark:text-slate-300">{{ filter }}</label>
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
      this.$emit("filters-changed", newFilters);
    },
  },
  methods: {
    toggleCheckbox() {
      this.isCheckboxOpen = !this.isCheckboxOpen;
    },
  },
};
</script>
<style scoped>
.form-checkbox {
  appearance: none;
  border-radius: 0.25rem;
  border: 2px solid #d1d5db;
  background-color: transparent;
  transition: background-color 150ms, border-color 150ms;
  cursor: pointer;
}

.form-checkbox:checked {
  background-color: #3b82f6;
  border-color: #3b82f6;
  background-image: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTEwIDE2bDctNy0yLTJhNiA2IDAgMCAxIDAtMTIgMCA2IDYgMCAwIDEgMiA0bDEgMWwtNSA1eiIvPjwvc3ZnPg==");
  background-size: 0.65rem;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
