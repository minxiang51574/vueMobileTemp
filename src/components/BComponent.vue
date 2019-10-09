<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 15:28:10
 * @LastEditTime: 2019-08-09 16:03:11
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div>
        <button  @click="testClick()">组件</button>
    </div>
</template>
<script>
import { EventBus } from "./EventBus"
export default {
    data(){
        return{
            msg:"web前端"
        }
    },
    methods:{
        testClick(){
            EventBus.$emit("send",this.msg)
        }
    }
}
</script>

