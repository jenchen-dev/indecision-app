import React from 'react';
import Option from './Option';

const OptionList = (props) => (
    <div>
        <button 
            className="button button--link" 
            onClick={props.handleDeleteAll}
        >
            Remove All
        </button>
        {props.optionList.length === 0 && <p>Please add an option to get started!</p>}
        {
            props.optionList.map((option) => (
                <Option 
                    key={option} 
                    optionText={option} 
                    handleDeleteEach={props.handleDeleteEach}
                />
            ))
        }
    </div>
);

export default OptionList;
