<template>
  <div
    class="xj-carousel-container"
    @mouseover="isShowbutton = true"
    @mouseout="isShowbutton = false"
  >
    <img
      v-for="(item, index) in itemList"
      :key="item.image"
      :style="computedStylePosition(index as 0|1|2)"
      class="xj-carousel-image"
      :src="item.image"
    />

    <button
      :class="isShowbutton ? 'showButton' : ''"
      class="carousel-button carousel-button-left"
      @click="beforeImage"
    >
      <svg class="carousel-button-icon" aria-hidden="true">
        <use xlink:href="#icon-jinrujiantou1"></use>
      </svg>
    </button>
    <button
      :class="isShowbutton ? 'showButton' : ''"
      class="carousel-button carousel-button-right"
      @click="nextImage"
    >
      <svg class="carousel-button-icon" aria-hidden="true">
        <use xlink:href="#icon-jinrujiantou1"></use>
      </svg>
    </button>
    <ul class="xj-carousel-ul">
      <li
        v-for="(item, index) in dotList"
        :key="index"
        class="xj-carousel-li"
        @click="changeImgaePosition(index)"
      >
        <button
          :class="item == 1 ? 'xj-carousel-li__button__active' : ''"
          class="xj-carousel-li__button"
        ></button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "xjCarousel",
});
import { reactive, watch, computed, ref, toRaw, toRefs } from "vue";
import {
  createdotList,
  createpositionAddress,
  createadaptAddressdot,
} from "./carousel";
type myFunction = () => any;
type itemListType = {
  image: string;
};
interface propsInterface {
  itemList: itemListType[];
  time?: number;
  width?: string;
  height?: string;
  autoplay?: boolean;
}
let widthType = {
  large: 100,
  default: 60,
  small: 40,
};
let props = withDefaults(defineProps<propsInterface>(), {
  time: 2000,
  autoplay: true,
  width: "default",
  height: "40vh",
});
let { width, height } = toRefs(props);
let carouselWidth = widthType[props.width] + "vw";
let emits = defineEmits(["change"]);
let isShowbutton = ref(false);
let changeTime = (props.time / 1000 > 1 ? 1 : props.time / 1000) + "s";
let timer: any = null;
let positionAddress = reactive({
  position: createpositionAddress(props.itemList, widthType[props.width]),
});
let dotList = ref(createdotList(props.itemList));
watch(positionAddress, (newValue) => {
  emits("change");
  for (let i = 0; i < toRaw(newValue).position.length; i++) {
    if (newValue.position[i] == 0) {
      dotList.value[i] = 1;
      continue;
    }
    dotList.value[i] = 0;
  }
});
let computedStylePosition = computed(() => (index: any) => {
  return {
    transform: `translateX(${positionAddress.position[index]}vw)`,
  };
});
function beforeImage() {
  for (let i = 0; i < positionAddress.position.length; i++) {
    if (positionAddress.position[i] + widthType[props.width] > 0 && i == 0) {
      positionAddress.position = createadaptAddressdot(
        props.itemList,
        widthType[props.width]
      )[props.itemList.length - 1];
      break;
    }
    positionAddress.position[i] =
      positionAddress.position[i] + widthType[props.width];
  }
  clearInterval(timer);
  intervalNextImage();
}
function nextImage() {
  for (let i = 0; i < positionAddress.position.length; i++) {
    if (
      positionAddress.position[i] - widthType[props.width] <
        -1 *
          createpositionAddress(props.itemList, widthType[props.width])[
            props.itemList.length - 1
          ] &&
      i == 0
    ) {
      positionAddress.position = createpositionAddress(
        props.itemList,
        widthType[props.width]
      );
      break;
    }
    positionAddress.position[i] =
      positionAddress.position[i] - widthType[props.width];
  }
  clearInterval(timer);
  intervalNextImage();
}
function changeImgaePosition(index: number) {
  //这边赋值，公用数组，出现bug
  positionAddress.position = createadaptAddressdot(
    props.itemList,
    widthType[props.width]
  )[index];
  clearInterval(timer);
  intervalNextImage();
}
function intervalNextImage() {
  if (props.autoplay) {
    timer = setTimeout(() => {
      nextImage();
    }, props.time);
  }
}
intervalNextImage();
</script>
<style lang="scss" scoped>
.xj-carousel-container {
  cursor: pointer;
  width: v-bind(carouselWidth);
  height: v-bind(height);
  background-color: #fff;
  display: flex;
  position: relative;
  overflow: hidden;
  .xj-carousel-image {
    transition: all v-bind(changeTime) ease;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .carousel-button {
    opacity: 0;
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
  .showButton {
    opacity: 1;
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
        height: 4px;
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
