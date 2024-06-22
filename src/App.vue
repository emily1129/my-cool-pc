<template>
  <div id="app" class="overflow-auto">
    <AppHeader class="w-full h-16 px-32 md:px-4" />
    <router-view class="home-bg" />
    <portal-target
      name="modal"
      multiple
    />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";

export default {
  name: "App",
  components: { AppHeader },
};
</script>

<style>
.home-bg {
  /* background-color: rgb(246, 248, 246); */
}
</style>
