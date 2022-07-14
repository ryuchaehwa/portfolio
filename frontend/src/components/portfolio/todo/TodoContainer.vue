<template>
  <div>
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from "./TodoList.vue";

export default {
  name: "TodoContainer",
  components: {
    TodoList,
  },
};
</script>
