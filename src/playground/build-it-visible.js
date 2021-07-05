// console.log('Visibility Toggle is running!');

// let visibility = false;

// const detail = 'Hey, how are you today?'

// const showDetail = () => {
//     visibility = !visibility;
//     render();
// };

// const appRoot = document.getElementById('app');
// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={showDetail}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && <p>{detail}</p>}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// render();

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide Detail' : 'Show Detail'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>This is the detail!</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
