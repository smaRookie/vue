<template>
  <div class="silder">
    <div class="con">
      <div class="img">
        <!--<img src="./../../assets/logo.png" alt="">-->
      </div>
      <div class="title">
        <p>{{title}}</p>
        <p>dddd</p>
      </div>
      <ul class="lin">
        <li><router-link to="/main/d1">组件一</router-link></li>
        <li><router-link to="/main/d2">组件二</router-link></li>
        <li><router-link to="/main/d3">组件三</router-link></li>
        <li><router-link to="/main/d1">组件一</router-link></li>
      </ul>
    </div>

    <div></div>
  </div>
</template>
<script>
  export default {
    name: 'side',
    props: [
      'title'
    ]
  }
</script>
<style>
  body {
    background-color: #F4F6FA;
  }
  .con {
    voerflow:auto;
  }
  .lin li a {
    color: black;
    list-style: none;
    text-decoration: none;
  }
  .silder {
    width: 140px;
    height: auto;
    min-height:600px;
    text-align:center;
    overflow:auto;
    float:left;
    background-color: #8391A5;
  }
  .img, .title {
    margin:10px 10PX;
  }
</style>
