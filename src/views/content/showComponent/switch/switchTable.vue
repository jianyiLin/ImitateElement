<template>
  <table>
    <thead>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>v-model</td>
        <td>绑定值</td>
        <td>boolean / string</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>diasble</td>
        <td>是否禁用</td>
        <td>boolean</td>
        <td>true / false</td>
        <td>false</td>
      </tr>
      <tr>
        <td>active-color</td>
        <td>switch 打开时的背景色</td>
        <td>string</td>
        <td>-</td>
        <td>#409EFF</td>
      </tr>
      <tr>
        <td>inactive-color</td>
        <td>switch 关闭时的背景色</td>
        <td>string</td>
        <td>-</td>
        <td>#C0CCDA</td>
      </tr>
      <tr>
        <td>active-value</td>
        <td>switch 打开时的值</td>
        <td>string</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>inactive-value</td>
        <td>switch 关闭时的值</td>
        <td>string</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </tbody>
  </table>
  <div style="width: 100%; height: 40px"></div>
</template>
<script>
export default {
  code: `123`,
};
</script>
<script setup lang="ts"></script>
<style lang="scss" scoped>
table {
  margin-top: 20px;
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
  font-size: 14px;
  line-height: 1.5em;
  display: table;
  padding-bottom: 40px;
}
th {
  text-align: left;
  white-space: nowrap;
  color: #909399;
  font-weight: 400;
  padding-left: 10px;
}
td {
  border-bottom: 1px solid #dcdfe6;
  padding: 15px;
  max-width: 250px;
  padding-left: 10px;
  color: #606266;
}
</style>
