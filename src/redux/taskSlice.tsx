import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTask(state: any, action: any) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    toggleComplete(state: any, action: any) {
      const toggledTask = state.todos.find(
        (todo: any) => todo.id === action.payload.id
      );
      toggledTask.completed = !toggledTask.completed;
    },
    removeTask(state: any, action: any) {
      state.todos = state.todos.filter(
        (todo: any) => todo.id !== action.payload.id
      );
    },
  },
});

export const { addTask, toggleComplete, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
