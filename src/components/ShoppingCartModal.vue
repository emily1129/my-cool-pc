<template>
  <div
    class="relative w-full max-w-2xl bg-white dark:bg-slate-700 h-full shadow-lg transform transition-transform duration-300 ease-in-out"
  >
    <button
      class="absolute top-4 right-4 text-4xl text-slate-600 hover:text-slate-800 dark:text-slate-100"
      @click="$emit('close-modal')"
    >
      &times;
    </button>
    <h2
      class="text-xl font-semibold mb-4 p-6 dark:text-white border-b dark:border-slate-500 shadow-sm"
    >
      Shopping Cart
    </h2>
    <div class="px-6 overflow-y-auto h-3/4">
      <ul>
        <li
          v-for="item in cartItems"
          :key="item.id"
          class="flex items-center justify-between py-4 border-b dark:bg-slate-700 dark:border-slate-300"
        >
          <div class="flex items-center w-full dark:text-neutral-50">
            <div
              class="w-28 h-28 object-cover"
              :style="{ backgroundImage: `url(${item.imgSrc})` }"
            ></div>
            <div class="flex-col w-full ml-3">
              <div class="flex justify-between items-start">
                <h3 class="flex-grow text-ellipsis overflow-hidden">
                  {{ item.title }}
                </h3>
                <button
                  @click="removeFromCart(item.id)"
                  class="w-8 h-8 px-3 -translate-y-1.5 text-3xl text-neutral-400 dark:text-neutral-200 hover:text-red-500"
                >
                  &times;
                </button>
              </div>
              <div
                class="w-full flex justify-between mt-2 text-right dark:text-slate-900"
              >
                <select v-model="item.quantity" @change="updateQuantity(item)">
                  <option v-for="n in 10" :key="n" :value="n">
                    {{ n }}
                  </option>
                </select>
                <p class="mt-auto dark:text-neutral-50">
                  $ {{ item.price * item.quantity }}
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <button
        @click="continueToPayment"
        class="flex justify-between w-full absolute bottom-0 right-0 bg-orange-500 text-white font-bold p-4 hover:bg-orange-600"
      >
        <p>Proceed to checkout</p>
        <p class="tracking-wide">$ {{ orderTotal }}</p>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters(["cartItems", "cartTotal"]),
    cartSubtotal() {
      return this.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    orderTotal() {
      return this.cartSubtotal;
    },
  },
  methods: {
    ...mapActions(["removeFromCart", "updateQuantity"]),
    continueToPayment() {
      alert("Continue to payment");
    },
  },
};
</script>

<style scoped>
.fixed.inset-0 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.9s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
