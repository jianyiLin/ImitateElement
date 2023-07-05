<template>
  <div class="xj-component-container">
    <head-template></head-template>
    <div class="xj-component-content">
      <left-bar
        :reduce-list="reduceList"
        :component-list="componentList"
      ></left-bar>
      <div
        style="overflow: hidden; width: calc(100% - 240px); height: fit-content"
      >
        <div class="content-box" @scroll="scroll">
          <router-view style="position: relative; top: 50px"> </router-view>
          <div v-if="isshowIcon" class="top-icon" @click="totop">
            <div class="top-icon-arrow"></div>
          </div>
          <div class="footer-nav">
            <a
              v-show="routeFullPath != '/components/install'"
              name="bottomLeft"
              @click="beforeRoute"
              >&lt; 上一级</a
            >
            <a
              v-show="routeFullPath != '/components/messagebox'"
              style="position: absolute; right: 20px"
              name="bottomRight"
              @click="afterRoute"
              >下一级 ></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import headTemplate from "./head.vue";
import leftBar from "./leftBar.vue";
import { ref, onMounted, onUnmounted, toRaw, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
let reduceList = ref([
  { name: "安装", path: "/#/components/install" },
  { name: "快速上手", path: "/#/components/quickUse" },
]);
let componentList = ref([
  { name: "Button 按钮", path: "/#/components/button" },
  { name: "Link 链接", path: "/#/components/link" },
  { name: "Input 输入框", path: "/#/components/input" },
  { name: "Radio 单选框", path: "/#/components/radio" },
  { name: "Switch 开关", path: "/#/components/switch" },
  { name: "Select 选择器", path: "/#/components/select" },
  { name: "Head 头像", path: "/#/components/head" },
  { name: "Loading 加载", path: "/#/components/loading" },
  { name: "Drawer 抽屉", path: "/#/components/drawer" },
  { name: "Carousel 走马灯", path: "/#/components/carousel" },
  { name: "Message 消息", path: "/#/components/message" },
  { name: "Messagebox 弹窗", path: "/#/components/messagebox" },
]);
let isshowIcon = ref(false);
let routeFullPath = ref(route.fullPath);

let dom: any = null; // 定义全局的变量，来记录滚动盒子的dom元素
let num = 0; // 滚动盒子的高度
const scroll = (e: any) => {
  // e 是事件对象
  num = e.target.scrollTop; // 滚动条距离顶部的距离
  dom = e.target; // 滚动盒子
  isshowIcon.value = num > 40 ? true : false;
};
function totop() {
  let time = setInterval(() => {
    // 如果 ，滚动的高度是小于定于0 ，就清除定时器
    if (num <= 0) {
      clearInterval(time); // 清空
    } else {
      // 否则，就让滚动盒子的高度--
      num = num - 20;
      // num--
      dom.scrollTop = num; // 让滚动盒子的高度= 0
    }
  }, 10);
}
watch(
  () => route.fullPath,
  (newValue, oldValue) => {
    routeFullPath.value = newValue;
  }
);

let leftWidth = ref(Math.floor((window.innerWidth - 1120) / 2) + "px");

function beforeRoute() {
  let middlePath = "";
  let newString = "/#" + route.fullPath;
  let newArray = [...toRaw(reduceList.value), ...toRaw(componentList.value)];
  for (let i = 0; i < newArray.length; i++) {
    if (i - 1 >= 0) {
      middlePath = newArray[i - 1].path;
    }
    if (newString == newArray[i].path) {
      router.push(middlePath.split("#")[1]);
    }
  }
}
function afterRoute() {
  let newString = "/#" + route.fullPath;
  let newArray = [...toRaw(reduceList.value), ...toRaw(componentList.value)];
  for (let i = 0; i < newArray.length; i++) {
    if (newString == newArray[i].path) {
      router.push(newArray[i + 1].path.split("#")[1]);
    }
  }
}
onMounted(() => {
  /* eslint-disable */
  // @ts-ignore
  document.querySelector("body").setAttribute("style", "overflow:hidden");
});
onUnmounted(() => {
  // @ts-ignore
  document.querySelector("body").setAttribute("style", "overflow:visible");
});
</script>
<style lang="scss" scoped>
.xj-component-container {
  width: 1120px;
  position: relative;
  left: v-bind(leftWidth);
  height: calc(100vh);
  overflow: hidden;

  .xj-component-content {
    width: 100%;
    height: calc(100% - 81px);
    display: flex;
  }
}
.content-box {
  overflow: scroll;
  margin-right: -17px;
  margin-bottom: -15px;
  max-height: 656px;
  min-height: 656px;
  position: relative;
  .top-icon {
    width: 40px;
    height: 40px;
    position: fixed;
    right: 52px;
    bottom: 77px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    font-size: 20px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
    cursor: pointer;
    z-index: 5;
    &:hover {
      background-color: #f2f6fc;
    }
    .top-icon-arrow {
      border-top: 8px solid transparent;
      border-bottom: 8px solid #409eff;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      position: relative;
      bottom: 15px;
    }
  }
  .footer-nav {
    margin-bottom: 60px;
    margin-top: 40px;
    color: #999;
    transition: 1s ease all;
    position: relative;
    :hover {
      color: $primary;
    }
    a {
      cursor: pointer;
    }
  }
}
</style>
