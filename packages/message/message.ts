import { render, createVNode } from "vue";
import componentNode from "./message.vue";
type messageStatus = "success" | "error" | "default" | "warn";
export interface propsInterface {
  type: messageStatus;
  text: string;
}
const arraylist: any[] = [];
export default {
  exportFunction: (
    Propsobj: propsInterface = { type: "default", text: "这是一条默认值" },
  ): void => {
    let timer: any = null;
    const el = document.createElement("div");
    el.setAttribute("class", "container-box");
    document.body.appendChild(el);
    const height = arraylist.length * 80 + "px";
    const obj = {
      height,
      isExit: true,
      ...Propsobj,
    };

    /* eslint-disable */
    // @ts-ignore
    const vNode = createVNode(componentNode, obj);
    render(vNode, el);
    arraylist.push(vNode);
    clearTimeout(timer);
    timer = setTimeout(() => {
      //卸载
      const obj2 = {
        height,
        isExit: false,
        ...Propsobj,
      };
      const vNode = createVNode(componentNode, obj2);
      render(vNode, el);
      arraylist.shift();
    }, 3000);
  },
  name: "message",
};
