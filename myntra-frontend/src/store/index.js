import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice.js";
import fetchStatusReducer from "./fetchStatusSlice.js";
import bagReducer from "./bagSlice.js";

const store = configureStore({
    reducer: {
        items: itemReducer,
        fetchStatus: fetchStatusReducer,
        bag: bagReducer
    }
});

export default store;