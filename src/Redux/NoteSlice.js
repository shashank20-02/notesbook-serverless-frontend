import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: [],
    note: {
        title: "",
        description: "",
        createdAt: "",
    },
};

const NoteSlice = createSlice({
    name: "note",
    initialState,
    reducers: {
        getAllNotes: () => {},
        getNote: () => {},
        createNote: () => {},
        deleteNote: () => {},
    },
});

export const { getAllNotes, getNote, deleteNote, createNote } =
    NoteSlice.actions;

export default NoteSlice.reducer;
