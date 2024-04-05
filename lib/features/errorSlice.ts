import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface errorState {
    error: {
        active: boolean,
        message: string
    };
}

const initialState: errorState = {
    error: {
        active: false,
        message: ''
    }
};

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError(state, action: PayloadAction<{ active: boolean, message: string }>) {
            state.error.active = action.payload.active;
            state.error.message = action.payload.message;
        }
    }
});

export const { setError } = errorSlice.actions;
export default errorSlice.reducer;
