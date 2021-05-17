<template>
  <div>
    <input type="text" v-model.trim="todoTitle" @keyup.enter="addTodo" />
    <button>추가</button>
  </div>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      todoTitle: "",
    };
  },
  methods: {
    addTodo() {
      const todoItem = {
        title: this.todoTitle,
        completed: false,
      };
      console.log(this.$store);
      if (this.todoTitle) this.$store.dispatch("addTodo", todoItem);
      //   this.$store.state.todos.push(todoItem);
      //   this.$store.commit("ADD_TODO", todoItem);
      this.todoTitle = "";
    },
  },
};
</script>

<style></style>
