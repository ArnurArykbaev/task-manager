import mutations from "@/store/mutations";

const { SET_TASK, DELETE_TASK, EDIT_TASK } = mutations;

const tasksStore = {
  state: {
    tasks: [],
  },
  getters: {
    tasks: ({ tasks }) => tasks,
  },
  mutations: {
    [SET_TASK](state, task) {
      state.tasks.push(task);
    },
    [DELETE_TASK](state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
    [EDIT_TASK](state, editedTask) {
      const index = state.tasks.findIndex((task) => task.id === editedTask.id);
      if (index !== -1) {
        state.tasks = [
          ...state.tasks.slice(0, index),
          editedTask,
          ...state.tasks.slice(index + 1),
        ];
      }
    },
  },
  actions: {
    setTask({ commit }, task) {
      commit(SET_TASK, task);
    },
    deleteTask({ commit }, taskId) {
      commit(DELETE_TASK, taskId);
    },
    editTask({ commit }, editedTask) {
      commit(EDIT_TASK, editedTask);
    },
  },
};

export default tasksStore;
