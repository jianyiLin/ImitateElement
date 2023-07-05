<template>
  <div v-if="statusKey" class="xj-messagebox-container">
    <div class="xj-messagebox-head">
      <span class="head-label">{{ title }}</span>
      <svg class="head-icon" aria-hidden="true" @click="hideTable">
        <use xlink:href="#icon-cuowu"></use>
      </svg>
    </div>
    <div class="xj-messagebox-body">
      <p style="display: block; margin-bottom: 4px">{{ content }}</p>
      <xj-input v-if="showInput" v-model="boxMessage" style="width: 100%" />
    </div>
    <div class="xj-messagebox-footer">
      <xj-button
        v-if="cancleButtonText"
        style="margin-right: 10px"
        @click="hideTable"
        >{{ cancleButtonText }}</xj-button
      >
      <xj-button type="primary" @click="confirm">{{
        sureButtonText
      }}</xj-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import xjButton from "../button/button.vue";
import xjInput from "../input/input.vue";
import bus from "../bus";
let statusKey = ref(false);
function hideTable() {
  bus.emit("statusKey", false);
  statusKey.value = false;
}
onMounted(() => {
  statusKey.value = true;
});
interface propsInterface {
  title?: string;
  content?: string;
  sureButtonText?: string;
  callback?: any;
  cancleButtonText?: string;
  showInput?: boolean;
}
let boxMessage = ref("");
let props = withDefaults(defineProps<propsInterface>(), {
  sureButtonText: "确定",
  title: "这是默认标题",
  content: "这是默认内容",
});
function confirm() {
  bus.emit("statusKey", false);
  statusKey.value = false;
  props.callback(props.showInput ? boxMessage.value : null);
}
</script>
<style lang="scss" scoped>
.xj-messagebox-container {
  padding-bottom: 10px;
  position: fixed;
  width: 420px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2018;
  background-color: white;
  border-radius: 4px;
  .xj-messagebox-head {
    position: relative;
    padding: 15px 15px 10px;
    .head-label {
      font-size: 18px;
      line-height: 1;
      color: #303133;
    }
    .head-icon {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 16px;
      height: 16px;
      padding: 0;
      font-size: 16px;
      cursor: pointer;
    }
  }
  .xj-messagebox-body {
    padding: 10px 15px;
    color: #606266;
    font-size: 14px;
  }
  .xj-messagebox-footer {
    padding: 5px 15px 0;
    text-align: right;
  }
}
</style>
