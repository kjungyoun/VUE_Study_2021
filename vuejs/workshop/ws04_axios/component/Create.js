export default {
  template: `
    <div>
    <h2 class="text-center">게시글 등록</h2>
    <table class="table table-condensed w-25">
      <tr>
        <th>글쓴이</th>
        <td>
          <input
            type="text"
            id="writer"
            ref="writer"
            v-model="writer"
            placeholder="작성자를 입력해주세요"
          />
        </td>
      </tr>
      <tr>
        <th>제목</th>
        <td>
          <input
            type="text"
            id="title"
            ref="title"
            v-model="title"
            placeholder="제목을 입력해주세요"
          />
        </td>
      </tr>
      <tr>
        <th>내용</th>
        <td>
          <textarea id="content" cols="30" ref="content" v-model="content" rows="10"></textarea>
        </td>
      </tr>
    </table>
    <div class="text-right">
      <button class="btn btn-primary" @click="createHandler">등록</button>
      <button class="btn btn-primary" @click="moveHandler">목록</button>
    </div>
  </div>`,
  data() {
    return {
      writer: "",
      title: "",
      content: "",
    };
  },
  methods: {
    moveHandler() {
      location.href = "list.html";
    },
    createHandler() {
      // 데이터 검증
      let err = true;
      let msg = "";

      !this.writer && ((msg = "작성자를 입력해주세요"), (err = false), this.$refs.writer.focus());
      err &&
        !this.title &&
        ((msg = "제목을 입력해주세요"), (err = false), this.$refs.title.focus());
      err &&
        !this.content &&
        ((msg = "내용을 입력해주세요"), (err = false), this.$refs.content.focus());

      if (!err) {
        alert(msg);
      } else {
        axios
          .post("http://localhost:9999/vue/api/board", {
            writer: this.writer,
            title: this.title,
            content: this.content,
          })
          .then(({ data }) => {
            if (data == "success") {
              alert("등록이 완료 됐습니다.");
              location.href = "list.html";
            } else {
              alert("등록 실패!!!");
            }
          })
          .catch((err) => {
            alert("에러 발생");
          });
      }
    },
  },
};
