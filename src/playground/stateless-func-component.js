// stateless functional component (no state, but has props)
const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};

ReactDOM.render(<User name='Jean' age={26}/>, document.getElementById('app'));

// class and stateless functional component can be used together
