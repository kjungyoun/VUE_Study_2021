export default {
  template: `<div>
    <h3 class="text-center">게시글 목록</h3>
    <div class="text-right">
      <button class="btn btn-primary" @click="movePage">등록</button>
    </div>
    <div v-if="boards.length>0">
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
        <tr v-for="board in boards">
          <td>{{board.no}}</td>
          <td><router-link :to="'/search?no='+board.no">{{board.title}}</router-link></td>
          <td v-text="board.writer"></td>
          <td v-html="board.regtime"></td>
        </tr>
      </table>
    </div>
    <div v-else>게시글이 없습니다.</div>
  </div>`,

  data() {
    return { boards: [] };
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
        alert("오류 발생");
      });
  },
};
