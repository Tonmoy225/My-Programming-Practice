// == vs === ,scope and hosting

// == => loose eqaulity
console.log(1 == '1'); // true
console.log(1 == true); // true
console.log(0 == false); // true

// === => strict equality
console.log(1 === '1'); // false
console.log(1 === true); // false
console.log(0 === false); // false


console.log(null==undefined); // true
console.log(null===undefined); // false 




console.log("__________________---------------------------");

// Scope in JavaScript  : there are 3 type of scope in javascript :

//1.Global scope, 2.Block scope, 3.Function scope :
// gobal scope:

let name = "John"; // global scope

function greet(name) { // function scope
  console.log("Hello, " + name); // accessing global variable
}   

greet("tonmoy"); // Calling the function

// block scope:

if (true) {
  let age = 30; // block scope
  console.log("Age inside block: " + age); // accessing block variable
}   


//function scope:

function calculateSum(a, b) { // function scope
  let sum = a + b;  
    console.log("Sum: " + sum); // accessing function variable  
}
calculateSum(5, 10); // Calling the function


