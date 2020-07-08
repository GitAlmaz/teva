<template>
	<div class="personalAccount__content">
    <Title :data="{text: 'Список незаконченных карт клиентов'}" />
			<div class="personalAccount__list">
				<ClientCard :data="{text: 'Клиент номер 1'}" />
				<ClientCard :data="{text: 'Клиент номер 2'}" />
				<ClientCard :data="{text: 'Клиент номер 3'}" />
				<ClientCard :data="{text: 'Клиент номер 4'}" />
				<ClientCard :data="{text: 'Клиент номер 5'}" />
			</div>
  </div>
</template>

<script>
import Title from '@/components/UI/Title'
import ClientCard from '@/components/ClientCard'
export default {
	name: 'ClientCards',
	components: {
		Title,
		ClientCard
	}
}
</script>

<style>

</style>