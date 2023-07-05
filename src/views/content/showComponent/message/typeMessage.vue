<template>
  <xj-button type="success" @click="showMessage('success')">success</xj-button>
  <xj-button type="warning" @click="showMessage('warn')">warn</xj-button>
  <xj-button @click="showMessage('tip')">tip</xj-button>
  <xj-button type="error" @click="showMessage('error')">error</xj-button>
</template>
<script>
export default {
  code: `123`,
};
</script>
<script setup>
import { getCurrentInstance } from "vue";
let toastType = {
  success: { type: "success", text: "成功" },
  error: { type: "error", text: "错误" },
  default: { type: "default", text: "默认" },
  warn: { type: "warn", text: "警告" },
};
const vm = getCurrentInstance();
function showMessage(type) {
  /* eslint-disable */
  // @ts-ignore
  vm.appContext.config.globalProperties.message(toastType[type]);
}
</script>
<style lang="scss" scoped></style>
