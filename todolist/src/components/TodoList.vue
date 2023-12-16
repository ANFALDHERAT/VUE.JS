<template>
  <div class="container mt-5">
    <h1 class="mb-4">Vue.js Todo List</h1>
    <div class="input-group mb-3">
      <input v-model="newTodo" @keyup.enter="addTodo" type="text" class="form-control" placeholder="Add a new todo">
      <div class="input-group-append">
        <button @click="addTodo" class="btn btn-primary">Add</button>
      </div>
    </div>
    <ul class="list-group">
      <li v-for="(todo, index) in todos" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
        {{ todo }}
        <button @click="removeTodo(index)" class="btn btn-danger">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      todos: []
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.todos.push(this.newTodo.trim());
        this.newTodo = '';
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    }
  }
};
</script>

<style scoped>

</style>
