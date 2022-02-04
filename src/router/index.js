import Vue from 'vue'
import VueRouter from 'vue-router'
import LeaguesView from '@/views/LeaguesView'
import MatchesView from '@/views/MatchesView'
import TeamsView from '@/views/TeamsView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'LeaguesView' },
  },
  {
    path: '/league/:search?',
    name: 'LeaguesView',
    component: LeaguesView,
  },
  {
    path: '/teams/:search?',
    name: 'TeamsView',
    component: TeamsView,
  },
  {
    path: '/matches/:type/:id',
    name: 'MatchesView',
    component: MatchesView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
