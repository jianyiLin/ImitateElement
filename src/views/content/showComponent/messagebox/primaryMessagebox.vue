<template>
  <xj-button type="primary" @click="showTabel">普通弹窗</xj-button>
</template>
<script>
export default {
  code: `123`,
};
</script>
<script setup>
import { getCurrentInstance } from "vue";
const vm = getCurrentInstance();
function showTabel() {
  vm.appContext.config.globalProperties.messageBox({
    title: "标题",
    content: "这是用户输入的内容",
    sureButtonText: "确定",
    cancleButtonText: "取消",
    callback: (e) => {
      console.log("回调事件" + e);
    },
  });
}
</script>
<style lang="scss" scoped></style>
