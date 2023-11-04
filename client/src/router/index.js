import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DocumentsView from '../views/DocumentsView.vue'
import EstateView from '../views/EstateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/documents',
      name: 'documents',
      component: DocumentsView
    },
    {
        path: '/estate',
        name: 'estate',
        component: EstateView
    }
  ]
})

export default router
