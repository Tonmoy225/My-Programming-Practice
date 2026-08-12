
// Slice :

const friut = ['apple','banana','mango','orange','grape'];

const sliced = friut.slice(1,3);

// console.log(sliced);


//reduce mathods:

let arr = [11,23,44,5,55];

let sum = arr.reduce((accumulator,element,index,array) =>{

     console.log('Accumulator :',accumulator,'Element :',element,index,array);

    return accumulator + element;
    console.log(accumulator,element,index,array);
})

console.log(sum);