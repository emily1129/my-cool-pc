<template>
  <div class="flex pb-2 border-b border-b-slate-200 dark:border-b-slate-500 text-slate-600 dark:text-slate-300">
    <p class="mr-2 w-1/6 font-medium">{{ name }}:</p>
    {{ text }}
  </div>
</template>
<script>
export default {
  name: "ItemSpec",
  props: {
    name: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
  },
};
</script>
