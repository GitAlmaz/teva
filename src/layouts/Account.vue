<template>
	<div>
		<header>
			<div class="container">
				<NavigationBar>
					<template v-slot:rightContent>
						<Username avatar="userIcon.svg" name="Константинов Константин" />
						<BtnNavigation :close="true" innerText="Выход" :styles="styles.btnNavigation" />
					</template>
				</NavigationBar>
			</div>
		</header>
		<main class="personalAccount">
			<div class="container">
				<div class="personalAccount__tabs">
					<router-link to="/questionnaire">
						<Tab :data="{text:'Анкетирование'}" />
					</router-link>
					<router-link to="/duplicate">
						<Tab :data="{text:'Проверка на дубликат'}" />
					</router-link>
					<router-link to="/clientCards">
						<Tab :data="{text:'Список незаконченных карт клиентов'}" />
					</router-link>
				</div>
				<router-view />
			</div>
		</main>
		<footer class="footer footer--account">
			<div class="container">
				<p class="footer__article">NPS-KZ-00167</p>
				<div class="footer__right">
					<p class="text--small">открывая возможности</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
import NavigationBar from "@/components/modules/NavigationBar";
import Tabs from "@/components/modules/Tabs";
import Username from "@/components/UI/Username";
import BtnNavigation from "@/components/UI/BtnNavigation";
import Tab from "@/components/UI/Tab";

export default {
	name: "PersonalAccount",
	components: {
		NavigationBar,
		Tabs,
		Username,
		BtnNavigation,
		Tab
	},
	data() {
		return {
			styles: {
				btnNavigation: {
					background: "#00567A",
					marginLeft: "20px"
				}
			}
		};
	}
};
</script>

<style lang="scss">
.router-link-active {
	.tab {
		color: #fff;
		border-color: transparent;
		p {
			color: #fff;
		}
		&::before {
			opacity: 1;
		}
	}
}
</style>