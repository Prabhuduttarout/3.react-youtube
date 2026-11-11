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
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const appNavReducer = appNavSlice.reducer;
export const { toggleMenu, openMenu, closeMenu } = appNavSlice.actions;
