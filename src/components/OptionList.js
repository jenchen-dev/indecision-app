import React from 'react';
import Option from './Option';

const OptionList = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button 
                className="button button--link" 
                onClick={props.handleDeleteAll}
            >
                Remove All
            </button>
        </div>
        {props.optionList.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
        {
            props.optionList.map((option, index) => (
                <Option 
                    key={option} 
                    optionText={option} 
                    count={index + 1}
                    handleDeleteEach={props.handleDeleteEach}
                />
            ))
        }
    </div>
);

export default OptionList;
