<template>
  <portal to="modal">
    <div class="modal-mask fixed" :style="modalStyle">
      <transition name="slide">
        <div
          v-if="toggle"
          class="fixed inset-0 flex justify-end"
          @click.self="typeof backdrop === 'function' && backdrop()"
        >
          <slot />
        </div>
      </transition>
    </div>
  </portal>
</template>

<script>
export default {
  name: "AppModal",
  props: {
    toggle: {
      type: Boolean,
      default: false,
    },
    backdrop: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    modalStyle() {
      return {
        display: this.toggle ? "" : "none",
      };
    },
  },
};
</script>

<style scoped>
.modal-mask {
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-in-out;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
