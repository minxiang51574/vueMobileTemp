<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 14:13:03
 * @LastEditTime: 2019-08-23 14:10:26
 * @LastEditors: Please set LastEditors
 -->
<template>
  <!-- <span v-for="(item,index) in arrReverser" :key="index">
            {{item}}
        </span>
        <button @click="add">添加</button>
  <b ref="aa">{{obj.num}}</b>-->
  <div class="record">
    <h1>Click following button to record voice:</h1>
    <input @click="startRecord" type="button" value="录音" />
    <input @click="stopRecord" type="button" value="停止" />
    <input @click="play" type="button" value="播放" />
    <div class="record-play" v-show="isFinished">
      <h2>Current voice player is:</h2>
      <audio controls autoplay></audio>
    </div>
  </div>
</template>
<script>
import Record from "../utils/record-sdk";
export default {
  name: "Record",
  data() {
    return {
      isFinished: false,
      audio: "",
      recorder: new Record()
    };
  },
  methods: {
    startRecord: function() {
      console.log("start to record now.");
      let self = this;
      self.isFinished = false;
      self.recorder.startRecord({
        success: res => {
          console.log("start record successfully.");
        },
        error: res => {
          console.log("start record failed.");
        }
      });
    },
    stopRecord: function() {
      console.log("stop record now.");
      let self = this;
      self.isFinished = false;
      self.recorder.stopRecord({
        success: res => {
          //此处可以获取音频源文件(res)，用于上传等操作
          console.log("stop record successfully.");
          console.log(res);
        },
        error: res => {
          console.log("stop record failed.");
        }
      });
    },
    play: function() {
      console.log("play record now.");
      let self = this;
      self.isFinished = true;
      self.audio = document.querySelector("audio");
      self.recorder.play(self.audio);
      console.log(self.audio);

    },



    getTextstep1() {
    //    let signa = 
      let params = {
        app_id: "5d5a8668",
        signa: "IrrzsJeOFk1NGfJHW6SkHUoN9CU=",
        ts: new Date().getTime(),
        file_len: this.files.size,
        file_name: "demo.wav",
        slice_num: 1
      };

      let config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
      };
      axios
        .post("https://raasr.xfyun.cn/api/prepare", params, config)
        .then(res => {})
        .catch(err => {});
    }
  },
  created(){

  }
};

// export default {
//   data() {
//     return {
//       arr: [1, 2, 3],
//       obj: {
//         num: 1
//       },
//       num2: ""
//     };
//   },
//   methods: {
//     add() {
//       this.obj.num++;
//       // console.log(this.$refs.aa.innerText)
//       this.$nextTick(function() {
//         console.log(this.$refs.aa.innerText); //输出：修改后的值
//       });
//     }
//   },
//   created() {
//     // this.add()
//     // console.log(this.$root)
//     //   this.$nextTick(function(){  //不使用this.$nextTick()方法会报错
//     // this.$refs.aa.innerHTML="created中更改了按钮内容";  //写入到DOM元素
//     //   })
//     //     this.$refs.aa.innerHTML="created中更改了按钮内容";  //写入到DOM元素
//   },
//   computed: {
//     arrReverser: function() {
//       return this.arr.reverse();
//     }
//   },
//   watch: {
//     // "obj.num":function(newVal,oldVal){
//     //     console.log(newVal,oldVal)
//     // }
//     obj: {
//       handler: function(newVal, oldVal) {
//         console.log(newVal, oldVal);
//       },
//       deep: true,
//       immediate: true
//     }
//   }
// };
</script>

