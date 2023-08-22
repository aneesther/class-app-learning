import {createSlice } from "@reduxjs/toolkit"

// first task is to create your slice function and add the action to it

const initialState = {
    count: 0
};
const countSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        incrementCount: (state, action) => {
            state.count = state.count +1;
        },
        decrementCount: (state, action) => {
            state.count = state.count -1;
        },
        addCount: (state, action) => {
            state.count += action.payload;
        },
        resetCount: (state, action) => {
            state.count =0;
        }
    }
});

// export const countState =useSelector((state) =>state.count);

export const {
    incrementCount,
    decrementCount,
    addCount,
    resetCount
} = countSlice.actions;

export const countReducer = countSlice.reducer;