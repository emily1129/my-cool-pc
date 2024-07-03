<template>
  <div class="flex items-center p-4">
    <label :for="'price-' + id" class="dark-body">Price:</label>
    <div class="relative">
      <div class="slider h-1 relative bg-slate-300 rounded-md">
        <div
          class="absolute h-full bg-pc-dark-blue dark:bg-sky-700 rounded-md"
          :style="{ left: `${leftPercent}%`, right: `${rightPercent}%` }"
        ></div>
      </div>
      <div class="range-input relative w-48">
        <input
          :id="'price-' + id"
          type="range"
          class="absolute range-min"
          min="0"
          max="20000"
          v-model="localMinPrice"
          @input="updateRange"
        />
        <input
          type="range"
          class="absolute range-max"
          min="0"
          max="20000"
          v-model="localMaxPrice"
          @input="updateRange"
        />
      </div>
      <p
        class="w-full absolute pt-1 text-center text-xs text-slate-800 dark:text-slate-300"
      >
        ${{ localMinPrice }} - ${{ localMaxPrice }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    maxPrice: {
      type: Number,
      default: 20000,
    },
    id: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      localMinPrice: 1000,
      localMaxPrice: 19000,
      priceGap: 100,
    };
  },
  computed: {
    leftPercent() {
      return (this.localMinPrice / 20000) * 100;
    },
    rightPercent() {
      return 100 - (this.localMaxPrice / 20000) * 100;
    },
  },
  watch: {
    localMinPrice(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.emitPriceChange();
      }
    },
    localMaxPrice(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.emitPriceChange();
      }
    },
  },
  methods: {
    validateMinPrice() {
      if (this.localMinPrice < 0) this.localMinPrice = 0;
      if (this.localMinPrice > 20000 - this.priceGap)
        this.localMinPrice = 20000 - this.priceGap;
      this.updateRange();
    },
    validateMaxPrice() {
      if (this.localMaxPrice > 20000) this.localMaxPrice = 20000;
      if (this.localMaxPrice < this.priceGap)
        this.localMaxPrice = this.priceGap;
      this.updateRange();
    },
    updateRange() {
      if (this.localMaxPrice - this.localMinPrice < this.priceGap) {
        if (this.localMinPrice + this.priceGap > this.localMaxPrice) {
          this.localMinPrice = this.localMaxPrice - this.priceGap;
        } else {
          this.localMaxPrice = this.localMinPrice + this.priceGap;
        }
      }
      if (this.localMinPrice < 0) this.localMinPrice = 0;
      if (this.localMaxPrice > 20000) this.localMaxPrice = 20000;
    },
    emitPriceChange() {
      this.$emit("price-changed", [this.localMinPrice, this.localMaxPrice]);
    },
  },
};
</script>

<style scoped>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.range-input input {
  width: 100%;
  height: 5px;
  top: -5px;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

input[type="range"]::-webkit-slider-thumb {
  @apply bg-pc-dark-blue dark:bg-sky-700 w-4 h-4 rounded-full border-none pointer-events-auto;
  -webkit-appearance: none;
}

input[type="range"]::-moz-range-thumb {
  @apply bg-pc-dark-blue dark:bg-sky-700 w-4 h-4 rounded-full border-none pointer-events-auto;
  -moz-appearance: none;
}
</style>
