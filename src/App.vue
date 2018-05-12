<template>
  <div id="app">
    <router-view v-bind:data="data_he" v-on:newuser="newuser()"></router-view>
    <SaveData v-bind:data="data_he"></SaveData>
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
    window.onbeforeunload = ()=>{
      var dataString = JSON.stringify(this.data_he)
      window.localStorage.setItem('heData', dataString)
    }
    var oldDataString = window.localStorage.getItem('heData')
    console.log(1123)
    let oldData = JSON.parse(oldDataString)
    console.log(oldData)
    this.data_he = oldData || this.initData
  },
  methods: {
    newuser: function(){
      console.log(11112121123)
      this.data_he = this.initData
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
