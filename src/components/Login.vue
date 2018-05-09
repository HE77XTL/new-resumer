<template>
  <div class="login">
    <form action="">
      <label for="">
        <p>username</p>
        <input type="text" v-model="userAccount.username">
      </label>
      <label for="">
        <p>password</p>
        <input type="text" v-model="userAccount.password">
      </label>
    </form>
    <button v-on:click="login()">login</button>
    {{data}}
  </div>
</template>

<script>
import AV from 'leancloud-storage'

// var APP_ID = 'SJXi3wo2nBxftSkxA7MnpmN7-gzGzoHsz';
// var APP_KEY = 'YFwSYPN5DFNF39QtTnl9Yer9';

// AV.init({
//   appId: APP_ID,
//   appKey: APP_KEY
// });

  export default {
    props: ['data'],
    data(){
      return {
        userAccount: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login: function(){
        let _this = this
        AV.User.logIn(this.userAccount.username, this.userAccount.password).then(function (loginedUser) {
            console.log(loginedUser.id);
            console.log(AV.User.current())

            var query = new AV.Query('Resumer');
            query.equalTo('userID', loginedUser.id);
            query.find().then(function (results) {
              console.log(results[0].attributes)
            }, function (error) {
            });

            _this.$router.push('/editor')
        }, function (error) {
        });
      }
    }
  }
</script>