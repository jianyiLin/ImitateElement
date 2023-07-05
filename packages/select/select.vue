<template>
  <div v-ClickOutside class="xj-select">
    <input
      class="xj-select__input"
      :readonly="filterable ? false : true"
      type="text"
      :disabled="disable"
      :placeholder="placeholder"
      :value="modelValue"
      :style="disable ? 'cursor:no-drop;' : ''"
      @input="modifyListData"
    />
    <svg :class="iconComClass" aria-hidden="true">
      <use xlink:href="#icon-jinrujiantou"></use>
    </svg>
    <transition-group
      name="animate__animated animate__bounce"
      enter-active-class="animate__fadeIn"
      leave-active-class="animate__fadeOut"
      style="animation-duration: 50ms"
    >
      <div v-if="isExitPosition" class="select-opsition-container">
        <div class="select-opsition-arrow"></div>
        <div class="select-opsition-schroll">
          <div class="select-position-box">
            <li
              v-for="(item, index) in filterable ? newList : options"
              :key="index"
              :class="item.disable ? 'options-disable-li' : 'options-li'"
              @mousedown="getLiItem(item.disable, item.value, index)"
            >
              {{ item.value || item }}
            </li>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "xjSelect",
});
import { ref, computed, toRaw, Ref } from "vue";
let isUseful: Ref<boolean> = ref(true);
interface propsInterface {
  placeholder?: string;
  options?: any;
  width?: string;
  disable?: boolean;
  filterable?: boolean;
  modelValue?: string;
}
const emits = defineEmits(["chooseEnd", "update:modelValue"]);
const props = withDefaults(defineProps<propsInterface>(), {
  width: "200px",
  options: [],
});
let showAnimation: Ref<boolean> = ref(false);
let isExitPosition: Ref<boolean> = ref(false);
let newList: any = ref();
newList.value = toRaw(props.options);
let iconComClass = computed(() => {
  return [
    "xj-input-icon",
    showAnimation.value
      ? "xj-input-icon--animation-roate"
      : "xj-input-icon--animation-reback",
  ];
});
const vClickOutside = {
  beforeMount(e: any) {
    let callback = (el: any) => {
      if (!props.disable && isUseful.value) {
        if (e.contains(el.target)) {
          showAnimation.value = !showAnimation.value;
          isExitPosition.value = !isExitPosition.value;
        } else {
          isExitPosition.value = false;
          showAnimation.value = false;
        }
      } else {
        isUseful.value = true;
      }
    };
    window.addEventListener("click", callback);
  },
};
function modifyListData(e: any) {
  newList.value = toRaw(props.options).filter((item: any) => {
    return item.value.indexOf(e.target.value) !== -1;
  });
}
function getLiItem(disable: any, value: any, index: number) {
  if (!disable) {
    isExitPosition.value = false;
    showAnimation.value = false;
    // 这边将数据回调给父组件，让用户实现调用
    // emits("chooseEnd", { value, index });
    emits("update:modelValue", value);
  }
  isUseful.value = false;
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
.xj-select {
  min-width: v-bind(width);
  display: inline-block;
  position: relative;
  .xj-select__input {
    box-sizing: border-box;
    width: 100%;
    padding: 8px 10px;
    outline: none;
    cursor: pointer;
    border: 1px solid $border;
    &:focus {
      border-color: rgb(64, 158, 255);
    }
  }
  .xj-input-icon {
    width: 25px;
    color: #c0c4cc;
    font-size: 14px;
    display: block;
    cursor: pointer;
    position: absolute;
    height: 15px;
    right: 0px;
    top: 10px;
    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
  }
  .xj-input-icon--animation-roate {
    transform: rotate(180deg);
  }
  .xj-input-icon--animation-reback {
    transform: rotate(0deg);
  }

  .select-opsition-container {
    margin-top: 10px;
    position: absolute;
    width: 100%;
    .select-opsition-arrow {
      position: absolute;
      display: block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-bottom: 5px solid $border;
      transform: translate(30px, -8px);
      z-index: 999;
    }
    .select-opsition-arrow::after {
      position: absolute;
      display: block;
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid;
      content: "";
      border-width: 6px;
      top: 1px;
      margin-left: -6px;
      border-top-width: 0;
      border-bottom-color: #fff;
    }
    .select-opsition-schroll {
      overflow: hidden;
      position: absolute;
      min-width: 200px;
      border: 1px solid #dcdfe6;
      background-color: white;
      z-index: 2019;
      .select-position-box {
        margin-bottom: -17px;
        margin-right: -17px;
        margin-left: -13px;
        max-height: 274px;
        overflow: scroll;
        padding-top: 5px;
        box-shadow: $shadow;
        z-index: 2039;
        background-color: #fff;

        .options-li {
          cursor: pointer;
          list-style: none;
          line-height: 40px;
          padding-left: 28px;
          span {
            color: #606266;
          }
          &:hover {
            background-color: rgb(245, 247, 250);
          }
        }
        .options-disable-li {
          line-height: 40px;
          padding-left: 10px;
          list-style: none;
          color: $border;
          cursor: no-drop;
        }
      }
    }
  }
}
</style>
