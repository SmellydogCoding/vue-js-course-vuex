import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {  // send state to a component
    doubleCounter: state => {
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.counter + ' clicks';
    }
  },
  mutations: { // modify state synchronously
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: state => {
      state.counter --;
    }
  },
  actions: { // modify state aschronously
    increment: (context, payload) => {
      context.commit('increment', payload);
    },
    decrement: context => {
      context.commit('decrement');
    }
  }
});