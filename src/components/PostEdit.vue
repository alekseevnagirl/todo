<template>
    <div>
        <div>
            <el-input v-model="task.title"
                      placeholder="New Task"/>
        </div>

        <div class="buttonEditApp">
            <el-button plain
                       @click="editTask">
                Change
            </el-button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      task: {
        title: ''
      }
    };
  },
  methods: {
    editTask() {
      this.$emit('edit', this.task);
    }
  }
};
</script>

<style>
.buttonEditApp {
  justify-content: center;
  display: flex;
  margin-top: 10px;
}
</style>
