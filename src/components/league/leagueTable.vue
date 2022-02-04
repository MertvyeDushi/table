<template>
	<div>
		<league-header />

		<ul>
			<li v-for="item in items" :key="item.id">
				<league-row :item="item" />
			</li>
		</ul>
	</div>
</template>

<script>
import leagueHeader from '@/components/league/leagueHeader'
import leagueRow from '@/components/league/leagueRow'

export default {
	name: 'leagueTable',

	components: {
		leagueHeader,
		leagueRow,
	},

	props: {
		items: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style>

</style>