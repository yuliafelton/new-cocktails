import React from "react";
import "../foundCocktail/foundCocktail.css"


function FoundCocktail({cocktail}) {

    return (
        <div className="found-cocktail-container">
            <ul className="cocktail-info-list">
                <li><h3 className="cocktail-name">{cocktail.name}</h3></li>
                <li><b>Type of glass:</b> {(cocktail.glass).charAt(0).toUpperCase() + (cocktail.glass).slice(1)}</li>
                <li><b>Category:</b> { !cocktail.category ? 'Other' : cocktail.category } </li>
                <li><b>Ingredients:</b>
                    <ol>
                        {cocktail.ingredients.map(ingredient => (

                            <li>
                                {ingredient.ingredient && <span><b>{ingredient.ingredient}:</b> </span>}
                                {ingredient.amount && <span>{ingredient.amount}{ingredient.unit}</span>}
                                {ingredient.label && <span> of {ingredient.label} </span>}
                                {ingredient.special && <span><b>Special:</b> {ingredient.special} </span>}
                            </li>

                        ))}
                    </ol>
                </li>
                <li><b>Garnish:</b> { !cocktail.garnish ? 'None' : cocktail.garnish }</li>
                <li><b>Preparation:</b> {cocktail.preparation}</li>
            </ul>
        </div>
    )
}

export default FoundCocktail;