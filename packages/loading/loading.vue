<template>
  <div v-if="isLoading" class="xj-loading-container">
    <div class="xj-loading-spinner">
      <svg class="loading-icon" aria-hidden="true">
        <use xlink:href="#icon-loading"></use>
      </svg>
      <br />
      <label class="loading-label">{{ text }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
defineOptions({
  name: "xjLoading",
});
interface propsInterface {
  isLoading: boolean;
  text?: string;
}
let props = withDefaults(defineProps<propsInterface>(), {
  isLoading: false,
  text: "",
});
</script>
<style lang="scss" scoped>
.xj-loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: hsla(0, 0%, 100%, 0.9);
  .xj-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translatey(-50%);
    text-align: center;
    width: 100%;
    .loading-icon {
      width: 42px;
      height: 42px;
      display: inline-block;
      animation: loading-roate 1s linear infinite;
    }
    .loading-label {
      color: #409eff;
      margin: 3px 0;
      font-size: 14px;
    }
  }
}

@keyframes loading-roate {
  from {
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
