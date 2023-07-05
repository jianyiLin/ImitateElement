<template>
  <xj-switch v-model="switchValue" diasble></xj-switch>
</template>
<script>
export default {
  code: `123`,
};
</script>
<script setup>
import { ref } from "vue";
let switchValue = ref(true);
</script>
<style lang="scss" scoped></style>
