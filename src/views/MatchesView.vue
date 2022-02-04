<template>
  <main class="football-mathes">    
    <template v-if="hasMatches">
      <table-body :items="matches" type="matches" />
    </template>

    <template v-else>
      <empty-data />
    </template>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import EmptyData from '@/components/common/EmptyData'
import TableBody from '@/components/table/TableBody'

export default {
	name: 'MatchesView',

  components: {
    EmptyData,
    TableBody,
  },

  created () {
    const { type, id } = this

    this.loadMatches({ type, id })
  },

  computed: {
    ...mapState([
      'matches',
    ]),

    hasMatches () {
      const { matches } = this

      return Boolean(matches?.length)
    },

    type () {
      const { type } = this.$route.params

      return type
    },

    id () {
      const { id } = this.$route.params

      return id
    },
  },

  methods: {
    ...mapActions([
      'loadMatches',
    ]),
  },
}
</script>

<style lang="scss" scoped>
.football-mathes {
  border: 3px solid #2c3e50;
}
</style>