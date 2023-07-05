<template>
  <div v-show="visible">
    <div class="v-model"></div>
    <div v-ClickOutside class="xj-drawer-container">
      <div class="xj-drawer-box">
        <div v-if="title" class="container-head-element">
          <span> {{ title }}</span>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "xjDrawer",
});
import { ref, watch } from "vue";
type myFunction = () => any;
interface propsInterface {
  visible: boolean;
  title?: string;
}
let emits = defineEmits(["update:visible", "open", "close"]);
let props = defineProps<propsInterface>();
const vClickOutside = {
  beforeMount(e: any) {
    let callback = (el: any) => {
      if (e.contains(el.target)) {
      } else {
        if (showContainer.value) {
          setTimeout(() => {
            width.value = "0vw";
            emits("close");
            setTimeout(() => {
              emits("update:visible", false);
            }, 500);
          }, 0);

          return;
        }
        showContainer.value = true;
      }
    };
    window.addEventListener("click", callback);
  },
};
let width = ref("0vw");
let showContainer = ref(false);
// props.open();
watch(
  () => props.visible,
  (newValue, oldValue) => {
    if (oldValue == false) {
      showContainer.value = false;
    }
    if (newValue) {
      emits("open");
      setTimeout(() => {
        width.value = "30vw";
      }, 0);
    }
  }
);
</script>
<style lang="scss" scoped>
.xj-drawer-container {
  transition: all 500ms ease-in-out;
  width: v-bind(width);
  position: fixed;
  top: 0px;
  right: 0px;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
    0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  outline: 0;
  z-index: 2018;
  .xj-drawer-box {
    margin-right: -17px;
    overflow: scroll;
    min-height: 103vh;
    max-height: 103vh;
    background-color: white;
    margin-bottom: -17px;
  }
}
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
.container-head-element {
  align-items: center;
  color: #72767b;
  display: flex;
  margin-bottom: 32px;
  padding: 20px 20px 0;
  span {
    flex: 1;
  }
}
</style>
