export default {
  template: `
        <div>삭제중 ...</div>
    `,
  created() {
    const params = new URL(document.location).searchParams;
    axios
      .delete(`http://localhost:9999/vue/api/board/${params.get("no")}`)
      .then(({ data }) => {
        if (data == "success") {
          alert("삭제완료");
          location.href = "list.html";
        } else {
          alert("삭제중 오류 발생");
          location.href = `search.html?no=${params.get("no")}`;
        }
      })
      .catch((err) => {
        alert("오류발생!");
        location.href = `search.html?no=${params.get("no")}`;
      });
  },
};
