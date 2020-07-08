<template>
	<div class="small-card">
		<img :src="data.icon" alt class="small-card__icon" />
		<p class="small-card__title">{{ data.title }}</p>
		<BtnMain :innerText="data.btnText" @click.prevent.native="btnFunc(param)" />
	</div>
</template>

<script>
import BtnMain from "@/components/UI/BtnMain";
export default {
	name: "SmallCard",
	components: {
		BtnMain
	},
	props: {
		data: {
			type: Object
		},
		btnFunc: {
			type: Function
		},
		param: {
			type: String
		}
	}
};
</script>

<style>
</style>