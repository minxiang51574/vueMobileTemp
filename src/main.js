/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 08:49:52
 * @LastEditTime: 2019-08-19 14:58:55
 * @LastEditors: Please set LastEditors
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./utils/rem"
import Plugins from "./plugins"
Vue.use(Plugins)
import AudioRecorder from 'vue-audio-recorder'

Vue.use(AudioRecorder)

import Filters from "./filters"
Vue.use(Filters)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
