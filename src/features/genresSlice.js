import { createSlice } from '@reduxjs/toolkit';

export const genresSlice = createSlice({
  name: 'genres',
  initialState: {
    genres: [],
  },
  reducers: {
    setGenres: (state, action) => {

      const newArray = [...state.genres]
      if (newArray.indexOf(action.payload) === -1) {
        newArray.splice(0, 0, action.payload)
      } else {
        alert('Already Added It')
      }
      return {
        ...state,
        genres: newArray
      }
    },

    removeGenre: (state, action) => {
      const newArray = [...state.genres]
      const index = newArray.indexOf(action.payload)
      newArray.splice(index, 1)
      return {
        ...state,
        genres: newArray
      }
    }
  },
});

export const { setGenres, removeGenre } = genresSlice.actions;

export const selectGenres = state => state.genres.genres;

export default genresSlice.reducer;


