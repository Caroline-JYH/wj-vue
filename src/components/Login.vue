<template>
  <div>
    用户名：<input
      v-model="loginForm.username"
      type="text"
      placeholder="请输入用户名"
    >
    <br ><br >
    密码：
    <input
      v-model="loginForm.password"
      type="password"
      placeholder="请输入密码"
    >
    <br ><br >
    <button @click="login">登录</button>
  </div>
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
      this.$axios
        .post('/login', {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        .then(succcessResponse => {
          if (succcessResponse.data.code === 200) {
            this.$router.replace({ path: '/index' })
          }
        })
        .catch(failResponse => {})
    }
  }
}
</script>
