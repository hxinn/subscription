import Vue from 'vue'
import VueRouter from 'vue-router'

const view = () => import('@/layout/view')
// 一级页面
const login = () => import('@/views/login/login')                                    // 登录页
const index = () => import('@/views/index/index')                                    // 首页
// 二级页面
const home = () => import('@/views/index/children/home/home')                        // 主页
// edit
const publish = () => import('@/views/index/children/publish/publish')               // 编辑页
// manage
const articles = () => import('@/views/index/children/manage/articles/articles')     // 我的作品
const own = () => import('@/views/index/children/manage/articles/children/own')
const comment = () => import('@/views/index/children/manage/comment/comment')        // 评论管理
const newest = () => import('@/views/index/children/manage/comment/children/newest')
const all = () => import('@/views/index/children/manage/comment/children/all')
const material = () => import('@/views/index/children/manage/material/material')     // 素材管理
const pic = () => import('@/views/index/children/manage/material/children/pic')
// count
const count = () => import('@/views/index/children/count/count')                     // 统计
// setting
const setting = () => import('@/views/index/children/setting/setting')               // 设置

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
    path: '',
    redirect: '/index'
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
    name: 'index',
    path: '/index',
    redirect: '/index/home',
    component: index,
    meta: { login: true },
    children: [
        {
            name: 'home',
            path: 'home',
            title: '主页',
            icon: 'el-icon-fa-home',
            component: home
        },
        {
            name: 'creation',
            path: 'creation',
            title: '创作',
            icon: 'el-icon-fa-pencil',
            component: creation
        },
        {
            name: 'publish',
            path: 'publish',
            title: '发表',
            icon: 'el-icon-fa-pencil',
            component: publish
        },
        {
            name: 'manage',
            path: 'manage',
            title: '管理',
            icon: 'el-icon-fa-cube',
            component: view
            // children: [
            //     {
            //         name: 'articles',
            //         path: 'articles',
            //         title: '内容管理',
            //         component: articles,
            //         redirect: '/index/manage/articles/own',
            //         children: [
            //             {
            //                 name: 'own',
            //                 path: 'own',
            //                 title: '我发表的',
            //                 hidden: true,
            //                 component: own
            //             }
            //         ]
            //     },
            //     {
            //         name: 'comment',
            //         path: 'comment',
            //         title: '评论管理',
            //         component: comment,
            //         redirect: '/index/manage/comment/newest',
            //         children: [
            //             {
            //                 name: 'newest',
            //                 path: 'newest',
            //                 title: '最新评论',
            //                 hidden: true,
            //                 component: newest
            //             },
            //             {
            //                 name: 'all',
            //                 path: 'all',
            //                 title: '文章评论',
            //                 hidden: true,
            //                 component: all
            //             }
            //         ]
            //     },
            //     {
            //         name: 'material',
            //         path: 'material',
            //         title: '素材管理',
            //         component: material,
            //         redirect: '/index/manage/material/pic',
            //         children: [
            //             {
            //                 name: 'pic',
            //                 path: 'pic',
            //                 title: '图片管理',
            //                 hidden: true,
            //                 component: pic
            //             }
            //         ]
            //     }
            // ]
        },
        {
            name: 'count',
            path: 'count',
            title: '统计',
            icon: 'el-icon-fa-bar-chart',
            component: count
        },
        {
            name: 'setting',
            path: 'setting',
            title: '设置',
            icon: 'el-icon-fa-cog',
            component: setting
        }
    ]
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


