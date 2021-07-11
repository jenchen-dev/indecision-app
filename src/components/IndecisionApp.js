import React from 'react';
import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import OptionList from './OptionList';

export default class IndecisionApp extends React.Component {
    state = {
        optionList: []
    }
    handleDeleteAll = () => {
        this.setState(() => ({ optionList: [] }));
    };
    handleDeleteEach = (optionToRemove) => {
        this.setState((prevState) => ({
            optionList: prevState.optionList.filter((option) => optionToRemove !== option)
        }));
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.optionList.length);
        const getOptionResult = this.state.optionList[randomNum];
        alert(getOptionResult);
    };
    addNewOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.optionList.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({ optionList: prevState.optionList.concat(option) }));
        // using "concat" to avoid mutate the original state array
    };
    componentDidMount() { // fire once component mounted to DOM: lifecycle method (only access in class components)
        try {
            const json = localStorage.getItem('options');
            const optionList = JSON.parse(json);
            if (optionList) {
                this.setState(() => ({ optionList }));
            }
        } catch(err) {
            // Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) { // only fire once props or state changed
        if (prevState.optionList.length !== this.state.optionList.length) {
            const json = JSON.stringify(this.state.optionList);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() { // fire before component goes away
        console.log('componentWillUnmount');
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer.';
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.optionList.length > 0}
                    handlePick={this.handlePick}
                />
                <OptionList 
                    optionList={this.state.optionList}
                    handleDeleteAll={this.handleDeleteAll}
                    handleDeleteEach={this.handleDeleteEach}
                />
                <AddOption addNewOption={this.addNewOption}/>
            </div>
        );
    }
}
