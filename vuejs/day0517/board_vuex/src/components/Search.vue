<template>
  <div>
    <h4 class="text-center">게시글 내용</h4>
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
      <router-link class="btn btn-primary" :to="'/update?no=' + board.no">수정</router-link>
      <router-link class="btn btn-primary" :to="'/remove?no=' + board.no">삭제</router-link>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["board"]),
  },
  filters: {
    toDate: function (regtime) {
      return moment(new Date(regtime)).format("YYYY.MM.DD");
    },
  },
  created() {
    this.$store.dispatch("getBoard", `/board/${this.$route.query.no}`);
  },
};
</script>
