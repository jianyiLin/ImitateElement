<script setup>
import primaryLink from "./primaryLink.vue"
import typeLink from "./typeLink.vue"
import disLink from "./disLink.vue"
import linkTable from "./linkTable.vue"
import codeContainer from "../public/stretchCode/index.vue"

</script>

## 基本使用

<code-container :text="primaryLink.code"><primary-link></primary-link></code-container>

## 链接类型

<code-container :text="typeLink.code"><type-link></type-link></code-container>

## 禁用状态

<code-container :text="disLink.code"><dis-link></dis-link></code-container>

## 链接属性

<link-table></link-table>
