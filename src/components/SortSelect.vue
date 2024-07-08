<template>
  <div class="flex items-center p-4">
    <label :for="'sort-' + id" class="dark-body">Sort by:</label>
    <select
      :id="'sort-' + id"
      v-model="selectedSort"
      @change="handleSortChange"
      class="w-auto block px-2 py-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-slate-800 dark:text-slate-100"
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
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      selectedSort: this.value,
    };
  },
  methods: {
    handleSortChange() {
      this.$emit("input", this.selectedSort);
    },
  },
};
</script>

<style scoped>
</style>
