// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomeView.vue'
import AboutPage from '@/views/AboutView.vue'
import ContactPage from '@/views/ContactView.vue'
import BlogPage from '@/views/BlogView.vue'
import LoginPage from '@/views/LoginView.vue'
import BlogPost from '@/views/BlogPostView.vue'
import UserDashboard from '@/views/UserDashboard.vue'
import Funding from '@/views/Funding.vue'

const routes = [
  { path: '/', name: 'HomeView', component: HomePage },
  { path: '/about', name: 'AboutView', component: AboutPage },
  { path: '/contact', name: 'ContactView', component: ContactPage },
  { path: '/blog', name: 'BlogView', component: BlogPage },
  { path: '/blog/:id', name: 'BlogPost', component: BlogPost, props: true },
  { path: '/login', name: 'LoginView', component: LoginPage },
  { path: '/user-dashboard', name: 'UserDashboard', component: UserDashboard },
  {path : '/funding', name: 'Funding', component : Funding}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
