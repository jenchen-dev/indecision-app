class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
        this.handleDeleteEach = this.handleDeleteEach.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.addNewOption = this.addNewOption.bind(this);
        this.state = {
            optionList: props.optionList
        };
    }
    componentDidMount() { // fire once component mounted to DOM: lifecycle method (only access in class components)
        console.log('fetching data');
    }
    componentDidUpdate(prevProps, prevState) { // only fire once props or state changed
        console.log('saving data');
    }
    componentWillUnmount() { // fire before component goes away
        console.log('componentWillUnmount');
    }
    handleDeleteAll() {
        this.setState(() => ({ optionList: [] }));
    }
    handleDeleteEach(optionToRemove) {
        this.setState((prevState) => ({
            optionList: prevState.optionList.filter((option) => optionToRemove !== option)
        }));
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.optionList.length);
        const getOptionResult = this.state.optionList[randomNum];
        alert(getOptionResult);
    }
    addNewOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.optionList.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({ optionList: prevState.optionList.concat(option) }));
        // using "concat" to avoid mutate the original state array
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

IndecisionApp.defaultProps = {
    optionList: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    );
};

const OptionList = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteAll}>Remove All</button>
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
};

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

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this); //bind the props in this class to it's own method
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const newOption = e.target.elements.optionInput.value.trim();
        const error = this.props.addNewOption(newOption);
        this.setState(() => ({ error: error }));
    }
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

ReactDOM.render(<IndecisionApp optionList={['Washing dishes', 'Shopping']} />, document.getElementById('app'));
