import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/creation'
  },
  {
    path: '/creation',
    name: '创作',
    component: () => import('../views/creation.vue')
  },
  {
    path: '/post',
    name: '文章',
    component: () => import('../views/post.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
