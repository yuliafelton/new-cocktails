import React, {useEffect, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCocktails} from "../../store/thunks";
import {setChosenCocktail} from "../../store/appSlice";
import SearchForm from "../SearchForm/SearchForm";

function ByNameSearchForm() {

    const myStyle = {
        width: 300,
        margin: 'auto'
    };


    const cocktails = useSelector(state => state.app.cocktails);
    const cocktailsLoading = useSelector(state => state.app.cocktailsLoading);
    const dispatch = useDispatch();

    const handleChange = useCallback((value) => {
        dispatch(setChosenCocktail(value));
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchCocktails());
    }, [dispatch]);

    if (!cocktails || cocktailsLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className='search-label'>
               <b>Enter cocktail name</b>
            </div>
            <div style={myStyle}>
                <SearchForm onSelect={handleChange}
                            label={'Search cocktail'}
                            options={cocktails.map(({name}) => name)}/>
            </div>
        </div>
    );
}


export default ByNameSearchForm;