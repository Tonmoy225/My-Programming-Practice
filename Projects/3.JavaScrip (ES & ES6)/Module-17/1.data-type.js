

//primitive  Data Types in JavaScript

const name = "John"; // String
const age = 30; // Number
const isStudent = true; // Boolean
const address = null; // Null
const phoneNumber = undefined; // Undefined 

console.log(typeof name, typeof age, typeof isStudent, typeof address, typeof phoneNumber);


console.log("__________________---------------------------");


// Non-primitive Data Types in JavaScript

const person = { name: "John", age: 30 };   // Object
const numbers = [1, 2, 3, 4, 5]; // Array   
function greet() { // Function
  console.log("Hello!");
}   
greet(); // Calling the function

console.log(typeof person, typeof numbers, typeof greet);

