import { createSlice } from '@reduxjs/toolkit';

export const favorSlice = createSlice({
  name: 'favor',
  initialState: {
    favor: [],
    favorId: null
  },
  reducers: {
    addFavor: (state, action) => {
      const newList = [...state.favor]
      if (
        newList.indexOf(action.payload) === -1
      ) {
        newList.splice(0, 0, action.payload)
      } else {
        alert("It has already added")
      }
      return {
        ...state,
        favor: newList
      }
    },
    setFavorId: (state, action) => {
      state.favorId = action.payload
    }
  },
});

export const { addFavor, setFavorId } = favorSlice.actions;

export const selectFavor = state => state.favor.favor;
export const selectFavorId = state => state.favor.favorId;

export default favorSlice.reducer;


