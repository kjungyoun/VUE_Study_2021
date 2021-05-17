<template>
  <div>
    <todo-list-item v-for="(todo, index) in todos" :key="index" :todo="todo" />
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem.vue";
export default {
  components: { TodoListItem },
  name: "TodoList",
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
};
</script>

<style></style>
