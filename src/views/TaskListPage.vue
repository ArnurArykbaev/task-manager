<template>
  <div class="tasks">
    <taskCreate />
    TASKS: {{ tasks }}
    <taskCard />
  </div>
</template>

<script>
import taskCreate from "@/components/taskCreate.vue";
import taskCard from "@/components/taskCard.vue";

export default {
  name: "TaskListPage",
  components: { taskCreate, taskCard },
  data() {
    return {};
  },
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
  },
};
</script>

<style scoped></style>
