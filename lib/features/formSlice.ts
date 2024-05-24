import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  form: {
    userId: '',
    open: false,
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setForm: (state, action) => {
      state.form.userId = action.payload.userId;
      state.form.open = action.payload.open;
    },
  },
});

export const { setForm } = formSlice.actions;
export default formSlice.reducer;
