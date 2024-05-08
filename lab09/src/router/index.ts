import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/login'
    },
    {
      path: '/binhai',
      name: 'binhai',
      component: () => import('@/views/CampusBinhai.vue')
    },
    {
      path: '/chashan',
      name: 'chashan',
      component: () => import('@/views/CampusChashan.vue')
    },
    {
      path: '/yueqing',
      name: 'yueqing',
      component: () => import('@/views/CampusYueqing.vue')
    },
    {
      path: '/system',
      name: 'system',
      component: () => import('@/views/StudentSystem.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginModule.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login') {
    const isLogin = sessionStorage.getItem('isLogin')
    if (!isLogin) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
