<template>
	<main class="white-bg">
		<section class="login">
			<div class="container">
				<div class="login__logo">
					<div class="logo">
						<img :src="require(`@/assets/img/teva.svg`)" alt />
					</div>
				</div>
				<form>
					<InputGroup type="text" name="login" id="login" autocomplete="off" placeholder="Введите логин" />
					<InputGroup type="password" name="password" id="pass" placeholder="Введите пароль"  />
					<BtnMain innerText="Войти" />
				</form>
			</div>
		</section>
	</main>
</template>

<script>
import BtnMain from '@/components/UI/BtnMain'
import InputGroup from '@/components/UI/InputGroup'

export default {
	name: "Login",
	components: {
		BtnMain,
		InputGroup
	}
};
</script>

<style>
</style>