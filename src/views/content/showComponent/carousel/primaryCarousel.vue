<template>
  <xj-carousel :item-list="carouselList"> </xj-carousel>
</template>
<script>
export default {
  code: `123`,
};
</script>
<script setup>
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
<style lang="scss" scoped></style>
