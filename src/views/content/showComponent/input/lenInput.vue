<template>
  <xj-input
    v-model="defaultTxt"
    placeholder="输入文字"
    :maxlength="10"
  ></xj-input>
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
