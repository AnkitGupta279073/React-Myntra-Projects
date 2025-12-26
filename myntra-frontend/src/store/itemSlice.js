import { createSlice } from "@reduxjs/toolkit";
// import { items } from "../data/items";

const itemSlice = createSlice({
    name: "items",
    initialState: {
        initialItems: []
    },
    reducers: {
        addInitialItems:(state, action) =>{
            state.initialItems = action.payload;
        }
    }
});

export const { addInitialItems } = itemSlice.actions;
export default itemSlice.reducer;