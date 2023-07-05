export function getString() {
  return `
  import { createApp } from "vue";
  import App from "./App.vue";
  import "xj_component/xj_component.css";
  import xjComponent from "xj_component";
  const app = createApp(App);
  app.use(xjComponent);
  app.mount("#app");
   `;
}
