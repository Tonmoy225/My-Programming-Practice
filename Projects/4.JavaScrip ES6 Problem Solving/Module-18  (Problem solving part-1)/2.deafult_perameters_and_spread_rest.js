/* 
problem 1 : Flexible total calculator 
CalaculateTotal (...price) using rest params , sums any number of prices , with a default discount = 5 .

Example : calculateTotal (0,100,200,300) -> 600
Example : calculateTotla (10,100,200) -> 270   (10 = discount%)
*/

//Simple rule: discount is Always the first argument : 
console.log("===========================problem : 1=======================");

function calculateTotal (discount , ...prices){

    if(!discount){
        discount = 5;
    }

    console.log("The Discount : ",discount,"The Price : ",prices);

    // let total = 0;

    // for (let i = 0 ; i < prices.length ; i++){ // traditiona way 
    //     total = total + prices[i];
    //     console.log(total);
    // }
    // return total;

    let total = prices.reduce(  // ES6 way to sum or iterate prices sum ;
        (accumulator,currentValue) => accumulator + currentValue
     );
    
    let discountAmmount = (total * discount) / 100;

    console.log(discountAmmount);

    let totalAfterDiscount = total - discountAmmount ;
    console.log("Total prices After apply Discount : ",totalAfterDiscount);

    

    return total;
    

    
}

console.log(calculateTotal(0,100,200,50,300));





console.log("====================Problem :2 ===========================");



/* 
Problem -2 : Merge & Deduplicate arrays:

Merge two arrays and remove duplicates using spread + set ;


Example : [1,2 ,3 ] + [2,3,4] -> [1,2,3,4]
*/

let arr1 = [10,20,30,40,50];
let arr2 = [50,60,20,90];
let mergedArr = [...arr1,...arr2];

console.log(mergedArr);


// Using traditional way to remove duplicate : 

// let newArr = [];

// for( let i = 0 ; i < mergedArr.length ; i ++ ){

//     if (!newArr.includes(mergedArr[i])){
//         newArr.push(mergedArr[i]);
//     }
   
// }
// console.log(newArr);


let newArr = [...new Set(mergedArr)]; // using spread + Set to made a new array which remove duplicate ...using the ES6 ways


let newArr2 = Array.from(new Set(mergedArr)); // 2nd way to Deduplicate using from method on array 

console.log(newArr);


