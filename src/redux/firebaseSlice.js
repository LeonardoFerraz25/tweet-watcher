import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'firebase',
  initialState: {
    firebase: [],
  },
  reducers: {
    changeFirebase(state, { payload }) {
      return { ...state, firebase: payload };
    },
  }
});

export const { changeFirebase } = slice.actions;

export const selectProducts = state => state.store.firebase;

export default slice.reducer;