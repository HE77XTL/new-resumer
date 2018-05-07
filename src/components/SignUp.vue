<template>
  <div class="login">
    <form action="">
      <label for="">
        <p>username</p>
        <input type="text" v-model="data.userMsg.userName">
      </label>
      <label for="">
        <p>E-mail</p>
        <input type="text" v-model="data.userMsg.email">
      </label>
      <label for="">
        <p>password</p>
        <input type="text" v-model="data.userMsg.password">
      </label>
    </form>
    <button v-on:click="signUp()">signup</button>
  </div>
</template>

<script>
import AV from 'leancloud-storage'


  export default {
    props: ['data'],
    methods: {
      signUp: function(){
        // 新建 AVUser 对象实例
        var user = new AV.User();
        // 设置用户名
        user.setUsername(this.data.userMsg.userName);
        // 设置密码
        user.setPassword(this.data.userMsg.password);
        // 设置邮箱
        user.setEmail(this.data.userMsg.email);
        user.signUp().then(function (loginedUser) {
            console.log(loginedUser);
        }, function (error) {
        });
      }
    }
  }
</script>