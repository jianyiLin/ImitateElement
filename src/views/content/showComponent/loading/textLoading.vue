<template>
  <xj-button type="primary" @click="changeLoadingStatus">展示loading</xj-button>
  <xj-loading :is-loading="isLoading" text="加载中"></xj-loading>
</template>
<script>
export default {
  code: `123`,
};
</script>
<script setup>
import { ref } from "vue";
let isLoading = ref(false);
function changeLoadingStatus() {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
}
</script>
<style lang="scss" scoped></style>
