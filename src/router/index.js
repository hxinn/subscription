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
  },
  {
    path: '/test',
    name: '文章',
    component: () => import('../views/test.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};

export default router
