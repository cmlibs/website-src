import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/documentation',
      name: 'Documentation',
      component: () => import('../views/DocumentationIndexView.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/DocumentationView.vue')
        },
        {
          path: 'api/:pageName?',
          name: 'apidocs-page',
          component: () => import('../views/APIDocumentationView.vue')
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
