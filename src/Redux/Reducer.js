// Step 03: createSlice
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "todos",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTodo: (state, action) => {
      const { id, taskName } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === id);
      if (existingTask) {
        existingTask.taskName = taskName;
      }
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      if (id) {
        state.tasks = state.tasks.filter((task) => task.id !== id);
      }
    },
  },
});

export const { deleteTodo, updateTodo, addTodo } = userSlice.actions;
export default userSlice.reducer;
