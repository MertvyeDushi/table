<template>
  <main class="football-mathes">
    <search-form :text="query" @on-input="onInput"></search-form>
    
    <template v-if="hasMatches">
      <table-body :items="matches" type="matches" />
    </template>

    <template v-else>
      <empty-data />
    </template>
  </main>
</template>

<script>
export default {
	name: 'MatchesView',
}
</script>

<style>

</style>