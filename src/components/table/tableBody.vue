<template>
	<table class="football-table">
		<table-header :items="headerItems" />

		<tbody class="football-table__wrapper">
			<table-row
				v-for="item in items"
				:key="item.id"
				:item="item"
				:type="type"
			/>
		</tbody>
	</table>
</template>

<script>
import tableHeader from '@/components/table/tableHeader'
import tableRow from '@/components/table/tableRow'

export default {
	name: 'tableBody',

	components: {
		tableHeader,
		tableRow,
	},

	props: {
		type: {
			type: String,
			default: 'leagues',
		},
		items: {
			type: Array,
			default: () => [],
		},
	},

	computed: {
		headerItems () {
			const { type } = this

			switch (type) {
				case 'leagues':
					return [
						'Название',
						'Страна',
						'Даты',
						'День соревнования',
						'Победитель'
					]
				default:
					return [
						'Логотип',
						'Название',
						'Страна',
						'Стадион',
					]
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.football-table {
	display: block;
	border: 3px solid #2c3e50;

	&__wrapper {
		display: block;
	}
}
</style>