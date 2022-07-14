<template>
  <div>
    <div style="display: flex">
      <div>
        <add-todo></add-todo>
        <table>
          <tr>
            <td>번호</td>
            <td>할 일</td>
            <td>삭제</td>
          </tr>
          <tr v-for="todo in todoList" :key="todo.id">
            <td>{{ todo.id }}</td>
            <td>{{ todo.todo }}</td>
          </tr>
        </table>
      </div>
      <div>
        <total-sum></total-sum>
      </div>
    </div>
  </div>
</template>

<script>
import todolist from "../../../modules/data/todolist";
import AddTodo from "./AddTodo.vue";
import TotalSum from "./TotalSum.vue";

export default {
  name: "TodoList",

  components: {
    TotalSum,
    AddTodo,
  },

  data() {
    return {
      todoList: todolist,
    };
  },
};
</script>
