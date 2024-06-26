<template>
  <div class="flex items-center p-4 m-auto max-w-6xl">
    <label for="sort" class="dark-body">Sort by:</label>
    <select
      v-model="selectedSort"
      @change="handleSortChange"
      class="w-auto block px-2 py-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    >
      <option value="title-asc">Title (A-Z)</option>
      <option value="title-desc">Title (Z-A)</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SortSelect",
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedSort: this.value,
    };
  },
  methods: {
    handleSortChange() {
      console.log(this.selectedSort)
      this.$emit("input", this.selectedSort);
    },
  },
};
</script>

<style scoped>
.dark-body {
  @apply block text-sm font-medium mr-3;
  color: rgba(var(--slate-body));
}
</style>
