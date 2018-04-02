// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'swiper/dist/css/swiper.css'
import 'common/stylus/index.styl'  // 引入样式表
import 'common/iconfont.css'       // 字体图标的css
import 'lib-flexible'        // 移动端适配
import VueAwesomeSwiper from 'vue-awesome-swiper'   // vue-swiper 轮播图组件

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
