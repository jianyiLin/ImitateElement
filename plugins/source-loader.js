// eslint-disable-next-line @typescript-eslint/no-var-requires

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-var-requires
// var xss = require("xss");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { baseParse } = require("@vue/compiler-core");
module.exports = function (source, map) {
  //   console.log(map);
  let array = source.split("<script");
  // console.log(array[0]);
  // 1. 获取带有 <docs /> 标签的文件完整路径
  //   const { resourcePath } = this;
  //   const file = fs.readFileSync(resourcePath).toString();
  //   console.log(file);
  //   console.log(file);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  //   import component from resourcePath
  //   console.log(component);
  //   console.log(component);
  //   source.code = ;
  // 2. 读取文件内容
  //   const file = fs.readFileSync(resourcePath).toString();
  // 3. 通过 baseParse 将字符串模板转换成 AST 抽象语法树
  // 3.1获取源代码信息标签内容
  //   console.log(baseParse(file).children);
  //   const sourceInfoTag = baseParse(file).children.find((n) => {
  //     // return n.tag === "template";
  //     console.log(n);
  //   });
  //   const sourceTitleTag = sourceInfoTag.children.find((n) => n.tag === "template");
  //   console.log(sourceTitleTag);
  //   const sourceDescTag = sourceInfoTag.children.find((n) => n.tag === "source-desc");
  //   // // 4. 标题
  //   const title = (sourceTitleTag.children[0] || {}).content;
  //   // // 4.1描述
  //   const desc = (sourceDescTag.children[0] || {}).content;
  //   // 5. 将 <source-info></source-info> 标签和内容抽离
  //   const main = file.split(sourceInfoTag.loc.source).join("").trim();
  //   // Component.options.__sourceCodeTitle = ${JSON.stringify(title)}
  //   // Component.options.__sourceCodeTitle = ${JSON.stringify(desc)}
  //   // 6. 回到并添加到 组件对象上面
  return source.replace(123, array[0]);
};
