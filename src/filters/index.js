/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 11:19:33
 * @LastEditTime: 2019-08-09 11:30:41
 * @LastEditors: Please set LastEditors
 */
import toFilter from "./toFilter"
import toContant from "./toContant"

export default{
    install(Vue){
       Vue.filter("toFilter",toFilter)

       Vue.filter("toDif",toContant([{
           name:"身份证",
           value:1
       },{
           name:"护照",
           value:2
       }]))
    }
}