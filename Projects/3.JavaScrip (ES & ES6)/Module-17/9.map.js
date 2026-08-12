// map for each filter 


let arr  = [2,4,6,8,10];

// let double = [];

// for (let i = 0; i < arr.length ; i ++ ){

//     double.push(arr[i]*2);
// }
// console.log(double)


// const double = arr.map(function(elem){ // traditionall way function :
//     // console.log(elem);

//     return elem*2;
// })

// more short cut : const double = arr.map((elem) => elem*2);


const double = arr.map((elem) => { //  Arrow  function use for shortcut :
    // console.log(elem);

    return elem*2;
})
console.log(double);






console.log("=================forEach mathod=====================");



// forEach : simply iterate loops 

let rolls = [10,23,44,54];

rolls.forEach((element,index,array) => {
    console.log(element,index,array);
})



console.log("====================filter===================================");



// filter : filter out element  and create new array based on condition ;
let price = [100,230,400,500,600,700,800];

let expensiveProducts = price.filter((elem) => {
    // console.log(elem);


    // if(elem > 400){  // if consdtion use for traditional way 
    //     return true;
    // }

    return elem >=400;

    // return true; // return the all true value 

    return false; // return empty array;
})

console.log(expensiveProducts);



console.log("========================find============================");


// find : find out first element based on condition :

let prices = [100,230,400,500,600,700,800];

let expensiveProduct = prices.find((elem) => elem >= 500);  // only find out the specific elemet from array with out using for loop or if-else condition as a shortcut ways:

console.log(expensiveProduct);