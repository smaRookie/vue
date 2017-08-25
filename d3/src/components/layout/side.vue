<template>
  <div class="side">
    <div class="s">
      <div class="side_con">
        <img src="./../../assets/logo.png" alt="">
      </div>
      <div class="side_con">
        <p>寻道科技</p>
        <p>{{title}}</p>
      </div>
    </div>
    <ul class="side_item">
      <li v-for="x in item">
        <router-link :to="x.link" >{{x.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'side',
    props: ['title','item']

  }
</script>
<style>
  .side {
    float: left;
    width: 220px;
    height: 100%;
    position: absolute;
    color: #fff;
    background-color: #20303C;
  }
  .s {
    overflow: auto;
  }
  .side_con {
    margin-left: 10px;
    margin-top: 10px;
    float: left;
  }
  .side_con p {
    font-size: 10px;
    margin-top: 2px;
    font-weight: bold;
  }
  .side_item {
    margin-top: 50px;
    text-align: left;
  }
  .side_item li {
    line-height: 40px;
    list-style: none;
    cursor: pointer;
    margin-top: 5px;
    border-radius: 5px;
    transition: all .5s;
  }
  .side_item li:hover {
    background-color: #35BBF7;
  }
  .side_item li a {
    text-decoration: none;
    padding-left: 20px;
    color: black;
    color: #fff;
    font-size: 16px;
    display: inline-block;
    width:220px;
    box-sizing: border-box;
  }
  .side_item p:hover {
    background-color: #F4F6FA;
  }
  .router-link-active {
    background-color: #35BBF7;
    border-radius: 10px;
  }
</style>
