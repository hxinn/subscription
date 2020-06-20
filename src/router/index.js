import Vue from 'vue'
import VueRouter from 'vue-router'

// 一级页面
const login = () => import('@/views/login/login')                                    // 登录页

Vue.use(VueRouter)

/*
* @params
* icon: ''                      菜单图标（可以用element-ui的icon & font-awesome）
* title: ''                     菜单标题
* open: true                    是否展开菜单（有子路由才生效）
* hidden: false                 是否渲染菜单
* @meta
* login: false                  是否需要登录
* keep: false                   是否需要缓存（路由出口使用view组件才生效）
*/
export const routes = [
  {
    path: '*',
    redirect: '/creation'
  },
  {
    path: '/creation',
    name: '创作',
    component: () => import('../views/creation.vue'),
    meta: {
      title: '创作中心',
      login: true
    }
  },
  {
    path: '/login',
    name: '登陆',
    component: login,
    meta: {
      title: 'QLinks Subscriptions'
    }
  },
  {
    path: '/post',
    name: '文章',
    component: () => import('../views/post.vue'),
    meta: {
      title: '文章',
      login: true
    }
  },
  {
    path: '/test',
    name: '测试',
    component: () => import('../views/test.vue'),
    meta: {
      title: '测试'
    }
  }
]

export default new VueRouter({
  // mode: 'history',
  scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
          to.meta.position = savedPosition
          return savedPosition
      } else {
          return { x: 0, y: 0 }
      }
  },
  routes
})


