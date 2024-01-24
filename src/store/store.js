// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    sharedData: '',
  },
  mutations: {
    setSharedData(state, newData) {
      state.sharedData = newData;
    },
  },
});
