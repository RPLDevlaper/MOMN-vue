const state = {
  price_id: localStorage.getItem('priceId'),
  game_id: localStorage.getItem('gameId')
}

const getters = {
  isPrice: state => state.price_id !== "null" && state.price_id !== undefined && state.price_id !== null,
  isGame: state => state.game_id !== "null" && state.game_id !== undefined && state.game_id !== null,
  price: state => state.price_id,
  game: state => state.game_id,
}

const mutations = {
  set_price(state, payload) {
    state.price_id = payload
  },
  set_game(state, payload) {
    state.game_id = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}