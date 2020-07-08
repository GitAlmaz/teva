<template>
	<p :class="className">
		
	</p>
</template>

<script>
export default {
	props: {
		className: {
			type: String,
			default: "text--small"
		}
	}
}
</script>

<style>

</style>