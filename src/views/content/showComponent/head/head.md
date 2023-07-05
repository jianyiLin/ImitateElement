<script setup>
import primaryHead from "./primaryHead.vue"
import sizeHead from "./sizeHead.vue"
import circleHead from "./circleHead.vue"
import inputTable from "./inputTable.vue"
import codeContainer from "../public/stretchCode/index.vue"
</script>

## 基本使用

<code-container :text="primaryHead.code"><primary-head></primary-head></code-container>

## 是否圆形

<code-container :text="circleHead.code"><circle-head></circle-head></code-container>

## 不同尺寸

<code-container :text="sizeHead.code"><size-head></size-head></code-container>

## 头像属性

<input-table></input-table>
