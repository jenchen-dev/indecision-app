// arguments object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments); // allow to access arguments in ES5 function but not arrow function
    return a + b;
}

console.log(add(5, 6));


// this keyword - no longer bound in certain level

const user = {
    name: 'Jean',
    cities: ['London', 'New York', 'Paris'],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);
        
        const that = this; // 'this' cannot be accessed in nested function, so need to create a const 'that' be the same as 'this'
        this.cities.forEach(function (city) {
            console.log(that.name + ' has lived in ' + city);
        });
    }
}
user.printPlacesLived();

const user2 = {
    name: 'Jean',
    cities: ['London', 'New York', 'Paris'],
    printPlacesLived() {
        this.cities.forEach((city) => { // arrow function allows to access 'this' from parent
            console.log(this.name + ' has lived in ' + city); // forEach() always returns the value so no need to put 'return'
        });
    }
}
user2.printPlacesLived();

const user3 = {
    name: 'Jean',
    cities: ['London', 'New York', 'Paris'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city); // map​() or reduce() need to 'return' value
    }
}
console.log(user3.printPlacesLived());


// Challenge

const multiplier = {
    numbers: [1,2,3,4,5],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy); 
    }
};
console.log(multiplier.multiply());
