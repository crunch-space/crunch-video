import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'home',
      component: () => import('@/view/home/home.vue') // 使用动态导入
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/view/profile/profile.vue') // 使用动态导入
    },
    {
      path: '/rewards',
      name: 'rewards',
      component: () => import('@/view/rewards/rewards.vue') // 使用动态导入
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('@/view/videoplay/videoplay.vue') // 使用动态导入
    },
    {
      path: '/invite',
      name: 'invite',
      component: () => import('@/view/profile/invite.vue') // 使用动态导入
    },
    {
      path: '/wallete',
      name: 'wallete',
      component: () => import('@/view/wallete/index.vue') // 使用动态导入
    },
    {
      path: '/mylist',
      name: 'mylist',
      component: () => import('@/view/mylist/index.vue') // 使用动态导入
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('@/view/setting/index.vue') // 使用动态导入
    },
     {
      path: '/feed',
      name: 'feed',
      component: () => import('@/view/feed/index.vue') // 使用动态导入
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/view/about/index.vue') // 使用动态导入
    }

  ]
})
