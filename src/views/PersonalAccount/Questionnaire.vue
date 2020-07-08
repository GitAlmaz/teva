<template>
	<div class="personalAccount__content">
		<Title :data="{text: 'Анкетироване'}" />
		<div class="personalAccount__list">
			<SmallCard
				:data="{title: 'Новый врач', btnText: 'Создать анкету', icon: `${require('@/assets/img/icons/plus.svg')}`}"
				:btnFunc="toSurvey"
				param="/SurveyDoc"
			/>
			<SmallCard
				:data="{title: 'Новый фармацевт', btnText: 'Создать анкету', icon: `${require('@/assets/img/icons/medpin-green.svg')}`}"
				:btnFunc="toSurvey"
				param="/SurveyDoc"
			/>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/UI/Title";
import SmallCard from "@/components/SmallCard";

export default {
	name: "Questionnaire",

	components: {
		Title,
		SmallCard
	},
	methods: {
		toSurvey(path) {
			this.$router.push({ path })
		}
	}
};
</script>
