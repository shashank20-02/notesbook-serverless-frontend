import { createSlice } from "@reduxjs/toolkit";
import instance from "./Axios";
const initialState = {
    isAuthenticated: false,
    isloading: false,
};

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeState: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        changeLoader: (state, action) => {
            state.isloading = action.payload;
        },
    },
});

export const { changeState, changeLoader } = UserSlice.actions;

export default UserSlice.reducer;

export const loginUser = async (email, password) => async (dispatch) => {
    try {
        dispatch(changeLoader(true));
        dispatch(changeState(false));
        const response = await instance.post(
            "/user/signup",
            { email, password },
            { withCredentials: true }
        );
        console.log(response);
        dispatch(changeState(response.data?.success));
        dispatch(changeLoader(false));
    } catch (e) {
        console.log(e);
        dispatch(changeState(false));
        dispatch(changeLoader(false));
    }
};
