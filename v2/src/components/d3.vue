<template>
  <div class="d3">
    <p>{{getx}}</p>
    <p>{{gety}}</p>
    <div class="block">
      <span class="demonstration">Click 指示器触发</span>
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>item</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
      computed: {
        getx () {
          return this.$store.state.x
        },
        gety () {
          return this.$store.state.y
        }
      }
  }
</script>
<style>
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
