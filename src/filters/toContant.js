/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 11:25:42
 * @LastEditTime: 2019-08-09 11:30:21
 * @LastEditors: Please set LastEditors
 */
export default function toContant(array){
    return function(value){
        const temp = array.find(item => item.value == value)
        if(temp){
            return temp.name
        }else{  
            return ""
        }
    }
}