export default {
  template: `
        <div>삭제중 ...</div>
    `,
  created() {
    const param = new URL(document.location).searchParams;
    const no = param.get("no");
    const board = JSON.parse(localStorage.getItem("board"));

    board.items = board.items.filter((item) => {
      // no와 같지 않은 데이터만 filtering 해서 추출 => no와 같은 데이터는 추출하지 않음
      return no != item.no;
    });

    localStorage.setItem("board", JSON.stringify(board));
    alert("삭제완료");
    location.href = "list.html";
  },
};
