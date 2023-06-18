<template>
  <div class="task-list">
    <taskCreate />
    <div class="tasks mt-5">
      <div v-for="(task, id) in tasksList" :key="id" class="task">
        <taskCard
          class="mt-3"
          :task="task"
          :id="id"
          @deleteCard="deleteCard"
          @editTask="editCurrentTask"
        />
      </div>
    </div>
  </div>
</template>

<script>
import taskCreate from "@/components/taskCreate.vue";
import taskCard from "@/components/taskCard.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "TaskListPage",
  components: { taskCreate, taskCard },
  data() {
    return {
      modifiedChartData: [],
    };
  },
  computed: {
    ...mapGetters(["tasks"]),
    
    tasksList() {
      return this.tasks; // Use the mapped 'tasks' getter here
    },
  },
  methods: {
    ...mapActions(["deleteTask", "editTask"]),

    deleteCard(id) {
      this.deleteTask(id);
    },

    editCurrentTask(editedTask) {
      this.editTask(editedTask);
    },
  },
};
</script>

<style scoped></style>
