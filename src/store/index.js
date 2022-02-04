import Vue from 'vue'
import Vuex from 'vuex'
import { getLeagues, getTeams, getMatches } from 'services'

/**
 * TODO: Добавить axios
 */

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    leagues: [],
    teams: [],
    matches: [],
  },
  mutations: {
    setLeagues: (state, payload) => {
      state.leagues = payload
    },
    setTeams: (state, payload) => {
      state.teams = payload
    },
  },
  actions: {
    /**
     * Leagues 
     */
    loadLeagues: async ({ commit }) => {
      const leagues = await getLeagues()

      commit('setLeagues', leagues)
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
      const teams = await getTeams()

      commit('setTeams', teams)
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
    loadMatches: async ({ commit }, type) => {
      const matches = await getMatches(type)

      commit('setMatches', matches)
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
