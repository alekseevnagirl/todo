<template>
    <div class="listApp">
        <post-item
            :task="task"
            v-for="task of tasks"
            :key="task.id"
            @remove="$emit('remove', task)"
            @edit="editTask"/>
    </div>
</template>

<script>
import PostItem from '@/components/PostItem';

export default {
  components: { PostItem },
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  methods: {
    editTask(task, id) {
      this.$emit('edit', task, id);
    }
  }
};
</script>

<style>
.listApp {
  margin-top: 50px;
}
</style>
