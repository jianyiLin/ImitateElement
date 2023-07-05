<template>
  <div :class="computedContainType">
    <a :href="ifhref" :class="computedHrefType">
      <slot></slot>
    </a>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "xjLink",
});
import { computed, ref } from "vue";
type linkType = "success" | "paimary" | "warn" | "error" | "info" | "default";
interface propsInterface {
  href?: string;
  type?: linkType;
  disabled?: boolean;
}

let props = withDefaults(defineProps<propsInterface>(), {
  href: "http://8.210.152.4:9999/#/home",
  type: "default",
  disabled: false,
});
let ifhref = computed(() => {
  return props.disabled ? "javascript:void(0)" : props.href;
});
let computedContainType = computed(() => {
  return ["link-container", props.disabled ? "is-disabled" : ""];
});
let computedHrefType = computed(() => {
  return `link-container__${props.type}`;
});
</script>
<style lang="scss" scoped>
.link-container {
  cursor: pointer;
  display: inline-block;
  a {
    color: inherit;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    position: relative;
    text-decoration: none;
    outline: none;
    padding: 0;
    font-size: 14px;
    font-weight: 500;
  }
  .link-container__success {
    display: inline-block;
    color: #67c23a;
    &:hover {
      border-bottom: #67c23a 1px solid;
      color: #67c23a;
    }
  }
  .link-container__default {
    display: inline-block;
    color: #606266;
    &:hover {
      border-bottom: #409eff 1px solid;
      color: #409eff;
    }
  }
  .link-container__primary {
    display: inline-block;
    color: #409eff;
    &:hover {
      border-bottom: #409eff 1px solid;
      color: #409eff;
    }
  }
  .link-container__warn {
    display: inline-block;
    color: #ebb563;
    &:hover {
      border-bottom: #ebb563 1px solid;
      color: #ebb563;
    }
  }
  .link-container__error {
    display: inline-block;
    color: #f78989;
    &:hover {
      border-bottom: #f78989 1px solid;
      color: #f78989;
    }
  }
  .link-container__info {
    display: inline-block;
    color: #a6a9ad;
    &:hover {
      border-bottom: #a6a9ad 1px solid;
      color: #a6a9ad;
    }
  }
}

.is-disabled {
  opacity: 0.5;
  a {
    cursor: not-allowed;

    &:hover {
      border-bottom: none !important;
    }
  }
  .link-container__default {
    &:hover {
      color: #606266;
      border-bottom: none;
    }
  }
}
</style>
