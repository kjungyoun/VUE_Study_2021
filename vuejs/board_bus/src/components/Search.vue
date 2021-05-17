<template>
  <div>
    <table class="table table-condensed w-25" v-if="board">
      <tr>
        <th>번호</th>
        <td v-text="board.no"></td>
      </tr>
      <tr>
        <th>글쓴이</th>
        <td v-text="board.writer"></td>
      </tr>
      <tr>
        <th>제목</th>
        <td v-text="board.title"></td>
      </tr>
      <tr>
        <th>날짜</th>
        <td>{{ board.regtime | toDate }}</td>
      </tr>
      <tr>
        <td colspan="2" v-text="board.content"></td>
      </tr>
    </table>
    <div class="text-right">
      <router-link class="btn btn-primary" to="/list">목록</router-link>
      <button class="btn btn-warning" @click="updateBoard()">수정</button>
      <button class="btn btn-danger" @click="removeBoard()">삭제</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
import { bus } from "@/boardbus.js";
export default {
  data() {
    return {
      board: {},
    };
  },
  filters: {
    toDate(regtime) {
      return moment(new Date(regtime)).format("YYYY.MM.DD");
    },
  },
  methods: {
    searchBoard(no) {
      axios
        .get(`http://localhost:9999/vue/api/board/${no}`)
        .then(({ data }) => {
          this.board = data;
        })
        .catch((err) => {
          console.log(err);
          alert("게시글 조회중 오류 발생");
        });
    },
    updateBoard() {
      this.$router.push("/update");
      setTimeout(() => {
        bus.$emit("updateBoard", this.board);
      }, 100);
    },
    removeBoard() {
      this.$router.push("/remove");
      setTimeout(() => {
        bus.$emit("removeBoard", this.board.no);
      }, 100);
    },
  },
  created() {
    bus.$on("searchBoard", this.searchBoard);
  },
};
</script>
