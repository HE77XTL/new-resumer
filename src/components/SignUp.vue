<template>
  <div class="signupWrap">
      <div class="signup">
        <router-link to="/login">登陆</router-link>
        <b>.</b>
        <a href="#" class="active">注册</a> 
       <form action="#">
        <div class="username">
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yonghu"></use>
          </svg>
          <input type="text" v-model="userAccount.name">
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-email"></use>
          </svg>
          <input type="text" v-model="userAccount.email">
        </div>
        <div class="password">
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-mima"></use>
          </svg>
          <input v-bind:style="inputStyle" v-model="userAccount.password">
          <svg class="icon canView" aria-hidden="true">
              <use xlink:href="#icon-htmal5icon09"></use>
          </svg>
        </div>
      </form>
      <button v-on:click="signUp()">注册</button>     
    </div>
  </div>
</template>

<script>
import AV from 'leancloud-storage'


  export default {
    props: ['data'],
    data(){
      return {
        inputStyle: {
          color: 'red',
          type: 'password'
        },
        userAccount: {
          name: '',
          email: '',
          password: ''
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
    methods: {
      newUser: function(){
        console.log('aaa')
        this.$emit('newuser')
      },
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
            _this.data.userMsg.lock = true

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
              _this.data.userMsg.id = resumer.id
              _this.$router.push('/editor')
              console.log(_this.initData)
              console.log(_this.data)
              _this.newUser()
            }, function (error) {
              console.error(error);
            });
        }, function (error) {
        });
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
  .signupWrap {
    padding-top: 120px;
  } 

  .signup {
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
    .canView {
      cursor: pointer;
    }

    button {
      width: 280px;
      border: none;
      border-radius: 20px;
      background: #42c02e;
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