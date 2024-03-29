/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 08:49:52
 * @LastEditTime: 2019-08-09 09:03:59
 * @LastEditors: Please set LastEditors
 */
// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-pxtorem": {
      "rootValue": 100,
      "propList": ["*"],
      // 注意：如果有使用第三方UI如VUX，则需要配置下忽略选择器不转换。
      // 规则是class中包含的字符串，如vux中所有的class前缀都是weui-。也可以是正则。
      "selectorBlackList": ["weui-"]
    }
    
  }
}
