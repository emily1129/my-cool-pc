<template>
  <div class="h-auto">
    <button
      @click="toggleCategory"
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
            d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
          />
        </svg>
        Category
      </div>

      <svg
        :class="{ 'transform rotate-180': isCategoryOpen }"
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
      v-if="isCategoryOpen"
      class="border border-slate-200 bg-white dark:border-slate-600 dark:bg-slate-800"
    >
      <li
        v-for="category in categories"
        :key="category.id"
        class="border-b border-slate-200 dark:border-slate-600"
      >
        <button
          @click="selectCategory(category)"
          class="flex justify-between items-center w-full text-left px-4 py-2 text-slate-900 dark:text-slate-200 hover:text-slate-500 dark:hover:text-slate-400"
          :class="{
            activeCategory: activeCategory && activeCategory === category.name,
          }"
        >
          <div class="flex items-center">
            {{ category.name }}
          </div>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "CategorySelection",
  data() {
    return {
      isCategoryOpen: true,
    };
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
    categoryName: {
      type: String,
      required: false,
    },
  },
  computed: {
    ...mapState(["activeCategory"]),
    currentCategoryName() {
      return this.$route.query.category || this.categoryName
    },
  },
  watch: {
    currentCategoryName: {
      immediate: true,
      handler(newCategoryName) {
        this.setActiveCategory(newCategoryName);
      },
    },
  },
  methods: {
    ...mapActions(["setActiveCategory"]),
    toggleCategory() {
      this.isCategoryOpen = !this.isCategoryOpen;
    },
    selectCategory(category) {
      this.$router.push({ query: { category: category.name } });
      this.setActiveCategory(category.name);
      this.$emit("category-selected", category.name);
    },
  },
};
</script>

<style scoped>
.activeCategory {
  background-color: var(--pc-dark-blue);
  color: white;
}

.dark .activeCategory {
  background-color: #0ea5e9;
  color: white;
}
</style>
