<script setup>
import primarySelect from "./primarySelect.vue"
import widthSelect from "./widthSelect.vue"
import disSelect from "./disSelect.vue"
import searchSelect from "./searchSelect.vue"
import codeContainer from "../public/stretchCode/index.vue"
import selectTable from "./selectTable.vue"
import {getString} from "./getString.js"
</script>

## 基本使用

<code-container :text="primarySelect.code + getString()"><primary-select></primary-select></code-container>

## 可搜索

<code-container :text="searchSelect.code  + getString()"><search-select></search-select></code-container>

## 修改宽度

<code-container :text="widthSelect.code + getString()"><width-select></width-select></code-container>

## 是否禁用

<code-container :text="disSelect.code + getString()"><dis-select></dis-select></code-container>

## 选择器属性

<select-table></select-table>
