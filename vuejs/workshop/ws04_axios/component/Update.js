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
            v-model="title"
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
            v-model="content"
          ></textarea>
        </td>
      </tr>
    </table>
    <div class="text-right">
      <button class="btn btn-primary" @click="updateHandler">수정</button>
      <button class="btn btn-primary" @click="moveHandler">목록</button>
    </div>
  </div>`,
  data() {
    return {
      no: "",
      regtime: "",
      writer: "",
      title: "",
      content: "",
    };
  },
  created() {
    const params = new URL(document.location).searchParams;

    axios
      .get(`http://localhost:9999/vue/api/board/${params.get("no")}`)
      .then(({ data }) => {
        this.no = data.no;
        this.title = data.title;
        this.writer = data.writer;
        this.content = data.content;
        this.regtime = data.regtime;
      })
      .catch((err) => {
        alert("오류발생!!");
      });
  },
  methods: {
    moveHandler() {
      location.href = "list.html";
    },
    updateHandler() {
      const params = new URL(document.location).searchParams;
      let err = true;
      let msg = "";
      !this.title && ((err = false), (msg = "제목을 입력해주세요"), this.$refs.title.focus());
      err &&
        !this.content &&
        ((err = false), (msg = "내용을 입력해주세요"), this.$refs.content.focus());

      if (!err) {
        alert(msg);
      } else {
        //데이터 변경
        axios
          .put(`http://localhost:9999/vue/api/board/${params.get("no")}`, {
            no: this.no,
            title: this.title,
            writer: this.writer,
            content: this.content,
          })
          .then(({ data }) => {
            if (data == "success") {
              alert("수정 완료!!");
              this.moveHandler();
            } else {
              alert("수정 중 오류 발생!");
            }
          })
          .catch((err) => {
            alert("오류 발생!!");
          });
      }
    },
    moveHandler() {
      location.href = "list.html";
    },
  },
};
