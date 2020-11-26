import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import $ from 'jquery'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Slick from 'vue-slick'
import VueQrCode from '@chenfengyuan/vue-qrcode'
import Loading from 'vue-loading-overlay'
import Meta from 'vue-meta'
import SlidingPagination from 'vue-sliding-pagination'
import VueSocialSharing from 'vue-social-sharing'
import VueSocialAuth from 'vue-social-auth'
import VueDragScroll from 'vue-dragscroll'
import VueChatScroll from 'vue-chat-scroll'

library.add(fas, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('slick', Slick)
Vue.component('loading', Loading)
Vue.component('sliding-pagination', SlidingPagination)
Vue.component(VueQrCode.name, VueQrCode)
Vue.use(BootstrapVue, $, Meta, VueDragScroll)
Vue.use(VueChatScroll)
Vue.use(VueSocialSharing, {
  networks: { fakeblock: 'https://fakeblock.com/share?url=@url&title=@title'}
})
Vue.use(VueSocialAuth, {
  providers: {
    facebook: {
      clientId: 15110613336890,
      redirectUri: '/auth/facebook/callback' // Your client app URL
    },
    google: {
      clientId: '663178612935-ttg2kusj38nd372d5nqu8aoatao5hjqi.apps.googleusercontent.com',
      redirectUri: '/auth/google/callback'
    },
  }
})
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
