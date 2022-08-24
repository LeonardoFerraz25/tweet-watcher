import { createSlice } from '@reduxjs/toolkit';
import Firebase from '../firebase/base';

export const slice = createSlice({
  name: 'firebase',
  initialState: {
    firebase: Firebase,
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