import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "taskData",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    updateStatus: (state, action) => {
      const { id, status } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.status = status;
      }
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const { id, title, detail, priority } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.title = title;
        task.detail = detail;
        task.priority = priority;
      }
    },
  },
});

export const { addTask, updateStatus, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
