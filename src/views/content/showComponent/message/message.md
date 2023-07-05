<script setup>
import primaryMessage from "./primaryMessage.vue"
import typeMessage from "./typeMessage.vue"
import codeContainer from "../public/stretchCode/index.vue"
import messageTable from "./messageTable.vue"
import {getString} from "./getString.js"
import {getString2} from "./getString2.js"
</script>

## 基本使用

<code-container :text="primaryMessage.code + getString()"><primary-message></primary-message></code-container>

## 不同状态

<code-container :text="typeMessage.code + getString2()"><type-message></type-message></code-container>

## 消息属性

<message-table></message-table>
