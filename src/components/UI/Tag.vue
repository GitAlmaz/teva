<template>
	<div
		class="tag"
		v-if="show"
		:class="{ 'is-active' : isActive, 'tag--noclose' : noClose }"
		:data-group="data.group"
		@click="isActive ? unselect(data.id, data.name, group) : select(data.id, data.name, group) "
	>
		<p>{{data.name}}</p>
		<img
			v-if="!noClose"
			src="~@/assets/img/icons/close.svg"
			alt
			@click.prevent.stop="deleteTag(data.id, data.name,  group, show)"
		/>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
	name: "Tag",
	props: {
		data: {
			type: Object,
			required: true
		},
		group: {
			type: String
		},
		noClose: {
			type: Boolean,
			default: false
		},
		clickable: {
			type: Boolean,
			default: true
		},
		stateModule: {
			type: String
		}
	},
	data: () => ({
		isActive: false,
		show: true
	}),
	// computed: {
	// 	...mapGetters(this.stateModule, ["getTags"])
	// },
	methods: {
		// ...mapMutations(["updateTags"]),
		removeFromStore(id, name, group) {
			const currentTags = this.$store.getters[`${this.stateModule}/getTags`];
			currentTags[group] = currentTags[group].filter(item => item.id !== id);
			this.$store.commit(`${this.stateModule}/updateTags`, currentTags)
			// this.updateTags(currentTags);
		},
		select(id, name, group) {
			const currentTags = this.$store.getters[`${this.stateModule}/getTags`];
			currentTags[group].push({ id, name });
			// this.updateTags(currentTags);
			this.$store.commit(`${this.stateModule}/updateTags`, currentTags);
			this.isActive = true;
		},
		unselect(id, name, group) {
			this.removeFromStore(id, name, group);
			this.isActive = false;
		},
		deleteTag(id, name, group, show) {
			this.removeFromStore(id, name, group);
			this.show = false;
		}
	}
};
</script>

<style>
</style>