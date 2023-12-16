import Vue from 'vue';
import TodoList from './components/TodoList.vue';

new Vue({
  el: '#app',
  components: {
    'todo-list': TodoList
  },
  template: '<todo-list></todo-list>'
});
