import VueRouter from 'vue-router'
    
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/HomeContent.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/About.vue')
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('../views/Contact.vue')
        }
      ]
})

export default router