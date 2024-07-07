<template>
  <div class="space-y-4">
    <!-- Left Sidebar -->
    <CategorySelection
      :categories="categories"
      :category-name="categoryName"
      @category-selected="$emit('category-selected', $event)"
    />
    <BrandCheckbox
      :unique-brands="uniqueBrands"
      @brand-changed="$emit('brand-changed', $event)"
    />
  </div>
</template>

<script>
import CategorySelection from "@/components/CategorySelection.vue";
import BrandCheckbox from "@/components/BrandCheckbox.vue";

export default {
  name: "HomeSidebar",
  components: {
    CategorySelection,
    BrandCheckbox,
  },
  props: {
    categories: Array,
    categoryName: String,
    uniqueBrands: Array,
  },
  
};
</script>
