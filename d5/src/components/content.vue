<template>
  <section class="matter" ref="scoll">
  <ul class="content" ref="aim">
    <li class="ite" v-for="item in titles">
      <p class="matter_title">{{item.name}}</p>
      <div class="matter_con" v-for="food in item.foods">
        <div class="matter_inner">
          <img :src="food.image" alt="">
          <div class="matter_right">
            <p>{{food.name}}</p>
            <p>{{food.description}}</p>
            <p>月售{{food.sellCount}}份 &nbsp;好评率{{food.rating}}%</p>
            <p><span class="newprice">￥{{food.price}}</span><span class="oldprice" v-if="food.oldPrice!=''">￥{{food.oldPrice}}</span><add class="add" :food="food"></add></p>
          </div>
        </div>
      </div>
    </li>
  </ul>
  </section>
</template>
<style lang="less" scoped>
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
      .matter_inner {
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
      items: this.titles,
      heights: [],
      posy: '',
      index: '',
      conlist: [],
      side: ''
    }
  },
  computed: {
    f() {
      console.log(this.titles.foods,'--')
      return this.side
    }
  },
  created () {
    this.$nextTick(function() {
        let self = this
      setTimeout(function(){
        self.getHeight()
      },100)
    })
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
  watch: {
    index: function(val,oldval) {
      this.$emit('tell',val)
    },
    state: function(val,oldval) {
      let scroll = new BScroll(this.$refs.scoll,{
        scrollY: true,
        click: true,
        probeType: 3
      })
      scroll.scrollToElement(this.conlist[val],300)
    }

  },
  computed: {
    state () {
      return this.$store.state.sideindex
    }
  },
  methods: {
    roll () {
      let self = this
      this.conlist = this.$refs.aim.querySelectorAll('.ite')
      let scroll = new BScroll(this.$refs.scoll,{
        scrollY: true,
        click: true,
        probeType: 3
      })
      scroll.on('scroll',function(item){
        self.posy=Math.abs(Math.round(item.y))
        self.index = self.pos()
        self.$store.commit('changePosition',self.index)
      })
    },
    getHeight () {
      let targets = this.$refs.aim.querySelectorAll('.ite')
      let height = 0
      this.heights.push(height)
      let self = this
      targets.forEach(function(item) {
        height+=item.offsetHeight
        self.heights.push(height)
      })
    },
    pos () {
      for(let i=0;i<this.heights.length; i++){
        let height1 = this.heights[i]
        let height2 = this.heights[i+1]
        if(!height2 || (this.posy > height1 && this.posy < height2)){
          return i
        }
      }
      return 0;
    }

  }
}

</script>
