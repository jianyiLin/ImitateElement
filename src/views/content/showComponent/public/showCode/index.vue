<template>
  <div class="all-container">
    <div :class="['show-code-box', 'code-box']">
      <pre v-highlight style="display: flex">
        <code class="hljs"> {{ text }}</code>
      </pre>
    </div>
  </div>
  <div style="height: 40px; width: inherit"></div>
</template>

<script setup lang="ts">
interface propsInterface {
  text: string;
}
defineProps<propsInterface>();
</script>
<style lang="scss" scoped>
pre code.hljs {
  background-color: rgb(250, 250, 250) !important;
  display: inline !important;
}

.all-container {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  margin-top: 16px;
  .code-box {
    background-color: #fafafa;
    border-top: 1px solid #eaeefb;
    height: 0px;
    transition: all 0.2s ease;
    width: 100%;
    code {
      margin: 0;
      border: none;
      max-height: none;
      border-radius: 0;
    }
  }
  .show-code-box {
    height: initial;
    padding: 20px 10px;
  }
  .content-box {
    margin: 40px 0px;
  }
  ::v-deep .content-box > * {
    margin-left: 10px;
  }
  .tabbar-box {
    width: calc(100%);
    background-color: #fff;
    height: 44px;
    display: block;
    border-top: 1px solid #eaeefb;
    cursor: pointer;
    transition: all 1s ease;

    .full-box {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: 14px;
        line-height: 44px;
        transition: 1s;
        opacity: 0;
        display: inline-block;
        position: relative;
        right: 0px;
      }
      .xj-input-icon {
        width: 25px;
        color: #c0c4cc;
        font-size: 14px;
        display: block;
        height: 15px;
        transition-property: all;
        transition-duration: 1s;
        transition-timing-function: ease;
        position: relative;
        right: 0px;
      }
      .xj-input-icon--animation-roate {
        transform: rotate(180deg);
      }
      .xj-input-icon--animation-reback {
        transform: rotate(0deg);
      }
    }

    .full-box__active {
      span,
      .xj-input-icon {
        right: 50px;
        opacity: 1;
      }
      color: #409eff;
      background-color: rgb(249, 250, 252);
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
        0 2px 4px 0 rgba(232, 237, 250, 0.5);
    }
  }
}

.all-container__active {
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
    0 2px 4px 0 rgba(232, 237, 250, 0.5);
}
</style>
