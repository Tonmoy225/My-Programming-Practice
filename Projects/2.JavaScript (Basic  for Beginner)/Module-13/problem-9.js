// Problem - 9 : Find the Leargest Number in  a array ;

let arr = [500, 120, 20, 5020, 1229];

let largest = arr[0];

for(let i = 0 ; i < arr.length ; i++){
    let currentElement = arr[i];
    if(currentElement > largest){
        largest = currentElement;
    }

    console.log('Current Element',currentElement);
}

console.log('The leargest element in the Array : ',largest);


// With funcrion : 

function largestNumber(arr){
    let largest = arr[0];

for(let i = 0 ; i < arr.length ; i++){
    let currentElement = arr[i];
    if(currentElement > largest){
        largest = currentElement;
    }

    console.log('Current Element',currentElement);
}
return largest;


}
let array = [500, 120, 20, 5020, 1229];
const bigNumber = largestNumber(array);
console.log('The Leargest Number in the Array find Using the Function : ',bigNumber);