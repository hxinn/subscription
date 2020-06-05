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
    component: () => import( '../views/creation.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
