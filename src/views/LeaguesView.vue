<template>
  <main class="football-leagues">
    <search-form :text="query" @on-input="onInput"></search-form>
    
    <template v-if="hasLeagues">
      <table-body :items="leagues" type="leagues" />
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
  name: 'LeaguesView',

  components: {
    EmptyData,
    SearchForm,
    TableBody,
  },

  created () {
    this.loadLeagues()
  },

  computed: {
    ...mapGetters([
      'getFilteredLeagues',
    ]),

    query () {
      return this.$route.query.search ?? ''
    },

    leagues () {
      const { query } = this

      return this.getFilteredLeagues(query)
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

    onInput: _debounce(function (value) {
      this.$router.push({ query: { search : value }})
    }, 300),
  },
}
</script>

<style lang="scss" scoped>
.football-leagues {
  background: #e0e0e0;
}
</style>