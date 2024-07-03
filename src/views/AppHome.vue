<template>
  <div class="w-full space-y-4 mx-auto flex md:flex-col">
    <div class="w-1/4 md:w-full h-auto mr-2 md:mx-0 sticky top-0">
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
    <!-- Loading Skeleton -->
    <ItemSkeleton v-if="isLoading" class="w-3/4 mx-auto transform space-y-5" />

    <!-- Main Content -->
    <div v-else class="w-3/4 md:w-full mx-auto transform space-y-5">
      <div
        v-for="category in displayedCategories"
        :key="category.id"
        class="mb-6"
      >
        <div class="border-b border-slate-500 mb-4">
          <h4 class="category-name">{{ category.name }}</h4>
        </div>
        <div class="flex md:flex-col justify-start">
          <SortSelect v-model="category.selectedSort" :id="category.id" />
          <PriceSlider
            :maxPrice="getMaxPrice(category)"
            @price-changed="
              (priceRange) => handleCategoryPriceChange(priceRange, category.id)
            "
            :id="category.id"
          />
        </div>
        <template v-if="category.items.length">
          <div class="flex content-start flex-wrap max-w-6xl m-auto">
            <div
              v-for="item in getLimitedItems(category)"
              :key="item.id"
              class="w-1/4 lg:w-1/3 md:w-1/2 sm:w-full p-3"
            >
              <ItemCard
                class="cursor-pointer"
                v-bind="item"
                :id="Number(item.id)"
              />
            </div>
          </div>
          <div
            v-if="showSeeMoreButton(category)"
            class="flex justify-center mt-4"
          >
            <button
              @click="seeMore(category)"
              class="border rounded-full px-3 py-2 text-slate-700 dark:text-slate-300 dark:hover:text-slate-900 text-xs border-slate-500 hover:bg-slate-300 shadow hover:shadow-lg ease-in transition-shadow transform duration-300"
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
</template>

<script>
import ItemCard from "@/components/ItemCard";
import SortSelect from "@/components/SortSelect";
import CategorySelection from "@/components/CategorySelection";
import BrandCheckbox from "@/components/BrandCheckbox";
import PriceSlider from "@/components/PriceSlider";
import ItemSkeleton from "@/components/ItemSkeleton";
import mockData from "@/mockData";

export default {
  name: "AppHome",
  components: {
    ItemCard,
    SortSelect,
    ItemSkeleton,
    CategorySelection,
    BrandCheckbox,
    PriceSlider,
  },
  data() {
    return {
      isLoading: true,
      categories: [],
      SelectedCategory: null,
      uniqueBrands: [],
      selectedPrice: [1, 10000],
      categoryPriceRanges: {}, // Store price ranges for each category
    };
  },
  props: {
    categoryName: {
      type: String,
      default: null,
    },
  },
  computed: {
    displayedCategories() {
      if (this.SelectedCategory) {
        return [this.SelectedCategory];
      }
      return this.categories;
    },
    sortedItems() {
      return (category) => {
        if (category.selectedSort === "title-asc") {
          return [...category.items].sort((a, b) =>
            a.title.localeCompare(b.title)
          );
        } else if (category.selectedSort === "title-desc") {
          return [...category.items].sort((a, b) =>
            b.title.localeCompare(a.title)
          );
        } else if (category.selectedSort === "price-asc") {
          return [...category.items].sort((a, b) => a.price - b.price);
        } else if (category.selectedSort === "price-desc") {
          return [...category.items].sort((a, b) => b.price - a.price);
        }
        return category.items;
      };
    },
  },
  mounted() {
    this.fetchData();
  },
  watch: {
    categoryName(newCategoryName) {
      if (newCategoryName && this.categories.length > 0) {
        this.SelectedCategory = this.categories.find(
          (category) => category.name === newCategoryName
        );
      }
    },
  },
  methods: {
    fetchData() {
      setTimeout(() => {
        this.categories = mockData.map((category) => ({
          ...category,
          items: [...category.items], // fetch without any filter/sorting
          selectedSort: "title-asc",
          limit: 4,
        }));

        this.uniqueBrands = [
          ...new Set(
            this.categories.flatMap((category) =>
              category.items.map((item) => item.brand)
            )
          ),
        ];

        this.isLoading = false;
      }, 2000);
    },
    handleCategorySelected(categoryName) {
      this.SelectedCategory = this.categories.find(
        (category) => category.name === categoryName
      );
      this.updateURL(categoryName);
    },
    handleBrandSelection(selectedBrands) {
      this.categories.forEach((category) => {
        if (selectedBrands.length === 0) {
          // show all items if no brands are selected
          category.items = mockData.find(
            (data) => data.id === category.id
          ).items;
        } else {
          // otherwise filter items by selected brands
          category.items = mockData
            .find((data) => data.id === category.id)
            .items.filter((item) => selectedBrands.includes(item.brand));
        }
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
      const categoryMaxValue = Math.max(...category.items.map(item => item.price))
      return categoryMaxValue;
    }
  },
};
</script>

<style scoped>
@import "../assets/css/index.css";

.dropdown:hover .dropdown-menu {
  display: block;
}

.filter:hover,
.filter.active {
  @apply bg-pc-dark-blue text-white;
}
.category-name {
  @apply max-w-6xl m-auto text-2xl font-medium p-4;
  /* color: rgba(var(--copy-primary)); */
  color: rgba(var(--neutral-light));
}

.dark-body {
  @apply block text-sm font-medium mr-3;
  color: rgba(var(--slate-body));
}
</style>
