import { createSlice } from "@reduxjs/toolkit";

const appNavSlice = createSlice({
    name:"App",
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen = ! state.isMenuOpen
        }
    }
})

export const appNavReducer = appNavSlice.reducer;
export const {toggleMenu} = appNavSlice.actions