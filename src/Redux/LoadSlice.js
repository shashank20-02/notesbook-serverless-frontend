import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
};

const LoadSlice = createSlice({
    name: "loader",
    initialState,
    reducers: {
        changeLoader: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

export const { changeLoader } = LoadSlice.actions;

export default LoadSlice.reducer;
