<template>
  <div class="manage">
    <div class="title">
      <p>学生管理</p>
    </div>
    <com v-show="flag">
      <el-table :data="items" stripe align="left">
        <el-table-column prop="name" label="姓名" >
          <template scope="scope">
            <el-button @click="getmore()" type="text">{{scope.row.name}}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="age" label="年龄"></el-table-column>
        <el-table-column prop="klass" label="班级"></el-table-column>
        <el-table-column prop="money" label="发放金额"></el-table-column>
        <el-table-column prop="id" label="邮箱地址"></el-table-column>
      </el-table>
    </com>
    <com v-show="!flag">
      <p class="le"><el-button type="text" @click="getmore()">返回</el-button></p>
      <el-tabs v-model="activeName">
          <el-tab-pane label="第一页" name="first">
            <el-table :data="more" stripe align="left">
              <el-table-column prop="name" label="姓名">
                <template scope="scope">
                  {{scope.row.name}}
                </template>
              </el-table-column>
              <el-table-column prop="age" label="年龄"></el-table-column>
              <el-table-column prop="institute" label="专业"></el-table-column>
              <el-table-column prop="grade" label="年级"></el-table-column>
              <el-table-column prop="status" label="状态"></el-table-column>
            </el-table>
          </el-tab-pane>
        <el-tab-pane label="第二页" name="second">
          <el-table :data="more" stripe align="left">
            <el-table-column prop="name" label="姓名">
              <template scope="scope">
                {{scope.row.grade}}
              </template>
            </el-table-column>
            <el-table-column prop="age" label="年龄"></el-table-column>
            <el-table-column prop="institute" label="专业"></el-table-column>
            <el-table-column prop="name" label="年级"></el-table-column>
            <el-table-column prop="status" label="状态"></el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>

    </com>
  </div>
</template>
<script>
  import axios from 'axios'
  import Vue from 'vue'
  import com from './com'
  import {mock} from './../tools/util'
  import {getState} from './../tools/util'
  import {s} from './../service/intercept'
  Vue.prototype.$axios = axios
  export default {
    name: 'manage',
    components: {com},
    data () {
      return {
        flag: false,
        items: [],
        activeName: 'first',
        more: [
          {
            'name': 'xxxx',
            'age': 16,
            'institute': '微电子科学与工程',
            'grade': '2015级',
            'status': '成功'
          },{
            'name': 'xxxx',
            'age': 16,
            'institute': '微电子科学与工程',
            'grade': '2015级',
            'status': '成功'
          },{
            'name': 'xxxx',
            'age': 16,
            'institute': '微电子科学与工程',
            'grade': '2015级',
            'status': '成功'
          },{
            'name': 'xxxx',
            'age': 16,
            'institute': '微电子科学与工程',
            'grade': '2015级',
            'status': '成功'
          },{
            'name': 'xxxx',
            'age': 16,
            'institute': '微电子科学与工程',
            'grade': '2015级',
            'status': '成功'
          },
        ]
      }
    },
    mounted () {
      let self =this
      for(let i=0; i<10; i++){
        this.$axios.get('http://rapapi.org/mockjs/23070/api/products?').then(function(res){
            self.items.push(mock(res.data.com))
        }).catch(function(err){
          console.log(err)
        })
      }
      this.getmore()
      console.log(this.$store.state.login+'----')
    },
    methods: {
      getmore () {
        this.flag = !this.flag
        console.log(this.flag)
        console.log(this.$store.state.name)
        console.log(this.$store.state.login)
      }
    }
  }
</script>
<style lang="less">
  @color: #fff;
  .le {
    text-align: left;
  }
  .title p {
    line-height: 50px;
    text-align: left;
    padding-left: 20px;
    background-color: @color;
  }
</style>
