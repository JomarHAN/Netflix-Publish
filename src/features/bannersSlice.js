import { createSlice } from '@reduxjs/toolkit';

export const bannersSlice = createSlice({
  name: 'banners',
  initialState: {
    banners: null,
  },
  reducers: {
    setBanners: (state, action) => {
      state.banners = action.payload.slice(0, 4);
    },
  },
});

export const { setBanners } = bannersSlice.actions;

export const selectBanners = state => state.banners.banners;

export default bannersSlice.reducer;
