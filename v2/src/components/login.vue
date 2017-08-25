<template>
  <div class="login">
    <el-row>
      <el-col :span="6" class="col1"><div></div></el-col>
      <el-col :span="12" class="col2">
        <div class="logo">
          <img src="./../assets/logo.png">
        </div>
        <el-form class="col2_con">
          <el-form-item>
            <el-input type="text" size="small" placehold="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" size="small" placehold="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button size="large" type="primary" @click="login('user')">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6" class="col3"><div></div></el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
      name: 'login',
  }
</script>
<style>
  * {
    margin:0;
    padding:0;
  }
  .col1, .col3 {
    height:585px;
    width:30%
  }
  .col2 {
    width:40%;
    padding:30px;
  }
  .col2_con {
    width:280px;
    margin:0 auto;
  }
</style>
