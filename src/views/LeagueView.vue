<template>
  <div>
    <template v-if="hasLeagues">
      <league-table :items="leagues" />
    </template>

    <template v-else>
      <empty-data />
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import emptyData from '@/components/common/emptyData'
import leagueTable from '@/components/league/leagueTable'

export default {
  name: 'LeaguesView',

  components: {
    emptyData,
    leagueTable,
  },

  created () {
    this.loadLeagues()
  },

  computed: {
    ...mapGetters([
      'getFilteredLeagues',
    ]),

    leagues () {
      const query = ''
      const leagues = this.getFilteredLeagues(query)

      return leagues
    },

    hasLeagues () {
      const { leagues } = this

      return Boolean(leagues?.length)
    },
  },

  methods: {
    ...mapActions([
      'loadLeagues',
    ]),
  },
}
</script>
