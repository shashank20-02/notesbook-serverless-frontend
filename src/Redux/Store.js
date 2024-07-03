import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import NoteReducer from "./NoteSlice";
import LoadReducer from "./LoadSlice";
const store = configureStore({
    reducer: {
        user: UserReducer,
        note: NoteReducer,
        load: LoadReducer,
    },
});

export default store;
