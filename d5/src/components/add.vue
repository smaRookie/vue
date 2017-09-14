<template>
  <section class="add">
    <transition name="slide-fade">
      <div class="wrap">
        <transition  name="inner">
          <div class="inner" v-show="this.num > 0 ">
            <img src="./../../static/SVG/remove_circle_outline.svg" @click="reduce()"/>
          </div>
        </transition >
      </div>
    </transition >
    <div class="count" v-show="this.num > 0 ">
      {{count}}
    </div>
    <div class="add_ball" @click="add()">
      <img src="./../../static/SVG/add_circle.svg" />
    </div>


  </section>
</template>
<script>
  import Vue from 'vue'
  export default {
    data () {
      return {
        num: 0
      }
    },
    props: {
      food: {}
    },
    computed: {
      count () {
        this.food.count = this.num
        return this.num
      }
    },
    mounted() {
      let self = this
      setTimeout(function(){
        self.food.count = 0
//        console.log(self.food)
      },0)

    },
    methods: {
      add () {
        this.num++
      },
      reduce () {
        this.num--
      }
    }
  }
</script>
<style lang="less" scoped>
  .add {
    display: inline-block;
    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      overflow: hidden;
      vertical-align: text-bottom;
    }
    .add_ball {
      display: inline-block;
    }
    .count {
      display: inline-block;
      margin: 0 5px;
    }
    .wrap {
      display: inline-block;
      margin-right: 0px;
      .inner {
        display: inline-block;

      }
    }
    .slide-fade-enter-active,.slide-fade-leave-active {
      transition: all 1s;
      opcity: 1;

    }
    .slide-fade-enter, .slide-fade-leave-to {
      transform: translateX(10px);
      opcity: 0;
    }
  }
</style>
