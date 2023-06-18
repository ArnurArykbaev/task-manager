<template>
  <div class="task-create">
    <b-card bg-variant="dark" text-variant="white">
      <template #header>
        {{ task?.id }}
        <h4 class="mb-0">{{ task?.title }}</h4>
      </template>
      {{ task?.description }}
      <b-card-text> </b-card-text>
      <b-row>
        <b-col>
          <taskEditor :task="task" :id="id" @editTask="editTask" />
        </b-col>

        <b-col>
          <b-button @click="deleteCard(task?.id)" variant="danger"
            >Delete</b-button
          >
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import taskEditor from "@/components/taskEditor.vue";

export default {
  name: "TaskListPage",
  components: { taskEditor },
  props: {
    task: {
      type: Object,
      default: () => ({
        id: 0,
        title: "",
        description: "",
      }),
    },
    id: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    createTask() {
      this.$store.dispatch("setTask", {
        title: this.title,
        description: this.description,
      });
    },

    deleteCard(id) {
      this.$emit("deleteCard", id);
    },

    editTask(editedTask) {
      this.$emit("editTask", editedTask);
    },
  },
};
</script>

<style scoped></style>
