// hosting variable and function in javascript

// Variable hoisting:
console.log(x); // undefined
var x = 5; // variable declaration and initialization   

// Function hoisting:
greet(); // Calling the function before its declaration
function greet() { // function declaration
  console.log("Hello!"); 
}
greet(); // Calling the function after its declaration
