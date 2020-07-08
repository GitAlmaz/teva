<template>
	<section class="smart-page">
		<div class="container">
			<CardWrapper :icon="require(`@/assets/img/icons/message.svg`)" title="Подтверждение номера телефона" v-if="!success">
				<template v-slot:mainContent>
					<form @submit.prevent="submit()">
						<InputGroup
							type="text"
							placeholder="Введите код из СМС"
							name="confirm-sms"
							id="confirm-sms"
							v-model.trim="$v.forms.smsCode.$model"
							:class="{
								error: $v.forms.smsCode.$error
							}"
						/>
						<BtnMain innerText="Отправить" @click.prevent.native="submit()" />
					</form>
				</template>
			</CardWrapper>
			<CardWrapper :icon="require(`@/assets/img/icons/tick.svg`)" title="Регистрация завершена" v-if="success">
				<template v-slot:mainContent>
					<p>Спасибо Вам за обращение. Это ценно для нас!</p>
				</template>
			</CardWrapper>
		</div>
	</section>
</template>

<script>
import CardWrapper from '@/components/CardWrapper'
import InputGroup from '@/components/UI/InputGroup'
import BtnMain from '@/components/UI/BtnMain'

import { required, minLength } from 'vuelidate/lib/validators'

export default {
	name: 'Confirm',
	data() {
		return {
			forms: {
				smsCode: ''
			},
			success: true
		}
	},
	components: {
		CardWrapper,
		InputGroup,
		BtnMain
	},
	validations: {
		forms: {
			smsCode: {
				required,
				minLength: minLength(5)
			}
		}
	},
	methods: {
		setSmsCode(value) {
			this.forms.smsCode = value
			this.$v.forms.smsCode.$touch()
		},
		submit() {
			this.$v.forms.smsCode.$touch()
			if (!this.$v.forms.smsCode.$error) {
				this.success = true
			}
		}
	}
}
</script>

<style></style>
