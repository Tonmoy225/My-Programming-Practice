
// const friends = ['abul','babul','cabul','dabul'];

// const afterReverse = [];

// for(const friend of friends){

//     console.log(friend);

//     afterReverse.unshift(friend);
//     console.log(afterReverse);
// }

// forward >>> 

//  const digits = [1,2,3,4,5,6];

// for( let i = 0 ; i < digits.length ; i++){
//     console.log('index:',i, 'Value:',digits[i]);
// }


// for loop using reverse type:3 

 const digits = [1,2,3,4,5,6];

 const reversedDigits = [];

for(let i = digits.length - 1 ; i >= 0 ; i--){
    console.log('index:',i, 'Value:',digits[i]);

    reversedDigits.push(digits[i]);

    console.log(reversedDigits);
}