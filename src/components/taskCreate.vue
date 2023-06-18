<template>
  <div class="task-create">
    <b-card
      border-variant="light"
      bg-variant="dark"
      text-variant="white"
      title="Card Title"
    >
      {{ title }}
      <b-form-input v-model="title" placeholder="Task"></b-form-input>

      {{ description }}
      <b-row class="mt-5">
        <h4>Card description</h4>
        <b-col>
          <b-form-textarea
            id="textarea-no-auto-shrink"
            placeholder="Description"
            rows="3"
            max-rows="8"
            no-auto-shrink
            v-model="description"
          ></b-form-textarea>
        </b-col>
      </b-row>
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
  },
};
</script>

<style scoped></style>
