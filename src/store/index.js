import { createStore } from "vuex";

export default createStore({
  state: {
    CountVL:0
  },

getters:{
    ShowCount(state){
      return state.CountVL
    }
},
  mutations: {
    Increment(state){
      state.CountVL += 1
    }
  },
  actions: {},
  modules: {},
});
