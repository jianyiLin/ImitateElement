export function getString() {
  return `
<script setup>
    import { ref } from "vue";
    let isLoading = ref(false);
    function changeLoadingStatus() {
        isLoading.value = true;
        setTimeout(() => {
        isLoading.value = false;
        }, 3000);
    }
</script>`;
}
