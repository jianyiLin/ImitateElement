<template>
  <xj-switch
    v-model="switchValue"
    active-color="#13ce66"
    inactive-color="#ff4949"
  >
  </xj-switch>
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
