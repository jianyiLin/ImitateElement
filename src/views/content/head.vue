<template>
  <div class="xj-component-header" @click="toHome">
    <img src="@/assets/favicon.png" />
    <a>XJComponent</a>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
function toHome() {
  router.push("/");
}
</script>
<style lang="scss" scoped>
.xj-component-header {
  height: 80px;
  background-color: #fff;
  top: 0;
  left: 0;
  line-height: 80px;
  z-index: 100;
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px $border solid;

  img {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  a {
    color: #1989fa;
    padding-left: 5px;
    font-weight: bolder;
    font-size: 20px;
    cursor: pointer;
  }
}
</style>
