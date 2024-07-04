<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed top-20 left-1/2 transform -translate-x-1/2 flex w-3/4 px-4 py-4 text-base bg-green-200 shrink-0 transition ease-in-out duration-300"
    >
      <div class="shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          ></path>
        </svg>
      </div>
      <div class="ml-3 mr-12 text-green-700">
        {{ message }}
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ShowMessage",
  props: {
    message: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    showMessage() {
      this.visible = true;
      setTimeout(() => {
        this.visible = false;
      }, this.duration);
    },
  },
  mounted() {
    this.showMessage();
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
