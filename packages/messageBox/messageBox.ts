import { render, createVNode } from "vue";
import componentNode from "./messageBox.vue";
import componentNode2 from "./masking.vue";

export default {
  exportFunction: (obj?: any): void => {
    const el = document.createElement("div");
    const el2 = document.createElement("div");
    el.setAttribute("class", "container-box");
    document.body.appendChild(el);
    document.body.appendChild(el2);
    const vNode = createVNode(componentNode, obj);
    const vNode2 = createVNode(componentNode2);
    render(vNode, el);
    render(vNode2, el2);
  },
  name: "messageBox",
};
