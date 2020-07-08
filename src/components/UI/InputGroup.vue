<template>
	<input
		class="input-group"
		:type="type"
		:placeholder="placeholder"
		:name="name"
		:id="id"
		:autocomplete="autocomplete"
		:ref="phoneMask"
		@keyup.enter="inputHandler"
		:value="value"
		@input="$emit('input', $event.target.value)"
	/>
</template>

<script>
import InputMask from "inputmask";
export default {
	name: "InputGroup",
	props: {
		type: {
			type: String,
			required: true
		},
		placeholder: {
			type: String,
			required: false
		},
		name: {
			type: String,
			required: true
		},
		id: {
			type: String,
			required: true
		},
		autocomplete: {
			type: String,
			default: "off",
			required: false
		},
		phoneMask: {
			type: String
		},
		value: {
			type: String
		},
		enableInput: {
			type: Boolean,
			default: false
		},
		inputFunc: {
			type: Function,
			default: null
		},
		mask: {
			type: String
		}
	},
	data: () => ({}),
	methods: {
		inputHandler() {
			this.enableInput ? this.inputFunc() : null;
		}
	},
	mounted() {
		const iMask = new InputMask({
			mask: this.mask,
			placeholder: "_"
		});
		if (this.$refs.phoneMask) {
			iMask.mask(this.$refs.phoneMask);
		}
	}
};
</script>

<style>
</style>