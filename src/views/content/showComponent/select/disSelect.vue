<template>
  <xj-select
    v-model="value"
    placeholder="请输入"
    :options="arrayList"
    disable
  ></xj-select>
</template>
<script>
export default {
  code: `123`,
};
</script>
<script setup>
import { ref } from "vue";
let value = ref("");
let arrayList = ref([
  {
    value: "黄金糕",
  },
  {
    value: "双皮奶",
  },
  {
    value: "蚵仔煎",
  },
  {
    value: "龙须面",
  },
  {
    value: "北京烤鸭",
  },
]);
</script>
<style lang="scss" scoped></style>
