import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchCocktails} from "./store/thunks";

function App() {
  const cocktails = useSelector(state => state.app.cocktails);
  const cocktailsLoading = useSelector(state => state.app.cocktailsLoading);
  const appError = useSelector(state => state.app.appError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktails());
  }, [dispatch]);

  if(!cocktails || cocktailsLoading) {
    return <div>Loading...</div>;
  }

  if(appError) {
    return <div>Error</div>;
  }

  return (
    <div className="App">
      {cocktails.map(cocktail => <div>{cocktail.name}</div>)}
    </div>
  );
}

export default App;
