<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <h3 class="title">运营平台数据统计</h3>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input v-model="loginForm.account" name="username" type="text" auto-complete="on" placeholder="请输入商户号" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :type="pwdType"
          v-model="loginForm.password"
          name="password"
          auto-complete="on"
          placeholder="请输入密码"
          @keyup.enter.native="handleLogin" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="eye" />
        </span>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" type="primary" class="login" style="width:100%;" @click.native.prevent="handleLogin">
          登陆
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { isvalidUsername } from '@/utils/validate'
import axios from 'axios'
import qs from 'qs'
import { setToken } from '@/utils/auth'
export default {
  name: 'Login',
  data() {
    const validatePass = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        account: '',
        password: ''
      },
      loginRules: {
        account: [
          { required: true, trigger: 'blur' }
        ],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      loading: false,
      pwdType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          // this.$store.dispatch('Login', this.loginForm).then(() => {
          //   this.loading = false
          //   this.$router.push({ path: this.redirect || '/' })
          // }).catch(() => {
          //   this.loading = false
          // })
          const url = `http://192.168.1.190:9023/login`
          axios.post(url,qs.stringify(this.loginForm)).then(
            res => {
            //  console.log(res.data)
              if (res.data.status === 1 && res.data.code === '0001') {
                setToken(res.data.data.token)
                this.$router.push({ path: this.redirect || '/' })
                this.loading = false
                // commit('SET_TOKEN', res.data.data.token)
              } else {
                if (res.data.status === 0) {
                  this.$message({
                    showClose: true,
                    message: '账号或密码不正确',
                    type: 'error'
                  })
                  this.loading = false
                }
              }
            },
            err => {
              this.$message({
                  showClose: true,
                  message: '服务器错误,请联系管理员',
                  type: 'error'
              })             
              this.loading = false
            }
          )
        } else {
          // this.$message({
          //           showClose: true,
          //           message: '请输入账号和密码',
          //           type: 'error'
          //         })
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;
$inputBg: #ffffff;

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #5fadff;
      height: 47px;
      border-bottom: 1px solid #5fadff;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $inputBg inset !important;
        -webkit-text-fill-color: black !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: white;
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
    background:url('~@/assets/there.png') no-repeat;
     background-size:100% 100%;
  .login-form {
    position: absolute;
    left: 559px;
    right: 0px;
    top: 100px;
    width: 451px;
    max-width: 100%;
    height: 375px;
    border-radius: 7px;
    padding: 35px 35px 15px;
    margin: 120px auto;
    background: white;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
        visibility: hidden;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: #409eff;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
.login {
  border:1px solid #409eff;
  background:#409eff;
  height:40px;
}
</style>
