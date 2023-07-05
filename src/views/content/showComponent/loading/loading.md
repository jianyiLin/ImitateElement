<script setup>
import primaryLoading from "./primaryLoading.vue"
import textLoading from "./textLoading.vue"
import loadingTable from "./loadingTable.vue"
import codeContainer from "../public/stretchCode/index.vue"
import {getString} from "./getString.js"
</script>

## 基本使用

<code-container :text="primaryLoading.code + getString()"><primary-loading></primary-loading></code-container>

## 加载文本

<code-container :text="textLoading.code + getString()"><text-loading></text-loading></code-container>

## 加载组件属性

<loading-table></loading-table>
