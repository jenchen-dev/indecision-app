import React from 'react';

const Option = (props) => {
    return (
        <div>
            {props.optionText} 
            <button onClick={(e) => { props.handleDeleteEach(props.optionText) }}> 
                remove
            </button>
        </div>
    );
};

export default Option;
