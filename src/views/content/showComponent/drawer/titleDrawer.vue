<template>
  <xj-button type="primary" @click="showDraw"> 右侧弹出抽屉</xj-button>
  <xj-drawer v-model:visible="isShowDraw" title="我是标题">
    <h1 v-for="item in 60" style="padding-left: 20px">XJComponent{{ item }}</h1>
  </xj-drawer>
</template>
<script>
export default {
  code: `123`,
};
</script>
<script setup>
import { ref } from "vue";
let isShowDraw = ref(false);
function showDraw() {
  isShowDraw.value = true;
}
</script>
<style lang="scss" scoped></style>
