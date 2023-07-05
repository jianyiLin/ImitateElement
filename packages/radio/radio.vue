<template>
  <label role="radio" tabindex="0" class="xj-radio" aria-checked="true">
    <span class="xj-radio__input">
      <span :class="comSpanClass"></span>
      <input
        type="radio"
        aria-hidden="true"
        tabindex="-1"
        autocomplete="off"
        class="xj-radio__original"
        :value="label"
        @click="focusRadio"
      />
    </span>
    <span :class="comLabelClass"><slot></slot></span>
  </label>
</template>

<script setup lang="ts">
defineOptions({
  name: "xjRadio",
});
import { computed } from "vue";
interface propsInter {
  modelValue?: string | number;
  label?: string;
  disable?: boolean;
}
let emits = defineEmits(["update:modelValue"]);
let props = defineProps<propsInter>();
let comSpanClass = computed(() => {
  return [
    "xj-radio__inner",
    props.modelValue == props.label ? "xj-radio__inner__checked" : "",
    props.disable ? "xj-radio__inner__diasble" : "",
  ];
});
let comLabelClass = computed(() => {
  return [
    "xj-radio__label",
    props.modelValue == props.label ? "xj-radio__label__checked" : "",
    props.disable ? "xj-radio__label__disable" : "",
  ];
});
function focusRadio(item: any) {
  if (!props.disable) {
    emits("update:modelValue", item.target.value);
  }
}
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
.xj-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  display: inline-block;
  outline: none;
  font-size: 14px;
  margin-right: 20px;
  .xj-radio__label {
    font-size: 14px;
    padding-left: 10px;
    cursor: pointer;
  }
  .xj-radio__label__checked {
    color: $primary;
  }
  .xj-radio__label__disable {
    color: #c0c4cc;
    cursor: not-allowed;
  }
  .xj-radio__input {
    .xj-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }

    .xj-radio__inner {
      vertical-align: middle;
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      cursor: pointer;
    }
    .xj-radio__inner::after {
      width: 4px;
      height: 4px;
      border-radius: 100%;
      display: inline-block;
      background-color: #fff;
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .xj-radio__inner__checked {
      border-color: #409eff;
      background: #409eff;
    }
    .xj-radio__inner__diasble {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      cursor: not-allowed;
    }
    .xj-radio__inner__diasble::after {
      background-color: #f5f7fa;
    }
  }
  .xj-radio__inner__checked.xj-radio__inner__diasble::after {
    background-color: #c0c4cc;
  }
}
</style>
