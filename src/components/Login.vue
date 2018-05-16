<template>
<div class="loginWrap">
  <div class="login">
    <a href="#" class="active">登陆</a> 
    <b>.</b>
    <router-link to="/signup">注册</router-link>
    <form action="">
      <div class="username">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yonghu"></use>
        </svg>
        <input type="text" v-model="userAccount.username">
      </div>
      <div class="password">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-mima"></use>
        </svg>
        <input type="password" v-model="userAccount.password">
      </div>
    </form>
    <button v-on:click="login()">登陆</button>
  </div>
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

<style lang="scss" scoped>
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: #777;
    overflow: hidden;
  }
  .loginWrap {
    padding-top: 120px;
  } 

  .login {
    width: 300px;
    margin: 0 auto;
    text-align: center;
    border-radius: 8px;
    padding: 5px;
    box-shadow: -2px 2px 4px 3px #ccc;

    a {
      font-size: 20px;
      line-height: 32px;
      padding: 7px;
      color: #afa5a5;
      &.active {
        border-bottom: 2px solid #ea6f5a;
        color: #ea6f5a
      }
      &:hover {
        border-bottom: 2px solid #ea6f5a;
        color: #ea6f5a
      }
      
    }
    form {
      margin-top: 30px;
    }
    div {
      padding: 3px;
      font-size: 20px;
      line-height: 40px;
      border: 1px solid rgb(200,200,200);
      border-bottom: none;
      background: rgb(248,248,248);
      display: flex;
      align-items: center;
      input {
        font-size: 20px;
        line-height: 30px;
        outline: none;
        border-style: none;
        background: rgb(248,248,248);
        font-family: Arial,Serif,Sans-serif,Cursive;
        color: hsl(64, 6%, 40%);
        flex: 1;
      }
    }
    .username {
      border-radius: 8px 8px 0 0;
    }
    .password {
      border-bottom: 1px solid rgb(200,200,200);
      border-radius: 0 0 8px 8px;
    }

    button {
      width: 280px;
      border: none;
      border-radius: 20px;
      background: #3194d0;
      margin-top: 30px;
      color: #fff;
      font-size: 20px;
      line-height: 33px;
      cursor: pointer;
      margin-bottom: 10px;
      padding: 2px;
      outline: none;
    }
   
  }  
</style>