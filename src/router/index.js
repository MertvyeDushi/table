import Vue from 'vue'
import VueRouter from 'vue-router'
import LeaguesView from '@/views/LeaguesView'
import TeamsView from '@/views/TeamsView'
import LeagueView from '@/views/LeagueView'
import TeamView from '@/views/TeamView'

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
    path: '/league/:id',
    name: 'LeagueView',
    component: LeagueView,
  },
  {
    path: '/team/:id',
    name: 'TeamView',
    component: TeamView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
