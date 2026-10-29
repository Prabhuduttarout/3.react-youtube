import { configureStore } from "@reduxjs/toolkit";
import { appNavReducer } from "./slice/appNavSlice";

const store = configureStore({
    reducer:{
        appNav:appNavReducer
    }
})

export default store;