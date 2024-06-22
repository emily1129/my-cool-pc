<template>
  <div class="w-full space-y-4 mx-auto">
    <div class="w-full mx-auto transform space-y-5">
      <div>
        <div v-for="category in categories" :key="category.id" class="mb-6">
          <div class="border-t border-b border-slate-500 mb-4">
            <h4 class="category-name">
              {{ category.name }}
            </h4>
          </div>

          <div class="flex items-center p-4 m-auto max-w-6xl">
            <label for="sort" class="dark-body">Sort by:</label>
            <select
              v-model="selectedSort"
              @change="sortItems"
              class="w-auto block px-2 py-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="title-asc">Title (A-Z)</option>
              <option value="title-desc">Title (Z-A)</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
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
                  :event-types="itemType"
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
                class="border-2 border-Gray-900 text-xs text-zinc-400 px-3 py-2 rounded-full shadow hover:shadow-lg ease-in transition-shadow hover:border-zinc-500 hover:border-1 transform duration-500"
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

export default {
  name: "AppHome",
  components: {
    ItemCard,
    ItemModal,
  },
  data() {
    return {
      selected: 0,
      selectedSort: "title-asc",
      itemModal: false,
      categories: [
        {
          id: "vr",
          name: "品牌小主機、AIO｜VR虛擬",
          limit: 4, // Initial limit of items to display
          items: [
            {
              title: "ASUS G22CH-714700004W i7-14700 / 8G DDR5 / 512G / WIN11",
              id: 1,
              imgSrc: "src/assets/cool-1.jpeg",
              price: 41990,
              isHotItem: true,
            },
            {
              title: "ASUS G22CH-714700004W i7-14700 / 8G DDR5 / 512G / WIN11",
              id: 2,
              imgSrc: "src/assets/cool-1.jpeg",
              price: 45990,
              isHotItem: true,
            },
            {
              title: "ASUS G22CH-714700004W i7-14700 / 8G DDR5 / 512G / WIN11",
              id: 3,
              imgSrc: "src/assets/cool-1.jpeg",
              price: 35990,
              isHotItem: false,
            },
            {
              title: "ASUS G22CH-714700004W i7-14700 / 8G DDR5 / 512G / WIN11",
              id: 4,
              imgSrc: "src/assets/cool-1.jpeg",
              price: 45790,
              isHotItem: false,
            },
            {
              title: "ASUS G22CH-714700004W i7-14700 / 8G DDR5 / 512G / WIN11",
              id: 5,
              imgSrc: "src/assets/cool-1.jpeg",
              price: 25990,
              isHotItem: true,
            },
          ],
        },
        {
          id: 2,
          name: "Category Two",
          limit: 4,
          items: [
            {
              id: 6,
              title: "Item 6",
              imgSrc: "src/assets/item-6.jpeg",
              price: 200,
              isHotItem: true,
            },
            {
              id: 7,
              title: "Item 7",
              imgSrc: "src/assets/item-7.jpeg",
              price: 130,
              isHotItem: false,
            },
            {
              id: 8,
              title: "Item 8",
              imgSrc: "src/assets/item-8.jpeg",
              price: 110,
              isHotItem: true,
            },
            {
              id: 9,
              title: "Item 9",
              imgSrc: "src/assets/item-9.jpeg",
              price: 140,
              isHotItem: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    openItemModal(item) {
      // Handle opening item modal
      console.log("Clicked item:", item);
      this.itemModal = true;
      // Implement modal logic here
    },

    getLimitedItems(category) {
      // Apply price filter first
      let limitedItems = category.items.slice(0, category.limit);
      return this.sortItems(limitedItems);
    },

    showSeeMoreButton(category) {
      // Show "See More" button if there are more items to display
      return category.items.length > category.limit;
    },

    seeMore(category) {
      // Increase the limit to show more items
      category.limit += 4;
    },
    sortItems(items) {
      // Sort items based on the selected sorting option (selectedSort)
      if (this.selectedSort === "title-asc") {
        return items.sort((a, b) => a.title.localeCompare(b.title));
      } else if (this.selectedSort === "title-desc") {
        return items.sort((a, b) => b.title.localeCompare(a.title));
      } else if (this.selectedSort === "price-asc") {
        return items.sort((a, b) => a.price - b.price);
      } else if (this.selectedSort === "price-desc") {
        return items.sort((a, b) => b.price - a.price);
      }
      // Default return (should not normally reach here)
      return items;
    },
  },
};
</script>

<style>
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
  color: rgba(var(--copy-primary));
}

.dark-body {
  @apply block text-sm font-medium mr-3;
  color: rgba(var(--slate-body));
}
</style>
