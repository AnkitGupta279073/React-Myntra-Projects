import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
    name: "fetchStatus",
    initialState: {
        fetchDone: false,
        currentlyFetching: false
    },
    reducers: {
        markFetchDone: (state) => {
            state.fetchDone = true;
        },
        markeFetchingStart: (state)=>{
            state.currentlyFetching = true;
        },
        markFetchingEnd: (state)=>{
            state.currentlyFetching = false;
        }
    }
});

export const { markFetchDone, markeFetchingStart, markFetchingEnd } = fetchStatusSlice.actions;
export default fetchStatusSlice.reducer;