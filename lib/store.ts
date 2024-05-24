import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loadingSlice from './features/loadingSlice';
import modalSlice from './features/modalSlice';
import errorSlice from './features/errorSlice';
import formSlice from './features/formSlice';

const rootReducer = combineReducers({
    loading: loadingSlice,
    modal: modalSlice,
    error: errorSlice,
    form: formSlice
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
