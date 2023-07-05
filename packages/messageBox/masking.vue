<template>
  <div v-if="statusKey" class="v-model"></div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import bus from "../bus";
let statusKey = ref(true);
bus.on("statusKey", (value: any) => {
  statusKey.value = value;
});
</script>
<style lang="scss" scoped>
$primary: rgb(64, 158, 255);
$success: rgb(133, 206, 97);
$default: rgb(255, 255, 255);
$error: rgb(245, 108, 108);
$info: rgb(144, 147, 153);
$warning: rgb(230, 162, 60);
$text: #606266;
$border: #dcdfe6;
$shadow: 0 2px 0 0 rgba(0, 0, 0, 0.1);

.v-model {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #000;
  z-index: 999;
}
</style>
