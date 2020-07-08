<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__row">
				<div class="footer__col">
					<a href="tel:+77273251615" class="text--sm-bold">+7 (727) 325-16-15</a>
					<a href="mailto:info.tevakz@tevapharm.com" class="text--sm-bold">info.tevakz@tevapharm.com</a>
					<p class="text--small">
						Республика Казахстан, 050059, г.Алматы, Бостандыкский район, проспект Аль-Фараби, дом 17/1, блок 5Б, 6-й этаж.
					</p>
				</div>
				<div class="footer__col">
					<p class="text--small">
						Подробную информацию о препаратах Teva вы можете узнать на нашем сайте
						<a href="teva.kz">teva.kz</a>
					</p>
					<div class="footer__small-row">
						<p class="text--small">Следите за новостями Teva в социальных сетях</p>
						<div class="soc-links">
							<a href="/">
								<img src="~@/assets/img/icons/facebook.svg" alt />
							</a>
							<a href="/">
								<img src="~@/assets/img/icons/twitter.svg" alt />
							</a>
						</div>
					</div>
				</div>
				<div class="footer__col">
					<a href="https://www.teva.kz/ru/kazakhstan/contact-us/contact-us-form/" class="text--small">Сообщить о нежелательном явлении</a>
					<router-link :to="{ name: 'docs', params: { doc: 'conditions' } }" class="text--small">
						Условия доступа к интернет-ресурсу и условия пользования интернет-ресурсом
					</router-link>
					<router-link :to="{ name: 'docs', params: { doc: 'statement' } }" class="text--small">
						Заявление о порядке обработки персональных данных компанией «Тева»: Надзор за безопасностью лекарственных препаратов
						(фармаконадзор и контроль качества)
					</router-link>
				</div>
			</div>
			<div class="footer__row">
				<div class="footer__col">
					<span class="footer__article">NPS-KZ-00170</span>
				</div>
				<div class="footer__col">
					<a href="https://rocketfirm.com/" class="footer__rocket-logo">
						<img src="~@/assets/img/icons/rocketfirm-logo.svg" alt />
						<p>2020</p>
					</a>
				</div>
				<div class="footer__col">
					<router-link :to="{ name: 'docs', params: { doc: 'confidentiality' } }" class="text--small"
						>Политика конфиденциальности</router-link
					>
				</div>
			</div>
			<!-- <div class="footer__left">
				
			</div>-->
			<!-- <div class="footer__right"> -->
			<!-- <p class="text--small">открывая возможности</p> -->
			<!-- </div> -->
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
	components: {}
}
</script>
