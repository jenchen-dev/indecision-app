// use localStorage to store data (but will only be stored as 'string' datatype)
localStorage.setItem('name', 'Jean');

localStorage.getItem('name');

localStorage.removeItem('name');

// JSON (Javascript Object Notation) - string represention of a Javascript object or array

const json = JSON.stringify({ age: 26 }); // turn object to JSON format
JSON.parse(json).age; // return JSON format back to object and get the value
