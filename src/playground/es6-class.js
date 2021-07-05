// class(類別) = blueprint
class Person {
    constructor(name='Anonymous', age=0) { //unique for each instance
        this.name = name;
        this.age = age;
    }
    getGreeting() { //shared methods (only can be used when called)
        return `Hello! I'm ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person { // Person的子類別
    constructor(name, age, major) {
        super(name, age); // 繼承母類別的property
        this.major = major;
    }
    hasMajor() {
        return !!this.major; // turn it to boolean value (to avoid encounter "null" or "undefined")
    }
    getDescription() { // could overwrite methods from parant class
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.` 
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasLocation () {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greet = super.getGreeting();
        if (this.hasLocation()) {
            greet += ` I'm visiting from ${this.homeLocation}.`
        }
        return greet;
    }
}

// instance(實體物件)
const other = new Person(); // will use default value if no params are given
console.log(other);
console.log(other.getDescription());

const me = new Student('Jean Chen', 20, 'English');
console.log(me);
console.log(me.getDescription());
console.log(me.hasMajor());

const traveler = new Traveler('Andy', 25, 'New York');
console.log(traveler.getGreeting());
const traveler2 = new Traveler();
console.log(traveler2.getGreeting());
