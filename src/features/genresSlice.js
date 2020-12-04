import { createSlice } from '@reduxjs/toolkit';

export const genresSlice = createSlice({
  name: 'genres',
  initialState: {
    genres: [],
  },
  reducers: {
    setGenres: (state, action) => {
      const newArray = [...state.genres]
      if (newArray.indexOf(action.payload.id) === -1) {
        newArray.splice(0, 0, action.payload)
      } else {
        alert('Already Added')
      }
      return {
        ...state,
        genres: newArray
      }
    }
  },
});

export const { setGenres } = genresSlice.actions;

export const selectGenres = state => state.genres.genres;

export default genresSlice.reducer;


