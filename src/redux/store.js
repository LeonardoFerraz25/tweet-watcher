import { configureStore } from '@reduxjs/toolkit';
import firebaseReducer from './UserSlice';

export default configureStore({
  reducer:{
    store: firebaseReducer,
  }
});
