import React, {useEffect} from 'react';
import './headerImage.css';
import { Link } from "react-router-dom";

function HeaderImage() {

    return (
            <div className="cocktails-image-container">
                <div className="cocktails-image">
                    <Link to="/">
                        <h1 className="cocktails-logo">cocktails</h1>
                    </Link>
                    <Link className="add-cocktail-button" to="/addcocktail">+ add cocktail</Link>
                </div>
            </div>
    );
}

export default HeaderImage;