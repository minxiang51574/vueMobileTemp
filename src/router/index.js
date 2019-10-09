/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 08:49:52
 * @LastEditTime: 2019-08-09 14:17:29
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page2 from '@/components/Page2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/page2',
      name:'page2',
      component:Page2
    }
  ]
})
