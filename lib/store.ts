import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./features/loadingSlice";
import modalSlice from "./features/modalSlice";

export const store = configureStore({
    reducer: {
        loading: loadingSlice,
        model: modalSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;