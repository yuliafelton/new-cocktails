import React from 'react';
import RequiredInputForm from "../requieredInputForm/requiredInputForm";


function AddTypeOfGlass() {

    return (
        <div>
            <RequiredInputForm
                label={'Type of glass'}
                defaultValue={'ex. Cubalibre'}/>
        </div>
    );
}

export default AddTypeOfGlass;