import Vue from 'vue'
import VueRouter from 'vue-router'
import LeagueView from '@/views/LeagueView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LeagueView',
    component: LeagueView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
