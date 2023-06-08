import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import { BootstrapVue } from 'bootstrap-vue'

import './main.scss'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

 // Navbar
Vue.component("NavBar", require('./components/navbarComponent.vue').default);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
