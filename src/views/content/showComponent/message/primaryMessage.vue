<template>
  <xj-button @click="showMessage('tip')">tip</xj-button>
</template>
<script>
export default {
  code: `123`,
};
</script>
<script setup>
import { getCurrentInstance } from "vue";
const vm = getCurrentInstance();
function showMessage(type) {
  /* eslint-disable */
  // @ts-ignore
  vm.appContext.config.globalProperties.message();
}
</script>
<style lang="scss" scoped></style>
