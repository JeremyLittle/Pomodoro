import React from 'react';



const InfoForm = props => {
    return (

        <form>
            <label>
                Birthday:
    <input type="text" name="name" />
            </label>
            <button onSubmit={props.onSubmit}>Submit</button>
        </form>
    );
}


export default InfoForm;