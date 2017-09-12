<template>
  <section class="matter" ref="scoll">
  <ul class="content" @scroll="console.log('ss')">
    <li class="ite" v-for="item in titles">
      <p class="matter_title">{{item.name}}</p>
      <div class="matter_con" v-for="food in item.foods">
        <div>
          <img :src="food.image" alt="">
          <div class="matter_right">
            <p>{{food.name}}</p>
            <p>{{food.description}}</p>
            <p>月售{{food.sellCount}}份 &nbsp;好评率{{food.rating}}%</p>
            <p><span class="newprice">￥{{food.price}}</span><span class="oldprice" v-if="food.oldPrice!=''">￥{{food.oldPrice}}</span><add class="add"></add></p>
          </div>
        </div>
      </div>
    </li>
  </ul>
  </section>
</template>
<style lang="less">
  .matter {
    max-height: e("calc(100% - 237px)");
    width: calc(~"100% - 100px");
    overflow: hidden;
    position: absolute;
    right: 0;
    li {
      list-style: none;
    }
    .matter_title {
      height: 32px;
      line-height: 32px;
      background-color: #f3f5f7;
      color: #94959A;
      font-size: 14px;
      box-sizing: border-box;
      padding-left: 18px;
      border-left: 4px solid #DADDE2;
    }
    .matter_con {
      height: 100px;
      width: 100%;
      background-color: #fff;
      box-sizing: border-box;
      div:first-child {
        height: 100%;
        margin: 18px 18px 0 18px;
        position: relative;
        border-bottom: 1px solid #DBDEE1;
        .matter_right {
          width: calc(~"100% - 74px");
          height: 100%;
          position: absolute;
          right: 0;
          top: 0;
          .newprice {
            margin-top: 2px;
            font-size: 18px;
            color: rgb(240,20,20);
            font-weight: 700;
            line-height: 24px;
            margin-right: 8px;
          }
          .oldprice {
            text-decoration: line-through;
          }
          p {
            font-size: 14px;
            color: rgb(147,153,159);
            line-height: 14px;
            max-height: 28px;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
            margin-bottom: 6px;
          }
          p:first-child {
            font-size: 16px;
            color: rgb(7,17,27);
            margin-top: 2px;
            line-height: 16px;
            margin-bottom: 6px;
          }
          p:last-child {
            position: relative;
            .add {
              position: absolute;
              right: 0;
            }
          }
        }
      }
      img {
        width: 64px;
        height: 64px;
        margin-right: 10px;
      }
    }
    .ite {
      width: 100%;
    }
  }
</style>
<script>
  import Vue from 'vue'
import add from './add'
import BScroll from 'better-scroll'
export default {
  props: ['titles'],
  components: {
    add
  },
  data () {
    return {
      items : this.titles
    }
  },
  mounted: function() {
//    this.roll()
    this.$nextTick(function () {
      let self = this
      setTimeout(function(){
        self.roll()
      },100)
    })
  },
  methods: {
    roll () {
      let scroll = new BScroll(this.$refs.scoll,{
        scrollY: true,
        click: true
      })

    }
  }
}

</script>
