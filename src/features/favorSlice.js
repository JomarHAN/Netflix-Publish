import { createSlice } from '@reduxjs/toolkit';

export const favorSlice = createSlice({
  name: 'favor',
  initialState: {
    favors: [],
    favorId: null
  },
  reducers: {
    addFavor: (state, action) => {
      const newList = [...state.favors]
      if (
        newList.indexOf(action.payload) === -1
      ) {
        newList.splice(0, 0, action.payload)
      } else {
        alert("It has already added")
      }
      return {
        ...state,
        favors: newList
      }
    },
    delFavor: (state, action) => {
      const otherArr = [...state.favors]
      const index = otherArr.indexOf(action.payload)
      otherArr.splice(index, 1)
      return {
        ...state,
        favors: otherArr
      }
    },
    uploadFavor: (state, action) => {
      state.favors = action.payload
    },
    setFavorId: (state, action) => {
      state.favorId = action.payload
    }
  },
});

export const { addFavor, setFavorId, delFavor, uploadFavor } = favorSlice.actions;

export const selectFavor = state => state.favor.favors;
export const selectFavorId = state => state.favor.favorId;

export default favorSlice.reducer;


