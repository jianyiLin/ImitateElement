<template>
  <xj-input v-model="defaultTxt" placeholder="输入文字" password></xj-input>
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
<style lang="scss" scoped>
.icon[data-v-66aefa43] {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
