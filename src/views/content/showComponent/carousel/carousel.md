<script setup>
import primaryCarousel from "./primaryCarousel.vue"
import sizeCarousel from "./sizeCarousel.vue"
import speedCarousel from "./speedCarousel.vue"
import autoCarousel from "./autoCarousel.vue"
import actionCarousel from "./actionCarousel.vue"
import carouselTable from "./carouselTable.vue"
import carouselmhTable from "./carouselmhTable.vue"
import codeContainer from "../public/stretchCode/index.vue"
import {getString} from "./getString.js"
</script>

## 基本使用

<code-container :text="primaryCarousel.code+getString()"><primary-carousel></primary-carousel></code-container>

## 不同尺寸

<code-container :text="sizeCarousel.code+getString()"><size-carousel></size-carousel></code-container>

## 跳转速度

<code-container :text="speedCarousel.code+getString()"><speed-carousel></speed-carousel></code-container>

## 停止轮播

<code-container :text="autoCarousel.code+getString()"><auto-carousel></auto-carousel></code-container>

## 走马灯属性

<carousel-table></carousel-table>

## 走马灯回调函数

<carouselmh-table></carouselmh-table>
