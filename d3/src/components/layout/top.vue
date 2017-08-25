<template>
  <div class="top">
    <div class="dec">
      <span class="l">欢迎你<span>{{name}}</span></span>
      <span class="r">帮助支持<span>使用手册</span><span @click="exit" class="ex">退出</span></span>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'top',
    props: ['name'],
    mounted () {
      this.parent()
    },
    methods: {
      exit () {
        this.$router.push('/')
      },
      child () {
        console.log('sss')
      },
      parent () {
        this.$parent.self()
      }
    }
  }
</script>
<style>
  .top {
    line-height: 50px;
    background-color: #35BBF7;
    width: 100%;
    float: left;
  }
  .dec {
    color: #fff;
    font-size: 12px;
    font-weight: bold;
  }
  .dec .l {
    float: left;
    margin-left: 40px;
  }
  .dec span {
    margin: 0 15px;

  }
  .dec .r {
    float: right;
    margin-right: 40px;
  }
  .ex {
    cursor: pointer;
  }
</style>
