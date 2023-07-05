<template>
  <div style="overflow: hidden">
    <div class="xj-component-left-sidenav">
      <ul>
        <span>更新日志</span>
        <span>开发指南</span>
        <li
          v-for="item in reduceList"
          :key="item.name"
          @click="changeActiveName(item.name)"
          @mouseover="hoverName = item.name"
          @mouseleave="hoverName = ''"
        >
          <a :class="isChangeColor(item.name)" :href="item.path">{{
            item.name
          }}</a>
        </li>
      </ul>
      <ul>
        <span>组件</span>
        <li
          v-for="item in componentList"
          :key="item.name"
          @click="changeActiveName(item.name)"
          @mouseover="hoverName = item.name"
          @mouseleave="hoverName = ''"
        >
          <a :class="isChangeColor(item.name)" :href="item.path">{{
            item.name
          }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, toRaw, watch } from "vue";
const route = useRoute();
let hoverName = ref("");
type types = {
  name: string;
  path: string;
};
interface listInterface {
  reduceList: types[];
  componentList: types[];
}
let props = defineProps<listInterface>();
let scrollHeight = ref(Math.floor(window.innerHeight - 50) + "px");
let activeName = ref(initActiveName());

function changeActiveName(item: any) {
  activeName.value = item;
}
function initActiveName() {
  let newString = "/#" + route.fullPath;
  let newArray = [...toRaw(props.reduceList), ...toRaw(props.componentList)];
  for (let i = 0; i < newArray.length; i++) {
    if (newString == newArray[i].path) {
      return newArray[i].name;
    }
  }
}
function isChangeColor(item: any) {
  if (item == activeName.value || item == hoverName.value) {
    return "active-color";
  }
}
watch(
  () => route.fullPath,
  () => {
    activeName.value = initActiveName();
  }
);
</script>
<style lang="scss" scoped>
.xj-component-left-sidenav {
  padding-top: 50px;
  padding-bottom: 40px;
  box-sizing: border-box;
  overflow: scroll;
  width: 240px;
  max-height: v-bind(scrollHeight);
  bottom: 0;
  margin-right: -17px;
  ul {
    padding-bottom: 50px;
    padding: 0;
    margin: 0;
    overflow: hidden;
    span {
      font-size: 16px;
      color: #333;
      line-height: 40px;
      height: 40px;
      margin: 0;
      padding: 0;
      text-decoration: none;
      display: block;
      position: relative;
      transition: 0.15s ease-out;
      font-weight: 700;
    }
  }

  li {
    cursor: pointer;
    display: block;
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 500;
    a {
      position: relative;
      transition: 0.15s ease-out;
      margin: 0;
      padding: 0;
      text-decoration: none;
      display: block;
      height: 40px;
      color: #444;
      line-height: 40px;
      font-size: 14px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 400;
    }
    .active-color {
      color: $primary;
    }
  }
}
</style>
