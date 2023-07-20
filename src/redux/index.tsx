import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

export default configureStore({
  reducer: {
    todos: taskReducer,
  },
});
