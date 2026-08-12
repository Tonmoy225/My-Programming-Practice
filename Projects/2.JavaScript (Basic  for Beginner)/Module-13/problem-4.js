// Problem-4 : FizzBuzz ( 1 to N );

// Loop through numbers from 1 to N . if a number is dividabl by 3 ,print 'Fizz' ; if divisible by 5 the print 'Buzz' ; if divisible by both , print 'FizzBuzz' ; OtherWise , print the number itself ,



// withOut Loop :
// let num = 14 ; 

// if (num % 3 === 0 &&  num % 5 === 0){
//     console.log("Fizz-Buzz");
// }
// else if(num % 3 === 0){
//     console.log("Fizz");
// }
// else if(num % 5 === 0){
//     console.log("Buzz");
// }
// else{
//     console.log('Not Divisible by 3 or 5 ');
// }




/// With Loop Use 



let number = 30;

for (let i = 1 ; i <= number ; i++ ){

    console.log('>>',i);

    if 
     ( i % 3 === 0 && i % 5 === 0){
        console.log('Fizz-Buzz');
    }
    else if (i % 5 === 0 ){
        console.log("Buzz");
    }
    else if(i % 3 === 0 ){
        console.log("Fizz");
    }
    else {
        console.log("Not Divisible by 3 or 5 ");
    }
}



// with Function 



console.log('----------------------With Function _--------------------');

function fizzBuzz (numbers){
    for (let i = 1 ; i <= numbers ; i++ ){

    console.log('>>',i);

    if 
     ( i % 3 === 0 && i % 5 === 0){
        console.log('Fizz-Buzz');
    }
    else if (i % 5 === 0 ){
        console.log("Buzz");
    }
    else if(i % 3 === 0 ){
        console.log("Fizz");
    }
    else {
        console.log("Not Divisible by 3 or 5 ");
    }
}
return numbers;


}

console.log(fizzBuzz(15));


