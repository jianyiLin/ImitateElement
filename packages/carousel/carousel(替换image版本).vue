<template>
  <div class="xj-carousel-container">
    <img class="xj-carousel-image" :src="ImageResource.image" />

    <button class="carousel-button carousel-button-left" @click="beforeImage()">
      <svg class="carousel-button-icon" aria-hidden="true">
        <use xlink:href="#icon-jinrujiantou1"></use>
      </svg>
    </button>
    <button class="carousel-button carousel-button-right" @click="nextImage()">
      <svg class="carousel-button-icon" aria-hidden="true">
        <use xlink:href="#icon-jinrujiantou1"></use>
      </svg>
    </button>
    <ul class="xj-carousel-ul">
      <li
        v-for="(item, index) in itemList"
        :key="index"
        class="xj-carousel-li"
        @click="jumpImage(index)"
      >
        <button class="xj-carousel-li__button"></button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, toRaw, computed } from "vue";
import { decorationClass } from "./carousel";
type itemListType = {
  image: string;
};

interface propsInterface {
  itemList: itemListType[];
}

let props = defineProps<propsInterface>();
let newArraylist = decorationClass(props.itemList);
let ImageResource = ref(toRaw(newArraylist.value)[0]);
function beforeImage() {
  let number = ImageResource.value.index - 1 < 0 ? 2 : ImageResource.value.index - 1;
  ImageResource.value = toRaw(newArraylist.value)[number];
}
function nextImage() {
  let number = ImageResource.value.index + 1 > 2 ? 0 : ImageResource.value.index + 1;
  ImageResource.value = toRaw(newArraylist.value)[number];
}
function jumpImage(index: number) {
  ImageResource.value = toRaw(newArraylist.value)[index];
}
// let styleList = [
//   { transform: "translateX(0px)" },
//   { transform: "translateX(60vw)" },
//   { transform: "translateX(120vw)" },
// ];
</script>
<style lang="scss" scoped>
.xj-carousel-container {
  width: 60vw;
  height: 40vh;
  background-color: #d3dce6;
  display: flex;
  position: relative;
  overflow: hidden;
  .xj-carousel-image {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .carousel-button {
    border: none;
    outline: none;
    height: 36px;
    width: 36px;
    cursor: pointer;
    border-radius: 50%;
    background-color: rgba(31, 45, 61, 0.11);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 500ms ease;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    &:hover {
      background-color: rgba(31, 45, 61, 0.23);
    }
  }
  .carousel-button-left {
    left: 10px;
    .carousel-button-icon {
      width: 12px;
      height: 12px;
      position: relative;
      left: 3px;
      transform: rotate(180deg);
    }
  }
  .carousel-button-right {
    right: 10px;
    .carousel-button-icon {
      width: 12px;
      height: 12px;
      position: relative;
      right: 2px;
    }
  }
  .xj-carousel-ul {
    position: absolute;
    text-align: center;
    list-style: none;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;

    .xj-carousel-li {
      display: inline-block;
      padding: 12px 4px;
      cursor: pointer;

      .xj-carousel-li__button {
        background-color: rgba(31, 45, 61, 0.23);
        opacity: 0.24;
        width: 30px;
        height: 2px;
        border: none;
        outline: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
        opacity: 1;
        &:hover {
          background-color: #fff;
        }
      }
      .xj-carousel-li__button__active {
        background-color: #fff;
      }
    }
  }
}
</style>
