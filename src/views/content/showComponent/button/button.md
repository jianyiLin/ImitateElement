<script setup>
    import primaryButton from "./primaryButton.vue"
    import typeButton from "./typeButton.vue"
    import disButton from "./disButton.vue"
    import circleButton from "./circleButton.vue"
    import iconButton from "./iconButton.vue"
    import buttonTable from "./buttonTable.vue"
    import codeContainer from "../public/stretchCode/index.vue"
</script>

## 基本使用

<code-container :text="primaryButton.code" ><primary-button ></primary-button></code-container>

## 各种类型

<code-container :text="typeButton.code"><type-button></type-button></code-container>

## 禁用状态

<code-container :text="disButton.code"><dis-button></dis-button></code-container>

## 圆角状态

<code-container :text="circleButton.code"><circle-button></circle-button></code-container>

## 图标按钮

<code-container :text="iconButton.code"><icon-button></icon-button></code-container>

## 按钮属性

<button-table></button-table>
