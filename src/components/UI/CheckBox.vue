<template>
	<div class="checkbox" v-if="show">
		<input
			type="checkbox"
			:name="data.name"
			:id="data.name + data.id"
			:data-id="data.id"
			:value="data.name"
			@change="changeHendler()"
		/>
		<label :for="data.name + data.id">
			<p>{{data.name}}</p>
			<img @click="hide()" :data-close="data.name" src="~@/assets/img/icons/close.svg" alt />
		</label>
	</div>
</template>

<script>
export default {
	name: "CheckBox",
	props: {
		data: {
			type: Object
		},
		value: {
			type: Array
		}
	},
	data() {
		return {
			show: true,
			arr: []
		};
	},
	// computed: {
	// 	checked: {
	// 		get() {
	// 			return this.arr;
	// 			// return [
	// 			// 	{
	// 			// 		name: this.data.name,
	// 			// 		id: this.data.id
	// 			// 	}
	// 			// ];
	// 		},
	// 		set(val) {
	// 			this.changeHendler()
	// 			// this.$emit("input", val);
	// 		}
	// 	}
	// },
	methods: {
		changeHendler() {
			if (event.target.checked) {
				console.log('work');
				
				const value = event.target.value;
				this.arr.push({
					id: this.data.id,
					name: this.data.name
				});
				this.$emit("input", this.arr)	
				console.log(this.arr);
			} else {
				this.arr = this.arr.filter(item => item.id !== this.data.id);
				this.$emit("input", this.arr)	
			}
		},
		hide() {
			const name = event.target.dataset.close;
			this.checked = this.checked.filter(item => item !== name);
			this.show = false;
		}
	}
};
</script>

<style>
</style>