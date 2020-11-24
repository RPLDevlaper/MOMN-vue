import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../stores/Api.js'
import Transaction from '../stores/Transaction.js'
import Auth from '../stores/Auth.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Api,
    Transaction,
    Auth
  }
})
