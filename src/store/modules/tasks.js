import mutations from "@/store/mutations";

const { SET_TASK } = mutations;

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
  },
  actions: {
    setTask({ commit }, task) {
      commit(SET_TASK, task);
    },
  },
};

export default tasksStore;
