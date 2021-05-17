import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    boards: [], // 전체 게시글
    board: {}, // 현재 보는 게시글 => update할 때, search할 때
  },
  getters: {
    boards(state) {
      return state.boards;
    },
    board(state) {
      return state.board;
    },
  },
  mutations: {
    setBoards(state, payload) {
      state.boards = payload;
    },
    setBoard(state, payload) {
      state.board = payload;
    },
  },
  actions: {
    getBoards(context) {
      http
        .get("board")
        .then(({ data }) => {
          context.commit("setBoards", data);
        })
        .catch(() => {
          alert("수행 중 오류가 발생했습니다.");
        });
    },
    getBoard(context, payload) {
      http
        .get(payload)
        .then(({ data }) => {
          context.commit("setBoard", data);
        })
        .catch(() => {
          alert("데이터 조회 중 오류 발생!");
        });
    },
  },
});
