<template>
  <div>
    <b-button v-b-modal="modalId(id)" variant="outline-primary">Edit</b-button>
    <b-modal
      :ref="'modal' + id"
      :id="'modal' + id"
      title="BootstrapVue"
      bg-variant="dark"
      :header-bg-variant="'dark'"
      :header-text-variant="'light'"
      :body-bg-variant="'dark'"
      :body-text-variant="'light'"
      :footer-bg-variant="'dark'"
      :footer-text-variant="'light'"
    >
      <div class="task-editor">
        <h4>Card title</h4>
        <b-form-input v-model="title" :placeholder="task?.title"></b-form-input>
        <b-col class="mt-5">
          <h4>Card description</h4>
          <b-row>
            <b-form-textarea
              id="textarea-no-auto-shrink"
              :placeholder="task?.description"
              rows="3"
              max-rows="8"
              no-auto-shrink
              v-model="description"
            ></b-form-textarea>
          </b-row>
        </b-col>
      </div>

      <template #modal-footer>
        <div class="w-100">
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="editTask"
          >
            Edit task
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import makeToast from "@/services/showToast";

export default {
  name: "TaskListPage",
  components: {},
  props: {
    task: {
      type: Object,
      required: true,
      default: () => ({
        id: 0,
        title: "Title",
        description: "Description",
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
  mounted() {
    this.title = this.task.title;
    this.description = this.task.description;
  },
  methods: {
    modalId(id) {
      return "modal" + id;
    },
    editTask() {
      if (!this.title.trim().length || !this.description.trim().length) {
        const message = "Please fill in all fields in the task";
        makeToast(message);
        return;
      }
      
      const editedTask = {
        id: this.task.id,
        title: this.title,
        description: this.description,
      };
      this.$emit("editTask", editedTask);
      this.$refs[`modal${this.id}`].hide();
    },
  },
};
</script>

<style scoped></style>
