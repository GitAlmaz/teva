<template>
	<div class="navigation-bar">
		<div class="navigation-bar__logo">
			<a href="/" class="logo">
				<img :src="require(`@/assets/img/teva.svg`)" alt />
			</a>
		</div>
		<div class="navigation-bar__right">
			<slot name="rightContent"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "NavigationBar",
	data: () => ({
		currentPath: ""
	}),
	components: {},
	props: {},
	mounted() {
		this.currentPath = this.$router;
	}
};
</script>

<style>
</style>