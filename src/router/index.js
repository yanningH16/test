import Vue from 'vue'
import Router from 'vue-router'
import home from './home/home'

const defaultRouter = [{
  path: '/',
  redirect: '/home'
}]

Vue.use(Router)

const routes = [...defaultRouter, ...home]
let router = new Router({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// 设置title
router.beforeEach((to, from, next) => {
  if (to.meta.title || to.params.message) {
    document.title = to.meta.title || to.params.message.title
  } else {
    document.title = '短信平台'
  }
  next()
})

export default router
