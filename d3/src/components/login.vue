<template>
  <section class="login">
    <el-row>
      <el-col :span="6">
        <div class="left">
          <img src="./../assets/login-left.png" alt="">
        </div>
      </el-col>
      <el-col :span="12">
        <div class="center_head">
          <img src="./../assets/login-logo.png">
        </div>
        <div class="center_con">
          <p>你尚未登录, 请登录:</p>
          <el-form :model="user" :rules="rules" ref="user">
            <el-form-item prop="username">
              <el-input placeholder="请输入用户名" v-model="user.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input placeholder="请输入密码" v-model="user.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="large" :loading="load.flag" @click="login('user')">{{load.name}}</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="right">
          <img src="./../assets/login-right.png" alt="">
        </div>
      </el-col>
    </el-row>
  </section>
</template>
<script>
  import {gItem} from './../tools/util'
  export default {
    name: 'login',
    data () {
      var passwordrule= (rule, value, callback)=>{
        var res= /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,18}$/
        if(value !== ' '){
          res.test(value)?callback():callback(new Error('请输入由字母数字组成的6-18位密码'))
        }else {
          callback()
        }
      }
      return {
        load: {
          name: '登录',
          flag: false
        },
        user: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 3, max: 10, message: '用户名在3-10位字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {validator: passwordrule}
          ]
        }
      }
    },
    beforeCreate () {
      localStorage.setItem('login',false)
      var time = new Date().getTime()
      localStorage.setItem('leavetime', time)
    },
    methods: {
      login (formName) {
        localStorage.setItem('student','student')
        localStorage.setItem('admin','admin')
        this.$refs[formName].validate((valid) => {
          if(valid){
              this.load.name = '登陆中'
              this.load.flag = true
                switch(gItem(this.user.username)) {
                  case 'student':
                    this.$store.commit('changeFlag','1')
                    this.$store.commit('islogin',true)
                    localStorage.setItem('flag', '1')
                    localStorage.setItem('login', true)
                    this.$router.push({
                      name: 'main',
                      path: '/main',
                      params: {'datas': '学生dd'},
                      query: {data: '学生'}
                    })
                    break
                  case 'admin':
                    this.$store.commit('changeFlag','2')
                    this.$store.commit('islogin',true)
                    localStorage.setItem('flag', '2')
                    localStorage.setItem('login', true)
//                    this.$router.push('/main')
                    this.$router.push({
                      path: '/main',
                      query: {data: '管理员'}
                    })
                    break
                  default :
                    this.load.flag = false
                    this.load.name = '登 录'
                    this.$message.error('用户名或密码错误,请重新输入!')
                }
          }
        })
      },
    }
  }
</script>
<style>
  .login {
    background: #fff;
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: auto;
  }
  .left img {
    margin-left: -49px;
  }
  .center_head {
    margin-top: 40px;
  }
  .center_con {
    margin: 160px auto 0;
    text-align: left;
    font-size: 16px;
    font-weight: 600;
    width: 310px;
    height: 330px;
  }
  .center_con input {
    margin-top: 20px;
  }
  .center_con button {
    width: 100%;
    margin-top: 20px;
  }
  .right img {
    margin-right: -100px;
  }
</style>
