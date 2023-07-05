<template>
  <button :class="comClass" :disabled="disable">
    <svg v-if="props.icon.length" class="icon" aria-hidden="true">
      <use :xlink:href="'#icon-' + iconName"></use>
    </svg>
    <span> <slot></slot></span>
  </button>
</template>
<script setup lang="ts">
defineOptions({
  name: "xjButton",
});
import { adapter, Test } from "./button";
import { computed } from "vue";
let props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  disable: {
    type: Boolean,
  },
  round: {
    type: Boolean,
  },
  circle: {
    type: Boolean,
  },
  icon: {
    type: String,
    default: "",
  },
});
let iconName: string = adapter[props.icon as keyof Test];
let comClass = computed(() => {
  return [
    "t-button",
    `t-button--${props.type}`,
    props.disable ? "t-button--disable" : "",
    props.round ? "t-button--round" : "",
    props.circle ? "t-button--cricle" : "",
    props.icon.length != 0 ? "t-button--icon" : "",
  ];
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

button {
  cursor: pointer;
  border: 0px;
  background: none;
  outline: none;
  font-size: 14px;
}
.t-button {
  font-weight: 500;
  line-height: 1;
  padding: 12px 24px;
  border-radius: 4px;
  border: 1px solid $border;
  &:hover {
    opacity: 0.8;
  }
}
.t-button--default {
  &:hover {
    color: $primary;
    background-color: #ecf5ff;
  }
  color: rgb(96, 98, 102);
  background-color: $default;
}
.t-button--warning {
  color: $default;
  background-color: $warning;
}
.t-button--info {
  background-color: $info;
  color: $default;
}
.t-button--primary {
  background-color: $primary;
  color: $default;
}
.t-button--success {
  background-color: $success;
  color: $default;
}
.t-button--error {
  background-color: $error;
  color: $default;
}
.t-button--disable {
  opacity: 0.4;
  cursor: no-drop !important;
  &:hover {
    opacity: 0.4;
  }
}
.t-button--round {
  border-radius: 20px;
}
.t-button--cricle {
  border-radius: 50%;
}
.t-button--icon {
  padding: 12px;
}
</style>
./button
