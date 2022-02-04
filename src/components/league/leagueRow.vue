<template>
	<div>
		{{ item }}
	</div>
</template>

<script>
export default {
	name: 'leagueRow',

	props: {
		item: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style>

</style>