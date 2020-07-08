<template>
	<h1 class="title--account">
		{{data.text}}
	</h1>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			required: true
		}
	}
}
</script>

<style>

</style>