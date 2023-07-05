<!-- eslint-disable vue/require-default-prop -->
<template>
  <div class="list-container">
    <span>{{ title }}</span>
    <ul>
      <li v-for="item in optionList" :key="item">
        <img src="https://www.firstui.cn/img/round_check_fill.png" /> {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
let props = defineProps({
  optionList: [],
  title: {
    dafault: "标题",
    type: String,
  },
});
</script>
<style lang="scss" scoped>
.list-container {
  margin-top: 5%;
  span {
    font-size: 24px;
    font-weight: 400;
    color: #333;
    line-height: 33px;
    width: 600px;
  }
  ul {
    margin-top: 20px;
    li {
      list-style: none;
      height: 70px;
      display: block;
      color: #333;
      font-size: 14px;
    }
  }
}
</style>
