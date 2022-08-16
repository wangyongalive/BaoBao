import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function (location) {
  return originalPush.call(this, location).catch((err) => err)
}

Vue.use(Router)

/**
 * 公开路由表
 */
const publicRoutes = [
  {
    path: '/card',
    component: () => import('@/views/Card/index')
  },
  {
    path: '/luckDraw',
    component: () => import('@/views/LuckDraw/index')
  },
  { path: '*', redirect: { path: 'luckDraw' } }
]

export default new Router({
  mode: 'hash', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: publicRoutes
})
