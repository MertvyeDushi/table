<template>
	<thead class="football-table-header">
		<tr class="football-table-header__row">
			<th
				v-for="(item, index) in items"
				:key="index"
				class="football-table-header__item"
			>
				{{ item }}
			</th>
		</tr>
	</thead>
</template>

<script>
export default {
	name: 'tableHeader',

	props: {
		type: {
			type: String,
			default: 'leagues',
		},
		items: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.football-table-header {
	display: block;
	border-bottom: 3px solid #2c3e50;

	&__row {
		display: flex;
	}

	&__item {
		display: inline;
		padding: 5px;
		font-weight: normal;

		&:not(:last-child) {
			margin-right: 5px;
		}
	}
}
</style>