<template>
  <div class="h-auto my-7 sticky">
    <button
      @click="toggleMainCategory"
      class="w-full bg-neutral-50 text-left text-lg font-bold border border-slate-300 text-slate-800 hover:text-lightBlue-600 p-3 flex justify-between items-center shadow-md hover:shadow-lg dark:border dark:border-slate-500 dark:bg-slate-800 dark:text-white"
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
        :class="{ 'transform rotate-180': isMainCategoryOpen }"
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
      v-if="isMainCategoryOpen"
      class="border-t border-slate-200 bg-white shadow-lg dark:border dark:border-slate-500 dark:bg-slate-800"
    >
      <li
        v-for="category in categories"
        :key="category.id"
        class="border-b border-slate-200  dark:border-slate-600"
      >
        <button
          @click="selectCategory(category)"
          :class="{
            'bg-pc-dark-blue text-white dark:bg-sky-500':
              activeCategory && activeCategory.id === category.id,
          }"
          class="w-full text-left px-4 py-2 flex justify-between items-center"
        >
          <div class="flex items-center dark:text-slate-300">
            {{ category.name }}
          </div>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CategorySelection",
  data() {
    return {
      isMainCategoryOpen: true,
      isCategoryOpen: {},
      activeCategory: 0,
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
  methods: {
    toggleMainCategory() {
      this.isMainCategoryOpen = !this.isMainCategoryOpen;
    },
    selectCategory(category) {
      this.$router.push({ query: { category: category.name } });
      this.activeCategory = category;
      this.$emit("category-selected", category.name);
    },
  },
  watch: {
    $route(to) {
      if (to.query.category) {
        this.activeCategory = this.categories.find(
          (category) => category.name === to.query.category
        );
      }
    },
    categoryName(newCategoryName) {
      if (newCategoryName) {
        this.activeCategory = this.categories.find(
          (category) => category.name === newCategoryName
        );
      }
    },
  },
  mounted() {
    if (this.$route.query.category) {
      this.activeCategory = this.categories.find(
        (category) => category.name === this.$route.query.category
      );
    }
  },
};
</script>

<style scoped>
.bg-color {
  background: rgb(26, 32, 44);
}
.card-border-color {
  background-color: #06b6d4
}
</style>
