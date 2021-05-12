export default {
  template: `<div>
    <h2 class="text-center">게시글 수정</h2>
    <table class="table table-condensed w-25">
      <tr>
        <th>제목</th>
        <td>
          <input
            type="text"
            id="title"
            placeholder="제목을 입력해주세요"
            ref="title"
            v-model="board.title"
          />
        </td>
      </tr>
      <tr>
        <th>내용</th>
        <td>
          <textarea
            id="content"
            cols="30"
            rows="10"
            ref="content"
            v-model="board.content"
          ></textarea>
        </td>
      </tr>
    </table>
    <div class="text-right">
      <button class="btn btn-primary" @click="updateHandler">수정</button>
      <button class="btn btn-primary" @click="moveHandler">목록</button>
    </div>
  </div>`,
  created() {
    const param = new URL(document.location).searchParams;
    this.no = param.get("no");

    const board = JSON.parse(localStorage.getItem("board"));

    for (let obj of board.items) {
      if (this.no == obj.no) {
        this.board = obj;
        break;
      }
    }
  },
  methods: {
    moveHandler() {
      location.href = "list.html";
    },
    updateHandler() {
      let err = true;
      let msg = "";
      !this.board.title && ((err = false), (msg = "제목을 입력해주세요"), this.$refs.title.focus());
      err &&
        !this.board.content &&
        ((err = false), (msg = "내용을 입력해주세요"), this.$refs.content.focus());

      if (!err) {
        alert(msg);
      } else {
        //데이터 변경

        // localstorage에 기존 데이터 추출
        const board = JSON.parse(localStorage.getItem("board"));
        for (let i = 0; i < board.items.length; i++) {
          if (this.board.no == board.items[i].no) {
            // 같은 no의 board 정보를 새로 입력한 데이터로 교체
            board.items[i] = {
              no: this.board.no,
              title: this.board.title,
              content: this.board.content,
              regtime: this.board.regtime,
            };
            break;
          }
        }

        // 수정 내용 localstorage에 저장하기
        localStorage.setItem("board", JSON.stringify(board));
        alert("수정 완료!!");
        //페이지 이동
        location.href = "search.html?no=" + this.no;
      }
    },
  },
};
