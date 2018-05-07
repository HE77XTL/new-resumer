<template>
  <div id="app">
    <router-view v-bind:data="data"></router-view>
    {{data.resumer}}
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      data: {
        userMsg: {
          userName: 'xiaoming',
          email: 'he1234567@qq.com',
          password:'he12345678'
        },
        resumer: {
          profile: {
            name: '小明',
            phone: 12345678,
            email: 'he1234567@qq.com',
            school: '西北工业大学',
            degree: '本科',
            major: '能源与动力工程'
          },
          jobIntend: {
            intendPost: '前端工程师',
            intendCity: '南宁',
            jobType: '全职'
          },
          experience:[
            {compony: 'xxx',workContent:'yyy'}
          ],
          skill: [
            {skill:'html'},
            {skill:'css'}
          ]
        }
      }
    }
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
