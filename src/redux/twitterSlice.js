import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'tweets',
  initialState: {
    user: '',
    tweets: [],
  },
  reducers: {
    changeUser(state, { payload }) {
      return { ...state, user: payload };
    },
    changeTweets(state, { payload }) {
      return { ...state, tweets: payload };
    }
  }
});

export const { changeUser, changeTweets } = slice.actions;

export default slice.reducer;