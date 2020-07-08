<template>
	<div>
		<main class="poll">
			<section class="survey">
				<div class="container">
					<div v-if="!secondStep" class="flex flex--wrap">
						<CardWrapper :icon="require(`@/assets/img/icons/user.svg`)" title="Специальность">
							<template v-slot:mainContent>
								<div class="card-layout__inline">
									<Tag
										v-for="tag in getDocSpecs"
										:key="tag.id"
										:data="tag"
										stateModule="survey"
										group="speciality"
									/>
								</div>
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
						<CardWrapper
							:icon="require(`@/assets/img/icons/calendar.svg`)"
							:half="true"
							title="Среднее количество пациентов в неделю с инфекциями дыхательных путей в сезон простудных заболеваний, которым требуется назначение антибиотиков"
						>
							<template v-slot:mainContent>
								<InputGroup
									type="text"
									placeholder="Введите данные"
									name="pacients_per_week"
									id="pacients_per_week"
									v-model="forms.pacients_per_week"
								/>
							</template>
						</CardWrapper>
						<CardWrapper
							:icon="require(`@/assets/img/icons/medpin.svg`)"
							:half="true"
							title="При назначени антибиотиков всем ли вы назначаете пробиотики во избежание антибиотик-ассоциированной диареи"
						>
							<template v-slot:mainContent>
								<InputGroup
									type="text"
									placeholder="Введите данные"
									name="probiotics"
									id="probiotics"
									v-model="forms.probiotics"
								/>
							</template>
						</CardWrapper>
						<CardWrapper
							:icon="require('@/assets/img/icons/message.svg')"
							title="Удобные каналы для получения информации от компании Тева"
							subtitle="Выбрать 2 варианта"
							:half="true"
						>
							<template v-slot:mainContent>
								<div class="card-layout__inline">
									<Tag
										v-for="tag in getDocChannels"
										:key="tag.id"
										:data="tag"
										group="channels"
										stateModule="landing"
									/>
								</div>
								<form @submit.prevent="addChannel">
									<InputGroup
										type="text"
										placeholder="Укажите другой канал для получения информации от компании Тева"
										name="channel"
										id="channel"
										v-model="forms.channel"
									/>
								</form>
							</template>
						</CardWrapper>
						<CardWrapper
							:icon="require('@/assets/img/icons/computer.svg')"
							title="Отношение к онлайн-вебинарам"
							:half="true"
						>
							<template v-slot:mainContent>
								<div class="card-layout__inline">
									<RadioBox
										:data="{
									name: 'attitude',
									id: 'radio1',
									for: 'radio1',
									text: 'Положительно, участвую по возможности'
								}"
									/>
									<RadioBox
										:data="{
									name: 'attitude',
									id: 'radio2',
									for: 'radio2',
									text: 'Отрицательно, мне это не интересно'
								}"
									/>
								</div>
							</template>
						</CardWrapper>
					</div>
					<div v-if="secondStep" class="flex flex--wrap">
						<CardWrapper
							:icon="require('@/assets/img/icons/letterA.svg')"
							title="Катагория киента по вашему мнению"
							subtitle="(мнение сотрудника Тева)"
							:half="true"
						>
							<template v-slot:mainContent>
								<div class="card-layout__inline">
									<Tag
										v-for="tag in getDocCategories"
										:key="tag.id"
										:data="tag"
										group="categories"
										stateModule="survey"
									/>
								</div>
								<form @submit.prevent="addCategory">
									<InputGroup
										type="text"
										placeholder="Впишите критерии, по которым вы определили катагорию клиента"
										name="categories"
										id="categories"
										v-model="forms.category"
									/>
								</form>
							</template>
						</CardWrapper>
						<CardWrapper
							:icon="require('@/assets/img/icons/heart.svg')"
							title="Уровень лояльности клиента"
							subtitle="(мнение сотрудника Тева)"
							:half="true"
						>
							<template v-slot:mainContent>
								<div class="card-layout__inline">
									<RadioBox
										:data="{
									name: 'loaylty',
									id: 'loaylty1',
									for: 'loaylty1',
									text: 'Низкий'
								}"
									/>
									<RadioBox
										:data="{
									name: 'loaylty',
									id: 'loaylty2',
									for: 'loaylty2',
									text: 'Средний'
								}"
									/>
									<RadioBox
										:data="{
									name: 'loaylty',
									id: 'loaylty3',
									for: 'loaylty3',
									text: 'Высокий'
								}"
									/>
								</div>
							</template>
						</CardWrapper>
						<CardWrapper
							:icon="require('@/assets/img/icons/pencil.svg')"
							title="Краткая характеристика (описание) клиента"
							subtitle="(мнение сотрудника Тева)"
						>
							<template v-slot:mainContent>
								<form @submit.prevent="addCategory">
									<InputGroup
										type="text"
										placeholder="Введите краткую характеристику"
										name="categories"
										id="categories"
										v-model="forms.charecteristic"
									/>
								</form>
							</template>
						</CardWrapper>
					</div>
				</div>
			</section>
		</main>
		<div class="container">
			<NavigationBar>
				<template v-slot:rightContent>
					<BtnNavigation
						v-if="!secondStep"
						:next="true"
						innerText="Далее"
						@click.prevent.native="secondStep=true"
					/>
					<BtnNavigation
						v-if="secondStep"
						:back="true"
						innerText="Назад"
						@click.prevent.native="secondStep=false"
					/>
					<BtnNavigation v-if="secondStep" innerText="Завершить опрос" :green="true" />
				</template>
			</NavigationBar>
		</div>
	</div>
</template>

<script>
import CardWrapper from "@/components/CardWrapper";
import NavigationBar from "@/components/modules/NavigationBar";
import Tag from "@/components/UI/Tag";
import InputGroup from "@/components/UI/InputGroup";
import RadioBox from "@/components/UI/RadioBox";
import BtnNavigation from "@/components/UI/BtnNavigation";

import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
	name: "SurveyDoc",
	components: {
		CardWrapper,
		NavigationBar,
		Tag,
		InputGroup,
		RadioBox,
		BtnNavigation
	},
	data() {
		return {
			forms: {
				speciality: "",
				pacients_per_week: "",
				probiotics: "",
				channel: "",
				category: "",
				charecteristic: ""
			},
			secondStep: false
		};
	},
	computed: {
		...mapGetters("survey", [
			"getDocSpecs",
			"getDocChannels",
			"getDocCategories"
		])
	},
	methods: {
		...mapMutations("survey", ["createSpeciality", "createChannel"]),
		addSpeciality() {
			if (this.forms.speciality.length !== 0) {
				const specialitiesContentArr = this.getDocSpecs;
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
				const channelsContentArr = this.getDocChannels;
				const idsArr = channelsContentArr.map(item => item.id);
				const id = Math.max(...idsArr) + 1;
				this.createChannel({
					name: this.forms.channel,
					id
				});
			}
			this.forms.channel = "";
		},
		addCategory() {}
	}
};
</script>

<style>
</style>