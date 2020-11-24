const state = {
  token: localStorage.getItem('api_token'),
  users: [],
}

const getters = {
  isAuth: state => state.token !== null && state.token !== undefined && state.token !== 'null',
  getToken: state => state.token,
  getUser: state => state.users
}

const mutations = {
  set_token(state, payload) {
    state.token = payload
  },
  set_user(state, payload) {
    state.users = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
}