<template>
    <div class="app">
        <h1>To-do list</h1>

        <post-form
            :tasks="tasks"
            @create="createTask"/>

        <post-list
            :tasks="tasks"
            @remove="removeTask"
            @edit="editTask"/>
    </div>
</template>

<script>
import PostList from '@/components/PostList';
import PostForm from '@/components/PostForm';
import axios from 'axios';

const baseURL = process.env.VUE_APP_JSON_SERVICE_URL;

export default {
  components: {
    PostList, PostForm
  },
  data() {
    return {
      tasks: []
    };
  },
  async created() {
    const res = await axios.get(baseURL);
    this.tasks = res.data;
  },
  methods: {
    async createTask(task) {
      const res = await axios.post(baseURL, task);
      this.tasks = [...this.tasks, res.data];
    },
    removeTask(task) {
      this.tasks = this.tasks.filter(p => p.id !== task.id);
      axios.delete(`${baseURL}${task.id}`);
    },
    async editTask(task, id) {
      task.id = id;
      await axios.patch(`${baseURL}${id}`, task);
      this.tasks.find(item => item.id === id).title = task.title;
    }
  }
};
</script>

<style>
.app {
  font-size: 20px;
}
h1 {
  text-align: center;
}
</style>
