<template>
  <section class="main">
    <div  ref="child" id="fff">
      dddddddd
    </div>
  </section>
</template>
<script>
  export default {
    name: 'main',
    methods: {
      el () {
      },
      re () {
        let f = this.$refs.child.innerHTML
        let h = document.getElementById('fff').getBoundingClientRect()
        console.log('h', h)
        console.log(f)
      }
    },
    mounted () {
      this.el()
      this.re()
    }
  }
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
  div {
    position: absolute;
    top: 10px;
    left: 20px;
  }
</style>
