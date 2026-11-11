import { createSlice } from "@reduxjs/toolkit";

const appNavSlice = createSlice({
  name: "App",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const appNavReducer = appNavSlice.reducer;
export const { toggleMenu, closeMenu } = appNavSlice.actions;
