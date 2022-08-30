import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'tweets',
  initialState: {
    user: '',
    feed: [],
    userTweets: [],
  },
  reducers: {
    changeUser(state, { payload }) {
      return { ...state, user: payload };
    },
    changeFeed(state, { payload }) {
      return { ...state, feed: payload };
    },
    changeTweets(state, { payload }) {
      return { ...state, tweets: payload };
    }
  }
});

export const { changeUser } = slice.actions;
export const { changeTweets } = slice.actions;
export const { changeFeed } = slice.actions;

export default slice.reducer;