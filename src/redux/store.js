import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./slices/profileSlice";
import dialogsSlice from "./slices/dialogsSlice";

export const store = configureStore({
    reducer: {
        profileSlice,
        dialogsSlice
    },
});
