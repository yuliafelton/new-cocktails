import React, {useEffect} from 'react';
import ByIngredientSearchForm from "../../components/byIngredientSearchForm/ByIngredientSearchForm";
import SelectedIngredientsIcons from "../../components/selectedIngredientsIcons/selectedIngredientsIcons";
import ByIngredientFoundCocktails from "../../components/byIngredientFoundCocktails/byIngredientFoundCocktails";
import '../coctailSearchPage.css';

function ByIngredientPage() {

    return (
        <div>
            <div className="element-container"><ByIngredientSearchForm/></div>
            <div className="element-container"><SelectedIngredientsIcons/></div>
            <div className="element-container"><ByIngredientFoundCocktails/></div>
        </div>
    );
}

export default ByIngredientPage;