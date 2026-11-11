import { configureStore } from "@reduxjs/toolkit";
import { appNavReducer } from "./slice/appNavSlice";
import searchReducer from "./slice/searchSlice";

const store = configureStore({
  reducer: {
    appNav: appNavReducer,
    serach: searchReducer,
  },
});

export default store;
