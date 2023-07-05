export function getString() {
  return `
<script setup>
import { ref } from "vue";
let value = ref("");
let arrayList = ref([
  {
    value: "黄金糕",
  },
  {
    value: "双皮奶",
  },
  {
    value: "蚵仔煎",
  },
  {
    value: "龙须面",
  },
  {
    value: "北京烤鸭",
  },
]);
</script>`;
}
