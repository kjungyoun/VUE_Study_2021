import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {},
  mutations: {
    ADD_TODO(state, todoItem) {
      console.log(state);
      state.todos.push(todoItem);
    },
  },
  actions: {
    addTodo({ commit }, todoItem) {
      // console.log(context);
      commit("ADD_TODO", todoItem);
    },
  },
  modules: {},
});
