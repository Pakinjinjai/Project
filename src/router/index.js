import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '',
    component: () => import('../views/router-template.vue'),
    children : [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path:'/setting',
        name:'setting',
        component:()=>import('../views/SettingView.vue')
      },
      {
        path:'/contact',
        name:'contact',
        component:()=>import('../views/ContactView.vue')
      },
      {
        path:'/account',
        name:'account',
        component:()=>import('../views/Account.vue')
      },
    ]
  },
  {
    path:'/signin',
    name:'signin',
    component:()=>import('../views/SigninView.vue'),
  },
  {
    path:'/signup',
    name:'signup',
    component:()=>import('../views/SignupView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
