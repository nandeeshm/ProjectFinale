import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'

import Appbar from './components/Appbar'
import Footbar from './components/Footbar'
import Welcome from './views/welcome'
import StaffAppbar from './components/Staff-Appbar'
import PatientAppbar from './components/Patient-Appbar'

Vue.component('Appbar',Appbar);
Vue.component('Footbar',Footbar);
Vue.component('welcome',Welcome);
Vue.component('Staff-Appbar',StaffAppbar)
Vue.component('Patient-Appbar',PatientAppbar)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,	
  render: h => h(App)
}).$mount('#app')
