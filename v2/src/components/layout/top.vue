<template>
  <div class="top">
    <div class="top_con">
      <span class="fl">
        <span>x:{{getx}}</span><span>y:{{gety}}</span><span>{{zzzz}}</span>
      </span>
      <span class="fr">
        <span>{{aaaa}}</span>
      </span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'top',
    data () {
      return {
        xxx: 'sss'
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
  .top {
    width: 100%;
    background-color: #ccc;
    height:100%;
    /*float: left;*/
  }
  .top_con {
    height:90px;
    width: 100%;
    overflow:auto;

  }
</style>
