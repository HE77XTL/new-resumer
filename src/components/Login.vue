<template>
  <div class="login">
    <form action="">
      <label for="">
        <p>username</p>
        <input type="text" v-model="data.userMsg.userName">
      </label>
      <label for="">
        <p>password</p>
        <input type="text" v-model="data.userMsg.password">
      </label>
    </form>
    <button v-on:click="login()">login</button>
    {{data}}
  </div>
</template>

<script>
import AV from 'leancloud-storage'

var APP_ID = 'SJXi3wo2nBxftSkxA7MnpmN7-gzGzoHsz';
var APP_KEY = 'YFwSYPN5DFNF39QtTnl9Yer9';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

  export default {
    props: ['data'],
    methods: {
      login: function(){
        AV.User.logIn(this.data.userMsg.userName, this.data.userMsg.password).then(function (loginedUser) {
          console.log(loginedUser);
          console.log(AV.User.current())
        }, function (error) {
        });
      }
    }
  }
</script>