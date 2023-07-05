<script setup>
import primaryRadio from "./primaryRadio.vue"
import disRadio from "./disRadio.vue"
import radioTable from "./radioTable.vue"
import codeContainer from "../public/stretchCode/index.vue"
import {getString} from "./getString.js"
</script>

## 基本使用

<code-container :text="primaryRadio.code + getString()"><primary-radio></primary-radio></code-container>

## 禁用

<code-container :text="disRadio.code + getString()"><dis-radio></dis-radio></code-container>

## 单选框属性

<radio-table></radio-table>
