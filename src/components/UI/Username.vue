<template>
	<div class="username">
		<div class="username__avatar">
			<img :src="require(`@/assets/img/icons/${avatar}`)" alt="">
		</div>
		<p class="username__name">{{name}}</p>
	</div>
</template>

<script>
export default {
	name: 'Username',
	props: {
		avatar: {
			type: String,
			default: 'userIcon.svg'
		},
		name: {
			type: String,
			default: "userIcon.svg"
		}
	}
}
</script>

<style>

</style>