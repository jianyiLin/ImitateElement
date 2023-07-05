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
        <td>title</td>
        <td>弹框标题</td>
        <td>string</td>
        <td>-</td>
        <td>这是默认标题</td>
      </tr>
      <tr>
        <td>content</td>
        <td>弹框内容</td>
        <td>stirng</td>
        <td>-</td>
        <td>这是默认内容</td>
      </tr>
      <tr>
        <td>sureButtonText</td>
        <td>确认按钮文字</td>
        <td>stirng</td>
        <td>-</td>
        <td>确定</td>
      </tr>
      <tr>
        <td>cancleButtonText</td>
        <td>取消按钮文字</td>
        <td>stirng</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>showInput</td>
        <td>是否展示输入框</td>
        <td>boolean</td>
        <td>true / false</td>
        <td>false</td>
      </tr>
      <tr>
        <td>callback</td>
        <td>确认之后的回调函数</td>
        <td>function</td>
        <td>-</td>
        <td>-</td>
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
