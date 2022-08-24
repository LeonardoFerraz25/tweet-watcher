import { configureStore } from '@reduxjs/toolkit';
import firebaseReducer from './firebaseSlice';

export default configureStore({
  reducer:{
    store: firebaseReducer,
  }
});
