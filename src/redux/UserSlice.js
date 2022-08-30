import { createSlice } from '@reduxjs/toolkit';
import Firebase from '../firebase/base';

export const slice = createSlice({
  name: 'firebase',
  initialState: {
    firebase: Firebase,
    user: '',
    feed: [],
    userTweets: [],
    searchUsers: [],
    isSearching: false,
  },
  reducers: {
    changeFirebase(state, { payload }) {
      return { ...state, firebase: payload };
    },
    changeUser(state, { payload }) {
      return { ...state, user: payload };
    },
    changeFeed(state, { payload }) {
      return { ...state, feed: payload };
    },
    changeTweets(state, { payload }) {
      return { ...state, tweets: payload };
    },
    changeSearchUser(state, { payload }) {
      return { ...state, searchUser: payload };
    },
    changeIsSearching(state, { payload }) {
      return { ...state, isSearching: payload };
    },
    changeUserTweets(state, { payload }) {
      return { ...state, userTweets: payload };
    },
  }
});

export const { changeFirebase } = slice.actions;
export const { changeUser } = slice.actions;
export const { changeTweets } = slice.actions;
export const { changeFeed } = slice.actions;
export const { changeSearchUser } = slice.actions;
export const { changeIsSearching } = slice.actions;

export const selectUser = state => state.store.User;
export const selectProducts = state => state.store.firebase;

export default slice.reducer;