import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import "../foundCocktail/foundCocktail.css"
import {setChosenCocktail} from "../../store/appSlice";
import FoundCocktail from "../foundCocktail/foundCocktail";

function ByNameFoundCocktail() {

    const chosenCocktail = useSelector(state => state.app.chosenCocktail);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => dispatch(setChosenCocktail(null));
    }, [dispatch]);

    if(!chosenCocktail) {
        return null;
    }

    const ingredientsInfo = chosenCocktail.ingredients;
    console.log(ingredientsInfo);

    return (
        <div>
            <h3 className="recipe-header">Cocktail recipe:</h3>
            <FoundCocktail cocktail={chosenCocktail} />
        </div>
    )
}

export default ByNameFoundCocktail;