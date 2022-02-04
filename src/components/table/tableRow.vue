<template>
	<div>
		{{ item }}
	</div>
</template>

<script>
export default {
	name: 'tableRow',

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