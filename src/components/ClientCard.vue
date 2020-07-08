<template>
	<div class="client-card">
		<p>
			{{data.text}}
		</p>
		<BtnMain innerText="Заполнить анкету" className="btn--empty" />
	</div>
</template>

<script>
import BtnMain from '@/components/UI/BtnMain'

export default {
	name: 'ClientCard',
	components: {
		BtnMain
	},
	props: {
		data: {
			type: Object
		}
	}
}
</script>

<style>

</style>