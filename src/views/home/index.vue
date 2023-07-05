<template>
  <div class="container">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="'#icon-a-zujiankubao'"></use>
    </svg>
    <span class="version-text">V1.0.1</span>
    <div class="box">
      <p>XJComponent</p>
      <div
        style="
          width: 100%;
          height: 2px;
          margin: 40px 0px;
          background-color: white;
        "
      ></div>
      <xj-button type="warning" @click="toMakdowm">开始使用</xj-button>
    </div>
    <svg class="animation-in" aria-hidden="true">
      <use xlink:href="#icon-jinrujiantou1"></use>
    </svg>
  </div>
  <div class="dowm-container">
    <div class="dowm-box">
      <img src="https://www.firstui.cn/img/img_code.png" />
      <text-list title="完善的组件库" :option-list="list"></text-list>
    </div>
  </div>
  <div class="dowm-container">
    <div class="dowm-box">
      <text-list title="海量优质模板" :option-list="list2"></text-list>
      <img src="https://www.firstui.cn/img/img_mod.png" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import textList from "./textList.vue";
import { ref, onUnmounted, watch } from "vue";
// import text from "./text.vue";
const router = useRouter();
function toMakdowm() {
  router.push({
    path: "/components",
  });
}
let list = ref([
  "海量组件选择",
  "多重样式变化",
  "时尚简约设计规范",
  "框架适配强",
  "详细代码提示",
]);
let list2 = ref(["登录", "签到", "新闻", "门户", "商城"]);
let bottomDistance = ref("40px");
let timer = setInterval(() => {
  bottomDistance.value = bottomDistance.value == "40px" ? "10px" : "40px";
}, 1000);
onUnmounted(() => {
  console.log("销毁");
  clearInterval(timer);
});
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url("./bg_banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  .animation-in {
    width: 40px;
    height: 40px;
    bottom: v-bind(bottomDistance);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transform: rotate(90deg);
    transition: all 1s ease;
  }
  .icon {
    position: absolute;
    top: 10px;
    left: 6%;
    width: 40px;
    height: 40px;
  }
  .version-text {
    position: absolute;
    top: 4%;
    left: 9%;
    color: white;
    font-size: 12px;
    font-weight: bold;
  }
  .box {
    margin-left: 6%;
    p {
      color: white;
      font-family: AlibabaPuHuiTiB;
      line-height: 99px;
      font-size: 72px;
    }
    button {
      margin-top: 20px;
    }
  }
}
.dowm-container {
  width: 900px;
  margin: 0 auto;
  .dowm-box {
    width: 900px;
    display: flex;
    justify-content: space-around;
    img {
      width: 450px;
      height: 450px;
    }
  }
}
</style>
