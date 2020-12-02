import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import bannersReducer from '../features/bannersSlice'
import movieReducer from '../features/movieSlice'
import pathReducer from '../features/pathSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    banners: bannersReducer,
    movie: movieReducer,
    path: pathReducer
  },
});
