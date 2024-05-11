import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExportView from '../views/export.vue'
import StudentsView from '../views/students.vue'
import DashboardView from '../views/dashboard.vue'
const routes = [
  {
    path: '/add/subjects',
    name: 'subjects',
    component: HomeView
  },
  
  {
    path: '/add/mark',
    name: 'mark',
    component: StudentsView
  },
  {
    path: '/export',
    name: 'export',
    component: ExportView
  },
  {
    path: '/',
    name: 'home',
    component: DashboardView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
