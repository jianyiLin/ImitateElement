<script setup>
import primaryInput from "./primaryInput.vue"
import sizeInput from "./sizeInput.vue"
import cleanInput from "./cleanInput.vue"
import disInput from "./disInput.vue"
import lenInput from "./lenInput.vue"
import passwordInput from "./passwordInput.vue"
import inputTable from "./inputTable.vue"
import codeContainer from "../public/stretchCode/index.vue"
import {getString} from "./getString.js"
</script>

## 基本使用

<code-container :text="primaryInput.code + getString()"><primary-input></primary-input></code-container>

## 尺寸

<code-container :text="sizeInput.code + getString()"><size-input></size-input></code-container>

## 可清空

<code-container :text="cleanInput.code + getString()"><clean-input></clean-input></code-container>

## 禁用状态

<code-container :text="disInput.code + getString()"><dis-input></dis-input></code-container>

## 输入长度限制

<code-container :text="lenInput.code + getString()"><len-input></len-input></code-container>

## 密码框

<code-container :text="passwordInput.code + getString()"><password-input></password-input></code-container>

## 输入框属性

<input-table></input-table>
