import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loadingSlice from './features/loadingSlice';
import modalSlice from './features/modalSlice';
import errorSlice from './features/errorSlice';

const rootReducer = combineReducers({
    loading: loadingSlice,
    modal: modalSlice,
    error: errorSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
