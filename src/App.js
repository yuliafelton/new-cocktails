import React, {useEffect} from 'react';
import './App.css';
import Menu from "./components/menu/menu";
import {useDispatch, useSelector} from "react-redux";
import {fetchCocktails} from "./store/thunks";
import HomePage from "./pages/homePage/homePage";
import byNamePage from './pages/byNamePage/byNamePage'
import byIngredientPage from './pages/byIngredientPage/byIngredientPage';
import AddCocktailPage from "./pages/addCocktailPage/addCocktailPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderImage from "./components/headerImage/headerImage";

function App() {
  const cocktails = useSelector(state => state.app.cocktails);
  const cocktailsLoading = useSelector(state => state.app.cocktailsLoading);
  const appError = useSelector(state => state.app.appError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktails());
  }, [dispatch]);

  {/*if(!cocktails || cocktailsLoading) {
    return <div>Loading...</div>;
  }

  if(appError) {
    return <div>Error</div>;
  }*/}


  return (
    <div className="App">
      <Router>
        <HeaderImage/>
        <Menu />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/byname" component={byNamePage} />
          <Route path="/byingredient" component={byIngredientPage} />
          <Route path="/addcocktail" component={AddCocktailPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
