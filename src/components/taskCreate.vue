<template>
  <div class="task-create">
    <b-card
      border-variant="light"
      bg-variant="dark"
      text-variant="white"
      title="Card Title"
    >
      <b-form-input v-model="title" placeholder="Task"></b-form-input>

      <b-col class="mt-5">
        <h4>Card description</h4>
        <b-row>
          <b-form-textarea
            id="textarea-no-auto-shrink"
            placeholder="Description"
            rows="3"
            max-rows="8"
            no-auto-shrink
            v-model="description"
          ></b-form-textarea>
        </b-row>
      </b-col>
      <b-button @click="createTask" class="mt-5" href="#" variant="primary"
        >Create task</b-button
      >
    </b-card>
  </div>
</template>

<script>
export default {
  name: "TaskListPage",
  components: {},
  data() {
    return {
      id: 0,
      title: "",
      description: "",
    };
  },
  methods: {
    createTask() {
      if (!this.title.length || !this.description.length) {
        this.makeToast();
        return;
      }

      const tasks = this.$store.getters.tasks;

      const taskId = tasks?.length ? tasks.length + 1 : 1;

      this.$store.dispatch("setTask", {
        id: taskId,
        title: this.title,
        description: this.description,
      });

      (this.title = ""), (this.description = "");
    },

    makeToast() {
      this.$bvToast.toast("Please fill in all fields in new task", {
        title: `Error`,
        variant: "danger",
        autoHideDelay: 5000,
        solid: true,
      });
    },
  },
};
</script>

<style scoped>
.toast:not(.show) {
  display: block;
}
</style>
