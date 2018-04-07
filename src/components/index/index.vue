<template>
  <div class="index_box">
    <div class="swiper-container" ref="swiper_item">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../common/images/p1-1c.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../common/images/p1-2c.jpg" alt="">
        </div>
      </div>
      <!-- 如果需要导航按钮 -->
      <div class="banner_page" ref="banner_page">
        <i class="iconfont icon-paihangbang- paihangbang"></i>
        <i class="iconfont icon-40 sahxuan" @click="sahxuanSwitch"></i>
        <div class="banner_page_box">
          <div class="swiper-button-prev">世界瓶</div>
          <div class="swiper-button-next">同城瓶</div>
        </div>
      </div>
    </div>
    <transition name="fade_item">
      <ul class="screen_centent" v-show="tges">
        <li class="screen_centent_item"
            v-for="(items,index) in gender"
            :class="{'screen_centent_item_bs':genderIndex===index}"
            @click="genderFun(index)"
        >{{items.gender_item}}
        </li>
      </ul>
    </transition>
    <transition name="fade">
      <div class="yinying_box" v-show="tges" @click="sahxuanSwitch"></div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    data() {
      return {
        gender: [
          {gender_item: '全部'},
          {gender_item: '男生'},
          {gender_item: '女生'}
        ],
        currentIndex: 0,
        genderIndex: 0,
        falg: true,
        tges: false
      }
    },
    mounted() {
      let mySwiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
      })
      let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      let topH = this.$refs.banner_page.clientHeight
      let footerH = 47
      this.$refs.swiper_item.style.height = h - topH - footerH + 'px'
    },
    methods: {
      /*阴影的弹窗*/
      sahxuanSwitch() {
        if (this.tges === false) {
          this.tges = true
        } else {
          this.tges = false
        }
      },
      /*筛选性别*/
      genderFun(index) {
        this.genderIndex = index
        this.tges = false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "~@/common/stylus/mixin.styl"
  .index_box {
    .swiper-container {
      padding-top 90px
      width: 100%
      img {
        width: 100%
        height: 100%
        vertical-align: top
      }
      .banner_page {
        position: absolute
        top: 0
        left: 0
        height: 90px
        line-height: 90px
        background-color: #FAFAFA;
        width: 100%;
        .paihangbang {
          float: left;
          height: 100%;
          margin-left: 20px
          font-size: 60px
          color: #ECAD2D;
        }
        .sahxuan {
          float: right;
          height: 100%;
          margin-right: 30px
          font-size: 50px
          color: #000;
        }
        .banner_page_box {
          display: flex
          justify-content: space-around
          align-items center
          width: 50%
          margin 0 auto
          height: 100%
          .swiper-button-prev, .swiper-button-next {
            flex 1
            text-align: center
            position: inherit !important;
            top: 0;
            width: auto;
            height: 75px;
            margin-top: 0;
            z-index: 10;
            background-image: none !important
            left: 0;
            right: 0;
            color: #333;
            font-size: 34px
            box-sizing: border-box;
          }
          .swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled {
            color: #0CD5AC !important;
            border-bottom 1px solid #0CD5AC
            opacity: 1 !important
          }
        }
      }
    }
    .screen_centent {
      position: absolute;
      top: 105px
      right: 20px
      width: 200px
      border-radius: 10px;
      background-color: #fff;
      z-index: 9999 !important;
      text-align: center;
      opacity: 1
      .screen_centent_item {
        border-bottom-1px(#D1D3D3)
        height: 65px
        line-height: 65px
        font-size: 28px
        color: #424343;
        &:last-child {
          border-bottom-1px(transparent)
        }
      }
      .screen_centent_item_bs {
        color: #CC0C08;
      }
    }
    .screen_centent_boxs {
      display: block;
    }

    .screen_centent:before {
      content: '';
      display: block;
      position: absolute;
      top: -15px
      right: 20px
      width: 0;
      height: 0;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 20px solid #fff;
    }
    .yinying_box {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      background-color: #424242;
      opacity: .7;
      z-index: 9998 !important;
    }
  }

  .fade-enter-active {
    animation move 0.3s
  }

  .fade-leave-active {
    animation moveLeave 0.3s
  }

  @keyframes move {
    0% {
      opacity: 0
    }

    100% {
      opacity: .7
    }
  }

  @keyframes moveLeave {
    0% {
      opacity: .7
    }

    100% {
      opacity: 0
    }
  }

  .fade_item-enter-active {
    animation: move_item 0.3s
  }

  .fade_item-leave-active {
    animation: moveLeave_item 0.3s
  }

  @keyframes move_item {
    0% {
      transform scale(0)
    }

    100% {
      transform scale(1)
    }
  }

  @keyframes moveLeave_item {
    0% {
      transform scale(1)
    }

    100% {
      transform scale(0)
    }
  }
</style>
