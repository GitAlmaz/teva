import axios from 'axios'

// API in env file
const baseURL = process.env.VUE_APP_API
const baseKEY = process.env.VUE_APP_KEY

const _axios = axios.create({
	baseURL,
	headers: {
		Authorization: `Bearer ${baseKEY}`,
		'Content-Type': 'application/json'
	}
})

export default _axios
