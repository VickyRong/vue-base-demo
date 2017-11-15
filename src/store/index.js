import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    showToast:false,
    toastContext:''
}
const mutations = {
    SHOW_TOAST(state,option){
        state.showToast = option.show;
        state.toastContext = option.text;
    }
}
const actions = {
    showToast(store,option){
        store.commit("SHOW_TOAST",option)
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions
  })
