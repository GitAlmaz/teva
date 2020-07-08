import Vue from 'vue'
import Vuex from 'vuex'
import landing from './modules/landing'
import survey from './modules/survey'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
    landing,
    survey
  }
})
