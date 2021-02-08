<template>
  <div>
    <label>{{ label }}</label>
    <input :value="data" />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
};
</script>

<style></style>
