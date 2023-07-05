<template>
  <div :class="comClass">
    <input
      ref="input"
      :style="paddingStyle"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disable"
      :type="isShowPassword ? 'password' : 'text'"
      @focus="showPasswordIcon = true"
      @input="inputValue"
      @blur="showPasswordIcon = false"
    />
    <span class="xj-input__icon">
      <svg
        v-if="clean && modelValue"
        class="icon"
        aria-hidden="true"
        @mousedown="deleteValue"
      >
        <use xlink:href="#icon-cuowu"></use>
      </svg>
      <svg
        v-if="password && showPasswordIcon"
        class="icon"
        aria-hidden="true"
        @mousedown="showPassword"
      >
        <use xlink:href="#icon-yanjing"></use>
      </svg>
      <span
        v-if="maxlength"
        class="xj-input-count"
        @mousedown="stopDefaultEvent"
      >
        {{ countNum }}/{{ maxlength }}
      </span>
    </span>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "xjInput",
});
import { computed, ref, watch } from "vue";
import { adapter, Test, calculateScore } from "./input";
interface propsInterface {
  modelValue?: string | number;
  placeholder?: string;
  disable?: boolean;
  clean?: boolean;
  password?: boolean;
  size?: string;
  maxlength?: number;
}
const props = withDefaults(defineProps<propsInterface>(), {
  size: "default",
});
let showPasswordIcon = ref(false);
let input = ref(null);
let emit = defineEmits(["update:modelValue"]);

watch(
  () => props.modelValue,
  (newVal, oldVal) => {
    if (typeof props.modelValue == "string") {
      if (props.maxlength && props.modelValue.length > props.maxlength) {
        emit("update:modelValue", oldVal);
        return;
      }
    }
  }
);
let inputHeight = adapter[props.size as keyof Test];
let isShowPassword = ref(props.password);
function inputValue(e: any) {
  if (
    input.value &&
    props.maxlength &&
    e.target.value.length > props.maxlength
  ) {
    /* eslint-disable */
    // @ts-ignore
    input.value.value = props.modelValue;
    return;
  }
  emit("update:modelValue", e.target.value);
}
function showPassword(e: any) {
  e.preventDefault();
  isShowPassword.value = !isShowPassword.value;
}
function deleteValue(e: any) {
  emit("update:modelValue", "");
  e.preventDefault();
}
function stopDefaultEvent(e: any) {
  e.preventDefault();
}
let paddingStyle = computed(() => {
  let paddingNum = calculateScore(props.clean, props.password, props.maxlength);
  return {
    "padding-right": `${paddingNum}px`,
  };
});
let countNum = computed(() => {
  return (props.modelValue + "").length;
});
let comClass = computed(() => {
  return ["xj-input", props.disable ? "xj-input--disable" : ""];
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
.icon[data-v-66aefa43] {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.xj-input {
  display: inline-block;
  position: relative;
  height: v-bind(inputHeight);
  width: 192px;
  input {
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid $border;
    padding: 10px 10px;
    font-size: 14px;
    color: $text;
    outline: none;
    height: 100%;
    transition: all 0.2s ease;
    &:focus {
      border-color: rgb(64, 158, 255);
    }
  }
}
.xj-input--disable {
  input {
    cursor: no-drop;
  }
}
.xj-input__icon {
  position: absolute;
  top: 0;
  right: 4px;
  text-align: center;
  cursor: pointer;
  height: 100%;
  line-height: v-bind(inputHeight);
}
.xj-input--medium {
  height: 36px;
}
.xj-input-count {
  height: 100%;
  display: inline-flex;
  align-items: center;
  color: #909399;
  font-size: 12px;
}
</style>
