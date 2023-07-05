export function getString() {
  return `
<script setup>
  import { ref } from "vue";
  let isShowDraw = ref(false);
  function showDraw() {
    isShowDraw.value = true;
  }
</script>`;
}
