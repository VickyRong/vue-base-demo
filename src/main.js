// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import './config/flexible'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import utils from './utils/utils'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(utils)

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

const app = new Vue({
  router,
  store, //状态管理
  template: '<App/>',
  components: { App }
}).$mount('#app')