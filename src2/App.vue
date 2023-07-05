基本使用
<template>
  <xj-carousel
    :item-list="carouselList"
    :autoplay="true"
    width="small"
    height="40vh"
    :time="2000"
  >
  </xj-carousel>
  <xj-link href="https://www.baidu.com" type="default" disabled>默认</xj-link>
  <xj-link href="https://www.baidu.com" type="primary">基本</xj-link>
  <xj-link href="https://www.baidu.com" type="success">成功</xj-link>
  <xj-link href="https://www.baidu.com" type="warn">危险</xj-link>
  <xj-link href="https://www.baidu.com" type="error">错误</xj-link>
  <xj-link href="https://www.baidu.com" type="info" disabled>信息</xj-link>
</template>

<script setup>
import xjCarousel from "../packages/carousel/carousel.vue";
import xjLink from "../packages/link/link.vue";
let carouselList = [
  {
    image: "https://img.sj33.cn/uploads/allimg/200607/20060709215708717.jpg",
  },
  {
    image: "https://pic2.zhimg.com/v2-2e80f0377a32bafd9721c0ab1d9d6bd1_r.jpg",
  },
  {
    image:
      "https://img0.baidu.com/it/u=712403678,4209468362&fm=253&fmt=auto&app=138&f=GIF?w=240&h=144",
  },
];
</script>
