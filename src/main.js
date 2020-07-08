import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue2TouchEvents from 'vue2-touch-events'

import Vuelidate from 'vuelidate'

Vue.config.productionTip = true

Vue.use(Vuelidate)
Vue.use(Vue2TouchEvents)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
