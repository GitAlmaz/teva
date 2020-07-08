<template>
	<a href="#" class="btn btn--navigation" :class="{'btn--green' : green}" :style="styles">
		<span v-if="back" class="icon-back">
			<img :src="require(`@/assets/img/icons/arrow-right.svg`)" alt />
		</span>
		<p>{{innerText}}</p>
		<span v-if="next" class="icon-next">
			<img :src="require(`@/assets/img/icons/arrow-right.svg`)" alt />
		</span>
		<span v-if="close" class="icon-close">
			<img :src="require(`@/assets/img/icons/close-thin.svg`)" alt />
		</span>
	</a>
</template>

<script>
export default {
	name: "BtnNavigation",
	components: {},
	props: {
		innerText: {
			type: String
		},
		icon: {
			type: String,
			default: "arrow-right.svg"
		},
		back: {
			type: Boolean,
			default: false
		},
		next: {
			type: Boolean,
			default: false
		},
		close: {
			type: Boolean,
			default: false
		},
		styles: {
			type: Object
		},
		green: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style lang="scss" scoped>
.btn--navigation {
	background: #00567a;
}
.btn--green {
	background: #3c7e79;
	margin-left: 20px;
}
.icon {
	&-back {
		transform: rotate(180deg);
		margin-right: 20px;
	}
	&-close {
		width: 14px;
		height: 14px;
		display: flex;
		margin-left: 20px;
		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
	&-next {
		margin-left: 20px;
	}
}
</style>