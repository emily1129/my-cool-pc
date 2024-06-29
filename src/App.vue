<template>
  <div id="app" class="overflow-auto scroll-smooth">
    <AppHeader
      class="w-full h-16 px-32 md:px-4 z-50"
      :search-query="searchQuery"
      :filtered-items="filteredItems"
      @search="handleSearch"
    />
    <div class="flex w-10/12 m-auto space-x-2">
      <router-view :filtered-items="filteredItems" :unique-brands="uniqueBrands" />
    </div>
    <portal-target name="modal" multiple />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import mockData from "@/mockData"; // Ensure this path is correct

export default {
  name: "App",
  components: { AppHeader },
  data() {
    return {
      searchQuery: "",
      items: [],
      filteredItems: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.items = mockData;

      // starts as an empty array
      this.filteredItems = [];

      // Extract unique brands
      const brands = new Set();
      this.items.forEach((category) => {
        category.items.forEach((item) => {
          brands.add(item.brand);
        });
      });

      // Convert Set to Array and assign to a data property
      this.uniqueBrands = Array.from(brands);

      console.log(this.uniqueBrands, this.items);
    },
    handleSearch({ query }) {
      console.log(query);
      this.searchQuery = query;
      this.filterItems();
    },
    filterItems() {
      // 
      const allItems = [];
      this.items.forEach((category) => {
        allItems.push(...category.items);
      });
      if (this.searchQuery) {
        // console.log(JSON.stringify(this.items));
        this.filteredItems = allItems.filter(
          (item) =>
            (item.title &&
              item.title
                .toLowerCase()
                .includes(this.searchQuery.toLowerCase())) ||
            (item.brand &&
              item.brand.toLowerCase().includes(this.searchQuery.toLowerCase()))
        );
      } else {
        this.filteredItems = allItems;
        console.log("Your Item does not exist.");
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (from.name === "ItemDetail" && vm.selectedCategory) {
        vm.$router.push({
          name: "Category",
          params: { categoryName: vm.selectedCategory.name },
        });
      }
    });
  },
};
</script>

<style>
.home-bg {
  /* background-color: rgb(246, 248, 246); */
}
</style>
