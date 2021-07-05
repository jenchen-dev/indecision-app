function square (num) { // function syntax from ES5
    return num * num;
}

console.log(square(5));

const squareArrow = (num) => { //arrow function from ES6
    return num * num;
}

const squareArrow2 = (num) => num * num; // function with single expression (shorthand syntax)

console.log(squareArrow(5));
console.log(squareArrow2(5));


// Challenge
const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

console.log(getFirstName('Mike Smith'));

const getFirstName2 = (fullName) => fullName.split(' ')[0];

console.log(getFirstName2('Mike Smith'));
