import { createSlice } from '@reduxjs/toolkit';

export const pathSlice = createSlice({
  name: 'path',
  initialState: {
    path: true,
  },
  reducers: {
    setPath: (state, action) => {
      state.path = action.payload;
    },
  },
});

export const { setPath } = pathSlice.actions;

export const selectPath = state => state.path.path;

export default pathSlice.reducer;
