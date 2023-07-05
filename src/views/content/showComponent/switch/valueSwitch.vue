<template>
  <xj-switch v-model="switchValue" active-value="10" inactive-value="0">
  </xj-switch>
  <span style="position: relative; bottom: 6px; left: 6px; color: slategrey">
    {{ switchValue }}
  </span>
</template>
<script>
export default {
  code: `123`,
};
</script>
<script setup>
import { ref } from "vue";
let switchValue = ref("10");
</script>
<style lang="scss" scoped></style>
