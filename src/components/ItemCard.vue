<template>
  <div
    class="group bg-white h-96 shadow-sm border-trueGray-200 overflow-hidden item-card-border"
  >
    <div class="flex flex-col h-full">
      <div class="flex-grow w-full object-cover rounded-b-none overflow-hidden">
        <img
          src="https://dlcdnwebimgs.asus.com/gain/ac709e89-8fca-4cf5-b63b-f0426714078b/w185/fwebp"
          alt="item-img"
          class="w-auto h-full transform transition-transform duration-500 group-hover:scale-125 bg-cover bg-center bg-origin-content m-auto"
        />
      </div>
      <div class="p-3 h-48">
        <h5 class="title text-trueGray-700 font-bold text-sm overflow-hidden">
          {{ title }}
        </h5>
        <div
          v-if="isHotItem === true"
          class="inline-block px-4 text-xs rounded-full hot-item py-1 text-white"
        >
          熱賣
        </div>
        <div class="flex justify-between mt-4">
          <h3 class="text-2xl text-pc-dark-blue font-semibold">
            {{ "$" + price }}
          </h3>
          <div class="">
            <button
              class="text-pc-dark-blue w-8 h-8 self-center bg-center add bg-no-repeat"
            />
          </div>
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
  },
  computed: {
    pillStyle() {
      let classes = "";

      switch (this.eventType) {
        case 1:
          classes = "text-amber-400 border-amber-400";
          break;
        case 2:
          classes = "text-rise-red border-rise-red";
          break;
        case 3:
          classes = "text-lime-600 border-lime-600";
          break;
      }
      return classes;
    },
    eventTypeLabel() {
      return this.eventTypes.find((t) => t.id === this.eventType)?.value || "";
    },
  },
  methods: {
    toItem() {
      this.$router.push({ name: "Item", params: { id: this.id } });
    },
  },
};
</script>

<style scoped>
.avatar {
  grid-area: avatar;
}
.event-type {
  grid-area: event-type;
}
.title {
  grid-area: title;
}
.budget-info {
  grid-area: budget-info;
}
.date-range {
  grid-area: date-range;
}
.reward {
  grid-area: reward;
}
.add {
  background-image: url(~@/assets/add.svg);
}

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

.hot-item {
  background: linear-gradient(to right, #ff9213, #ff3737);
}
</style>
