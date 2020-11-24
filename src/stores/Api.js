const state = {
    api: process.env.VUE_APP_API_URL,
    web: process.env.VUE_APP_WEB_URL,
    base: process.env.BASE_URL,
}
const getters = {
    getApi: state => state.api,
    getWeb: state => state.web,
    getBase: state => state.base,
}
export default {
    namespaced: true,
    state,
    getters
}