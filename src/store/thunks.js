import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchCocktails = createAsyncThunk(
    'app/fetchCocktails',
    async () => {
        const response = await axios.get('http://localhost:5000/cocktails');
        return response.data;
    }
);

export const addNewCocktail = createAsyncThunk(
    'app/addNewCocktail',
    async (cocktail ) => {
        const response = await axios.post('http://localhost:5000/cocktails', cocktail);
        return response.data;
    }
);