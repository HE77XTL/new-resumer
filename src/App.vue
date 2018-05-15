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
          id: ''
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
      },
      initData: {
        userMsg: {
          userName: '',
          email: '',
          lock: false,
          id: ''
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
  created(){
    if(this.$route.path == '/'){
      console.log(this.$route.path)
      // this.isEditor = false
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
      console.log(11112121123)
      this.data_he = this.initData
    },
    logindata: function(){
      console.log('hahah')
    },
    saveData: function(){
      alert(456)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
