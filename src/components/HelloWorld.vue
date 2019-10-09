<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 08:49:52
 * @LastEditTime: 2019-10-09 10:12:12
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="hello">
    <router-link :to="{path:'/page2'}">去page2</router-link>
    这是父组件 {{time}}
    {{1 | toFilter}}
    {{2 | toDif}}
<!-- <ul>
            <li v-for=" aa in arr">{{aa}}</li>
        </ul> -->

     <!-- <div v-mx="color33" id="demo">
            {{num}}
        </div> -->
        <div>
            <button @click="add">Add</button>
        </div>
    <a-component :newArr="arr" :newObj="obj" @success="success">
      <template v-slot:header="{user}">
        <!-- 这是Header -->
         {{user.firstName }}
      </template>
       <!-- <template slot="footer">
        <h1>这是尾部</h1>
      </template> -->
       <template v-slot:footer>
        <h1>这是尾部</h1>
      </template>


    </a-component>
    <b-Component></b-Component>

  </div>
</template>

<script type="text/javascript">

import Vue from 'vue'
import {addLog} from "@/mixins/addLog";
import AComponent from "./AComponent";
import BComponent from "./BComponent";
// Vue.filter('my-filter', function (value) {
//   let arr =["","Web","java"]
//   return arr[value]
// }) 

  // Vue.directive('mx',function(el,binding,vnode){
  //       el.style='color:'+ binding.value;

  // });
  
// var addLog={
//             updated:function(){
//                 console.log("数据放生变化,变化成"+this.num+"");
//             }
//         }
export default {
  components: {
    AComponent,BComponent
  },
  mixins:[addLog],
  data() {
    return {
      msg: "rem布局",
      time:this.$date.format(null,"yyyy-mm-dd hh:ii:ss"),
      timer:null,
      num:1,
      color33: 'red',
      arr:['mx1','mx2','mx3'],
      obj:{
        xx:0
      }
    };
  },
  methods:{
      add(){
        // console.log("我已经执行了");
        this.num += 1
          //  this.arr[1]='ddd';
           //Vue.set(app.arr,1,'ddd');
          //  this.$set(this.arr,1,'ddd')
          this.hello()
      },
      success(val){
        console.log(val)
      }
  },
  beforeCreate(){
    console.log("beforeCreate")
  },
  created(){

    console.log(this.$children)
    this.hello()
    console.log("created")
    // this.timer = setInterval( _ =>{
    //    this.time = this.$date.format(null,"yyyy-mm-dd hh:ii:ss")
    // },1000)
  },
  beforeMount(){
    console.log("beforeMount")
  },
  mounted(){
    // console.log(this)
     console.log("mounted")
  },
  beforeUpdate(){
  console.log("beforeUpdate")
  },
  updated(){
  console.log("updated")
  },
  beforeDestroy(){
    console.log("beforeDestroy")
  },
  destroyed(){
     console.log("destroyed")
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  font-size: 16px;
  width: 750px;
	height: 1136px
}
.item1 {
  width: 750px;
  font-size: 16px;
}
</style>
