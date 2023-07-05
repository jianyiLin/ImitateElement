<script setup>
import quickUsereduce from "./quickUse.vue"
import {getString} from "./alluse.js"
import {getString2} from "./requireUse.js"
import {getString3} from "./getString.js"
import codeContainer from "../public/showCode/index.vue"
</script>

## 快速上手

<quick-usereduce></quick-usereduce>

## 完整引入

<span style="color:#333;font-size:14px;font-weight:400;margin-top:10px;display:block">在 main.js 中写入以下内容</span>

<code-container :text="getString()"></code-container>

## 按需引入

<span style="color:#333;font-size:14px;font-weight:400;margin-top:10px;display:block">在父级文件中进行按需导入</span>

<code-container :text="getString2()"></code-container>

<span style="color:#333;font-size:14px;font-weight:400;">还需单独在 main.js 中引入 css 样式</span>

<code-container :text="getString3()"></code-container>
