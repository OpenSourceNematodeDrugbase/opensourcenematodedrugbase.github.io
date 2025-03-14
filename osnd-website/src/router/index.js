// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomeView.vue'
import AboutPage from '@/views/AboutView.vue'
import ContactPage from '@/views/ContactView.vue'
import LoginPage from '@/views/LoginView.vue'
import UserDashboard from '@/views/UserDashboard.vue'
import Funding from '@/views/Funding.vue'
import DatabaseHome from '@/views/DatabaseHome.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import SignUp from '@/views/SignUp.vue'
import ErrorView from '@/views/ErrorView.vue'
import BlogDashboard from '@/views/BlogDashboard.vue'
import DataEntryView from "@/views/DataEntryView.vue";

import WelcomeBlog from '@/views/Blogs/WelcomeBlog.vue'

const routes = [
  { path: '/', name: 'HomeView', component: HomePage },
  { path: '/about', name: 'AboutView', component: AboutPage },
  { path: '/contact', name: 'ContactView', component: ContactPage },
  { path: '/sign-in', name: 'LoginView', component: LoginPage },
  { path: '/user-dashboard', name: 'UserDashboard', component: UserDashboard },
  {path : '/funding', name: 'Funding', component : Funding},
  {path : '/nematode-drugbase', name: 'DatabaseHome', component: DatabaseHome},
  {path : '/privacy-policy', name: 'PrivacyPolicy', component : PrivacyPolicy},
  {path : '/sign-up', name: 'SignUp', component : SignUp},
  {path : '/error', name: 'ErrorView', component : ErrorView},
  {path : '/blog-dashboard', name: 'BlogDashboard', component : BlogDashboard},

  { path: '/data-entry/:id', name: 'DataEntryView', component: DataEntryView, props: true },

  {path: '/blog/welcome-blog', name: 'WelcomeBlog', component: WelcomeBlog},

  { path: '/:pathMatch(.*)*', name: 'NotFound', component: ErrorView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
