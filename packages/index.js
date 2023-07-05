import xjButton from "./button/button.vue";
import xjLoading from "./loading/loading.vue";
import xjSelect from "./select/select.vue";
import xjRadio from "./radio/radio.vue";
import xjUserhead from "./userHead/userHead.vue";
import xjSwitch from "./switch/switch.vue";
import xjCarousel from "./carousel/carousel.vue";
import xjDrawer from "./drawer/drawer.vue";
import xjInput from "./input/input.vue";
import xjMessage from "./message/message";
import xjMessagebox from "./messageBox/messageBox";
import xjLik from "./link/link";
import "./public.css";
const components = [
  xjLoading,
  xjButton,
  xjSelect,
  xjRadio,
  xjUserhead,
  xjSwitch,
  xjCarousel,
  xjDrawer,
  xjInput,
  xjLik,
];
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 遍历注册全局组件
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
  Vue.config.globalProperties.message = xjMessage.exportFunction;
  Vue.config.globalProperties.messageBox = xjMessagebox.exportFunction;
  // 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
  if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
  }
};

// 导出的对象必须具有 install，才能被 Vue.use() 方法安装
export default install;
export {
  xjLoading,
  xjButton,
  xjSelect,
  xjRadio,
  xjUserhead,
  xjSwitch,
  xjCarousel,
  xjDrawer,
  xjInput,
};
