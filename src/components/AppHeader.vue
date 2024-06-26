<template>
  <div
    class="flex items-center w-full border-b-4 border-gradient border-gradient-blue bg-white"
  >
    <div
      class="w-48 mr-2 text-blueGray-800 text-5xl header-font"
      @click="toHome"
    >
      COOLPC
    </div>
    <div class="ml-auto flex space-x-3">
      <DarkModeToggle />
      <button class="text-xs my-auto">
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
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import DarkModeToggle from "./DarkModeToggle.vue";

export default {
  name: "AppHeader",
  components: {
    DarkModeToggle,
  },
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toHome() {
      this.$router.push({ name: "AppHeader" });
    },
  },
};
</script>

<style>
.header-font {
  font-family: "Jersey 25", sans-serif;
}
.border-gradient {
  border-bottom: solid;
  border-image-slice: 1;
}
.border-gradient-blue {
  border-image-source: linear-gradient(to right, #3f97fc, #343b61);
}
.bg-grad {
  background: linear-gradient(to right, #4b579d, #347afc, #3f97fc, #343b61);
}
</style>
