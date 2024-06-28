<template>
  <div id="app" class="overflow-auto scroll-smooth">
    <AppHeader class="w-full h-16 px-32 md:px-4" />
    <div class="flex w-10/12 m-auto space-x-2">
      <router-view :selectedCategory="selectedCategory" class="home-bg" />
    </div>
    <portal-target name="modal" multiple />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";

export default {
  name: "App",
  components: { AppHeader },
  data() {
    return {
      selectedCategory: null,
    };
  },
  methods: {
    // handleCategorySelected(category) {
    //   console.log("Selected Category:", category); // Debugging log
    //   this.selectedCategory = category;
    // },
  },
};
</script>

<style>
.home-bg {
  /* background-color: rgb(246, 248, 246); */
}
</style>
