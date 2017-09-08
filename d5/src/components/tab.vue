<template>
  <div class="tabs">
    <div class="item active">商品</div>
    <div class="item">评价</div>
    <div class="item">商家</div>
  </div>
</template>
<style lang="less" scoped>
  .tabs {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid rgba(7,17,27,.1);
    background-color: #fff;
  }
  .item {
    flex-grow: 1;
    text-align: center;
    font-size: 14px;
    color: rgb(77,85,93);
    line-height: 14px;
  }
  .active {
    color: rgb(240,20,20);
  }
</style>
<script>
  export default {

  }
</script>
