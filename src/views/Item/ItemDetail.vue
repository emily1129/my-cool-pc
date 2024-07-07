<template>
  <div
    class="flex md:flex-col justify-center items-center w-full my-4 p-5 md:pb-12 bg-white dark:bg-slate-700 rounded-md"
  >
    <div
      class="flex flex-col px-12 md:p-3 relative items-center justify-center w-1/2 md:w-full h-full"
    >
      <div
        class="w-full h-64 transform transition-transform duration-500 group-hover:scale-125 bg-cover bg-center"
        :style="{ backgroundImage: `url(${item.imgSrc})` }"
      ></div>
    </div>
    <div
      class="flex flex-col items-start justify-between w-1/2 md:w-full px-3 space-y-6"
    >
      <div v-if="item.isHotItem === true" class="border-gradient-hot-item my-2">
        熱賣
      </div>
      <h5 class="text-xl text-slate-700 dark:text-slate-200">
        {{ item.title }}
      </h5>

      <h5
        class="text-3xl font-bold text-slate-900 dark:text-white tracking-wide"
      >
        $ {{ item.price }}
      </h5>
      <div class="w-full space-y-2">
        <ItemSpec name="品牌" :text="item.brand" />
        <ItemSpec name="Size" :text="item.size" />
        <ItemSpec name="CPU" :text="item.cpu" />
        <ItemSpec name="RAM" :text="item.ram" />
        <ItemSpec name="SSD" :text="item.ssd" />
        <ItemSpec name="VGA" :text="item.vga" />
        <ItemSpec name="LAN" :text="item.lan" />
        <ItemSpec name="周邊" :text="item.other" />
        <ItemSpec name="OS" :text="item.os" />
      </div>
      <div
        class="flex md:flex-col justify-between w-full h-14 space-x-4 md:space-x-0"
      >
        <div
          class="flex items-center justify-center w-1/2 md:w-full space-x-7 mb-2 px-6 py-3 md:py-1 border border-gray-300 text-xl text-slate-600 hover:text-slate-700 dark:bg-slate-300"
        >
          <button class="focus:outline-none" @click="decrement">&#8722;</button>
          <input
            type="text"
            v-model.number="quantity"
            class="w-10 text-center border-none focus:outline-none dark:bg-slate-300"
          />
          <button class="focus:outline-none" @click="increment">&#43;</button>
        </div>
        <button
          class="flex items-center justify-center w-1/2 md:w-full h-12 space-x-2 px-6 md:py-2 bg-orange-500 text-white font-bold p-4 hover:bg-orange-600 focus:outline-none hover:scale-105 transition duration-500 ease-in-out"
          @click="addToVuexCart"
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
          <span class="text-md">Add to cart</span>
        </button>
      </div>
    </div>
    <ShowMessage v-if="showSuccess" :duration="3000" />
  </div>
</template>

<script>
import mockData from "@/mockData";
import ItemSpec from "./components/ItemSpec.vue";
import ShowMessage from "@/components/SuccessMessage.vue";
import { mapActions } from "vuex";

export default {
  name: "ItemDetail",
  props: ["itemId"],
  components: { ItemSpec, ShowMessage },
  data() {
    return {
      item: {},
      quantity: 1,
      showSuccess: false,
    };
  },
  created() {
    this.fetchItemDetail();
  },
  computed: {
    currentItemId() {
      const currentId = this.$route.params.itemId;
      return currentId;
    },
  },
  watch: {
    currentItemId: {
      immediate: true,
      handler(newVal) {
        this.fetchItemDetail(newVal);
      },
    },
  },
  methods: {
    ...mapActions(["addToCart"]),
    fetchItemDetail() {
      for (const category of mockData) {
        const item = category.items.find((i) => i.id === Number(this.itemId));
        if (item) {
          this.item = item;
        }
      }
    },
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    addToVuexCart() {
      this.addToCart({ ...this.item, quantity: this.quantity })
        .then(() => {
          this.showSuccess = true;
          setTimeout(() => {
            this.showSuccess = false;
          }, 2000);
        })
        .catch((error) => {
          console.error("Failed to add item to cart:", error);
        });
    },
  },
};
</script>
