import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { getUsers } from "../Services/ServiceData";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    task: [],
  },
  reducers: {
    removeTask(state, action) {
      state.task = state.task.filter(
        (task: any) => task.id !== action.payload.id
      );
    },
  },
});

export const { removeTask } = taskSlice.actions;
export default taskSlice.reducer;
