import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    addCacheRes: (state, action) => {
      console.log(action.payload);
      return { ...state, ...action.payload };
    },
  },
});

export const { addCacheRes } = searchSlice.actions;
export default searchSlice.reducer;
