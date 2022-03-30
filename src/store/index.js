import { createStore } from 'vuex'

export default createStore({
    state: {
        counter: 0,
  },
  getters: {
  },
    mutations: {
        subirContador(state) {
            state.counter++
        },
        bajarContador(state) {
            state.counter--
        }
        
  },
  actions: {
  },
  modules: {
  }
})
