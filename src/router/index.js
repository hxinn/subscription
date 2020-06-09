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
    component: () => import('../views/creation.vue'),
    meta: {
      title: '创作中心'
    }
  },
  {
    path: '/post',
    name: '文章',
    component: () => import('../views/post.vue'),
    meta: {
      title: '文章'
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
