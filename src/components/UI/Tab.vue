<template>
	<div class="tab">
		<p>
			{{data.text}}
		</p>
	</div>
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