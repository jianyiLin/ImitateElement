<script setup>
import primaryMessagebox from "./primaryMessagebox.vue"
import inputMessagebox from "./inputMessagebox.vue"
import messageboxTable from "./messageboxTable.vue"
import codeContainer from "../public/stretchCode/index.vue"
import {getString1} from "./getString1.js"
import {getString2} from "./getString2.js"
</script>

## 基本使用

<code-container :text="primaryMessagebox.code + getString1()"><primary-messagebox></primary-messagebox></code-container>

## 携带输入框

<code-container :text="inputMessagebox.code + getString2()"><input-messagebox></input-messagebox></code-container>

## 弹框属性

<messagebox-table></messagebox-table>
