<template>
  <div
    class="flex items-center w-full mb-6 border-b-3 shadow-lg border-gradient border-gradient-blue bg-white dark-bg"
  >
    <div
      class="w-48 mr-2 text-slate-800 dark:text-slate-50 text-5xl header-font"
      @click="$router.push({ name: 'AppHome' })"
    >
      <span class="cursor-pointer"> COOLPC </span>
    </div>
    <!-- search -->
    <div class="flex items-center mx-4 my-2 dark:text-neutral-100">
      <input
        v-model="inputSearch"
        @input="handleSearch"
        @focus="expandSearch"
        @blur="collapseSearch"
        type="text"
        placeholder="Search..."
        class="w-full px-4 py-1 border rounded-md focus:outline-none dark:bg-slate-800 dark:hover:bg-slate-700"
      />
    </div>
    <!-- search Results -->
    <transition name="fade">
      <div
        v-if="showResults"
        class="absolute top-16 left-0 w-full bg-white dark:bg-slate-700 dark:text-neutral-50 shadow-lg py-8 z-50"
      >
        <div class="w-10/12 mx-auto">
          <h2 class="text-xl italic font-light mb-4">
            Results for "{{ inputSearch }}..."
          </h2>
          <div class="overflow-x-auto overflow-y-hidden">
            <div v-if="filteredItems.length !== 0" class="flex space-x-7">
              <div
                v-for="item in filteredItems"
                :key="item.id"
                @click="toItemDetail(item.id)"
                class="flex min-w-72 max-w-72 h-28 bg-white dark:bg-slate-600 border border-slate-300 dark:border-slate-400 shadow-sm rounded-lg cursor-pointer"
              >
                <img
                  src="https://dlcdnwebimgs.asus.com/gain/ac709e89-8fca-4cf5-b63b-f0426714078b/w185/fwebp"
                  :alt="item.title"
                  class="w-1/2 h-auto object-cover border-r border-gray-400"
                />
                <div
                  class="w-1/2 p-2 text-sm flex flex-col justify-between text-neutral-900 dark:text-neutral-50"
                >
                  <p class="font-bold overflow-hidden h-10 leading-tight">
                    <span class="line-clamp-2">{{ item.title }}</span>
                  </p>
                  <span class="font-semibold mt-auto">${{ item.price }}</span>
                </div>
              </div>
            </div>
            <div v-else>
              <p>No Matching Result!</p>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div class="ml-auto flex space-x-3 dark:text-slate-200">
      <DarkModeToggle />
      <button
        class="text-xs my-auto"
        @click="
          () => {
            cartModal = true;
          }
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </button>
    </div>
    <AppModal
      :toggle="cartModal"
      :backdrop="
        () => {
          cartModal = false;
        }
      "
    >
      <ShoppingCartModal
        @login="
          () => {
            cartModal = false;
          }
        "
        @close-modal="
          () => {
            cartModal = false;
          }
        "
      />
    </AppModal>
  </div>
</template>

<script>
import DarkModeToggle from "./DarkModeToggle.vue";
import ShoppingCartModal from "./ShoppingCartModal.vue";
import AppModal from "@/components/AppModal";
import mockData from "@/mockData";

export default {
  name: "AppHeader",
  components: {
    DarkModeToggle,
    ShoppingCartModal,
    AppModal,
  },
  data() {
    return {
      inputSearch: "",
      showResults: false,
      filteredItems: [],
      items: [],
      cartModal: false,
      showBackdrop: false,
    };
  },
  methods: {
    fetchData() {
      this.items = mockData;
      this.filteredItems = this.items.flatMap((category) => category.items);
    },
    handleSearch() {
      this.fetchData();
      this.filterItems(this.inputSearch);
    },
    filterItems(query) {
      const allItems = [];
      this.items.forEach((category) => {
        allItems.push(...category.items);
      });
      if (query) {
        this.filteredItems = allItems.filter(
          (item) =>
            (item.title &&
              item.title.toLowerCase().includes(query.toLowerCase())) ||
            (item.brand &&
              item.brand.toLowerCase().includes(query.toLowerCase()))
        );
      } else {
        this.filteredItems = allItems;
      }
    },
    expandSearch() {
      this.showResults = true;
      this.showBackdrop = true;
    },
    collapseSearch() {
      setTimeout(() => {
        this.showResults = false;
        // this.showBackdrop = false;
      }, 200);
    },
    toItemDetail(itemId) {
      this.$router.push({ name: "ItemDetail", params: { itemId } });
    },
    // toggleCartModal() {
    //   this.cartModal = !this.cartModal;
    // },
  },
  watch: {
    inputSearch(newVal) {
      this.handleSearch(newVal);
    },
  },
};
</script>

<style scoped>
.header-font {
  font-family: "Jersey 25", sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.dark .dark-bg {
  --background: 26, 32, 44;
  --slate-body: 148 163 184;
  background: rgba(var(--background));
}
</style>
