<template>
  <body id="poster">
    <el-form class="login-container" label-position="left" label-width="0px">
      <h3 class="login_title">系统denglu</h3>
      <el-form-item>
        <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="账号"/>
      </el-form-item>
      <el-form-item>
        <el-input v-model="loginForm.password" type="password" auto-complete="off" placeholder="密码"/>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button type="primary" style="width:100%;background: #505458;border:none" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </body>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      responseResult: []
    }
  },
  methods: {
    login() {
      console.log('login入口')
      var _this = this
      this.$axios
        .post('/login', {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        .then(succcessResponse => {
          console.log('username=' + this.loginForm.username)
          console.log('password=' + this.loginForm.password)
          if (succcessResponse.data.code === 200) {
            _this.$store.commit('login', _this.loginForm)
            var path = this.$route.query.redirect
            this.$router.replace({ path: path === '/' || path === undefined ? '/index' : path })
          }
        })
        .catch(failResponse => {})
    }
  }
}
</script>
<style>
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  #poster {
    background:url("../assets/eva.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  body{
    margin: 0px;
  }

</style>
