<template>
  <xj-radio v-model="radio" label="1">选项一</xj-radio>
  <xj-radio v-model="radio" label="2">选项一</xj-radio>
</template>
<script>
export default {
  code: `123`,
};
</script>
<script setup>
import { ref } from "vue";
let radio = ref("1");
</script>
<style lang="scss" scoped></style>
