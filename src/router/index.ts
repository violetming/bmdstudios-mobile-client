import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    redirect:'/home/index'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children:[{
      path:'index',
      component:()=>import('../views/index/IndexView.vue')
    },
    {
      path:'video',
      component:()=>import('../views/video/VideoView.vue')
    },
    {
      path:'show',
      component:()=>import('../views/show/ShowView.vue')
    },
    {
      path:'me',
      component:()=>import('../views/me/MeView.vue')
    },

  ]
  },
  {
    path: '/movie-detail/:id',
    name: 'movie-detail',
    component: () => import('../views/index/MovieDetail.vue'),
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
