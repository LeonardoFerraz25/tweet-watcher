import { createSlice } from '@reduxjs/toolkit';
import Firebase from '../firebase/base';

export const slice = createSlice({
  name: 'firebase',
  initialState: {
    firebase: Firebase,
    user: '',
  },
  reducers: {
    changeFirebase(state, { payload }) {
      return { ...state, firebase: payload };
    },
    changeUser(state, { payload }) {
      return { ...state, user: payload };
    },
  }
});

export const { changeFirebase } = slice.actions;
export const { changeUser } = slice.actions;

export const selectUser = state => state.store.User;
export const selectProducts = state => state.store.firebase;

export default slice.reducer;