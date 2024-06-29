<template>
  <div class="flex border-b border-b-coolGray-200 pb-2">
    <p class="mr-2 w-1/6 font-semibold">{{ name }}:</p>
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
