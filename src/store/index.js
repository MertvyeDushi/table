import Vue from 'vue'
import Vuex from 'vuex'
import { getLeagues, getTeams, getMatches } from '../services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    leagues: [],
    teams: [],
    matches: [],
    error: null,
  },
  getters: {
    getFilteredLeagues: (state) => (query) => {
      const { leagues } = state

      return query ? leagues.filter(item => item.name.toLowerCase().includes(query.toLowerCase())) : leagues
    },
    getFilteredTeams: (state) => (query) => {
      const { teams } = state

      return query ? teams.filter(item => item.name.toLowerCase().includes(query.toLowerCase())) : teams
    },
  },
  mutations: {
    setLeagues: (state, payload) => {
      state.leagues = payload
    },
    setTeams: (state, payload) => {
      state.teams = payload
    },
    setMatches: (state, payload) => {
      state.matches = payload
    },
    setError: (state, payload) => {
      state.error = payload
    }
  },
  actions: {
    /**
     * Leagues 
     */
    loadLeagues: async ({ commit }) => {
      try {
        const { competitions } = await getLeagues()
  
        commit('setLeagues', [...competitions])
      } catch {
        commit('setError', 'Список лиг не получен! Проверьте токен и подписку!')
      }
    },
    /**
     * Leagues
     * @param {String} query
     */
    loadLeaguesByQuery: async ({ commit }, query) => {
      const leagues = await getLeagues(query)

      commit('setLeagues', leagues)
    },
    /**
     * Teams
     */
    loadTeams: async ({ commit }) => {
      try {
        const { teams } = await getTeams()
  
        commit('setTeams', [...teams])
      } catch {
        commit('setError', 'Список команд не получен! Проверьте токен и подписку!')
      }
    },
    /**
     * Teams
     * @param {String} query
     */
    loadTeamsByQuery: async ({ commit }, query) => {
      const teams = await getTeams(query)

      commit('setTeams', teams)
    },
    /**
     * Matches
     * @param {String} type
     */
    loadMatches: async ({ commit }, params) => {
      try {
        const { matches } = await getMatches(params)
  
        commit('setMatches', [...matches])
      } catch {
        commit('setError', 'Список матчей не получен! Проверьте токен и подписку!')
      }
    },
    /**
     * Matches
     * @param {Object} data
     */
     loadMatchesByDate: async ({ commit }, data) => {
      const matches = await getMatches(data)

      commit('setMatches', matches)
    },
  },
})
