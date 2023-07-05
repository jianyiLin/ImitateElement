export function getString2() {
  return `
<script setup>
    import { getCurrentInstance } from "vue";
    let toastType = {
        success: { type: "success", text: "成功" },
        error: { type: "error", text: "错误" },
        default: { type: "default", text: "默认" },
        warn: { type: "warn", text: "警告" },
    };
    const vm = getCurrentInstance();
    function showMessage(type) {
    vm.appContext.config.globalProperties.message(toastType[type]);
    } 
</script>`;
}
