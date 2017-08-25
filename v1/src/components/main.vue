<template>
  <div class="main">
    <section class="header">
      <section class="left"></section>
      <section class="right"></section>
    </section>
    <section class="bottom"></section>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import map from '../../node_modules/echarts/map/js/china.js'
export default {
  name: 'hello',
    data () {
      return {

      }
  },
  mounted () {
    this.$store.commit('changeName', 'dw')
  },
  methods: {
    add () {
      console.log(this.time)
      this.item.push(this.time)
      this.time = ''
      console.log(this.item)
      console.log(this.$store.state.name)
    }
  },
  watch: {

  }
}
</script>

