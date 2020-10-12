import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//全局导入vant
import Vant from 'vant'
import 'vant/lib/index.css'
//导入工具类中的获取token的方法
import {getToken} from './utils/auth'
//声明使用vant
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){
    console.log(getToken())
    if(!getToken()){
      //如果没有登录就跳转到login页面
      router.push({path:'/login'})
    }
  }
}).$mount('#app')
