<template>
  <div>
    {{ todo.title }}
  </div>
</template>

<script>
export default {
  name: "TodoListItem",
  props: ["todo"],
};
</script>

<style></style>
