import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchCocktails = createAsyncThunk(
    'app/fetchCocktails',
    async () => {
        const response = await axios.get('http://localhost:5000/cocktails');
        return response.data;
    }
);