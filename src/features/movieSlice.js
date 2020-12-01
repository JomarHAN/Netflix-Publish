import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movie: null,
  },
  reducers: {
    setMovie: (state, action) => {
      state.movie = action.payload;
    }
  },
});

export const { setMovie } = movieSlice.actions;

export const selectMovie = state => state.movie.movie;

export default movieSlice.reducer;
