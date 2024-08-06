import { ref, onMounted } from 'vue';
import { fetchPosts } from '../apis/models.js';

export default function useModels() {
  const getTasks = ref([]);

  const setTasks = async () => {
    getTasks.value = await fetchPosts();
  };

  onMounted(() => {
    setTasks();
  });

  return {
    getTasks,
    setTasks
  };
}
