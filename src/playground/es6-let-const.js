var nameVar = 'Jean';
var nameVar = 'Andrew'; // "var" can be redefined and reassigned
console.log('nameVar', nameVar);

let nameLet = 'Chris';
nameLet = 'Julie'; // "let" can be reassigned, but cannot be redefined
console.log('nameLet', nameLet);

const nameConst = 'Frank'; // "const" cannot be redefined and reassigned
console.log('nameConst', nameConst);

// all of them are with function scope

function getPetName() {
    var petName = 'Fatty';
    return petName;
}

getPetName();

// Block level scoping (const & let): only access the data in certain code block

const fullName = 'Jean Chen';

if (fullName) {
    const firstName = fullName.split(' ')[0]
    console.log(firstName);
}

console.log(firstName);
