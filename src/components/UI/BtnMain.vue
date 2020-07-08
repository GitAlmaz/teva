<template>
	<a href="" class="btn btn--main" :class="className">
		<p class="btn--main__inner">{{innerText}}</p>
		<span>
			<svg width="24" height="10" viewBox="0 0 24 10" xmlns="http://www.w3.org/2000/svg">
				<path d="M0.152588 4.89929H23.1526"  />
				<path d="M18.9157 9.12689L23.1526 4.89932L18.9157 0.671753"  />
			</svg>
			<!-- <img src="@/assets/img/icons/arrow-right.svg" alt /> -->
		</span>
	</a>
</template>

<script>
export default {
	name: "BtnMain",
	props: {
		innerText: {
			type: String,
			default: "Button"
		},
		className: {
			type: String,
			default: "",
			required: false
		}
	}
};
</script>

<style>
</style>