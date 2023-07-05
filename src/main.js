import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import "animate.css";
import "xj_component/xj_component.css";
import xjComponent from "xj_component";
import "github-markdown-css";
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import "highlight.js/styles/color-brewer.css";
const app = createApp(App);
app.use(xjComponent);
app.use(router);
app.mount("#app");
app.directive("highlight", function (el) {
  const blocks = el.querySelectorAll("code");
  blocks.forEach((element) => {
    // console.log(element);
    hljs.highlightBlock(element);
  });
});
