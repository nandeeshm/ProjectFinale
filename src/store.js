import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
       cognito_userpool_id: process.env.VUE_APP_COGNITO_USERPOOL_ID,
       cognito_appclient_id: process.env.VUE_APP_COGNITO_CLIENT_ID	  
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  }
})
