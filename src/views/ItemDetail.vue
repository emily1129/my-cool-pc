<template>
  <div
    class="w-full mx-auto my-5 p-4 flex md:flex-col justify-center items-center min-h-screen space-y-2 bg-white rounded-md"
  >
    <div class="h-full w-1/2 md:w-full">
      <div
        class="w-full h-full flex object-cover rounded-b-none overflow-hidden"
      >
        <img
          src="https://dlcdnwebimgs.asus.com/gain/ac709e89-8fca-4cf5-b63b-f0426714078b/w185/fwebp"
          alt="item-img"
          class="w-1/2 md:w-full items-center transform transition-transform duration-500 group-hover:scale-125 bg-cover bg-center bg-origin-content m-auto"
        />
      </div>
    </div>
    <div
      class="w-1/2 md:w-full px-3 flex flex-col items-start justify-between text-sm text-coolGray-600 space-y-8"
    >
      <div
        v-if="item.isHotItem === true"
        class="inline-block px-4 text-xs border border-hot-item py-1 my-3 border-gradient text-red-600"
      >
        熱賣
      </div>
      <h5 class="text-xl text-trueGray-700 font-bold overflow-hidden">
        {{ item.title }}
      </h5>

      <h5 class="text-3xl text-trueGray-600 font-bold">
        {{ "NTD " + item.price }}
      </h5>
      <div class="w-full space-y-2">
        <div class="flex border-b border-b-coolGray-200 pb-2">
          <p class="mr-2 w-1/6 font-semibold">Size:</p>
          {{ item.size }}
        </div>
        <div class="flex border-b border-b-coolGray-200 pb-2">
          <p class="mr-2 w-1/6 font-semibold">CPU:</p>
          {{ item.cpu }}
        </div>
        <div class="flex border-b border-b-coolGray-200 pb-2">
          <p class="mr-2 w-1/6 font-semibold">RAM:</p>
          {{ item.ram }}
        </div>
        <div class="flex border-b border-b-coolGray-200 pb-2">
          <p class="mr-2 w-1/6 font-semibold">SSD:</p>
          {{ item.ssd }}
        </div>
        <div class="flex border-b border-b-coolGray-200 pb-2">
          <p class="mr-2 w-1/6 font-semibold">VGA:</p>
          {{ item.vga }}
        </div>
        <div class="flex border-b border-b-coolGray-200 pb-2">
          <p class="mr-2 w-1/6 font-semibold">LAN:</p>
          {{ item.lan }}
        </div>
        <div class="flex border-b border-b-coolGray-200 pb-2">
          <p class="mr-2 w-1/6 font-semibold">周邊:</p>
          {{ item.other }}
        </div>
        <div class="flex border-b border-b-coolGray-200 pb-2">
          <p class="mr-2 w-1/6 font-semibold">OS:</p>
          {{ item.os }}
        </div>
      </div>
      <div
        class="w-full h-14 flex md:flex-col justify-between space-x-4 md:space-x-0"
      >
        <div
          class="w-1/2 md:w-full px-6 py-3 md:py-1 flex items-center justify-center border border-gray-300 rounded space-x-7 text-xl mb-2"
        >
          <button
            class="text-gray-600 hover:text-gray-800 focus:outline-none"
            @click="decrement"
          >
            &#8722;
          </button>
          <input
            type="text"
            v-model.number="quantity"
            class="w-10 text-center border-none focus:outline-none"
          />
          <button
            class="text-gray-600 hover:text-gray-800 focus:outline-none"
            @click="increment"
          >
            &#43;
          </button>
        </div>
        <button
          class="w-1/2 md:w-full flex items-center justify-center space-x-2 px-6 py-3 md:py-2 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none hover:scale-105 transition duration-500 ease-in-out"
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
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <p class="text-md">Add to cart</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import mockData from "@/mockData";

export default {
  name: "ItemDetail",
  props: ["itemId"],
  data() {
    return {
      item: {},
      quantity: 1,
    };
  },
  created() {
    this.fetchItemDetail();
  },
  methods: {
    fetchItemDetail() {
      for (const category of mockData) {
        const item = category.items.find((i) => i.id === Number(this.itemId));
        if (item) {
          this.item = item;
          break;
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
  },
};
</script>

<style>
.item-height {
  height: 100vh-4rem;
}
.border-hot-item {
  border-image-source: linear-gradient(to right, #ff9213, #ff3737);
}
</style>
