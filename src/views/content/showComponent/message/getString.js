export function getString() {
  return `
<script setup>
    import { getCurrentInstance } from "vue";
    const vm = getCurrentInstance();
    function showMessage(type) {
        vm.appContext.config.globalProperties.message();
    } 
</script>`;
}
