export default {
  template: `<div>
    <h2 class="text-center">Vue를 이용한 게시판</h2>
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
        <td v-text="board.regtime"></td>
      </tr>
      <tr>
        <td colspan="2" v-text="board.content"></td>
      </tr>
    </table>
    <div class="text-right">
      <a class="btn btn-primary" href="list.html">목록</a>
      <a class="btn btn-warning" :href="'update.html?no='+board.no">수정</a>
      <a class="btn btn-danger" :href="'remove.html?no='+board.no">삭제</a>
    </div>
  </div>`,
  data() {
    return {
      board: {},
    };
  },
  created() {
    const params = new URL(document.location).searchParams;
    axios
      .get(`http://localhost:9999/vue/api/board/${params.get("no")}`)
      .then(({ data }) => {
        this.board = data;
      })
      .catch((err) => {
        alert("게시글 조회중 오류 발생");
      });
  },
};
