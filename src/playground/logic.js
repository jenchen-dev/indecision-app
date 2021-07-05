// JSX - Javascript XML (a Javascript syntax extension)

const user = {
    name: 'Jen Chen',
    age: 27,
    location: 'Taipei, Taiwan'
};

function getLocation(location) {
    if (location) { // if statements
        return <p>Location: {location}</p>;
    } else {
        return undefined;
    }
}

// ternary operators(? :) , logical and operator(&&)
const template = (
    <div>
        <h1>{user.name ? user.name : 'Anoymous'}</h1> 
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
