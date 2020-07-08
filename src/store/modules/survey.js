import axios from '@/axios'

export default {
	namespaced: true,
	state: {
		doctor: {
			specialities: [
				{
					id: 1,
					name: 'Терапевт'
				},
				{
					id: 2,
					name: 'ВОП'
				},
				{
					id: 3,
					name: 'Педиатр'
				},
				{
					id: 4,
					name: 'Кардиолог'
				},
				{
					id: 5,
					name: 'Невролог'
				},
				{
					id: 6,
					name: 'Гинеколог'
				}
			],
			channels: [
				{ id: 1, name: 'Whatsapp' },
				{ id: 2, name: 'Telegram' },
				{ id: 3, name: 'Skype' }
			],
			categories: [
				{ id: 1, name: 'A' },
				{ id: 2, name: 'B' },
				{ id: 3, name: 'C' }
			],
			tags: {
				speciality: [],
				channels: [],
				categories: []
			}
		}
	},
	actions: {},
	mutations: {
		updateTags(state, payload) {
			state.doctor.tags = payload
		},
		setDocSpecs(state, payload) {
			state.doctor.specialities = payload
		},
		createSpeciality(state, payload) {
			state.doctor.specialities.push(payload)
		},
		createChannel(state, payload) {
			state.doctor.channels.push(payload)
		}
	},
	getters: {
		getDocSpecs(state) {
			return state.doctor.specialities
		},
		getDocChannels(state) {
			return state.doctor.channels
		},
		getTags(state) {
			return state.doctor.tags
		},
		getDocCategories: (state) => state.doctor.categories
	}
}
