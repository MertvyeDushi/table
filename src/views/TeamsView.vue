<template>
  <main class="football-teams">
    <search-form :text="query" @on-input="onInput"></search-form>
    
    <template v-if="hasTeams">
      <table-body :items="teams" type="teams" />
    </template>

    <template v-else>
      <empty-data />
    </template>
  </main>
</template>

<script>
import _debounce from 'lodash/debounce'
import { mapGetters, mapActions } from 'vuex'
import EmptyData from '@/components/common/EmptyData'
import SearchForm from '@/components/search/SearchForm'
import TableBody from '@/components/table/TableBody'

export default {
  name: 'TeamsView',

  components: {
    EmptyData,
    SearchForm,
    TableBody,
  },

  created () {
    this.loadTeams()
  },

  computed: {
    ...mapGetters([
      'getFilteredTeams',
    ]),

    query () {
      return this.$route.query.search ?? ''
    },

    teams () {
      const { query } = this

      return this.getFilteredTeams(query)
    },

    hasTeams () {
      const { teams } = this

      return Boolean(teams?.length)
    },
  },

  methods: {
    ...mapActions([
      'loadTeams',
    ]),

    onInput: _debounce(function (value) {
      this.$router.push({ query: { search : value }})
    }, 300),
  },
}
</script>

<style lang="scss" scoped>
.football-teams {
  border: 3px solid #2c3e50;
}
</style>