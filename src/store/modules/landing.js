import axios from '@/axios'

export default {
	namespaced: true,
	state: {
		speciality: [],
		channels: [],
		userData: {
			fullname: '',
			phone_number: '',
			city: '',
			email: '',
			place_of_work: ''
		},
		tags: {
			speciality: [],
			channels: []
		}
	},
	actions: {
		async fetchSpeciality({ commit }) {
			try {
				const res = await axios.get('specialty')
				if (res.status === 200) {
					commit('updateSpeciality', {
						group: 'speciality',
						content: res.data
					})
				}
			} catch (e) {
				console.error(e)
			}
		},
		async fetchChannels({ commit }) {
			try {
				const res = await axios.get('channel')
				if (res.status === 200) {
					commit('updateChannels', {
						group: 'channels',
						content: res.data
					})
				}
			} catch (e) {
				console.error(e)
			}
		},
		async sendUserData() {
			const data = {
				source: 'consent',
				fullname: this.state.landing.userData.fullname,
				phone_number: this.state.landing.userData.phone_number,
				city: this.state.landing.userData.city,
				email: this.state.landing.userData.email,
				place_of_work: this.state.landing.userData.place_of_work,
				specialties: this.state.landing.tags['speciality'],
				channels: this.state.landing.tags['channels']
			}
			try {
				const res = await axios.post('doctor', data)
				if (res.status === 200) {
					return res
				}
			} catch (e) {
				console.error(e)
			}
		}
	},
	mutations: {
		updateSpeciality(state, payload) {
			state.speciality = payload
		},
		updateChannels(state, payload) {
			state.channels = payload
		},
		createSpeciality(state, payload) {
			state.speciality.content.push(payload)
		},
		createChannel(state, payload) {
			state.channels.content.push(payload)
		},
		updateTags(state, payload) {
			state.tags = payload
		},
		updateName(state, payload) {
			state.userData.fullname = payload
		},
		updateUserData(state, payload) {
			state.userData = payload
		},
		updatePhone(state, payload) {
			state.userData.phone_number = payload
		},
		updateCity(state, payload) {
			state.userData.phone_number = payload
		}
	},
	getters: {
		allSpeciality(state) {
			return state.speciality
		},
		allChannels(state) {
			return state.channels
		},
		getTags(state) {
			return state.tags
		},
		getUserData(state) {
			return state.userData
		}
	}
}
