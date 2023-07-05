<script setup>
import primarySwitch from "./primarySwitch.vue"
import disSwitch from "./disSwitch.vue"
import colorSwitch from "./colorSwitch.vue"
import valueSwitch from "./valueSwitch.vue"
import switchTable from "./switchTable.vue"
import switchmhTable from "./switchmhTable.vue"
import codeContainer from "../public/stretchCode/index.vue"
import {getString} from "./getString.js"
import {getString2} from "./getString2.js"
</script>

## 基本使用

<code-container :text="primarySwitch.code + getString()"><primary-switch></primary-switch></code-container>

## 禁用状态

<code-container :text="disSwitch.code + getString()"><dis-switch></dis-switch></code-container>

## 改变颜色

<code-container :text="colorSwitch.code + getString()"><color-switch></color-switch></code-container>

## 扩展 value 类型

<code-container :text="valueSwitch.code + getString2()"><value-switch></value-switch></code-container>

## 开关属性

<switch-table></switch-table>

## 开关回调函数

<switchmh-table></switchmh-table>
