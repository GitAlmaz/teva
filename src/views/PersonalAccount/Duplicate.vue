<template>
	<div class="personalAccount__content">
		<Title :data="{text: 'Проверка на дубликат'}" />
		<div class="personalAccount__list">
			<p class="text--small">Введите номер телефона для проверки на дубликат</p>
			<InputGroup
				type="tel"
				placeholder="+7 (7  )"
				name="tel"
				id="tel"
				phoneMask="phoneMask"
				mask="+7 (799) 999 99 99"
				v-model="$v.phone_number.$model"
				:class="{
									'error' : $v.phone_number.$error,
								}"
			/>
		</div>
	</div>
</template>

<script>
import Title from "@/components/UI/Title";
import InputGroup from "@/components/UI/InputGroup";

import { required } from "vuelidate/lib/validators";

export default {
	name: "Duplicate",
	components: {
		Title,
		InputGroup
	},
	data() {
		return {
			phone_number: ""
		};
	},
	validations: {
		phone_number: {
			required
		}
	}
};
</script>

<style>
</style>