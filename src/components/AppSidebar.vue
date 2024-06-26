<template>
  <div class="h-auto bg-white">
    <button
      @click="toggleMainCategory"
      class="w-full text-left text-lg font-bold border-t border-b border-gray-300 p-3 flex justify-between items-center"
    >
      Category
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
    <ul v-if="isMainCategoryOpen" class="border-t border-gray-200 bg-white shadow-lg">
      <li
        v-for="category in categories"
        :key="category.id"
        class="border-b border-gray-200"
      >
        <button
          @click="selectCategory(category)"
           :class="{'bg-pc-dark-blue text-white': activeCategory && activeCategory.id === category.id}"
          class="w-full text-left px-4 py-2 flex justify-between items-center"
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

export default {
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
      this.$emit('category-selected', category.name);
    },
  },
watch: {
    $route(to) {
      if (to.query.category) {
        this.activeCategory = this.categories.find(category => category.name === to.query.category);
      }
    },
    categoryName(newCategoryName) {
      if (newCategoryName) {
        this.activeCategory = this.categories.find(category => category.name === newCategoryName);
      }
    },
  },
  mounted() {
    if (this.$route.query.category) {
      this.activeCategory = this.categories.find(category => category.name === this.$route.query.category);
    }
  },
};

</script>

<style scoped></style>
