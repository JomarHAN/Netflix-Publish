import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import bannersReducer from '../features/bannersSlice'
import movieReducer from '../features/movieSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    banners: bannersReducer,
    movie: movieReducer
  },
});
