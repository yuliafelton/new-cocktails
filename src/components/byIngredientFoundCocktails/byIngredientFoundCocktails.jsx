import React, {useMemo} from "react";
import "../foundCocktail/foundCocktail.css";
import {useDispatch, useSelector} from "react-redux";
import FoundCocktail from "../foundCocktail/foundCocktail";

function ByIngredientFoundCocktails() {

    const cocktails = useSelector(state => state.app.cocktails);
    const cocktailsLoading = useSelector(state => state.app.cocktailsLoading);
    const selectedIngredients = useSelector(state => state.app.selectedIngredients);
    const dispatch = useDispatch();

    const foundCocktailsList = useMemo(() =>
        (cocktails || []).filter((cocktail) => {
            const cocktailIngredients = cocktail.ingredients?.map((ingredient) => ingredient.ingredient);
            return selectedIngredients.every(selectedIngredient => cocktailIngredients?.includes(selectedIngredient));
        }
    ),[cocktails, selectedIngredients]);

    console.log(foundCocktailsList);
    //TODO: FILTER WITH SELECTED INGREDIENT

    if (selectedIngredients.length === 0) {
        return null;
    }

    if (!foundCocktailsList) {
        return null;
    }

    if(!cocktails || cocktailsLoading) {
        return <div>Loading...</div>;
    }

    if (foundCocktailsList.length === 0) {
        return <div className="no-cocktail-text"><b>Sorry, no cocktails found! Try something else :)</b></div>
    }

    return (
        <div className="recipes-container">
            <h3 className="recipe-header">Cocktail recipes</h3>
            {foundCocktailsList.map(cocktail =>
                <FoundCocktail cocktail={cocktail} />
            )}
        </div>
    )
}

export default ByIngredientFoundCocktails;