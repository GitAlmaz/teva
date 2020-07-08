<template>
	<main class="landing">
		<div class="landing-data" ref="landingData">
			<div class="container">
				<h3>Согласие на получение информации от компании Тева</h3>
				<form id="main-form">
					<transition name="cardWrapper">
						<CardWrapper
							v-if="show"
							:icon="require(`@/assets/img/icons/user.svg`)"
							title="Данные специалиста"
						>
							<template v-slot:mainContent>
								<div class="card-layout__form">
									<InputGroup
										type="text"
										placeholder="ФИО"
										name="fio"
										id="fio"
										v-model="$v.userData.fullname.$model"
										:class="{
										'error' : $v.userData.fullname.$error,
									}"
									/>
									<InputGroup
										type="tel"
										placeholder="+7 (7  )"
										name="tel"
										id="tel"
										phoneMask="phoneMask"
										mask="+7 (799) 999 99 99"
										v-model="$v.userData.phone_number.$model"
										:class="{
										'error' : $v.userData.phone_number.$error,
									}"
									/>
									<InputGroup
										type="text"
										placeholder="Город"
										name="city"
										id="city"
										v-model="$v.userData.city.$model"
										:class="{
										'error' : $v.userData.city.$error,
									}"
									/>
									<InputGroup
										type="text"
										placeholder="E-mail"
										name="email"
										id="email"
										v-model="$v.userData.email.$model"
										:class="{
										'error' : $v.userData.email.$error,
									}"
									/>
									<InputGroup
										type="text"
										placeholder="Место работы"
										name="work"
										id="work"
										v-model="$v.userData.place_of_work.$model"
										:class="{
										'error' : $v.userData.place_of_work.$error,
									}"
									/>
								</div>
							</template>
						</CardWrapper>
					</transition>
					<transition name="cardWrapper">
						<CardWrapper v-if="show" :icon="require(`@/assets/img/icons/plus.svg`)" title="Специальность">
							<template v-slot:mainContent>
								<div class="card-layout__inline">
									<Tag
										v-for="tag in allSpeciality.content"
										:key="tag.id"
										:data="tag"
										:group="allSpeciality.group"
										stateModule="landing"
									/>
								</div>
								{{userData.specialities}}
								<form @submit.prevent="addSpeciality">
									<InputGroup
										type="text"
										placeholder="Введите другую специальность"
										name="spec"
										id="spec"
										v-model="forms.speciality"
									/>
								</form>
							</template>
						</CardWrapper>
					</transition>
					<transition name="cardWrapper">
						<CardWrapper
							v-if="show"
							:icon="require('@/assets/img/icons/message.svg')"
							title="Удобные каналы для получения информации от компании Тева"
							subtitle="Выбрать 2 варианта"
						>
							<template v-slot:mainContent>
								<div class="card-layout__inline">
									<Tag
										v-for="tag in allChannels.content"
										:key="tag.id"
										:data="tag"
										:group="allChannels.group"
										stateModule="landing"
									/>
								</div>
								{{userData.channels}}
								<form @submit.prevent="addChannel">
									<InputGroup
										type="text"
										placeholder="Укажите другой канал для получения информации от компании Тева"
										name="spec"
										id="spec"
										v-model="forms.channel"
									/>
								</form>
							</template>
						</CardWrapper>
					</transition>
				</form>
			</div>
		</div>
		<div class="landing-info">
			<div class="container">
				<BtnMain innerText="Согласен(-на)" @click.prevent.native="collectData" />
				<div class="landing-info__text">
					<p v-for="item in staticInfoText" :key="item.text">{{item.text}}</p>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import CardWrapper from "@/components/CardWrapper";
import InputGroup from "@/components/UI/InputGroup";
import Tag from "@/components/UI/Tag";
import BtnMain from "@/components/UI/BtnMain";

import { mapGetters, mapActions, mapMutations } from "vuex";

import { required, minLength, email } from "vuelidate/lib/validators";

export default {
	name: "Landing",
	components: {
		CardWrapper,
		InputGroup,
		Tag,
		BtnMain
	},
	data() {
		return {
			staticInfoText: [
				{
					text: `Настоящим я предоставляю своё согласие ТОО «ратиофарм Казахстан», БИН 071040003425 (далее – «Компания»), Teva Pharmaceutical Industries Limited (далее – «Тева») и их взаимосвязанным лицам и контрагентам (как могут быть определены Компанией или Тева) на:
					1. моё безвозмездное участие в качестве респондента в маркетинговых исследованиях, вебинарах и интервью, организуемых Компанией или по её поручению;
					2. безвозмездное получение мною информации научного и образовательного характера, иных информационных рассылок, предоставляемых Компанией или по её поручению посредством: почты, электронной почты, по телефону и при личных встречах, СМС-сообщений на мобильный телефон,сообщений через мобильные приложения, иных технических средств;
					3. сбор и обработку моих персональных данных как с использованием информационных систем и средств автоматизации, так и без их использования.`
				},
				{
					text: `Сбор и обработка моих персональных данных (далее – «ПД») могут осуществляться в целях действий, указанных в Согласиях №№ 1 и 2 выше, а также в иных законных целях, связанных с деятельностью Компании, Тева и иных лиц, которым предоставляется данное согласие. Предоставляемое мною согласие на сбор и обработку моих ПД: включает согласие на внесение ПД в базы данных и электронные информационные ресурсы; подключение электронных информационных ресурсов, содержащих ПД, к сетям, связывающим их с другими базами данных; трансграничную передачу ПД на территорию любых иностранных государств; накопление, использование, хранение и распространение ПД; и все другие действия, которые рассматриваются применимым законодательством в качестве сбора и обработки ПД; распространяется на мои ПД, включённые в настоящий документ, иные ПД, предоставляемые мною, а также собираемые Компанией, Тева и иными указанными выше лицами из открытых и иных незапрещённых источников. Обязуюсь при изменении ПД, предоставленных мною, своевременно уведомить Компанию.`
				},
				{
					text: `Согласия № 1, 2 и 3 предоставляются мною бессрочно, до моего письменного отзыва. Согласие № 3 не может быть мною отозвано в случаях, установленных применимым законодательством. Согласия №№ 1 и 2 действуют в той мере, насколько указанные в них действия допустимы с учётом занимаемой мною должности.`
				}
			],
			userData: {
				fullname: "",
				phone_number: "",
				city: "",
				email: "",
				place_of_work: ""
			},
			forms: {
				speciality: "",
				channel: ""
			},
			show: true
		};
	},
	validations: {
		userData: {
			fullname: {
				required,
				minLength: minLength(4)
			},
			phone_number: {
				required,
				minLength: minLength(11)
			},
			city: {
				required
			},
			email: {
				required,
				email
			},
			place_of_work: {
				required
			}
		}
	},
	computed: {
		...mapGetters("landing", ["allSpeciality", "allChannels", "getUserData"])
	},
	methods: {
		...mapMutations("landing", [
			"createSpeciality",
			"createChannel",
			"updateUserData"
		]),
		addSpeciality() {
			if (this.forms.speciality.length !== 0) {
				const specialitiesContentArr = this.allSpeciality.content;
				const idsArr = specialitiesContentArr.map(item => item.id);
				const id = Math.max(...idsArr) + 1;
				this.createSpeciality({
					name: this.forms.speciality,
					id
				});
			}
			this.forms.speciality = "";
		},
		addChannel() {
			if (this.forms.channel.length !== 0) {
				const channelsContentArr = this.allChannels.content;
				const idsArr = channelsContentArr.map(item => item.id);
				const id = Math.max(...idsArr) + 1;
				this.createChannel({
					name: this.forms.channel,
					id
				});
			}
			this.forms.channel = "";
		},
		setPhone(value) {
			this.userData.phone_number = value;
			this.$v.userData.phone_number.$touch();
		},
		setFullname(value) {
			this.userData.fullname = value;
			this.$v.userData.fullname.$touch();
		},
		setCity(value) {
			this.userData.city = value;
			this.$v.userData.city.$touch();
		},
		setEmail(value) {
			this.userData.email = value;
			this.$v.userData.email.$touch();
		},
		setWorkPlace(value) {
			this.userData.place_of_work = value;
			this.$v.userData.place_of_work.$touch();
		},
		...mapActions("landing", [
			"fetchSpeciality",
			"fetchChannels",
			"sendUserData"
		]),
		async collectData() {
			this.$v.userData.$touch();
			if (!this.$v.userData.$invalid) {
				this.updateUserData(this.userData);
				const res = await this.sendUserData();
				res ? this.$router.push({ path: "/confirm" }) : console.log("bad");
			} else {
				console.log("error");
				this.$refs.landingData.scrollIntoView({
					block: "start",
					behavior: "smooth"
				});
			}
		}
	},
	async mounted() {
		await this.fetchSpeciality();
		await this.fetchChannels();
		this.show = true;
	}
};
</script>

<style lang="scss">
.cardWrapper {
	&-enter-active {
		transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
	}
	&-enter {
		transform: translateY(200px);
		opacity: 0;
	}
}
</style>