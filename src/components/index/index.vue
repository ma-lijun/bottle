<template>
  <div class="homepage_box">
    <!--头部区域-->
    <div class="header_boxs" ref="header_boxs_icon">
      <i class="iconfont icon-paihangbang- paihangbang"></i>
      <i class="iconfont icon-40 sahxuan" @click="sahxuanSwitch"></i>
      <ul class="bottle_center">
        <li class="bottle_center_item"
            v-for="(item,index) in tabs"
            :class="{'bianse_tiem':currentIndex===index}"
            @click="switchItem(index)"
        >{{item.text}}
        </li>
      </ul>
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
    </div>
    <!--主体内容区域-->
    <div class="homepage_box_center" ref="homepage_box_center_icon">
      <transition name="fade">
        <div class="yinying_box" v-show="tges" @click="sahxuanSwitch"></div>
      </transition>
      <img src="../../common/images/p1-1c.jpg" alt="" class="beijingtu" v-show="falg">
      <img src="../../common/images/p1-2c.jpg" alt="" class="beijingtu_01" v-show="!falg">
    </div>
    <!--底部导航条-->
    <div class="footers_box" ref="footers_box_icon">
      <ul class="footers_box_center">
        <li class="footers_box_item">
          <img src="../../common/images/footer_01.png" alt="" class="footer_box_img">
          <p class="footer_box_txt">扔一个</p>
        </li>
        <li class="footers_box_item">
          <img src="../../common/images/footer_02.png" alt="" class="footer_box_img">
          <p class="footer_box_txt">捞一个</p>
        </li>
        <router-link to='/findbottle' tag="li" class="footers_box_item">
          <img src="../../common/images/footer_03.png" alt="" class="footer_box_img">
          <p class="footer_box_txt">发现</p>
        </router-link>
        <router-link to='/newsbottle' tag="li" class="footers_box_item">
          <img src="../../common/images/footer_04.png" alt="" class="footer_box_img">
          <p class="footer_box_txt">消息</p>
        </router-link>
        <router-link to='/mybottle' tag="li" class="footers_box_item footers_box_my">
          <img src="../../common/images/footer_05.png" alt="" class="footer_box_img">
          <p class="footer_box_txt">我的</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        tabs: [
          {text: '世界瓶'},
          {text: '同城瓶'}
        ],
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
      let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      let topH = this.$refs.header_boxs_icon.offsetHeight
      let footerH = this.$refs.footers_box_icon.offsetHeight
      this.$refs.homepage_box_center_icon.style.height = h - topH - footerH + 'px'
    },
    methods: {
      // 世界瓶子与同城瓶子的切换
      switchItem(index) {
        this.currentIndex = index
        if (index === 1) {
          this.falg = false
        } else {
          this.falg = true
        }
      },
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
  .homepage_box {
    .header_boxs {
      height: 90px
      line-height: 90px
      background-color: #FAFAFA;
      width: 100%;
      position: relative;
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
      .bottle_center {
        width: 50%;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        justify-items: center;
        .bottle_center_item {
          height: 75px;
          text-align: center;
          flex: 1;
          color: #333;
          font-size: 34px
          box-sizing: border-box;
        }
        .bianse_tiem {
          color: #0CD5AC !important;
          border-bottom-1px(#0CD5AC)
          transition: all .2s;
        }
      }
      .screen_centent {
        position: absolute;
        top: 105px
        right: 20px
        width: 200px
        border-radius: 10px;
        background-color: #fff;
        z-index: 999 !important;
        text-align: center;
        opacity: 1
        /*display: none;*/
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
    }
    .homepage_box_center {
      position: absolute;
      top: 90px
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      .yinying_box {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        background-color: #424242;
        opacity: .7;
        z-index: 200;
        /*display: none;*/
      }
      .beijingtu, .beijingtu_01 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        vertical-align: top;
      }
    }
    .footers_box {
      border-top-1px(#DCDCDE)
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: #FAFAFA;
      .footers_box_center {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        .footers_box_item {
          width: 20%;
          padding-top: 10px
          text-align: center;
          .footer_box_img {
            width: 55px
            height: 60px
            display: inline-block;
          }
          .footer_box_txt {
            color: #A9A8AF;
            font-size: 23px
            margin-bottom: 5px
          }
        }
      }
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
