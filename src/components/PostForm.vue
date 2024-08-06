<template>
    <div class="formApp">
        <form @submit.prevent="createTask">
            <el-input
                v-model="task.title"
                class="inputApp"
                :class="v$.task.title.$error ? 'is-invalid' : ''"
                placeholder="Task"
                id="elInputAdd"/>

            <el-button plain
                       class="buttonApp"
                       @click="createTask">
                Add
            </el-button>

            <div>
                <el-text v-if="v$.$error"
                         type="danger">
                    {{ v$.task.title.$errors[0].$message }}
                </el-text>
            </div>
        </form>
    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { required, helpers, sameAs } from '@vuelidate/validators';
import { isUniqueTask } from '@/validators/uniqueTasks';

export default {
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
     v$: useVuelidate(),
      task: {
        title: ''
      }
    };
  },
  validations() {
    return {
      task: {
        title: {
          required: helpers.withMessage('Text of task is required!', required),
          sameAs: helpers.withMessage(
            'This task has already been created!',
            sameAs(isUniqueTask(this.task.title, this.tasks))
          )
        }
      }
    };
  },
  methods: {
    createTask() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.task.id = Date.now();
        this.$emit('create', this.task);
        this.task = {
          title: ''
        };
      }
    }
  }
};
</script>

<style>
.formApp {
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
.buttonApp {
  padding: 10px 15px;
  font-size: 20px;
  margin-left: 20px;
  height: 40px;
}
.inputApp {
  width: 600px;
  height: 40px;
  font-size: 20px;
}
.is-invalid {
  border: none;
  outline: 1px solid red;
}

</style>
