// Problem-10 : Find the Smallest Number in the Array:


// Problem - 9 : Find the Leargest Number in  a array ;

let arr = [500, 120, 20, 5020, 1229];

let smallest = arr[0];

for(let i = 0 ; i < arr.length ; i++){
    let currentElement = arr[i];
    if(currentElement < smallest){
        smallest = currentElement;
    }

    console.log('Current Element',currentElement);
}

console.log('The smallest element in the Array : ',smallest);


// With funcrion : 

function smallNumber(arr){
    let smallest = arr[0];

for(let i = 0 ; i < arr.length ; i++){
    let currentElement = arr[i];
    if(currentElement < smallest){
        smallest = currentElement;
    }

    console.log('Current Element',currentElement);
}
return smallest;


}
let array = [500, 120, 20, 5020, 1229,3,7,9,4];
const smallNumbers = smallNumber(array);
console.log('The small Number in the Array find Using the Function : ',smallNumbers);
