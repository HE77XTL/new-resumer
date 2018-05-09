<template>
  <div id="app">
    <router-view v-bind:data="data"></router-view>
    {{data}}
    <button v-on:click="saveData()">保存</button>
  </div>
</template>

<script>
import AV from 'leancloud-storage'
export default {
  name: 'App',
  data(){
    return {
      data: {
        userMsg: {
          userName: '',
          email: ''
        },
        resumer: {
          profile: {
            name: '',
            phone: '',
            email: '',
            school: '',
            degree: '',
            major: ''
          },
          jobIntend: {
            intendPost: '',
            intendCity: '',
            jobType: ''          
          },
          experience:[
            {compony: '',workContent:''}
          ],
          skill: [
            {skill:''},
            {skill:''}
          ]
        }
      }
    }
  },
  methods: {
    saveData: function(){
     console.log(111)
     var json_data=JSON.stringify(this.data)

  // 第一个参数是 className，第二个参数是 objectId
  var todo = AV.Object.createWithoutData('Todo', '5af1b8869f54545462c006d4');
  // 修改属性
  todo.set('name', '每周工程师会议，本周改为周三下午3点半。');
  // 保存到云端
  todo.save();


  // // 声明类型
  // var Todo = AV.Object.extend('Todo');
  // // 新建对象
  // var todo = new Todo();
  // // 设置名称
  // todo.set('name',json_data);
  // // 设置优先级
  // todo.set('priority',1);
  // todo.save().then(function (todo) {
  //   console.log('objectId is ' + todo.id);
  //   console.log(todo)
  // }, function (error) {
  //   console.error(error);
  // });
    }
  },
  created: function(){
    console.log(this.data)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
