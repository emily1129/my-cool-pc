<template>
  <div
    class="group bg-white h-96 shadow-sm border-trueGray-200 overflow-hidden item-card-border hover:shadow-lg transition-shadow"
    @click="toItemDetail"
  >
    <div class="flex flex-col h-full">
      <div class="flex-grow w-full object-cover rounded-b-none overflow-hidden">
        <img
          src="https://dlcdnwebimgs.asus.com/gain/ac709e89-8fca-4cf5-b63b-f0426714078b/w185/fwebp"
          alt="item-img"
          class="w-auto h-full transform transition-transform duration-500 group-hover:scale-125 bg-cover bg-center bg-origin-content m-auto"
        />
      </div>
      <div class="p-3 h-48 flex flex-col justify-between">
        <h5 class="title text-trueGray-700 font-bold text-sm overflow-hidden">
          {{ truncateText(title, 7) }}
        </h5>
        <div
          v-if="isHotItem === true"
          class="w-11 px-2 text-xs border border-hot-item py-0.5 border-gradient text-red-600"
        >
          熱賣
        </div>
        <div class="mt-4">
          <h3 class="text-xl text-pc-dark-blue font-semibold mb-0">
            {{ "$" + price }}
          </h3>
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
      required: true,
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
    size: {
      type: String,
      required: true,
    },
    cpu: {
      type: String,
      required: false,
    },
    ram: {
      type: String,
      required: false,
    },
    ssd: {
      type: String,
      required: false,
    },
    vga: {
      type: String,
      required: false,
    },
    lan: {
      type: String,
      required: false,
    },
    others: {
      type: String,
      required: false,
    },
    os: {
      type: String,
      required: false,
    },
  },
  methods: {
    truncateText(text, wordLimit) {
      const words = text.split(" ");
      if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(" ") + "...";
      }
      return text;
    },
    toItemDetail() {
      this.$router.push({ name: "ItemDetail", params: { itemId: this.id } });
    },
  },
};
</script>

<style scoped>
.item-card-border {
  border: 1.5px solid transparent;
  /* border-radius: 10px; */
}
.item-card-border:hover {
  border: 1.5px solid transparent;
  border-image: linear-gradient(to right, #2277d9, #31385e);
  border-image-slice: 1;
  /* border-radius: 10px; */
}
.border-hot-item {
  border-image-source: linear-gradient(to right, #ff9213, #ff3737);
}
</style>
