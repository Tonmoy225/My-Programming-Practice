// Problem 3 : Factorial of a Number

//WithOut Function :



const n = 5;
let x = 1;

for (let i = 1; i <= n; i++) {
  x = x * i;
  console.log(x);
}
console.log("The factorial Of n is  : ", x);



console.log("------------USing Function ----------");
// With Function :
let factNumber = 1;

function factorial(number) {
 

  for (let i = 1; i <= number; i++) {
     factNumber = factNumber * i;
    console.log(factNumber);

   
  }
   return factNumber;
}

const fact = factorial(5);
console.log("the number of Factorial is : ",fact);
