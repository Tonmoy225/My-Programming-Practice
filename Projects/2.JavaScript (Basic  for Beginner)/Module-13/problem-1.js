// Problem 1 : Check a number is even or Odd

//Without Fuction or Normal Way: 

let number = 103;

if (number%2 === 0 ){
    console.log("Even Number ");
}else{
    console.log("Odd Number ");
}




console.log("-----------using Normal and Using Function ----------")
// With Function Use 
const numbers = 0;
function check (x){
    if( x%2 === 0 ){
        console.log('Even : ',x);
    }
    else{
        console.log('Odd : ',x);
    }
    return x;
}

const checkNumber = check(99);

console.log(checkNumber);