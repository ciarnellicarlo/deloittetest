import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserEdit, faUser} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

library.add(faFacebook, faInstagram, faLinkedin, faTwitter, faUserEdit, faUser)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

new Vue({
  render: h => h(App),
}).$mount('#app')