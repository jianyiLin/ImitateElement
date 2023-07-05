<template>
  <div :class="boxCompuClass">
    <input
      type="checkbox"
      name=""
      true-value="true"
      class="el-switch__input"
      :value="modelValue"
    />
    <div :class="containerCompuClass" @click="showAni"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
defineOptions({
  name: "xjSwitch",
});
interface propsInterface {
  inactiveColor?: string;
  activeColor?: string;
  modelValue?: string | boolean;
  activeValue?: string;
  inactiveValue?: string;
  diasble?: boolean;
}
let props = defineProps<propsInterface>();

interface adaptObjInterface {
  true: string;
  false: string;
}
let adaptObj: adaptObjInterface = {
  true: "5px",
  false: "28px",
};
let emits = defineEmits(["update:modelValue", "change"]);
let boxCompuClass = computed(() => {
  return ["el-switch-box", props.diasble ? "disable" : ""];
});
let containerCompuClass = computed(() => {
  let arraylist = ["xj-switch-container"];
  if (
    props.activeValue &&
    props.inactiveValue &&
    props.modelValue == props.activeValue
  ) {
    arraylist.push("checked");
  } else {
    if (props.modelValue) {
      arraylist.push("checked");
    }
  }
  return arraylist;
});
let movePosition = computed(() => {
  if (props.activeValue && props.inactiveValue) {
    return adaptObj[
      ((props.modelValue == props.activeValue) + "") as keyof adaptObjInterface
    ];
  }
  return adaptObj[((props.modelValue != "") + "") as keyof adaptObjInterface];
});
function showAni() {
  if (props.diasble) {
    return;
  }
  if (props.activeValue && props.inactiveValue) {
    emits(
      "update:modelValue",
      props.modelValue == props.activeValue
        ? props.inactiveValue
        : props.activeValue
    );
    emits(
      "change",
      props.modelValue == props.activeValue
        ? props.inactiveValue
        : props.activeValue
    );
    return;
  }
  emits("update:modelValue", !props.modelValue);
  emits("change", !props.modelValue);
}

let unActiveColor = () => {
  if (props["inactiveColor"]) {
    return props["inactiveColor"];
  } else {
    return "rgb(220, 223, 230)";
  }
};
let activeColor = () => {
  if (props["activeColor"]) {
    return props["activeColor"];
  } else {
    return "rgb(64, 158, 255)";
  }
};
let chooseColor = computed(() => {
  if (props.activeValue && props.inactiveValue) {
    if (props.modelValue == props.activeValue) {
      return activeColor();
    } else {
      return unActiveColor();
    }
  }
  return props.modelValue ? activeColor() : unActiveColor();
});
</script>
<style lang="scss" scoped>
.el-switch-box {
  display: inline-block;
}

.xj-switch-container {
  height: 22px;
  width: 44px;
  border: 1px solid;
  border-radius: 100px;
  border: 1px solid #cccccc;
  background-color: v-bind(chooseColor);
  position: relative;
  cursor: pointer;

  &::after {
    transition: all 0.2s ease-in-out;
    content: "";
    width: 12px;
    height: 12px;
    position: absolute;
    left: v-bind(movePosition);
    top: 5px;
    border-radius: 50%;
    background-color: white;
    display: inline-block;
  }
}
.disable {
  opacity: 0.6;
  .xj-switch-container {
    cursor: no-drop;
  }
}
.checked {
  background-color: v-bind(chooseColor);
}
.el-switch__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>
