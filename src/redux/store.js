import { configureStore } from "@reduxjs/toolkit";
import entriesReducer from "./movieSlice";

export default configureStore({
  reducer: {
    entries: entriesReducer,
  },
});
