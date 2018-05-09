<template>
  <div class="login">
    <form action="">
      <label for="">
        <p>username</p>
        <input type="text" v-model="userAccount.name">
      </label>
      <label for="">
        <p>E-mail</p>
        <input type="text" v-model="userAccount.email">
      </label>
      <label for="">
        <p>password</p>
        <input type="text">
      </label>
    </form>
    <button v-on:click="signUp()">signup</button>
  </div>
</template>

<script>
import AV from 'leancloud-storage'


  export default {
    props: ['data'],
    data(){
      return {
        userAccount: {
          name: '',
          email: '',
          password: ''
        }
      }
    },
    methods: {
      signUp: function(){
        var _this = this
        // 新建 AVUser 对象实例
        var user = new AV.User();
        // 设置用户名
        user.setUsername(this.userAccount.name);
        // 设置密码
        user.setPassword(this.userAccount.password);
        // 设置邮箱
        user.setEmail(this.userAccount.email);
        user.signUp().then(function (loginedUser) {
            console.log(loginedUser);
            _this.data.userMsg.userName = _this.userAccount.name;
            _this.data.userMsg.email = _this.userAccount.email;

            var json_data=JSON.stringify(_this.data)           
            console.log(json_data)
            // 声明类型
            var Resumer = AV.Object.extend('Resumer');
            // 新建对象
            var resumer = new Resumer();
            // 设置名称
            resumer.set('userID',loginedUser.id);
            resumer.set('userData',json_data)
            // 设置优先级
            resumer.set('priority',1);
            resumer.save().then(function (resumer) {             
              console.log(resumer)
              _this.$router.push('/editor')
            }, function (error) {
              console.error(error);
            });
        }, function (error) {
        });
      }
    }
  }
</script>