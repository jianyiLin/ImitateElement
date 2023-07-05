<template>
  <div :class="sizeComputed">
    <img
      ref="userImageRef"
      src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
    />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "xjUserhead",
});
import { computed, ref, toRef } from "vue";
interface propsInter {
  img: string;
  size?: string;
  circle?: boolean;
}
let userImageRef = ref<any>(null);
let props = defineProps<propsInter>();
let image = new Image();
image.src = toRef(props.img).value;
image.onload = () => {
  userImageRef.value.src = props.img;
};

let sizeComputed = computed(() => {
  return ["userhead", props.size ? props.size : "", props.circle ? "circle" : ""];
});
</script>
<style lang="scss" scoped>
.userhead {
  width: 40px;
  height: 40px;
  display: inline-block;
  background-color: rgb(192, 196, 204);
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
}
.circle {
  border-radius: 50%;
  img {
    border-radius: 50%;
  }
}
.large {
  width: 50px;
  height: 50px;
}
.small {
  width: 36px;
  height: 36px;
}
.mini {
  width: 28px;
  height: 28px;
}
</style>
