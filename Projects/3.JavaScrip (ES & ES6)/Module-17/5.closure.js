// closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope. In JavaScript, closures are created every time a function is created, at function creation time.


function createCounter() {
    let counter = 0; // This variable is in the lexical scope of the createCounter function
   

    return function (){

        counter++; // This inner function has access to the count variable from its outer function's scope
        return counter;
    }
}

let counter = createCounter(); // Creating a closure by calling createCounter

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

function cashCounter(){
    let ammount = 0; // This variable is in the lexical scope of the cashCounter function

    return function(pay){
        console.log(pay);

        ammount+=pay; // This inner function has access to the amount variable from its outer function's scope
        return ammount ;
    }
}

let coffeShopCounter = cashCounter(); // Creating a closure by calling cashCounter

let resturentCounter = cashCounter(); // Creating another closure by calling cashCounter

console.log(coffeShopCounter(200)); // 0   

console.log(resturentCounter(50)); // 50 tk for this another function memory to use same fuction 