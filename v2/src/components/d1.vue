<template>
  <div class="d1">
    <div class="d1_con">
      <el-collapse-transition>
        <div v-show="show3">
          <transition name="el-zoom-in-center">
            <div v-show="show3" class="transition-box">.el-zoom-in-center</div>
          </transition>

          <transition name="el-zoom-in-center">
            <div v-show="show3" class="transition-box">.el-zoom-in-top</div>
          </transition>

          <transition name="el-zoom-in-center">
            <div v-show="show3" class="transition-box">.el-zoom-in-bottom</div>
          </transition>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'd1',
    data () {
      return {
        show3: false
      }
    },
    methods: {
      tri () {
        show3 = true
      }
    },
    mounted () {
      this.show3 = true
      console.log(this.show3)
    }

  }
</script>
<style>
.d1 {
  height:600px;
}
.d1_con {
  text-align: center;
}
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #20A0FF;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
  margin: 10px auto;
}
  .el-zoom-in-center-enter-active, .el-zoom-in-center-leave-active {
    transition: all 1s;
  }
</style>
