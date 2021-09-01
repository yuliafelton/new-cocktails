import React, {useEffect, useMemo, useState} from 'react';
import '../coctailSearchPage.css';
import SearchForm from "../../components/SearchForm/SearchForm";
import "../addCocktailPage/addCocktailPage.css";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {addNewCocktail, fetchCocktails} from "../../store/thunks";
import RequiredInputForm from "../../components/addCocktailComponents/requieredInputForm/requiredInputForm";
import RegularInputForm from "../../components/addCocktailComponents/regularInputForm/regularInputForm";
import {makeStyles} from "@material-ui/core/styles";

const myStyle = {
    width: '25ch',
    margin: '8px',
};

const categoryStyle = {
    inputRoot: {
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#3f51b5"
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#b10741"
        },
    }
};

function AddCocktailPage() {

    const cocktails = useSelector(state => state.app.cocktails);
    const cocktailsLoading = useSelector(state => state.app.cocktailsLoading);
    const selectedIngredients = useSelector(state => state.app.selectedIngredients);
    const ingredientsList = useSelector(state => state.app.ingredientsList);

    const selectedIngredientsList = useMemo(() =>
        (ingredientsList || []).filter((ingredient) => !selectedIngredients.includes(ingredient)
        ),[ingredientsList, selectedIngredients]);

    const [newCocktail, setNewCocktail] = useState();

    const dispatch = useDispatch();

    const useStyles = makeStyles((theme) => (categoryStyle));

    const classes = useStyles();

    const handleClick = () => {
        dispatch(addNewCocktail(newCocktail));
    };

    if (!cocktails || cocktailsLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>THIS PAGE IS UNDER DEVELOPMENT</h1>
            <h3 className="add-recipe-header">Add your own recipe</h3>
            <div>
                <RequiredInputForm
                    onChange={name => setNewCocktail({
                        ...(newCocktail || {}),
                        name
                    })}
                    label={'Name'}
                    defaultValue={'ex. Cubalibre'}/>
            </div>
            <div>
                <RequiredInputForm
                    onChange={glass => setNewCocktail({
                        ...(newCocktail || {}),
                        glass
                    })}
                    label={'Type of glass'}
                    defaultValue={'ex. Martini'}/>
            </div>
            <div>
                <label style={{"color": "white"}}>Category:</label>
                <div style={myStyle}>
                    <SearchForm
                        classes={classes}
                        onSelect={category => setNewCocktail({
                            ...(newCocktail || {}),
                            category
                        })}
                        options={Array.from(new Set(cocktails.map((cocktail) => cocktail.category)))}/>
                </div>
            </div>
            <div>
                <SearchForm
                    classes={classes}
                    onSelect={ingredients => setNewCocktail({
                        ...(newCocktail || {}),
                        ingredients
                    })}
                    options={selectedIngredientsList}
                    />
            </div>
            <div>
                <RegularInputForm
                    onChange={garnish => setNewCocktail({
                        ...(newCocktail || {}),
                        garnish,
                    })}
                    label={'Garnish'}/>
            </div>
            <div>
                <RequiredInputForm
                    onChange={preparation => setNewCocktail({
                        ...(newCocktail || {}),
                        preparation
                    })}
                    label={'Preparation'}/>
            </div>
            <Button variant="contained"
                    onClick={handleClick}
            >Add
            </Button>
        </div>
    );
}

export default AddCocktailPage;