<template>
	<div class="radioBox">
		<input type="radio" :name="data.name" :id="data.id" />
		<label :for="data.for">
			<span>{{data.text}}</span>
		</label>
	</div>
</template>

<script>
export default {
	name: "RadioBox",
	props: {
		data: {
			type: Object
		}
	}
};
</script>

<style>
</style>