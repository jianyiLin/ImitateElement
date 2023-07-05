export function getString1() {
  return ` 
<script setup>
  import { getCurrentInstance } from "vue";
  const vm = getCurrentInstance();
  function showTabel() {
    vm.appContext.config.globalProperties.messageBox({
      title: "标题",
      content: "这是用户输入的内容",
      sureButtonText: "确定",
      cancleButtonText: "取消",
      callback: (e) => {
      console.log("回调事件" + e);
      },
    });
  }
</script>`;
}
