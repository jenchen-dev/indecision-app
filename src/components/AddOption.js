import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
    handleAddOption = (e) => {
        e.preventDefault();
        const newOption = e.target.elements.optionInput.value.trim();
        const error = this.props.addNewOption(newOption);
        this.setState(() => ({ error }));
        if (!error) {
            e.target.elements.optionInput.value = '';
        }
    };
    render() { // "handleAddOption" is not from parent class so use "this." instead of "this.props"
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}> 
                    <input type='text' name='optionInput'/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}
