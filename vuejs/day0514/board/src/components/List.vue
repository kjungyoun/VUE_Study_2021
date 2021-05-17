<template>
  <div>
    <h4 class="text-center">게시글 목록</h4>
    <div class="text-right">
      <button class="btn btn-primary" @click="movePage">등록</button>
    </div>
    <div v-if="boards.length > 0">
      <table class="table table-boardered table-condensed">
        <colgroup>
          <col width="10%" />
          <col width="50%" />
          <col width="15%" />
          <col width="25%" />
        </colgroup>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>날짜</th>
        </tr>
        <tr v-for="(board, index) in boards" :key="index">
          <td>{{ board.no }}</td>
          <td>
            <router-link :to="'/search?no=' + board.no">{{ board.title }}</router-link>
          </td>
          <td v-text="board.writer"></td>
          <td>{{ board.regtime | toDate }}</td>
        </tr>
      </table>
    </div>
    <div v-else>게시글이 없습니다.</div>
  </div>
</template>
<script>
// import http from '@/util/http-common.js'
import axios from "axios";
import moment from "moment";
export default {
  name: "list",
  data() {
    return { boards: [] };
  },
  filters: {
    toDate(regtime) {
      return moment(new Date(regtime)).format("YYYY.MM.DD");
    },
  },
  methods: {
    movePage() {
      this.$router.push("/create");
    },
  },
  created() {
    axios
      .get("http://localhost:9999/vue/api/board")
      // .then((result) => {
      //   console.log(result);
      //   console.log(result.data);
      // })
      .then(({ data }) => {
        // 결과 Object에서 data만 추출
        this.boards = data;
      })
      .catch((err) => {
        console.log(err);
        alert("오류 발생");
      });
  },
};
</script>
