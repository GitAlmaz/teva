<template>
	<div class="card-layout" :class="{'card-layout--half' : half}">
		<img :src="icon" alt class="card-layout__icon" />
		<div class="card-layout__head">
			<p class="card-layout__title">{{ title }}</p>
			<p class="card-layout__mark" v-if="subtitle">{{subtitle}}</p>
		</div>
		<slot name="mainContent">Здесь мог бы находиться какой-либо твой контент</slot>
	</div>
</template>

<script>
export default {
	props: {
		icon: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		subtitle: {
			type: String,
			required: false
		},
		half: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style>
</style>