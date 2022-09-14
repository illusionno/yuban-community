import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/discover',
    children:[
      {
        path: 'discover',
        name: 'discover',
        component:() => import('@/views/DiscoverView'),
      },

      {
        path: 'tending',
        name: 'tending',
        component: () => import('@/views/TendingView'),
      },{
        path:'new',
        name:'new',
        component: () => import('@/views/NewView'),
      }

    ]
  },





]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
