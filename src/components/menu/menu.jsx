import React, {useEffect} from 'react';
import './menu.css';
import { Link } from "react-router-dom";

function Menu() {

    return (
        <div className="menu-container">
            <span className="menu-text">find cocktail recipe</span>
            <div className="buttons">
                <Link className="menu-button" to="/byingredient">&#8811; by ingredient</Link>
                <Link className="menu-button" to="/byname">&#8811; by name</Link>
            </div>
        </div>
    );
}

export default Menu;
