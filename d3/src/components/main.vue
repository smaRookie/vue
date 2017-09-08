<template>
  <div class="main">
    <side title="项目练习" :item="items"></side>
    <div class="main_con">
      <top :name="name" ref="top"></top>
      <div class="view">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
          <!--<vue-progress-bar></vue-progress-bar>-->
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
  import side from './layout/side'
  import top from './layout/top'
  import {gItem} from './../tools/util'
  export default {
    data () {
      return {
        items: [],
        name: this.$route.query.data,
        flag: 'flag'
      }

    },
    components: {
      side,
      top
    },
    created () {
      this.$Progress.start()
    },
    mounted () {
      this.additem(gItem('flag'))
      this.$refs.top.child();
      this.get()
      console.log(this.$route.query.data)
      this.$Progress.finish()

    },
    destroyed () {
      (function () {
        var time = new Date().getTime()
        localStorage.setItem('leavetime', time)
      })();
    },
    watch: {

    },
    methods: {
      self () {

      },
      get () {

      },
      additem (num) {
        switch (num) {
          case '1':
            this.items = [
              {name: '学生管理', link: 'manage'},
              {name: '学生记录', link: 'report'},
              {name: '学生详情', link: 'details'}
            ]
            break
          case '2':
            this.items = [
              {name: '管理员选项', link: 'manage'},
              {name: '管理员功能', link: 'report'}
            ]
            break
          default: break
        }
      }
    }
  }
</script>
<style>
  .main {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  .main_con {
    float:left;
    width: calc((100% - 220px));
    margin-left: 220px;
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-to {
    opacity: 1;
    transition: all .5s cubic-bezier(0, 1.09, 1, 1.31);
  }
  .fade-leave {
    opacity: 1;
  }
  .fade-leave-to {
    opacity: 0;
  }
</style>
