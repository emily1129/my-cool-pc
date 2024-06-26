<template>
  <portal to="modal">
    <transition name="modal-fade">
      <div
        v-if="toggle"
        class="absolute inset-0 z-50 flex bg-gray-800 bg-opacity-50 overflow-hidden"
        @click.self="typeof backdrop === 'function' && backdrop()"
      >
        <div
          class="m-auto h-36 max-w-sm rounded-lg"
        >
          <slot />
        </div>
      </div>
    </transition>
  </portal>
</template>

<script>
export default {
  name: 'ItemModal',
  props: {
    toggle: {
      type: Boolean,
      default: false
    },
    backdrop: {
      type: Function,
      default: () => {}
    },
  }
}
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  @apply opacity-100 transition-opacity duration-300
}

.modal-fade-enter,
.modal-fade-leave-to {
  @apply opacity-0
}
</style>
