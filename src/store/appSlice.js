import { createSlice } from '@reduxjs/toolkit';
import {initialState} from "./initialState";
import {addNewCocktail, fetchCocktails} from "./thunks";

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setChosenCocktail: (state, action) => {
      state.chosenCocktail = state.cocktails.find((cocktail) => cocktail.name === action.payload);
    },
    setSelectedIngredients: (state, action) => {
      state.selectedIngredients = state.selectedIngredients.concat(action.payload);
    },
    deleteIngredient: (state, action) => {
      state.selectedIngredients = state.selectedIngredients.filter(
          (ingredient) => ingredient !== action.payload
      );
    },
    deleteSelectedIngredients: (state, action) => {
      state.selectedIngredients = [];
    }
  },
  extraReducers: {
    [fetchCocktails.pending]: (state) => {
      state.cocktailsLoading = true;
    },
    [fetchCocktails.fulfilled]: (state, action) => {
      state.cocktails = action.payload;
      state.cocktailsLoading = false;
      let arr = new Set((action.payload.map((cocktail) =>
          cocktail?.ingredients?.map((ingredient) => ingredient.ingredient)
      )).flat());
      state.ingredientsList = (Array.from(arr)).filter(function (el) {
        return el != null;
      });
//TODO: add return

    },
    [fetchCocktails.rejected]: (state) => {
      state.cocktailsLoading = false;
      state.appError = true;
    },
    [addNewCocktail.fullfilled]: (state, action) => {
      return {
        ...state,
        cocktails: state.cocktails.append(action.payload)
      };
    }
  }
});

export const { setCocktails, setChosenCocktail, setSelectedIngredients, deleteIngredient, deleteSelectedIngredients } = appSlice.actions;

export default appSlice.reducer;
