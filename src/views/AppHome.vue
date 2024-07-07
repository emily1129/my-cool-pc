<template>
  <div class="w-full mx-auto flex md:flex-col">
    <div class="w-1/4 md:w-full h-auto mr-10 md:mx-0 space-y-6 md:mb-3">
      <!-- Left Sidebar -->
      <CategorySelection
        :categories="categories"
        :category-name="categoryName"
        @category-selected="handleCategorySelected"
      />
      <BrandCheckbox
        :unique-brands="uniqueBrands"
        @filters-changed="handleBrandSelection"
      />
    </div>

    <div class="w-3/4 md:w-full mx-auto transform space-y-5">
      <!-- Loading Skeleton -->
      <ItemSkeleton v-if="isLoading" class="py-3" />

      <!-- Main Content -->
      <div v-else>
        <div
          v-for="category in displayedCategories"
          :key="category.id"
        >
          <div class="border-b border-slate-500 mb-4">
            <p
              class="p-2 text-3xl font-semibold text-slate-900 dark:text-slate-200 tracking-wide"
            >
              {{ category.name }}
            </p>
          </div>
          <div class="flex md:flex-col justify-start">
            <SortSelect v-model="category.selectedSort" :id="category.id" />
            <PriceSlider
              :maxPrice="getMaxPrice(category)"
              @price-changed="
                (priceRange) =>
                  handleCategoryPriceChange(priceRange, category.id)
              "
              :id="category.id"
            />
          </div>
          <template v-if="category.items.length">
            <div class="flex flex-wrap m-auto">
              <div
                v-for="item in getLimitedItems(category)"
                :key="item.id"
                class="w-1/4 lg:w-1/3 md:w-1/2 sm:w-full p-3"
              >
                <ItemCard
                  class="cursor-pointer"
                  v-bind="item"
                  :category-name="category.name"
                  :id="Number(item.id)"
                  @show-message="showSuccessAlert"
                />
              </div>
            </div>
            <div
              v-if="showSeeMoreButton(category)"
              class="flex justify-center mt-4"
            >
              <button
                @click="seeMore(category)"
                class="m-2 px-2 py-1 rounded-md hover:shadow-lg text-xs text-slate-600 dark:text-slate-400 dark:hover:text-slate-100 border border-slate-400 dark:hover:border-slate-100 ease-in transition-shadow transform duration-200"
              >
                See More...
              </button>
            </div>
          </template>
          <template v-else>
            <div class="max-w-6xl text-center dark:text-slate-300">
              No Matching Results!
            </div>
          </template>
        </div>
      </div>
    </div>
    <ShowMessage v-if="showSuccess" :duration="3000" />
    <button
      @click="scrollToTop"
      class="fixed bottom-6 right-6 border border-blue-500 text-blue-500 p-4 py-2 shadow-lg hover:text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-indigo-600 focus:outline-none"
    >
      ↑
    </button>
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard";
import SortSelect from "@/components/SortSelect";
import CategorySelection from "@/components/CategorySelection";
import BrandCheckbox from "@/components/BrandCheckbox";
import PriceSlider from "@/components/PriceSlider";
import ItemSkeleton from "@/components/ItemSkeleton";
import ShowMessage from "@/components/SuccessMessage.vue";
import mockData from "@/mockData";
import { mapState, mapActions } from "vuex";

export default {
  name: "AppHome",
  components: {
    ItemCard,
    SortSelect,
    ItemSkeleton,
    CategorySelection,
    BrandCheckbox,
    PriceSlider,
    ShowMessage,
  },
  data() {
    return {
      isLoading: true,
      categories: [],
      uniqueBrands: [],
      categoryPriceRanges: {}, // price ranges for each category
      showSuccess: false,
    };
  },
  props: {
    categoryName: {
      type: String,
      default: null,
    },
  },
  computed: {
    ...mapState(["activeCategory"]),
    displayedCategories() {
      return this.activeCategory
        ? this.categories.filter(
            (category) => category.name === this.activeCategory
          )
        : this.categories;
    },
    sortedItems() {
      return (category) => {
        const sortFunctions = {
          "title-asc": (a, b) => a.title.localeCompare(b.title),
          "title-desc": (a, b) => b.title.localeCompare(a.title),
          "price-asc": (a, b) => a.price - b.price,
          "price-desc": (a, b) => b.price - a.price,
        };
        return [...category.items].sort(sortFunctions[category.selectedSort]);
      };
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions(["setActiveCategory"]),
    fetchData() {
      setTimeout(() => {
        this.categories = mockData.map((category) => ({
          ...category,
          items: [...category.items], // fetch without any filter/sorting
          selectedSort: "title-asc",
          limit: 4,
        }));

        // for dynamic brand checkbox
        this.uniqueBrands = [
          ...new Set(
            this.categories.flatMap((category) =>
              category.items.map((item) => item.brand)
            )
          ),
        ];

        this.isLoading = false;
        if (this.categoryName) {
          this.setActiveCategory(this.categoryName);
        }
      }, 500);
    },
    handleCategorySelected(categoryName) {
      this.setActiveCategory(categoryName);
      this.updateURL(categoryName);
    },
    handleBrandSelection(selectedBrands) {
      this.categories.forEach((category) => {
        const items = mockData.find((data) => data.id === category.id).items;
        category.items = selectedBrands.length
          ? items.filter((item) => selectedBrands.includes(item.brand))
          : items;
      });
    },
    updateURL(categoryName) {
      this.$router.push({ name: "Category", params: { categoryName } });
    },
    getLimitedItems(category) {
      return this.sortedItems(category).slice(0, category.limit);
    },
    showSeeMoreButton(category) {
      return category.items.length > category.limit;
    },
    seeMore(category) {
      category.limit += 4;
    },
    handleCategoryPriceChange(newPrice, categoryId) {
      this.$set(this.categoryPriceRanges, categoryId, newPrice);
      this.filterItemsByCategoryPrice(newPrice, categoryId);
    },
    filterItemsByCategoryPrice([minPrice, maxPrice], categoryId) {
      const category = this.categories.find(
        (category) => category.id === categoryId
      );
      if (category) {
        category.items = mockData
          .find((data) => data.id === category.id)
          .items.filter(
            (item) => item.price >= minPrice && item.price <= maxPrice
          );
      }
    },
    getMaxPrice(category) {
      const categoryMaxValue = Math.max(
        ...category.items.map((item) => item.price)
      );
      return categoryMaxValue;
    },
    showSuccessAlert() {
      this.showSuccess = true;
      setTimeout(() => (this.showSuccess = false), 3000);
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}

.filter:hover,
.filter.active {
  @apply bg-pc-dark-blue text-white;
}
</style>
