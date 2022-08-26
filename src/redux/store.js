import { configureStore } from '@reduxjs/toolkit';
import firebaseReducer from './firebaseSlice';
import twitterReducer from './twitterSlice';

export default configureStore({
  reducer:{
    store: firebaseReducer,
    twitter: twitterReducer
  }
});
