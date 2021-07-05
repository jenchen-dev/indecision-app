let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

// JSX does not have built-in data binding => so we need to manually re-render
const renderCounterApp = () => {
    const template = ( // an object
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(template, appRoot); // object cannot be rendered, so we create "appRoot" to render on
};

renderCounterApp();
