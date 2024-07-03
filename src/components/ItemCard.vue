<template>
  <div
    class="group bg-white h-96 shadow-sm border-trueGray-200 overflow-hidden item-card-border dark:dark-item-card-border hover:shadow-lg transition-shadow dark:bg-slate-700 rounded-md hover:rounded-md"
    @click="toItemDetail"
  >
    <div class="flex flex-col h-full">
      <div class="flex-grow w-full object-cover rounded-b-none overflow-hidden">
        <img
          src="https://dlcdnwebimgs.asus.com/gain/ac709e89-8fca-4cf5-b63b-f0426714078b/w185/fwebp"
          alt="item-img"
          class="w-auto h-full border-b border-b-slate-300 transform transition-transform duration-500 group-hover:scale-125 bg-cover bg-center bg-origin-content m-auto"
        />
      </div>
      <div class="p-3 h-48 flex flex-col justify-between">
        <h5
          class="title text-slate-900 font-normal text-md overflow-hidden line-clamp-2 dark:text-white"
        >
          {{ title }}
        </h5>
        <div
          v-if="isHotItem === true"
          class="w-11 px-2 text-xs border border-hot-item py-0.5 border-gradient text-red-600 dark:text-red-500"
        >
          熱賣
        </div>
        <div class="mt-4 flex justify-between">
          <h3
            class="my-auto text-xl text-slate-500 font-medium dark:text-slate-300 tracking-wide"
          >
            {{ "$" + price }}
          </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-8 text-pc-dark-blue rounded-full hover:shodow-lg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  components: {},
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
    },
    imgSrc: {
      type: String,
      default: "src/assets/cool-1.jpeg",
      // default: () => `https://source.unsplash.com/random?sig=${Math.floor(Math.random() * 10)}`
    },
    price: {
      type: Number,
      default: 0,
    },
    isHotItem: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toItemDetail() {
      this.$router.push({ name: "ItemDetail", params: { itemId: this.id } });
    },
  },
};
</script>

<style scoped>
.item-card-border:hover {
  border: 2px solid transparent;
  border-image: linear-gradient(to right, #2277d9, #31385e);
  border-image-slice: 1;
  /* border-radius: 10px; */
}
.dark .item-card-border:hover {
  border: 2px solid transparent;
  border-image: linear-gradient(to right, #06b6d4, rgb(196, 179, 255));
  border-image-slice: 1;
}
.border-hot-item {
  border-image-source: linear-gradient(to right, #ff9213, #ff3737);
}
</style>
