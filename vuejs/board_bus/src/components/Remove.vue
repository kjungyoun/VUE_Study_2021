<template>
  <div>삭제중 ...</div>
</template>
<script>
import axios from "axios";
import { bus } from "@/boardbus";
export default {
  created() {
    bus.$on("removeBoard", this.removeBoard);
  },
  methods: {
    removeBoard(no) {
      axios
        .delete(`http://localhost:9999/vue/api/board/${no}`)
        .then(({ data }) => {
          if (data == "success") {
            alert("삭제완료");
            this.$router.push("/list");
          } else {
            alert("삭제중 오류 발생");
            this.$router.push(`search.html?no=${no}`);
          }
        })
        .catch((err) => {
          console.log(err);
          alert("오류발생!");
          this.$router.push(`search.html?no=${no}`);
        });
    },
  },
};
</script>
