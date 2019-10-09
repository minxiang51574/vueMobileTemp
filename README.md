
# vueMobileTemp
vue移动端适配方案以及vue练习

### 技术栈
- vue-cli：使用脚手架工具创建项目
- postcss-pxtorem：转换px为rem的插件



## 设置根节点html的font-size

### 1、创建rem.js文件
### 2、在main.js中引入rem.js


## 配置 postcss-pxtorem 自动转换px为rem

### 1、安装 postcss-pxtorem
```js
$ npm install postcss-pxtorem -D
```
### 2、修改根目录 .postcssrc.js 文件
找到 plugins 属性新增pxtorem的设置
```js
"postcss-pxtorem": {
  "rootValue": 32,
  "propList": ["*"],
  // 注意：如果有使用第三方UI如VUX，则需要配置下忽略选择器不转换。
  // 规则是class中包含的字符串，如vux中所有的class前缀都是weui-。也可以是正则。
  "selectorBlackList": ["weui-"]
}
```