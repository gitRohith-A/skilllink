import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
    id: number;
    type: string;
}

const initialState: ModalState = {
    id: 0,
    type: ''
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModal(state, action: PayloadAction<ModalState>) {
            state.id = action.payload.id;
            state.type = action.payload.type;
        }
    }
});

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
