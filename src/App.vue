<template>
  <div id="app">
    <router-view v-bind:data="data_he" v-on:newuser="newuser()" v-on:saveData="saveData()"></router-view>
  </div>
</template>

<script>
import SaveData from '@/components/SaveData'

import AV from 'leancloud-storage'
export default {
  name: 'App',
  components: {
    SaveData
  },
  data(){
    return {
      isEditor: false,
      data_he: {
        userMsg: {
          userName: '',
          email: '',
          lock: false,
          id: '',
          notLogin: true
        },
        resumer: {
          profile: {
            name: ['',"姓名"],
            phone: ['',"电话"],
            email: ['',"邮箱"],
            school: ['',"学校"],
            degree: ['',"学历"],
            major: ['',"专业"]
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
      },
      initData: {
        userMsg: {
          userName: '',
          email: '',
          lock: false,
          id: '',
          notLogin: true
        },
        resumer: {
          profile: {
            name: ['',"姓名"],
            phone: ['',"电话"],
            email: ['',"邮箱"],
            school: ['',"学校"],
            degree: ['',"学历"],
            major: ['',"专业"]
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
  created(){
     var currentUser = AV.User.current();
     if(currentUser){
        console.log(currentUser.attributes.username)
        console.log(this.data_he.userMsg.userName)
        this.data_he.userMsg.notLogin = false
        this.data_he.userMsg.userName =  currentUser.attributes.username
        console.log(this.data_he.userMsg.userName)
     }

    window.onbeforeunload = ()=>{
      var dataString = JSON.stringify(this.data_he)
      window.localStorage.setItem('heData', dataString)
    }
    var oldDataString = window.localStorage.getItem('heData')
    let oldData = JSON.parse(oldDataString)
    this.data_he = oldData || this.initData
  },
  methods: {
    newuser: function(){
      var currentUser = AV.User.current();
      console.log(11112121123)
      this.data_he = this.initData
      if(AV.User.current()){
        this.data_he.userMsg.notLogin = false
         this.data_he.userMsg.userName =  currentUser.attributes.username
      }
    },
    logindata: function(){
      console.log('hahah')
    },
    saveData: function(){
      var currentUser = AV.User.current();
      var json_data=JSON.stringify(this.data_he)
      // 第一个参数是 className，第二个参数是 objectId
      var resumer = AV.Object.createWithoutData('Resumer', this.data_he.userMsg.id);
      // 修改属性
      resumer.set('userData', json_data);
      // 保存到云端
      resumer.save();
    }
  }
}
</script>

<style lang="scss">
body {
  padding: 20px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
