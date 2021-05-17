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
      <router-link class="btn btn-warning" :to="'/update?no=' + board.no">수정</router-link>
      <router-link class="btn btn-danger" :to="'/remove?no=' + board.no">삭제</router-link>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
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
  created() {
    const params = new URL(document.location).searchParams;
    axios
      .get(`http://localhost:9999/vue/api/board/${params.get("no")}`)
      .then(({ data }) => {
        this.board = data;
      })
      .catch((err) => {
        console.log(err);
        alert("게시글 조회중 오류 발생");
      });
  },
};
</script>
