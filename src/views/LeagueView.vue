<template>
  <main class="football-leagues">
    <template v-if="hasLeagues">
      <table-body :items="leagues" type="leagues" />
    </template>

    <template v-else>
      <empty-data />
    </template>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import emptyData from '@/components/common/emptyData'
import tableBody from '@/components/table/tableBody'

export default {
  name: 'LeaguesView',

  components: {
    emptyData,
    tableBody,
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

<style lang="scss" scoped>
.football-leagues {
	padding: 5px 10px;
	border: 3px solid #2c3e50;
}
</style>