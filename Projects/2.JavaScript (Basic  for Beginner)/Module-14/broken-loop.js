// Problem-1 : Broken loop (1) 

// Condition :

// Return  the sum of all the numbers from 1 to n (inclusive).


// function sumRange(n){
//     let total = 0  ;
//     for(let i = 0 ; i <= n ; i++ ){
        
//         total += i;
        

//     }
//     return total ;
// }

// console.log(sumRange(5));





// Prolem - 2: Condition 

// return the sum of all numbers in the array :

function sumArray(numbers){
    let total = 0;
    for (let i = 0 ; i< numbers.length ; i++){

        console.log("The conditional in Loops : ",numbers[i]);
        total += numbers[i].toFixed(2);

    }
    return total;
}

console.log(sumArray([10,20.2244, 30.524]));