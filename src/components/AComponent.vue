<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 09:12:15
 * @LastEditTime: 2019-08-09 16:04:40
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    这是子组件
    {{mes}}
    <p>{{newArr[0]}}</p>
    <button @click="send">发送</button>
    <header>
      <slot name="header" :user="user">
            {{ user.lastName }}
      </slot>
    </header>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script>
import { EventBus } from "./EventBus"
export default {
  // props:["newArr"],
  props:{
    newArr:Array,
    newObj:Object
  },
    data(){
        return{
            user:{
                firstName:"firstName22",
                lastName:"lastName"
            },
            mes:""
        }
    },
    methods:{
      send(){
        this.$emit("success",132)
      }
    },
    created(){
      console.log(this.$parent)
    },
    mounted(){
    EventBus.$on('send', val => {
      this.mes = val
      console.log("___"+val)
    });
    }

}
</script>

