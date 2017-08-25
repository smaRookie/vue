<template>
  <div class="d2">
    <div>
      <p>组件二</p>
      <input type="text" v-model="xdata" placeholder="改变x得值" @keyup.enter="changex">
      <input type="text" v-model="ydata" placeholder="改变y得值" @keyup.enter="changey">
      <el-button type="primary" @click="changey">添加</el-button>
      <el-button type="primary" @click="changex">删除</el-button>
    </div>

    <transition name="fade" mode="out-in">
      <el-table :data="message" stripe border>
        <el-table-column align="left" prop="name" label="姓名"></el-table-column>
        <el-table-column align="left" prop="age" label="年龄"></el-table-column>
        <el-table-column align="left" prop="id" label="学号"></el-table-column>
        <el-table-column align="left" prop="klass" label="班级"></el-table-column>
      </el-table>
    </transition>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        page-size=5
        :total="message.length">
      </el-pagination>
    </div>

  </div>
</template>
<script>
  import axios from 'axios'
  import Vue from 'vue'
  Vue.prototype.$axios = axios
  import {mock} from './../tool/utils'
  export default {
    data () {
      return {
        xdata: ' ',
        ydata: ' ',
        show3: false,
        message: [],
        count: -1
      }
    },
    mounted () {
      this.show3 = !this.show3
    },
    destroyed () {
      this.show3 = !this.show3
    },
    methods: {
      changex () {
        this.$store.commit('setx', this.xdata)
        this.message.pop()
      },
      changey () {
        this.$store.commit('sety', this.ydata)
        var self=this

        for(let i=0; i<1; i++){
          this.$axios.get('http://rapapi.org/mockjs/23070/api/products?').then(function(res){
            var s=mock(res.data.com)
            s.id = s.id+self.count
            self.message.push(s)
          }).catch(function(err){
            console.log(err)
          })
        }
        this.count++
      }
    }

  }
</script>
<style>

</style>
