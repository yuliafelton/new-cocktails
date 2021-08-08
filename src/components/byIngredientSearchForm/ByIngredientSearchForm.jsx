import React, {useEffect, useCallback, useMemo} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {fetchCocktails} from "../../store/thunks";
import SearchForm from "../SearchForm/SearchForm";
import {setChosenCocktail, setSelectedIngredients, deleteSelectedIngredients} from "../../store/appSlice";

import "./ByIngredientSearchForm.css";


function ByIngredientSearchForm() {

    const myStyle = {
        width: 300,
        margin: "auto",
    };

    const cocktails = useSelector(state => state.app.cocktails);
    const cocktailsLoading = useSelector(state => state.app.cocktailsLoading);
    const ingredientsList = useSelector(state => state.app.ingredientsList);
    const selectedIngredients = useSelector(state => state.app.selectedIngredients);
    const dispatch = useDispatch();

    const selectedIngredientsList = useMemo(() =>
        (ingredientsList || []).filter((ingredient) => !selectedIngredients.includes(ingredient)
        ),[ingredientsList, selectedIngredients]);

    const handleChange = useCallback((value) => {
        if (value) {
            dispatch(setSelectedIngredients(value));
        }
    }, [dispatch]);

    //TODO: SELECTED ITEM DISAPPEARS FROM INGREDIENTS LIST BUT PUSHES TO SELECTED INGREDIENTS

    useEffect(() => {
        dispatch(fetchCocktails());

       return () => dispatch(deleteSelectedIngredients());
    }, [dispatch]);

    if(!cocktails || cocktailsLoading) {
        return <div>Loading...</div>;
    }

    if(!ingredientsList) {
        return null;
    }

    return (
        <div>
            <div className='search-label'>
                <b>Choose one or more ingredients</b>
            </div>
            <div style={myStyle}>
                <SearchForm onSelect={handleChange}
                            label={'Search ingredients'}
                            options={selectedIngredientsList}/>
            </div>
        </div>
    );
}

export default ByIngredientSearchForm;
