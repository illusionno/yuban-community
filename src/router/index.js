import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/discover',
    children: [
      {
        path: 'discover',
        name: 'discover',
        component: () => import('@/views/discover/DiscoverView'),
        // children: [{
        //   path: 'top1',
        //   name: 'top1',
        //   component: () => import('@/views/discover/modules/Top1View')
        // }]
      }, {
        // 暂时这样写
        path: 'discover/top1',
        name: 'top1',
        component: () => import('@/views/discover/modules/Top1View')
      },
      {
        path: 'discover/top2',
        name: 'top2',
        component: () => import('@/views/discover/modules/Top2View')
      },
      {
        path: 'discover/video-detail',
        name: 'video-detail',
        component: () => import('@/views/discover/modules/VideoDetail')
      },
      {
        path: 'tending',
        name: 'tending',
        component: () => import('@/views/TendingView'),
      }, {
        path: 'new',
        name: 'new',
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
