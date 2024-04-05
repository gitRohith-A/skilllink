import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
    id: number;
    type: string;
    active: boolean;
}

const initialState: ModalState = {
    id: 0,
    type: '',
    active: false
};

const modalSlice = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers: {
        setModal(state, action: PayloadAction<ModalState>) {
            state.id = action.payload.id;
            state.type = action.payload.type;
            state.active = action.payload.active
        }
    }
});

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
