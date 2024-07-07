<template>
  <div class="group item-card-border" @click="toItemDetail">
    <div :class="viewMode === 'card' ? 'flex flex-col h-full' : 'w-full flex h-16 space-x-2'">
      <div :class="viewMode === 'card' ? 'w-full object-cover overflow-hidden' : ''">
        <div
          :class="viewMode === 'card' ? 'item-card-img' : 'item-list-img'"
          :style="{ backgroundImage: `url(${imgSrc})` }"
        ></div>
      </div>
      <div :class="viewMode === 'card' ? 'flex flex-col justify-between h-48 p-3' : 'flex flex-grow justify-between items-center'">
        <h5
          class="font-normal text-slate-900 dark:text-slate-200 overflow-hidden"
          :class="viewMode === 'card' ? 'line-clamp-2' : 'w-1/3 md:w-24 line-clamp-1 mr-4'"
        >
          {{ title }}
        </h5>
        <div v-if="isHotItem" class="w-11 h-7 border-gradient-hot-item">
          熱賣
        </div>
        <div :class="viewMode === 'card' ? 'flex justify-between items-center mt-4 text-xl' : 'w-20 text-right pr-3 text-lg'">
          <h3
            class="my-auto font-medium text-slate-900 dark:text-slate-200 tracking-wide"
          >
            $ {{ price }}
          </h3>
          <button
            class="w-12 h-6 md:w-10 px-4 md:px-3 hover:shadow-lg text-md text-white bg-pc-dark-blue dark:bg-slate-500 opacity-90 hover:bg-orange-600"
            :class="viewMode === 'card' ? 'md:h-8' : ''"
            @click.stop="addToVuexCart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions } from "vuex";

export default {
  name: "ItemCard",
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
    },
    price: {
      type: Number,
      default: 0,
    },
    isHotItem: {
      type: Boolean,
      default: false,
    },
    viewMode: {
      type: String,
      required: true,
      default: "card",
    },
  },
  methods: {
    ...mapActions(["addToCart"]),
    toItemDetail() {
      this.$router.push({ name: "ItemDetail", params: { itemId: this.id } });
    },
    addToVuexCart() {
      this.addToCart({
        id: this.id,
        title: this.title,
        imgSrc: this.imgSrc,
        price: this.price,
        quantity: 1,
      })
        .then(() => {
          this.$emit("show-message");
          setTimeout(() => {}, 2000);
        })
        .catch((error) => {
          console.error("Failed to add item to cart:", error);
        });
    },
  },
};
</script>

<style scoped>
.item-card-img {
  @apply w-auto h-48 m-auto rounded-t-sm border-b border-b-slate-300 dark:border-b-slate-500 transform transition-transform duration-500 group-hover:scale-125 bg-cover bg-center;
}
.item-list-img {
  @apply w-20 h-16 rounded-t-sm border-b border-b-slate-300 dark:border-b-slate-500 transform transition-transform duration-500 bg-cover bg-center;
}
.item-card-border {
  @apply bg-white shadow-md rounded-md;
  border: 1.5px solid white;
  border-radius: 0.4rem;
  border-image-slice: 1;
}
.item-card-border:hover {
  @apply drop-shadow-xl;
  border: 1.5px solid;
  border-radius: 0.4rem;
  border-image-source: linear-gradient(to right, #2277d9, #31385e);
  border-image-slice: 1;
}
.dark .item-card-border {
  @apply dark:bg-slate-700;
  border: 1.5px solid #334155;
  border-image-slice: 1;
}
.dark .item-card-border:hover {
  border: 1.5px solid;
  border-radius: 0.4rem;
  border-image-source: linear-gradient(to right, #06b6d4, rgb(196, 179, 255));
  border-image-slice: 1;
}
</style>
