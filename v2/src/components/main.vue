<template>
    <div class="main">
      <side title="标题名" class="side"></side>

      <div class="con">
        <top></top>
        <transition name="fade" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>

      </div>
    </div>
</template>
<script>
import side from './layout/side'
import top from './layout/top.vue'

  export default {
    name: 'main',
    data () {
      return {
        menu: ['111','222','333','444','555']
      }
    },
    methods: {
      change () {
        console.log(this.menu.length)
        this.menu.length=8
        console.log(this.menu.length)

      }
    },
    components: {
      top,
      side
    }
  }

</script>
<style scoped>
  .side {
    float:left;
  }
  .con {
    width: calc((100% - 140px ));
    margin-left: 140px;
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: all 1s
  }
  .fade-live-active {
    transition: all .3s
  }
</style>
