<template>
	<thead class="football-table-header" :class="headerClass">
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

	computed: {
		headerClass () {
			const { type } = this

			return `football-table-header--${type}`
		},
	},
}
</script>

<style lang="scss" scoped>
.football-table-header {
	display: block;
	border-bottom: 3px solid #2c3e50;

	$this: &;

	&__row {
		display: flex;
	}

	&__item {
		display: inline;
		padding: 5px 5px 5px 0;
		font-weight: normal;
		text-align: left;

		&:not(:last-child) {
			margin-right: 5px;
		}
	}

	&--leagues {
		#{$this}__item {
			width: 350px;
		}
	}
}
</style>