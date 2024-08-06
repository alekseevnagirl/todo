<template>
    <div>
        <el-dialog v-model="dialogVisible"
                   title="Edit">
            <post-edit
                :id="id"
                @edit="editTask"/>
        </el-dialog>

        <div class="itemApp">
            <div class="postApp"
                 @click.stop="dialogVisible = true"
                 @keydown.stop="dialogVisible = true">
                <div class="nameApp">
                    <el-checkbox size="large"
                                 @click.stop/>
                    <div class="taskTitle">
                        {{task.title}}
                    </div>
                </div>

                <div class="buttonsApp"
                     @click.stop>
                    <el-button plain
                               id="deleteApp"
                               @click="$emit('remove', task)"
                    >Delete
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PostEdit from '@/components/PostEdit';

export default {
  components: { PostEdit },
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    editTask(task) {
      this.$emit('edit', task, this.task.id);
      this.dialogVisible = false;
    }
  }
};
</script>

<style>
.itemApp {
  display: flex;
  justify-content: center;
  margin: 10px auto;
  height: 70px;
}
.postApp {
  padding: 20px;
  border: 1px solid darkmagenta;
  width: 760px;
  background: #E6E6FA;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nameApp {
  display: flex;
  justify-content: center;
  margin: 10px auto;
}
#deleteApp {
  font-size: 15px;
  background: white;
  margin-top: 0;
}
.taskTitle {
  padding-top: 5px;
  padding-left: 10px;
}
</style>
