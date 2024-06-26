<template>
  <div class="w-full space-y-4 mx-auto flex md:flex-col">
    <AppSidebar
      :categories="categories"
      :category-name="categoryName"
      @category-selected="handleCategorySelected"
      class="w-1/4 md:w-full h-auto m-3 md:mx-0"
    />
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
        <SortSelect v-model="category.selectedSort" />
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
                @click="
                  () => {
                    itemModal = true;
                  }
                "
              />
            </div>
          </div>
          <div
            v-if="showSeeMoreButton(category)"
            class="flex justify-center mt-4"
          >
            <button
              @click="seeMore(category)"
              class="border rounded-full px-3 py-2 border-zinc-500 text-xs text-zinc-700 shadow ease-in hover:bg-zinc-800 hover:text-zinc-100 hover:shadow-lg transition-shadow transform duration-400"
            >
              See More...
            </button>
          </div>
        </template>
        <template v-else>
          <div class="mx-auto">暫無更多商品</div>
        </template>
      </div>
    </div>
    <ItemModal
      :toggle="itemModal"
      :backdrop="
        () => {
          itemModal = false;
        }
      "
    />
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard";
import ItemModal from "@/components/ItemModal";
import SortSelect from "@/components/SortSelect";
import AppSidebar from "@/components/AppSidebar";
import ItemSkeleton from "../components/ItemSkeleton";
import mockData from "@/mockData";

export default {
  name: "AppHome",
  components: {
    ItemCard,
    ItemModal,
    SortSelect,
    ItemSkeleton,
    AppSidebar,
  },
  data() {
    return {
      selectedSort: "title-asc",
      itemModal: false,
      isLoading: true,
      categories: [],
      categoryName: "",
      SelectedCategory: null,
    };
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
    this.fetchCategories(this.categoryName);
  },
  watch: {
    categoryId: {
      immediate: true,
      handler(newCategoryId) {
        if (newCategoryId && this.categories.length > 0) {
          console.log(this.SelectedCategory);
          this.SelectedCategory = this.categories.find(
            (category) => category.id === newCategoryId
          );
        }
      },
    },
  },
  methods: {
    handleCategorySelected(categoryName) {
      this.isLoading = true;
      this.fetchCategories(categoryName);
      this.updateURL(categoryName);
    },
    fetchCategories(categoryName = null) {
      setTimeout(() => {
        this.categories = mockData.map((category) => ({
          ...category,
          items: this.sortItems(category.items, "title-asc"), // Sort items initially
          selectedSort: "title-asc",
          limit: 4, // Initialize limit
        }));
        this.isLoading = false;
        if (categoryName) {
          this.SelectedCategory = this.categories.find(
            (category) => category.name === categoryName
          );
        }
      }, 2000);
    },
    updateURL(categoryName) {
      this.$router.push({ query: { category: categoryName } });
    },
    openItemModal(item) {
      this.itemModal = true;
      console.log(item);
    },
    getLimitedItems(category) {
      const sortedItems = this.sortedItems(category);
      return sortedItems.slice(0, category.limit);
    },
    showSeeMoreButton(category) {
      return category.items.length > category.limit;
    },
    seeMore(category) {
      category.limit += 4;
    },
    sortItems(items, selectedSort) {
      if (selectedSort === "title-asc") {
        return items.sort((a, b) => a.title.localeCompare(b.title));
      } else if (selectedSort === "title-desc") {
        return items.sort((a, b) => b.title.localeCompare(a.title));
      } else if (selectedSort === "price-asc") {
        return items.sort((a, b) => a.price - b.price);
      } else if (selectedSort === "price-desc") {
        return items.sort((a, b) => b.price - a.price);
      }
      return items;
    },
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
