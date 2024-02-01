// store.js
import { createStore } from 'vuex';


const store = createStore({
  state() {
    return {
      cardSize: [],
      startTime: 0,
      timer: 0,
    }
  },
  mutations: {
    setCardSize(state, cardSize) {
      state.cardSize = cardSize;
    },
    setStartTime(state, startTime) { 
      state.startTime = startTime;
    },
    setTime(state, timer) { 
      state.timer = timer;
    },
  },
  actions: {
    getCardSize({commit}, cardSize) {
      commit("setCardSize", cardSize);
    },
    getStartTimer({commit}, startTime) { 
      console.log(startTime);
      commit("setStartTime", startTime);
    },
    getSetTime({commit}, timer) { 
      console.log(timer);
      commit("setTime", timer);
    }
  },

})
export default store;
