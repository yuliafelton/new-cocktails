import { createSlice } from '@reduxjs/toolkit';
import {initialState} from "./initialState";
import {fetchCocktails} from "./thunks";

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // setCocktails: (state, action) => {
    //   state.cocktails = action.payload;
    // },
  },
  extraReducers: {
    [fetchCocktails.pending]: (state) => {
      state.cocktailsLoading = true;
    },
    [fetchCocktails.fulfilled]: (state, action) => {
      state.cocktails = action.payload;
      state.cocktailsLoading = false;
    },
    [fetchCocktails.rejected]: (state) => {
      state.cocktailsLoading = false;
      state.appError = true;
    },
  }
});

export const { setCocktails } = appSlice.actions;

export default appSlice.reducer;
