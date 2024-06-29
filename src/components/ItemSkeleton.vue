<template>
  <div class="space-y-4 animate-pulse">
    <div class="mx-auto transform space-y-5">
      <div v-for="n in 2" :key="n" class="mb-6 p-4">
        <div class="border-b border-slate-500 mb-4">
          <div class="h-12 w-full p-2 bg-gray-300 rounded"></div>
        </div>
        <div class="flex content-start flex-wrap max-w-6xl m-auto">
          <div
            class="w-1/4 lg:w-1/3 md:w-1/2 sm:w-full p-3"
            v-for="m in 4"
            :key="m"
          >
            <div class="h-48 bg-gray-300 rounded"></div>
            <div class="h-4 bg-gray-300 mt-2 rounded"></div>
            <div class="h-4 bg-gray-300 mt-2 rounded"></div>
            <div class="h-4 bg-gray-300 mt-2 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemSkeleton",
};
</script>
