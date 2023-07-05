<template>
  <xj-input v-model="defaultTxt" placeholder="输入文字" disable></xj-input>
</template>

<script>
export default {
  code: `123`,
};
</script>
<script setup>
import { ref } from "vue";
let defaultTxt = ref("");
</script>
<style lang="scss" scoped></style>
