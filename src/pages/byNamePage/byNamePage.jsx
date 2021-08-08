import React, {useEffect} from 'react';
import '../coctailSearchPage.css';
import ByNameSearchForm from "../../components/byNameSearchForm/byNameSearchForm";
import ByNameFoundCocktail from "../../components/byNameFoundCocktail/byNameFoundCocktail";

function ByNamePage() {

    return (
        <div>
            <div className="element-container">
                <ByNameSearchForm />
            </div>
            <div className="element-container">
                <ByNameFoundCocktail />
            </div>
        </div>
    );
}

export default ByNamePage;