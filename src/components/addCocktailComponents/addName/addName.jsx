import React from 'react';
import RequiredInputForm from "../requieredInputForm/requiredInputForm";


function AddName() {

    return (
        <div>
            <RequiredInputForm
                label={'Name'}
                defaultValue={'ex. Cubalibre'}/>
        </div>
    );
}

export default AddName;