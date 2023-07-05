<script setup>
import primaryDrawer from "./primaryDrawer.vue"
import titleDrawer from "./titleDrawer.vue"
import actionDrawer from "./actionDrawer.vue"
import drawermhTable from "./drawermhTable.vue"
import drawerTable from "./drawerTable.vue"
import codeContainer from "../public/stretchCode/index.vue"
import {getString} from "./getString.js"
</script>

## 基本使用

<code-container :text="primaryDrawer.code + getString()"><primary-drawer></primary-drawer></code-container>

## 添加标题

<code-container :text="titleDrawer.code + getString()"><title-drawer></title-drawer></code-container>

## 回调事件

<code-container :text="actionDrawer.code + getString()"><action-drawer></action-drawer></code-container>

## 抽屉属性

<drawer-table></drawer-table>

## 抽屉回调函数

<drawermh-table></drawermh-table>
