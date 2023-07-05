<template>
  <transition-group
    name="animate__animated animate__bounce"
    enter-active-class="animate__fadeIn"
    leave-active-class="animate__fadeOut"
    style="animation-duration: 50ms"
  >
    <div v-if="showToast" class="sj-message-container" :style="style[type]">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="style[type].icon"></use>
      </svg>
      <label class="message-tip" :style="style[type].color">{{ text }}</label>
    </div>
  </transition-group>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
const style = {
  warn: {
    icon: "#icon-jinggao-chucuo",
    color: "#e6a23c",
    backgroundColor: "#fdf6ec",
    borderColor: "#faecd8",
  },
  error: {
    icon: "#icon-ziyuan",
    color: "#f56c6c",
    backgroundColor: "#fef0f0",
    borderColor: "#fde2e2",
  },
  success: {
    icon: "#icon-chenggong",
    color: "#67c23a",
    backgroundColor: "#f0f9eb",
    borderColor: "#e1f3d8",
  },
  default: {
    icon: "#icon-warningCircle",
    color: "#909399",
    backgroundColor: "rgb(237, 242, 252)",
    borderColor: "#dcdfe6",
  },
};
type messageStatus = "success" | "error" | "default" | "warn";
export interface propsInterface {
  type: messageStatus;
  text?: string;
  height: string;
  isExit: boolean;
}
let props = defineProps<propsInterface>();
let showToast = ref(false);
watch(
  () => props.isExit,
  () => {
    showToast.value = false;
  }
);
onMounted(() => {
  showToast.value = true;
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

.sj-message-container {
  width: 380px;
  border-radius: 4px;
  position: absolute;
  top: v-bind(height);
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid $border;
  background-color: rgb(237, 242, 252);
  padding: 15px 15px 15px 20px;
  box-sizing: border-box;
  z-index: 2011;
  .message-tip {
    font-size: 14px;
    margin-left: 16px;
  }
}
</style>
