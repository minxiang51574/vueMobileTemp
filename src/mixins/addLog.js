/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 13:47:23
 * @LastEditTime: 2019-08-09 14:04:53
 * @LastEditors: Please set LastEditors
 */
// export default function(){
//    return {
//        data(){
//            return {
//             message: 'hello',
//             foo: 'abc'
//            }
//        },
//       created: function () {
//         // this.hello()
//       },
//       updated:function(){
//         console.log("数据放生变化,变化成"+this.num+"");
//      },
//       methods: {
//         hello: function () {
//           console.log('hello from mixin!')
//         }
//       },
//    }
// }
export const addLog = {
    data(){
        return {
         message: 'hello',
         foo: 'abc'
        }
    },
    created: function () {
        // this.hello()
      },
      updated:function(){
        console.log("数据放生变化,变化成"+this.num+"");
     },
    methods: {
        hello: function () {
          console.log('hello from mixin!')
        }
      },
}