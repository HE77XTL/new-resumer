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
      loginData: function(data){
        console.log('kkk')
        this,$emit('newuser')
      },
      login: function(){
        let _this = this
        AV.User.logIn(this.userAccount.username, this.userAccount.password).then(function (loginedUser) {
            _this.data.userMsg.lock = true
            console.log(loginedUser.id);
            console.log(AV.User.current())

            var query = new AV.Query('Resumer');
            query.equalTo('userID', loginedUser.id);
            query.find().then(function (results) {
              
                console.log(results[0])
                _this.data.userMsg.id = results[0].id
                var he = JSON.parse(results[0].attributes.userData)              
                _this.changeData(he)

               }, function (error) {
             });

            _this.$router.push('/editor')
        }, function (error) {
        });
        this.data = _this.data
      },
      changeData: function(he){
        console.log(he)
        this.data.resumer = he.resumer
      }
    }
  }
</script>